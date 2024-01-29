/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/app/api/:path*',
        destination: '/app/api/:path*',
      },
    ];
  },
};
