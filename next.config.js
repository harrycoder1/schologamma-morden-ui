/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "drive.google.com",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
          },
          {
            protocol: "http",
            hostname: "res.cloudinary.com",
          },
        ],
      },
}

module.exports = nextConfig
