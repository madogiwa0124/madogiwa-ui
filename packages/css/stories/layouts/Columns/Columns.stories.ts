import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";
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
      description: "Number of columns in the grid system (1-12)",
    },
    gap: {
      control: { type: "boolean" },
      description: "Enable gap between columns",
    },
    alignRows: {
      control: { type: "boolean" },
      description: "Enable alignment of nested content using subgrid rows",
    },
    itemCount: {
      control: { type: "range", min: 1, max: 24, step: 1 },
      description: "Number of items to display",
    },
    itemColSize: {
      control: { type: "range", min: 1, max: 12, step: 1 },
      description: "Number of columns each item spans (1-12)",
    },
    autoFit: {
      control: { type: "boolean" },
      description: "Enable auto-fit behavior for responsive layouts",
    },
    autoFitMin: {
      control: { type: "text" },
      description: "Minimum size for auto-fit columns (e.g., '200px', '15rem')",
      if: { arg: "autoFit", truthy: true },
      defaultValue: "0",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Columns layout component provides a powerful 12-column grid system based on CSS Grid. It offers responsive behavior, flexible item sizing, and advanced features like subgrid support for perfect content alignment.

### Usage

Use the columns layout for:
- Responsive grid layouts with automatic column adjustment
- Card grids with consistent spacing
- Complex layouts requiring precise content alignment (using subgrid)
- Dashboard widgets and content organization
- Form layouts with structured field positioning

**Responsive Design:**
The columns automatically adjust based on screen size:
- XL screens (>1200px): 12 columns
- Large screens (992-1200px): 9 columns
- Medium screens (768-992px): 6 columns
- Small screens (576-768px): 3 columns
- XS screens (<576px): 1 column

### Modifiers

| Target | Name | Description |
| ------ | ---- | ----------- |
| .m-columns | .--no-gap | Removes spacing between columns |
| .m-columns | .--align-rows | Enables alignment of nested content using subgrid rows |
| .m-columns | .--auto-fit | Enables auto-fit behavior for responsive column sizing |

### Data Attributes

| Target | Attribute | Values | Description |
| ------ | --------- | ------ | ----------- |
| .m-columns | data-columns-length | 1-12 | Override default column count |
| .m-columns > * | data-col-size | 1-12 | Specify how many columns this item spans |
| .m-columns > * | data-subgrid-rows | 1-6 | (With --subgrid) Number of subgrid rows to span |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-columns | --columns-gap | var(--spacing-2) | Gap between columns |
| .m-columns | --columns-length-default | 12 | Default number of columns |
| .m-columns | --columns-length | var(--columns-length-default) | Active number of columns |
| .m-columns | --columns-length-xl | round(down, calc(12 * 0.750)) | Columns for XL breakpoint (9) |
| .m-columns | --columns-length-lg | round(down, calc(12 * 0.500)) | Columns for large breakpoint (6) |
| .m-columns | --columns-length-md | round(down, calc(12 * 0.250)) | Columns for medium breakpoint (3) |
| .m-columns | --columns-length-sm | round(down, calc(12 * 0.125)) | Columns for small breakpoint (1) |
| .m-columns | --columns-default-col-size | 1 | Default column span for items |
| .m-columns > * | --columns-col-size | var(--columns-default-col-size) | Active column span |
| .m-columns > * | --columns-subgrid-row | 1 | Number of subgrid rows to span |

### Caution

* When using the \`data-col-size\` attribute, ensure that the sum of column spans in a single row does not exceed the total number of columns (default is 12). Exceeding this may lead to unexpected layout behavior.
* The \`.--subgrid\` modifier changes the display of m-grid's child elements to subgrid. Therefore, if the child element's display is flex or similar, it may result in an unintended layout.
* CSS Subgrid is not supported in some older browsers, including Internet Explorer and early versions of Edge. Ensure to test across target browsers when using the \`.--subgrid\` modifier.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ColumnsStoryProperties>;

export const Default: Story = {
  render: (args) => {
    const children = Array.from({ length: args.itemCount }, (_, index) => ({
      content: `
        <div style="background: #f8fafc; padding: 1rem; border-radius: 6px; border: 1px solid #e2e8f0; text-align: center;">
          <strong>Item ${String(index + 1)}</strong><br>
          <small style="color: #64748b;">Column span: ${String(args.itemColSize)}</small>
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
            <p class="m-p" style="color: var(--color-text-gray)">
              This card demonstrates how images can be integrated with content. The image is responsive and maintains proper aspect ratio.
            </p>
          </div>
          <div class="m-card__actions">
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
            <p class="m-p" style="color: var(--color-text-gray)">
              This card has significantly more content than the others. It is designed to test the subgrid alignment feature, ensuring that despite varying content lengths, the action buttons remain perfectly aligned at the bottom of each card.
            </p>
          </div>
          <div class="m-card__actions">
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
            <p class="m-p" style="color: var(--color-text-gray)">
              This card demonstrates how images can be integrated with content.
            </p>
          </div>
          <div class="m-card__actions">
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
        story: "Demonstrates CSS Subgrid alignment where cards with different content lengths have their action buttons perfectly aligned at the bottom. Toggle subgrid to see the difference.",
      },
    },
  },
};
