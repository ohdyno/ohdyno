const nav = require("./_includes/shortcodes/nav")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy({ "favicons": "/" });
  eleventyConfig.addShortcode("nav", nav)
};