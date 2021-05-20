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
      "@components": getAliasPath("components/*"),
      "@resume-sections": getAliasPath("src/components/resume/sections/"),
      "@resume-themes": getAliasPath("src/components/resume/themes/"),
      "@store": getAliasPath("src/store/"),
      "@utilities": getAliasPath("src/utilities/"),
    },
  },
};
