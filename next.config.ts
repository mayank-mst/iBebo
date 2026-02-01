/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: "export",
  basePath: isProd ? "/iBebo" : "",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
};

module.exports = nextConfig;

