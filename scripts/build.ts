import { join, sep } from 'node:path';
import { glob, mkdir, readFile, writeFile } from 'node:fs/promises';
import * as htmlMinify from 'html-minifier';
import { fileURLToPath } from 'node:url';

/* options for minification of the svg files */
const minifyOptions = {
  collapseWhitespace: true
}

const license = 'Red Hat, Inc. CC-BY-4.0';
const getSVG = (svg: string) =>
  htmlMinify.minify(`<!-- © ${license} licensed -->${svg}`, minifyOptions);

const getContent = (content: string) =>
  `const t = document.createElement('template');t.innerHTML=\`${getSVG(content)}\`;export default t.content.cloneNode(true);`;

const sets = new Map<string, Set<string>>();

for await (const path of glob('src/**/*.svg', { cwd: process.cwd() })) {
  const [filename, category] = path.split(sep).reverse();
  const name = filename.split('.').shift()!;
  const outDir = fileURLToPath(new URL(`../${category}`, import.meta.url))
  await mkdir(outDir, { recursive: true });
  if (!outDir)
    throw new Error(`Could not make dir for ${category}/${filename}`)
  const inPath = new URL(join('..', path), import.meta.url)
  const outPathSvg = join(outDir, filename);
  const outPathJs = outPathSvg.replace(/\.svg$/, '.js')
  const outPathDTs = outPathSvg.replace(/\.svg$/, '.d.ts')
  const srcSvg = await readFile(inPath, 'utf8');
  const outSvg = getSVG(srcSvg);
  const outJs = getContent(srcSvg);
  await writeFile(outPathSvg, outSvg, 'utf8');
  await writeFile(outPathJs, outJs, 'utf8');
  await writeFile(outPathDTs, `declare const node: SVGSVGElement; export default node;`, 'utf8');
  if (!sets.has(category))
    sets.set(category, new Set())
  sets.get(category)?.add(name);
}

// for editor highlighting
const typescript = String.raw;

await writeFile(join(process.cwd(), 'icons.ts'), typescript`
export type IconSetName = ${Array.from(sets, ([key]) => typescript`
  | '${key}'`).join('')};

export type IconNameFor<SetName extends IconSetName> = MapKey<SetForKey<SetName>>;

type MapKey<T extends IconSet<any, any>> =
    T extends IconSet<infer K, infer _> ? K
  : never;

type SetForKey<SetName extends IconSetName> = ${Array.from(sets, ([key]) => typescript`SetName extends '${key}' ? typeof ${key}`).join(`
  : `)}
  : never;

class IconSet<K extends string, V> {
  #m: Map<K, V>;
  constructor(icons?: Record<K, V>) { this.#m = new Map(Object.entries(icons) as [K, V][]); }
  get(key: K): V { return this.#m.get(key); }
  keys(): IterableIterator<K> { return this.#m.keys(); }
  values(): IterableIterator<V> { return this.#m.values(); }
  entries(): IterableIterator<[K, V]> { return this.#m.entries(); }
}

${[...sets.entries()].map(([setName, icons]) => [typescript`
export const ${setName}: IconSet<${Array.from(icons, k => `"${k}"`).join(' | ')}, SVGSVGElement> = new IconSet({${Array.from(icons, iconName => typescript`
  '${iconName}': await import('./${setName}/${iconName}.js').then(m => m.default),`).join('')}
} as const);
`]).join('')}

`.trim(),
  'utf8');

