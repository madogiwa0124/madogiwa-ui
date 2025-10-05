import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface LinkProperties {
  text: string;
  href: string;
  newTab?: boolean;
  onClick?: () => void;
}

const meta: Meta<LinkProperties> = {
  title: "Components/Link",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    newTab: { control: "boolean" },
    onClick: { action: "clicked" },
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
type Story = StoryObj<LinkProperties>;

export const Default: Story = {
  render: (args) => {
    const link = document.createElement("a");
    link.classList.add("m-link");
    link.textContent = args["text"];
    link.href = args["href"];
    link.target = args["newTab"] ? "_blank" : "_self";
    return link;
  },
  args: {
    text: "Link text",
    href: "https://example.com",
    newTab: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = canvasElement;
    const link = canvas.querySelector("a") as HTMLAnchorElement;

    await expect(link).not.toBeNull();
    await expect(link).toHaveClass("m-link");
    await expect(link).toHaveTextContent(args["text"]);
    await expect(link).toHaveAttribute("href", args["href"]);
    await expect(link).not.toHaveAttribute("rel");
  },
};

export const LinkInParagraph: Story = {
  render: () => {
    const container = document.createElement("div");

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is a ";

    const link = document.createElement("a");
    link.classList.add("m-link");
    link.textContent = "link";
    link.href = "https://example.com";

    paragraph.append(link);
    paragraph.append(document.createTextNode(" is included in this example."));

    container.append(paragraph);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const paragraph = canvas.querySelector("p") as HTMLParagraphElement;
    const link = canvas.querySelector("a") as HTMLAnchorElement;

    await expect(paragraph).not.toBeNull();
    await expect(link).not.toBeNull();
    await expect(link).toHaveClass("m-link");
    await expect(link).toHaveTextContent("link");
    await expect(link).toHaveAttribute("href", "https://example.com");

    await expect(paragraph.contains(link)).toBe(true);
    await expect(paragraph.textContent).toContain("This is a");
    await expect(paragraph.textContent).toContain("link");
    await expect(paragraph.textContent).toContain(" is included in this example.");
  },
};
