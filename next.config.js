/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export const dynamicParams = false",
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_ADMIN_API_URL: 'https://smarteducation.shop/smarteducation_backend/public/admin/',
    NEXT_ADMIN_PUBLIC_API_STORAGE: 'https://smarteducation.shop/smarteducation_backend/public/'
    // NEXT_ADMIN_API_URL: "http://192.168.1.108:8002/admin/",
    // NEXT_ADMIN_PUBLIC_API_STORAGE: "http://192.168.1.108:8002/",
  },
};

module.exports = nextConfig;
