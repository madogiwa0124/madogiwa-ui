import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type InputProperties, createInput } from "./Input";

const meta: Meta<InputProperties> = {
  title: "Components/Input",
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    inputType: {
      control: {
        type: "select",
      },
      options: ["text", "email", "password", "number", "date", "color", "file"],
    },
    block: {
      control: "boolean",
      description: "Makes the input element display as block-level with full width",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input element",
    },
    required: {
      control: "boolean",
      description: "Marks the input element as required",
    },
    error: {
      control: "boolean",
      description: "Applies error styling to the input element",
    },
    value: {
      control: "text",
      description: "Sets the value of the input element",
    },
    accept: {
      control: "text",
      description: "Specifies the accepted file types for file inputs",
    },
    transition: {
      control: "boolean",
      description: "Enables transitions for the input element",
    },
    onInput: { action: "input" },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Input component provides a styled form input element with various type support and validation states. It supports all standard HTML input types and includes visual feedback for different states.

### Usage

Use Input components for collecting user data in forms. The component automatically handles focus states, validation feedback, and responsive behavior. It can be used standalone or within form layouts for various data collection scenarios.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-input | .--block | Makes the input element display as block-level with full width |
| .m-input | .--error | Applies error styling with danger border color |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-input | --input-border-radius | var(--radius-sm) | Border radius of the input element |
| .m-input | --input-border-color | var(--color-border) | Default border color |
| .m-input | --input-border | 1px solid var(--input-border-color) | Complete border specification |
| .m-input | --input-bg-color | initial | Background color of the input |
| .m-input | --input-placeholder-color | var(--color-text-muted) | Color of placeholder text |
| .m-input | --input-hover-opacity | 0.8 | Opacity on hover and focus states |
| .m-input | --input-disabled-opacity | 0.65 | Opacity when disabled |
| .m-input | --input-disabled-color | var(--color-text-muted) | Text color when disabled |
| .m-input | --input-invalid-border-color | var(--color-danger) | Border color for invalid/error states |

### Caution

- The component relies on CSS custom properties for theming
- Validation states (invalid, error) should be properly managed in forms
- File inputs may require additional styling for different browsers
- Color inputs have limited styling options due to browser constraints
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
