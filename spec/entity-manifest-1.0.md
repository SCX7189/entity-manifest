# Entity Manifest v1.0

## 1. Scope

This specification defines a JSON document for publishing entity identity metadata at:

`/.well-known/entity.json`

The document enables machine-readable identity declarations.

This specification does not define trust scores, rankings, or endorsement mechanisms.

## 2. Conformance Language

The key words MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY are to be interpreted as described in RFC 2119 and RFC 8174.

## 3. Document Location

A conforming entity manifest MUST be available at:

`https://<domain>/.well-known/entity.json`

## 4. Versioning

The top-level `spec` field MUST be present and MUST equal:

`entity-manifest/1.0`

## 5. Required Fields

A manifest MUST include:

- `spec`
- `entity.name`
- `entity.type`
- `entity.url`

## 6. Optional Fields

A manifest MAY include:

- `claims`
- `belongsTo`
- `evidence`

## 7. Field Contract

| Field | Type | Required | Constraints |
|---|---|---|---|
| `spec` | string | yes | MUST be `entity-manifest/1.0` |
| `entity` | object | yes | MUST contain `name`, `type`, `url` |
| `entity.name` | string | yes | 1 to 200 chars |
| `entity.type` | string | yes | open vocabulary, 1 to 100 chars |
| `entity.url` | string | yes | absolute HTTPS URL |
| `claims` | object | no | key/value metadata object (non-empty) |
| `belongsTo` | string[] | no | non-empty array of absolute HTTPS URLs |
| `evidence` | object | no | optional supporting links |

### 7.1 `entity.type` vocabulary

`entity.type` uses an open vocabulary. Implementations SHOULD use stable, descriptive identifiers such as:

- `local-business`
- `association`
- `public-entity`
- `researcher`

The vocabulary is intentionally not a closed enum.

### 7.2 `claims` model

In v1.0, `claims` MUST be an object.

Each claim key SHOULD be stable and lowercase. Claim values MAY be:

- string
- number
- boolean
- array of primitive values

### 7.3 `belongsTo`

When present, `belongsTo` MUST be a non-empty array of absolute HTTPS URLs that point to parent manifests or ecosystem manifests.

Belonging does not imply endorsement.

### 7.4 `evidence`

When present, `evidence` SHOULD contain URLs supporting identity statements (for example registries, official profiles, or public documents).

## 8. URL and Size Constraints

- URL fields MUST use absolute HTTPS URLs.
- Arrays declared in this specification MUST NOT be empty.
- Implementations SHOULD keep manifests concise (for example under 64 KB).

## 9. Extensibility

Custom top-level fields MAY be added only under keys prefixed with `x-`.

Example:

```json
{
  "x-provider": "example-cms"
}
```

Extension fields SHOULD be documented by publishers.

## 10. Security and Trust Notes

This specification provides declaration, not verification.

Consumers SHOULD validate origin, transport security, and consistency with other evidence sources.

## 11. Backward Compatibility

- Patch or minor updates in the same major version SHOULD be non-breaking.
- Changes that break valid v1.0 manifests MUST increment the major version.

