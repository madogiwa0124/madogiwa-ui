## Storybook Development Guide

- Each component has `.stories.ts` with interaction tests using `@storybook/test`
- Stories include accessibility testing via `@storybook/addon-a11y`
- Use Interaction Tests each story with `canvasElement` pattern for DOM interaction testing.
  But if `canvasElement` does not work well, please use `document.querySelector`, etc.

Please create based on the following example:

```ts
import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

type ComponentProperties = {
  label: string;
  variant: "default" | "primary" | "secondary" | "tertiary";
};

const meta: Meta<ComponentProperties> = {
  title: "[Foundation|Components|Layouts|Utils]/ExampleName",
  tags: ["autodocs"],
  // Define component props here. For CSS, define modifiers and states.
  argTypes: {
    label: {
      control: "text",
      description: "The label text for the component",
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "tertiary"],
      description: "The variant style of the component",
    },
  },
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

### Elements

Describe **all elements** defined in this component.

| Name | Description |
| ---- | ----------- |
| .m-example__element | Description of the element |

### Modifiers

Describe **all modifiers** defined in this component.

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-example | .--example-modifier | Description of the modifier |

### CSS Variables

Describe **all CSS variables** defined in this component.

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-example | --example-variable | value | Description of the variable |

### Data Attributes

Describe **all data attributes** defined in this component.

| Target | Attribute | Values | Description |
| ------ | --------- | ------ | ----------- |
| .m-example | data-example| value | Description of the attribute |

### Caution

- This is an example component.
- Please customize it as needed.
        `
      },
    },
  },
};

export default meta;
type Story = StoryObj<ComponentProperties>;

export const Example: Story = {
  parameters: {
    docs: {
      description: {
        story: "This is an example story for the Example component.",
      },
    },
  },
  render: (args) => {
    // Choose between Storybook Story Pattern or TypeScript Helper Pattern based on the component
    // * Storybook Story Pattern: For simple components with few variations
    // * TypeScript Helper Pattern: For complex components with many variations
    const container = document.createElement("div");
    return container;
  },
  // Default args for the story
  args: {
    label: "Example",
    variant: "default",
  },
  play: async ({ canvasElement }) => {
    // Interaction tests using canvasElement
    // Example: Check if the component renders correctly
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
