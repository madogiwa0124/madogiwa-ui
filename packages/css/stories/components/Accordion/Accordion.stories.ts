import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

type AccordionProperties = {
  title: string;
  content: string;
  transition: boolean;
  outline: boolean;
  open: boolean;
};

const meta: Meta<AccordionProperties> = {
  title: "Components/Accordion",
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    transition: {
      control: { type: "boolean" },
      description: "Enable smooth transitions for accordion expansion",
    },
    outline: {
      control: { type: "boolean" },
      description: "Add border and padding styling",
    },
    open: {
      control: { type: "boolean" },
      description: "Initial open state of the accordion",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Accordion component provides expandable/collapsible content sections using the native HTML \`<details>\` and \`<summary>\` elements, ensuring optimal accessibility and semantic structure.

### Usage

Use accordions to organize content into expandable sections, helping users focus on specific information while maintaining a clean interface. Perfect for FAQs, documentation sections, or any content that benefits from progressive disclosure.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-accordion | .--transition | Enables smooth animations for expand/collapse transitions |
| .m-accordion | .--outline | Adds border styling and padding around the accordion |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --accordion-summary-padding | var(--spacing-3) 0 | Padding for the accordion summary/header |
| --accordion-summary-font-weight | var(--font-weight-bold) | Font weight of the summary text |
| --accordion-summary-icon-gap | var(--spacing-2) | Gap between icon and summary text |
| --accordion-summary-icon-size | 0.6rem | Size of the expand/collapse icon |
| --accordion-summary-icon-color | var(--color-text) | Color of the expand/collapse icon |
| --accordion-summary-icon-clip-path | polygon(0 0, 100% 50%, 0 100%) | Shape of the expand/collapse icon (triangle) |
| --accordion-summary-icon-open-transform | rotate(90deg) | Transform applied to icon when accordion is open |
| --accordion-content-padding | 0 var(--spacing-3) var(--spacing-3) var(--spacing-3) | Padding for the accordion content area |
| --accordion-outline-border | 1px solid var(--color-border) | Border style for outline variant |
| --accordion-outline-border-radius | var(--radius-md) | Border radius for outline variant |
| --accordion-outline-padding | 0 var(--spacing-2) | Padding for outline variant |
| --accordion-transition-time | 0.2s | Duration of expand/collapse animations |

### Accessibility

- Uses native \`<details>\` and \`<summary>\` elements for optimal screen reader support
- Includes proper ARIA relationships between summary and content
- Keyboard navigation is handled natively by the browser
- Focus management follows standard HTML behavior
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<AccordionProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const accordion = document.createElement("details");
    accordion.classList.add("m-accordion");

    if (args["transition"]) accordion.classList.add("--transition");
    if (args["outline"]) accordion.classList.add("--outline");
    if (args["open"]) accordion.open = true;

    const title = args["title"];
    const content = args["content"];

    accordion.innerHTML = `
      <summary class="m-accordion__summary" id="summary" aria-controls="content">
        ${title}
      </summary>
      <div class="m-accordion__content" id="content" aria-labelledby="summary">
        <p>${content}</p>
      </div>
    `;

    container.append(accordion);
    return container;
  },
  args: {
    title: "What is Madogiwa UI?",
    content: "Madogiwa UI is a modern CSS framework leveraging cutting-edge CSS features like @property, CSS Nesting, and logical properties.",
    transition: false,
    outline: false,
    open: false,
  },
  play: async ({ canvasElement }) => {
    const accordion = canvasElement.querySelector(".m-accordion") as HTMLDetailsElement;
    const summary = accordion.querySelector(".m-accordion__summary") as HTMLElement;
    const content = accordion.querySelector(".m-accordion__content") as HTMLElement;

    // Initial state - accordion should be closed
    await expect(accordion.open).toBe(false);
    await expect(content).not.toBeVisible();

    // Click to open
    summary.click();
    await expect(accordion.open).toBe(true);

    // Wait for any potential transitions
    await new Promise((resolve) => {
      setTimeout(resolve, 300);
    });

    await expect(content).toBeVisible();

    // Click to close
    summary.click();
    await expect(accordion.open).toBe(false);
  },
};

export const WithTransition: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const accordion = document.createElement("details");
    accordion.classList.add("m-accordion");

    if (args["transition"]) accordion.classList.add("--transition");
    if (args["outline"]) accordion.classList.add("--outline");
    if (args["open"]) accordion.open = true;

    const title = args["title"];
    const content = args["content"];

    accordion.innerHTML = `
      <summary class="m-accordion__summary">
        ${title}
      </summary>
      <div class="m-accordion__content">
        <p>${content}</p>
      </div>
    `;

    container.append(accordion);
    return container;
  },
  args: {
    title: "Accordion with Smooth Transitions",
    content: "This accordion includes smooth expand/collapse animations for better user experience.",
    transition: true,
    outline: false,
    open: false,
  },
};

export const WithOutline: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const accordion = document.createElement("details");
    accordion.classList.add("m-accordion");

    if (args["transition"]) accordion.classList.add("--transition");
    if (args["outline"]) accordion.classList.add("--outline");
    if (args["open"]) accordion.open = true;

    const title = args["title"];
    const content = args["content"];

    accordion.innerHTML = `
      <summary class="m-accordion__summary">
        ${title}
      </summary>
      <div class="m-accordion__content">
        <p>${content}</p>
      </div>
    `;

    container.append(accordion);
    return container;
  },
  args: {
    title: "Accordion with Outline Style",
    content: "This accordion has border and padding styling for visual separation.",
    transition: false,
    outline: true,
    open: false,
  },
};

export const OpenByDefault: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const accordion = document.createElement("details");
    accordion.classList.add("m-accordion");

    if (args["transition"]) accordion.classList.add("--transition");
    if (args["outline"]) accordion.classList.add("--outline");
    if (args["open"]) accordion.open = true;

    const title = args["title"];
    const content = args["content"];

    accordion.innerHTML = `
      <summary class="m-accordion__summary">
        ${title}
      </summary>
      <div class="m-accordion__content">
        <p>${content}</p>
      </div>
    `;

    container.append(accordion);
    return container;
  },
  args: {
    title: "Pre-expanded Accordion",
    content: "This accordion is open by default, useful for highlighting important content.",
    transition: true,
    outline: true,
    open: true,
  },
};

export const MultipleAccordions: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1rem";

    const accordions = [
      {
        title: "Getting Started",
        content: "Learn how to install and configure Madogiwa UI in your project.",
      },
      {
        title: "Components",
        content: "Explore the available components and their usage patterns.",
      },
      {
        title: "Customization",
        content: "Discover how to customize the framework to match your design system.",
      },
    ];

    for (const accordionData of accordions) {
      const accordion = document.createElement("details");
      accordion.classList.add("m-accordion", "--transition", "--outline");

      accordion.innerHTML = `
        <summary class="m-accordion__summary">
          ${accordionData.title}
        </summary>
        <div class="m-accordion__content">
          <p>${accordionData.content}</p>
        </div>
      `;

      container.append(accordion);
    }

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple accordions can be used together to create expandable content sections.",
      },
    },
  },
};
