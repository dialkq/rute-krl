/** @type {import('next').NextConfig} */

// CROSS ORIGIN FIX
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://www.api.comuline.com/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;