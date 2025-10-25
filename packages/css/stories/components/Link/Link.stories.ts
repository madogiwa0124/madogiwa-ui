import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type LinkProperties, createLink } from "./Link";

const meta: Meta<LinkProperties> = {
  title: "Components/Link",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "The text content for the component",
    },
    href: {
      control: "text",
      description: "The URL href for the component",
    },
    target: {
      control: {
        type: "select",
      },
      options: ["_self", "_blank", "_parent", "_top"],
      description: "The target attribute for the component",
    },
    rel: {
      control: "text",
      description: "The rel attribute for the component",
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

### Example code

\`\`\`html
<!-- Basic internal link -->
<a class="m-link" href="/about">About Us</a>

<!-- External link -->
<a class="m-link" href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>

<!-- Email link -->
<a class="m-link" href="mailto:contact@example.com">Contact Us</a>

<!-- Link within text -->
<p>Please read our <a class="m-link" href="/terms">Terms of Service</a> before continuing.</p>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

This component has no modifiers.

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --link-color | var(--color-secondary) | Default link color |
| --link-color-hover | rgb(from var(--link-color) r g b / 80%) | Color on hover state |
| --link-color-active | rgb(from var(--link-color) r g b / 50%) | Color on active state |
| --link-color-visited | rgb(from var(--link-color) calc(r * 0.6) calc(g * 0.6) calc(b * 0.6)) | Color for visited links |
| --link-text-decoration | underline | Text decoration style |
| --link-underline-offset | 0.2em | Offset for underline decoration |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use appropriate \`rel\` attributes for external links (e.g., \`noopener noreferrer\`)
- Ensure sufficient color contrast for accessibility
- Test link visibility in different states (hover, active, visited)
- Provide meaningful link text that describes the destination
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
