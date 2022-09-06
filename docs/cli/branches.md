---
sidebar_position: 5
---

# Branches

## List branches

List all branches in the project.

```bash
dvcs branches
```

## Create a branch

Create a new branch from the current commit.

```bash
dvcs branch new <branch_name>
```

| Argument      | Alias | Description               |
| ------------- | ----- | ------------------------- |
| `branch_name` |       | Name of branch to create. |

## Switch to a branch

Switch you local project to point to a different branch.

```bash
dvcs branch use <branch_name>
```

| Argument      | Alias | Description                  |
| ------------- | ----- | ---------------------------- |
| `branch_name` |       | Name of branch to switch to. |

## Delete a branch

Delete a branch from the project.

:::caution
This will **permanently delete** all commits in the branch, as well as any files associated with those commits if they
are not referenced anywhere else in the project.
:::

```bash
dvcs branch delete [-y] <branch_name>
```

| Argument      | Alias | Description               |
| ------------- | ----- | ------------------------- |
| `--yes`       | `-y`  | Skip confirmation prompt. |
| `branch_name` |       | Name of branch to delete. |

## Merge a branch

Merge a branch into the current branch.

```bash
dvcs merge [-y] [--push] <branch_name>
```

| Argument      | Alias | Description                         |
| ------------- | ----- | ----------------------------------- |
| `--yes`       | `-y`  | Skip confirmation prompt.           |
| `--push`      |       | Push changes to remote after merge. |
| `branch_name` |       | Name of branch to merge.            |

## Set branch as default

Set a branch as the default branch for the project.

```bash
dvcs branch set-default <branch_name>
```

| Argument      | Alias | Description                       |
| ------------- | ----- | --------------------------------- |
| `branch_name` |       | Name of branch to set as default. |
