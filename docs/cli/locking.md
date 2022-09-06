---
title: File Locking
sidebar_position: 7
---

# File Locking

## List locked files

List all locked files in the project.

```bash
dvcs locks [--branch <branch_name>]
```

| Argument   | Alias | Description                                                          |
| ---------- | ----- | -------------------------------------------------------------------- |
| `--branch` | `-b`  | The branch to list locked files for. Defaults to the current branch. |

## Lock file(s)

Lock one or many files or directories within the project from being modified by others.

```bash
dvcs lock [<paths>...]
```

| Argument | Description                                                                                |
| -------- | ------------------------------------------------------------------------------------------ |
| `paths`  | File or directory paths to lock, separated by commas. At least one path must be specified. |

## Unlock file(s)

Unlock one or many files or directories within the project, allowing them to be modified again by others.

```bash
dvcs unlock [--force] [<paths>...]
```

| Argument  | Alias | Description                                                                                  |
| --------- | ----- | -------------------------------------------------------------------------------------------- |
| `--force` | `-f`  | Force unlock (must be a team admin or owner)                                                 |
| `paths`   |       | File or directory paths to unlock, separated by commas. At least one path must be specified. |
