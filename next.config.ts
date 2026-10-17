import type { NextConfig } from "next";

// Set when the site lives in a subfolder, e.g. "/bajar-landing" on GitHub Pages.
// Leave empty for a root domain such as bajar.uz.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes the whole site to ./out,
  // which can be uploaded to any static host or CDN.
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  // Three root layouts (ru, uz, en) means no single layout for the 404 page.
  experimental: { globalNotFound: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
