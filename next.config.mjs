/** @type {import('next').NextConfig} */

// Konfigurasi untuk menangani Cross-Origin Resource Sharing (CORS)
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/comuline-api/:path*',
        destination: 'https://comuline-api.zulio.workers.dev/:path*', 
      },
    ];
  },
};

export default nextConfig;