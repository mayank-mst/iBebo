/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist", // GitHub Pages serves from the 'docs' folder
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
};

module.exports = nextConfig;

