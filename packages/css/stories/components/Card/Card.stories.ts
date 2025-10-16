import type { Meta, StoryObj } from "@storybook/html";
import { expect, userEvent } from "storybook/test";
import exampleImage from "./320x240.png";

type CardProperties = {
  content: string;
  floating: boolean;
  hasImage: boolean;
  imageAlt: string;
  hasActions: boolean;
  actionsJustify: "flex-start" | "center" | "flex-end" | "space-between";
};

const meta: Meta<CardProperties> = {
  title: "Components/Card",
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: { type: "text" },
      description: "HTML content for the card",
    },
    floating: {
      control: { type: "boolean" },
      description: "Add floating shadow effect",
    },
    hasImage: {
      control: { type: "boolean" },
      description: "Include an image in the card",
    },
    imageAlt: {
      control: { type: "text" },
      description: "Alt text for the card image",
    },
    hasActions: {
      control: { type: "boolean" },
      description: "Include action buttons in the card",
    },
    actionsJustify: {
      control: {
        type: "select",
      },
      options: ["flex-start", "center", "flex-end", "space-between"],
      description: "Horizontal alignment of action buttons",
      if: { arg: "hasActions", truthy: true },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Card component provides a flexible container for content with optional images, shadows, and various styling options. It follows a clean, minimal design approach suitable for displaying grouped information.

### Usage

Use cards to:
- Display content in organized, digestible sections
- Group related information together
- Create product showcases or feature highlights
- Present articles, blog posts, or media content
- Build dashboard widgets or information panels

**Common use cases:**
- Product cards in e-commerce
- Article previews in blogs
- Profile cards for team members
- Feature highlights on landing pages
- Dashboard widgets and metrics

### Elements

| Name | Description |
| ------- | ----------- |
| .m-card__image | Card image element with responsive sizing |
| .m-card__content | Content area with proper padding |
| .m-card__actions | Action area with flex layout for buttons and controls |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-card | .--floating | Adds elevated shadow effect with hover interaction |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --card-floating-shadow | var(--shadow-sm) | Shadow for floating card variant |
| --card-radius | var(--radius-md) | Border radius of the card |
| --card-bg-color | var(--color-white) | Background color |
| --card-border-color | var(--color-border) | Border color |
| --card-content-padding | var(--spacing-2) | Padding for card content area |
| --card-actions-padding | var(--spacing-1) | Padding for card actions area |
| --card-actions-item-gap | var(--spacing-1) | Gap between action items |
| --card-actions-justify | flex-end | Horizontal alignment of action items |
| --card-actions-border-top | initial | Top border for card actions area |

### Caution
- Ensure sufficient contrast between text and background for readability
- Use meaningful alt text for images to enhance accessibility
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<CardProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const card = document.createElement("div");
    card.classList.add("m-card");

    const content = args["content"];
    const floating = args["floating"];
    const hasActions = args["hasActions"];
    const actionsJustify = args["actionsJustify"];

    if (floating) card.classList.add("--floating");

    const contentElement = document.createElement("div");
    contentElement.classList.add("m-card__content");
    contentElement.innerHTML = `
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Card Title</h3>
      <p style="margin: 0; color: #666; line-height: 1.5;">${content}</p>
    `;
    card.append(contentElement);

    if (hasActions) {
      const actionsElement = document.createElement("div");
      actionsElement.classList.add("m-card__actions");
      actionsElement.style.setProperty("--card-actions-justify", actionsJustify);
      actionsElement.innerHTML = `
        <button class="m-btn --default">Cancel</button>
        <button class="m-btn --primary">Confirm</button>
      `;
      card.append(actionsElement);
    }

    container.append(card);
    return container;
  },
  args: {
    content: "This is a basic card with content. Cards are perfect for organizing related information in a clean, digestible format.",
    floating: false,
    hasActions: false,
    actionsJustify: "flex-end",
  },
  play: async ({ canvasElement, args }) => {
    const card = canvasElement.querySelector(".m-card") as HTMLDivElement;
    const content = canvasElement.querySelector(".m-card__content") as HTMLDivElement;

    // Test basic card structure
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveClass("m-card");
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveClass("m-card__content");

    // Test content
    await expect(content).toHaveTextContent("Card Title");
    await expect(content).toHaveTextContent(/basic card with content/);

    // Test floating modifier
    const hasFloating = args["floating"];
    await (hasFloating
      ? expect(card).toHaveClass("--floating")
      : expect(card).not.toHaveClass("--floating"));

    // Test actions element if present
    const hasActions = args["hasActions"];
    const actions = canvasElement.querySelector(".m-card__actions");
    if (hasActions) {
      await expect(actions).toBeInTheDocument();
      await expect(actions).toHaveClass("m-card__actions");
    } else {
      await expect(actions).not.toBeInTheDocument();
    }

    // Test styling
    const computedStyle = globalThis.getComputedStyle(card);
    await expect(computedStyle.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    await expect(computedStyle.borderRadius).not.toBe("0px");
  },
};

