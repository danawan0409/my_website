/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/my_website";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? `${repoBasePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBasePath : "",
  },
  async rewrites() {
    if (isProd) {
      return [];
    }

    // Allow testing GitHub Pages-style URLs in local dev.
    return [
      { source: `${repoBasePath}`, destination: "/" },
      { source: `${repoBasePath}/:path*`, destination: "/:path*" },
    ];
  },
};

export default nextConfig;
