const securityHeaders = [
  // Moved Content-Security-Policy to via netlify.toml
  {
    key: "Referrer-Policy",
    value: "same-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: ["images.prismic.io", "blogger.googleusercontent.com"],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/learn/:path*",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/media",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/bug-bounty",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/security",
        destination: "/404",
        permanent: false,
      },
    ];
  },
};
