// Single source of truth (alongside next.config.ts) for the GitHub Pages
// review-deployment basePath — see docs/DEPLOYMENT.md. Empty string for
// local dev and the real Bluehost production build.
//
// Why this exists: next/image does not automatically prefix a plain
// public/ image `src` string with basePath when images.unoptimized is
// true (verified against the built output). next/link and Next's own
// file-convention metadata (icon.png, apple-icon.png) already handle
// basePath correctly on their own — this constant is only needed for
// manual <Image src="/images/..."> usage in components/Header.tsx and
// components/Media.tsx.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
