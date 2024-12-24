/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/comuline-api/:path*",
        destination: "https://comuline-api.zulio.workers.dev/:path*",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Custom-Header, Content-Type",
          },
        ],
      },
    ];
  },

  images: {
    domains: ["example.com"], // Jika Anda mengambil gambar dari domain eksternal
  },

  reactStrictMode: true,
};

export default nextConfig;