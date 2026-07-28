# RHDS Icon Metadata Sync — Figma Plugin

A Figma plugin that reads the icon metadata manifests from this repository and writes the `accepted_metaphors` for each icon into its Figma component description field. Replaces manually maintained keyword lists in Figma with the curated data from the manifests.

## What it does

For each icon in the selected sets, the plugin:

1. Fetches the `metadata.yaml` for that set from GitHub
2. Finds the matching component or component set in the open Figma file by name (e.g. `rh-micron-close`, `rh-ui-icon-add`, `rh-icon-barn`)
3. Replaces the component's description with the icon's `accepted_metaphors`, joined as a comma-separated string
4. Reports how many were updated, already current, or not found

## Prerequisites

- Access to the **Red Hat icon library** Figma file
- Figma desktop app (plugin API requires the desktop app)
- The manifest PR must be merged to `main` before running against the main branch

## Installation

Figma plugins that are not published to the Community can be loaded directly from a local folder.

1. Clone this repository or download the `figma-plugin` folder
2. Open the **Red Hat icon library** file in Figma desktop
3. Go to **Plugins → Development → Import plugin from manifest…**
4. Navigate to the `figma-plugin` folder and select `manifest.json`
5. The plugin will appear under **Plugins → Development → RHDS Icon Metadata Sync**

## Usage

1. Open the Red Hat icon library file in Figma
2. Run **Plugins → Development → RHDS Icon Metadata Sync**
3. Select which icon sets to update (all are checked by default)
4. Set the **Branch or tag** field:
   - Use `main` after the metadata PR is merged
   - Use `feat/25-microns-manifest` to test before merge
5. Click **Load manifests** — the plugin fetches and parses the YAML from GitHub
6. Review the icon counts shown next to each set
7. Click **Apply to file** — the plugin updates all matching component descriptions
8. Review the results report:
   - **Updated** — components whose description was changed
   - **Already current** — components whose description already matched
   - **Not found in file** — icons in the manifest with no matching component name in the file

## Re-running after manifest updates

The plugin can be re-run any time the manifests are updated. Components already matching the manifest are skipped, so re-running is safe and idempotent.

## How descriptions are formatted

Each component description is set to the icon's `accepted_metaphors` list joined with `, `:

```
close, dismiss, clear field, remove chip, cancel overlay
```

Terms listed in `rejected_metaphors` are intentionally excluded. This removes misleading search terms (e.g. `delete` on the close icon) that were previously in the Figma library.

## Architecture

The plugin is split into two threads, as required by the Figma plugin API:

- **`ui.html`** — runs in an iframe with DOM and network access; fetches and parses YAML, sends data to the plugin thread
- **`code.js`** — runs in Figma's sandboxed plugin thread with document access; finds components and updates descriptions

No build step is required. Both files are plain JavaScript.
