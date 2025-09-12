/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: '/repo-name',
  assetPrefix: '/repo-name/',
};

export default nextConfig;
