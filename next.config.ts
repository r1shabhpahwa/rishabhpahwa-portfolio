import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export so the site can be hosted on Cloudflare Pages / GitHub Pages.
  // Build output lands in `out/`.
  output: "export",
  // Required for static export: no Image Optimization server at runtime.
  images: { unoptimized: true },
  // Emit each route as a directory with index.html — friendliest for static hosts.
  trailingSlash: true,
};

export default nextConfig;
