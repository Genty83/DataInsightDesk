# Commit Message Guidelines

To ensure a consistent and readable commit history, all commits to the **DataInsightDesk** project must follow the **Conventional Commits** specification.

This format makes it easier to:
- Understand the purpose of a commit at a glance
- Generate changelogs automatically
- Automate release pipelines
- Keep a clean project history for future contributors (including you)

---

## Basic Format

```
<type>(optional-scope): <short summary>

[optional body]

[optional footer(s)]
```


### Example

```
feat(header): add maximize/restore toggle to window controls

This commit introduces Zustand state management for tracking window
maximize state. Will later integrate Electron APIs.

Related to #42
```

---

## Types

| Type       | Purpose                                                                 |
|------------|-------------------------------------------------------------------------|
| `feat`     | A new feature                                                           |
| `fix`      | A bug fix                                                               |
| `refactor` | A code change that neither fixes a bug nor adds a feature               |
| `style`    | Changes that do not affect meaning (e.g. formatting, spacing)           |
| `docs`     | Changes to documentation only                                           |
| `test`     | Adding or updating tests                                                |
| `chore`    | Maintenance tasks (e.g. tool configs, bumping dependencies)             |
| `perf`     | Performance improvements                                                |
| `ci`       | Changes to CI/CD configuration                                          |
| `build`    | Changes to build system (Vite, pnpm, tsconfig, etc.)                    |

---

## Scopes

Use `scope` to clarify **what part of the project** the change affects.

Examples:
- `header`
- `sidebar`
- `ribbon`
- `routing`
- `layout`
- `apps/home`
- `core/hooks`
- `electron`
- `docs`

> If you're unsure, it's okay to skip the scope — but it’s preferred when making layout or component changes.

---

## Summary Line

- Use **present tense** ("add", not "added" or "adds")
- Keep it short — under 72 characters
- No punctuation at the end

---

## Optional Body

Use this section to explain **why** the change was made, not just what was done.

Include:
- Context (problem, feature request)
- Reasoning (why this implementation)
- Notes on follow-up tasks

---

## Optional Footers

- Use to close issues (`Closes #123`)
- Mention related work (`Related to #456`)
- Add breaking change notes

---

## Breaking Changes

If a commit includes a **breaking change**, add this to the body:


---

## Example Commit Flow

```
bash
git add .
git commit -m "feat(layout): implement responsive sidebar toggle"
```