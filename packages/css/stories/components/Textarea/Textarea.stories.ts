import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type TextareaProperties, createTextarea } from "./Textarea";

const meta: Meta<TextareaProperties> = {
  title: "Components/Textarea",
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
    rows: {
      control: "number",
      description: "Number of visible text lines",
    },
    cols: {
      control: "number",
      description: "Number of visible text columns",
    },
    block: {
      control: "boolean",
      description: "Display the textarea as a block element",
    },
    disabled: {
      control: "boolean",
      description: "Disable the textarea",
    },
    required: {
      control: "boolean",
      description: "Indicate whether the textarea is required",
    },
    error: {
      control: "boolean",
      description: "Indicate whether the textarea has an error",
    },
    autoFit: {
      control: "boolean",
      description: "Enable automatic height adjustment",
    },
    value: {
      control: "text",
      description: "Controlled value of the textarea",
    },
    onChange: { action: "input" },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Textarea component provides a multi-line text input element with various styling options and responsive behavior. It supports automatic content sizing and proper validation states for enhanced user experience.

### Usage

Use Textarea components for collecting longer text input such as comments, descriptions, messages, and feedback. The component handles various states including validation, disabled, and auto-sizing for optimal user experience across different form scenarios.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-textarea | .--block | Makes the textarea display as block-level with full width |
| .m-textarea | .--error | Applies error styling with danger border color |
| .m-textarea | .--auto-fit | Enables automatic height adjustment based on content |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-textarea | --textarea-border-radius | var(--radius-sm) | Border radius of the textarea element |
| .m-textarea | --textarea-border-color | var(--color-border) | Default border color |
| .m-textarea | --textarea-border | 1px solid var(--textarea-border-color) | Complete border specification |
| .m-textarea | --textarea-bg-color | initial | Background color of the textarea |
| .m-textarea | --textarea-placeholder-color | var(--color-text-muted) | Color of placeholder text |
| .m-textarea | --textarea-hover-opacity | 0.8 | Opacity on hover and focus states |
| .m-textarea | --textarea-disabled-opacity | 0.65 | Opacity when disabled |
| .m-textarea | --textarea-disabled-color | var(--color-text-muted) | Text color when disabled |
| .m-textarea | --textarea-invalid-border-color | var(--color-danger) | Border color for invalid/error states |

### Caution

- The auto-fit modifier uses field-sizing property with limited browser support
- Validation states (invalid, error) should be properly managed in forms
- Proper labeling is essential for accessibility
        `,
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
  parameters: {
    docs: {
      description: {
        story: "Default textarea with basic styling and placeholder text.",
      },
    },
  },
  render: args => createTextarea(args),
  args: {
    placeholder: "Type your message here...",
    block: false,
    disabled: false,
    required: false,
    error: false,
    autoFit: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("m-textarea");
    await expect(textarea).not.toBeDisabled();
    await expect(textarea).not.toBeRequired();
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Textarea in disabled state with reduced opacity and disabled cursor.",
      },
    },
  },
  render: () => createTextarea({
    value: "This is a disabled textarea",
    disabled: true,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByDisplayValue("This is a disabled textarea");

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("m-textarea");
    await expect(textarea).toBeDisabled();
  },
};

export const Invalid: Story = {
  parameters: {
    docs: {
      description: {
        story: "Textarea in invalid state showing validation error styling.",
      },
    },
  },
  render: () => {
    const form = document.createElement("form");
    form.style.cssText = "display: contents;";
    form.noValidate = true;

    const textarea = createTextarea({
      placeholder: "Required field",
      required: true,
    });

    form.append(textarea);
    form.reportValidity();
    return form;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("m-textarea");
    await expect(textarea).toBeRequired();
    await expect(textarea).toBeInvalid();
  },
};

export const Block: Story = {
  parameters: {
    docs: {
      description: {
        story: "Block-level textarea that takes full width of its container.",
      },
    },
  },
  render: () => createTextarea({
    placeholder: "Block level textarea",
    block: true,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText("Block level textarea");

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("m-textarea");
    await expect(textarea).toHaveClass("--block");
  },
};

export const AutoFit: Story = {
  parameters: {
    docs: {
      description: {
        story: "Textarea with auto-fit modifier that adjusts height based on content (limited browser support).",
      },
    },
  },
  render: () => createTextarea({
    placeholder: "Auto-fit textarea",
    autoFit: true,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText("Auto-fit textarea");

    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("m-textarea");
    await expect(textarea).toHaveClass("--auto-fit");
  },
};
