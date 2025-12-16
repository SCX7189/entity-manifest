# Entity Manifest

**Entity Manifest** is a minimal, open, machine-readable format that allows any website
(local business, association, researcher, club, or community) to declare *what it is*
and *how it relates to others*.

The goal is simple:  
👉 make websites understandable by humans **and** AI systems.

---

## Why this exists

Today:
- Websites describe themselves with marketing text.
- Platforms and AI systems must *guess* trust, intent, and relationships.

Entity Manifest makes this explicit.

It allows:
- entities to declare themselves
- hubs to define shared rules
- AI systems to read a clear graph of trust and context

---

## What is an Entity?

An **Entity** is any identifiable website:
- a local business
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
  "claims": ["educational", "non-commercial"]
}


