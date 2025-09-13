// .eleventy.js
module.exports = function(eleventyConfig) {
  // Copy the `css` directory to the output `_site/css`
  eleventyConfig.addPassthroughCopy("css");
  
  // You can add other folders too (very common for images, js, fonts)
  // eleventyConfig.addPassthroughCopy("images");
  // eleventyConfig.addPassthroughCopy("js");
  
  // You can return your Config options (optional but common)
  return {
    dir: {
      input: "src",    // Your source files are in `src/`
      output: "_site"  // This is the default output directory
    }
  };
};