# Launch Post Draft (v1.0.0)

Entity Manifest v1.0 is a minimal open spec for publishing machine-readable entity identity at `/.well-known/entity.json`.

Why this matters:

- local directories can consume explicit metadata instead of guessing
- AI agents can avoid unsupported identity/affiliation inference
- knowledge graph pipelines can ingest stable, declared signals

What is included:

- normative v1.0 spec
- JSON Schema 2020-12
- canonical examples + CI validation

What is not included:

- ranking/trust scores
- central authority or endorsement model

Quickstart:

```bash
npm install
npm test
```
