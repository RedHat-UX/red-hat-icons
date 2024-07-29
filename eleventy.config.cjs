module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./docs/styles/");
  eleventyConfig.addPassthroughCopy("./docs/fonts/");
  eleventyConfig.addPassthroughCopy("./docs/javascript/");
  eleventyConfig.addGlobalData('iconSets', async function() {
    const { globby } = await import('globby');
    const sets = await globby('./*', {cwd: 'src', onlyDirectories:true});
    return Promise.all(sets.map(async set => {
      const dir =  `src/${set}`;
      const paths = await globby(`src/${set}/*.svg`);
      return {
        set,
        dir,
        icons: paths.map(x => x.replace(new RegExp(`src/${set}/(.*).svg`), '$1')),
      }
    }));
  })
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

