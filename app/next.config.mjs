// import bundleAnalyzer from '@next/bundle-analyzer'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: false,
//   openAnalyzer: false,
// })

// const withTranspileModules = transpileModules([
//   '@findify/sdk',
//   '@findify/analytics',
//   '@findify/change-emitter',
// ])

/**
 * @type {import('next').NextConfig}
 */
const config = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ctfassets.net',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{ source: '/:path*', headers: [
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'off',
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
      // Disable X-Frame-Options until we have fixed Formstack integration.
      //
      // {
      //   key: 'X-Frame-Options',
      //   value: 'SAMEORIGIN',
      // },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
    ] }]
  },
  webpack: (config) => {
    return config
  },
}

export default config