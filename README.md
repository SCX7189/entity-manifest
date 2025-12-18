# Entity Manifest
Make a website’s identity and affiliations explicit for AI systems — without inference or guesswork.

AI systems increasingly decide who you are, what you belong to, and how your content is grouped.
When identity signals are implicit, they guess — and they often guess wrong.

Entity Manifest is a small open standard that lets a website publish a single, canonical identity document at:
`/.well-known/entity.json`

It allows a site to declare:
- who it is (the entity behind the site)
- what type of entity it represents
- which organizations, hubs, or ecosystems it belongs to
- optional capabilities (booking, reservation, membership, same-day availability)

## Why this exists now

Modern AI systems summarize websites, build knowledge graphs, and route users to services.
Without an explicit identity anchor, they infer identity and affiliation from scattered signals:
content, links, metadata, heuristics.

This often leads to:
- misattributed ownership
- invented affiliations
- unclear authority

Entity Manifest replaces inference with declaration.


## Relation to schema.org

Schema.org allows websites to describe organizations and entities inside pages.
It does not provide a single, canonical, site-level identity declaration.

Entity Manifest complements schema.org by introducing:
- a dedicated identity document
- a stable, well-known publication location
- explicit roles and affiliations

Use schema.org for content.
Use Entity Manifest to declare who is behind the site.

## Quickstart (1 minute)

1. Create a JSON file named `entity.json`
2. Publish it at `/.well-known/entity.json`
3. Verify:
   - HTTP 200 response
   - valid JSON
   - stable URL (avoid redirects if possible)
4. Done — AI systems and agents can now fetch a canonical identity document.

## Example: local ecosystems (cities, clubs, associations, businesses)

Entity Manifest makes it possible to describe local ecosystems as declarative graphs,
instead of inferred directories.

A city can declare itself as a local ecosystem hub.
Independent entities — clubs, associations, businesses, professionals — publish their own
Entity Manifest and explicitly declare their affiliations.

Affiliations are not inferred.
They are declared, with clear provenance.

City Hub
  ↳ Football Club ── partnersWith ── Local Butcher
  ↳ Chess Association ── hostedBy ── Independent Bookshop
  ↳ Youth Association ── affiliatedWith ── Football Club
This allows AI systems and agents to:
- map local ecosystems reliably
- distinguish hubs from independent actors
- understand relationships between entities
- route users to actionable services without guesswork



