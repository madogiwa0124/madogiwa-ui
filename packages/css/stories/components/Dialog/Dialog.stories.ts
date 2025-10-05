import type { Meta, StoryObj } from "@storybook/html";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta = {
  title: "Components/Dialog",
  tags: ["autodocs"],
  argTypes: {
    backDropBlur: {
      type: "boolean",
      description: "Enable backdrop blur effect",
      defaultValue: false,
    },
    transition: {
      type: "boolean",
      description: "Enable dialog transition",
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "example description",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const dialog = document.createElement("dialog");
    dialog.className = "m-dialog";
    if (args["backDropBlur"]) dialog.classList.add("--backdrop-blur");
    if (args["transition"]) dialog.classList.add("--transition");

    dialog.innerHTML = `
      <header class="m-dialog__header">
        <p style="font-weight: bold;">Are you sure?</p>
      </header>
      <div class="m-dialog__content">
        <p class="p">Do you really want to delete this item? Do you really want to delete this item?</p>
        <p class="p">This action cannot be undone.</p>
      </div>
      <footer class="m-dialog__footer">
        <button class="m-btn" onClick="const dialog = document.querySelector('.m-dialog'); dialog.close()">
          Cancel
        </button>
        &nbsp;
        <button class="m-btn --primary">Save</button>
      </footer>
    `;
    const openDialogButton = document.createElement("button");
    openDialogButton.textContent = "Open Dialog";
    openDialogButton.className = "m-btn --primary";
    openDialogButton.addEventListener("click", () => {
      dialog.showModal();
    });
    container.append(openDialogButton);
    container.append(dialog);
    return container;
  },
  args: {
    backDropBlur: false,
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const dialog = canvas.querySelector("dialog") as HTMLDialogElement;
    await expect(dialog).not.toBeNull();
    await expect(dialog.open).toBe(false);
    await userEvent.click(await within(canvas).findByText("Open Dialog"));
    await expect(dialog.open).toBe(true);
    await expect(dialog).toHaveTextContent("Are you sure?");
    await userEvent.click(await within(dialog).findByText("Cancel"));
    await expect(dialog.open).toBe(false);
  },
};
