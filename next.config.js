/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digitalpress.fra1.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "static.ghost.org",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
