# Commit Message Guidelines

We follow a **conventional commit** style to keep commit history clean, consistent, and automation-ready.

---

## Format

<type>(scope?): <short description>

[optional body]

[optional footer]


### 🔖 Examples

- docs: add initial architecture overview
- feat(core): implement app registry discovery
- fix(router): correct path flattening logic
- refactor(cli): clean up argument parsing
- chore: update dependencies
- test(core): add unit tests for AppModule

---

## 📘 Types

| Type       | Description                          |
|------------|--------------------------------------|
| `feat`     | A new feature                        |
| `fix`      | A bug fix                            |
| `docs`     | Documentation-only changes           |
| `style`    | Code style (formatting, linting)     |
| `refactor` | Code change without fixing or adding |
| `test`     | Adding or fixing tests               |
| `chore`    | Maintenance tasks (build, deps, etc) |

---

## 🧠 Scope (optional but encouraged)

Examples: `core`, `registry`, `router`, `docs`, `cli`, `electron`, etc.

Use it to indicate which part of the code or docs the commit affects.

---

## 💡 Best Practices

- Use imperative mood: `"fix bug"` not `"fixed bug"`
- Keep subject line under 72 characters
- Avoid vague messages like `"update"` or `"stuff"`

---

## 🛠️ Tools

You can install a CLI helper like [commitizen](https://github.com/commitizen/cz-cli) later if desired.


---

✅ Either version is totally valid — yours is already good to commit as-is!

When you're ready:
```bash
git add docs/commit-guidelines.md
git commit -m "docs: add commit message guidelines"
git push
