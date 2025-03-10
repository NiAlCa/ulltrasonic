import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    localeDetection: false,
  },

  images: {
    domains: ['localhost'],
  },};

export default nextConfig;
