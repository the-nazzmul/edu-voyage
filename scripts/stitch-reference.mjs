/**
 * Vertically stacks PNG/JPEG slices in public/design-reference/
 * (sorted by filename). Skips full-page.* and stitched output.
 * Run: npm run stitch-reference
 */
import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DIR = path.join(ROOT, "public", "design-reference");
const OUT = path.join(DIR, "full-page.png");

const EXT = /\.(png|jpe?g|webp)$/i;

async function main() {
  let files;
  try {
    files = await readdir(DIR);
  } catch {
    console.error("Missing folder:", DIR);
    process.exit(1);
  }

  const slices = files
    .filter(
      (f) =>
        EXT.test(f) &&
        !/^full-page\./i.test(f) &&
        !/^stitched\./i.test(f),
    )
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (slices.length === 0) {
    console.log(
      "No slice images in public/design-reference/ (add 01-hero.png, etc.), skipping stitch.",
    );
    process.exit(0);
  }

  const buffers = await Promise.all(
    slices.map((f) => sharp(path.join(DIR, f)).ensureAlpha().toBuffer()),
  );

  const metas = await Promise.all(
    buffers.map((buf) => sharp(buf).metadata()),
  );

  const maxW = Math.max(...metas.map((m) => m.width ?? 0));
  const resized = await Promise.all(
    buffers.map((buf, i) => {
      const w = metas[i].width ?? maxW;
      if (w === maxW) return buf;
      return sharp(buf)
        .resize({ width: maxW, withoutEnlargement: false })
        .ensureAlpha()
        .toBuffer();
    }),
  );

  const heights = await Promise.all(
    resized.map((buf) => sharp(buf).metadata().then((m) => m.height ?? 0)),
  );
  const totalH = heights.reduce((a, b) => a + b, 0);

  const composite = await sharp({
    create: {
      width: maxW,
      height: totalH,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite(
      resized.map((buf, i) => {
        let top = 0;
        for (let j = 0; j < i; j++) top += heights[j];
        return { input: buf, top, left: 0 };
      }),
    )
    .png()
    .toBuffer();

  await sharp(composite).toFile(OUT);
  console.log("Wrote", path.relative(ROOT, OUT), `(${slices.length} slices)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
