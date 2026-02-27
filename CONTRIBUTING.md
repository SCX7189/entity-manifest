# Contributing to Entity Manifest

Thanks for contributing.

## Development workflow

1. Fork the repository.
2. Create a branch.
3. Make focused changes.
4. Run validation locally:

```bash
npm install
npm test
```

5. Open a Pull Request with a clear summary.

## Contribution guidelines

- Keep changes aligned with v1 scope (`/.well-known/entity.json`).
- Add or update tests/validation when behavior changes.
- Keep examples valid JSON with 2-space indentation.
- Document user-visible changes in `CHANGELOG.md`.

## Pull request checklist

- [ ] Spec/docs updated if needed
- [ ] Schema updated if contract changed
- [ ] Canonical examples still pass
- [ ] Backward compatibility impact explained
