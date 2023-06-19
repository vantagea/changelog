// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/changelog',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
