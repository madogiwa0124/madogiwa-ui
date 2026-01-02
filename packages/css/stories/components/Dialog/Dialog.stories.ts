import type { Meta, StoryObj } from "@storybook/html";
import { expect, userEvent, within } from "storybook/test";

type DialogProperties = {
  title: string;
  content: string;
  backDropBlur: boolean;
  transition: boolean;
  showCancel: boolean;
  showConfirm: boolean;
  cancelText: string;
  confirmText: string;
};

const meta: Meta<DialogProperties> = {
  title: "Components/Dialog",
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The title text for the component",
    },
    content: {
      control: { type: "text" },
      description: "The content text for the component",
    },
    backDropBlur: {
      control: { type: "boolean" },
      description: "The backdrop blur modifier for the component",
    },
    transition: {
      control: { type: "boolean" },
      description: "The transition animation modifier for the component",
    },
    showCancel: {
      control: { type: "boolean" },
      description: "The cancel button visibility for the component",
    },
    showConfirm: {
      control: { type: "boolean" },
      description: "The confirm button visibility for the component",
    },
    cancelText: {
      control: { type: "text" },
      description: "The cancel button text for the component",
    },
    confirmText: {
      control: { type: "text" },
      description: "The confirm button text for the component",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Dialog component provides a modal dialog using the native HTML \`<dialog>\` element. It supports backdrop blur effects, smooth transitions, and flexible content layout with header, content, and footer sections.

### Usage

Use dialogs for confirmation prompts requiring user decision, important notifications that need immediate attention, form inputs that should be completed before continuing, or warning messages about destructive actions. Perfect for delete confirmations, settings panels, login forms, error messages, and multi-step workflows.

### Example code

\`\`\`html
<dialog class="m-dialog --transition --backdrop-blur">
  <div class="m-dialog__content">
    <h2>Confirm Action</h2>
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    <div class="m-dialog__actions">
      <button class="m-button --secondary">Cancel</button>
      <button class="m-button --danger">Delete</button>
    </div>
  </div>
</dialog>
\`\`\`


**⚠️ JavaScript Required**

opening and closing the dialog requires using the HTMLDialogElement API:


\`\`\`js
const dialog = document.querySelector('dialog.m-dialog');
// To open the dialog
dialog.showModal();
// To close the dialog
dialog.close();
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-dialog | .--backdrop-blur | Enables backdrop blur effect behind the dialog |
| .m-dialog | .--transition | Enables smooth open/close transition animations |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --dialog-bg-color | var(--color-bg-default) | Dialog background color |
| --dialog-zindex | var(--zindex-modal) | Z-index for dialog stacking |
| --dialog-padding | var(--spacing-3) | Internal padding of the dialog |
| --dialog-border-radius | var(--radius-sm) | Border radius of the dialog |
| --dialog-box-shadow | var(--shadow-lg) | Box shadow around the dialog |
| --dialog-content-gap | var(--spacing-2) | Gap between content elements |
| --dialog-backdrop-bg-color | var(--color-overlay) | Backdrop overlay color |
| --dialog-backdrop-blur | blur(4px) | Backdrop blur filter strength |
| --dialog-transition-duration | 0.2s | Duration of transition animations |
| --dialog-transition-transform-start | translateY(20%) | Initial transform for transition |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use HTMLDialogElement API to open/close dialogs properly
- Always provide a way to close the dialog (close button or cancel action)
- Consider the user's workflow when using dialogs
- Avoid nested dialogs as they can confuse users
- Test keyboard navigation and screen reader compatibility
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DialogProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const dialog = document.createElement("dialog");
    dialog.className = "m-dialog";

    const backDropBlur = args["backDropBlur"];
    const transition = args["transition"];
    const title = args["title"];
    const content = args["content"];
    const showCancel = args["showCancel"];
    const showConfirm = args["showConfirm"];
    const cancelText = args["cancelText"];
    const confirmText = args["confirmText"];

    if (backDropBlur) dialog.classList.add("--backdrop-blur");
    if (transition) dialog.classList.add("--transition");

    // Create header
    const header = document.createElement("header");
    header.className = "m-dialog__header";
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;
    titleElement.style.margin = "0";
    titleElement.style.fontWeight = "bold";
    header.append(titleElement);

    // Create content
    const contentDiv = document.createElement("div");
    contentDiv.className = "m-dialog__content";
    const contentText = document.createElement("p");
    contentText.textContent = content;
    contentText.style.margin = "0";
    contentDiv.append(contentText);

    // Create footer
    const footer = document.createElement("footer");
    footer.className = "m-dialog__footer";
    footer.style.display = "flex";
    footer.style.gap = "0.5rem";
    footer.style.justifyContent = "flex-end";

    if (showCancel) {
      const cancelButton = document.createElement("button");
      cancelButton.className = "m-btn";
      cancelButton.textContent = cancelText;
      cancelButton.addEventListener("click", () => {
        dialog.close();
      });
      footer.append(cancelButton);
    }

    if (showConfirm) {
      const confirmButton = document.createElement("button");
      confirmButton.className = "m-btn --primary";
      confirmButton.textContent = confirmText;
      confirmButton.addEventListener("click", () => {
        dialog.close();
      });
      footer.append(confirmButton);
    }

    dialog.append(header, contentDiv, footer);

    // Create trigger button
    const openDialogButton = document.createElement("button");
    openDialogButton.textContent = "Open Dialog";
    openDialogButton.className = "m-btn --primary";
    openDialogButton.addEventListener("click", () => {
      dialog.showModal();
    });

    container.append(openDialogButton, dialog);
    return container;
  },
  args: {
    title: "Confirm Action",
    content: "Are you sure you want to proceed with this action?",
    backDropBlur: false,
    transition: false,
    showCancel: true,
    showConfirm: true,
    cancelText: "Cancel",
    confirmText: "Confirm",
  },
  play: async ({ canvasElement, args }) => {
    const dialog = canvasElement.querySelector("dialog") as HTMLDialogElement;
    const openButton = canvasElement.querySelector("button") as HTMLButtonElement;

    // Test initial state
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveClass("m-dialog");
    await expect(dialog.open).toBe(false);
    await expect(openButton).toBeInTheDocument();

    // Test modifiers
    const backDropBlur = args["backDropBlur"];
    const transition = args["transition"];

    await (backDropBlur ? expect(dialog).toHaveClass("--backdrop-blur") : expect(dialog).not.toHaveClass("--backdrop-blur"));

    await (transition ? expect(dialog).toHaveClass("--transition") : expect(dialog).not.toHaveClass("--transition"));

    // Test opening dialog
    await userEvent.click(openButton);
    await expect(dialog.open).toBe(true);
    await expect(dialog).toHaveTextContent(args["title"]);
    await expect(dialog).toHaveTextContent(args["content"]);

    // Test dialog structure
    const header = dialog.querySelector(".m-dialog__header");
    const content = dialog.querySelector(".m-dialog__content");
    const footer = dialog.querySelector(".m-dialog__footer");

    await expect(header).toBeInTheDocument();
    await expect(content).toBeInTheDocument();
    await expect(footer).toBeInTheDocument();

    // Test buttons based on configuration
    const showCancel = args["showCancel"];
    const showConfirm = args["showConfirm"];
    const cancelText = args["cancelText"];
    const confirmText = args["confirmText"];

    if (showCancel) {
      const cancelButton = await within(dialog).findByText(cancelText);
      await expect(cancelButton).toBeInTheDocument();

      // Test cancel functionality
      await userEvent.click(cancelButton);
      await expect(dialog.open).toBe(false);
    }

    if (showConfirm && !showCancel) {
      const confirmButton = await within(dialog).findByText(confirmText);
      await expect(confirmButton).toBeInTheDocument();

      // Test confirm functionality
      await userEvent.click(confirmButton);
      await expect(dialog.open).toBe(false);
    }
  },
};

export const WithBlurAndTransition: Story = {
  render: (_args) => {
    const container = document.createElement("div");
    const dialog = document.createElement("dialog");
    dialog.className = "m-dialog --backdrop-blur --transition";

    const header = document.createElement("header");
    header.className = "m-dialog__header";
    const title = document.createElement("h2");
    title.textContent = "Enhanced Dialog";
    title.style.margin = "0";
    title.style.fontWeight = "600";
    header.append(title);

    const content = document.createElement("div");
    content.className = "m-dialog__content";
    content.innerHTML = `
      <p style="margin: 0 0 1rem 0;">This dialog demonstrates the backdrop blur and transition effects.</p>
      <p style="margin: 0;">Notice how the background is blurred and the dialog animates smoothly.</p>
    `;

    const footer = document.createElement("footer");
    footer.className = "m-dialog__footer";
    footer.style.display = "flex";
    footer.style.gap = "0.5rem";
    footer.style.justifyContent = "flex-end";

    const closeButton = document.createElement("button");
    closeButton.className = "m-btn --primary";
    closeButton.textContent = "Got it!";
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
    footer.append(closeButton);

    dialog.append(header, content, footer);

    const openButton = document.createElement("button");
    openButton.textContent = "Open Enhanced Dialog";
    openButton.className = "m-btn --primary";
    openButton.addEventListener("click", () => {
      dialog.showModal();
    });

    container.append(openButton, dialog);
    return container;
  },
  play: async ({ canvasElement }) => {
    const dialog = canvasElement.querySelector("dialog") as HTMLDialogElement;
    const openButton = canvasElement.querySelector("button") as HTMLButtonElement;

    // Test enhanced features
    await expect(dialog).toHaveClass("--backdrop-blur");
    await expect(dialog).toHaveClass("--transition");
    await expect(dialog.open).toBe(false);

    // Test opening with effects
    await userEvent.click(openButton);
    await expect(dialog.open).toBe(true);
    await expect(dialog).toHaveTextContent("Enhanced Dialog");

    // Test closing
    const closeButton = await within(dialog).findByText("Got it!");
    await userEvent.click(closeButton);
    await expect(dialog.open).toBe(false);
  },
  parameters: {
    docs: {
      description: {
        story: "Dialog with backdrop blur and smooth transition animations enabled.",
      },
    },
  },
};
