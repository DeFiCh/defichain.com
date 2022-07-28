const {i18n} = require('./next-i18next.config');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `default-src 'none';` +
      `base-uri 'none';` +
      `child-src 'self' app.netlify.com;` +
      `form-action 'none';` +
      `frame-ancestors 'none';` +
      `img-src 'self' assets.coingecko.com files.coinmarketcap.com *.cloudfront.net data:;` +
      `media-src 'self';` +
      `object-src 'none';` +
      `script-src 'self' widgets.coingecko.com files.coinmarketcap.com app.netlify.com netlify-cdp-loader.netlify.app ${process.env.NODE_ENV === 'development' ? `'unsafe-eval'` : ''};` +
      `script-src-elem 'self' widgets.coingecko.com files.coinmarketcap.com ajax.googleapis.com;` +
      `style-src 'self' fonts.googleapis.com 'unsafe-inline' files.coinmarketcap.com 'unsafe-inline';` +
      `font-src 'self' fonts.gstatic.com;` +
      `connect-src 'self' api.coingecko.com api.coinmarketcap.com wss://cable.coingecko.com ocean.defichain.com api.github.com;` +
      `prefetch-src 'self';`
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  }
]

module.exports = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  i18n,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
