/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      'kajabi-storefronts-production.kajabi-cdn.com',
      'upload.wikimedia.org',
      'i.ytimg.com',
      'angartwork.akamaized.net',
      'i.scdn.co',
      'resources.tidal.com',
      'encrypted-tbn1.gstatic.com',
      'gstatic.com',
      'www.mirchi9.com',
      'www.pexels.com',
      'miro.medium.com',
      'cdn-images-1.medium.com',
    ],
  },
}

module.exports = nextConfig
