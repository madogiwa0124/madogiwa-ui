import type { Meta, StoryObj } from "@storybook/html";
import { expect, userEvent, within } from "storybook/test";

export interface FieldProperties {
  id?: string;
  label?: string;
  help?: string;
  error?: string;
}

const createField = (
  properties: FieldProperties = {},
): HTMLDivElement => {
  const {
    id = "field",
    label = "Email",
    help = "",
    error = "",
  } = properties;

  const field = document.createElement("div");
  field.className = "m-field";

  const labelElement = document.createElement("label");
  labelElement.className = "m-label";
  labelElement.htmlFor = id;
  labelElement.textContent = label;

  const input = document.createElement("input");
  input.className = "m-input";
  input.id = id;
  input.type = "email";

  const helpElement = document.createElement("div");
  helpElement.className = "m-field__help";
  helpElement.id = `${id}-help`;
  helpElement.textContent = help;

  // NOTE: The error element is always rendered so that it works as a live region.
  const errorElement = document.createElement("div");
  errorElement.className = "m-field__error";
  errorElement.id = `${id}-error`;
  errorElement.setAttribute("aria-live", "polite");
  errorElement.textContent = error;

  const describedBy = [error && errorElement.id, help && helpElement.id].filter(Boolean).join(" ");
  if (describedBy) input.setAttribute("aria-describedby", describedBy);
  if (error) {
    input.classList.add("--error");
    input.setAttribute("aria-invalid", "true");
  }

  field.append(labelElement, input);
  if (help) field.append(helpElement);
  field.append(errorElement);

  return field;
};

type FieldStoryProperties = {
  label: string;
  help: string;
  error: string;
};

const meta: Meta<FieldStoryProperties> = {
  title: "Components/Field",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "The label text for the field",
    },
    help: {
      control: { type: "text" },
      description: "The help text displayed below the control",
    },
    error: {
      control: { type: "text" },
      description: "The error message displayed below the control",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Field component groups a label, a single form control, help text and an error message, and lays them out vertically with consistent spacing.

### Usage

Use a field for each form control that needs a visible label, help text or an error message. Use one field per control.

### Example code

\`\`\`html
<div class="m-field">
  <label class="m-label" for="email">Email</label>
  <input
    class="m-input --error"
    id="email"
    type="email"
    aria-invalid="true"
    aria-describedby="email-error email-help"
  >
  <div class="m-field__help" id="email-help">We never share your email.</div>
  <div class="m-field__error" id="email-error" aria-live="polite">Enter a valid email address.</div>
</div>
\`\`\`

### Elements

| Name | Description |
| ---- | ----------- |
| .m-field__help | Help text for the control |
| .m-field__error | Error message for the control. Takes no space when empty |

### Modifiers

This component does not use modifiers.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-field | --field-gap | var(--spacing-1) | Space between the children of the field |
| .m-field | --field-text-font-size | var(--text-sm) | Font size of the help text and the error message |
| .m-field | --field-text-line-height | var(--text-sm--line-height) | Line height of the help text and the error message |
| .m-field | --field-help-color | var(--color-text-subtle) | Text color of the help text |
| .m-field | --field-error-color | var(--color-danger) | Text color of the error message |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Associate the label with the control using \`for\` and \`id\`
- Reference the help text and the error message from the control with \`aria-describedby\`. Only reference elements that have content
- Set \`aria-invalid="true"\` and the \`--error\` modifier on the control while an error message is shown
- Keep the \`.m-field__error\` element in the DOM with \`aria-live="polite"\` and only change its content, so that screen readers announce new errors
- Do not rely on color alone to indicate an error. Always show an error message
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<FieldStoryProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    container.style.maxWidth = "300px";
    container.append(createField({ id: "default-email", label: args.label, help: args.help, error: args.error }));
    return container;
  },
  args: {
    label: "Email",
    help: "We never share your email.",
    error: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvasElement.querySelector(".m-field") as HTMLElement;
    const label = canvas.getByText("Email");
    const input = canvas.getByRole("textbox");
    const help = canvas.getByText("We never share your email.");

    await expect(field).toBeInTheDocument();
    await expect(input).toHaveAccessibleDescription("We never share your email.");
    await expect(input).not.toHaveAttribute("aria-invalid");

    // Test spacing between children
    await expect(getComputedStyle(label).marginBlockStart).toBe("0px");
    await expect(getComputedStyle(input).marginBlockStart).not.toBe("0px");
    await expect(getComputedStyle(help).marginBlockStart).not.toBe("0px");

    // Test that the control keeps its own width
    await expect(input.getBoundingClientRect().width).toBeLessThan(field.getBoundingClientRect().width);

    // Test label association
    await userEvent.click(label);
    await expect(input).toHaveFocus();
  },
};

export const WithError: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.maxWidth = "300px";
    container.append(createField({
      id: "error-email",
      label: "Email",
      help: "We never share your email.",
      error: "Enter a valid email address.",
    }));
    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    const error = canvas.getByText("Enter a valid email address.");
    const help = canvas.getByText("We never share your email.");

    await expect(input).toHaveAttribute("aria-invalid", "true");
    await expect(input).toHaveClass("--error");
    await expect(input).toHaveAccessibleDescription("Enter a valid email address. We never share your email.");
    await expect(error).toHaveAttribute("aria-live", "polite");

    // Test error and help text styling
    await expect(getComputedStyle(error).color).not.toBe(getComputedStyle(help).color);
    await expect(getComputedStyle(error).fontSize).toBe(getComputedStyle(help).fontSize);
  },
  parameters: {
    docs: {
      description: {
        story: "Field with an error message. The control references the error message and the help text with aria-describedby.",
      },
    },
  },
};

export const EmptyError: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.maxWidth = "300px";
    container.append(createField({ id: "empty-error-email", label: "Email" }));
    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    const error = canvasElement.querySelector(".m-field__error") as HTMLElement;

    // Test that the empty error element stays in the DOM but takes no space
    await expect(error).toBeInTheDocument();
    await expect(getComputedStyle(error).display).not.toBe("none");
    await expect(error.getBoundingClientRect().height).toBe(0);
    await expect(getComputedStyle(error).marginBlockStart).toBe("0px");
    await expect(input).not.toHaveAttribute("aria-describedby");

    // Test that an error message can be shown by changing the content only
    error.textContent = "This field is required.";
    await expect(error.getBoundingClientRect().height).toBeGreaterThan(0);
    await expect(getComputedStyle(error).marginBlockStart).not.toBe("0px");
  },
  parameters: {
    docs: {
      description: {
        story: "Field without an error message. The empty error element is kept in the DOM as a live region and takes no space.",
      },
    },
  },
};
