# entity-manifest

A tiny, open file that lets websites describe **who they are** and **which hubs they belong to**.

Think: `robots.txt`, but for **entities and relationships**.

---

## What problem does this solve?

AI agents and search engines increasingly **select** a few answers instead of listing links.

Without an explicit entity declaration, AI systems often:
- guess affiliations,
- confuse official and unofficial sites,
- misinterpret suitability (local, educational, child-safe, etc.).

---

## The solution

Publish a small JSON file at:/.well-known/entity.json


This file lets a website declare:
- its identity (entity),
- its relationships (hubs, networks, communities).

Without this file, AI agents SHOULD avoid inferring identity or affiliation.

---

## Quick adopt (2 minutes)

1. Create this file on your site: /.well-known/entity.json

2. Paste an example from the `examples/` folder.

That's it.

---

## Non-goals

- No scoring
- No ranking
- No moral judgement
- No central authority

This project only describes **entities and relationships**.



