import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface BadgeProperties {
  outline: boolean;
  label: string;
  size: "small" | "default";
  disabled: boolean;
  transition: boolean;
}

const meta: Meta<BadgeProperties> = {
  title: "Components/Badge",
  tags: ["autodocs"],
  argTypes: {
    outline: {
      control: { type: "boolean" },
      description: "Enable or disable the outline style for the badge.",
    },
    label: {
      control: { type: "text" },
      description: "The label text for the badge.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "default"],
      description: "The size of the badge.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the badge for link or button.",
    },
    transition: {
      control: { type: "boolean" },
      description: "Enable or disable the transition effect for the badge.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "example description",
      },
    },
  },
};

export default meta;
type Story = StoryObj<BadgeProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const badge = document.createElement("div");
    badge.className = "badge";
    if (args["outline"]) badge.classList.add("--outline");
    if (args["size"] !== "default") badge.classList.add(`--${args["size"]}`);
    if (args["transition"]) badge.classList.add("--transition");
    const badgeText = document.createElement("span");
    badgeText.textContent = args["label"];
    badge.append(badgeText);
    container.append(badge);
    return container;
  },
  args: {
    outline: false,
    label: "Badge label",
    size: "default",
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const badge = canvas.querySelector(".badge") as HTMLElement;
    const badgeText = badge.querySelector("span") as HTMLSpanElement;

    await expect(canvas).not.toBeNull();
    await expect(badge).not.toBeNull();
    await expect(badge).toHaveClass("badge");
    await expect(badgeText).toHaveTextContent("Badge label");

    await expect(badge).not.toHaveClass("--outline");
    await expect(badge).not.toHaveClass("--small");
    await expect(badge).not.toHaveClass("--transition");
  },
};

export const Link: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const badge = document.createElement("button");
    badge.className = "badge";
    if (args["outline"]) badge.classList.add("--outline");
    if (args["disabled"]) badge.disabled = true;
    if (args["transition"]) badge.classList.add("--transition");
    const badgeText = document.createElement("span");
    badgeText.textContent = args["label"];
    badge.append(badgeText);
    container.append(badge);
    return container;
  },
  args: {
    label: "Badge label",
    disabled: false,
    transition: false,
    outline: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const badge = canvas.querySelector(".badge") as HTMLButtonElement;
    const badgeText = badge.querySelector("span") as HTMLSpanElement;

    await expect(canvas).not.toBeNull();
    await expect(badge).not.toBeNull();
    await expect(badge).toHaveClass("badge");
    await expect(badgeText).toHaveTextContent("Badge label");

    await expect(badge.tagName).toBe("BUTTON");
    await expect(badge).not.toBeDisabled();
  },
};

export const Outline: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.classList.add("--outline");
    if (args["size"] !== "default") badge.classList.add(`--${args["size"]}`);
    if (args["transition"]) badge.classList.add("--transition");
    const badgeText = document.createElement("span");
    badgeText.textContent = args["label"];
    badge.append(badgeText);
    container.append(badge);
    return container;
  },
  args: {
    label: "Badge label",
    size: "default",
    transition: false,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const badge = canvas.querySelector(".badge") as HTMLElement;
    const badgeText = badge.querySelector("span") as HTMLSpanElement;

    await expect(canvas).not.toBeNull();
    await expect(badge).not.toBeNull();
    await expect(badge).toHaveClass("badge");
    await expect(badge).toHaveClass("--outline");
    await expect(badgeText).toHaveTextContent("Badge label");
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "10px";
    const badgeIconLeft = document.createElement("div");
    badgeIconLeft.className = "badge";
    badgeIconLeft.innerHTML = `<span class="icon">+</span> <span>${args["label"]}</span>`;
    const badgeIconRight = document.createElement("div");
    badgeIconRight.className = "badge";
    badgeIconRight.innerHTML = `<span>${args["label"]}</span> <span class="icon">-</span>`;
    container.append(badgeIconLeft);
    container.append(badgeIconRight);
    return container;
  },
  args: {
    label: "badge with Icon",
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const badges = canvas.querySelectorAll(".badge");

    await expect(canvas).not.toBeNull();
    await expect(badges).toHaveLength(2);

    const leftIconBadge = badges[0];
    if (leftIconBadge) {
      const leftIcon = leftIconBadge.querySelector(".icon") as HTMLSpanElement;
      const leftText = leftIconBadge.querySelectorAll("span")[1] as HTMLSpanElement;

      await expect(leftIconBadge).toHaveClass("badge");
      await expect(leftIcon).toHaveTextContent("+");
      await expect(leftText).toHaveTextContent("badge with Icon");
    }

    const rightIconBadge = badges[1];
    if (rightIconBadge) {
      const rightIcon = rightIconBadge.querySelector(".icon") as HTMLSpanElement;
      const rightText = rightIconBadge.querySelectorAll(
        "span",
      )[0] as HTMLSpanElement;

      await expect(rightIconBadge).toHaveClass("badge");
      await expect(rightIcon).toHaveTextContent("-");
      await expect(rightText).toHaveTextContent("badge with Icon");
    }
  },
};
