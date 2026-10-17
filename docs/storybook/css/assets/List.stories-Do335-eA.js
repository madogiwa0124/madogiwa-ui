import{n as e}from"./rolldown-runtime-sJBDdmOt.js";var t,n,r,i,a;function o(){return(o=e((()=>{t=(e={})=>{let{items:t=[`Item 1`,`Item 2`,`Item 3`],none:n=!1,inline:r=!1}=e,i=document.createElement(`ol`);i.classList.add(`m-ol`),n&&i.classList.add(`--none`),r&&i.classList.add(`--inline`);for(let e of t){let t=document.createElement(`li`);t.classList.add(`m-li`),t.textContent=e,i.append(t)}return i},n=(e={})=>{let{items:t=[`Item 1`,`Item 2`,`Item 3`],none:n=!1,inline:r=!1}=e,i=document.createElement(`ul`);i.classList.add(`m-ul`),n&&i.classList.add(`--none`),r&&i.classList.add(`--inline`);for(let e of t){let t=document.createElement(`li`);t.classList.add(`m-li`),t.textContent=e,i.append(t)}return i},r=(e,t)=>{let n=document.createElement(e);n.classList.add(e===`ol`?`m-ol`:`m-ul`);for(let e of t){let t=document.createElement(`li`);t.classList.add(`m-li`),t.append(...e),n.append(t)}return n},i=({parent:e,child:t})=>{let n=r(t,[[`Child item 1`],[`Child item 2`]]);return r(e,[[`Parent item 1`,n],[`Parent item 2`],[`Parent item 3`]])},a=e=>{let t=document.createElement(`strong`);t.textContent=`Strict Locals`;let n=document.createElement(`code`);return n.textContent=`locals`,r(e,[[t,` is enabled by default, so every partial must declare its `,n,` explicitly. This sentence is long enough to wrap onto multiple lines.`],[`Plain text item`]])}})))()}var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{o(),{expect:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/List`,tags:[`autodocs`],argTypes:{items:{control:`object`,description:`The list items to display.`},none:{control:`boolean`,description:`Remove list style and padding.`},inline:{control:`boolean`,description:`Display list items inline.`}},parameters:{docs:{description:{component:`
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
        `}}}},u=[`First item`,`Second item`,`Third item`],d={parameters:{docs:{description:{story:`Ordered list with numbered items.`}}},render:e=>t({...e,items:e.items??u}),args:{none:!1,inline:!1},play:async({canvasElement:e})=>{let t=c(e),n=e.querySelector(`ol`);await s(n).not.toBeNull(),await s(n).toHaveClass(`m-ol`);let r=t.getAllByRole(`listitem`);await s(r).toHaveLength(3);for(let e of r)await s(e).toHaveClass(`m-li`)}},f={parameters:{docs:{description:{story:`Unordered list with bulleted items.`}}},render:e=>n({...e,items:e.items??u}),args:{none:!1,inline:!1},play:async({canvasElement:e})=>{let t=c(e),n=e.querySelector(`ul`);await s(n).not.toBeNull(),await s(n).toHaveClass(`m-ul`);let r=t.getAllByRole(`listitem`);await s(r).toHaveLength(3);for(let e of r)await s(e).toHaveClass(`m-li`),await s(getComputedStyle(e,`::before`).lineHeight).toBe(getComputedStyle(e).lineHeight)}},p={parameters:{docs:{description:{story:`Lists with the --none modifier to remove list style and indentation.`}}},render:e=>{let r=document.createElement(`div`);return r.style.display=`flex`,r.style.flexDirection=`column`,r.style.gap=`var(--spacing-4)`,r.append(t({...e,items:u,none:!0})),r.append(n({...e,items:u,none:!0})),r},args:{},play:async({canvasElement:e})=>{let t=e.querySelector(`ol`),n=e.querySelector(`ul`);await s(t).toHaveClass(`--none`),await s(n).toHaveClass(`--none`);let r=t?.querySelector(`li`),i=n?.querySelector(`li`);await s(r).not.toBeNull(),await s(i).not.toBeNull(),await s(getComputedStyle(r,`::before`).content).toBe(`none`),await s(getComputedStyle(i,`::before`).content).toBe(`none`)}},m={parameters:{docs:{description:{story:`Lists with the --inline modifier to display items in a row.`}}},render:e=>{let r=document.createElement(`div`);return r.style.display=`flex`,r.style.flexDirection=`column`,r.style.gap=`var(--spacing-4)`,r.append(t({...e,items:u,inline:!0})),r.append(n({...e,items:u,inline:!0})),r},args:{},play:async({canvasElement:e})=>{let t=e.querySelector(`ol`),n=e.querySelector(`ul`);await s(t).toHaveClass(`--inline`),await s(n).toHaveClass(`--inline`),await s(t).not.toBeNull(),await s(n).not.toBeNull(),await s(getComputedStyle(t).flexDirection).toBe(`row`),await s(getComputedStyle(n).flexDirection).toBe(`row`)}},h=()=>{let e=document.createElement(`div`);return e.style.display=`flex`,e.style.flexDirection=`column`,e.style.gap=`var(--spacing-4)`,e},g=[{parent:`ol`,child:`ul`},{parent:`ul`,child:`ol`},{parent:`ol`,child:`ol`},{parent:`ul`,child:`ul`}],_={parameters:{docs:{description:{story:`Nested lists in every combination (ul in ol, ol in ul, ol in ol, ul in ul). A nested list keeps its own marker and counter.`}}},render:()=>{let e=h();for(let t of g){let n=i(t);n.dataset.testid=`${t.child}-in-${t.parent}`,e.append(n)}return e},args:{},play:async({canvasElement:e})=>{let t=t=>{let n=e.querySelector(`[data-testid="${CSS.escape(t)}"]`);if(!n)throw Error(`${t} not found`);return n},n=e=>[...e.children].filter(e=>e.matches(`.m-li`)),r=e=>[...e.querySelectorAll(`:scope > .m-li > :is(.m-ol, .m-ul) > .m-li`)],i=e=>getComputedStyle(e,`::before`).content.includes(`counter(list-counter)`),a=e=>getComputedStyle(e).counterIncrement;for(let{parent:e,child:a}of g){let o=t(`${a}-in-${e}`);for(let t of n(o))await s(i(t)).toBe(e===`ol`);for(let e of r(o))await s(i(e)).toBe(a===`ol`)}let o=r(t(`ol-in-ul`))[0];await s(getComputedStyle(o,`::before`).fontSize).toBe(getComputedStyle(o).fontSize);let c=t(`ul-in-ol`);for(let e of r(c))await s(a(e)).toBe(`none`);for(let e of n(c))await s(a(e)).toBe(`list-counter 1`);let l=n(c)[0],u=l.querySelector(`.m-ul`),d=l.firstChild,f=document.createRange();f.selectNodeContents(d),await s(u.getBoundingClientRect().top).toBeGreaterThanOrEqual(f.getBoundingClientRect().bottom)}},v={parameters:{docs:{description:{story:`List items containing inline elements mixed with text. The content flows inline instead of being split into columns.`}}},render:()=>{let e=h();return e.style.maxInlineSize=`32rem`,e.append(a(`ul`)),e.append(a(`ol`)),e},args:{},play:async({canvasElement:e})=>{for(let t of e.querySelectorAll(`.m-li`))await s(getComputedStyle(t).display).not.toBe(`flex`);for(let t of e.querySelectorAll(`strong`)){let e=t.closest(`.m-li`),n=t.nextSibling,r=document.createRange();r.setStart(n,0),r.setEnd(n,1),await s(Math.abs(r.getBoundingClientRect().top-t.getBoundingClientRect().top)).toBeLessThan(2),await s(r.getBoundingClientRect().left).toBeGreaterThanOrEqual(t.getBoundingClientRect().right-1),await s(t.getClientRects()).toHaveLength(1),await s(e).toBeVisible()}}},y=[`OrderedList`,`UnorderedList`,`NoStyle`,`InlineList`,`NestedList`,`MixedContent`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      // The smaller bullet shares the item's line box so that it is vertically centered on the first line
      await expect(getComputedStyle(item, "::before").lineHeight).toBe(getComputedStyle(item).lineHeight);
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    await expect(getComputedStyle(olLi as Element, "::before").content).toBe("none");
    await expect(getComputedStyle(ulLi as Element, "::before").content).toBe("none");
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    await expect(getComputedStyle(ol as Element).flexDirection).toBe("row");
    await expect(getComputedStyle(ul as Element).flexDirection).toBe("row");
  }
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Nested lists in every combination (ul in ol, ol in ul, ol in ol, ul in ul). A nested list keeps its own marker and counter."
      }
    }
  },
  render: () => {
    const container = createContainer();
    for (const pattern of nestedPatterns) {
      const list = createNestedList(pattern);
      list.dataset["testid"] = \`\${pattern.child}-in-\${pattern.parent}\`;
      container.append(list);
    }
    return container;
  },
  args: {},
  play: async ({
    canvasElement
  }) => {
    const getList = (id: string): HTMLElement => {
      const list = canvasElement.querySelector<HTMLElement>(\`[data-testid="\${CSS.escape(id)}"]\`);
      if (!list) throw new Error(\`\${id} not found\`);
      return list;
    };
    const directItems = (list: Element): Element[] => [...list.children].filter(element => element.matches(".m-li"));
    const nestedItems = (list: Element): Element[] => [...list.querySelectorAll(":scope > .m-li > :is(.m-ol, .m-ul) > .m-li")];
    const isCounterMarker = (item: Element): boolean => getComputedStyle(item, "::before").content.includes("counter(list-counter)");
    const counterIncrement = (item: Element): string => getComputedStyle(item).counterIncrement;
    for (const {
      parent,
      child
    } of nestedPatterns) {
      const list = getList(\`\${child}-in-\${parent}\`);
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
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "List items containing inline elements mixed with text. The content flows inline instead of being split into columns."
      }
    }
  },
  render: () => {
    const container = createContainer();
    container.style.maxInlineSize = "32rem";
    container.append(createMixedContentList("ul"));
    container.append(createMixedContentList("ol"));
    return container;
  },
  args: {},
  play: async ({
    canvasElement
  }) => {
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
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{m as InlineList,v as MixedContent,_ as NestedList,p as NoStyle,d as OrderedList,f as UnorderedList,y as __namedExportsOrder,l as default};