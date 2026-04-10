import{n as e}from"./chunk-BneVvdWh.js";var t,n,r,i,a,o,s,c,l,u,d,f,p;e((()=>{({expect:t,userEvent:n,within:r}=__STORYBOOK_MODULE_TEST__),i={title:`Components/Badge`,tags:[`autodocs`],argTypes:{label:{control:{type:`text`},description:`The text content for the component`},variant:{control:{type:`select`},options:[`default`,`primary`,`secondary`,`tertiary`,`danger`,`warning`],description:`The style variant for the component`},size:{control:{type:`select`},options:[`default`,`small`],description:`The size variant for the component`},outline:{control:{type:`boolean`},description:`The outline style modifier for the component`},rounded:{control:{type:`boolean`},description:`The rounded corners modifier for the component`},transition:{control:{type:`boolean`},description:`The transition animation modifier for the component`},disabled:{control:{type:`boolean`},description:`The disabled state for the component`},element:{control:{type:`select`},options:[`div`,`button`,`a`],description:`The HTML element type for the component`}},parameters:{docs:{description:{component:`
### Overview

The Badge component displays small pieces of information, status indicators, or labels with various visual styles and interactive capabilities.

### Usage

Use badges to display status information, show counts or quantities, label or categorize content, create interactive tags or filters, or highlight important information. Perfect for notification counters, status indicators, category tags, interactive filters, and feature highlights.

### Example code

\`\`\`html
<!-- Basic usage -->
<div class="m-badge">Default Badge</div>
<div class="m-badge --primary">Primary Badge</div>
<div class="m-badge --secondary --outline">Secondary Outline</div>

<!-- Small rounded badge for counts -->
<div class="m-badge --danger --small --rounded">3</div>

<!-- Interactive badges -->
<button class="m-badge --primary --transition">Interactive Badge</button>
<a href="#" class="m-badge --tertiary --transition">Link Badge</a>

<!-- Disabled state -->
<button class="m-badge --primary" disabled>Disabled Badge</button>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-badge | .--primary | Primary brand color styling |
| .m-badge | .--secondary | Secondary color styling |
| .m-badge | .--tertiary | Tertiary subtle color styling |
| .m-badge | .--danger | Danger/error color styling |
| .m-badge | .--warning | Warning/caution color styling |
| .m-badge | .--outline | Transparent background with colored border |
| .m-badge | .--small | Smaller size variant |
| .m-badge | .--rounded | Fully rounded (pill-shaped) |
| .m-badge | .--transition | Enable hover/focus transitions |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-badge | --badge-padding |var(--spacing-1) | Internal padding |
| .m-badge | --badge-item-gap | var(--spacing-2) | Gap between badge elements |
| .m-badge | --badge-text-color | var(--color-text-default) | Text color |
| .m-badge | --badge-border-color | var(--color-default) | Border color |
| .m-badge | --badge-border | 1px solid var(--badge-border-color) | Border style |
| .m-badge | --badge-border-radius | var(--radius-sm) | Border radius |
| .m-badge | --badge-bg-color | var(--color-default) | Background color |
| .m-badge | --badge-hover-filter | brightness(0.9) | Hover effect filter |
| .m-badge | --badge-disabled-opacity | 0.65 | Opacity when disabled |
| .m-badge | --badge-transition-duration | 0.2s | Transition duration |
| .m-badge | --badge-transition-timing | ease | Transition timing function |
| .m-badge | --badge-small-font-size | var(--text-xs) | Font size for small variant |
| .m-badge | --badge-small-padding | var(--spacing-1) | Padding for small variant |
| .m-badge | --badge-primary-color | var(--color-primary) | Primary variant background |
| .m-badge | --badge-primary-border-color | var(--color-primary) | Primary variant border color |
| .m-badge | --badge-primary-text-color | var(--color-text-inverse) | Primary variant text color |
| .m-badge | --badge-secondary-color | var(--color-secondary) | Secondary variant background |
| .m-badge | --badge-secondary-border-color | var(--color-secondary) | Secondary variant border color |
| .m-badge | --badge-secondary-text-color | var(--color-text-inverse) | Secondary variant text color |
| .m-badge | --badge-tertiary-color | var(--color-tertiary) | Tertiary variant background |
| .m-badge | --badge-tertiary-border-color | var(--color-tertiary) | Tertiary variant border color |
| .m-badge | --badge-tertiary-text-color | var(--color-text-default) | Tertiary variant text color |
| .m-badge | --badge-danger-color | var(--color-danger) | Danger variant background |
| .m-badge | --badge-danger-border-color | var(--color-danger) | Danger variant border color |
| .m-badge | --badge-danger-text-color | var(--color-text-default) | Danger variant text color |
| .m-badge | --badge-warning-color | var(--color-warning) | Warning variant background |
| .m-badge | --badge-warning-border-color | var(--color-warning) | Warning variant border color |
| .m-badge | --badge-warning-text-color | var(--color-text-default) | Warning variant text color |
| .m-badge | --badge-line-height | var(--line-height-one) | Line height |
| .m-badge | --badge-min-width | 1.8em | Minimum width |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Ensure sufficient color contrast for readability
- Use interactive badges (buttons/links) sparingly to avoid UI clutter
- Consider motion preferences when using the transition modifier
        `}}}},a={render:e=>{let t=document.createElement(`div`),n=document.createElement(`div`);n.classList.add(`m-badge`);let r=e.label,i=e.variant,a=e.size;return i!==`default`&&n.classList.add(`--${i}`),a!==`default`&&n.classList.add(`--${a}`),e.outline&&n.classList.add(`--outline`),e.rounded&&n.classList.add(`--rounded`),e.transition&&n.classList.add(`--transition`),n.textContent=r,t.append(n),t},args:{label:`Badge`,variant:`default`,size:`default`,outline:!1,rounded:!1,transition:!1,disabled:!1},play:async({canvasElement:e,args:n})=>{let i=r(e).getByText(`Badge`);await t(i).toBeInTheDocument(),await t(i).toHaveClass(`m-badge`),await t(i).toHaveTextContent(`Badge`);let a=n.variant;a!==`default`&&await t(i).toHaveClass(`--${a}`);let o=n.size;o!==`default`&&await t(i).toHaveClass(`--${o}`),n.outline&&await t(i).toHaveClass(`--outline`),n.rounded&&await t(i).toHaveClass(`--rounded`),n.transition&&await t(i).toHaveClass(`--transition`)}},o={render:e=>{let t=document.createElement(`div`);t.style.display=`flex`,t.style.flexWrap=`wrap`,t.style.gap=`0.5rem`;let n=[{name:`default`,class:``,label:`Default`},{name:`primary`,class:`--primary`,label:`Primary`},{name:`secondary`,class:`--secondary`,label:`Secondary`},{name:`tertiary`,class:`--tertiary`,label:`Tertiary`},{name:`danger`,class:`--danger`,label:`Danger`},{name:`warning`,class:`--warning`,label:`Warning`}],r=e.outline,i=e.rounded;for(let e of n){let n=document.createElement(`div`);n.classList.add(`m-badge`),e.class&&n.classList.add(e.class),r&&n.classList.add(`--outline`),i&&n.classList.add(`--rounded`),n.textContent=e.label,t.append(n)}return t},args:{outline:!1,rounded:!1},play:async({canvasElement:e,args:n})=>{let r=e.querySelectorAll(`.m-badge`);await t(r).toHaveLength(6);let i=[{name:`default`,expectedText:`Default`},{name:`primary`,expectedText:`Primary`},{name:`secondary`,expectedText:`Secondary`},{name:`tertiary`,expectedText:`Tertiary`},{name:`danger`,expectedText:`Danger`},{name:`warning`,expectedText:`Warning`}];for(let[e,a]of r.entries()){let r=i[e];r&&(await t(a).toHaveClass(`m-badge`),r.name!==`default`&&await t(a).toHaveClass(`--${r.name}`),await t(a).toHaveTextContent(r.expectedText),n.outline&&await t(a).toHaveClass(`--outline`),n.rounded&&await t(a).toHaveClass(`--rounded`))}let a=e.querySelector(`.m-badge.--primary`),o=e.querySelector(`.m-badge.--secondary`),s=globalThis.getComputedStyle(a),c=globalThis.getComputedStyle(o);n.outline||await t(s.backgroundColor).not.toBe(c.backgroundColor)},parameters:{docs:{description:{story:`All available badge variants with their respective colors and styling.`}}}},s={render:e=>{let t=document.createElement(`div`);t.style.display=`flex`,t.style.gap=`1rem`,t.style.alignItems=`center`;let n=e.label,r=e.variant,i=e.disabled,a=document.createElement(`button`);a.classList.add(`m-badge`),e.transition&&a.classList.add(`--transition`),e.size&&a.classList.add(`--${e.size}`),e.rounded&&a.classList.add(`--rounded`),e.outline&&a.classList.add(`--outline`),r!==`default`&&a.classList.add(`--${r}`),i&&(a.disabled=!0),a.textContent=`${n} Button`;let o=document.createElement(`a`);return o.classList.add(`m-badge`),e.transition&&o.classList.add(`--transition`),e.size&&o.classList.add(`--${e.size}`),e.rounded&&o.classList.add(`--rounded`),e.outline&&o.classList.add(`--outline`),r!==`default`&&o.classList.add(`--${r}`),o.href=`#`,o.textContent=`${n} Link`,o.setAttribute(`target`,`_blank`),t.append(a,o),t},args:{label:`Interactive`,variant:`primary`,disabled:!1,transition:!0,size:`default`,rounded:!1,outline:!1},play:async({canvasElement:e,args:r})=>{let i=e.querySelector(`button.m-badge`),a=e.querySelector(`a.m-badge`);await t(i).toBeInTheDocument(),await t(i).toHaveClass(`m-badge`),await t(i.tagName).toBe(`BUTTON`),await t(i).toHaveTextContent(/Interactive.*Button/),await t(a).toBeInTheDocument(),await t(a).toHaveClass(`m-badge`),await t(a.tagName).toBe(`A`),await t(a).toHaveTextContent(/Interactive.*Link/),await t(a).toHaveAttribute(`href`,`#`),r.transition&&(await t(i).toHaveClass(`--transition`),await t(a).toHaveClass(`--transition`)),r.disabled?(await t(i).toBeDisabled(),await t(globalThis.getComputedStyle(i).opacity).toBe(`0.65`)):await t(i).not.toBeDisabled(),await n.click(i),r.disabled||await t(i).toHaveFocus()}},c={render:e=>{let t=document.createElement(`div`);t.style.display=`flex`,t.style.gap=`0.5rem`,t.style.flexWrap=`wrap`;for(let n of[`primary`,`secondary`,`tertiary`,`danger`,`warning`]){let r=document.createElement(`div`);r.classList.add(`m-badge`,`--outline`,`--${n}`),e.rounded&&r.classList.add(`--rounded`),r.textContent=n.charAt(0).toUpperCase()+n.slice(1),t.append(r)}return t},args:{rounded:!1},play:async({canvasElement:e,args:n})=>{let r=e.querySelectorAll(`.m-badge`),i=[`primary`,`secondary`,`tertiary`,`danger`,`warning`];await t(r).toHaveLength(5);for(let[e,a]of r.entries()){let r=i[e];if(r){await t(a).toHaveClass(`m-badge`),await t(a).toHaveClass(`--outline`),await t(a).toHaveClass(`--${r}`);let e=r.charAt(0).toUpperCase()+r.slice(1);await t(a).toHaveTextContent(e),n.rounded&&await t(a).toHaveClass(`--rounded`);let i=globalThis.getComputedStyle(a);await t(i.backgroundColor).toBe(`rgba(0, 0, 0, 0)`);let o=i.borderWidth;await t(o).not.toBe(`0px`)}}let a=e.querySelector(`.m-badge.--primary`),o=e.querySelector(`.m-badge.--danger`),s=globalThis.getComputedStyle(a),c=globalThis.getComputedStyle(o);await t(s.borderColor).not.toBe(c.borderColor)},parameters:{docs:{description:{story:`Outline style badges with transparent backgrounds and colored borders.`}}}},l={render:e=>{let t=document.createElement(`div`);t.style.display=`flex`,t.style.gap=`1rem`,t.style.flexWrap=`wrap`,t.style.alignItems=`center`;let n=e.label,r=e.variant,i=document.createElement(`div`);i.classList.add(`m-badge`),r!==`default`&&i.classList.add(`--${r}`),i.innerHTML=`<span class="icon">✓</span> <span>${n}</span>`;let a=document.createElement(`div`);a.classList.add(`m-badge`),r!==`default`&&a.classList.add(`--${r}`),a.innerHTML=`<span>${n}</span> <span class="icon">✕</span>`;let o=document.createElement(`div`);o.classList.add(`m-badge`,`--rounded`),r!==`default`&&o.classList.add(`--${r}`),o.innerHTML=`<span class="icon">★</span>`;let s=document.createElement(`div`);return s.classList.add(`m-badge`,`--danger`,`--small`,`--rounded`),s.innerHTML=`<span class="icon">3</span>`,t.append(i,a,o,s),t},args:{label:`Badge`,variant:`primary`},play:async({canvasElement:e,args:n})=>{let r=e.querySelectorAll(`.m-badge`);await t(r).toHaveLength(4);let i=r[0];await t(i).toHaveClass(`m-badge`);let a=i.querySelector(`.icon`),o=i.querySelector(`span:not(.icon)`);await t(a).toBeInTheDocument(),await t(a).toHaveTextContent(`✓`),await t(o).toHaveTextContent(n.label);let s=i.children;await t(s[0]).toHaveClass(`icon`),await t(s[1]).not.toHaveClass(`icon`);let c=r[1];await t(c).toHaveClass(`m-badge`);let l=c.querySelector(`.icon`),u=c.querySelector(`span:not(.icon)`);await t(l).toBeInTheDocument(),await t(l).toHaveTextContent(`✕`),await t(u).toHaveTextContent(n.label);let d=c.children;await t(d[0]).not.toHaveClass(`icon`),await t(d[1]).toHaveClass(`icon`);let f=r[2];await t(f).toHaveClass(`m-badge`),await t(f).toHaveClass(`--rounded`);let p=f.querySelector(`.icon`);await t(p).toBeInTheDocument(),await t(p).toHaveTextContent(`★`),await t([...f.childNodes].filter(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim())).toHaveLength(0);let m=r[3];await t(m).toHaveClass(`m-badge`),await t(m).toHaveClass(`--danger`),await t(m).toHaveClass(`--small`),await t(m).toHaveClass(`--rounded`),await t(m).toHaveTextContent(`3`);let h=globalThis.getComputedStyle(m);await t(Number.parseFloat(h.fontSize)).toBeLessThan(16),await t(globalThis.getComputedStyle(i).gap).not.toBe(`0px`)},parameters:{docs:{description:{story:`Badges with icons in various configurations: icon+text, text+icon, icon-only, and notification count.`}}}},u={render:()=>{let e=document.createElement(`div`);e.style.display=`flex`,e.style.gap=`1rem`,e.style.alignItems=`center`;let t=document.createElement(`div`);t.classList.add(`m-badge`,`--primary`),t.textContent=`Default Size`;let n=document.createElement(`div`);return n.classList.add(`m-badge`,`--primary`,`--small`),n.textContent=`Small Size`,e.append(t,n),e},play:async({canvasElement:e})=>{let n=e.querySelector(`.m-badge:not(.--small)`),r=e.querySelector(`.m-badge.--small`);await t(n).toBeInTheDocument(),await t(r).toBeInTheDocument(),await t(n).toHaveClass(`m-badge`,`--primary`),await t(r).toHaveClass(`m-badge`,`--primary`,`--small`),await t(n).not.toHaveClass(`--small`),await t(r).toHaveClass(`--small`);let i=globalThis.getComputedStyle(n),a=globalThis.getComputedStyle(r),o=Number.parseFloat(i.fontSize);await t(Number.parseFloat(a.fontSize)).toBeLessThan(o),await t(i.backgroundColor).toBe(a.backgroundColor)},parameters:{docs:{description:{story:`Comparison of default and small badge sizes.`}}}},d={render:()=>{let e=document.createElement(`div`);e.style.display=`flex`,e.style.gap=`1rem`,e.style.alignItems=`center`;let t=document.createElement(`div`);t.classList.add(`m-badge`,`--secondary`),t.textContent=`Default`;let n=document.createElement(`div`);return n.classList.add(`m-badge`,`--secondary`,`--rounded`),n.textContent=`Rounded`,e.append(t,n),e},play:async({canvasElement:e})=>{let n=e.querySelector(`.m-badge:not(.--rounded)`),r=e.querySelector(`.m-badge.--rounded`);await t(n).toBeInTheDocument(),await t(r).toBeInTheDocument(),await t(n).toHaveClass(`m-badge`,`--secondary`),await t(r).toHaveClass(`m-badge`,`--secondary`,`--rounded`),await t(n).not.toHaveClass(`--rounded`),await t(r).toHaveClass(`--rounded`);let i=globalThis.getComputedStyle(n),a=globalThis.getComputedStyle(r),o=Number.parseFloat(i.borderRadius),s=Number.parseFloat(a.borderRadius);await t(s).toBeGreaterThan(o),await t(i.backgroundColor).toBe(a.backgroundColor);let c=Number.parseFloat(a.height);await t(s).toBeGreaterThanOrEqual(c/2)},parameters:{docs:{description:{story:`Comparison of default and fully rounded badge shapes.`}}}},f={render:()=>{let e=document.createElement(`div`);e.style.display=`flex`,e.style.flexDirection=`column`,e.style.gap=`1.5rem`;let t=document.createElement(`div`);t.innerHTML=`
      <h4 style="margin: 0 0 0.5rem 0;">Status Indicators</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <div class="m-badge --primary --small --rounded">Online</div>
        <div class="m-badge --danger --small --rounded">Offline</div>
        <div class="m-badge --warning --small --rounded">Away</div>
        <div class="m-badge --tertiary --small --rounded">Busy</div>
      </div>
    `;let n=document.createElement(`div`);n.innerHTML=`
      <h4 style="margin: 0 0 0.5rem 0;">Notification Counts</h4>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span>Messages</span>
        <div class="m-badge --danger --small --rounded">12</div>
        <span>Alerts</span>
        <div class="m-badge --warning --small --rounded">3</div>
        <span>Updates</span>
        <div class="m-badge --primary --small --rounded">New</div>
      </div>
    `;let r=document.createElement(`div`);return r.innerHTML=`
      <h4 style="margin: 0 0 0.5rem 0;">Category Tags</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <div class="m-badge --outline --primary">React</div>
        <div class="m-badge --outline --secondary">TypeScript</div>
        <div class="m-badge --outline --tertiary">CSS</div>
        <div class="m-badge --outline --warning">JavaScript</div>
      </div>
    `,e.append(t,n,r),e},play:async({canvasElement:e})=>{let n=e.querySelector(`h4`);await t(n).toBeInTheDocument(),await t(n).toHaveTextContent(`Status Indicators`);let r=e.querySelector(`.m-badge.--primary`),i=e.querySelector(`.m-badge.--danger`),a=e.querySelector(`.m-badge.--warning`),o=e.querySelector(`.m-badge.--tertiary`);await t(r).toHaveClass(`m-badge`,`--primary`,`--small`,`--rounded`),await t(i).toHaveClass(`m-badge`,`--danger`,`--small`,`--rounded`),await t(a).toHaveClass(`m-badge`,`--warning`,`--small`,`--rounded`),await t(o).toHaveClass(`m-badge`,`--tertiary`,`--small`,`--rounded`);let s=e.querySelectorAll(`h4`),c=s[1];await t(c).toBeInTheDocument(),await t(c).toHaveTextContent(`Notification Counts`);let l=e.querySelectorAll(`.m-badge`),u=[...l].find(e=>e.textContent===`12`),d=[...l].find(e=>e.textContent===`3`),f=[...l].find(e=>e.textContent===`New`);await t(u).toHaveClass(`m-badge`,`--danger`,`--small`,`--rounded`),await t(d).toHaveClass(`m-badge`,`--warning`,`--small`,`--rounded`),await t(f).toHaveClass(`m-badge`,`--primary`,`--small`,`--rounded`);let p=s[2];await t(p).toBeInTheDocument(),await t(p).toHaveTextContent(`Category Tags`);let m=[...l].find(e=>e.textContent===`React`),h=[...l].find(e=>e.textContent===`TypeScript`),g=[...l].find(e=>e.textContent===`CSS`),_=[...l].find(e=>e.textContent===`JavaScript`);await t(m).toHaveClass(`m-badge`,`--outline`,`--primary`),await t(h).toHaveClass(`m-badge`,`--outline`,`--secondary`),await t(g).toHaveClass(`m-badge`,`--outline`,`--tertiary`),await t(_).toHaveClass(`m-badge`,`--outline`,`--warning`);let v=globalThis.getComputedStyle(r),y=globalThis.getComputedStyle(m);await t(v.backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`),await t(y.backgroundColor).toBe(`rgba(0, 0, 0, 0)`),await t(u.textContent).toMatch(/^\d+$/),await t(d.textContent).toMatch(/^\d+$/),await t(f.textContent).toBe(`New`)},parameters:{docs:{description:{story:`Real-world usage examples showing badges as status indicators, notification counts, and category tags.`}}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const badge = document.createElement("div");
    badge.classList.add("m-badge");
    const label = args["label"];
    const variant = args["variant"];
    const size = args["size"];
    if (variant !== "default") badge.classList.add(\`--\${variant}\`);
    if (size !== "default") badge.classList.add(\`--\${size}\`);
    if (args["outline"]) badge.classList.add("--outline");
    if (args["rounded"]) badge.classList.add("--rounded");
    if (args["transition"]) badge.classList.add("--transition");
    badge.textContent = label;
    container.append(badge);
    return container;
  },
  args: {
    label: "Badge",
    variant: "default",
    size: "default",
    outline: false,
    rounded: false,
    transition: false,
    disabled: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText("Badge");

    // Test basic properties
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveClass("m-badge");
    await expect(badge).toHaveTextContent("Badge");

    // Test variant class
    const variant = args["variant"];
    if (variant !== "default") {
      await expect(badge).toHaveClass(\`--\${variant}\`);
    }

    // Test size class
    const size = args["size"];
    if (size !== "default") {
      await expect(badge).toHaveClass(\`--\${size}\`);
    }

    // Test modifier classes
    if (args["outline"]) {
      await expect(badge).toHaveClass("--outline");
    }
    if (args["rounded"]) {
      await expect(badge).toHaveClass("--rounded");
    }
    if (args["transition"]) {
      await expect(badge).toHaveClass("--transition");
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.gap = "0.5rem";
    const variants = [{
      name: "default",
      class: "",
      label: "Default"
    }, {
      name: "primary",
      class: "--primary",
      label: "Primary"
    }, {
      name: "secondary",
      class: "--secondary",
      label: "Secondary"
    }, {
      name: "tertiary",
      class: "--tertiary",
      label: "Tertiary"
    }, {
      name: "danger",
      class: "--danger",
      label: "Danger"
    }, {
      name: "warning",
      class: "--warning",
      label: "Warning"
    }];
    const outline = args["outline"];
    const rounded = args["rounded"];
    for (const variant of variants) {
      const badge = document.createElement("div");
      badge.classList.add("m-badge");
      if (variant.class) badge.classList.add(variant.class);
      if (outline) badge.classList.add("--outline");
      if (rounded) badge.classList.add("--rounded");
      badge.textContent = variant.label;
      container.append(badge);
    }
    return container;
  },
  args: {
    outline: false,
    rounded: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const badges = canvasElement.querySelectorAll(".m-badge");
    await expect(badges).toHaveLength(6);
    const variants = [{
      name: "default",
      expectedText: "Default"
    }, {
      name: "primary",
      expectedText: "Primary"
    }, {
      name: "secondary",
      expectedText: "Secondary"
    }, {
      name: "tertiary",
      expectedText: "Tertiary"
    }, {
      name: "danger",
      expectedText: "Danger"
    }, {
      name: "warning",
      expectedText: "Warning"
    }];
    for (const [index, badge] of badges.entries()) {
      const variant = variants[index];
      if (variant) {
        // Test basic class
        await expect(badge).toHaveClass("m-badge");

        // Test variant class
        if (variant.name !== "default") {
          await expect(badge).toHaveClass(\`--\${variant.name}\`);
        }

        // Test content
        await expect(badge).toHaveTextContent(variant.expectedText);

        // Test modifier classes from args
        if (args["outline"]) {
          await expect(badge).toHaveClass("--outline");
        }
        if (args["rounded"]) {
          await expect(badge).toHaveClass("--rounded");
        }
      }
    }

    // Test that each badge is visually distinct (has different background colors)
    const primaryBadge = canvasElement.querySelector(".m-badge.--primary") as HTMLElement;
    const secondaryBadge = canvasElement.querySelector(".m-badge.--secondary") as HTMLElement;
    const primaryStyle = globalThis.getComputedStyle(primaryBadge);
    const secondaryStyle = globalThis.getComputedStyle(secondaryBadge);

    // Ensure different variants have different styling
    if (!args["outline"]) {
      await expect(primaryStyle.backgroundColor).not.toBe(secondaryStyle.backgroundColor);
    }
  },
  parameters: {
    docs: {
      description: {
        story: "All available badge variants with their respective colors and styling."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "1rem";
    container.style.alignItems = "center";
    const label = args["label"];
    const variant = args["variant"];
    const disabled = args["disabled"];

    // Button badge
    const buttonBadge = document.createElement("button");
    buttonBadge.classList.add("m-badge");
    if (args["transition"]) buttonBadge.classList.add("--transition");
    if (args["size"]) buttonBadge.classList.add(\`--\${args["size"]}\`);
    if (args["rounded"]) buttonBadge.classList.add("--rounded");
    if (args["outline"]) buttonBadge.classList.add("--outline");
    if (variant !== "default") buttonBadge.classList.add(\`--\${variant}\`);
    if (disabled) buttonBadge.disabled = true;
    buttonBadge.textContent = \`\${label} Button\`;

    // Link badge
    const linkBadge = document.createElement("a");
    linkBadge.classList.add("m-badge");
    if (args["transition"]) linkBadge.classList.add("--transition");
    if (args["size"]) linkBadge.classList.add(\`--\${args["size"]}\`);
    if (args["rounded"]) linkBadge.classList.add("--rounded");
    if (args["outline"]) linkBadge.classList.add("--outline");
    if (variant !== "default") linkBadge.classList.add(\`--\${variant}\`);
    linkBadge.href = "#";
    linkBadge.textContent = \`\${label} Link\`;
    linkBadge.setAttribute("target", "_blank");
    container.append(buttonBadge, linkBadge);
    return container;
  },
  args: {
    label: "Interactive",
    variant: "primary",
    disabled: false,
    transition: true,
    size: "default",
    rounded: false,
    outline: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const buttonBadge = canvasElement.querySelector("button.m-badge") as HTMLButtonElement;
    const linkBadge = canvasElement.querySelector("a.m-badge") as HTMLAnchorElement;

    // Test button badge
    await expect(buttonBadge).toBeInTheDocument();
    await expect(buttonBadge).toHaveClass("m-badge");
    await expect(buttonBadge.tagName).toBe("BUTTON");
    await expect(buttonBadge).toHaveTextContent(/Interactive.*Button/);

    // Test link badge
    await expect(linkBadge).toBeInTheDocument();
    await expect(linkBadge).toHaveClass("m-badge");
    await expect(linkBadge.tagName).toBe("A");
    await expect(linkBadge).toHaveTextContent(/Interactive.*Link/);
    await expect(linkBadge).toHaveAttribute("href", "#");
    if (args["transition"]) {
      await expect(buttonBadge).toHaveClass("--transition");
      await expect(linkBadge).toHaveClass("--transition");
    }

    // Test disabled state
    if (args["disabled"]) {
      await expect(buttonBadge).toBeDisabled();
      // Test that disabled button has proper opacity
      const buttonStyle = globalThis.getComputedStyle(buttonBadge);
      await expect(buttonStyle.opacity).toBe("0.65");
    } else {
      await expect(buttonBadge).not.toBeDisabled();
    }

    // Test interactive behavior - button click
    await userEvent.click(buttonBadge);
    if (!args["disabled"]) {
      // Check if button received focus after click
      await expect(buttonBadge).toHaveFocus();
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "0.5rem";
    container.style.flexWrap = "wrap";
    const variants = ["primary", "secondary", "tertiary", "danger", "warning"];
    for (const variant of variants) {
      const badge = document.createElement("div");
      badge.classList.add("m-badge", "--outline", \`--\${variant}\`);
      if (args["rounded"]) badge.classList.add("--rounded");
      badge.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      container.append(badge);
    }
    return container;
  },
  args: {
    rounded: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const badges = canvasElement.querySelectorAll(".m-badge");
    const variants = ["primary", "secondary", "tertiary", "danger", "warning"];
    await expect(badges).toHaveLength(5);
    for (const [index, badge] of badges.entries()) {
      const variant = variants[index];
      if (variant) {
        // Test basic classes
        await expect(badge).toHaveClass("m-badge");
        await expect(badge).toHaveClass("--outline");
        await expect(badge).toHaveClass(\`--\${variant}\`);

        // Test content
        const expectedText = variant.charAt(0).toUpperCase() + variant.slice(1);
        await expect(badge).toHaveTextContent(expectedText);

        // Test rounded modifier if applied
        if (args["rounded"]) {
          await expect(badge).toHaveClass("--rounded");
        }

        // Test outline styles
        const computedStyle = globalThis.getComputedStyle(badge);
        await expect(computedStyle.backgroundColor).toBe("rgba(0, 0, 0, 0)"); // transparent

        // Verify border exists for outline style
        const borderWidth = computedStyle.borderWidth;
        await expect(borderWidth).not.toBe("0px");
      }
    }

    // Test visual distinction between outline variants
    const primaryBadge = canvasElement.querySelector(".m-badge.--primary") as HTMLElement;
    const dangerBadge = canvasElement.querySelector(".m-badge.--danger") as HTMLElement;
    const primaryStyle = globalThis.getComputedStyle(primaryBadge);
    const dangerStyle = globalThis.getComputedStyle(dangerBadge);

    // Different variants should have different border colors
    await expect(primaryStyle.borderColor).not.toBe(dangerStyle.borderColor);
  },
  parameters: {
    docs: {
      description: {
        story: "Outline style badges with transparent backgrounds and colored borders."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "1rem";
    container.style.flexWrap = "wrap";
    container.style.alignItems = "center";
    const label = args["label"];
    const variant = args["variant"];

    // Icon + Text badge
    const iconTextBadge = document.createElement("div");
    iconTextBadge.classList.add("m-badge");
    if (variant !== "default") iconTextBadge.classList.add(\`--\${variant}\`);
    iconTextBadge.innerHTML = \`<span class="icon">✓</span> <span>\${label}</span>\`;

    // Text + Icon badge
    const textIconBadge = document.createElement("div");
    textIconBadge.classList.add("m-badge");
    if (variant !== "default") textIconBadge.classList.add(\`--\${variant}\`);
    textIconBadge.innerHTML = \`<span>\${label}</span> <span class="icon">✕</span>\`;

    // Icon only badge
    const iconOnlyBadge = document.createElement("div");
    iconOnlyBadge.classList.add("m-badge", "--rounded");
    if (variant !== "default") iconOnlyBadge.classList.add(\`--\${variant}\`);
    iconOnlyBadge.innerHTML = \`<span class="icon">★</span>\`;

    // Notification count badge
    const countBadge = document.createElement("div");
    countBadge.classList.add("m-badge", "--danger", "--small", "--rounded");
    countBadge.innerHTML = \`<span class="icon">3</span>\`;
    container.append(iconTextBadge, textIconBadge, iconOnlyBadge, countBadge);
    return container;
  },
  args: {
    label: "Badge",
    variant: "primary"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const badges = canvasElement.querySelectorAll(".m-badge");
    await expect(badges).toHaveLength(4);

    // Test Icon + Text badge
    const iconTextBadge = badges[0] as HTMLElement;
    await expect(iconTextBadge).toHaveClass("m-badge");
    const icon = iconTextBadge.querySelector(".icon");
    const textSpan = iconTextBadge.querySelector("span:not(.icon)");
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveTextContent("✓");
    await expect(textSpan).toHaveTextContent(args["label"]);

    // Test layout - icon should come before text
    const children = iconTextBadge.children;
    await expect(children[0]).toHaveClass("icon");
    await expect(children[1]).not.toHaveClass("icon");

    // Test Text + Icon badge
    const textIconBadge = badges[1] as HTMLElement;
    await expect(textIconBadge).toHaveClass("m-badge");
    const icon2 = textIconBadge.querySelector(".icon");
    const textSpan2 = textIconBadge.querySelector("span:not(.icon)");
    await expect(icon2).toBeInTheDocument();
    await expect(icon2).toHaveTextContent("✕");
    await expect(textSpan2).toHaveTextContent(args["label"]);

    // Test layout - text should come before icon
    const children2 = textIconBadge.children;
    await expect(children2[0]).not.toHaveClass("icon");
    await expect(children2[1]).toHaveClass("icon");

    // Test Icon only badge
    const iconOnlyBadge = badges[2] as HTMLElement;
    await expect(iconOnlyBadge).toHaveClass("m-badge");
    await expect(iconOnlyBadge).toHaveClass("--rounded");
    const icon3 = iconOnlyBadge.querySelector(".icon");
    await expect(icon3).toBeInTheDocument();
    await expect(icon3).toHaveTextContent("★");

    // Should only contain icon, no text
    const textNodes = [...iconOnlyBadge.childNodes].filter(node => node.nodeType === Node.TEXT_NODE && node.textContent?.trim());
    await expect(textNodes).toHaveLength(0);

    // Test Notification count badge
    const countBadge = badges[3] as HTMLElement;
    await expect(countBadge).toHaveClass("m-badge");
    await expect(countBadge).toHaveClass("--danger");
    await expect(countBadge).toHaveClass("--small");
    await expect(countBadge).toHaveClass("--rounded");
    await expect(countBadge).toHaveTextContent("3");

    // Test small size styling
    const computedStyle = globalThis.getComputedStyle(countBadge);
    // Small badges should have smaller font size
    const fontSize = Number.parseFloat(computedStyle.fontSize);
    await expect(fontSize).toBeLessThan(16); // Assuming base font size is 16px

    // Test gap spacing between icon and text
    const computedStyleIconText = globalThis.getComputedStyle(iconTextBadge);
    await expect(computedStyleIconText.gap).not.toBe("0px");
  },
  parameters: {
    docs: {
      description: {
        story: "Badges with icons in various configurations: icon+text, text+icon, icon-only, and notification count."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "1rem";
    container.style.alignItems = "center";

    // Default size
    const defaultBadge = document.createElement("div");
    defaultBadge.classList.add("m-badge", "--primary");
    defaultBadge.textContent = "Default Size";

    // Small size
    const smallBadge = document.createElement("div");
    smallBadge.classList.add("m-badge", "--primary", "--small");
    smallBadge.textContent = "Small Size";
    container.append(defaultBadge, smallBadge);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const defaultBadge = canvasElement.querySelector(".m-badge:not(.--small)") as HTMLElement;
    const smallBadge = canvasElement.querySelector(".m-badge.--small") as HTMLElement;

    // Test basic properties
    await expect(defaultBadge).toBeInTheDocument();
    await expect(smallBadge).toBeInTheDocument();
    await expect(defaultBadge).toHaveClass("m-badge", "--primary");
    await expect(smallBadge).toHaveClass("m-badge", "--primary", "--small");
    await expect(defaultBadge).not.toHaveClass("--small");
    await expect(smallBadge).toHaveClass("--small");

    // Test size differences
    const defaultStyle = globalThis.getComputedStyle(defaultBadge);
    const smallStyle = globalThis.getComputedStyle(smallBadge);
    const defaultFontSize = Number.parseFloat(defaultStyle.fontSize);
    const smallFontSize = Number.parseFloat(smallStyle.fontSize);

    // Small badge should have smaller font size
    await expect(smallFontSize).toBeLessThan(defaultFontSize);

    // Both should have same background color (primary variant)
    await expect(defaultStyle.backgroundColor).toBe(smallStyle.backgroundColor);
  },
  parameters: {
    docs: {
      description: {
        story: "Comparison of default and small badge sizes."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "1rem";
    container.style.alignItems = "center";

    // Default rounded
    const defaultBadge = document.createElement("div");
    defaultBadge.classList.add("m-badge", "--secondary");
    defaultBadge.textContent = "Default";

    // Fully rounded
    const roundedBadge = document.createElement("div");
    roundedBadge.classList.add("m-badge", "--secondary", "--rounded");
    roundedBadge.textContent = "Rounded";
    container.append(defaultBadge, roundedBadge);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const defaultBadge = canvasElement.querySelector(".m-badge:not(.--rounded)") as HTMLElement;
    const roundedBadge = canvasElement.querySelector(".m-badge.--rounded") as HTMLElement;

    // Test basic properties
    await expect(defaultBadge).toBeInTheDocument();
    await expect(roundedBadge).toBeInTheDocument();
    await expect(defaultBadge).toHaveClass("m-badge", "--secondary");
    await expect(roundedBadge).toHaveClass("m-badge", "--secondary", "--rounded");
    await expect(defaultBadge).not.toHaveClass("--rounded");
    await expect(roundedBadge).toHaveClass("--rounded");

    // Test border radius differences
    const defaultStyle = globalThis.getComputedStyle(defaultBadge);
    const roundedStyle = globalThis.getComputedStyle(roundedBadge);
    const defaultRadius = Number.parseFloat(defaultStyle.borderRadius);
    const roundedRadius = Number.parseFloat(roundedStyle.borderRadius);

    // Rounded badge should have larger border radius
    await expect(roundedRadius).toBeGreaterThan(defaultRadius);

    // Both should have same background color (secondary variant)
    await expect(defaultStyle.backgroundColor).toBe(roundedStyle.backgroundColor);

    // Test that rounded badge has pill-like appearance
    const roundedHeight = Number.parseFloat(roundedStyle.height);
    // For fully rounded badges, border-radius should be at least half the height
    await expect(roundedRadius).toBeGreaterThanOrEqual(roundedHeight / 2);
  },
  parameters: {
    docs: {
      description: {
        story: "Comparison of default and fully rounded badge shapes."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1.5rem";

    // Status indicators
    const statusSection = document.createElement("div");
    statusSection.innerHTML = \`
      <h4 style="margin: 0 0 0.5rem 0;">Status Indicators</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <div class="m-badge --primary --small --rounded">Online</div>
        <div class="m-badge --danger --small --rounded">Offline</div>
        <div class="m-badge --warning --small --rounded">Away</div>
        <div class="m-badge --tertiary --small --rounded">Busy</div>
      </div>
    \`;

    // Notification counts
    const notificationSection = document.createElement("div");
    notificationSection.innerHTML = \`
      <h4 style="margin: 0 0 0.5rem 0;">Notification Counts</h4>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span>Messages</span>
        <div class="m-badge --danger --small --rounded">12</div>
        <span>Alerts</span>
        <div class="m-badge --warning --small --rounded">3</div>
        <span>Updates</span>
        <div class="m-badge --primary --small --rounded">New</div>
      </div>
    \`;

    // Category tags
    const categorySection = document.createElement("div");
    categorySection.innerHTML = \`
      <h4 style="margin: 0 0 0.5rem 0;">Category Tags</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <div class="m-badge --outline --primary">React</div>
        <div class="m-badge --outline --secondary">TypeScript</div>
        <div class="m-badge --outline --tertiary">CSS</div>
        <div class="m-badge --outline --warning">JavaScript</div>
      </div>
    \`;
    container.append(statusSection, notificationSection, categorySection);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    // Test Status Indicators section
    const statusHeading = canvasElement.querySelector("h4") as HTMLElement;
    await expect(statusHeading).toBeInTheDocument();
    await expect(statusHeading).toHaveTextContent("Status Indicators");
    const onlineBadge = canvasElement.querySelector(".m-badge.--primary") as HTMLElement;
    const offlineBadge = canvasElement.querySelector(".m-badge.--danger") as HTMLElement;
    const awayBadge = canvasElement.querySelector(".m-badge.--warning") as HTMLElement;
    const busyBadge = canvasElement.querySelector(".m-badge.--tertiary") as HTMLElement;

    // Test status badge properties
    await expect(onlineBadge).toHaveClass("m-badge", "--primary", "--small", "--rounded");
    await expect(offlineBadge).toHaveClass("m-badge", "--danger", "--small", "--rounded");
    await expect(awayBadge).toHaveClass("m-badge", "--warning", "--small", "--rounded");
    await expect(busyBadge).toHaveClass("m-badge", "--tertiary", "--small", "--rounded");

    // Test Notification Counts section
    const allHeadings = canvasElement.querySelectorAll("h4");
    const notificationHeading = allHeadings[1] as HTMLElement;
    await expect(notificationHeading).toBeInTheDocument();
    await expect(notificationHeading).toHaveTextContent("Notification Counts");
    const allBadges = canvasElement.querySelectorAll(".m-badge");
    const messagesBadge = [...allBadges].find(badge => badge.textContent === "12") as HTMLElement;
    const alertsBadge = [...allBadges].find(badge => badge.textContent === "3") as HTMLElement;
    const updatesBadge = [...allBadges].find(badge => badge.textContent === "New") as HTMLElement;

    // Test notification badge properties
    await expect(messagesBadge).toHaveClass("m-badge", "--danger", "--small", "--rounded");
    await expect(alertsBadge).toHaveClass("m-badge", "--warning", "--small", "--rounded");
    await expect(updatesBadge).toHaveClass("m-badge", "--primary", "--small", "--rounded");

    // Test Category Tags section
    const categoryHeading = allHeadings[2] as HTMLElement;
    await expect(categoryHeading).toBeInTheDocument();
    await expect(categoryHeading).toHaveTextContent("Category Tags");
    const reactBadge = [...allBadges].find(badge => badge.textContent === "React") as HTMLElement;
    const typescriptBadge = [...allBadges].find(badge => badge.textContent === "TypeScript") as HTMLElement;
    const cssBadge = [...allBadges].find(badge => badge.textContent === "CSS") as HTMLElement;
    const javascriptBadge = [...allBadges].find(badge => badge.textContent === "JavaScript") as HTMLElement;

    // Test category badge properties
    await expect(reactBadge).toHaveClass("m-badge", "--outline", "--primary");
    await expect(typescriptBadge).toHaveClass("m-badge", "--outline", "--secondary");
    await expect(cssBadge).toHaveClass("m-badge", "--outline", "--tertiary");
    await expect(javascriptBadge).toHaveClass("m-badge", "--outline", "--warning");

    // Test visual differences between sections
    const onlineStyle = globalThis.getComputedStyle(onlineBadge);
    const reactStyle = globalThis.getComputedStyle(reactBadge);

    // Status badges should have background color, category badges should be transparent
    await expect(onlineStyle.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    await expect(reactStyle.backgroundColor).toBe("rgba(0, 0, 0, 0)");

    // Test that notification counts are numeric or short text
    await expect(messagesBadge.textContent).toMatch(/^\\d+$/);
    await expect(alertsBadge.textContent).toMatch(/^\\d+$/);
    await expect(updatesBadge.textContent).toBe("New");
  },
  parameters: {
    docs: {
      description: {
        story: "Real-world usage examples showing badges as status indicators, notification counts, and category tags."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`AllVariants`,`Interactive`,`OutlineStyle`,`WithIcon`,`SizeComparison`,`ShapeVariations`,`UseCaseExamples`]}))();export{o as AllVariants,a as Default,s as Interactive,c as OutlineStyle,d as ShapeVariations,u as SizeComparison,f as UseCaseExamples,l as WithIcon,p as __namedExportsOrder,i as default};