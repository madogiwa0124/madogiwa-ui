import type { Meta, StoryObj } from "@storybook/html";
import { type TableProperties, createSimpleTable } from "./Table";
import { expect } from "storybook/test";

const meta: Meta<TableProperties> = {
  title: "Components/Table",
  tags: ["autodocs"],
  argTypes: {
    stripe: {
      control: "boolean",
      description: "Apply alternating row background colors for better readability",
    },
    bordered: {
      control: "boolean",
      description: "Apply border to table and all cells",
    },
    hoverable: {
      control: "boolean",
      description: "Enable row hover effect with background color and opacity change",
    },
    fullWidth: {
      control: "boolean",
      description: "Make table take up full width of its container",
    },
    transition: {
      control: "boolean",
      description: "Enable smooth transitions for hover effects",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Table component provides a structured way to display tabular data with various styling options. It implements BEM + CSS Nesting pattern with the m- prefix for Madogiwa UI.

### Usage

Use tables to display structured data in rows and columns. Apply the \`--stripe\` modifier for better readability in long tables, \`--bordered\` to add borders around all cells, and \`--hoverable\` to make rows interactive.

### Example code

\`\`\`html
<table class="m-table --stripe --hoverable --transition">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>28</td>
      <td>john@example.com</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>34</td>
      <td>jane@example.com</td>
    </tr>
  </tbody>
</table>
\`\`\`

### Elements

This component has no child elements - styling is applied directly to standard HTML table elements (th, td, tr, thead, tbody).

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-table | .--stripe | Apply alternating background color to even rows in tbody |
| .m-table | .--bordered | Apply border to table and all cells (th, td) |
| .m-table | .--hoverable | Enable hover effect on tbody rows with background color and opacity change |
| .m-table | .--full-width | Make table take up full width (100%) of its container |
| .m-table | .--transition | Enable smooth transition animations for hover effects |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-table | --table-bg-color | var(--color-white) | Background color for table |
| .m-table | --table-hover-bg-color | var(--color-bg-light) | Background color for hovered rows |
| .m-table | --table-border-color | var(--color-border) | Border color for table and cells |
| .m-table | --table-border-width | 1px | Border width for table and cells |
| .m-table | --table-padding | var(--spacing-3) var(--spacing-4) | Padding for cells (vertical horizontal) |
| .m-table | --table-stripe-bg-color | var(--color-bg-grey) | Background color for even rows in stripe mode |
| .m-table | --table-hover-opacity | 0.8 | Opacity value for hovered rows |
| .m-table | --table-th-font-weight | var(--font-weight-semibold) | Font weight for table headers |
| .m-table | --table-transition-duration | 0.2s | Transition animation duration |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use --transition modifier selectively to respect user motion preferences
- Consider using --stripe for tables with many rows to improve readability
- The --hoverable modifier is best suited for interactive tables where rows trigger actions
- Use --bordered when you need clear cell separation with full borders
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TableProperties>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic table with default styling and border. Demonstrates the base table component without any modifiers.",
      },
    },
  },
  render: (args: TableProperties) => {
    return createSimpleTable(args);
  },
  args: {
    stripe: false,
    bordered: false,
    hoverable: false,
    fullWidth: false,
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const table = canvas.querySelector("table");
    await expect(table).not.toBeNull();
    await expect(table).toHaveClass("m-table");

    const headers = table?.querySelectorAll("th");
    await expect(headers).toHaveLength(3);

    const rows = table?.querySelectorAll("tbody tr");
    await expect(rows).toHaveLength(3);
  },
};

export const Stripe: Story = {
  parameters: {
    docs: {
      description: {
        story: "Table with alternating row background colors for improved readability in long data sets.",
      },
    },
  },
  render: (args: TableProperties) => {
    return createSimpleTable({ ...args, stripe: true });
  },
  args: {
    stripe: true,
    bordered: false,
    hoverable: false,
    fullWidth: false,
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const table = canvas.querySelector("table");
    await expect(table).not.toBeNull();
    await expect(table).toHaveClass("m-table");
    await expect(table).toHaveClass("--stripe");
  },
};

export const Hoverable: Story = {
  parameters: {
    docs: {
      description: {
        story: "Interactive table with hover effects on rows. Useful for clickable table rows.",
      },
    },
  },
  render: (args: TableProperties) => {
    return createSimpleTable({ ...args, hoverable: true });
  },
  args: {
    stripe: false,
    bordered: false,
    hoverable: true,
    fullWidth: false,
    transition: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const table = canvas.querySelector("table");
    await expect(table).not.toBeNull();
    await expect(table).toHaveClass("m-table");
    await expect(table).toHaveClass("--hoverable");
  },
};

export const Bordered: Story = {
  parameters: {
    docs: {
      description: {
        story: "Table with borders around all cells and the table itself for clear separation.",
      },
    },
  },
  render: (args: TableProperties) => {
    return createSimpleTable({ ...args, bordered: true });
  },
  args: {
    stripe: false,
    bordered: true,
    hoverable: false,
    fullWidth: false,
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const table = canvas.querySelector("table");
    await expect(table).not.toBeNull();
    await expect(table).toHaveClass("m-table");
    await expect(table).toHaveClass("--bordered");
  },
};

export const FullWidth: Story = {
  parameters: {
    docs: {
      description: {
        story: "Table with full width (100%) of its container. By default, tables are sized based on their content. Use the --full-width modifier to make the table span the entire width of its container.",
      },
    },
  },
  render: (args: TableProperties) => {
    const container = document.createElement("div");
    container.style.border = "2px dashed var(--color-border)";
    container.style.padding = "var(--spacing-2)";

    const table = createSimpleTable({ ...args, fullWidth: true });
    container.append(table);

    return container;
  },
  args: {
    stripe: false,
    bordered: true,
    hoverable: false,
    fullWidth: true,
    transition: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();

    const table = canvas.querySelector("table");
    await expect(table).not.toBeNull();
    await expect(table).toHaveClass("m-table");
    await expect(table).toHaveClass("--full-width");
    await expect(table).toHaveClass("--bordered");
  },
};
