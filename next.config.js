/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: '6q3qtzvyuz.ufs.sh',
        port: '',
        pathname: '/f/**',
      }
    ],
  },
  transpilePackages: ['gsap'],
};

module.exports = nextConfig;