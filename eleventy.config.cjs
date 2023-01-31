module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData('icons', async function() {
    const { globby } = await import('globby');
    return (await globby('src/**/*.svg')).map(x => `./${x}`);
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

