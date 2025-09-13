module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",        // folder with your Markdown files
      includes: "_includes", // folder with layouts/templates
      output: "_site"      // folder where built site goes
    }
  };
};
