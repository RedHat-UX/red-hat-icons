import fs from 'node:fs';
import { dirname, basename, join, relative } from 'node:path';
import { globby } from 'globby';

const cwd = process.cwd();
const icons = await globby('./src/**/*.svg', {
  cwd,
  absolute: true
});

for (const icon of icons) {
  const d = dirname(icon);
  const b = basename(icon);
  const newName = join(d, b
    .replaceAll('Icon-Red_Hat-', '')
    .replaceAll('-Black-RGB', '')
    .replaceAll('_', '-')
    .replace(/(?:\s)+/g, '-')
    .toLowerCase()
    .replace('-a.svg', '.svg')
    .replace('-b.svg', '-alt.svg')
    .replace('-a-2-color-rgb', '-duotone')
    .replace('-square-black-and-white.svg', '-duotone.svg')
    .replace('-square-black.svg', '-alt.svg')
    .replace('-black.svg', '.svg')
  );
  if (newName !== icon) console.log(relative(cwd, newName))
  await fs.promises.rename(icon, newName)
}
