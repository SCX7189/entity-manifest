const fs = require('node:fs');
const path = require('node:path');
const Ajv2020 = require('ajv/dist/2020');
const addFormats = require('ajv-formats');

const root = path.join(__dirname, '..');
const schemaPath = path.join(root, 'schemas', 'entity-manifest.v1.schema.json');
const examplesDir = path.join(root, 'examples');

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);

const validate = ajv.compile(schema);

const exampleFiles = fs
  .readdirSync(examplesDir)
  .filter((name) => name.endsWith('.json'))
  .sort();

let hasError = false;

for (const file of exampleFiles) {
  const filePath = path.join(examplesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const valid = validate(data);

  if (valid) {
    console.log(`PASS ${file}`);
    continue;
  }

  hasError = true;
  console.error(`FAIL ${file}`);
  for (const err of validate.errors || []) {
    console.error(`  - ${err.instancePath || '/'} ${err.message}`);
  }
}

if (hasError) {
  process.exit(1);
}

console.log(`Validated ${exampleFiles.length} canonical example(s).`);
