# Contributing Guide (Solo)

## Branching
- `feat/<scope>` — new features
- `fix/<scope>` — bug fixes
- `chore/<scope>` — config, tooling, docs, seeds

## Commit Messages
Follow Conventional Commits, e.g.:
- `feat: seed trips and protect with RLS`
- `fix: owner_id type to text (matches JWT sub)`
- `chore: add supabase db push notes`

## PR Flow
1. Create branch
2. Commit in small chunks
3. Run lint, typecheck, tests, build
4. Open PR and self-review
5. Squash & merge, delete branch