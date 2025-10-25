import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type InputProperties, createInput } from "./Input";

const meta: Meta<InputProperties> = {
  title: "Components/Input",
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "The placeholder text for the component",
    },
    inputType: {
      control: {
        type: "select",
      },
      options: ["text", "email", "password", "number", "date", "color", "file"],
      description: "The input type for the component",
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
    value: {
      control: "text",
      description: "The value attribute for the component",
    },
    accept: {
      control: "text",
      description: "The accept attribute for the component",
    },
    transition: {
      control: "boolean",
      description: "The transition animation modifier for the component",
    },
    onInput: { action: "input" },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Input component provides a styled form input element with various type support and validation states.

### Usage

Use Input components for collecting user data in forms. Perfect for text input, email addresses, passwords, numbers, dates, and file uploads with proper validation feedback and responsive behavior.

### Example code

\`\`\`html
<!-- Basic text input -->
<input class="m-input" type="text" placeholder="Enter your name">

<!-- Block input with transition -->
<input class="m-input --block --transition" type="email" placeholder="Enter your email" required>

<!-- Error state input -->
<input class="m-input --error" type="password" placeholder="Enter password">

<!-- Disabled input -->
<input class="m-input" type="text" value="Read only value" disabled>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-input | .--block | Makes the input element display as block-level with full width |
| .m-input | .--error | Applies error styling with danger border color |
| .m-input | .--transition | Enables smooth transitions for border color and opacity |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --input-border-radius | var(--radius-sm) | Border radius of the input element |
| --input-border-color | var(--color-border) | Default border color |
| --input-border | 1px solid var(--input-border-color) | Complete border specification |
| --input-bg-color | initial | Background color of the input |
| --input-placeholder-color | var(--color-text-muted) | Color of placeholder text |
| --input-hover-opacity | 0.8 | Opacity on hover and focus states |
| --input-hover-border-color | var(--color-border) | Border color on hover and focus |
| --input-disabled-opacity | 0.65 | Opacity when disabled |
| --input-disabled-color | var(--color-text-muted) | Text color when disabled |
| --input-invalid-border-color | var(--color-danger) | Border color for invalid/error states |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use proper input types for better user experience and validation
- Ensure sufficient color contrast for accessibility
- Consider motion preferences when using the transition modifier
- Provide clear validation feedback and error messages
        `,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // NOTE: This rule is disabled because the input element is not required in storybook.
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
type Story = StoryObj<InputProperties>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default text input with basic styling and placeholder text.",
      },
    },
  },
  render: args => createInput(args),
  args: {
    placeholder: "Type something...",
    inputType: "text",
    block: false,
    disabled: false,
    required: false,
    error: false,
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await expect(input).not.toBeNull();
    await expect(input).toHaveClass("m-input");
    await expect(input).not.toBeDisabled();
    await expect(input).not.toBeRequired();
  },
};

export const Types: Story = {
  parameters: {
    docs: {
      description: {
        story: "Various input types supported by the Input component, including text, email, password, number, date, color, and file inputs.",
      },
    },
  },
  render: (args) => {
    const container = document.createElement("div");
    container.style.cssText = "display: flex; flex-direction: column; gap: 10px; width: 350px;";

    const inputs = [
      { inputType: "text" as const, placeholder: "Text input" },
      { inputType: "email" as const, placeholder: "Email input" },
      { inputType: "password" as const, placeholder: "Password input" },
      { inputType: "number" as const, placeholder: "Number input" },
      { inputType: "date" as const },
      { inputType: "color" as const, value: "#ff0000" },
      { inputType: "file" as const, accept: ".txt, .pdf" },
    ];

    for (const props of inputs) {
      const createInputArguments = { ...args, ...props };
      container.append(createInput(createInputArguments));
    }

    return container;
  },
  args: {
    block: false,
    disabled: false,
    required: false,
    error: false,
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInputs = canvas.getAllByRole("textbox");

    await expect(textInputs.length).toBeGreaterThan(0);
    for (const input of textInputs) {
      await expect(input).toHaveClass("m-input");
    }
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Input in disabled state with reduced opacity and disabled cursor.",
      },
    },
  },
  render: () => createInput({
    value: "Disabled text field",
    disabled: true,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue("Disabled text field");

    await expect(input).not.toBeNull();
    await expect(input).toHaveClass("m-input");
    await expect(input).toBeDisabled();
  },
};

export const Block: Story = {
  parameters: {
    docs: {
      description: {
        story: "Block-level input that takes full width of its container.",
      },
    },
  },
  render: () => createInput({
    placeholder: "Block level input",
    block: true,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Block level input");

    await expect(input).not.toBeNull();
    await expect(input).toHaveClass("m-input");
    await expect(input).toHaveClass("--block");
  },
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: "Input with error modifier showing danger border color for validation errors.",
      },
    },
  },
  render: () => createInput({
    placeholder: "Input with error",
    error: true,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Input with error");

    await expect(input).not.toBeNull();
    await expect(input).toHaveClass("m-input");
    await expect(input).toHaveClass("--error");
  },
};
