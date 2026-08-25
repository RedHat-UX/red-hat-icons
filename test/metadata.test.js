import { test } from 'node:test';
import assert from 'node:assert';
import { readFileSync, readdirSync } from 'node:fs';
import { load } from 'js-yaml';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const iconSetsSchema = JSON.parse(readFileSync('metadata/schema/icon-sets.schema.json', 'utf8'));
const manifestSchema = JSON.parse(readFileSync('metadata/schema/icon-manifest.schema.json', 'utf8'));

const validateIconSets = ajv.compile(iconSetsSchema);
const validateManifest = ajv.compile(manifestSchema);

const files = readdirSync('metadata').filter(f => f.endsWith('.yaml'));

for (const file of files) {
  test(`metadata/${file} is valid YAML`, () => {
    const content = readFileSync(`metadata/${file}`, 'utf8');
    assert.doesNotThrow(() => load(content), `Failed to parse metadata/${file}`);
  });

  test(`metadata/${file} matches schema`, () => {
    const data = load(readFileSync(`metadata/${file}`, 'utf8'));
    const validate = file === 'icon-sets.yaml' ? validateIconSets : validateManifest;
    const valid = validate(data);
    assert.ok(valid, JSON.stringify(validate.errors, null, 2));
  });
}
