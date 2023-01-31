import { sep, basename } from 'node:path';
import { globby } from 'globby';
import { mkdir, readFile, writeFile } from 'node:fs/promises';


// const getContent = (name: string, { height, width, path, xOffset = 0, yOffset = 0 }: IconSpec) =>
//   `import{svg}from'lit';export default svg\`<svg xmlns="http://www.w3.org/2000/svg" data-icon-name="${name}" height="${height}" width="${width}" viewBox="${[xOffset, yOffset, width, height].join(' ')}"><path d="${path}" /></svg>\`;`;

const getContent = content =>
  `const t = document.createElement('template');t.innerHTML=\`${content}\`;export default t.content.cloneNode(true);`;

for (const path of await globby('src/**/*.svg')) {
  const [filename, category] = path.split(sep).reverse();
  await mkdir(new URL(`dist/${category}`, import.meta.url), { recursive: true });
  await writeFile(
    new URL(`dist/${category}/${filename.replace(/\.svg$/, '.js')}`, import.meta.url),
    getContent(await readFile(new URL(path, import.meta.url), 'utf8')),
    'utf8'
  );
}
