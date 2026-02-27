# How to Publish

1. Create a JSON file at `/.well-known/entity.json`.
2. Set `spec` to `entity-manifest/1.0`.
3. Include required fields: `entity.name`, `entity.type`, `entity.url`.
4. Ensure all URLs are absolute HTTPS URLs.

Example:

```json
{
  "spec": "entity-manifest/1.0",
  "entity": {
    "name": "Independent Bakery",
    "type": "local-business",
    "url": "https://independent-bakery.example"
  }
}
```
