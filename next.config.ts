import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        port: '',
        pathname: '/b/**',
      },
    ],
  },
  experimental: {
    inlineCss: true,
    reactCompiler: true,
    staleTimes: {
      dynamic: 30,
    },
    viewTransition: true,
  },
};

export default nextConfig;
