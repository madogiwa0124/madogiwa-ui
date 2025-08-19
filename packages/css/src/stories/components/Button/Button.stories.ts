import type { Meta, StoryObj } from "@storybook/html";
import { type ButtonProperties, createButton } from "./Button";
import { expect } from "storybook/test";

const meta: Meta<ButtonProperties> = {
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "success", "danger", "warning"],
    },
    outline: { control: "boolean" },
    block: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "example description",
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProperties>;

export const Default: Story = {
  render: (args) => {
    return createButton(args);
  },
  args: {
    label: "Button",
    outline: false,
    block: false,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const button = canvas.querySelector("button");

    await expect(button).not.toBeDisabled();
    await expect(button).toHaveTextContent("Button");
    await expect(button).toHaveClass("btn");
  },
};

export const Variants: Story = {
  render: () => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";

    const variants = ["primary", "secondary", "tertiary"] as const;

    for (const variant of variants) {
      const button = createButton({
        label: variant,
        variant,
      });
      container.append(button);
    }

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const buttons = canvas.querySelectorAll("button");
    for (const [index, button] of buttons.entries()) {
      const variant = ["primary", "secondary", "tertiary"][index];
      if (variant) {
        await expect(button).toHaveClass("btn");
        await expect(button).toHaveClass(`--${variant}`);
        await expect(button).toHaveTextContent(variant);
      }
    }
  },
};

export const OutlineButtons: Story = {
  render: () => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";

    const variants = ["default", "primary", "secondary", "tertiary"] as const;

    for (const variant of variants) {
      const button = createButton({
        label: variant,
        variant,
        outline: true,
      });
      container.append(button);
    }

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const buttons = canvas.querySelectorAll("button");
    for (const [index, button] of buttons.entries()) {
      const variant = ["default", "primary", "secondary", "tertiary"][index];
      if (variant) {
        await expect(button).toHaveClass("btn");
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
    await expect(button).toHaveClass("btn");
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
      await expect(button).toHaveClass("btn");
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

    await expect(button).toHaveClass("btn");
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

    await expect(button).toHaveClass("btn");
    await expect(button).toHaveClass("--icon-only");
    await expect(icon).not.toBeNull();
    await expect(icon).toHaveTextContent("+");
  },
};
