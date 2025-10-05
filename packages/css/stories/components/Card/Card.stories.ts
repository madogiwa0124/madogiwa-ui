import type { Meta, StoryObj } from "@storybook/html";
import { createCard } from "./Card";
import { expect } from "storybook/test";
import exampleImage from "./320x240.png";

const meta: Meta = {
  title: "Components/Card",
  tags: ["autodocs"],
  argTypes: {},
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
  render: () => {
    return createCard({
      content: `
      <p style='font-weight: bold;'>Card Title</p>
      <p>This is the card content. The main content is displayed here.</p>
      `,
    });
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const card = canvas.querySelector(".m-card") as HTMLDivElement;
    const content = canvas.querySelector(".m-card__content") as HTMLDivElement;

    await expect(card).not.toBeNull();
    await expect(card).toHaveClass("m-card");
    await expect(content).toHaveTextContent("Card Title");
    await expect(content).toHaveTextContent("This is the card content.");
  },
};

export const Floating: Story = {
  render: () => {
    return createCard({
      content: `
      <p style='font-weight: bold;'>Card Title</p>
      <p>This is the card content. The main content is displayed here.</p>
      `,
      floating: true,
    });
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const card = canvas.querySelector(".m-card") as HTMLDivElement;

    await expect(card).not.toBeNull();
    await expect(card).toHaveClass("m-card");
    await expect(card).toHaveClass("--floating");
  },
};

export const WithImage: Story = {
  render: () => {
    return createCard({
      content: `
      <p style='font-weight: bold; margin-bottom: 8px;'>Card Title</p>
      <p>This is the card content. The main content is displayed here.</p>
      `,
      image: exampleImage,
      style: "width: 320px; height: auto;",
    });
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const card = canvas.querySelector(".m-card") as HTMLDivElement;
    const image = canvas.querySelector(".m-card__image") as HTMLImageElement;

    await expect(card).not.toBeNull();
    await expect(image).not.toBeNull();
    await expect(image).toHaveAttribute("src", exampleImage);
  },
};
