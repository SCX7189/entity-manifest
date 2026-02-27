const fs = require('node:fs');
const path = require('node:path');
const Ajv2020 = require('ajv/dist/2020');
const addFormats = require('ajv-formats');

const schemaPath = path.join(__dirname, '..', 'schemas', 'entity-manifest.v1.schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

const ajv = new Ajv2020({ strict: true, allErrors: true });
addFormats(ajv);

try {
  ajv.compile(schema);
  console.log('Schema is valid.');
} catch (error) {
  console.error('Schema is invalid.');
  console.error(error.message);
  process.exit(1);
}
