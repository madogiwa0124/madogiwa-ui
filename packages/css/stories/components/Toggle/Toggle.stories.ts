import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type ToggleProperties, createToggle } from "./Toggle";

const meta: Meta<ToggleProperties> = {
  title: "Components/Toggle",
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "The disabled state for the component",
    },
    checked: {
      control: "boolean",
      description: "The checked state for the component",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Toggle component provides a switch-style checkbox input with smooth animations and visual feedback. It offers an intuitive on/off control for boolean settings.

### Usage

Use Toggle components for binary choices, settings toggles, and feature enable/disable controls. Perfect for on/off settings, preferences, and boolean state controls with clear visual feedback.

### Example code

\`\`\`html
<!-- Basic toggle -->
<label>
  <input type="checkbox" class="m-toggle">
  Enable notifications
</label>

<!-- Checked toggle -->
<label>
  <input type="checkbox" class="m-toggle" checked>
  Dark mode enabled
</label>

<!-- Disabled toggle -->
<label>
  <input type="checkbox" class="m-toggle" disabled>
  Feature unavailable
</label>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

This component has no modifiers.

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --toggle-size | 1.2em | Size of the toggle switch |
| --toggle-transition | 0.1s ease | Animation timing for state changes |
| --toggle-width | calc(var(--toggle-size) * 1.8) | Width of the toggle track |
| --toggle-checked-translate-x | calc(var(--toggle-size) * 0.8) | Translation distance when checked |
| --toggle-bg-color | var(--color-bg-inverse) | Background color when unchecked |
| --toggle-bg-color-checked | var(--color-primary) | Background color when checked |
| --toggle-button-color | var(--color-text-inverse) | Color of the sliding button |
| --toggle-button-scale | 0.8 | Scale factor for the button |
| --toggle-lighter-brightness | 150% | Brightness for hover/focus states |
| --toggle-disabled-opacity | 0.5 | Opacity when disabled |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Always provide labels for accessibility compliance
- Ensure sufficient color contrast between states
- Test keyboard navigation and screen reader compatibility
- Consider motion preferences for transition animations
        `,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // NOTE: This rule is disabled because the toggle element is not required in storybook.
            // https://dequeuniversity.com/rules/axe/4.10/select-name?application=RuleDescription
            // https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-20-level-a--aa-rules
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<ToggleProperties>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default toggle switch with interactive behavior.",
      },
    },
  },
  render: args => createToggle(args),
  args: {
    checked: false,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("checkbox");

    await expect(toggle).not.toBeNull();
    await expect(toggle).toHaveClass("m-toggle");
    await expect(toggle).not.toBeChecked();

    toggle.click();
    await expect(toggle).toBeChecked();

    toggle.click();
    await expect(toggle).not.toBeChecked();
  },
};

export const Checked: Story = {
  parameters: {
    docs: {
      description: {
        story: "Toggle in checked state showing active styling.",
      },
    },
  },
  render: () => createToggle({ checked: true }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("checkbox");

    await expect(toggle).not.toBeNull();
    await expect(toggle).toHaveClass("m-toggle");
    await expect(toggle).toBeChecked();
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Toggle in disabled state with reduced opacity and no interaction.",
      },
    },
  },
  render: () => {
    const notChecked = createToggle({ disabled: true });
    const checked = createToggle({ checked: true, disabled: true });
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "1rem";
    container.append(notChecked);
    container.append(checked);
    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggles = canvas.getAllByRole("checkbox");
    for (const toggle of toggles) {
      await expect(toggle).not.toBeNull();
      await expect(toggle).toHaveClass("m-toggle");
      await expect(toggle).toBeDisabled();
    }
  },
};
