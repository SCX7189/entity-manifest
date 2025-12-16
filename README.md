# Entity Manifest

Entity Manifest is a small open standard that allows a website to explicitly declare:

- who it is (the entity behind the site)
- what type of entity it represents
- which organizations, hubs, or ecosystems it belongs to

The goal is to reduce ambiguity for AI systems, search engines, and automated agents.

## What this repository provides

- A simple JSON specification for an entity declaration
- A recommended location using the `.well-known` pattern
- Examples of how websites can expose identity and relationships in a machine-readable way

## Why this matters

AI systems increasingly summarize, classify, and rank web content.
Without explicit signals, they often infer identity and affiliation incorrectly.

Entity Manifest provides a clear, declarative signal instead of implicit guessing.

## Typical use cases

- Websites that want to declare their official identity
- Organizations belonging to a network, hub, or group
- Local governments, companies, communities, or projects
- AI agents and crawlers needing reliable entity metadata

## Format

The manifest is published as a JSON file at: /.well-known/entity.json


## Status

This project is an early-stage open standard proposal.
Feedback and discussion are welcome.



