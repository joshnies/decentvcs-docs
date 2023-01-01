---
sidebar_position: 5
---

# Commits

## Push

Push local changes to remote as a new commit.

If there are any commits ahead of you, you will be prompted to either pull the latest changes first or forcefully push your changes.

:::caution

If you choose to force push, any commits ahead of yours will be **permanently deleted**, along with any files associated with those commits if they are not referenced anywhere else in the project.

:::

```bash
dvcs push [-y?] <message?>
```

| Argument  | Alias | Description                                     |
| --------- | ----- | ----------------------------------------------- |
| `message` |       | Message describing changes made in this commit. |
| `--yes`   | `-y`  | Skip confirmation prompt.                       |

:::note

Example:

```bash
dvcs push -y "fixed compression"
```

:::

## Sync

Sync your local project to the specified commit (or latest commit if not specified). Retains all local changes unless prompted to override.

```bash
dvcs sync [-y?] <commit_index?>
```

| Argument       | Alias | Description                                                           |
| -------------- | ----- | --------------------------------------------------------------------- |
| `commit_index` |       | Index of commit to sync to.                                           |
| `--yes`        | `-y`  | Skip confirmation prompt. This **will not** skip the override prompt. |

:::note

Example:

```bash
dvcs sync 3
```

:::

## Reset changes

Reset all local changes to be in sync with remote.

```bash
dvcs reset [-y?]
```

| Argument | Alias | Description               |
| -------- | ----- | ------------------------- |
| `--yes`  | `-y`  | Skip confirmation prompt. |

## Revert changes

Revert to the previous commit. **Note: This will also reset all local changes.**

```bash
dvcs revert [-y?]
```

| Argument | Alias | Description               |
| -------- | ----- | ------------------------- |
| `--yes`  | `-y`  | Skip confirmation prompt. |

## List changes

Print local changes compared to current remote commit.

```bash
dvcs changes
```

## Print commit history

```bash
dvcs history [--limit <limit?>]
```

| Argument  | Alias | Description                                           |
| --------- | ----- | ----------------------------------------------------- |
| `--limit` | `-l`  | Limit the number of commits to print. Defaults to 10. |
