# GitHub Copilot Instructions for Madogiwa UI

**For language-specific guidelines, see the corresponding files in the `.github/prompts/` directory.**

## Project Overview

Madogiwa UI is a modern CSS framework leveraging cutting-edge CSS features like `@property`, CSS Nesting, and logical properties, and more. It's built as a monorepo using pnpm.

**Monorepo Structure**

- **Root**: Workspace management with pnpm, shared linting/formatting configs
- **`packages/css/`**: Main CSS framework package with Storybook for development
- **Future packages**: `react/`, `vue/` component libraries planned

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
  └── vue/ # Future implementation
```

### `@madogiwa-ui/css`

#### Directory Structure

FLOCSS inspired structure:

```sh
root
├── dist // Compiled CSS files
├── plugins // For build tools
├── src
│   ├── components
│   ├── foundation
│   ├── layouts
│   ├── utils
│   └── main.css // Entry point
└── stories // Storybook stories
    ├── components
    ├── foundation
    ├── layouts
    └── utils
```

#### CSS Layer System (`src/main.css`)

```css
@layer base, layout, components, utils, overrides;
```

- **base**: Reset CSS + foundation styles
- **layout**: Container, columns system
- **components**: UI components (buttons, forms, etc.)
- **utils**: Utility classes
- **overrides**: User customization layer

#### BEM + CSS Nesting Pattern

All classes use `m-` prefix with BEM methodology:

```css
.m-[component] {
  /* CSS variables at top */
  --component-property: value;

  /* Base styles */
  property: value;

  /* Element styles with nesting */
  .m-[component]__element {
    /* Modifier variants for Element */
    &.--modifier {
    }
  }

  /* Modifier variants */
  &.--variant {
  }
  &.--state {
  }

  /* Conditional transitions */
  &.--transition {
    transition: property duration ease;
  }

  /*
    Data attribute variants

    In cases where you want to specify CSS variables or properties directly from the markup, it is recommended to use data attributes instead of modifiers.

    Example:

    .m-[component] {
      --component-property: value;
      property: var(--component-property);

      &[data-example="value"] {
        --component-property: value;
      }
    }
  */
  &[data-example="value"] {
  }
}
```

Madogiwa UI provides optional CSS transitions for interactive components, considering users with visual sensitivities and motion preferences. You can enable or disable transitions using the `--transition` modifier class.

#### CSS Variables System

CSS variables are designed with consideration for Tailwind CSS compatibility based on the following default CSS variables:

refs: https://tailwindcss.com/docs/theme

Madogiwa UI's custom CSS variables are robustly designed using `@property` for enhanced type safety and validation.

```css
@property --font-family-base {
  syntax: "*";
  initial-value: system-ui, -apple-system, sans-serif;
  inherits: true;
}
```

## A11y

**For basic guidelines, see the corresponding `.github/prompts/a11y.prompt.md`.**

### Focus Visualization

Madogiwa UI implements minimal focus visualization to respect native browser focus indicators across Firefox, Safari, Google Chrome, and other browsers, ensuring optimal accessibility.

We believe that browser-native focus indicators are specifically designed and tested for accessibility compliance.

## Development Workflows

### Essential Commands

- **Setup**: `pnpm i && pnpm run setup` (installs Playwright for testing)
- **CSS Development**: `pnpm css storybook` (launches Storybook at :6006)
- **CSS Build**: `pnpm css build` (outputs to `dist/` with VS Code snippets)
- **CSS Unit Testing**: `pnpm css test` (Node.js unit tests for build plugins)
- **CSS E2E Testing**: `pnpm css storybook:test` (Playwright + accessibility tests)
- **Linting**: `pnpm lint` (ESLint), `pnpm lint:css` (Stylelint with baseline checks)

## Storybook-Driven Development

**For basic guidelines, see the corresponding `.github/prompts/storybook.prompt.md`.**

## When Adding New Components

1. **Create CSS**: `packages/css/src/[components|layouts]/[name].css` with BEM + CSS variables
2. **Add to Layer**: Import in `packages/css/src/main.css` under `@import ... layer([components|layouts])`
3. **Create Story**: `packages/css/stories/[components|layouts]/[Name]/[Name].stories.ts` with interaction tests
4. **Create Helper**: `packages/css/stories/[components|layouts]/[Name]/[Name].ts` with TypeScript interface
5. **Test Accessibility**: Ensure a11y addon passes all checks
6. **Verify Build**: Check generated snippets work in VS Code

## Testing & Quality

### Testing Strategy

- **Unit Tests**: Node.js `--experimental-strip-types` for build plugins
- **Integration**: Storybook interaction testing with Playwright
- **Accessibility**: Automated a11y checks in all stories
- **Visual**: Storybook viewport testing across device sizes

### Code Quality

- **ESLint**: Strict TypeScript config with `@tsconfig/strictest`
- **Stylelint**: CSS standards + baseline compatibility checking
- **TypeScript**: Strict mode with `noEmit` type checking
