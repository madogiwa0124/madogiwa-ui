import type { Meta, StoryObj } from "@storybook/html";
import { createCheckbox, createCheckboxWithLabel } from "./Checkbox";
import { expect, userEvent } from "storybook/test";

const meta: Meta = {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          "example description",
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // NOTE: This rule is disabled because the checkbox element is not required in storybook.
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
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    return createCheckbox();
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const checkbox = canvas.querySelector(
      "input[type='checkbox']",
    ) as HTMLInputElement;

    await expect(checkbox).not.toBeNull();
    await expect(checkbox).toHaveClass("checkbox");
    await expect(checkbox).not.toBeChecked();
    await expect(checkbox).not.toBeDisabled();

    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
  },
};

export const Checked: Story = {
  render: () => {
    return createCheckbox({
      name: "checkbox-checked",
      value: "checkbox-checked",
      checked: true,
    });
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const checkbox = canvas.querySelector(
      "input[type='checkbox']",
    ) as HTMLInputElement;

    await expect(checkbox).not.toBeNull();
    await expect(checkbox).toHaveClass("checkbox");
    await expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  },
};

export const Disabled: Story = {
  render: () => {
    return createCheckbox({
      name: "checkbox-disabled",
      value: "checkbox-disabled",
      disabled: true,
    });
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const checkbox = canvas.querySelector(
      "input[type='checkbox']",
    ) as HTMLInputElement;

    await expect(checkbox).not.toBeNull();
    await expect(checkbox).toHaveClass("checkbox");
    await expect(checkbox).not.toBeChecked();
    await expect(checkbox).toBeDisabled();
  },
};

export const CheckedDisabled: Story = {
  render: () => {
    return createCheckbox({
      name: "checkbox-checked-disabled",
      value: "checkbox-checked-disabled",
      checked: true,
      disabled: true,
    });
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const checkbox = canvas.querySelector(
      "input[type='checkbox']",
    ) as HTMLInputElement;

    await expect(checkbox).not.toBeNull();
    await expect(checkbox).toHaveClass("checkbox");
    await expect(checkbox).toBeChecked();
    await expect(checkbox).toBeDisabled();
  },
};

export const WithLabel: Story = {
  render: () => {
    return createCheckboxWithLabel(
      {
        name: "checkbox-with-label",
        value: "checkbox-with-label",
        id: "checkbox-with-label",
      },
      "I agree to the terms of service",
    );
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const checkbox = canvas.querySelector(
      "input[type='checkbox']",
    ) as HTMLInputElement;
    const label = canvas.querySelector("label") as HTMLLabelElement;
    await expect(checkbox).not.toBeNull();
    await expect(label).not.toBeNull();
    await expect(label).toHaveAttribute("for", "checkbox-with-label");
    await expect(label).toHaveTextContent("I agree to the terms of service");

    await expect(checkbox).not.toBeChecked();

    await userEvent.click(label);
    await expect(checkbox).toBeChecked();

    await userEvent.click(label);
    await expect(checkbox).not.toBeChecked();
  },
};
