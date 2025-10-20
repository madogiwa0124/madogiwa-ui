import type { Meta, StoryObj } from "@storybook/html";
import { type RadioProperties, createRadio, createRadioWithLabel } from "./Radio";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<RadioProperties & { text: string }> = {
  title: "Components/Radio",
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The name attribute for grouping radio buttons",
    },
    value: {
      control: "text",
      description: "The value attribute of the radio button",
    },
    checked: {
      control: "boolean",
      description: "Sets the radio button as checked",
    },
    disabled: {
      control: "boolean",
      description: "Disables the radio button",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Radio component provides a circular selection input for exclusive choices within a group. It offers clear visual feedback and smooth interactions for single-choice scenarios.

### Usage

Use Radio components for mutually exclusive options, preference selection, and form inputs where only one choice is allowed. Group related radio buttons with the same name attribute for proper behavior.

### Modifiers

No specific modifiers are defined for this component.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-radio | --radio-size | 1.2em | Size of the radio button |
| .m-radio | --radio-border-color | var(--color-dark) | Border color of the radio button |
| .m-radio | --radio-bg-color | var(--color-light) | Background color when unchecked |
| .m-radio | --radio-lighter-brightness | 150% | Brightness for hover/focus states |
| .m-radio | --radio-disabled-opacity | 0.65 | Opacity when disabled |

### Caution

- Radio buttons with the same name attribute form an exclusive group
- Proper labeling is essential for accessibility
- The checked state uses ::after pseudo-element for the indicator
- Disabled state prevents interaction while maintaining visual feedback
- User-select property may not be supported in all browsers
        `,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // NOTE: This rule is disabled because the radio element is not required in storybook.
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
type Story = StoryObj<RadioProperties & { text: string }>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default radio button with basic interaction.",
      },
    },
  },
  render: args => createRadio(args),
  args: {
    name: "radio-default",
    value: "radio-default",
    checked: false,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole("radio");

    await expect(radio).not.toBeNull();
    await expect(radio).toHaveClass("m-radio");
    await expect(radio).not.toBeChecked();
    await expect(radio).not.toBeDisabled();

    await userEvent.click(radio);
    await expect(radio).toBeChecked();
  },
};

export const Checked: Story = {
  parameters: {
    docs: {
      description: {
        story: "Radio button group showing checked and unchecked states.",
      },
    },
  },
  render: () => {
    const root = document.createElement("div");
    root.style.cssText = "display: flex; flex-direction: column; gap: 10px;";
    root.classList.add("radio-group");

    const checked = createRadio({
      name: "radio-checked",
      value: "radio-checked",
      checked: true,
    });
    const notChecked = createRadio({
      name: "radio-checked",
      value: "radio-not-checked",
      checked: false,
    });

    root.append(checked, notChecked);
    return root;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole("radio");
    const checkedRadio = radios[0];

    await expect(checkedRadio).not.toBeNull();
    await expect(checkedRadio).toHaveClass("m-radio");
    await expect(checkedRadio).toBeChecked();
    await expect(checkedRadio).toHaveAttribute("name", "radio-checked");
    await expect(checkedRadio).toHaveAttribute("value", "radio-checked");
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Radio button in disabled state preventing interaction.",
      },
    },
  },
  render: () => {
    const checked = createRadio({
      name: "radio-disabled",
      value: "radio-disabled",
      checked: true,
      disabled: true,
    });
    const notChecked = createRadio({
      name: "radio-disabled",
      value: "radio-disabled",
      checked: false,
      disabled: true,
    });
    const container = document.createElement("div");
    container.style.cssText = "display: flex; flex-direction: column; gap: 10px;";
    container.append(checked, notChecked);
    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole("radio");
    for (const radio of radios) {
      await expect(radio).not.toBeNull();
      await expect(radio).toHaveClass("m-radio");
      await expect(radio).toBeDisabled();
    }
  },
};

export const WithLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: "Radio button with associated label for better accessibility.",
      },
    },
  },
  render: args => createRadioWithLabel(
    {
      name: args.name ?? "radio-with-label",
      value: args.value ?? "radio-with-label",
      id: args.id ?? "radio-with-label-default",
      disabled: args.disabled ?? false,
    },
    args.text,
  ),
  args: {
    name: "radio-with-label",
    value: "radio-with-label",
    id: "radio-with-label",
    disabled: false,
    text: "Select this option",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole("radio");
    const label = canvas.getByText(args.text);

    await expect(radio).not.toBeNull();
    await expect(radio).toHaveAttribute("id", args.id);
    await expect(radio).toHaveAttribute("name", args.name);
    await expect(radio).toHaveAttribute("value", args.value);

    await expect(label).not.toBeNull();
    await expect(label).toHaveAttribute("for", args.id);
    await expect(label).toHaveTextContent(args.text);

    await expect(radio).not.toBeChecked();

    await userEvent.click(label);
    await expect(radio).toBeChecked();
  },
};
