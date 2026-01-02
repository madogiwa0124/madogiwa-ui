import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";
import { createColumns } from "./Columns";

type ColumnsStoryProperties = {
  columnsLength: number;
  gap: boolean;
  alignRows: boolean;
  itemCount: number;
  itemColSize: number;
  autoFit: boolean;
  autoFitMin: string;
};

const meta: Meta<ColumnsStoryProperties> = {
  title: "Layouts/Columns",
  tags: ["autodocs"],
  argTypes: {
    columnsLength: {
      control: { type: "range", min: 1, max: 12, step: 1 },
      description: "The number of columns for the component",
    },
    gap: {
      control: { type: "boolean" },
      description: "The gap display modifier for the component",
    },
    alignRows: {
      control: { type: "boolean" },
      description: "The row alignment subgrid modifier for the component",
    },
    itemCount: {
      control: { type: "range", min: 1, max: 24, step: 1 },
      description: "The number of demo items for the component",
    },
    itemColSize: {
      control: { type: "range", min: 1, max: 12, step: 1 },
      description: "The column span for demo items in the component",
    },
    autoFit: {
      control: { type: "boolean" },
      description: "The auto-fit responsive modifier for the component",
    },
    autoFitMin: {
      control: { type: "text" },
      description: "The minimum column size for auto-fit in the component",
      if: { arg: "autoFit", truthy: true },
      defaultValue: "0",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Columns component provides a powerful 12-column grid system based on CSS Grid with responsive behavior and subgrid support.

### Usage

Use Columns for responsive grid layouts, card grids, dashboard widgets, and complex layouts requiring precise content alignment. Perfect for organizing content with consistent spacing and automatic responsive adjustments.

### Example code

\`\`\`html
<!-- Basic 12-column grid -->
<div class="m-columns">
  <div data-col-size="4">Item 1</div>
  <div data-col-size="4">Item 2</div>
  <div data-col-size="4">Item 3</div>
</div>

<!-- Auto-fit responsive columns -->
<div class="m-columns --auto-fit" style="--columns-auto-fit-min: 200px;">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Subgrid alignment for card layouts -->
<div class="m-columns --align-rows">
  <div class="m-card" data-col-size="4" data-subgrid-rows="3">
    <img class="m-card__image" src="image.jpg" alt="">
    <div class="m-card__content"><h3>Title</h3><p>Content</p></div>
    <div class="m-card__footer"><button>Action</button></div>
  </div>
</div>
\`\`\`

### Elements

This component has no child elements - it's a single-level component that acts as a container for grid items.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-columns | .--auto-fit | Enables auto-fit behavior for responsive column sizing |
| .m-columns | .--no-gap | Removes spacing between columns |
| .m-columns | .--align-rows | Enables alignment of nested content using subgrid rows |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --columns-gap | var(--spacing-2) | Gap between columns |
| --columns-length-default | 12 | Default number of columns |
| --columns-length | var(--columns-length-default) | Active number of columns |
| --columns-length-xl | round(down, calc(var(--columns-length-default) * 0.750)) | Columns for XL breakpoint (9) |
| --columns-length-lg | round(down, calc(var(--columns-length-default) * 0.500)) | Columns for large breakpoint (6) |
| --columns-length-md | round(down, calc(var(--columns-length-default) * 0.250)) | Columns for medium breakpoint (3) |
| --columns-length-sm | round(down, calc(var(--columns-length-default) * 0.125)) | Columns for small breakpoint (1) |
| --columns-default-col-size | 1 | Default column span for items |
| --columns-col-size | var(--columns-default-col-size) | Active column span for items |
| --columns-subgrid-gap | 0 | Gap for subgrid items |
| --columns-auto-fit-min | 0 | Minimum size for auto-fit columns |

### Data Attributes

| Target | Attribute | Values | Description |
| ------ | --------- | ------ | ----------- |
| .m-columns | data-columns-length | 1-12 | Override default column count |
| .m-columns > * | data-col-size | 1-12 | Specify how many columns this item spans |
| .m-columns > * | data-subgrid-rows | 1-6 | Number of subgrid rows to span (with --align-rows) |

### Caution

- Ensure column spans don't exceed total columns to avoid layout issues
- CSS Subgrid has limited browser support - test across target browsers
- The --align-rows modifier changes child display to subgrid, which may conflict with flex layouts
- Use container queries when available for better responsive behavior
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ColumnsStoryProperties>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic 12-column grid system with configurable gap, column spans, and responsive behavior.",
      },
    },
  },
  render: (args) => {
    const children = Array.from({ length: args.itemCount }, (_, index) => ({
      content: `
        <div style="background: var(--color-bg-subtle); padding: 1rem; border-radius: 6px; border: 1px solid var(--color-border); text-align: center;">
          <strong>Item ${String(index + 1)}</strong><br>
          <small style="color: var(--color-text-subtle);">Column span: ${String(args.itemColSize)}</small>
        </div>
      `,
      colSize: args.itemColSize,
    }));

    const columnsProperties = {
      gap: args.gap,
      subgrid: args.alignRows,
      autoFit: args.autoFit,
      autoFitMin: args.autoFitMin,
      children,
      ...(args.columnsLength !== 12 && { columnsLength: args.columnsLength }),
    };

    return createColumns(columnsProperties);
  },
  args: {
    columnsLength: 12,
    gap: true,
    alignRows: false,
    itemCount: 8,
    itemColSize: 1,
    autoFit: false,
    autoFitMin: "0",
  },
  play: async ({ args }) => {
    const columnsContainer = document.querySelector(".m-columns");

    await expect(columnsContainer).toBeInTheDocument();
    await expect(columnsContainer).toHaveClass("m-columns");

    if (!args.gap) {
      await expect(columnsContainer).toHaveClass("--no-gap");
    }

    if (args.alignRows) {
      await expect(columnsContainer).toHaveClass("--subgrid");
    }

    if (args.columnsLength !== 12) {
      await expect(columnsContainer).toHaveAttribute("data-columns-length", String(args.columnsLength));
    }

    if (!columnsContainer) return;
    const items = columnsContainer.querySelectorAll("& > div");
    await expect(items).toHaveLength(args.itemCount);

    for (const item of items) {
      await expect(item).toHaveAttribute("data-col-size", String(args.itemColSize));
    }
  },
};

export const AlignmentNestedContentRows: Story = {
  render: (args) => {
    const normalChild = {
      content: `
          <img class="m-card__image" src="/stories/components/Card/320x240.png" alt="Example card image showing 320x240 placeholder">
          <div class="m-card__content">
            <h3 class="m-h3">Image Card</h3>
            <p class="m-p" style="color: var(--color-text-muted)">
              This card demonstrates how images can be integrated with content. The image is responsive and maintains proper aspect ratio.
            </p>
          </div>
          <div class="m-card__footer">
            <button class="m-btn --primary --rounded">Action</button>
          </div>
        `,
      colSize: args.itemColSize,
      subgridRows: 3,
    };

    const longContentChild = {
      content: `
          <img class="m-card__image" src="/stories/components/Card/320x240.png" alt="Example card image showing 320x240 placeholder">
          <div class="m-card__content">
            <h3 class="m-h3">Image Card</h3>
            <p class="m-p" style="color: var(--color-text-muted)">
              This card has significantly more content than the others. It is designed to test the subgrid alignment feature, ensuring that despite varying content lengths, the action buttons remain perfectly aligned at the bottom of each card.
            </p>
          </div>
          <div class="m-card__footer">
            <button class="m-btn --primary --rounded">Action</button>
          </div>
        `,
      colSize: args.itemColSize,
      subgridRows: 3,
    };
    const shortContentChild = {
      content: `
          <img class="m-card__image" src="/stories/components/Card/320x240.png" alt="Example card image showing 320x240 placeholder">
          <div class="m-card__content">
            <h3 class="m-h3">Image Card</h3>
            <p class="m-p" style="color: var(--color-text-muted)">
              This card demonstrates how images can be integrated with content.
            </p>
          </div>
          <div class="m-card__footer">
            <button class="m-btn --primary --rounded">Action</button>
          </div>
        `,
      colSize: args.itemColSize,
      subgridRows: 3,
    };

    const columnsElement = createColumns({
      gap: args.gap,
      alignRows: args.alignRows,
      children: [],
    });

    const childrenPattern = [
      normalChild,
      shortContentChild,
      longContentChild,
    ];
    const children = [];

    for (let index = 0; index < args.itemCount; index++) {
      children.push(childrenPattern[index % childrenPattern.length]);
    }

    for (const child of children) {
      if (!child) continue;

      const element = document.createElement("div");
      element.className = "m-card";
      element.innerHTML = child.content;
      element.dataset["colSize"] = String(child.colSize);
      if (child.subgridRows) {
        element.dataset["subgridRows"] = String(child.subgridRows);
      }
      columnsElement.append(element);
    }

    return columnsElement;
  },
  args: {
    columnsLength: 12,
    gap: true,
    alignRows: true,
    itemCount: 3,
    itemColSize: 4,
    autoFit: false,
  },
  play: async ({ args }) => {
    const columnsContainer = document.querySelector(".m-columns");

    await expect(columnsContainer).toBeInTheDocument();
    await expect(columnsContainer).toHaveClass("m-columns");

    if (args.alignRows) {
      await expect(columnsContainer).toHaveClass("--align-rows");

      if (!columnsContainer) return;
      const items = columnsContainer.querySelectorAll("div.m-card");
      for (const item of items) {
        await expect(item).toHaveAttribute("data-subgrid-rows", "3");
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates CSS Subgrid alignment where cards with different content lengths have their footer content/buttons perfectly aligned at the bottom. Toggle subgrid to see the difference.",
      },
    },
  },
};
