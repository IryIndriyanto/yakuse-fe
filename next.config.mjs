/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'revou-finalproject-backend-production.up.railway.app',
        },
      ],
    },
  };

export default nextConfig;
