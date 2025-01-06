/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/chess-tournament',
  assetPrefix: '/chess-tournament/',
  trailingSlash: true,
};

export default nextConfig;