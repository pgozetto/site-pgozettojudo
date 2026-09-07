import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Mantém o projeto leve e publicável em hospedagens estáticas.
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
