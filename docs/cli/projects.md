---
sidebar_position: 3
---

# Projects

## Create a project

```bash
dvcs init [-p | --path <path>] <team_name>/<project_name>
```

| Argument | Alias | Description                                                                    |
| -------- | ----- | ------------------------------------------------------------------------------ |
| `--path` | `-p`  | The path to the project. If not specified, the current directory will be used. |

:::note

Example:

```bash
dvcs init --path ~/dev/my-project my-team/my-project
```

:::

## Clone a project

```bash
dvcs clone [-p | --path <path>] [-b | --branch <branch>] <team_name>/<project_name>
```

| Argument   | Alias | Description                                                                    |
| ---------- | ----- | ------------------------------------------------------------------------------ |
| `--path`   | `-p`  | The path to the project. If not specified, the current directory will be used. |
| `--branch` | `-b`  | The branch to clone. If not specified, the default branch will be used.        |

:::note

Example:

```bash
dvcs clone --path ~/dev/my-project --branch unstable my-team/my-project
```
