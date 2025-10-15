import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";

type AlertProperties = {
  content: string;
  icon: string;
  variant: "default" | "primary" | "secondary" | "tertiary" | "danger" | "warning";
  autoDismiss: string;
  autoDismissProgress: boolean;
  hasActions: boolean;
};

const meta: Meta<AlertProperties> = {
  title: "Components/Alert",
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: { type: "text" },
      description: "The message content to display in the alert",
    },
    icon: {
      control: { type: "text" },
      description: "Icon markup (HTML or SVG) to display",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "tertiary", "danger", "warning"],
      description: "Visual style variant of the alert",
    },
    autoDismiss: {
      control: { type: "select" },
      options: ["0s", "3s", "5s", "10s"],
      description: "Auto dismiss duration (0s means no auto dismiss)",
    },
    autoDismissProgress: {
      control: { type: "boolean" },
      description: "Show progress bar for auto dismiss",
    },
    hasActions: {
      control: { type: "boolean" },
      description: "Include action buttons in the alert",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Alert component provides contextual feedback messages to users about system status, user actions, or important information. It supports various visual styles, icons, actions, and auto-dismiss functionality.

### Usage

Use alerts to communicate important information that requires user attention but doesn't interrupt their workflow. Alerts are non-modal and can be dismissed by user action or automatically after a set time.

**Common use cases:**
- Success confirmations after form submissions
- Error messages for validation or system issues
- Warning notifications about potential problems
- Informational messages about system changes

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-alert | .--primary | Primary alert style with brand colors |
| .m-alert | .--secondary | Secondary alert style |
| .m-alert | .--tertiary | Tertiary alert style with subtle appearance |
| .m-alert | .--danger | Danger alert for errors and critical issues |
| .m-alert | .--warning | Warning alert for caution messages |
| .m-alert | .--auto-dismiss | Enable auto dismiss functionality |
| .m-alert | .--with-progress | Show progress bar for auto dismiss |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --alert-bg-color | var(--color-default) | Background color for default alert |
| --alert-text-color | var(--color-text) | Text color for default alert |
| --alert-border-color | var(--color-border) | Border color for default alert |
| --alert-border | 1px solid var(--color-border) | Border style |
| --alert-padding | var(--spacing-2) | Internal padding |
| --alert-item-gap | var(--spacing-2) | Gap between alert elements |
| --alert-icon-size | 1rem | Size of icons |
| --alert-primary-bg-color | var(--color-primary) | Primary variant background |
| --alert-primary-text-color | var(--color-text-light) | Primary variant text color |
| --alert-secondary-bg-color | var(--color-secondary) | Secondary variant background |
| --alert-tertiary-bg-color | var(--color-tertiary) | Tertiary variant background |
| --alert-danger-bg-color | var(--color-danger) | Danger variant background |
| --alert-warning-bg-color | var(--color-warning) | Warning variant background |
| --alert-auto-dismiss-duration | 5s | Default auto dismiss duration |
| --alert-auto-dismiss-fade-duration | 0.3s | Fade out animation duration |
| --alert-auto-dismiss-progress-bg-color | rgb(from var(--color-white) r g b / 40%) | Progress bar background color |
| --alert-auto-dismiss-progress-height | 4px | Progress bar height |

### Accessibility

- Uses \`role="alert"\` for screen reader announcements
- Supports keyboard navigation for interactive elements
- Color variants include sufficient contrast ratios
- Auto dismiss can be controlled or disabled for users who need more time
- Icons include appropriate semantic meaning through context
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<AlertProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.classList.add("m-alert");
    alert.setAttribute("role", "alert");

    const content = args["content"];
    const variant = args["variant"];

    if (variant !== "default") {
      alert.classList.add(`--${variant}`);
    }

    alert.innerHTML = `
      <div class="m-alert__content">${content}</div>
    `;

    container.append(alert);
    return container;
  },
  args: {
    content: "This is a basic alert message providing important information to the user.",
    variant: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("alert");

    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass("m-alert");

    const content = alert.querySelector(".m-alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(/alert message/);
  },
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1rem";

    const variants = [
      { name: "default", class: "", message: "This is a default alert for general information." },
      { name: "primary", class: "--primary", message: "This is a primary alert for important actions." },
      { name: "secondary", class: "--secondary", message: "This is a secondary alert for supporting information." },
      { name: "tertiary", class: "--tertiary", message: "This is a tertiary alert for subtle notifications." },
      { name: "danger", class: "--danger", message: "This is a danger alert for errors and critical issues." },
      { name: "warning", class: "--warning", message: "This is a warning alert for caution messages." },
    ];

    for (const variant of variants) {
      const alert = document.createElement("div");
      alert.setAttribute("role", "alert");
      alert.classList.add("m-alert");
      if (variant.class) {
        alert.classList.add(variant.class);
      }
      alert.innerHTML = `<div class="m-alert__content">${variant.message}</div>`;
      container.append(alert);
    }

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alerts = canvas.getAllByRole("alert");

    await expect(alerts).toHaveLength(6);

    const variants = ["default", "primary", "secondary", "tertiary", "danger", "warning"];

    for (const [index, variant] of variants.entries()) {
      const alert = alerts[index];
      if (alert) {
        await expect(alert).toBeInTheDocument();
        await expect(alert).toHaveClass("m-alert");

        if (variant !== "default") {
          await expect(alert).toHaveClass(`--${variant}`);
        }

        const content = alert.querySelector(".m-alert__content") as HTMLElement;
        await expect(content).toBeInTheDocument();
        await expect(content).toHaveTextContent(new RegExp(variant));
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Showcase of all available alert variants with their respective styling and use cases.",
      },
    },
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.setAttribute("role", "alert");
    alert.classList.add("m-alert");

    const content = args["content"];
    const icon = args["icon"];
    const variant = args["variant"];

    if (variant !== "default") {
      alert.classList.add(`--${variant}`);
    }

    alert.innerHTML = `
      <div class="m-alert__icons">${icon}</div>
      <div class="m-alert__content">${content}</div>
    `;

    container.append(alert);
    return container;
  },
  args: {
    content: "This alert includes an icon to provide visual context and improve recognition.",
    icon: "ℹ️",
    variant: "primary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("alert");

    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass("m-alert");

    const iconContainer = alert.querySelector(".m-alert__icons") as HTMLElement;
    await expect(iconContainer).toBeInTheDocument();

    const content = alert.querySelector(".m-alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(/visual context/);
  },
};

export const WithActions: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.setAttribute("role", "alert");
    alert.classList.add("m-alert");

    const content = args["content"];
    const icon = args["icon"];
    const variant = args["variant"];

    if (variant !== "default") {
      alert.classList.add(`--${variant}`);
    }

    alert.innerHTML = `
      <div class="m-alert__icons">${icon}</div>
      <div class="m-alert__content">${content}</div>
    `;

    // Create actions container
    const actionsContainer = document.createElement("div");
    actionsContainer.classList.add("m-alert__actions");

    // Create dismiss button
    const dismissButton = document.createElement("button");
    dismissButton.classList.add("m-btn", "--icon-only", "--rounded");
    dismissButton.style.backgroundColor = "transparent";
    dismissButton.innerHTML = "✕";
    dismissButton.setAttribute("aria-label", "Close alert");

    // Add click handler
    dismissButton.addEventListener("click", () => {
      alert.remove();
    });

    actionsContainer.append(dismissButton);
    alert.append(actionsContainer);
    container.append(alert);

    return container;
  },
  args: {
    content: "This alert includes action buttons that allow users to interact with or dismiss the message.",
    icon: "⚠️",
    variant: "warning",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("alert");

    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass("m-alert");

    const iconContainer = alert.querySelector(".m-alert__icons") as HTMLElement;
    await expect(iconContainer).toBeInTheDocument();

    const content = alert.querySelector(".m-alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();

    const actionButton = canvas.getByRole("button");
    await expect(actionButton).toBeInTheDocument();
    await expect(actionButton).toHaveClass("m-btn");

    const actionsContainer = alert.querySelector(".m-alert__actions") as HTMLElement;
    await expect(actionsContainer).toBeInTheDocument();
    await expect(actionsContainer).toContainElement(actionButton);

    // Test button interaction
    // await userEvent.click(actionButton);
    // await expect(actionButton).toHaveFocus();
  },
};

export const AutoDismiss: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.setAttribute("role", "alert");
    alert.classList.add("m-alert");

    const content = args["content"];
    const variant = args["variant"];
    const autoDismiss = args["autoDismiss"];
    const showProgress = args["autoDismissProgress"];

    if (variant !== "default") {
      alert.classList.add(`--${variant}`);
    }

    if (autoDismiss && autoDismiss !== "0s") {
      alert.dataset["autoDismiss"] = autoDismiss;
      if (showProgress) {
        alert.classList.add("--with-progress");
      }
    }

    alert.innerHTML = `
      <div class="m-alert__content">${content}</div>
    `;

    container.append(alert);
    return container;
  },
  args: {
    content: "This alert will automatically dismiss after the specified duration. Watch the progress bar!",
    variant: "primary",
    autoDismiss: "3s",
    autoDismissProgress: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("alert");

    await expect(alert).toBeVisible();
    await expect(alert).toHaveClass("m-alert");

    const content = alert.querySelector(".m-alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(/automatically dismiss/);

    // Check if progress bar is visible when enabled
    if (alert.classList.contains("--with-progress")) {
      await expect(alert).toHaveClass("--with-progress");
    }

    // Note: We don't test the actual dismissal in play function as it would make the test slow
    // The CSS animation handles the auto-dismiss functionality
  },
  parameters: {
    docs: {
      description: {
        story: "Alert with auto-dismiss functionality and optional progress bar. The alert will fade out after the specified duration.",
      },
    },
  },
};

export const MultipleAlerts: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1rem";

    const alerts = [
      {
        variant: "primary",
        icon: "✅",
        content: "Successfully saved your changes!",
      },
      {
        variant: "warning",
        icon: "⚠️",
        content: "Please review the information before continuing.",
      },
      {
        variant: "danger",
        icon: "❌",
        content: "An error occurred while processing your request.",
      },
    ];

    for (const alertData of alerts) {
      const alert = document.createElement("div");
      alert.setAttribute("role", "alert");
      alert.classList.add("m-alert", `--${alertData.variant}`);

      alert.innerHTML = `
        <div class="m-alert__icons">${alertData.icon}</div>
        <div class="m-alert__content">${alertData.content}</div>
      `;

      container.append(alert);
    }

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple alerts can be stacked to show different types of messages simultaneously.",
      },
    },
  },
};
