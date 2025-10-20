import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type SnackbarProperties, createSnackbar } from "./Snackbar";

const meta: Meta<SnackbarProperties> = {
  title: "Components/Snackbar",
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: "text",
      description: "The message content displayed in the snackbar.",
    },
    position: {
      control: {
        type: "select",
      },
      options: ["default", "right-top", "right-bottom", "left-top"],
      description: "Position of the snackbar on the screen.",
    },
    transition: {
      control: { type: "boolean" },
      description: "Enable or disable the transition effect.",
    },
    actions: { control: "object" },
    id: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Snackbar component provides temporary notification messages that appear at the bottom of the screen. It uses the Popover API for modern, accessible overlay behavior with customizable positioning and transitions.

### Usage

Use Snackbars for brief confirmations, error messages, and status updates that don't require immediate user action. They automatically dismiss or can be manually closed by users. Ideal for form submission feedback, connection status, and non-critical notifications.

### Elements

| Name | Description |
| ---- | ----------- |
| .m-snackbar | The main container element with fixed positioning |
| .m-snackbar__body | Content wrapper with flex layout for message and actions |
| .m-snackbar__content | Container for the notification message |
| .m-snackbar__actions | Container for action buttons (OK, Close, etc.) |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-snackbar | .--transition | Enables smooth fade-in/out animations |
| .m-snackbar | .--right-bottom | Positions snackbar at bottom-right corner |
| .m-snackbar | .--left-top | Positions snackbar at top-left corner |
| .m-snackbar | .--right-top | Positions snackbar at top-right corner |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-snackbar | --snackbar-position-x | var(--spacing-4) | Horizontal distance from screen edge |
| .m-snackbar | --snackbar-position-y | var(--spacing-4) | Vertical distance from screen edge |
| .m-snackbar | --snackbar-zindex | var(--zindex-snackbar) | Z-index for proper layering |
| .m-snackbar | --snackbar-margin-for-small-screens | var(--spacing-2) | Margin on mobile devices |
| .m-snackbar | --snackbar-bg-color | var(--color-primary) | Background color of the snackbar |
| .m-snackbar | --snackbar-text-color | var(--color-text-light) | Text color for message content |
| .m-snackbar | --snackbar-border-radius | var(--radius-sm) | Border radius for rounded corners |
| .m-snackbar | --snackbar-box-shadow | var(--shadow-md) | Drop shadow for elevation |
| .m-snackbar | --snackbar-inner-spacing | var(--spacing-3) | Internal padding and gaps |
| .m-snackbar | --snackbar-action-spacing | var(--spacing-2) | Spacing between action buttons |
| .m-snackbar | --snackbar-transition-duration | 0.2s | Animation timing for transitions |

### Caution

- Requires modern browser support for Popover API
- Z-index variables must be properly configured for layering
- Mobile responsiveness handled through CSS media queries
- Starting-style animations require recent browser versions
- Position modifiers affect responsive behavior on small screens
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<SnackbarProperties>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default snackbar notification with message and action buttons.",
      },
    },
  },
  render: args => createSnackbar(args),
  args: {
    message: "This is a snackbar message.",
    position: "default",
    transition: false,
    id: "default-snackbar",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Show Snackbar");
    button.click();

    const snackbar = canvas.getByRole("alert");

    await expect(button).not.toBeNull();
    await expect(snackbar).not.toBeNull();
    await expect(snackbar).toHaveClass("m-snackbar");

    await expect(snackbar).toBeVisible();

    const closeButton = canvas.getByLabelText("Close snackbar");
    closeButton.click();
    await expect(snackbar).not.toBeVisible();
  },
};

export const WithTransition: Story = {
  parameters: {
    docs: {
      description: {
        story: "Snackbar with smooth fade-in/out transition effects.",
      },
    },
  },
  render: () => createSnackbar({
    message: "Notification with smooth transitions.",
    transition: true,
    id: "transition-snackbar",
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Show Snackbar");
    button.click();

    const snackbar = canvas.getByRole("alert");
    await expect(snackbar).toHaveClass("m-snackbar");
    await expect(snackbar).toHaveClass("--transition");
  },
};

export const Positions: Story = {
  parameters: {
    docs: {
      description: {
        story: "Snackbar positioned at different corners of the screen.",
      },
    },
  },
  render: () => {
    const container = document.createElement("div");
    container.style.cssText = "display: flex; flex-direction: column; gap: 10px;";

    const positions: Array<{ position: "default" | "right-top" | "right-bottom" | "left-top"; label: string }> = [
      { position: "default", label: "Bottom Left (default)" },
      { position: "right-bottom", label: "Bottom Right" },
      { position: "left-top", label: "Top Left" },
      { position: "right-top", label: "Top Right" },
    ];

    for (const [index, { position, label }] of positions.entries()) {
      const snackbarContainer = createSnackbar({
        message: `Snackbar at ${label}`,
        position,
        id: `snackbar-${String(index)}`,
      });

      const button = snackbarContainer.querySelector("button") as HTMLButtonElement;
      button.textContent = `Show ${label}`;

      container.append(snackbarContainer);
    }

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByText(/Show/);

    await expect(buttons.length).toBe(4);

    for (const button of buttons) {
      await expect(button).toHaveAttribute("popovertarget");
    }
  },
};
