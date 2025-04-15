/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This setting ensures all relative links work correctly when deployed to a subfolder
  basePath: '',
  trailingSlash: true,
};

module.exports = nextConfig;
