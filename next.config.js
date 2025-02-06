module.exports = {
  output: "export",
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts"],
  images: {
    domains: ["images.prismic.io"],
    unoptimized: true,
  },
};
