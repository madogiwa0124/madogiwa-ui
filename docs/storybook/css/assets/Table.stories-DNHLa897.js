const w=(a={})=>{const{stripe:t=!1,bordered:e=!1,hoverable:o=!1,fullWidth:l=!1,transition:c=!1}=a,n=document.createElement("table");return n.classList.add("m-table"),t&&n.classList.add("--stripe"),e&&n.classList.add("--bordered"),o&&n.classList.add("--hoverable"),l&&n.classList.add("--full-width"),c&&n.classList.add("--transition"),n},i=(a={})=>{const t=w(a),e=document.createElement("thead"),o=document.createElement("tr"),l=["Name","Age","Email"];for(const h of l){const s=document.createElement("th");s.textContent=h,o.append(s)}e.append(o),t.append(e);const c=document.createElement("tbody"),n=[["John Doe","28","john@example.com"],["Jane Smith","34","jane@example.com"],["Bob Johnson","45","bob@example.com"]];for(const h of n){const s=document.createElement("tr");for(const v of h){const f=document.createElement("td");f.textContent=v,s.append(f)}c.append(s)}return t.append(c),t},{expect:r}=__STORYBOOK_MODULE_TEST__,y={title:"Components/Table",tags:["autodocs"],argTypes:{stripe:{control:"boolean",description:"Apply alternating row background colors for better readability"},bordered:{control:"boolean",description:"Apply border to table and all cells"},hoverable:{control:"boolean",description:"Enable row hover effect with background color and opacity change"},fullWidth:{control:"boolean",description:"Make table take up full width of its container"},transition:{control:"boolean",description:"Enable smooth transitions for hover effects"}},parameters:{docs:{description:{component:`
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
| .m-table | --table-hover-bg-color | var(--color-bg-subtle) | Background color for hovered rows |
| .m-table | --table-border-color | var(--color-border) | Border color for table and cells |
| .m-table | --table-border-width | 1px | Border width for table and cells |
| .m-table | --table-padding | var(--spacing-3) var(--spacing-4) | Padding for cells (vertical horizontal) |
| .m-table | --table-stripe-bg-color | var(--color-bg-muted) | Background color for even rows in stripe mode |
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
        `}}}},d={parameters:{docs:{description:{story:"Basic table with default styling and border. Demonstrates the base table component without any modifiers."}}},render:a=>i(a),args:{stripe:!1,bordered:!1,hoverable:!1,fullWidth:!1,transition:!1},play:async({canvasElement:a})=>{const t=a;await r(t).not.toBeNull();const e=t.querySelector("table");await r(e).not.toBeNull(),await r(e).toHaveClass("m-table");const o=e?.querySelectorAll("th");await r(o).toHaveLength(3);const l=e?.querySelectorAll("tbody tr");await r(l).toHaveLength(3)}},b={parameters:{docs:{description:{story:"Table with alternating row background colors for improved readability in long data sets."}}},render:a=>i({...a,stripe:!0}),args:{stripe:!0,bordered:!1,hoverable:!1,fullWidth:!1,transition:!1},play:async({canvasElement:a})=>{const t=a;await r(t).not.toBeNull();const e=t.querySelector("table");await r(e).not.toBeNull(),await r(e).toHaveClass("m-table"),await r(e).toHaveClass("--stripe")}},p={parameters:{docs:{description:{story:"Interactive table with hover effects on rows. Useful for clickable table rows."}}},render:a=>i({...a,hoverable:!0}),args:{stripe:!1,bordered:!1,hoverable:!0,fullWidth:!1,transition:!0},play:async({canvasElement:a})=>{const t=a;await r(t).not.toBeNull();const e=t.querySelector("table");await r(e).not.toBeNull(),await r(e).toHaveClass("m-table"),await r(e).toHaveClass("--hoverable")}},u={parameters:{docs:{description:{story:"Table with borders around all cells and the table itself for clear separation."}}},render:a=>i({...a,bordered:!0}),args:{stripe:!1,bordered:!0,hoverable:!1,fullWidth:!1,transition:!1},play:async({canvasElement:a})=>{const t=a;await r(t).not.toBeNull();const e=t.querySelector("table");await r(e).not.toBeNull(),await r(e).toHaveClass("m-table"),await r(e).toHaveClass("--bordered")}},m={parameters:{docs:{description:{story:"Table with full width (100%) of its container. By default, tables are sized based on their content. Use the --full-width modifier to make the table span the entire width of its container."}}},render:a=>{const t=document.createElement("div");t.style.border="2px dashed var(--color-border)",t.style.padding="var(--spacing-2)";const e=i({...a,fullWidth:!0});return t.append(e),t},args:{stripe:!1,bordered:!0,hoverable:!1,fullWidth:!0,transition:!1},play:async({canvasElement:a})=>{const t=a;await r(t).not.toBeNull();const e=t.querySelector("table");await r(e).not.toBeNull(),await r(e).toHaveClass("m-table"),await r(e).toHaveClass("--full-width"),await r(e).toHaveClass("--bordered")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Basic table with default styling and border. Demonstrates the base table component without any modifiers."
      }
    }
  },
  render: (args: TableProperties) => {
    return createSimpleTable(args);
  },
  args: {
    stripe: false,
    bordered: false,
    hoverable: false,
    fullWidth: false,
    transition: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();
    const table = canvas.querySelector("table");
    await expect(table).not.toBeNull();
    await expect(table).toHaveClass("m-table");
    const headers = table?.querySelectorAll("th");
    await expect(headers).toHaveLength(3);
    const rows = table?.querySelectorAll("tbody tr");
    await expect(rows).toHaveLength(3);
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Table with alternating row background colors for improved readability in long data sets."
      }
    }
  },
  render: (args: TableProperties) => {
    return createSimpleTable({
      ...args,
      stripe: true
    });
  },
  args: {
    stripe: true,
    bordered: false,
    hoverable: false,
    fullWidth: false,
    transition: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();
    const table = canvas.querySelector("table");
    await expect(table).not.toBeNull();
    await expect(table).toHaveClass("m-table");
    await expect(table).toHaveClass("--stripe");
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Interactive table with hover effects on rows. Useful for clickable table rows."
      }
    }
  },
  render: (args: TableProperties) => {
    return createSimpleTable({
      ...args,
      hoverable: true
    });
  },
  args: {
    stripe: false,
    bordered: false,
    hoverable: true,
    fullWidth: false,
    transition: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();
    const table = canvas.querySelector("table");
    await expect(table).not.toBeNull();
    await expect(table).toHaveClass("m-table");
    await expect(table).toHaveClass("--hoverable");
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Table with borders around all cells and the table itself for clear separation."
      }
    }
  },
  render: (args: TableProperties) => {
    return createSimpleTable({
      ...args,
      bordered: true
    });
  },
  args: {
    stripe: false,
    bordered: true,
    hoverable: false,
    fullWidth: false,
    transition: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();
    const table = canvas.querySelector("table");
    await expect(table).not.toBeNull();
    await expect(table).toHaveClass("m-table");
    await expect(table).toHaveClass("--bordered");
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Table with full width (100%) of its container. By default, tables are sized based on their content. Use the --full-width modifier to make the table span the entire width of its container."
      }
    }
  },
  render: (args: TableProperties) => {
    const container = document.createElement("div");
    container.style.border = "2px dashed var(--color-border)";
    container.style.padding = "var(--spacing-2)";
    const table = createSimpleTable({
      ...args,
      fullWidth: true
    });
    container.append(table);
    return container;
  },
  args: {
    stripe: false,
    bordered: true,
    hoverable: false,
    fullWidth: true,
    transition: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();
    const table = canvas.querySelector("table");
    await expect(table).not.toBeNull();
    await expect(table).toHaveClass("m-table");
    await expect(table).toHaveClass("--full-width");
    await expect(table).toHaveClass("--bordered");
  }
}`,...m.parameters?.docs?.source}}};const g=["Default","Stripe","Hoverable","Bordered","FullWidth"];export{u as Bordered,d as Default,m as FullWidth,p as Hoverable,b as Stripe,g as __namedExportsOrder,y as default};
