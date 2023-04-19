const nav = require("./_includes/shortcodes/nav")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy({ "favicons": "/" });
  eleventyConfig.addShortcode("nav", nav)
};
