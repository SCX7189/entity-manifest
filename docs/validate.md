# How to Validate

```bash
npm install
npm run lint:schema
npm run validate:examples
npm run test:invalid
```

- `lint:schema` checks schema integrity.
- `validate:examples` validates canonical examples against the schema.
- `test:invalid` verifies known-invalid manifests are rejected.
