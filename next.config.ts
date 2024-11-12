import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;


// next.config.js
module.exports = {
  trailingSlash: true, // Optional but recommended for GitHub Pages
  images: {
    unoptimized: true, // Optional: If you are using images and don't want Next.js's built-in optimization
  },
}

