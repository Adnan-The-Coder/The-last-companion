import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  // Ensure compatibility with Bun
  serverExternalPackages: ['canvas']
};

async function setup() {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
}
setup();

export default nextConfig;
