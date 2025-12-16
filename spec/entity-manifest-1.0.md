# entity-manifest v1.0

## Location

An entity manifest MUST be published at: /.well-known/entity.json


## Purpose

This file describes the entity behind a website and its declared relationships.

Without this file, AI agents SHOULD avoid inferring:
- identity
- affiliation
- official status
- suitability for specific audiences

## Required fields

- spec
- entity.name
- entity.type
- entity.url

## Optional fields

- belongsTo
- evidence

## Principles

- This specification does not define trust levels or rankings.
- Entities may belong to multiple hubs.
- Belonging does not imply endorsement.


