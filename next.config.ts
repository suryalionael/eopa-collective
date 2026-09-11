import type { NextConfig } from "next";

// Static export for Bluehost shared hosting — see docs/ARCHITECTURE.md.
// No Node.js server, no Next.js runtime, no server actions, no image
// optimization API at runtime: `next build` must produce a plain /out
// directory of HTML/CSS/JS/assets deployable as-is to public_html/.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
