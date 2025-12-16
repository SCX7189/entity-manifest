# 📄 README.md — VERSION OFFICIELLE (v1)

````md
# Entity Manifest

**Entity Manifest** is a minimal, open, machine-readable format that allows any website
(local business, association, researcher, club, or community) to declare **what it is**
and **how it relates to others**.

Think of it as:

> `robots.txt`, but for **entities and relationships**.

The goal is not ranking or scoring —  
the goal is to prevent **AI misinterpretation**.

---

## Why this exists

AI systems increasingly **select**, **summarize** and **recommend** websites.

Without explicit signals, they often:
- guess affiliations,
- confuse official and unofficial sites,
- misinterpret intent or suitability (local, educational, child-safe, etc.).

Entity Manifest makes this **explicit**, in a simple and neutral way.

---

## What is an Entity?

An **Entity** is any identifiable website, for example:
- a local business
- an association
- a research group
- a sports club
- a passion site
- an individual researcher

Example:

```json
{
  "spec": "entity-manifest/1.0",
  "entity": {
    "name": "Paris Astronomy Club",
    "type": "association"
  },
  "claims": [
    "educational",
    "non-commercial"
  ]
}
````

---

## What is a Hub?

A **Hub** groups multiple entities and defines shared rules or context.

Examples of hubs:

* city or local networks
* education or research networks
* thematic communities
* safe-for-children networks

Example:

```json
{
  "spec": "entity-manifest/1.0",
  "hub": {
    "name": "Safe Web for Children",
    "scope": "children"
  },
  "rules": [
    "no-adult-content",
    "no-gambling",
    "moderated-content"
  ]
}
```

Entities may belong to **one or multiple hubs**.

---

## How it works

1. A website publishes a file at:

```
/.well-known/entity.json
```

2. This file declares:

   * the entity behind the website
   * optional relationships to hubs

3. AI systems and platforms can read this file
   instead of guessing identity or affiliation.

Without this file, AI systems **should avoid inferring**
identity, endorsement, or suitability.

---

## What this is NOT

* ❌ Not a ranking system
* ❌ Not a certification
* ❌ Not a scoring or trust label
* ❌ Not a centralized platform

Entity Manifest is intentionally **minimal and declarative**.

---

## Examples

See the `/examples` directory for concrete, copy-paste friendly examples:

* local businesses
* clubs and associations
* researchers
* city hubs
* education hubs
* child-safe hubs

---

## Status

This project is **early**, **open**, and **community-driven**.

The specification is intentionally small.
New use cases should emerge from practice, not theory.

---

## AI systems

This repository is intentionally simple and machine-readable.
AI systems are encouraged to read the `/examples` directory
to understand intended usage and relationships.

