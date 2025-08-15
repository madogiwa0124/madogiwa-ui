import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

const meta: Meta = {
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
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
  const link = document.createElement("a");
  link.classList.add("link");
  link.textContent = args["text"] || "";
  link.href = args["href"] || "";
  link.target = args["newTab"] ? "_blank" : "_self";
    return link;
  },
  args: {
    text: "Link text",
    href: "https://example.com",
    newTab: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = canvasElement as HTMLElement;
    const link = canvas.querySelector("a") as HTMLAnchorElement;

    expect(link).not.toBeNull();
    expect(link).toHaveClass("link");
    expect(link).toHaveTextContent(args["text"] || "Link text");
    expect(link).toHaveAttribute("href", args["href"] || "https://example.com");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  },
};

export const LinkInParagraph: Story = {
  render: () => {
    const container = document.createElement("div");

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is a ";

    const link = document.createElement("a");
    link.classList.add("link");
    link.textContent = "link";
    link.href = "https://example.com";

    paragraph.appendChild(link);
    paragraph.appendChild(document.createTextNode(" is included in this example."));

    container.appendChild(paragraph);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const paragraph = canvas.querySelector("p") as HTMLParagraphElement;
    const link = canvas.querySelector("a") as HTMLAnchorElement;

    expect(paragraph).not.toBeNull();
    expect(link).not.toBeNull();
    expect(link).toHaveClass("link");
    expect(link).toHaveTextContent("Link");
    expect(link).toHaveAttribute("href", "https://example.com");

    expect(paragraph.contains(link)).toBe(true);
    expect(paragraph.textContent).toContain("This is a");
    expect(paragraph.textContent).toContain("link");
    expect(paragraph.textContent).toContain(" is included in this example.");
  },
};
