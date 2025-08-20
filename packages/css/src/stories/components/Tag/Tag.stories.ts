import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface TagProperties {
  outline: boolean;
  label: string;
  size: "small" | "default";
  disabled: boolean;
  transition: boolean;
}

const meta: Meta<TagProperties> = {
  title: "Components/Tag",
  tags: ["autodocs"],
  argTypes: {
    outline: {
      control: { type: "boolean" },
      description: "Enable or disable the outline style for the tag.",
    },
    label: {
      control: { type: "text" },
      description: "The label text for the tag.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "default"],
      description: "The size of the tag.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the tag for link or button.",
    },
    transition: {
      control: { type: "boolean" },
      description: "Enable or disable the transition effect for the tag.",
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
type Story = StoryObj<TagProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const tag = document.createElement("div");
    tag.className = "tag";
    if (args["outline"]) tag.classList.add("--outline");
    if (args["size"] !== "default") tag.classList.add(`--${args["size"]}`);
    if (args["transition"]) tag.classList.add("--transition");
    const tagText = document.createElement("span");
    tagText.textContent = args["label"];
    tag.append(tagText);
    container.append(tag);
    return container;
  },
  args: {
    outline: false,
    label: "Tag label",
    size: "default",
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const tag = canvas.querySelector(".tag") as HTMLElement;
    const tagText = tag.querySelector("span") as HTMLSpanElement;

    await expect(canvas).not.toBeNull();
    await expect(tag).not.toBeNull();
    await expect(tag).toHaveClass("tag");
    await expect(tagText).toHaveTextContent("Tag label");

    await expect(tag).not.toHaveClass("--outline");
    await expect(tag).not.toHaveClass("--small");
    await expect(tag).not.toHaveClass("--transition");
  },
};

export const Link: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const tag = document.createElement("button");
    tag.className = "tag";
    if (args["outline"]) tag.classList.add("--outline");
    if (args["disabled"]) tag.disabled = true;
    if (args["transition"]) tag.classList.add("--transition");
    const tagText = document.createElement("span");
    tagText.textContent = args["label"];
    tag.append(tagText);
    container.append(tag);
    return container;
  },
  args: {
    label: "Tag label",
    disabled: false,
    transition: false,
    outline: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const tag = canvas.querySelector(".tag") as HTMLButtonElement;
    const tagText = tag.querySelector("span") as HTMLSpanElement;

    await expect(canvas).not.toBeNull();
    await expect(tag).not.toBeNull();
    await expect(tag).toHaveClass("tag");
    await expect(tagText).toHaveTextContent("Tag label");

    await expect(tag.tagName).toBe("BUTTON");
    await expect(tag).not.toBeDisabled();
  },
};

export const Outline: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const tag = document.createElement("div");
    tag.className = "tag";
    tag.classList.add("--outline");
    if (args["size"] !== "default") tag.classList.add(`--${args["size"]}`);
    if (args["transition"]) tag.classList.add("--transition");
    const tagText = document.createElement("span");
    tagText.textContent = args["label"];
    tag.append(tagText);
    container.append(tag);
    return container;
  },
  args: {
    label: "Tag label",
    size: "default",
    transition: false,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const tag = canvas.querySelector(".tag") as HTMLElement;
    const tagText = tag.querySelector("span") as HTMLSpanElement;

    await expect(canvas).not.toBeNull();
    await expect(tag).not.toBeNull();
    await expect(tag).toHaveClass("tag");
    await expect(tag).toHaveClass("--outline");
    await expect(tagText).toHaveTextContent("Tag label");
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "10px";
    const tagIconLeft = document.createElement("div");
    tagIconLeft.className = "tag";
    tagIconLeft.innerHTML = `<span class="icon">+</span> <span>${args["label"]}</span>`;
    const tagIconRight = document.createElement("div");
    tagIconRight.className = "tag";
    tagIconRight.innerHTML = `<span>${args["label"]}</span> <span class="icon">-</span>`;
    container.append(tagIconLeft);
    container.append(tagIconRight);
    return container;
  },
  args: {
    label: "tag with Icon",
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const tags = canvas.querySelectorAll(".tag");

    await expect(canvas).not.toBeNull();
    await expect(tags).toHaveLength(2);

    const leftIconTag = tags[0];
    if (leftIconTag) {
      const leftIcon = leftIconTag.querySelector(".icon") as HTMLSpanElement;
      const leftText = leftIconTag.querySelectorAll("span")[1] as HTMLSpanElement;

      await expect(leftIconTag).toHaveClass("tag");
      await expect(leftIcon).toHaveTextContent("+");
      await expect(leftText).toHaveTextContent("tag with Icon");
    }

    const rightIconTag = tags[1];
    if (rightIconTag) {
      const rightIcon = rightIconTag.querySelector(".icon") as HTMLSpanElement;
      const rightText = rightIconTag.querySelectorAll(
        "span",
      )[0] as HTMLSpanElement;

      await expect(rightIconTag).toHaveClass("tag");
      await expect(rightIcon).toHaveTextContent("-");
      await expect(rightText).toHaveTextContent("tag with Icon");
    }
  },
};
