/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'tailwindui.com',
    ],
  },
}

module.exports = nextConfig
