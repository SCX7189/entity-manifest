# Entity Manifest

Entity Manifest is an open specification for publishing machine-readable identity metadata at:

`https://<your-domain>/.well-known/entity.json`

It helps agents, search systems, and applications consume explicit identity signals instead of inferring them from unstructured pages.

## Status

- Version: `entity-manifest/1.0`
- Stability: V1 baseline
- Scope: identity declaration only

### Non-goals

- Trust scoring or rankings
- Central authority or approval workflow
- Endorsement by affiliation

## What problem this solves

AI and indexing systems frequently infer identity and relationships from incomplete context. Entity Manifest provides explicit declarations for:

- who an entity is
- what type of entity it is
- where it is officially represented
- optional declared relationships and supporting evidence

## Quickstart

### 1. Publish

Create `/.well-known/entity.json`:

```json
{
  "spec": "entity-manifest/1.0",
  "entity": {
    "name": "Boulangerie Dupont",
    "type": "local-business",
    "url": "https://boulangerie-dupont.fr"
  }
}
```

### 2. Validate

```bash
npm install
npm run lint:schema
npm run validate:examples
npm run test:invalid
npm test
```

## Repository map

- `spec/entity-manifest-1.0.md`: normative specification
- `schemas/entity-manifest.v1.schema.json`: JSON Schema 2020-12
- `examples/`: canonical V1 examples
- `examples/experimental/`: non-canonical or extension examples
- `extensions/hub.md`: optional extension proposal
- `docs/`: practical documentation

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).
