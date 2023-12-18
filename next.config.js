/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export const dynamicParams = false",
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
