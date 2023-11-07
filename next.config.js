/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "orionarquitetura.com.br" },
      { protocol: "https", hostname: "media.canva.com" }
    ]
  }
}

module.exports = nextConfig
