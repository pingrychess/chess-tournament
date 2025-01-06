/** @type {import('next').NextConfig} */
// Configuration for GitHub Pages deployment
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/chess-tournament',
};

export default nextConfig;