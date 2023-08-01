/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@import "src/assets/styles/main.scss";`,
  },
};

module.exports = nextConfig;
