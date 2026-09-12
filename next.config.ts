import type { NextConfig } from "next";

// Static export — see docs/ARCHITECTURE.md. No Node.js server, no Next.js
// runtime, no server actions, no image optimization API at runtime:
// `next build` must produce a plain /out directory of HTML/CSS/JS/assets
// deployable as-is.
//
// Production is GitHub Pages with a custom domain (eoperformancecollective.ca,
// DNS at GoDaddy) — see docs/DEPLOYMENT.md. A GitHub Pages *project* site is
// normally reachable under /<repo-name>/, which is why an earlier version of
// this file set `basePath` conditionally. That basePath build is what broke
// production: once a custom domain is attached to a GitHub Pages site, the
// site is served at the custom domain's root (confirmed by inspecting the
// live response — the default project URL now 301-redirects to the custom
// domain root), so a `/eopa-collective`-prefixed build 404s every asset.
// There is no longer a scenario where a basePath build is correct for this
// repository — do not reintroduce one without re-verifying that assumption
// against the live GitHub Pages configuration first.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
