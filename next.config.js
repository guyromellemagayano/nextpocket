const NextBundleAnalyzer = require('@next/bundle-analyzer')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const dotenv = require('dotenv')

const { i18n } = require('./i18n.config.js')

// Load environment variables
dotenv.config()

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Content-Security-Policy',
    value: `frame-ancestors 'self' https://app.contentful.com https://app.eu.contentful.com`
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer'
  }
]

const headers = () => [
  {
    source: '/:path*',
    headers: securityHeaders
  }
]

const polyfills = config => {
  const originalEntry = config.entry

  config.entry = async () => {
    const entries = await originalEntry()

    if (
      entries['main.js'] &&
      !entries['main.js'].includes('/utils/polyfills.ts')
    ) {
      entries['main.js'].unshift('/utils/polyfills.ts')
    }

    return entries
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Environment variables
  env: {
    BUNDLE_ANALYZE: process.env.BUNDLE_ANALYZE,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_POCKETBASE_API_URL: process.env.NEXT_PUBLIC_POCKETBASE_API_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    I18NEXUS_API_KEY: process.env.I18NEXUS_API_KEY,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
  },

  // Basic Next.js settings
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  swcMinify: true,

  // Headers configuration
  headers,

  // Image optimization settings
  images: {
    dangerouslyAllowSVG: true,
    deviceSizes: [320, 420, 768, 1024, 1200, 1600],
    remotePatterns: [
      {
        hostname: 'images.ctfassets.net'
      },
      {
        hostname: 'images.eu.ctfassets.net'
      },
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'avatars.githubusercontent.com'
      },
      {
        hostname: 'tailwindui.com'
      }
    ],
    path: '/_next/image',
    loader: 'default'
  },

  // Webpack customization
  webpack(config, options) {
    // Circular dependencies detection
    if (!options.isServer || process.env.circularDependencies) {
      config.plugins.push(
        new CircularDependencyPlugin({
          exclude: /a\.js|node_modules/,
          failOnError: true,
          allowAsyncCycles: true,
          cwd: process.cwd()
        })
      )

      // Handle `fs` fallback
      config.resolve.fallback.fs = false
    }

    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    // Add polyfills
    polyfills(config)

    return config
  }
}

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZE !== 'false'
})

module.exports = withBundleAnalyzer(nextConfig)
