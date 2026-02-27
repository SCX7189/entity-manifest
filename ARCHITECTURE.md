# ARCHITECTURE CONTRACT

## 0. Purpose
- This repository defines and validates the `entity-manifest/1.0` specification for machine-readable identity metadata published at `/.well-known/entity.json`.
- It includes: normative spec text, JSON Schema, canonical examples, invalid fixtures, docs, and Node.js validation scripts.
- It does NOT host a production API, web application, authentication system, or provider-backed runtime integration.

## 1. Runtime & Deployment
- Framework/runtime: Node.js 20+ tooling for local/CI validation scripts (`scripts/*.js`), JSON Schema Draft 2020-12.
- Deployment platform: GitHub repository + GitHub Actions CI (`.github/workflows/validate.yml`).
- Environments:
  - Development: local `npm` execution of validation scripts.
  - Preview: pull request CI job running `npm test`.
  - Production: main branch artifact publication of spec/schema/docs (no executable service runtime in this repo).
- TODO (hosting target for published `/.well-known/entity.json` is intentionally external): inspect [docs/publish.md] for publication guidance when integrating into a website or API repository.

## 2. Public Interfaces (Contracts)
- Public endpoints/routes (if any): none in this repository.
- Public contracts provided by this repository:
  - Spec contract: [spec/entity-manifest-1.0.md]
  - JSON Schema contract: [schemas/entity-manifest.v1.schema.json]
  - Canonical example set: [examples/]
- Stability rules for response shapes:
  - For manifest documents, required keys and constraints are defined by the schema and spec.
  - Existing valid `entity-manifest/1.0` documents must remain valid for non-major updates.
- Backward compatibility policy:
  - Breaking contract changes require major spec version increment (per spec section 11).

## 3. Layered Structure (Non-negotiable)
- Routes/Controllers location: none currently.
- Core/Kernel location (if any): specification in [spec/], schema contract in [schemas/].
- Modules/Business logic location: deterministic validation logic in [scripts/].
- Infra/Integrations location: none currently (no external service clients).
- Shared Lib/Types location: schema/spec are source of truth; no standalone shared type module yet.

Rules:
- No business logic in routes/controllers.
- No provider calls outside infra.
- No secrets in client-side.
- If API/app code is introduced later, route handlers must remain thin and delegate logic to explicit modules.

## 4. Integrations Policy
Current integrations are build-time/local dependencies only.

- Service/provider: `ajv` JSON Schema validator.
  - Client location in repo: direct import in [scripts/lint-schema.js], [scripts/validate-examples.js], [scripts/check-invalid.js].
  - Entry function(s): `new Ajv2020(...)`, `ajv.compile(schema)`, `validate(data)`.
  - Forbidden patterns: no ad-hoc schema interpretation that diverges from JSON Schema contract.

- Service/provider: `ajv-formats`.
  - Client location in repo: same scripts under [scripts/].
  - Entry function(s): `addFormats(ajv)`.
  - Forbidden patterns: skipping URI/format checks for canonical validation paths.

No LLM, database, CMS, or third-party API provider integrations are present.

## 5. Environment Variables
- Required env vars (names only): none required for current scripts/CI flow.
- Scope per env (Dev/Preview/Prod): not applicable in current architecture.

Rules:
- No `NEXT_PUBLIC_` for secrets.
- Secrets only in deployment dashboard.
- If env vars are introduced, centralize resolution in `lib/env.ts` (or equivalent single module) before adoption.

## 6. Security & Access Control
- Auth method: none (no runtime API/UI in this repo).
- Preview/Prod protection: repository-level access controls and PR review process.
- CORS policy (if API): not applicable.
- Security headers / robots policy (if web): not applicable.
- Vulnerability reporting policy source: [SECURITY.md].

## 7. Observability
No request-serving runtime exists in this repository. For any future API/job addition, use this minimum shape and keep business logic independent from observability values:

```ts
interface ObservabilityResult {
  requestId: string
  routeOrJob: string
  runtimeEnv: "local" | "preview" | "production" | string
  stage?: string
  ok: boolean
  latencyMs: number
  model?: string
  inputTokens?: number
  outputTokens?: number
  costEstimateUsd?: number
  toolCalls?: Array<{ name: string; ok: boolean; latencyMs?: number; error?: string }>
  error?: { code: string; message: string; details?: string }
}
```

Minimum required fields on every execution path: `requestId`, `routeOrJob`, `runtimeEnv`, `ok`, `latencyMs`.

TODO (if runtime code appears): inspect [scripts/] and any future `app/api/*` or job entrypoints to enforce `ObservabilityResult` emission.

## 8. Build & Quality Gates
- lint: `npm run lint:schema`
- typecheck: not configured (JavaScript-only scripts at present).
- build: not configured (no compile/bundle step).
- build:strict (if present): not configured.
- tests/validation:
  - `npm run validate:examples`
  - `npm run test:invalid`
  - `npm test` runs the full validation chain.
- CI expectations:
  - GitHub Actions workflow [`.github/workflows/validate.yml`] runs `npm install` + `npm test` on push and pull request.

## 9. Workflow Rules
- Branch naming:
  - Mandatory for feature work: `feature/<short-name>`.
  - For Codex task branches in this environment, use `codex/<short-name>` when explicitly creating a branch.
- PR requirements:
  - Keep changes focused and aligned with V1 scope.
  - Update spec/docs/schema/examples together when contract changes.
  - Document backward compatibility impact.
- Release rules:
  - Version progress tracked in [CHANGELOG.md] and roadmap in [ROADMAP.md].
  - Contract-breaking schema/spec updates require major version bump.

## 10. Non-Negotiables (Summary)
- Treat [spec/entity-manifest-1.0.md] and [schemas/entity-manifest.v1.schema.json] as the source of truth.
- Keep scripts deterministic; no hidden network calls in validation paths.
- Do not add runtime business logic to CI/workflow files.
- Preserve `entity-manifest/1.0` compatibility unless a major-version change is intentional and documented.
- Keep canonical examples in [examples/] valid against the current schema.
- Keep invalid fixtures in [tests/invalid/] failing validation.
- Do not introduce secrets into repository code or docs.
- Do not use client-exposed env vars for sensitive values.
- Keep error handling in scripts explicit and stable (`PASS/FAIL` semantics with non-zero exit on failure).
- Any future external provider integration must be isolated under `infra/`.
- Any future route/controller layer must be thin orchestration only.
- Any architectural change must update this contract first.

## 11. Change Process
Any architectural change MUST update this file first, then code.
