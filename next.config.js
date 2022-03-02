/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")], // SCSS/SASS options
  },
  images: {
    domains: ["http://ufbsitecore.uat.ufbdirect.com"],
  },
};

module.exports = nextConfig;
