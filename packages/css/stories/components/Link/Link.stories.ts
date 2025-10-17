import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type LinkProperties, createLink } from "./Link";

const meta: Meta<LinkProperties> = {
  title: "Components/Link",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "The text content of the link",
    },
    href: {
      control: "text",
      description: "The URL the link points to",
    },
    target: {
      control: {
        type: "select",
      },
      options: ["_self", "_blank", "_parent", "_top"],
      description: "Specifies where to open the linked document",
    },
    rel: {
      control: "text",
      description: "Specifies the relationship between the current document and the linked document",
    },
    onClick: { action: "clicked" },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Link component provides a styled anchor element with proper semantic behavior and visual feedback. It supports various states including hover, active, and visited with smooth color transitions.

### Usage

Use Link components for navigation between pages or sections, external links, and interactive text elements. The component automatically handles different link states and provides appropriate visual feedback for user interactions.

### Modifiers

No specific modifiers are defined for this component.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-link | --link-color | var(--color-secondary) | Default link color |
| .m-link | --link-color-hover | rgb(from var(--link-color) r g b / 80%) | Color on hover state |
| .m-link | --link-color-active | rgb(from var(--link-color) r g b / 50%) | Color on active state |
| .m-link | --link-color-visited | rgb(from var(--link-color) r g b / 120%) | Color for visited links |
| .m-link | --link-text-decoration | underline | Text decoration style |
| .m-link | --link-underline-offset | 0.2em | Offset for underline decoration |

### Caution

- The component uses CSS relative color syntax (rgb from) which requires modern browser support
- Visited link styling may not work in some testing environments
- External links should include appropriate rel attributes for security
- Color contrast should be verified when customizing link colors
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<LinkProperties>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default link with basic styling and hover effects.",
      },
    },
  },
  render: args => createLink(args),
  args: {
    text: "Link text",
    href: "https://example.com",
    target: "_self",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");

    await expect(link).not.toBeNull();
    await expect(link).toHaveClass("m-link");
    await expect(link).toHaveTextContent("Link text");
    await expect(link).toHaveAttribute("href", "https://example.com");
  },
};

export const InParagraph: Story = {
  parameters: {
    docs: {
      description: {
        story: "Link integrated within a paragraph of text, showing contextual usage.",
      },
    },
  },
  render: () => {
    const container = document.createElement("div");

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is a ";

    const link = createLink({
      text: "link",
      href: "https://example.com",
    });

    paragraph.append(link);
    paragraph.append(document.createTextNode(" included in this example."));

    container.append(paragraph);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const paragraph = canvas.getByText(/This is a.*included in this example/);
    const link = canvas.getByRole("link");

    await expect(paragraph).not.toBeNull();
    await expect(link).not.toBeNull();
    await expect(link).toHaveClass("m-link");
    await expect(link).toHaveTextContent("link");
    await expect(link).toHaveAttribute("href", "https://example.com");
  },
};
