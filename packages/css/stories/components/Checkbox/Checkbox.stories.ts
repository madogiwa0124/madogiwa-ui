import type { Meta, StoryObj } from "@storybook/html";
import { expect, userEvent } from "storybook/test";

const meta: Meta = {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Label text for the checkbox",
    },
    checked: {
      control: { type: "boolean" },
      description: "Initial checked state",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the checkbox",
    },
    name: {
      control: { type: "text" },
      description: "Name attribute for the checkbox",
    },
    value: {
      control: { type: "text" },
      description: "Value attribute for the checkbox",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Checkbox component provides a custom-styled checkbox input that maintains accessibility while offering visual consistency. It supports various states including checked, disabled, and hover effects.

### Usage

Use checkboxes for:
- Multi-select options where users can choose multiple items
- Boolean settings and preferences
- Terms and conditions acceptance
- Feature toggles and permissions
- Form controls requiring true/false selection

**Common use cases:**
- Settings panels with multiple options
- Multi-select lists and filters
- Form agreements and consents
- Feature enable/disable controls
- Task lists with completion states

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --checkbox-size | 1.2em | Size of the checkbox |
| --checkbox-border-color | var(--color-dark) | Border color |
| --checkbox-bg-color | var(--color-light) | Background color |
| --checkbox-border-radius | 0.2em | Border radius |
| --checkbox-lighter-brightness | 150% | Brightness on hover/focus |
| --checkbox-disabled-opacity | 0.65 | Opacity when disabled |

### States

- **Default**: Unchecked state with border styling
- **Checked**: Shows checkmark with primary background color
- **Disabled**: Reduced opacity and disabled cursor
- **Hover/Focus**: Brightness filter for visual feedback

### Caution
- Ensure sufficient contrast between checkbox and background for visibility
- Use clear and concise labels for better usability
- Maintain consistent sizing and spacing in forms
- Avoid using checkboxes for single binary choices (use switches instead)
- Test across different browsers for consistent appearance
        `,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // NOTE: Some stories don't have labels for demonstration purposes
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-checkbox");

    const checked = args["checked"] ? Boolean(args["checked"]) : false;
    const disabled = args["disabled"] ? Boolean(args["disabled"]) : false;
    const name = args["name"] ? String(args["name"]) : "checkbox";
    const value = args["value"] ? String(args["value"]) : "checkbox";

    checkbox.name = name;
    checkbox.value = value;
    checkbox.checked = checked;
    checkbox.disabled = disabled;

    container.append(checkbox);
    return container;
  },
  args: {
    checked: false,
    disabled: false,
    name: "example",
    value: "example-value",
  },
  play: async ({ canvasElement, args }) => {
    const checkbox = canvasElement.querySelector("input[type='checkbox']") as HTMLInputElement;

    // Test basic properties
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).toHaveClass("m-checkbox");
    await expect(checkbox).toHaveAttribute("name", String(args["name"]));
    await expect(checkbox).toHaveAttribute("value", String(args["value"]));

    // Test initial states
    const initialChecked = Boolean(args["checked"]);
    const isDisabled = Boolean(args["disabled"]);

    await expect(checkbox.checked).toBe(initialChecked);

    if (isDisabled) {
      await expect(checkbox).toBeDisabled();
    } else {
      await expect(checkbox).not.toBeDisabled();

      // Test interaction only if not disabled
      await userEvent.click(checkbox);
      await expect(checkbox.checked).toBe(!initialChecked);

      await userEvent.click(checkbox);
      await expect(checkbox.checked).toBe(initialChecked);
    }

    // Test styling
    const computedStyle = globalThis.getComputedStyle(checkbox);
    await expect(computedStyle.appearance).toBe("none");
    await expect(computedStyle.cursor).toBe(isDisabled ? "not-allowed" : "pointer");
  },
};

export const Checked: Story = {
  render: (_args) => {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-checkbox");
    checkbox.name = "checkbox-checked";
    checkbox.value = "checked-value";
    checkbox.checked = true;

    container.append(checkbox);
    return container;
  },
  args: {
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const checkbox = canvasElement.querySelector("input[type='checkbox']") as HTMLInputElement;

    // Test initial checked state
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).toHaveClass("m-checkbox");
    await expect(checkbox).toBeChecked();
    await expect(checkbox).not.toBeDisabled();

    // Test unchecking
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();

    // Test checking again
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();

    // Test styling for checked state
    const computedStyle = globalThis.getComputedStyle(checkbox);
    // When checked, background should change to primary color
    await expect(computedStyle.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox in checked state by default.",
      },
    },
  },
};

export const Disabled: Story = {
  render: () => {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-checkbox");
    checkbox.name = "checkbox-disabled";
    checkbox.value = "disabled-value";
    checkbox.disabled = true;

    container.append(checkbox);
    return container;
  },
  play: async ({ canvasElement }) => {
    const checkbox = canvasElement.querySelector("input[type='checkbox']") as HTMLInputElement;

    // Test disabled state
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).toHaveClass("m-checkbox");
    await expect(checkbox).not.toBeChecked();
    await expect(checkbox).toBeDisabled();

    // Test that clicking doesn't change state when disabled
    const initialChecked = checkbox.checked;
    await userEvent.click(checkbox);
    await expect(checkbox.checked).toBe(initialChecked);

    // Test disabled styling
    const computedStyle = globalThis.getComputedStyle(checkbox);
    await expect(computedStyle.cursor).toBe("not-allowed");
    await expect(Number.parseFloat(computedStyle.opacity)).toBeLessThan(1);
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled checkbox that cannot be interacted with.",
      },
    },
  },
};

export const CheckedDisabled: Story = {
  render: () => {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-checkbox");
    checkbox.name = "checkbox-checked-disabled";
    checkbox.value = "checked-disabled-value";
    checkbox.checked = true;
    checkbox.disabled = true;

    container.append(checkbox);
    return container;
  },
  play: async ({ canvasElement }) => {
    const checkbox = canvasElement.querySelector("input[type='checkbox']") as HTMLInputElement;

    // Test checked and disabled state
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).toHaveClass("m-checkbox");
    await expect(checkbox).toBeChecked();
    await expect(checkbox).toBeDisabled();

    // Test that clicking doesn't change state when disabled
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked(); // Should remain checked

    // Test styling combines both states
    const computedStyle = globalThis.getComputedStyle(checkbox);
    await expect(computedStyle.cursor).toBe("not-allowed");
    await expect(Number.parseFloat(computedStyle.opacity)).toBeLessThan(1);
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled checkbox in checked state.",
      },
    },
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.gap = "0.5rem";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-checkbox");
    checkbox.id = "checkbox-with-label";
    checkbox.name = "agreement";
    checkbox.value = "agreed";

    const labelText = args["label"] ? String(args["label"]) : "I agree to the terms of service";

    const label = document.createElement("label");
    label.htmlFor = "checkbox-with-label";
    label.textContent = labelText;
    label.style.cursor = "pointer";
    label.style.userSelect = "none";

    container.append(checkbox, label);
    return container;
  },
  args: {
    label: "I agree to the terms of service",
  },
  play: async ({ canvasElement, args }) => {
    const checkbox = canvasElement.querySelector("input[type='checkbox']") as HTMLInputElement;
    const label = canvasElement.querySelector("label") as HTMLLabelElement;

    // Test label association
    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveAttribute("for", "checkbox-with-label");
    await expect(label).toHaveTextContent(String(args["label"]));
    await expect(checkbox.id).toBe("checkbox-with-label");

    // Test initial state
    await expect(checkbox).not.toBeChecked();

    // Test label click functionality
    await userEvent.click(label);
    await expect(checkbox).toBeChecked();

    await userEvent.click(label);
    await expect(checkbox).not.toBeChecked();

    // Test keyboard interaction via label
    label.focus();
    await userEvent.keyboard(" "); // Space key
    await expect(checkbox).toBeChecked();

    // Test label styling
    const labelStyle = globalThis.getComputedStyle(label);
    await expect(labelStyle.cursor).toBe("pointer");
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox with associated label for improved accessibility and usability.",
      },
    },
  },
};
