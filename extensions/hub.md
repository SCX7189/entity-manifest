# Hub Extension (Non-core)

This document describes an optional extension for ecosystem or hub manifests.

Status: experimental extension.

## Why this is an extension

Entity Manifest v1.0 focuses on `/.well-known/entity.json` identity declaration.
Hub semantics are intentionally outside core scope to keep v1.0 minimal and stable.

## Suggested file

Publish hub metadata at:

`/.well-known/hub.json`

## Suggested shape (non-normative)

```json
{
  "spec": "entity-manifest/hub-0.1",
  "hub": {
    "name": "Paris Local Network",
    "scope": "city"
  },
  "rules": [
    "no-adult-content",
    "no-illegal-activity"
  ]
}
```

This extension may evolve independently and can be promoted after core v1 adoption.
