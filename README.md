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

Once these declarations are available, AI systems no longer need to infer relationships.
  
As a result, AI systems and agents can:
- map local ecosystems reliably
- distinguish hubs from independent actors
- understand relationships between entities
- route users to actionable services without guesswork

## LLM behavior: before vs after (Berlin example)

The difference between inferred data and declared identity becomes clear
when querying a local ecosystem through an LLM.

### Test 1 — "Find a football association in Berlin"

**Without Entity Manifest (typical behavior):**
- generic listings
- vague descriptions
- no clear affiliation or role
- unclear how entities relate to each other

**With Entity Manifest:**
- declared football associations
- explicit affiliation to a local ecosystem (city, district, or hub)
- clear relationships with other local actors (clubs, associations, sponsors)
- structured, explainable response

### Test 2 — "Chess associations in Berlin"

**Without Entity Manifest:**
- fragmented results
- mixed official and unofficial entities
- inferred relationships

**With Entity Manifest:**
- declared chess associations
- explicit hosting or partnership relationships
- clear local scope and audience

### Test 3 — "Find a butcher in Berlin"

**Without Entity Manifest:**
- generic business listings
- no ecosystem context
- no understanding of local partnerships

**With Entity Manifest:**
- local butchers declaring their role
- explicit links to clubs, associations, or events
- clear positioning inside the local ecosystem

Entity Manifest does not make AI answers more exhaustive.
It makes them more reliable, structured, and explainable.

## Examples

See the `/examples` folder for minimal, copy/paste-ready manifests:
- `examples/city-hub.entity.json`
- `examples/football-club.entity.json`
- `examples/chess-association.entity.json`
- `examples/local-butcher.entity.json`

## LLM behavior: before vs after (Berlin example)

The impact of explicit identity and affiliation becomes visible
when querying a local ecosystem through a large language model (LLM).

The examples below illustrate typical differences between:
- inferred answers (without Entity Manifest)
- structured answers based on declared identity and relationships

### Test 1 — "Find a football association in Berlin"

**Without Entity Manifest (typical behavior):**
- generic listings or suggestions
- mixed official and unofficial entities
- inferred relationships based on names or locations
- no clear role or affiliation

**With Entity Manifest:**
- football clubs explicitly declaring their role
- clear affiliation to a local ecosystem (city, district, or hub)
- declared partnerships with local actors (associations, businesses)
- structured and explainable results

### Test 2 — "Chess associations in Berlin"

**Without Entity Manifest:**
- fragmented results
- difficulty distinguishing official associations from informal groups
- inferred hosting or partnerships

**With Entity Manifest:**
- chess associations declaring their activity and local scope
- explicit hosting relationships (e.g. hosted by a bookshop or cultural venue)
- clearer audience and participation model

### Test 3 — "Find a butcher in Berlin"

**Without Entity Manifest:**
- generic business listings
- no ecosystem context
- no understanding of local partnerships or community role

**With Entity Manifest:**
- local businesses declaring their activity and availability
- explicit links to clubs, associations, or local events
- clearer positioning within the local ecosystem

Entity Manifest does not make AI answers more exhaustive.
It makes them more reliable, structured, and explainable.

## Design principles

Entity Manifest follows a few strict principles:
- declarative, not inferred
- explicit relationships, not heuristics
- minimal vocabulary, no mandatory taxonomy
- complementary to existing standards
- designed for AI systems and autonomous agents

## Status

Entity Manifest is an early-stage open standard proposal.

The goal is to keep the specification minimal, validate real-world usefulness,
and iterate based on concrete implementations and feedback.

Contributions, critiques, and real deployments are welcome.

