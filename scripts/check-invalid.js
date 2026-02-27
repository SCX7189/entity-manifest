const fs = require('node:fs');
const path = require('node:path');
const Ajv2020 = require('ajv/dist/2020');
const addFormats = require('ajv-formats');

const root = path.join(__dirname, '..');
const schemaPath = path.join(root, 'schemas', 'entity-manifest.v1.schema.json');
const invalidDir = path.join(root, 'tests', 'invalid');

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);

const validate = ajv.compile(schema);

const invalidFiles = fs
  .readdirSync(invalidDir)
  .filter((name) => name.endsWith('.json'))
  .sort();

let hasUnexpectedPass = false;

for (const file of invalidFiles) {
  const filePath = path.join(invalidDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const valid = validate(data);

  if (!valid) {
    console.log(`PASS (expected invalid) ${file}`);
    continue;
  }

  hasUnexpectedPass = true;
  console.error(`FAIL (unexpected valid) ${file}`);
}

if (hasUnexpectedPass) {
  process.exit(1);
}

console.log(`Checked ${invalidFiles.length} invalid fixture(s).`);
