import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface SnackbarProperties {
  position: "default" | "right-top" | "right-bottom" | "left-top";
  transition: boolean;
}

const meta: Meta<SnackbarProperties> = {
  title: "Components/Snackbar",
  tags: ["autodocs"],
  argTypes: {
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
type Story = StoryObj<SnackbarProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const button = document.createElement("button");
    button.classList.add("btn", "--primary");
    button.textContent = "Show Snackbar";
    button.setAttribute("popovertarget", "snackbar");
    const snackbar = document.createElement("article");
    snackbar.classList.add("snackbar");
    snackbar.popover = "manual";
    snackbar.id = "snackbar";
    snackbar.role = "alert";

    if (args["transition"]) snackbar.classList.add("--transition");
    if (args["position"] !== "default") {
      snackbar.classList.add(`--${args["position"]}`);
    }
    snackbar.innerHTML = `
    <div class="snackbar__body">
      <div class="snackbar__content">
        <span>This is a snackbar message.</span>
      </div>
      <div class="snackbar__actions">
        <button popovertarget="snackbar">
          OK
        </button>
        <button aria-label="Close snackbar" popovertarget="snackbar">
          ×
        </button>
      </div>
    </div>
    `;
    container.append(button);
    container.append(snackbar);
    return container;
  },
  args: {
    position: "default",
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const button = canvas.querySelector("button") as HTMLButtonElement;
    const snackbar = canvas.querySelector(".snackbar") as HTMLElement;
    const snackbarClose = snackbar.querySelector(
      "button[aria-label='Close snackbar']",
    ) as HTMLButtonElement;

    button.click();
    // Wait for transition to complete
    if (snackbar.classList.contains("--transition")) {
      await new Promise((resolve) => {
        snackbar.addEventListener("transitionend", () => {
          resolve(void 0);
        }, {
          once: true,
        });
      });
    }
    await expect(snackbar).toBeVisible();
    snackbarClose.click();
    await expect(snackbar).not.toBeVisible();
  },
};
