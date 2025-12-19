# Entity Manifest

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Entity Manifest is an **open specification** for publishing structured identity and relationships for websites, organizations and digital ecosystems via a canonical JSON document available at:

https://<your-domain>/.well-known/entity.json

It enables AI agents, semantic crawlers, and intelligent applications to understand and process the identity of a site in a predictable and machine-readable way.

---

## 🚀 What is Entity Manifest?

Entity Manifest provides a **standard JSON format** to declare:

- Who owns or operates a site
- What type of entity it represents
- Key affiliations or partnerships
- Capabilities and services it provides

Unlike scraping HTML or inferring relationships, this format delivers **explicit structured data** for:

- AI language models (LLMs) and autonomous agents
- Semantic search engines
- Knowledge graphs
- Distributed applications

---

## 🧠 Why it matters

Traditionally, machines try to guess context from unstructured HTML. This leads to:

- incomplete understanding
- fuzzy or incorrect relationships
- poor semantic indexing

Entity Manifest removes guesswork and empowers systems with **explicit identity metadata**.

---

## 🧪 Example Usage

### Scenario: Finding a Local Organization with an AI

A semantic agent wants to discover organizations in a city.

1. Agent requests the `entity.json` file.
2. Parses JSON for entity metadata and affiliations.
3. Uses this structured data to answer queries and build graphs.

GET https://example.org/.well-known/entity.json


---

## 📄 JSON Structure

At minimum, an Entity Manifest file contains:

- `entity`: core identity object
- `affiliations`: relationships to other entities
- `capabilities`: list of services or functions

See below for real examples.

---

## 🌍 Real Examples

### Example 1: Municipality

```json
{
  "entity": {
    "name": "City of Grenoble",
    "url": "https://grenoble.fr",
    "type": "Municipality",
    "description": "French city and metropolitan area located in the Alps."
  },
  "affiliations": [
    {
      "entity": "Université Grenoble Alpes",
      "role": "educationPartner",
      "url": "https://univ-grenoble-alpes.fr"
    }
  ],
  "capabilities": [
    "government-services",
    "tourism-info"
  ]
}
{
  "entity": {
    "name": "Lyon Amateur Football Club",
    "url": "https://cfalyon.org",
    "type": "SportsClub",
    "description": "Amateur football association based in Lyon."
  },
  "affiliations": [
    {
      "entity": "Fédération Française de Football",
      "role": "memberOf",
      "url": "https://fff.fr"
    }
  ],
  "capabilities": [
    "sports-activities",
    "membership-info"
  ]
}
{
  "entity": {
    "name": "TechX Solutions",
    "url": "https://techxsolutions.com",
    "type": "Organization",
    "description": "Company specializing in AI solutions."
  },
  "affiliations": [
    {
      "entity": "Global Cloud Partner",
      "role": "partner",
      "url": "https://partner-cloud.global"
    }
  ],
  "capabilities": [
    "cloud-services",
    "ai-integration"
  ]
}
```

&nbsp;

&nbsp;

📌 Contributing

See CONTRIBUTING.md for contribution guidelines.

📜 License

This project is licensed under the MIT License — see the LICENSE file.


---

# 2) Texte COMPLET à mettre dans **CONTRIBUTING.md**

Crée ce fichier et colle exactement ce texte :

```markdown
# Contributing to Entity Manifest

Thank you for your interest in contributing!  
This document explains how to contribute in a structured and effective way.

---

## 🛠️ How to Contribute

If you are the owner:
1. Open the file on GitHub.
2. Click the ✏️ button to edit.
3. Paste your changes.
4. Enter a clear commit message.

If not the owner:
1. Fork the repository.
2. Edit in your fork.
3. Open a Pull Request.

---

## 📌 Style Guidelines

Please follow these conventions:

- JSON indentation should be **2 spaces**
- Property names in JSON should use **camelCase**
- Clear and descriptive commit messages

---

## 📦 Adding Examples

To add a new JSON example:

1. Put it in an `examples/` folder
2. Make sure it’s valid JSON
3. Add a description in the main README

---

## 🙋 Support

If you need help:

- Open an issue
- Describe your goal clearly
