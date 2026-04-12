import{n as e}from"./chunk-BneVvdWh.js";var t,n,r=e((()=>{t=(e={})=>{let{items:t=[`Item 1`,`Item 2`,`Item 3`],none:n=!1,inline:r=!1}=e,i=document.createElement(`ol`);i.classList.add(`m-ol`),n&&i.classList.add(`--none`),r&&i.classList.add(`--inline`);for(let e of t){let t=document.createElement(`li`);t.classList.add(`m-li`),t.textContent=e,i.append(t)}return i},n=(e={})=>{let{items:t=[`Item 1`,`Item 2`,`Item 3`],none:n=!1,inline:r=!1}=e,i=document.createElement(`ul`);i.classList.add(`m-ul`),n&&i.classList.add(`--none`),r&&i.classList.add(`--inline`);for(let e of t){let t=document.createElement(`li`);t.classList.add(`m-li`),t.textContent=e,i.append(t)}return i}})),i,a,o,s,c,l,u,d,f;e((()=>{r(),{expect:i,within:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/List`,tags:[`autodocs`],argTypes:{items:{control:`object`,description:`The list items to display.`},none:{control:`boolean`,description:`Remove list style and padding.`},inline:{control:`boolean`,description:`Display list items inline.`}},parameters:{docs:{description:{component:`
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
        `}}}},s=[`First item`,`Second item`,`Third item`],c={parameters:{docs:{description:{story:`Ordered list with numbered items.`}}},render:e=>t({...e,items:e.items??s}),args:{none:!1,inline:!1},play:async({canvasElement:e})=>{let t=a(e),n=e.querySelector(`ol`);await i(n).not.toBeNull(),await i(n).toHaveClass(`m-ol`);let r=t.getAllByRole(`listitem`);await i(r).toHaveLength(3);for(let e of r)await i(e).toHaveClass(`m-li`)}},l={parameters:{docs:{description:{story:`Unordered list with bulleted items.`}}},render:e=>n({...e,items:e.items??s}),args:{none:!1,inline:!1},play:async({canvasElement:e})=>{let t=a(e),n=e.querySelector(`ul`);await i(n).not.toBeNull(),await i(n).toHaveClass(`m-ul`);let r=t.getAllByRole(`listitem`);await i(r).toHaveLength(3);for(let e of r)await i(e).toHaveClass(`m-li`)}},u={parameters:{docs:{description:{story:`Lists with the --none modifier to remove list style and indentation.`}}},render:e=>{let r=document.createElement(`div`);return r.style.display=`flex`,r.style.flexDirection=`column`,r.style.gap=`var(--spacing-4)`,r.append(t({...e,items:s,none:!0})),r.append(n({...e,items:s,none:!0})),r},args:{},play:async({canvasElement:e})=>{let t=e.querySelector(`ol`),n=e.querySelector(`ul`);await i(t).toHaveClass(`--none`),await i(n).toHaveClass(`--none`);let r=t?.querySelector(`li`),a=n?.querySelector(`li`);await i(r).not.toBeNull(),await i(a).not.toBeNull(),await i(globalThis.getComputedStyle(r,`::before`).content).toBe(`none`),await i(globalThis.getComputedStyle(a,`::before`).content).toBe(`none`)}},d={parameters:{docs:{description:{story:`Lists with the --inline modifier to display items in a row.`}}},render:e=>{let r=document.createElement(`div`);return r.style.display=`flex`,r.style.flexDirection=`column`,r.style.gap=`var(--spacing-4)`,r.append(t({...e,items:s,inline:!0})),r.append(n({...e,items:s,inline:!0})),r},args:{},play:async({canvasElement:e})=>{let t=e.querySelector(`ol`),n=e.querySelector(`ul`);await i(t).toHaveClass(`--inline`),await i(n).toHaveClass(`--inline`),await i(t).not.toBeNull(),await i(n).not.toBeNull(),await i(globalThis.getComputedStyle(t).flexDirection).toBe(`row`),await i(globalThis.getComputedStyle(n).flexDirection).toBe(`row`)}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ordered list with numbered items."
      }
    }
  },
  render: args => createOl({
    ...args,
    items: args.items ?? defaultItems
  }),
  args: {
    none: false,
    inline: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const list = canvasElement.querySelector("ol");
    await expect(list).not.toBeNull();
    await expect(list).toHaveClass("m-ol");
    const items = canvas.getAllByRole("listitem");
    await expect(items).toHaveLength(3);
    for (const item of items) {
      await expect(item).toHaveClass("m-li");
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Unordered list with bulleted items."
      }
    }
  },
  render: args => createUl({
    ...args,
    items: args.items ?? defaultItems
  }),
  args: {
    none: false,
    inline: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const list = canvasElement.querySelector("ul");
    await expect(list).not.toBeNull();
    await expect(list).toHaveClass("m-ul");
    const items = canvas.getAllByRole("listitem");
    await expect(items).toHaveLength(3);
    for (const item of items) {
      await expect(item).toHaveClass("m-li");
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Lists with the --none modifier to remove list style and indentation."
      }
    }
  },
  render: args => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "var(--spacing-4)";
    container.append(createOl({
      ...args,
      items: defaultItems,
      none: true
    }));
    container.append(createUl({
      ...args,
      items: defaultItems,
      none: true
    }));
    return container;
  },
  args: {},
  play: async ({
    canvasElement
  }) => {
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
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Lists with the --inline modifier to display items in a row."
      }
    }
  },
  render: args => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "var(--spacing-4)";
    container.append(createOl({
      ...args,
      items: defaultItems,
      inline: true
    }));
    container.append(createUl({
      ...args,
      items: defaultItems,
      inline: true
    }));
    return container;
  },
  args: {},
  play: async ({
    canvasElement
  }) => {
    const ol = canvasElement.querySelector("ol");
    const ul = canvasElement.querySelector("ul");
    await expect(ol).toHaveClass("--inline");
    await expect(ul).toHaveClass("--inline");
    await expect(ol).not.toBeNull();
    await expect(ul).not.toBeNull();
    await expect(globalThis.getComputedStyle(ol as Element).flexDirection).toBe("row");
    await expect(globalThis.getComputedStyle(ul as Element).flexDirection).toBe("row");
  }
}`,...d.parameters?.docs?.source}}},f=[`OrderedList`,`UnorderedList`,`NoStyle`,`InlineList`]}))();export{d as InlineList,u as NoStyle,c as OrderedList,l as UnorderedList,f as __namedExportsOrder,o as default};