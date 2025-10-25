import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type TextareaProperties, createTextarea } from "./Textarea";

const meta: Meta<TextareaProperties> = {
  title: "Components/Textarea",
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "The placeholder text for the component",
    },
    rows: {
      control: "number",
      description: "The rows attribute for the component",
    },
    cols: {
      control: "number",
      description: "The cols attribute for the component",
    },
    block: {
      control: "boolean",
      description: "The block display modifier for the component",
    },
    disabled: {
      control: "boolean",
      description: "The disabled state for the component",
    },
    required: {
      control: "boolean",
      description: "The required attribute for the component",
    },
    error: {
      control: "boolean",
      description: "The error state modifier for the component",
    },
    autoFit: {
      control: "boolean",
      description: "The auto-fit modifier for the component",
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

Use Textarea components for collecting longer text input such as comments, descriptions, messages, and feedback. Perfect for forms requiring multi-line text input with proper validation and accessibility support.

### Example code

\`\`\`html
<!-- Basic textarea -->
<textarea class="m-textarea" placeholder="Enter your message..."></textarea>

<!-- Block textarea with auto-fit -->
<textarea class="m-textarea --block --auto-fit" rows="4" placeholder="Type your feedback here..."></textarea>

<!-- Error state textarea -->
<textarea class="m-textarea --error" placeholder="This field has an error"></textarea>

<!-- Disabled textarea -->
<textarea class="m-textarea" disabled>This textarea is disabled</textarea>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-textarea | .--block | Makes the textarea display as block-level with full width |
| .m-textarea | .--error | Applies error styling with danger border color |
| .m-textarea | .--auto-fit | Enables automatic height adjustment based on content |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --textarea-border-radius | var(--radius-sm) | Border radius of the textarea element |
| --textarea-border-color | var(--color-border) | Default border color |
| --textarea-border | 1px solid var(--textarea-border-color) | Complete border specification |
| --textarea-bg-color | initial | Background color of the textarea |
| --textarea-placeholder-color | var(--color-text-muted) | Color of placeholder text |
| --textarea-hover-opacity | 0.8 | Opacity on hover and focus states |
| --textarea-hover-border-color | var(--color-border) | Border color on hover and focus |
| --textarea-disabled-opacity | 0.65 | Opacity when disabled |
| --textarea-disabled-color | var(--color-text-muted) | Text color when disabled |
| --textarea-invalid-border-color | var(--color-danger) | Border color for invalid/error states |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- The auto-fit modifier uses \`field-sizing\` property with limited browser support
- Always provide labels for accessibility compliance
- Test validation states for proper error messaging
- Consider content length limits for better user experience
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
