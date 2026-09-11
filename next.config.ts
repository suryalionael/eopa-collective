import type { NextConfig } from "next";

// Static export for Bluehost shared hosting — see docs/ARCHITECTURE.md.
// No Node.js server, no Next.js runtime, no server actions, no image
// optimization API at runtime: `next build` must produce a plain /out
// directory of HTML/CSS/JS/assets deployable as-is to public_html/.
//
// GitHub Pages review deployment only (see docs/DEPLOYMENT.md): a GitHub
// Pages project site is served under /<repo-name>/, not the domain root,
// so every internal link and asset path needs that prefix. Bluehost is
// deployed at the domain root, so it must NOT have this prefix. Rather
// than hardcoding "/eopa-collective" into hrefs throughout the app (which
// would break the moment this ships to Bluehost), basePath is set only
// when the GitHub Actions workflow explicitly opts in via GITHUB_PAGES=true
// (see .github/workflows/deploy-pages.yml). Local dev and the real
// production build are unaffected — basePath is undefined, same as before.
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const githubPagesRepoName = "eopa-collective";
const basePath = isGithubPagesBuild ? `/${githubPagesRepoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPagesBuild ? basePath : undefined,
  // next/image does not automatically prefix a plain public/ image `src`
  // string with basePath when images.unoptimized is true (confirmed by
  // inspecting the built output — the logo's <img src> was left
  // unprefixed while every Link href and font/CSS chunk was correctly
  // prefixed). lib/basePath.ts reads this same value at build time so
  // Header/Media can prepend it manually and consistently.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
