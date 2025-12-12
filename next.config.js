/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'me7aitdbxq.ufs.sh',
      },
    ],
  },
  transpilePackages: ['@21st-extension/react'],
  experimental: {
    turbopack: {
      // Explicitly set the project root for Turbopack.
      // This should be the directory where your package.json is located.
      root: __dirname,
    },
  },
}
}

module.exports = nextConfig
