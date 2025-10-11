import type { Meta, StoryObj } from "@storybook/html";
import { type ButtonProperties, createButton } from "./Button";
import { expect } from "storybook/test";

const meta: Meta<ButtonProperties> = {
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Button text content",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "tertiary"],
      description: "Button color variant using design system colors",
    },
    outline: {
      control: "boolean",
      description: "Apply outline style (--outline modifier)",
    },
    block: {
      control: "boolean",
      description: "Make button full width (--block modifier)",
    },
    disabled: {
      control: "boolean",
      description: "Disable button interaction",
    },
    transition: {
      control: "boolean",
      description: "Enable smooth transitions (--transition modifier)",
    },
    rounded: {
      control: "boolean",
      description: "Apply fully rounded corners (--rounded modifier)",
    },
    iconOnly: {
      control: "boolean",
      description: "Icon-only button with reduced padding (--icon-only modifier)",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

Flexible button component implementing BEM + CSS Nesting pattern with m- prefix for Madogiwa UI. Supports multiple design system variants, interactive states, and layout modifiers for comprehensive user interface needs.

### Usage

Use buttons for primary actions, form submissions, navigation triggers, and interactive elements. Apply appropriate variants to establish visual hierarchy and provide clear user feedback. Consider accessibility requirements when implementing icon-only buttons and ensure sufficient color contrast for all variants.

### Modifiers

Describe **all modifiers** defined in this component.

| Target | Name | Description |
| ------ | ---- | ----------- |
| .m-btn | .--primary | Apply primary color variant |
| .m-btn | .--secondary | Apply secondary color variant |
| .m-btn | .--tertiary | Apply tertiary color variant |
| .m-btn | .--outline | Apply outline style with transparent background |
| .m-btn | .--block | Make button full width (display: block) |
| .m-btn | .--rounded | Apply fully rounded corners |
| .m-btn | .--icon-only | Reduce padding for icon-only buttons |
| .m-btn | .--transition | Enable smooth hover/focus transitions |

### CSS Variables

Describe **all CSS variables** defined in this component.

| Name | Default | Description |
| ---- | ------- | ----------- |
| --btn-color-default | var(--color-default) | Default variant background color |
| --btn-color-primary | var(--color-primary) | Primary variant background color |
| --btn-color-secondary | var(--color-secondary) | Secondary variant background color |
| --btn-color-tertiary | var(--color-tertiary) | Tertiary variant background color |
| --btn-text-color-default | var(--color-text) | Default variant text color |
| --btn-text-color-primary | var(--color-text-light) | Primary variant text color |
| --btn-text-color-secondary | var(--color-text-light) | Secondary variant text color |
| --btn-text-color-tertiary | var(--color-text) | Tertiary variant text color |
| --btn-outline-text-color-default | color(from var(--btn-color-default) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline default variant text color |
| --btn-outline-text-color-primary | color(from var(--btn-color-primary) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline primary variant text color |
| --btn-outline-text-color-secondary | color(from var(--btn-color-secondary) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline secondary variant text color |
| --btn-outline-text-color-tertiary | color(from var(--btn-color-tertiary) srgb calc(r * 0.55) calc(g * 0.55) calc(b * 0.55)) | Outline tertiary variant text color |
| --btn-darker-brightness | 90% | Darker brightness filter value |
| --btn-lighter-brightness | 110% | Hover brightness filter value |
| --btn-disabled-opacity | 0.65 | Disabled state opacity |
| --btn-padding-x | var(--spacing-6) | Horizontal padding |
| --btn-padding-y | var(--spacing-2) | Vertical padding |
| --btn-box-shadow | var(--shadow-sm) | Button shadow |
| --btn-border-radius | var(--radius-md) | Default border radius |
| --btn-rounded-border-radius | var(--radius-full) | Rounded modifier border radius |
| --btn-border-width | var(--border-width) | Border width |
| --btn-active-transform | translateY(1px) | Active state transform |
| --btn-transition-duration | 0.2s | Transition animation duration |

### Caution

- Use --transition modifier selectively to respect user motion preferences.
- Icon-only buttons require proper accessible labels or aria-label attributes.
- Ensure sufficient color contrast for outline variants in your color scheme.
- Block buttons should be used sparingly to maintain visual hierarchy.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProperties>;

export const Default: Story = {
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
    const button = canvas.querySelector("button");

    await expect(button).not.toBeDisabled();
    await expect(button).toHaveTextContent("Button");
    await expect(button).toHaveClass("m-btn");
  },
};

export const Variants: Story = {
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
    const buttons = canvas.querySelectorAll("button");
    for (const [index, button] of buttons.entries()) {
      const variant = ["primary", "secondary", "tertiary"][index];
      if (variant) {
        await expect(button).toHaveClass("m-btn");
        await expect(button).toHaveClass(`--${variant}`);
        await expect(button).toHaveTextContent(variant);
      }
    }
  },
};

export const OutlineButtons: Story = {
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
    const buttons = canvas.querySelectorAll("button");
    for (const [index, button] of buttons.entries()) {
      const variant = ["default", "primary", "secondary", "tertiary"][index];
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
    const button = canvas.querySelector("button");
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveStyle({
      display: "block",
    });
  },
};

export const RoundedButton: Story = {
  render: () => {
    const container = document.createElement("div");
    const button = createButton({
      label: "Block Button",
      variant: "primary",
      rounded: true,
    });
    container.append(button);
    const outlineButton = createButton({
      label: "Block Button",
      variant: "primary",
      outline: true,
      rounded: true,
    });
    container.append(outlineButton);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const buttons = canvas.querySelectorAll("button");

    // Verify that rounded buttons are styled correctly
    for (const button of buttons) {
      await expect(button).toHaveClass("m-btn");
      await expect(button).toHaveStyle({
        borderRadius: "9999px", // Example: Specify extremely rounded corners
      });
    }
  },
};

export const DisabledButton: Story = {
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
    const buttons = canvas.querySelectorAll("button");

    const disabledButton = buttons[1];
    await expect(disabledButton).toBeDisabled();

    const normalButton = buttons[0];
    await expect(normalButton).not.toBeDisabled();
  },
};

export const WithIconButton: Story = {
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
    const button = canvas.querySelector("button");
    const icon = button?.querySelector(".icon");

    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveTextContent("Button with Icon");
    await expect(icon).not.toBeNull();
    await expect(icon).toHaveTextContent("+");
  },
};

export const IconOnlyButton: Story = {
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
    icon.textContent = "";
    icon.textContent = "+"; // Using simple text icon here
    buttonWithIcon.prepend(icon);

    container.append(buttonWithIcon);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const button = canvas.querySelector("button");
    const icon = button?.querySelector(".icon");

    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveClass("--icon-only");
    await expect(icon).not.toBeNull();
    await expect(icon).toHaveTextContent("+");
  },
};
