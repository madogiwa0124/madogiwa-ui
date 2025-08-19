import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface TextareaProperties {
  placeholder: string;
  rows: number | null;
  cols: number | null;
  block: boolean;
  disabled: boolean;
}

const meta: Meta<TextareaProperties> = {
  title: "Components/Textarea",
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    rows: { control: "number" },
    cols: { control: "number" },
    block: { control: "boolean" },
    disabled: { control: "boolean" },
  },
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
            // NOTE: This rule is disabled because the textarea element is not required in storybook.
            // https://dequeuniversity.com/rules/axe/4.10/select-name?application=RuleDescription
            // https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-20-level-a--aa-rules
            id: "select-name",
            enabled: false,
          },
          {
            // NOTE: This rule is disabled because the textarea element is not required in storybook.
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
type Story = StoryObj<TextareaProperties>;

export const Default: Story = {
  render: (args) => {
    const textarea = document.createElement("textarea");
    textarea.className = "textarea";
    textarea.classList.toggle("--block", args["block"]);
    textarea.placeholder = args["placeholder"];
    if (args["rows"]) textarea.rows = args["rows"];
    if (args["cols"]) textarea.cols = args["cols"];
    textarea.disabled = args["disabled"];
    return textarea;
  },
  args: {
    placeholder: "Type your message here...",
    rows: null,
    cols: null,
    block: false,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const textarea = canvas.querySelector("textarea") as HTMLTextAreaElement;

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("textarea");
    await expect(textarea).not.toBeDisabled();
  },
};

export const Disabled: Story = {
  render: () => {
    const textarea = document.createElement("textarea");
    textarea.className = "textarea";
    textarea.value = "This is a disabled textarea";
    textarea.disabled = true;
    return textarea;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const textarea = canvas.querySelector("textarea") as HTMLTextAreaElement;

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("textarea");
    await expect(textarea).toBeDisabled();
  },
};

export const Invalid: Story = {
  render: () => {
    const form = document.createElement("form");
    form.className = "textarea-form";
    form.noValidate = true;

    const textarea = document.createElement("textarea");
    textarea.className = "textarea";
    textarea.required = true;
    form.append(textarea);
    form.reportValidity();
    return form;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const textarea = canvas.querySelector("textarea") as HTMLTextAreaElement;

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("textarea");
    await expect(textarea).toBeRequired();
  },
};

export const Placeholder: Story = {
  render: () => {
    const textarea = document.createElement("textarea");
    textarea.className = "textarea";
    textarea.placeholder = "Enter your detailed message here...";
    return textarea;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const textarea = canvas.querySelector("textarea") as HTMLTextAreaElement;

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("textarea");
    await expect(textarea).toHaveAttribute(
      "placeholder",
      "Enter your detailed message here...",
    );
  },
};

export const Block: Story = {
  render: () => {
    const textarea = document.createElement("textarea");
    textarea.className = "textarea --block";
    textarea.placeholder = "Block level textarea";
    return textarea;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const textarea = canvas.querySelector("textarea") as HTMLTextAreaElement;

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("textarea");
    await expect(textarea).toHaveClass("--block");
  },
};

export const AutoFit: Story = {
  render: () => {
    const textarea = document.createElement("textarea");
    textarea.className = "textarea --auto-fit";
    textarea.placeholder = "Auto-fit textarea";
    return textarea;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const textarea = canvas.querySelector("textarea") as HTMLTextAreaElement;

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("textarea");
    await expect(textarea).toHaveClass("--auto-fit");
  },
};
