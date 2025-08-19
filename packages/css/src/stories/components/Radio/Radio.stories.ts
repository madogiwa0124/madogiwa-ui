import type { Meta, StoryObj } from "@storybook/html";
import { createRadio, createRadioWithLabel } from "./Radio";
import { expect, userEvent } from "storybook/test";

const meta: Meta = {
  title: "Components/Radio",
  tags: ["autodocs"],
  argTypes: {},
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
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    return createRadio();
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const radio = canvas.querySelector(
      "input[type='radio']",
    ) as HTMLInputElement;

    await expect(radio).not.toBeNull();
    await expect(radio).toHaveClass("radio");
    await expect(radio).not.toBeChecked();
    await expect(radio).not.toBeDisabled();

    await userEvent.click(radio);
    await expect(radio).toBeChecked();
  },
};

export const Checked: Story = {
  render: () => {
    const checked = createRadio({
      name: "radio-checked",
      value: "radio-checked",
      checked: true,
    });
    const notChecked = createRadio({
      name: "radio-checked",
      value: "radio-checked",
      checked: false,
    });
    const root = document.createElement("div");
    root.style.display = "flex";
    root.style.flexDirection = "column";
    root.style.gap = "10px";
    root.append(checked);
    root.append(notChecked);
    root.classList.add("radio-group");
    return root;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const radio = canvas.querySelector(
      "input[type='radio']",
    ) as HTMLInputElement;

    await expect(radio).not.toBeNull();
    await expect(radio).toHaveClass("radio");
    await expect(radio).toBeChecked();
    await expect(radio).toHaveAttribute("name", "radio-checked");
    await expect(radio).toHaveAttribute("value", "radio-checked");
  },
};

export const Disabled: Story = {
  render: () => {
    return createRadio({
      name: "radio-disabled",
      value: "radio-disabled",
      disabled: true,
    });
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const radio = canvas.querySelector(
      "input[type='radio']",
    ) as HTMLInputElement;

    await expect(radio).not.toBeNull();
    await expect(radio).toHaveClass("radio");
    await expect(radio).not.toBeChecked();
    await expect(radio).toBeDisabled();
    await expect(radio).toHaveAttribute("name", "radio-disabled");
  },
};

export const CheckedDisabled: Story = {
  render: () => {
    return createRadio({
      name: "radio-checked-disabled",
      value: "radio-checked-disabled",
      checked: true,
      disabled: true,
    });
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const radio = canvas.querySelector(
      "input[type='radio']",
    ) as HTMLInputElement;

    await expect(radio).not.toBeNull();
    await expect(radio).toHaveClass("radio");
    await expect(radio).toBeChecked();
    await expect(radio).toBeDisabled();
    await expect(radio).toHaveAttribute("name", "radio-checked-disabled");
    await expect(radio).toHaveAttribute("value", "radio-checked-disabled");
  },
};

export const WithLabel: Story = {
  render: () => {
    return createRadioWithLabel(
      {
        name: "radio-with-label",
        value: "radio-with-label",
        id: "radio-with-label",
      },
      "Select this option",
    );
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const radio = canvas.querySelector(
      "input[type='radio']",
    ) as HTMLInputElement;
    const label = canvas.querySelector("label") as HTMLLabelElement;

    await expect(radio).not.toBeNull();
    await expect(radio).toHaveAttribute("id", "radio-with-label");
    await expect(radio).toHaveAttribute("name", "radio-with-label");
    await expect(radio).toHaveAttribute("value", "radio-with-label");

    await expect(label).not.toBeNull();
    await expect(label).toHaveAttribute("for", "radio-with-label");
    await expect(label).toHaveTextContent("Select this option");

    await expect(radio).not.toBeChecked();

    await userEvent.click(label);
    await expect(radio).toBeChecked();
  },
};
