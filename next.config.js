/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
        },
        {
          protocol: 'https',
          hostname: 'flagcdn.com',
        },
        {
          protocol: 'https',
          hostname: 'www.carlogos.org',
        },
      ],
    },
  }
