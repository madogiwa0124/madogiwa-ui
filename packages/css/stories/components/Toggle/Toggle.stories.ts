import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type ToggleProperties, createToggle } from "./Toggle";

const meta: Meta<ToggleProperties> = {
  title: "Components/Toggle",
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables the toggle switch",
    },
    checked: {
      control: "boolean",
      description: "Indicates whether the toggle is checked",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Toggle component provides a switch-style checkbox input with smooth animations and visual feedback. It offers an intuitive on/off control for boolean settings.

### Usage

Use Toggle components for binary choices, settings toggles, and feature enable/disable controls. The component provides clear visual state indication and smooth transitions for better user experience.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-toggle | --toggle-size | 1.2em | Size of the toggle switch |
| .m-toggle | --toggle-transition | 0.1s ease | Animation timing for state changes |
| .m-toggle | --toggle-width | calc(var(--toggle-size) * 1.8) | Width of the toggle track |
| .m-toggle | --toggle-checked-translate-x | calc(var(--toggle-size) * 0.8) | Translation distance when checked |
| .m-toggle | --toggle-bg-color | var(--color-dark) | Background color when unchecked |
| .m-toggle | --toggle-bg-color-checked | var(--color-primary) | Background color when checked |
| .m-toggle | --toggle-button-color | var(--color-light) | Color of the sliding button |
| .m-toggle | --toggle-button-scale | 0.8 | Scale factor for the button |
| .m-toggle | --toggle-lighter-brightness | 150% | Brightness for hover/focus states |
| .m-toggle | --toggle-disabled-opacity | 0.5 | Opacity when disabled |

### Data Attributes

No specific data attributes are defined for this component.

### Caution

- The component requires proper labeling for accessibility
- Animations depend on CSS transitions and transforms
- Color variables should provide sufficient contrast
- Disabled state prevents interaction but maintains visual clarity
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
