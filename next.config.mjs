/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    },
    compiler: {
      styledComponents: true,
    },
};

export default nextConfig;
