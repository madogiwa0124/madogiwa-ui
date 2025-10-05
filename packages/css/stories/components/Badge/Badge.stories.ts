import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface BadgeProperties {
  variant: "default" | "primary" | "secondary" | "tertiary" | "danger" | "warning";
  outline: boolean;
  label: string;
  size: "small" | "default";
  disabled: boolean;
  transition: boolean;
  rounded: boolean;
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
    rounded: {
      control: { type: "boolean" },
      description: "Enable or disable rounded style for the badge.",
    },
    variant: {
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
      description: "The variant color of the badge.",
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
    badge.className = "m-badge";
    if (args["outline"]) badge.classList.add("--outline");
    if (args["size"] !== "default") badge.classList.add(`--${args["size"]}`);
    if (args["transition"]) badge.classList.add("--transition");
    if (args["rounded"]) badge.classList.add("--rounded");
    if (args["variant"] !== "default") {
      badge.classList.add(`--${args["variant"]}`);
    }
    const badgeText = document.createElement("span");
    badgeText.textContent = args["label"];
    badge.append(badgeText);
    container.append(badge);
    return container;
  },
  args: {
    variant: "default",
    outline: false,
    label: "Badge label",
    size: "default",
    transition: false,
    rounded: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const badge = canvas.querySelector(".m-badge") as HTMLElement;
    const badgeText = badge.querySelector("span") as HTMLSpanElement;

    await expect(canvas).not.toBeNull();
    await expect(badge).not.toBeNull();
    await expect(badge).toHaveClass("m-badge");
    await expect(badgeText).toHaveTextContent("Badge label");

    await expect(badge).not.toHaveClass("--outline");
    await expect(badge).not.toHaveClass("--small");
    await expect(badge).not.toHaveClass("--transition");
  },
};

export const Variants: Story = {
  render: (args) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "10px";

    const variants = [
      "default",
      "primary",
      "secondary",
      "tertiary",
      "danger",
      "warning",
    ] as const;

    for (const variant of variants) {
      const badge = document.createElement("div");
      badge.className = "m-badge";
      if (variant !== "default") {
        badge.classList.add(`--${variant}`);
      }
      if (args["outline"]) badge.classList.add("--outline");
      if (args["size"] !== "default") badge.classList.add(`--${args["size"]}`);
      if (args["transition"]) badge.classList.add("--transition");
      if (args["rounded"]) badge.classList.add("--rounded");
      const badgeText = document.createElement("span");
      badgeText.textContent = variant;
      badge.append(badgeText);
      container.append(badge);
    }

    return container;
  },
  args: {
    outline: false,
    size: "default",
    rounded: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const badges = canvas.querySelectorAll(".m-badge");
    for (const [index, badge] of badges.entries()) {
      const variant = [
        "default",
        "primary",
        "secondary",
        "tertiary",
        "danger",
        "warning",
      ][index];
      if (variant) {
        await expect(badge).toHaveClass("m-badge");
        if (variant !== "default") {
          await expect(badge).toHaveClass(`--${variant}`);
        }
        await expect(badge).toHaveTextContent(variant);
      }
    }
  },
};

export const Link: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const badge = document.createElement("button");
    badge.className = "m-badge";
    if (args["outline"]) badge.classList.add("--outline");
    if (args["disabled"]) badge.disabled = true;
    if (args["transition"]) badge.classList.add("--transition");
    if (args["rounded"]) badge.classList.add("--rounded");
    const badgeText = document.createElement("span");
    badgeText.textContent = args["label"];
    badge.append(badgeText);
    container.append(badge);
    return container;
  },
  args: {
    variant: "default",
    label: "Badge label",
    disabled: false,
    transition: false,
    outline: false,
    rounded: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const badge = canvas.querySelector(".m-badge") as HTMLButtonElement;
    const badgeText = badge.querySelector("span") as HTMLSpanElement;

    await expect(canvas).not.toBeNull();
    await expect(badge).not.toBeNull();
    await expect(badge).toHaveClass("m-badge");
    await expect(badgeText).toHaveTextContent("Badge label");

    await expect(badge.tagName).toBe("BUTTON");
    await expect(badge).not.toBeDisabled();
  },
};

export const Outline: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const badge = document.createElement("div");
    badge.className = "m-badge";
    badge.classList.add("--outline");
    if (args["size"] !== "default") badge.classList.add(`--${args["size"]}`);
    if (args["transition"]) badge.classList.add("--transition");
    if (args["rounded"]) badge.classList.add("--rounded");
    const badgeText = document.createElement("span");
    badgeText.textContent = args["label"];
    badge.append(badgeText);
    container.append(badge);
    return container;
  },
  args: {
    variant: "default",
    label: "Badge label",
    size: "default",
    transition: false,
    disabled: false,
    rounded: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const badge = canvas.querySelector(".m-badge") as HTMLElement;
    const badgeText = badge.querySelector("span") as HTMLSpanElement;

    await expect(canvas).not.toBeNull();
    await expect(badge).not.toBeNull();
    await expect(badge).toHaveClass("m-badge");
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
    badgeIconLeft.className = "m-badge";
    badgeIconLeft.innerHTML = `<span class="icon">+</span> <span>${args["label"]}</span>`;
    const badgeIconRight = document.createElement("div");
    badgeIconRight.className = "m-badge";
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
    const badges = canvas.querySelectorAll(".m-badge");

    await expect(canvas).not.toBeNull();
    await expect(badges).toHaveLength(2);

    const leftIconBadge = badges[0];
    if (leftIconBadge) {
      const leftIcon = leftIconBadge.querySelector(".icon") as HTMLSpanElement;
      const leftText = leftIconBadge.querySelectorAll("span")[1] as HTMLSpanElement;

      await expect(leftIconBadge).toHaveClass("m-badge");
      await expect(leftIcon).toHaveTextContent("+");
      await expect(leftText).toHaveTextContent("badge with Icon");
    }

    const rightIconBadge = badges[1];
    if (rightIconBadge) {
      const rightIcon = rightIconBadge.querySelector(".icon") as HTMLSpanElement;
      const rightText = rightIconBadge.querySelectorAll(
        "span",
      )[0] as HTMLSpanElement;

      await expect(rightIconBadge).toHaveClass("m-badge");
      await expect(rightIcon).toHaveTextContent("-");
      await expect(rightText).toHaveTextContent("badge with Icon");
    }
  },
};
