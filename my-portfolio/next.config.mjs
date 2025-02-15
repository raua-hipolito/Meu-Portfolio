/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port:'',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        port:'',
        pathname: '**',
      },
    ],
  }
};

export default nextConfig;
