const elasticlunr = require("elasticlunr");

module.exports = function(input) {
  var index = elasticlunr(function() {
    this.addField("title");
    this.addField("excerpt");
    this.addField("genres");
    this.setRef("id");
  });

  input.forEach(post => {
    index.addDoc({
      id: post.url,
      title: post.template.frontMatter.data.title,
      excerpt: post.template.frontMatter.data.excerpt,
      genres: post.template.frontMatter.data.genres
      //genre: post.template.frontMatter.data.genre
    });
  });

  return index.toJSON();
};
