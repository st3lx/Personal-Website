// .eleventy.js
module.exports = function(eleventyConfig) {
  // Pass through important static folders
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("public");

  // Optional: If you also want your JS, images, etc.
  // eleventyConfig.addPassthroughCopy("scripts");
  // eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
