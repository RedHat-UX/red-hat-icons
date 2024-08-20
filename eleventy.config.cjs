// minimal DOM
class MiniHTMLTemplateElement {
  tagName;
  #innerHTML
  content = {};
  set innerHTML(html) {
    this.#innerHTML = html;
  };
  constructor(tagName) {
    this.tagName = tagName
    this.content.cloneNode = () => this.#innerHTML;
  }
}

class MiniDocument {
  createElement(tagName) {
    return new MiniHTMLTemplateElement(tagName)
  }
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./docs/styles/");
  eleventyConfig.addPassthroughCopy("./docs/fonts/");
  eleventyConfig.addPassthroughCopy("./docs/javascript/");
  globalThis.document = new MiniDocument();
  eleventyConfig.addGlobalData('iconSets', () => import('./icons.js'));
  return {
    dir: {
      input: './docs',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: [
      'html',
    ],
  };
};

