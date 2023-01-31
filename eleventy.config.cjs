module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData('icons', async function() {
    const { globby } = await import('globby');
    return globby('src/**/*.svg');
  })
  return {
    dir: {
      input: '.',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: [
      'html',
    ],
  };
};

