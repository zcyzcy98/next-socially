/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 设置为 false 可以跳过构建过程中的 TypeScript 类型检查
    ignoreBuildErrors: true,
  },
  experimental: {
    allowedDevOrigins: ["192.168.112.11"],
  },
};

export default nextConfig;
