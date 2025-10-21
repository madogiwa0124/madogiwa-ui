import type { Meta, StoryObj } from "@storybook/html";
import { expect, userEvent, within } from "storybook/test";
import { type SelectProperties, createSelect } from "./Select";

const meta: Meta<SelectProperties> = {
  title: "Components/Select",
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object",
      description: "Array of options for the select dropdown",
    },
    optgroups: {
      control: "object",
      description: "Array of option groups for the select dropdown",
    },
    separators: {
      control: "object",
      description: "Array of separators for the select dropdown",
    },
    value: {
      control: "text",
      description: "Current value of the select dropdown",
    },
    disabled: {
      control: "boolean",
      description: "Disables the select dropdown",
    },
    required: {
      control: "boolean",
      description: "Marks the select dropdown as required",
    },
    multiple: {
      control: "boolean",
      description: "Allows multiple selections in the select dropdown",
    },
    onChange: { action: "changed" },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Select component provides a customizable dropdown selection interface with support for grouping, separators, and modern styling. It enhances the native select element with improved visual design.

### Usage

Use Select components for choosing from a list of options, category selection, and form inputs requiring single or multiple selections. The component supports option grouping and visual separators for better organization.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-select | .--error | Applies error styling with danger border color |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-select | --select-padding | var(--spacing-3) | Internal padding for the select element |
| .m-select | --select-checkmark-gap | var(--spacing-4) | Gap for checkmark indicator |
| .m-select | --select-bg-color | var(--color-bg-light) | Background color of the select |
| .m-select | --select-border-color | var(--color-border) | Default border color |
| .m-select | --select-border | 2px solid var(--select-border-color) | Complete border specification |
| .m-select | --select-border-radius | var(--radius-sm) | Border radius of the select |
| .m-select | --select-invalid-border-color | var(--color-danger) | Border color for invalid state |
| .m-select | --select-hover-opacity | 0.8 | Opacity on hover state |
| .m-select | --select-disabled-opacity | 0.65 | Opacity when disabled |

### Caution

- Modern customizable select features require Chrome support
- Multiple select styling not supported
- Accessibility requires proper labeling
- Custom styling may not work in all browsers
        `,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // NOTE: This rule is disabled because the select element is not required in storybook.
            // https://dequeuniversity.com/rules/axe/4.10/select-name?application=RuleDescription
            // https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-20-level-a--aa-rules
            id: "select-name",
            enabled: false,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<SelectProperties>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default select dropdown with basic options.",
      },
    },
  },
  render: args => createSelect(args),
  args: {
    options: [
      { value: "", label: "--- Select ---" },
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect(select).not.toBeDisabled();

    await userEvent.selectOptions(select, "");
    await expect(select).toHaveValue("");
  },
};

export const Separator: Story = {
  parameters: {
    docs: {
      description: {
        story: "Select with visual separators between option groups.",
      },
    },
  },
  render: () => createSelect({
    options: [
      { value: "", label: "--- Select ---" },
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    separators: [3],
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    const separators = select.querySelectorAll("hr");

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect(select).not.toBeDisabled();
    await expect(separators.length).toBe(1);
  },
};

export const Group: Story = {
  parameters: {
    docs: {
      description: {
        story: "Select with option groups for better organization.",
      },
    },
  },
  render: () => createSelect({
    options: [
      { value: "", label: "--- Select ---" },
      { value: "option1", label: "Option 1" },
      { value: "option6", label: "Option 6" },
    ],
    optgroups: [
      {
        label: "Group 1",
        options: [
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
      },
      {
        label: "Group 2",
        options: [
          { value: "option4", label: "Option 4" },
          { value: "option5", label: "Option 5" },
        ],
      },
    ],
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    const optgroups = select.querySelectorAll("optgroup");

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect(select).not.toBeDisabled();
    await expect(optgroups.length).toBe(2);
    if (optgroups[0]) {
      await expect(optgroups[0].label).toBe("Group 1");
      await expect(optgroups[0].querySelectorAll("option").length).toBe(2);
    }
    if (optgroups[1]) {
      await expect(optgroups[1].label).toBe("Group 2");
      await expect(optgroups[1].querySelectorAll("option").length).toBe(2);
    }
  },
};

export const Multiple: Story = {
  parameters: {
    docs: {
      description: {
        story: "Multiple select mode (note: styling not fully supported).",
      },
    },
  },
  render: () => {
    const container = document.createElement("div");
    const notSupportedMessage = document.createElement("p");
    notSupportedMessage.textContent = "Multiple select is not supported";
    notSupportedMessage.style.fontWeight = "bold";
    container.append(notSupportedMessage);

    const select = createSelect({
      multiple: true,
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
    });

    container.append(select);
    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("listbox");

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect((select as HTMLSelectElement).multiple).toBe(true);

    await userEvent.selectOptions(select, ["option1", "option2"]);
    await expect(select).toHaveValue(["option1", "option2"]);
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Select in disabled state with pre-selected value.",
      },
    },
  },
  render: () => createSelect({
    disabled: true,
    value: "option2",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect(select).toBeDisabled();
    await expect(select).toHaveValue("option2");

    const initialValue = (select as HTMLSelectElement).value;
    await userEvent.click(select);
    await expect((select as HTMLSelectElement)).toHaveValue(initialValue);
  },
};

export const Invalid: Story = {
  parameters: {
    docs: {
      description: {
        story: "Select in invalid state showing validation error styling.",
      },
    },
  },
  render: () => {
    const container = document.createElement("div");
    const form = document.createElement("form");
    form.noValidate = true;

    const select = createSelect({
      required: true,
      id: "required-select",
      options: [
        { value: "", label: "-- Select --" },
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
    });

    form.reportValidity();
    form.append(select);
    container.append(form);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    const form = document.querySelector<HTMLFormElement>("form");

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect(select).toBeRequired();
    await expect(select).toHaveValue("");

    form?.reportValidity();

    await expect((select as HTMLSelectElement).validity.valid).toBe(false);
    await expect((select as HTMLSelectElement).validity.valueMissing).toBe(true);
  },
};
