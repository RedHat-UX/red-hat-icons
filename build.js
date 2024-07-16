import { sep, basename } from 'node:path';
import { globby } from 'globby';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import * as htmlMinify from 'html-minifier';

/* options for minification of the svg files */
const minifyOptions = {
  collapseWhitespace: true
}

const license = 'Red Hat, Inc. Creative Commons 4.0';
const getSVG = (svg) => 
  htmlMinify.minify(`<!-- © ${license} licensed -->${svg}`, minifyOptions);

const getContent = content =>
  `const t = document.createElement('template');t.innerHTML=\`${getSVG(content)}\`;export default t.content.cloneNode(true);`;

for (const path of await globby('src/**/*.svg')) {
  const [filename, category] = path.split(sep).reverse();
  await mkdir(new URL(`dist/${category}`, import.meta.url), { recursive: true });
  const svg = await readFile(new URL(path, import.meta.url), 'utf8');
  await writeFile(new URL(`dist/${category}/${filename}`, import.meta.url), getSVG(svg), 'utf8');
  await writeFile(
    new URL(`dist/${category}/${filename.replace(/\.svg$/, '.js')}`, import.meta.url),
    getContent(svg),
    'utf8'
  );
}
