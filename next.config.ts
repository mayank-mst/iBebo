/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist", // GitHub Pages serves from the 'docs' folder
  basePath: "/iBebo", // Replace with your repository name
  images: {
    unoptimized: false, // GitHub Pages does not support Next.js image optimization
  },
};

module.exports = nextConfig;

