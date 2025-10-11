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
  display: flex;

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
}
```

Madogiwa UI provides optional CSS transitions for interactive components, considering users with visual sensitivities and motion preferences. You can enable or disable transitions using the `--transition` modifier class.

#### CSS Variables System

CSS variables are designed with consideration for Tailwind CSS compatibility based on the following default CSS variables:

refs: https://tailwindcss.com/docs/theme#default-theme-variable-reference

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

- Each component has `.stories.ts` with interaction tests using `@storybook/test`
- Stories include accessibility testing via `@storybook/addon-a11y`
- Test files use `canvasElement` pattern for DOM interaction testing

### Storybook template

Please create based on the following example:

```ts
import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

const meta: Meta = {
  title: "[Foundation|Components|Layouts|Utils]/ExampleName",
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "tertiary"],
    },
  }, // Define component props here. For CSS, define modifiers.
  parameters: {
    docs: {
      description: {
        // Component description(usage, behavior, CSS variables, etc.) for docs
        component: `
        ### Overview

        This is an example component for Madogiwa UI.

        ### Usage

        Describe the usage scenarios and instructions for this component in actual products, not technical content.

        **Sample code is unnecessary.**

        ### CSS Variables

        Describe **all CSS variables** defined in this component.

        | Name | Default | Description |
        | ---- | ------- | ----------- |
        | --example-variable | value | Description of the variable |

        ### Caution

        - This is an example component.
        - Please customize it as needed.
        `
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    // Choose between Storybook Story Pattern or TypeScript Helper Pattern based on the component
    const container = document.createElement("div");
    return container;
  },
  // Default args for the story
  args: {
    label: "Example",
    variant: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    expect(canvas).not.toBeNull();
  },
};
```

### Storybook Story Pattern

For components with few variations and minimal state management, write them simply as follows:

```typescript
// Button.stories.ts
export const Default: Story = {
  render: (args) => createButton(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toHaveClass("m-btn");
  },
};
```

### TypeScript Helper Pattern

For components with many variations and state management requirements, create TypeScript helpers as follows:

```typescript
// Button.ts
export interface ButtonProperties {
  variant?: "primary" | "secondary";
  // ... other props
}

export const createButton = (
  props: ButtonProperties = {}
): HTMLButtonElement => {
  const button = document.createElement("button");
  button.classList.add("m-btn");
  if (props.variant) button.classList.add(`--${props.variant}`);
  return button;
};
```

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
