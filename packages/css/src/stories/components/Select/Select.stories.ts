import type { Meta, StoryObj } from "@storybook/html";
import { expect, userEvent } from "storybook/test";

const meta: Meta = {
  title: "Components/Select",
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
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const select = document.createElement("select");
    select.className = "select";
    select.innerHTML = `
      <option value="">--- Select ---</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      `;
    return select;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const select = canvas.querySelector("select") as HTMLSelectElement;

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("select");
    await expect(select).not.toBeDisabled();

    await userEvent.selectOptions(select, "");
    await expect(select).toHaveValue("");
  },
};

export const Separator: Story = {
  render: () => {
    const select = document.createElement("select");
    select.className = "select";
    select.innerHTML = `
      <option value="">--- Select ---</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <hr />
      <option value="option3">Option 3</option>
      `;
    return select;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const select = canvas.querySelector("select") as HTMLSelectElement;
    const separators = select.querySelectorAll("hr");

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("select");
    await expect(select).not.toBeDisabled();
    await expect(separators.length).toBe(1);
  },
};

export const Group: Story = {
  render: () => {
    const select = document.createElement("select");
    select.className = "select";
    select.innerHTML = `
      <option value="">--- Select ---</option>
      <option value="option1">Option 1</option>
      <optgroup label="Group 1">
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </optgroup>
      <optgroup label="Group 2">
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
      </optgroup>
      <option value="option6">Option 6</option>
      `;
    return select;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const select = canvas.querySelector("select") as HTMLSelectElement;
    const optgroups = select.querySelectorAll("optgroup");

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("select");
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
  render: () => {
    const container = document.createElement("div");
    const notSupportedMessage = document.createElement("p");
    notSupportedMessage.textContent = "Multiple select is not supported";
    notSupportedMessage.style.fontWeight = "bold";
    container.append(notSupportedMessage);
    const select = document.createElement("select");
    select.className = "select";
    select.multiple = true;
    select.innerHTML = `
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      `;
    container.append(select);
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const select = canvas.querySelector("select") as HTMLSelectElement;

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("select");
    await expect(select.multiple).toBe(true);

    await userEvent.selectOptions(select, ["option1", "option2"]);
    await expect(select).toHaveValue(["option1", "option2"]);
  },
};

export const Disabled: Story = {
  render: () => {
    const select = document.createElement("select");
    select.className = "select";
    select.disabled = true;
    select.innerHTML = `
      <option value="option1">Option 1</option>
      <option value="option2" selected>Option 2</option>
      <option value="option3">Option 3</option>
      `;
    return select;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const select = canvas.querySelector("select") as HTMLSelectElement;

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("select");
    await expect(select).toBeDisabled();
    await expect(select).toHaveValue("option2");

    const initialValue = select.value;
    await userEvent.click(select);
    await expect(select).toHaveValue(initialValue);
  },
};

export const Invalid: Story = {
  render: () => {
    const container = document.createElement("div");
    const form = document.createElement("form");
    form.noValidate = true;

    const select = document.createElement("select");
    select.className = "select";
    select.id = "required-select";
    select.required = true;
    select.innerHTML = `
      <option value="">-- Select --</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      `;

    form.reportValidity();
    form.append(select);
    container.append(form);

    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const select = canvas.querySelector("select") as HTMLSelectElement;
    const form = canvas.querySelector("form") as HTMLFormElement;

    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("select");
    await expect(select).toBeRequired();
    await expect(select).toHaveValue("");

    form.reportValidity();

    await expect(select.validity.valid).toBe(false);
    await expect(select.validity.valueMissing).toBe(true);
  },
};
