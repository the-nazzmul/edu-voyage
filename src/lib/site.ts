/**
 * Canonical site origin for metadata, sitemap, and robots.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://eduvoyage.com).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    try {
      return new URL(fromEnv).origin;
    } catch {
      /* ignore invalid URL */
    }
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
