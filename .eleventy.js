const searchFilter = require("./src/filters/searchFilter");

module.exports = function(config) {
  config.addPassthroughCopy("src/js");

  config.addFilter("search", searchFilter);

  config.addCollection("movies", collection => {
    return [...collection.getFilteredByGlob("./src/movies/**/*.md")];
  });

  return {
    dir: {
      input: "src"
    },
    passthroughFileCopy: true
  };
};
