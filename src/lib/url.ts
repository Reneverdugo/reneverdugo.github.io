/**
 * Normalises a project link into a real public URL.
 *
 * Notion holds placeholder values like "https://Not public yet" for work that
 * has not launched, so anything that is not a parseable http(s) URL with a
 * dotted hostname is treated as "no public site" and the link is left out.
 */
export function publicUrl(raw?: string): string | null {
  if (!raw) return null;
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (!/^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i.test(url.hostname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}
