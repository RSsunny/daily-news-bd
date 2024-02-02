/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  generateMeta: {
    metadataBase: "https://your-production-url.com",
  },
};

export default nextConfig;
