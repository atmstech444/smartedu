/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
  distDir: "build",
};

module.exports = nextConfig;
