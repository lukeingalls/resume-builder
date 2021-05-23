const path = require("path");

function getAliasPath(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "@components": getAliasPath("src/components/"),
      "@resume-sections": getAliasPath("src/components/resume/sections/"),
      "@resume-layouts": getAliasPath("src/components/resume/layouts/"),
      "@store": getAliasPath("src/store/"),
      "@utilities": getAliasPath("src/utilities/"),
    },
  },
};
