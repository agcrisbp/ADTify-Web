// @ts-check
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const http = require("http");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: { locales: ["id-ID"], defaultLocale: "id-ID" },
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'i.ibb.co',
        },
        {
            protocol: 'https',
            hostname: 'cdn.discordapp.com',
        },
        {
            protocol: 'https',
            hostname: 'i.scdn.co',
        },
        {
            protocol: 'https',
            hostname: 'media.discordapp.net',
        },
        {
            protocol: 'https',
            hostname: 'image-cdn-ak.spotifycdn.com',
        },
        {
            protocol: 'https',
            hostname: 'image-cdn-fa.spotifycdn.com',
        },
        {
            protocol: 'https',
            hostname: 'mosaic.scdn.co',
        },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = withBundleAnalyzer(config);