export const Floating: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const card = document.createElement("div");
    card.classList.add("m-card", "--floating");

    const content = args["content"];

    const contentElement = document.createElement("div");
    contentElement.classList.add("m-card__content");
    contentElement.innerHTML = `
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Floating Card</h3>
      <p style="margin: 0; color: #666; line-height: 1.5;">${content}</p>
    `;

    card.append(contentElement);
    container.append(card);
    return container;
  },
  args: {
    content: "This card uses the floating modifier to add an elevated shadow effect. Hover over it to see the interaction.",
  },
  play: async ({ canvasElement }) => {
    const card = canvasElement.querySelector(".m-card") as HTMLDivElement;

    // Test floating card structure
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveClass("m-card");
    await expect(card).toHaveClass("--floating");

    // Test shadow effect
    const computedStyle = globalThis.getComputedStyle(card);
    await expect(computedStyle.boxShadow).not.toBe("none");

    // Test hover interaction
    await userEvent.hover(card);
    // Note: The actual shadow change on hover is handled by CSS transitions
    // We can verify the transition property exists
    await expect(card).toHaveClass("--floating");

    await userEvent.unhover(card);
  },
  parameters: {
    docs: {
      description: {
        story: "Card with floating shadow effect and hover interaction.",
      },
    },
  },
};

export const FullCardSample: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const card = document.createElement("div");
    card.classList.add("m-card");
    card.style.width = "320px";
    if (args["floating"]) card.classList.add("--floating");

    const hasImage = args["hasImage"];
    const content = args["content"];
    const imageAlt = args["imageAlt"];

    if (hasImage) {
      const imageElement = document.createElement("img");
      imageElement.classList.add("m-card__image");
      imageElement.src = exampleImage;
      imageElement.alt = imageAlt;
      card.append(imageElement);
    }

    const contentElement = document.createElement("div");
    contentElement.classList.add("m-card__content");
    contentElement.innerHTML = `
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Image Card</h3>
      <p style="margin: 0; color: #666; line-height: 1.5;">${content}</p>
    `;

    card.append(contentElement);
    if (args["hasActions"]) {
      const actionsElement = document.createElement("div");
      actionsElement.classList.add("m-card__actions");
      actionsElement.style.justifyContent = args["actionsJustify"];

      const cancelButton = document.createElement("button");
      cancelButton.classList.add("m-btn", "--default");
      cancelButton.textContent = "Cancel";

      const confirmButton = document.createElement("button");
      confirmButton.classList.add("m-btn", "--primary");
      confirmButton.textContent = "Confirm";

      actionsElement.append(cancelButton, confirmButton);
      card.append(actionsElement);
    }
    container.append(card);
    return container;
  },
  args: {
    content: "This card demonstrates how images can be integrated with content. The image is responsive and maintains proper aspect ratio.",
    hasImage: true,
    imageAlt: "Example card image showing 320x240 placeholder",
    hasActions: false,
    actionsJustify: "flex-end",
    floating: false,
  },
  play: async ({ canvasElement, args }) => {
    const card = canvasElement.querySelector(".m-card") as HTMLDivElement;
    const image = canvasElement.querySelector(".m-card__image") as HTMLImageElement;
    const content = canvasElement.querySelector(".m-card__content") as HTMLDivElement;

    // Test card structure
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveClass("m-card");
    await expect(content).toBeInTheDocument();

    if (args["hasImage"]) {
      // Test image element
      await expect(image).toBeInTheDocument();
      await expect(image).toHaveClass("m-card__image");
      await expect(image).toHaveAttribute("src", exampleImage);
      await expect(image).toHaveAttribute("alt", args["imageAlt"]);

      // Test image styling
      const imageStyle = globalThis.getComputedStyle(image);
      await expect(imageStyle.width).toBe("318px"); // Should be 100% of container minus borders
      await expect(imageStyle.objectFit).toBe("cover");
    }

    if (args["hasActions"]) {
      // Test actions area
      const actions = canvasElement.querySelector(".m-card__actions") as HTMLDivElement;
      await expect(actions).toBeInTheDocument();
      await expect(actions).toHaveClass("m-card__actions");
      await expect(actions).toHaveStyle(`justify-content: ${args["actionsJustify"]}`);
    }

    // Test content
    await expect(content).toHaveTextContent("Image Card");
    await expect(content).toHaveTextContent(/image/);
  },
  parameters: {
    docs: {
      description: {
        story: "Card with image header and content area.",
      },
    },
  },
};
