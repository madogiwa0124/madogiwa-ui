import type { Meta, StoryObj } from "@storybook/html";
import { createLink, type LinkProps } from "./Link";
import { expect } from "storybook/test";

const meta: Meta<LinkProps> = {
  title: "Components/Link",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    newTab: { control: "boolean" },
    className: { control: "text" },
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
type Story = StoryObj<LinkProps>;

export const Default: Story = {
  render: (args) => {
    return createLink(args);
  },
  args: {
    text: "Link text",
    href: "https://example.com",
    newTab: false,
    className: "",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = canvasElement as HTMLElement;
    const link = canvas.querySelector("a") as HTMLAnchorElement;

    expect(link).not.toBeNull();
    expect(link).toHaveClass("link");
    expect(link).toHaveTextContent(args.text || "Link text");
    expect(link).toHaveAttribute("href", args.href || "https://example.com");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  },
};

export const LinkInParagraph: Story = {
  render: () => {
    const container = document.createElement("div");

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is a ";

    const link = createLink({
      text: "link",
      href: "https://example.com",
    });

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
