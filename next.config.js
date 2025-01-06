// @ts-check
const withPreact = require("next-plugin-preact");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
 enabled: process.env.ANALYZE === "true"
});

const http = require("http");

function redirectHandler(req, res) {
  res.statusCode = 301;
  res.setHeader("/twitter", "https://twitter.com/agcrisbp");
  res.end();
}

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: { locales: ["id-ID"], defaultLocale: "id-ID" },
  images: {
    domains: ['i.scdn.co', 'image-cdn-ak.spotifycdn.com', 'image-cdn-fa.spotifycdn.com', 'mosaic.scdn.co'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    esmExternals: false,
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = withBundleAnalyzer(withPreact(config));