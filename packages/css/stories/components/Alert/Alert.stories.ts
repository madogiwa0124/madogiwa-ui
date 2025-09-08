import type { Meta, StoryObj } from "@storybook/html";
import { expect, userEvent, within } from "storybook/test";

interface AlertProperties {
  content: string;
  icon: string;
  variants: "default" | "primary" | "secondary" | "tertiary" | "danger" | "warning";
  autoDismiss: string;
  autoDismissProgress: boolean;
}

const meta: Meta<AlertProperties> = {
  title: "Components/Alert",
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: {
        type: "text",
      },
      description: "Specify the content to display in the Alert.",
    },
    icon: {
      control: {
        type: "text",
      },
      description: "Specify the icon markup (HTML or SVG) to display in the Alert.",
    },
    variants: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "primary",
        "secondary",
        "tertiary",
        "danger",
        "warning",
      ],
      description: "Specify the Alert variant.",
    },
    autoDismiss: {
      control: {
        type: "select",
      },
      options: [
        "0s",
        "3s",
        "5s",
        "10s",
      ],
      description: "Specify the auto dismiss duration.",
    },
    autoDismissProgress: {
      control: { type: "boolean" },
      description: "Enable or disable the auto dismiss progress bar.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "example text.",
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
    alert.classList.add("alert");
    alert.setAttribute("role", "alert");
    alert.innerHTML = `
      <div class="alert__content">${args["content"]}</div>
    `;
    if (args["variants"] !== "default") {
      alert.classList.add(`--${args["variants"]}`);
    }
    container.append(alert);
    return container;
  },
  args: {
    content: "This is an alert message.",
    variants: "default",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const alert = canvas.getByRole("alert");
    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass("alert");

    if (args.variants !== "default") {
      await expect(alert).toHaveClass(`--${args.variants}`);
    }

    const content = alert.querySelector(".alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(args.content);
  },
};

export const Variants: Story = {
  render: (_args) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "8px";
    const alertDefault = document.createElement("div");
    alertDefault.setAttribute("role", "alert");
    alertDefault.classList.add("alert");
    alertDefault.innerHTML = "<div class=\"alert__content\">This is a default alert message.</div>";
    container.append(alertDefault);

    const alertPrimary = document.createElement("div");
    alertPrimary.setAttribute("role", "alert");
    alertPrimary.classList.add("alert", "--primary");
    alertPrimary.innerHTML = "<div class=\"alert__content\">This is a primary alert message.</div>";
    container.append(alertPrimary);

    const alertSecondary = document.createElement("div");
    alertSecondary.setAttribute("role", "alert");
    alertSecondary.classList.add("alert", "--secondary");
    alertSecondary.innerHTML = "<div class=\"alert__content\">This is a secondary alert message.</div>";
    container.append(alertSecondary);

    const alertTertiary = document.createElement("div");
    alertTertiary.setAttribute("role", "alert");
    alertTertiary.classList.add("alert", "--tertiary");
    alertTertiary.innerHTML = "<div class=\"alert__content\">This is a tertiary alert message.</div>";
    container.append(alertTertiary);

    const alertDanger = document.createElement("div");
    alertDanger.setAttribute("role", "alert");
    alertDanger.classList.add("alert", "--danger");
    alertDanger.innerHTML = "<div class=\"alert__content\">This is a danger alert message.</div>";
    container.append(alertDanger);

    const alertWarning = document.createElement("div");
    alertWarning.setAttribute("role", "alert");
    alertWarning.classList.add("alert", "--warning");
    alertWarning.innerHTML = "<div class=\"alert__content\">This is a warning alert message.</div>";
    container.append(alertWarning);

    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const alerts = canvas.getAllByRole("alert");
    await expect(alerts).toHaveLength(6);

    const variants = ["default", "primary", "secondary", "tertiary", "danger", "warning"];

    for (const [index, variant] of variants.entries()) {
      const alert = alerts[index];
      await expect(alert).toBeInTheDocument();
      await expect(alert).toHaveClass("alert");

      if (variant !== "default") {
        await expect(alert).toHaveClass(`--${variant}`);
      }

      const content = alert?.querySelector(".alert__content") as HTMLElement;
      await expect(content).toBeInTheDocument();
      await expect(content).toHaveTextContent(`This is a ${variant} alert message.`);
    }
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.setAttribute("role", "alert");
    alert.classList.add("alert");

    alert.innerHTML = `
      <div class="alert__icons">${args.icon}</div>
      <div class="alert__content">${args.content}</div>
    `;
    if (args["variants"] !== "default") {
      alert.classList.add(`--${args["variants"]}`);
    }
    container.append(alert);
    return container;
  },
  args: {
    content: "This is an alert message with an icon.",
    icon: "<span class=\"icon\">!</span>",
    variants: "default",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const alert = canvas.getByRole("alert");
    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass("alert");

    if (args.variants !== "default") {
      await expect(alert).toHaveClass(`--${args.variants}`);
    }

    const iconContainer = alert.querySelector(".alert__icons") as HTMLElement;
    await expect(iconContainer).toBeInTheDocument();
    await expect(iconContainer).toContainHTML(args.icon);

    const content = alert.querySelector(".alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(args.content);
  },
};

