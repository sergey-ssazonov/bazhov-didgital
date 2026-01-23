/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bazhov.imap66.ru",
        pathname: "/api/**",
      },
    ],
  },
};

export default nextConfig;
