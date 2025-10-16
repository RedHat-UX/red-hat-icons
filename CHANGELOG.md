# @rhds/icons

## 2.0.0

### Major Changes

- 102f634:
  #### ⛔️ Breaking changes

  - Removed `auto-light-dark-mode-fill` UI icon. Please use `auto-light-dark-mode` instead.

  **Before**

  ```html
  <rh-icon set="ui" icon="auto-light-dark-mode-fill"></rh-icon>
  ```

  **After**

  ```html
  <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
  ```

  #### ⚠️ Potentially breaking changes

  ##### ✨ AI Experiences

  The `new` and `new-fill` UI icons have been updated and are no longer using the "sparkle" metaphor. Therefore, this may potentially break implementations and/or uses of `new` or `new-fill` to symbolize AI experiences.

  Where `new` or `new-fill` are used to symbolize AI experiences, please use one of our new AI Experience icon instead:

  - ai-experience
  - ai-experience-fill

  **Before**

  ```html
  <rh-icon set="ui" icon="new"></rh-icon>
  <rh-icon set="ui" icon="new-fill"></rh-icon>
  ```

  **After**

  ```html
  <rh-icon set="ui" icon="ai-experience"></rh-icon>
  <rh-icon set="ui" icon="ai-experience-fill"></rh-icon>
  ```

### Minor Changes

- 102f634:
  #### ✨ Added 191 new UI icons, including new `fill` variations:

  - add-square
  - ai-experience
  - ai-experience-fill
  - ai-model
  - ai-model-fill
  - arrow-circle-down-left
  - arrow-circle-down-left-fill
  - arrow-circle-down-right
  - arrow-circle-down-right-fill
  - arrow-circle-up-left
  - arrow-circle-up-left-fill
  - arrow-circle-up-right
  - arrow-circle-up-right-fill
  - arrow-down-left
  - arrow-down-left-up-right-to-center
  - arrow-down-right
  - arrow-left-right
  - arrow-up-down
  - arrow-up-left
  - arrow-up-right
  - arrow-up-right-down-left-from-center
  - asleep
  - asleep-fill
  - attention-bell
  - attention-bell-fill
  - automation
  - bookmark
  - bookmark-fill
  - brightness-down
  - brightness-down-fill
  - brightness-up
  - brightness-up-fill
  - calendar
  - calendar-fill
  - catalog
  - catalog-fill
  - catalog-alt
  - catalog-alt-fill
  - check-clipboard
  - check-clipboard-fill
  - clip-text
  - clipboard
  - clipboard-fill
  - cloud-security
  - cloud-security-fill
  - cloud-tenant
  - cluster
  - cluster-fill
  - columns
  - columns-fill
  - comments
  - comments-fill
  - compress-arrows
  - container
  - container-fill
  - data-processsor
  - data-processsor-fill
  - data-sink
  - data-sink-fill
  - data-source
  - data-source-fill
  - degraded
  - degraded-fill
  - develop-and-train
  - draw
  - draw-fill
  - enterprise
  - enterprise-fill
  - expand-arrows
  - fingerprint
  - folder-open
  - folder-open-fill
  - folders
  - folders-fill
  - gear-group
  - hard-drive
  - hard-drive-fill
  - image
  - image-fill
  - import
  - import-alt
  - import-alt-fill
  - in-progress-check
  - infrastructure
  - infrastructure-fill
  - kubernetes-service
  - learn
  - learn-fill
  - location
  - location-fill
  - memory
  - memory-fill
  - microphone
  - microphone-fill
  - module
  - module-fill
  - monitoring
  - monitoring-fill
  - move-file
  - move-file-fill
  - network
  - network-fill
  - new-process
  - new-process-fill
  - not-started
  - not-started-fill
  - notification-active-alt
  - notification-active-alt-fill
  - open-drawer-left
  - open-drawer-left-fill
  - open-drawer-right
  - open-drawer-right-fill
  - optimize
  - optimize-fill
  - overflow-text
  - package
  - package-fill
  - panel-close
  - panel-close-fill
  - panel-open
  - panel-open-fill
  - paper-clip
  - path
  - path-fill
  - playground
  - playground-fill
  - plug
  - plug-fill
  - port
  - power
  - process-automation
  - process-automation-fill
  - regions
  - regions-fill
  - registry
  - registry-fill
  - replicator
  - replicator-fill
  - restore-window
  - restore-window-fill
  - robot
  - robot-fill
  - rocket
  - rocket-fill
  - route
  - running
  - save
  - save-fill
  - scale-balanced
  - severity-critical-fill
  - severity-minor-fill
  - severity-moderate-fill
  - severity-none-fill
  - severity-undefined-fill
  - share-alt
  - share-alt-fill
  - sidebar
  - sidebar-fill
  - speedometer
  - speedometer-fill
  - stop
  - stop-fill
  - stop-circle
  - stop-circle-fill
  - storage-domain
  - storage-domain-fill
  - sync-alt
  - task
  - task-fill
  - template
  - template-fill
  - tenant
  - tenant-fill
  - thumbnail-view-large
  - thumbnail-view-large-fill
  - thumbnail-view-small
  - thumbnail-view-small-fill
  - thumbtack
  - thumbtack-fill
  - tree-view
  - tree-view-fill
  - trend-down
  - trend-up
  - virtual-machine-center
  - virtual-machine-center-fill
  - windows
  - windows-fill
  - wrap-text
  - zone
  - zoom-in
  - zoom-out

  #### 🎨 Updated/improved the design of the following UI icons:

  - auto-light-dark-mode
  - blueprint
  - blueprint-fill
  - bug
  - bug-fill
  - collection
  - collection-fill
  - dislike
  - dislike-fill
  - embed
  - embed-fill
  - in-progress
  - like
  - like-fill
  - new
  - new-fill

  #### ⚠️ Deprecating the following UI icons:

  - connected-fill

## 1.3.1

### Patch Changes

- e2ee1fe: Added metadata.js to files list

## 1.3.0

### Minor Changes

- 01df6ec: Added `metadata.js` file, which exports a map of icon set names to set of icon names. Useful in SSR scenarios.

## 1.2.0

### Minor Changes

- 437d11a: ✨ Added standard icons:
  - `import`
  - `webhooks`
  - `run-pipeline`
  - `deployed-model`
  - `model-registry`
  - `storage-classes`
  - `data-connections`
  - `registered-model`
- 49e058f: ✨ Added ui icons:
  - `auto-light-dark-mode-fill`
  - `auto-light-dark-mode`
  - `dark-mode-fill`
  - `dark-mode`
  - `light-mode-fill`
  - `light-mode`

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
