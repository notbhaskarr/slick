import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async rewrites() {
    return [
      // Proxy /getitdone → letsgetitdone.vercel.app/getitdone
      {
        source: '/getitdone',
        destination: 'https://letsgetitdone.vercel.app/getitdone',
      },
      {
        source: '/getitdone/:path*',
        destination: 'https://letsgetitdone.vercel.app/getitdone/:path*',
      },
      // Proxy /trace → letstrace.vercel.app/trace
      {
        source: '/trace',
        destination: 'https://letstrace.vercel.app/trace',
      },
      {
        source: '/trace/:path*',
        destination: 'https://letstrace.vercel.app/trace/:path*',
      },
    ];
  },
};

export default nextConfig;
