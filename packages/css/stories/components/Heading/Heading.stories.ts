import type { Meta, StoryObj } from "@storybook/html";
import { type HeadingProperties, createHeading } from "./Heading";

import { expect } from "storybook/test";

const meta: Meta<HeadingProperties> = {
  title: "Components/Heading",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    className: { control: "text" },
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
type Story = StoryObj<HeadingProperties>;

export const Default: Story = {
  render: (args) => {
    return createHeading(args);
  },
  args: {
    text: "Heading text",
    level: 1,
    className: "",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = canvasElement;
    const heading = canvas.querySelector("h1") as HTMLHeadingElement;

    await expect(heading).not.toBeNull();
    await expect(heading).toHaveClass("m-h1");
    await expect(heading).toHaveTextContent(args.text ?? "Heading text");
    await expect(heading.tagName.toLowerCase()).toBe("h1");
  },
};

export const AllHeadings: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "20px";

    for (let level = 1; level <= 6; level++) {
      const heading = createHeading({
        text: `Heading level ${level.toString()}`,
        level,
      });
      container.append(heading);
    }

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;

    // Verify that all heading levels (h1-h6) are rendered
    for (let level = 1; level <= 6; level++) {
      const heading = canvas.querySelector(`h${level.toString()}`) as HTMLHeadingElement;
      await expect(heading).not.toBeNull();
      await expect(heading).toHaveClass(`m-h${level.toString()}`);
      await expect(heading).toHaveTextContent(`Heading level ${level.toString()}`);
      await expect(heading.tagName.toLowerCase()).toBe(`h${level.toString()}`);
    }
  },
};
