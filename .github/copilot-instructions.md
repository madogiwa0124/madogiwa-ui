# GitHub Copilot Instructions for Madogiwa UI

**For language-specific guidelines, see the corresponding files in the `.github/prompts/` directory.**

## Project Overview

Madogiwa UI is a modern CSS framework leveraging cutting-edge CSS features like `@property`, CSS Nesting, and logical properties, and more. It's built as a monorepo using pnpm.

**Monorepo Structure**

- **Root**: Workspace management with pnpm, shared linting/formatting configs
- **`packages/css/`**: Main CSS framework package with Storybook for development
  - For guidelines, see `.github/prompts/css.prompt.md`
- **`packages/vue/`**: Vue component library wrapping `@madogiwa-ui/css`
- **Future packages**: `react/` component libraries planned

## Browser Support

**Baseline Newly available**

Actively utilize cutting-edge features like CSS `@property`, CSS Nesting, logical properties, and more.

## Architecture

### Package Structure

```sh
madogiwa-ui/
└── packages/
  ├── css/
  ├── react/ # Future implementation
  └── vue/
```

## A11y

**For basic guidelines, see the corresponding `.github/prompts/a11y.prompt.md`.**

## Development Workflows

### Essential Commands

- **Setup**: `pnpm i && pnpm run setup` (installs Playwright for testing)
- **Linting**: `pnpm lint` (ESLint), `pnpm lint:css` (Stylelint with baseline checks)
- **CSS Development**: `pnpm css storybook` (launches Storybook at :6006)
- **CSS Build**: `pnpm css build` (outputs to `dist/` with VS Code snippets)
- **CSS Unit Testing**: `pnpm css test` (Node.js unit tests for build plugins)
- **CSS E2E Testing**: `pnpm css storybook:test` (Playwright + accessibility tests)
- **Vue Development**: `pnpm vue dev` (launches Vue app at :5173)
- **Vue Build**: `pnpm vue build` (outputs to `dist/`)
- **Vue Unit Testing**: `pnpm vue test` (Vitest + Vue Test Utils)

## Testing & Quality

### Testing Strategy

- **Unit Tests**:
  - Node.js `--experimental-strip-types` for build plugins in `packages/css`
  - Vitest(browsers mode) + Vue Test Utils for Vue components in `packages/vue`
- **Integration**: Storybook interaction testing with Playwright in `packages/css`
- **Accessibility**: Automated a11y checks in all stories using `@storybook/addon-a11y` in `packages/css`
- **Visual**: Storybook viewport testing across device sizes in `packages/css`

### Code Quality

- **ESLint**: Strict TypeScript config with `@tsconfig/strictest`
- **Stylelint**: CSS standards + baseline compatibility checking
- **TypeScript**: Strict mode with `noEmit` type checking
