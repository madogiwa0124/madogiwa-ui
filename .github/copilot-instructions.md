# GitHub Copilot Instructions for Madogiwa UI

**For language-specific guidelines, see the corresponding files in the [./prompts/](./prompts/) directory.**

## Project Overview

Madogiwa UI is a modern CSS framework leveraging cutting-edge CSS features like `@property`, CSS Nesting, and logical properties, and more. It's built as a monorepo using pnpm.

**Monorepo Structure**

- **Root**: Workspace management with pnpm, shared linting/formatting configs
- **`packages/css/`**: Main CSS framework package with Storybook for development
  - For guidelines, see [./prompts/css.prompt.md](./prompts/css.prompt.md)
- **`packages/vue/`**: Vue component library wrapping `@madogiwa-ui/css`
  - For guidelines, see [./prompts/vue.prompt.md](./prompts/vue.prompt.md)
- **Future packages**: `react/` component libraries planned

## Architecture

### Package Structure

```sh
madogiwa-ui/
└── packages/
  ├── css/
  ├── react/ # Future implementation
  └── vue/
```

## Development Workflows

### Essential Commands

- **Setup**: `pnpm i && pnpm run setup` (installs Playwright for testing)
- **Linting**: `pnpm lint` (`@eslint/js`, `typescript-eslint`, `eslint-plugin-vue`, `eslint-plugin-unicorn`, `@stylistics/eslint-plugin`), `pnpm lint:css` (Stylelint with baseline checks), `pnpm lint:type-check` (TypeScript strictest type checking)
- **CSS Development**: `pnpm css storybook` (launches Storybook at :6006)
- **CSS Build**: `pnpm css build` (outputs to `dist/` with VS Code snippets), `pnpm css build:docs` (generates Markdown docs)
- **CSS Unit Testing**: `pnpm css test` (Node.js unit tests for build plugins)
- **CSS E2E Testing**: `pnpm css storybook:test` (Playwright + accessibility tests)
- **Vue Development**: `pnpm vue dev` (launches Vue app at :5173)
- **Vue Build**: `pnpm vue build` (outputs to `dist/`)
- **Vue Unit Testing**: `pnpm vue test` (Vitest + Vue Test Utils)
