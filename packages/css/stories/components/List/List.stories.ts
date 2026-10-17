import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
import { type ListProperties, type ListType, createMixedContentList, createNestedList, createOl, createUl } from "./List";

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

Item content (text and inline elements such as \`<strong>\`) flows as normal inline content, and a nested list is placed below the item text.
Lists can be nested in any combination; a nested list is not affected by the markers or counters of its ancestor lists.

\`\`\`html
<ol class="m-ol">
  <li class="m-li">
    <strong>Parent</strong> item
    <ul class="m-ul">
      <li class="m-li">Child item</li>
    </ul>
  </li>
</ol>
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
| .m-ol | --list-marker-width | 3ch | Width reserved for the number marker (increase it for lists with 100+ items) |
| .m-ul | --list-marker-width | 1em | Width reserved for the bullet marker |
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
      // The smaller bullet shares the item's line box so that it is vertically centered on the first line
      await expect(getComputedStyle(item, "::before").lineHeight).toBe(getComputedStyle(item).lineHeight);
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
    await expect(getComputedStyle(olLi as Element, "::before").content).toBe("none");
    await expect(getComputedStyle(ulLi as Element, "::before").content).toBe("none");
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
    await expect(getComputedStyle(ol as Element).flexDirection).toBe("row");
    await expect(getComputedStyle(ul as Element).flexDirection).toBe("row");
  },
};

const createContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "var(--spacing-4)";
  return container;
};

const nestedPatterns: { parent: ListType; child: ListType }[] = [
  { parent: "ol", child: "ul" },
  { parent: "ul", child: "ol" },
  { parent: "ol", child: "ol" },
  { parent: "ul", child: "ul" },
];

export const NestedList: Story = {
  parameters: {
    docs: {
      description: {
        story: "Nested lists in every combination (ul in ol, ol in ul, ol in ol, ul in ul). A nested list keeps its own marker and counter.",
      },
    },
  },
  render: () => {
    const container = createContainer();
    for (const pattern of nestedPatterns) {
      const list = createNestedList(pattern);
      list.dataset["testid"] = `${pattern.child}-in-${pattern.parent}`;
      container.append(list);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const getList = (id: string): HTMLElement => {
      const list = canvasElement.querySelector<HTMLElement>(`[data-testid="${CSS.escape(id)}"]`);
      if (!list) throw new Error(`${id} not found`);
      return list;
    };
    const directItems = (list: Element): Element[] => [...list.children].filter(element => element.matches(".m-li"));
    const nestedItems = (list: Element): Element[] => [...list.querySelectorAll(":scope > .m-li > :is(.m-ol, .m-ul) > .m-li")];
    const isCounterMarker = (item: Element): boolean => getComputedStyle(item, "::before").content.includes("counter(list-counter)");
    const counterIncrement = (item: Element): string => getComputedStyle(item).counterIncrement;

    for (const { parent, child } of nestedPatterns) {
      const list = getList(`${child}-in-${parent}`);
      for (const item of directItems(list)) {
        await expect(isCounterMarker(item)).toBe(parent === "ol");
      }
      for (const item of nestedItems(list)) {
        await expect(isCounterMarker(item)).toBe(child === "ol");
      }
    }

    // ol in ul: number marker must not inherit the bullet font size
    const olInUl = nestedItems(getList("ol-in-ul"))[0] as Element;
    await expect(getComputedStyle(olInUl, "::before").fontSize).toBe(getComputedStyle(olInUl).fontSize);

    // ul in ol: nested bullet items must not advance the parent counter
    const ulInOl = getList("ul-in-ol");
    for (const item of nestedItems(ulInOl)) {
      await expect(counterIncrement(item)).toBe("none");
    }
    for (const item of directItems(ulInOl)) {
      await expect(counterIncrement(item)).toBe("list-counter 1");
    }

    // Nested list is placed below the parent item text, not beside it
    const parentItem = directItems(ulInOl)[0] as HTMLElement;
    const nested = parentItem.querySelector(".m-ul") as HTMLElement;
    const text = parentItem.firstChild as Text;
    const range = document.createRange();
    range.selectNodeContents(text);
    await expect(nested.getBoundingClientRect().top).toBeGreaterThanOrEqual(range.getBoundingClientRect().bottom);
  },
};

export const MixedContent: Story = {
  parameters: {
    docs: {
      description: {
        story: "List items containing inline elements mixed with text. The content flows inline instead of being split into columns.",
      },
    },
  },
  render: () => {
    const container = createContainer();
    container.style.maxInlineSize = "32rem";
    container.append(createMixedContentList("ul"));
    container.append(createMixedContentList("ol"));
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    for (const item of canvasElement.querySelectorAll<HTMLElement>(".m-li")) {
      await expect(getComputedStyle(item).display).not.toBe("flex");
    }

    for (const strong of canvasElement.querySelectorAll("strong")) {
      const item = strong.closest(".m-li") as HTMLElement;
      const text = strong.nextSibling as Text;
      const range = document.createRange();
      range.setStart(text, 0);
      range.setEnd(text, 1);
      // The text right after <strong> is on the same line, not in a separate column below/beside it
      await expect(Math.abs(range.getBoundingClientRect().top - strong.getBoundingClientRect().top)).toBeLessThan(2);
      await expect(range.getBoundingClientRect().left).toBeGreaterThanOrEqual(strong.getBoundingClientRect().right - 1);
      // <strong> is not squeezed: it fits on one line
      await expect(strong.getClientRects()).toHaveLength(1);
      await expect(item).toBeVisible();
    }
  },
};
