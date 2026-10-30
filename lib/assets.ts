/** Prefix public assets when the same site is hosted under a GitHub Pages repository path. */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!base || !path.startsWith("/") || path.startsWith("//") || path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}
