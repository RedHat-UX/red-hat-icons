# @rhds/icons

## 1.1.2

### Patch Changes

- 9d88cea: Work better with JSPM generator (hopefully)

## 1.1.1

### Patch Changes

- 75be1a6: Fixed package exports

## 1.1.0

### Minor Changes

- 084c0a5: Adds JavaScript module, which exports each icon set as a map of icon names to SVG DOM nodes.

  ```typescript
  import * as Icons from "@rhds/icons";

  document.body.append(Icons.social.get("rss"));
  document.body.append(Icons.standard.get("api"));
  ```

  **⚠️ WARNING**: The JavaScript module loads _every_ available icon. Importing it
  to your project may negatively impact page loading performance.

  TypeScript users may import the `IconSetName` and `IconNameFor` types to ensure
  their projects use the correct string names.

  ```typescript
  import type { IconSetName, IconNameFor } from "@rhds/icons";

  const iconSet: IconSetName = "social";
  const iconName: IconNameFor<"social"> = "email";
  ```

### Patch Changes

- b098f96: Corrected icon export path from `./dist/{{set}}/*` to `./{{set}}/*`

## 1.0.0

### Major Changes

- d7bd841: ✨ Added Official Red Hat Brand Icons

  848 icons, in 4 sets: Microns, Social, Standard, and UI.
