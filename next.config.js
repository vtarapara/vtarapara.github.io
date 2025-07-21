/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/vtarapara.github.io" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/vtarapara.github.io/" : "",
}

module.exports = nextConfig
