// Plugin main thread — runs inside Figma's sandbox.
// Receives parsed icon data from the UI, finds matching components
// in the open file, updates their description fields, and reports results.

figma.showUI(__html__, { width: 480, height: 500, title: 'RHDS Icon Metadata Sync' });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'sync') {
    const results = syncDescriptions(msg.icons);
    figma.ui.postMessage({ type: 'done', results });
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};

function syncDescriptions(icons) {
  // Build lookup: component name → comma-separated accepted metaphors
  const byName = new Map();
  for (const icon of icons) {
    if (icon.accepted_metaphors && icon.accepted_metaphors.length > 0) {
      byName.set(icon.name, icon.accepted_metaphors.join(', '));
    }
  }

  const updated = [];
  const alreadyCurrent = [];
  const seen = new Set();

  // Search all pages so the plugin works regardless of which page is active
  for (const page of figma.root.children) {
    const nodes = page.findAll(n =>
      (n.type === 'COMPONENT' || n.type === 'COMPONENT_SET') &&
      byName.has(n.name) &&
      !seen.has(n.name)
    );

    for (const node of nodes) {
      seen.add(node.name);
      const newDesc = byName.get(node.name);

      if (node.description === newDesc) {
        alreadyCurrent.push(node.name);
      } else {
        node.description = newDesc;
        updated.push(node.name);
      }
    }
  }

  // Icons in manifest but not found anywhere in the file
  const notInFile = [...byName.keys()].filter(name => !seen.has(name));

  return { updated, alreadyCurrent, notInFile };
}
