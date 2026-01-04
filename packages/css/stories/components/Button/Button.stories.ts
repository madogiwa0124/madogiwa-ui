import type { Meta, StoryObj } from "@storybook/html";
import { type ButtonProperties, createButton } from "./Button";
import { expect } from "storybook/test";

const meta: Meta<ButtonProperties> = {
  title: "Components/Button",
  tags: ["autodocs"],
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
      description: "The variant style for the component",
    },
    outline: {
      control: "boolean",
      description: "The outline style modifier for the component",
    },
    block: {
      control: "boolean",
      description: "The block width modifier for the component",
    },
    disabled: {
      control: "boolean",
      description: "The disabled state for the component",
    },
    transition: {
      control: "boolean",
      description: "The transition animation modifier for the component",
    },
    rounded: {
      control: "boolean",
      description: "The rounded corners modifier for the component",
    },
    iconOnly: {
      control: "boolean",
      description: "The icon-only layout modifier for the component",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Button component provides interactive elements for user actions with various styling options and states. It implements BEM + CSS Nesting pattern with the m- prefix for Madogiwa UI.

### Usage

Use buttons for triggering actions, submitting forms, or navigating within your application. Select appropriate variants to establish visual hierarchy and communicate action importance. Primary buttons should be used for main actions, secondary for supporting actions, and tertiary for subtle interactions.

### Example code

\`\`\`html
<button class="m-btn">Default Button</button>
<button class="m-btn --primary">Primary Button</button>
<button class="m-btn --secondary --outline">Secondary Outline</button>
<button class="m-btn --tertiary --transition">Tertiary with Transition</button>
<button class="m-btn --block">Full Width Button</button>
<button class="m-btn --primary --rounded --icon-only">🔍</button>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-btn | .--primary | Apply primary color variant for main actions |
| .m-btn | .--secondary | Apply secondary color variant for secondary actions |
| .m-btn | .--tertiary | Apply tertiary color variant for subtle actions |
| .m-btn | .--outline | Apply outline style with transparent background |
| .m-btn | .--block | Make button full width (display: block) |
| .m-btn | .--rounded | Apply fully rounded corners using --radius-full |
| .m-btn | .--icon-only | Reduce padding for icon-only buttons |
| .m-btn | .--transition | Enable smooth hover/focus transitions |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-btn | --btn-color-default | var(--color-default) | Default variant background color |
| .m-btn | --btn-color-primary | var(--color-primary) | Primary variant background color |
| .m-btn | --btn-color-secondary | var(--color-secondary) | Secondary variant background color |
| .m-btn | --btn-color-tertiary | var(--color-tertiary) | Tertiary variant background color |
| .m-btn | --btn-text-color-default | var(--color-text-default) | Default variant text color |
| .m-btn | --btn-text-color-primary | var(--color-text-inverse) | Primary variant text color |
| .m-btn | --btn-text-color-secondary | var(--color-text-inverse) | Secondary variant text color |
| .m-btn | --btn-text-color-tertiary | var(--color-text-default) | Tertiary variant text color |
| .m-btn | --btn-outline-text-color-factor | 0.5 | Multiplier for deriving outline text colors |
| .m-btn | --btn-outline-text-color-default | var(--color-default) | Outline default variant text color |
| .m-btn | --btn-outline-text-color-primary | var(--color-primary) | Outline primary variant text color |
| .m-btn | --btn-outline-text-color-secondary | var(--color-secondary) | Outline secondary variant text color |
| .m-btn | --btn-outline-text-color-tertiary | var(--color-tertiary) | Outline tertiary variant text color |
| .m-btn | --btn-darker-brightness | 90% | Darker brightness filter value |
| .m-btn | --btn-lighter-brightness | 110% | Hover brightness filter value |
| .m-btn | --btn-disabled-opacity | 0.65 | Disabled state opacity |
| .m-btn | --btn-padding-x | var(--spacing-6) | Horizontal padding |
| .m-btn | --btn-padding-y | var(--spacing-2) | Vertical padding |
| .m-btn | --btn-box-shadow | var(--shadow-sm) | Button shadow |
| .m-btn | --btn-border-radius | var(--radius-md) | Default border radius |
| .m-btn | --btn-rounded-border-radius | var(--radius-full) | Rounded modifier border radius |
| .m-btn | --btn-border-width | var(--border-width) | Border width |
| .m-btn | --btn-active-transform | translateY(1px) | Active state transform |
| .m-btn | --btn-transition-duration | 0.2s | Transition animation duration |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use --transition modifier selectively to respect user motion preferences
- Icon-only buttons require proper accessible labels or aria-label attributes
- Ensure sufficient color contrast for outline variants in your color scheme
- Block buttons should be used sparingly to maintain visual hierarchy
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProperties>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic button with default styling. Demonstrates the base button component without any modifiers.",
      },
    },
  },
  render: (args: ButtonProperties) => {
    return createButton(args);
  },
  args: {
    label: "Button",
    outline: false,
    variant: "default",
    block: false,
    disabled: false,
    rounded: false,
    iconOnly: false,
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const button = canvas.querySelector("button");
    await expect(button).not.toBeNull();
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveTextContent("Button");
    await expect(button).not.toBeDisabled();
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: "Button color variants using design system colors. Shows primary, secondary, and tertiary variants for different action hierarchies.",
      },
    },
  },
  render: (args: ButtonProperties) => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";

    const variants = ["primary", "secondary", "tertiary"] as const;

    for (const variant of variants) {
      const button = createButton({
        label: variant,
        variant,
        transition: args.transition ?? false,
      });
      container.append(button);
    }

    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const buttons = canvas.querySelectorAll("button");
    const expectedVariants = ["primary", "secondary", "tertiary"];

    await expect(buttons).toHaveLength(expectedVariants.length);

    for (const [index, button] of buttons.entries()) {
      const variant = expectedVariants[index];
      if (variant) {
        await expect(button).toHaveClass("m-btn");
        await expect(button).toHaveClass(`--${variant}`);
        await expect(button).toHaveTextContent(variant);
      }
    }
  },
};

export const OutlineButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: "Outline button variants with transparent backgrounds and colored borders. Provides subtle styling for secondary actions.",
      },
    },
  },
  render: (args: ButtonProperties) => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";

    const variants = ["default", "primary", "secondary", "tertiary"] as const;

    for (const variant of variants) {
      const button = createButton({
        label: variant,
        variant,
        outline: true,
        transition: args.transition ?? false,
      });
      container.append(button);
    }

    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const buttons = canvas.querySelectorAll("button");
    const expectedVariants = ["default", "primary", "secondary", "tertiary"];

    await expect(buttons).toHaveLength(expectedVariants.length);

    for (const [index, button] of buttons.entries()) {
      const variant = expectedVariants[index];
      if (variant) {
        await expect(button).toHaveClass("m-btn");
        await expect(button).toHaveClass(`--${variant}`);
        await expect(button).toHaveClass("--outline");
        await expect(button).toHaveTextContent(variant);
      }
    }
  },
};

export const BlockButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "Full-width block button that spans the entire container width. Useful for forms and mobile layouts.",
      },
    },
  },
  render: () => {
    const container = document.createElement("div");
    container.style.width = "100%";

    const button = createButton({
      label: "Block Button",
      variant: "primary",
      block: true,
    });
    container.append(button);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const button = canvas.querySelector("button");
    await expect(button).not.toBeNull();
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveClass("--primary");
    await expect(button).toHaveClass("--block");
    await expect(button).toHaveTextContent("Block Button");
  },
};

export const RoundedButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "Buttons with fully rounded corners using --radius-full. Shows both filled and outline variants.",
      },
    },
  },
  render: () => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";

    const button = createButton({
      label: "Rounded Button",
      variant: "primary",
      rounded: true,
    });
    container.append(button);

    const outlineButton = createButton({
      label: "Rounded Outline",
      variant: "primary",
      outline: true,
      rounded: true,
    });
    container.append(outlineButton);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const buttons = canvas.querySelectorAll("button");
    await expect(buttons).toHaveLength(2);

    for (const button of buttons) {
      await expect(button).toHaveClass("m-btn");
      await expect(button).toHaveClass("--primary");
      await expect(button).toHaveClass("--rounded");
    }

    // Check that second button has outline modifier
    await expect(buttons[1]).toHaveClass("--outline");
  },
};

export const DisabledButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "Comparison between normal and disabled button states. Disabled buttons have reduced opacity and are non-interactive.",
      },
    },
  },
  render: () => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";

    const normalButton = createButton({
      label: "Normal Button",
      variant: "primary",
    });

    const disabledButton = createButton({
      label: "Disabled Button",
      variant: "primary",
      disabled: true,
    });

    container.append(normalButton);
    container.append(disabledButton);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const buttons = canvas.querySelectorAll("button");
    await expect(buttons).toHaveLength(2);

    const normalButton = buttons[0];
    const disabledButton = buttons[1];

    // Test normal button
    await expect(normalButton).toHaveClass("m-btn");
    await expect(normalButton).toHaveTextContent("Normal Button");
    await expect(normalButton).not.toBeDisabled();

    // Test disabled button
    await expect(disabledButton).toHaveClass("m-btn");
    await expect(disabledButton).toHaveTextContent("Disabled Button");
    await expect(disabledButton).toBeDisabled();
  },
};

export const WithIconButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "Button with an icon and text. Icons are automatically aligned and spaced using CSS gap property.",
      },
    },
  },
  render: () => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";

    const buttonWithIcon = createButton({
      label: "Button with Icon",
      variant: "primary",
    });

    // Add icon
    const icon = document.createElement("span");
    icon.className = "icon"; // Icon class name
    icon.textContent = "+"; // Using simple text icon here
    buttonWithIcon.prepend(icon);

    container.append(buttonWithIcon);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const button = canvas.querySelector("button");
    const icon = button?.querySelector(".icon");

    await expect(button).not.toBeNull();
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveClass("--primary");
    await expect(button).toHaveTextContent("Button with Icon");

    await expect(icon).not.toBeNull();
    await expect(icon).toHaveTextContent("+");
  },
};

export const IconOnlyButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "Icon-only button with reduced padding for compact layouts. Remember to provide accessible labels.",
      },
    },
  },
  render: () => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";

    const buttonWithIcon = createButton({
      label: "",
      variant: "primary",
      iconOnly: true,
    });

    // Add icon
    const icon = document.createElement("span");
    icon.className = "icon"; // Icon class name
    icon.textContent = "+"; // Using simple text icon here
    buttonWithIcon.prepend(icon);

    container.append(buttonWithIcon);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const button = canvas.querySelector("button");
    const icon = button?.querySelector(".icon");

    await expect(button).not.toBeNull();
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveClass("--primary");
    await expect(button).toHaveClass("--icon-only");

    await expect(icon).not.toBeNull();
    await expect(icon).toHaveTextContent("+");
  },
};
