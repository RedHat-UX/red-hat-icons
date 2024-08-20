---
"@rhds/icons": minor
---
Adds JavaScript module, which exports each icon set as a map of icon names to SVG DOM nodes.

```typescript
import * as Icons from '@rhds/icons';

document.body.append(Icons.social.get('rss'));
document.body.append(Icons.standard.get('api'));
```

**⚠️ WARNING**: The JavaScript module loads *every* available icon. Importing it
to your project may negatively impact page loading performance.

TypeScript users may import the `IconSetName` and `IconNameFor` types to ensure
their projects use the correct string names.

```typescript
import type { IconSetName, IconNameFor } from '@rhds/icons';

const iconSet: IconSetName = 'social';
const iconName: IconNameFor<'social'> = 'email';
```