export const withAction: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.setAttribute("role", "alert");
    alert.classList.add("alert");

    alert.innerHTML = `
      <div class="alert__icons">${args.icon}</div>
      <div class="alert__content">${args.content}</div>
    `;
    if (args["variants"] !== "default") {
      alert.classList.add(`--${args["variants"]}`);
    }

    const actionButton = document.createElement("button");
    const action = document.createElement("div");
    action.classList.add("alert__actions");
    actionButton.classList.add("btn", "--icon-only", "--rounded");
    if (args["variants"] !== "default") {
      actionButton.classList.add(`--${args["variants"]}`);
    }
    actionButton.innerHTML = "<span class='icon'>x</span>";
    action.append(actionButton);
    container.append(alert);
    alert.append(action);
    return container;
  },
  args: {
    content: "This is an alert message with an action.",
    icon: "<span class=\"icon\">!</span>",
    variants: "default",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const alert = canvas.getByRole("alert");
    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass("alert");

    if (args.variants !== "default") {
      await expect(alert).toHaveClass(`--${args.variants}`);
    }

    const iconContainer = alert.querySelector(".alert__icons") as HTMLElement;
    await expect(iconContainer).toBeInTheDocument();
    await expect(iconContainer).toContainHTML(args.icon);

    const content = alert.querySelector(".alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(args.content);

    const actionButton = canvas.getByRole("button");
    await expect(actionButton).toBeInTheDocument();
    await expect(actionButton).toHaveClass("btn", "--icon-only", "--rounded");

    await userEvent.click(actionButton);
    await expect(actionButton).toHaveFocus();

    const actionsContainer = alert.querySelector(".alert__actions") as HTMLElement;
    await expect(actionsContainer).toBeInTheDocument();
    await expect(actionsContainer).toContainElement(actionButton);
  },
};

export const autoDismiss: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.setAttribute("role", "alert");
    alert.classList.add("alert");
    if (args["autoDismiss"]) {
      alert.classList.add("--auto-dismiss");
      alert.dataset["autoDismiss"] = args["autoDismiss"];
    }
    alert.innerHTML = `
      <div class="alert__content">${args.content}</div>
    `;
    if (args["variants"] !== "default") {
      alert.classList.add(`--${args["variants"]}`);
    }
    if (args["autoDismissProgress"]) {
      alert.classList.add("--with-progress");
    }
    container.append(alert);
    return container;
  },
  args: {
    content: "This is an auto dismiss alert message.",
    variants: "default",
    autoDismiss: "5s",
    autoDismissProgress: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const alert = canvas.getByRole("alert");
    await expect(alert).toBeVisible();
    await expect(alert).toHaveClass("alert");

    if (args.variants !== "default") {
      await expect(alert).toHaveClass(`--${args.variants}`);
    }

    const content = alert.querySelector(".alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(args.content);

    if (args.autoDismiss) {
      const duration = Number.parseInt(args.autoDismiss.replace("s", ""), 10);
      // eslint-disable-next-line @stylistic/max-statements-per-line
      await new Promise((resolve) => { setTimeout(resolve, duration * 1000 + 1000); });
      await expect(alert).not.toBeVisible();
    }
  },
};
