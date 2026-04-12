import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type ListProperties, createOl, createUl } from "./List";

const meta: Meta<ListProperties> = {
  title: "Components/List",
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "The list items to display.",
    },
    none: {
      control: "boolean",
      description: "Remove list style and padding.",
    },
    inline: {
      control: "boolean",
      description: "Display list items inline.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The List components provide styled ordered and unordered list elements with consistent spacing. They follow the BEM + CSS Nesting pattern with the \`m-\` prefix.

### Usage

Use \`.m-ol\` for ordered (numbered) lists, \`.m-ul\` for unordered (bulleted) lists, and \`.m-li\` for list items.

### Example code

\`\`\`html
<ol class="m-ol">
  <li class="m-li">First item</li>
  <li class="m-li">Second item</li>
</ol>

<ul class="m-ul">
  <li class="m-li">First item</li>
  <li class="m-li">Second item</li>
</ul>

<ul class="m-ul --none">
  <li class="m-li">No bullet item</li>
</ul>
\`\`\`

### Accessibility

Safari with VoiceOver may strip the list semantics when \`list-style: none\` is applied.
It is recommended to explicitly add \`role="list"\` to preserve accessibility.

\`\`\`html
<ul class="m-ul" role="list">
  <li class="m-li">First item</li>
</ul>
\`\`\`

### Elements

| Name | Description |
| ---- | ----------- |
| .m-ol | Ordered list element |
| .m-ul | Unordered list element |
| .m-li | List item element |

### Modifiers

| Target | Name | Description |
| ------ | ---- | ----------- |
| .m-ol, .m-ul | .--none | Remove list style and inline padding |
| .m-ol, .m-ul | .--inline | Display list items in a row |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-ol, .m-ul | --list-item-gap | var(--spacing-2) | Gap between list items |
| .m-ol, .m-ul | --list-marker-color | var(--color-primary) | Color of list markers |
| .m-ol, .m-ul | --list-marker-font-weight | var(--font-weight-bold) | Font weight of list markers |
| .m-ol | --ol-counter-suffix | "." | Suffix appended after the counter number |
| .m-ul | --ul-marker-content | "●" | Bullet character for unordered list |
| .m-ul | --ul-marker-size | 0.75em | Font size of the bullet marker |
| .m-li | --li-marker-gap | var(--spacing-2) | Gap between marker and item content |
| .m-li .m-ol, .m-li .m-ul | --list-nested-padding | var(--spacing-4) | Inline start padding for nested lists |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ListProperties>;

const defaultItems = ["First item", "Second item", "Third item"];

export const OrderedList: Story = {
  parameters: {
    docs: {
      description: {
        story: "Ordered list with numbered items.",
      },
    },
  },
  render: args => createOl({ ...args, items: args.items ?? defaultItems }),
  args: {
    none: false,
    inline: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const list = canvasElement.querySelector("ol");

    await expect(list).not.toBeNull();
    await expect(list).toHaveClass("m-ol");

    const items = canvas.getAllByRole("listitem");
    await expect(items).toHaveLength(3);

    for (const item of items) {
      await expect(item).toHaveClass("m-li");
    }
  },
};

export const UnorderedList: Story = {
  parameters: {
    docs: {
      description: {
        story: "Unordered list with bulleted items.",
      },
    },
  },
  render: args => createUl({ ...args, items: args.items ?? defaultItems }),
  args: {
    none: false,
    inline: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const list = canvasElement.querySelector("ul");

    await expect(list).not.toBeNull();
    await expect(list).toHaveClass("m-ul");

    const items = canvas.getAllByRole("listitem");
    await expect(items).toHaveLength(3);

    for (const item of items) {
      await expect(item).toHaveClass("m-li");
    }
  },
};

export const NoStyle: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Lists with the --none modifier to remove list style and indentation.",
      },
    },
  },
  render: (args) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "var(--spacing-4)";

    container.append(createOl({ ...args, items: defaultItems, none: true }));
    container.append(createUl({ ...args, items: defaultItems, none: true }));

    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const ol = canvasElement.querySelector("ol");
    const ul = canvasElement.querySelector("ul");

    await expect(ol).toHaveClass("--none");
    await expect(ul).toHaveClass("--none");

    const olLi = ol?.querySelector("li");
    const ulLi = ul?.querySelector("li");

    await expect(olLi).not.toBeNull();
    await expect(ulLi).not.toBeNull();
    await expect(globalThis.getComputedStyle(olLi as Element, "::before").content).toBe("none");
    await expect(globalThis.getComputedStyle(ulLi as Element, "::before").content).toBe("none");
  },
};

export const InlineList: Story = {
  parameters: {
    docs: {
      description: {
        story: "Lists with the --inline modifier to display items in a row.",
      },
    },
  },
  render: (args) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "var(--spacing-4)";

    container.append(createOl({ ...args, items: defaultItems, inline: true }));
    container.append(createUl({ ...args, items: defaultItems, inline: true }));

    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const ol = canvasElement.querySelector("ol");
    const ul = canvasElement.querySelector("ul");

    await expect(ol).toHaveClass("--inline");
    await expect(ul).toHaveClass("--inline");

    await expect(ol).not.toBeNull();
    await expect(ul).not.toBeNull();
    await expect(globalThis.getComputedStyle(ol as Element).flexDirection).toBe("row");
    await expect(globalThis.getComputedStyle(ul as Element).flexDirection).toBe("row");
  },
};
