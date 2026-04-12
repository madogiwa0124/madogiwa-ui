import{n as e}from"./chunk-BneVvdWh.js";var t,n,r=e((()=>{t=(e={})=>{let{stripe:t=!1,bordered:n=!1,hoverable:r=!1,fullWidth:i=!1,transition:a=!1}=e,o=document.createElement(`table`);return o.classList.add(`m-table`),t&&o.classList.add(`--stripe`),n&&o.classList.add(`--bordered`),r&&o.classList.add(`--hoverable`),i&&o.classList.add(`--full-width`),a&&o.classList.add(`--transition`),o},n=(e={})=>{let n=t(e),r=document.createElement(`thead`),i=document.createElement(`tr`);for(let e of[`Name`,`Age`,`Email`]){let t=document.createElement(`th`);t.textContent=e,i.append(t)}r.append(i),n.append(r);let a=document.createElement(`tbody`);for(let e of[[`John Doe`,`28`,`john@example.com`],[`Jane Smith`,`34`,`jane@example.com`],[`Bob Johnson`,`45`,`bob@example.com`]]){let t=document.createElement(`tr`);for(let n of e){let e=document.createElement(`td`);e.textContent=n,t.append(e)}a.append(t)}return n.append(a),n}})),i,a,o,s,c,l,u,d;e((()=>{r(),{expect:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/Table`,tags:[`autodocs`],argTypes:{stripe:{control:`boolean`,description:`Apply alternating row background colors for better readability`},bordered:{control:`boolean`,description:`Apply border to table and all cells`},hoverable:{control:`boolean`,description:`Enable row hover effect with background color and opacity change`},fullWidth:{control:`boolean`,description:`Make table take up full width of its container`},transition:{control:`boolean`,description:`Enable smooth transitions for hover effects`}},parameters:{docs:{description:{component:`
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
        `}}}},o={parameters:{docs:{description:{story:`Basic table with default styling and border. Demonstrates the base table component without any modifiers.`}}},render:e=>n(e),args:{stripe:!1,bordered:!1,hoverable:!1,fullWidth:!1,transition:!1},play:async({canvasElement:e})=>{let t=e;await i(t).not.toBeNull();let n=t.querySelector(`table`);await i(n).not.toBeNull(),await i(n).toHaveClass(`m-table`);let r=n?.querySelectorAll(`th`);await i(r).toHaveLength(3);let a=n?.querySelectorAll(`tbody tr`);await i(a).toHaveLength(3)}},s={parameters:{docs:{description:{story:`Table with alternating row background colors for improved readability in long data sets.`}}},render:e=>n({...e,stripe:!0}),args:{stripe:!0,bordered:!1,hoverable:!1,fullWidth:!1,transition:!1},play:async({canvasElement:e})=>{let t=e;await i(t).not.toBeNull();let n=t.querySelector(`table`);await i(n).not.toBeNull(),await i(n).toHaveClass(`m-table`),await i(n).toHaveClass(`--stripe`)}},c={parameters:{docs:{description:{story:`Interactive table with hover effects on rows. Useful for clickable table rows.`}}},render:e=>n({...e,hoverable:!0}),args:{stripe:!1,bordered:!1,hoverable:!0,fullWidth:!1,transition:!0},play:async({canvasElement:e})=>{let t=e;await i(t).not.toBeNull();let n=t.querySelector(`table`);await i(n).not.toBeNull(),await i(n).toHaveClass(`m-table`),await i(n).toHaveClass(`--hoverable`)}},l={parameters:{docs:{description:{story:`Table with borders around all cells and the table itself for clear separation.`}}},render:e=>n({...e,bordered:!0}),args:{stripe:!1,bordered:!0,hoverable:!1,fullWidth:!1,transition:!1},play:async({canvasElement:e})=>{let t=e;await i(t).not.toBeNull();let n=t.querySelector(`table`);await i(n).not.toBeNull(),await i(n).toHaveClass(`m-table`),await i(n).toHaveClass(`--bordered`)}},u={parameters:{docs:{description:{story:`Table with full width (100%) of its container. By default, tables are sized based on their content. Use the --full-width modifier to make the table span the entire width of its container.`}}},render:e=>{let t=document.createElement(`div`);t.style.border=`2px dashed var(--color-border)`,t.style.padding=`var(--spacing-2)`;let r=n({...e,fullWidth:!0});return t.append(r),t},args:{stripe:!1,bordered:!0,hoverable:!1,fullWidth:!0,transition:!1},play:async({canvasElement:e})=>{let t=e;await i(t).not.toBeNull();let n=t.querySelector(`table`);await i(n).not.toBeNull(),await i(n).toHaveClass(`m-table`),await i(n).toHaveClass(`--full-width`),await i(n).toHaveClass(`--bordered`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Stripe`,`Hoverable`,`Bordered`,`FullWidth`]}))();export{l as Bordered,o as Default,u as FullWidth,c as Hoverable,s as Stripe,d as __namedExportsOrder,a as default};