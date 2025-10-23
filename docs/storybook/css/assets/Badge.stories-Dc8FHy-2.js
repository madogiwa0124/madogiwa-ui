const{expect:e,userEvent:I,within:k}=__STORYBOOK_MODULE_TEST__,D={title:"Components/Badge",tags:["autodocs"],argTypes:{label:{control:{type:"text"},description:"The text content of the badge"},variant:{control:{type:"select"},options:["default","primary","secondary","tertiary","danger","warning"],description:"Visual style variant of the badge"},size:{control:{type:"select"},options:["default","small"],description:"Size of the badge"},outline:{control:{type:"boolean"},description:"Use outline style instead of filled"},rounded:{control:{type:"boolean"},description:"Apply fully rounded border radius"},transition:{control:{type:"boolean"},description:"Enable hover/focus transitions"},disabled:{control:{type:"boolean"},description:"Disable interactive badge (for buttons/links)"},element:{control:{type:"select"},options:["div","button","a"],description:"HTML element type for the badge"}},parameters:{docs:{description:{component:`
### Overview

The Badge component displays small pieces of information, status indicators, or labels. It supports various visual styles, sizes, and can be interactive when used as buttons or links.

### Usage

Use badges to:
- Display status information (online, offline, new, etc.)
- Show counts or quantities (notifications, items)
- Label or categorize content
- Create interactive tags or filters
- Highlight important information

**Common use cases:**
- Notification counters
- Status indicators
- Category tags
- Interactive filters
- Feature highlights

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

| Name | Default | Description |
| ---- | ------- | ----------- |
| --badge-padding | var(--spacing-1) var(--spacing-2) | Internal padding |
| --badge-item-gap | var(--spacing-2) | Gap between badge elements (icon + text) |
| --badge-border-color | var(--color-border) | Default border color |
| --badge-border | 1px solid var(--badge-border-color) | Border style |
| --badge-border-radius | var(--radius-sm) | Border radius |
| --badge-bg-color | var(--color-default) | Background color |
| --badge-hover-filter | brightness(0.9) | Hover effect filter |
| --badge-disabled-opacity | 0.65 | Opacity when disabled |
| --badge-transition-duration | 0.2s | Transition duration |
| --badge-transition-timing | ease | Transition timing function |
| --badge-small-font-size | var(--text-xs) | Font size for small variant |
| --badge-primary-color | var(--color-primary) | Primary variant background |
| --badge-primary-text-color | var(--color-text-light) | Primary variant text color |
| --badge-secondary-color | var(--color-secondary) | Secondary variant background |
| --badge-tertiary-color | var(--color-tertiary) | Tertiary variant background |
| --badge-danger-color | var(--color-danger) | Danger variant background |
| --badge-warning-color | var(--color-warning) | Warning variant background |

### Accessibility

- Supports keyboard navigation when used as button or link
- Color variants maintain sufficient contrast ratios
- Disabled state is properly conveyed to screen readers
- Semantic HTML elements (button, a) provide appropriate roles
- Icon badges include proper text alternatives when needed
        `}}}},f={render:n=>{const a=document.createElement("div"),t=document.createElement("div");t.classList.add("m-badge");const o=n.label,s=n.variant,i=n.size;return s!=="default"&&t.classList.add(`--${s}`),i!=="default"&&t.classList.add(`--${i}`),n.outline&&t.classList.add("--outline"),n.rounded&&t.classList.add("--rounded"),n.transition&&t.classList.add("--transition"),t.textContent=o,a.append(t),a},args:{label:"Badge",variant:"default",size:"default",outline:!1,rounded:!1,transition:!1,disabled:!1},play:async({canvasElement:n,args:a})=>{const o=k(n).getByText("Badge");await e(o).toBeInTheDocument(),await e(o).toHaveClass("m-badge"),await e(o).toHaveTextContent("Badge");const s=a.variant;s!=="default"&&await e(o).toHaveClass(`--${s}`);const i=a.size;i!=="default"&&await e(o).toHaveClass(`--${i}`),a.outline&&await e(o).toHaveClass("--outline"),a.rounded&&await e(o).toHaveClass("--rounded"),a.transition&&await e(o).toHaveClass("--transition")}},x={render:n=>{const a=document.createElement("div");a.style.display="flex",a.style.flexWrap="wrap",a.style.gap="0.5rem";const t=[{name:"default",class:"",label:"Default"},{name:"primary",class:"--primary",label:"Primary"},{name:"secondary",class:"--secondary",label:"Secondary"},{name:"tertiary",class:"--tertiary",label:"Tertiary"},{name:"danger",class:"--danger",label:"Danger"},{name:"warning",class:"--warning",label:"Warning"}],o=n.outline,s=n.rounded;for(const i of t){const d=document.createElement("div");d.classList.add("m-badge"),i.class&&d.classList.add(i.class),o&&d.classList.add("--outline"),s&&d.classList.add("--rounded"),d.textContent=i.label,a.append(d)}return a},args:{outline:!1,rounded:!1},play:async({canvasElement:n,args:a})=>{const t=n.querySelectorAll(".m-badge");await e(t).toHaveLength(6);const o=[{name:"default",expectedText:"Default"},{name:"primary",expectedText:"Primary"},{name:"secondary",expectedText:"Secondary"},{name:"tertiary",expectedText:"Tertiary"},{name:"danger",expectedText:"Danger"},{name:"warning",expectedText:"Warning"}];for(const[g,l]of t.entries()){const c=o[g];c&&(await e(l).toHaveClass("m-badge"),c.name!=="default"&&await e(l).toHaveClass(`--${c.name}`),await e(l).toHaveTextContent(c.expectedText),a.outline&&await e(l).toHaveClass("--outline"),a.rounded&&await e(l).toHaveClass("--rounded"))}const s=n.querySelector(".m-badge.--primary"),i=n.querySelector(".m-badge.--secondary"),d=globalThis.getComputedStyle(s),r=globalThis.getComputedStyle(i);a.outline||await e(d.backgroundColor).not.toBe(r.backgroundColor)},parameters:{docs:{description:{story:"All available badge variants with their respective colors and styling."}}}},w={render:n=>{const a=document.createElement("div");a.style.display="flex",a.style.gap="1rem",a.style.alignItems="center";const t=n.label,o=n.variant,s=n.disabled,i=document.createElement("button");i.classList.add("m-badge","--transition"),o!=="default"&&i.classList.add(`--${o}`),s&&(i.disabled=!0),i.textContent=`${t} Button`;const d=document.createElement("a");return d.classList.add("m-badge","--transition"),o!=="default"&&d.classList.add(`--${o}`),d.href="#",d.textContent=`${t} Link`,d.setAttribute("target","_blank"),a.append(i,d),a},args:{label:"Interactive",variant:"primary",disabled:!1},play:async({canvasElement:n,args:a})=>{const t=n.querySelector("button.m-badge"),o=n.querySelector("a.m-badge");if(await e(t).toBeInTheDocument(),await e(t).toHaveClass("m-badge"),await e(t.tagName).toBe("BUTTON"),await e(t).toHaveTextContent(/Interactive.*Button/),await e(o).toBeInTheDocument(),await e(o).toHaveClass("m-badge"),await e(o.tagName).toBe("A"),await e(o).toHaveTextContent(/Interactive.*Link/),await e(o).toHaveAttribute("href","#"),a.transition&&(await e(t).toHaveClass("--transition"),await e(o).toHaveClass("--transition")),a.disabled){await e(t).toBeDisabled();const s=globalThis.getComputedStyle(t);await e(s.opacity).toBe("0.65")}else await e(t).not.toBeDisabled();await I.click(t),a.disabled||await e(t).toHaveFocus()}},B={render:n=>{const a=document.createElement("div");a.style.display="flex",a.style.gap="0.5rem",a.style.flexWrap="wrap";const t=["primary","secondary","tertiary","danger","warning"];for(const o of t){const s=document.createElement("div");s.classList.add("m-badge","--outline",`--${o}`),n.rounded&&s.classList.add("--rounded"),s.textContent=o.charAt(0).toUpperCase()+o.slice(1),a.append(s)}return a},args:{rounded:!1},play:async({canvasElement:n,args:a})=>{const t=n.querySelectorAll(".m-badge"),o=["primary","secondary","tertiary","danger","warning"];await e(t).toHaveLength(5);for(const[g,l]of t.entries()){const c=o[g];if(c){await e(l).toHaveClass("m-badge"),await e(l).toHaveClass("--outline"),await e(l).toHaveClass(`--${c}`);const m=c.charAt(0).toUpperCase()+c.slice(1);await e(l).toHaveTextContent(m),a.rounded&&await e(l).toHaveClass("--rounded");const p=globalThis.getComputedStyle(l);await e(p.backgroundColor).toBe("rgba(0, 0, 0, 0)");const y=p.borderWidth;await e(y).not.toBe("0px")}}const s=n.querySelector(".m-badge.--primary"),i=n.querySelector(".m-badge.--danger"),d=globalThis.getComputedStyle(s),r=globalThis.getComputedStyle(i);await e(d.borderColor).not.toBe(r.borderColor)},parameters:{docs:{description:{story:"Outline style badges with transparent backgrounds and colored borders."}}}},C={render:n=>{const a=document.createElement("div");a.style.display="flex",a.style.gap="1rem",a.style.flexWrap="wrap",a.style.alignItems="center";const t=n.label,o=n.variant,s=document.createElement("div");s.classList.add("m-badge"),o!=="default"&&s.classList.add(`--${o}`),s.innerHTML=`<span class="icon">✓</span> <span>${t}</span>`;const i=document.createElement("div");i.classList.add("m-badge"),o!=="default"&&i.classList.add(`--${o}`),i.innerHTML=`<span>${t}</span> <span class="icon">✕</span>`;const d=document.createElement("div");d.classList.add("m-badge","--rounded"),o!=="default"&&d.classList.add(`--${o}`),d.innerHTML='<span class="icon">★</span>';const r=document.createElement("div");return r.classList.add("m-badge","--danger","--small","--rounded"),r.textContent="3",a.append(s,i,d,r),a},args:{label:"Badge",variant:"primary"},play:async({canvasElement:n,args:a})=>{const t=n.querySelectorAll(".m-badge");await e(t).toHaveLength(4);const o=t[0];await e(o).toHaveClass("m-badge");const s=o.querySelector(".icon"),i=o.querySelector("span:not(.icon)");await e(s).toBeInTheDocument(),await e(s).toHaveTextContent("✓"),await e(i).toHaveTextContent(a.label);const d=o.children;await e(d[0]).toHaveClass("icon"),await e(d[1]).not.toHaveClass("icon");const r=t[1];await e(r).toHaveClass("m-badge");const g=r.querySelector(".icon"),l=r.querySelector("span:not(.icon)");await e(g).toBeInTheDocument(),await e(g).toHaveTextContent("✕"),await e(l).toHaveTextContent(a.label);const c=r.children;await e(c[0]).not.toHaveClass("icon"),await e(c[1]).toHaveClass("icon");const m=t[2];await e(m).toHaveClass("m-badge"),await e(m).toHaveClass("--rounded");const p=m.querySelector(".icon");await e(p).toBeInTheDocument(),await e(p).toHaveTextContent("★");const y=[...m.childNodes].filter(v=>v.nodeType===Node.TEXT_NODE&&v.textContent?.trim());await e(y).toHaveLength(0);const b=t[3];await e(b).toHaveClass("m-badge"),await e(b).toHaveClass("--danger"),await e(b).toHaveClass("--small"),await e(b).toHaveClass("--rounded"),await e(b).toHaveTextContent("3");const H=globalThis.getComputedStyle(b),L=Number.parseFloat(H.fontSize);await e(L).toBeLessThan(16);const E=globalThis.getComputedStyle(o);await e(E.gap).not.toBe("0px")},parameters:{docs:{description:{story:"Badges with icons in various configurations: icon+text, text+icon, icon-only, and notification count."}}}},T={render:()=>{const n=document.createElement("div");n.style.display="flex",n.style.gap="1rem",n.style.alignItems="center";const a=document.createElement("div");a.classList.add("m-badge","--primary"),a.textContent="Default Size";const t=document.createElement("div");return t.classList.add("m-badge","--primary","--small"),t.textContent="Small Size",n.append(a,t),n},play:async({canvasElement:n})=>{const a=n.querySelector(".m-badge:not(.--small)"),t=n.querySelector(".m-badge.--small");await e(a).toBeInTheDocument(),await e(t).toBeInTheDocument(),await e(a).toHaveClass("m-badge","--primary"),await e(t).toHaveClass("m-badge","--primary","--small"),await e(a).not.toHaveClass("--small"),await e(t).toHaveClass("--small");const o=globalThis.getComputedStyle(a),s=globalThis.getComputedStyle(t),i=Number.parseFloat(o.fontSize),d=Number.parseFloat(s.fontSize);await e(d).toBeLessThan(i),await e(o.backgroundColor).toBe(s.backgroundColor)},parameters:{docs:{description:{story:"Comparison of default and small badge sizes."}}}},S={render:()=>{const n=document.createElement("div");n.style.display="flex",n.style.gap="1rem",n.style.alignItems="center";const a=document.createElement("div");a.classList.add("m-badge","--secondary"),a.textContent="Default";const t=document.createElement("div");return t.classList.add("m-badge","--secondary","--rounded"),t.textContent="Rounded",n.append(a,t),n},play:async({canvasElement:n})=>{const a=n.querySelector(".m-badge:not(.--rounded)"),t=n.querySelector(".m-badge.--rounded");await e(a).toBeInTheDocument(),await e(t).toBeInTheDocument(),await e(a).toHaveClass("m-badge","--secondary"),await e(t).toHaveClass("m-badge","--secondary","--rounded"),await e(a).not.toHaveClass("--rounded"),await e(t).toHaveClass("--rounded");const o=globalThis.getComputedStyle(a),s=globalThis.getComputedStyle(t),i=Number.parseFloat(o.borderRadius),d=Number.parseFloat(s.borderRadius);await e(d).toBeGreaterThan(i),await e(o.backgroundColor).toBe(s.backgroundColor);const r=Number.parseFloat(s.height);await e(d).toBeGreaterThanOrEqual(r/2)},parameters:{docs:{description:{story:"Comparison of default and fully rounded badge shapes."}}}},h={render:()=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="1.5rem";const a=document.createElement("div");a.innerHTML=`
      <h4 style="margin: 0 0 0.5rem 0;">Status Indicators</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <div class="m-badge --primary --small --rounded">Online</div>
        <div class="m-badge --danger --small --rounded">Offline</div>
        <div class="m-badge --warning --small --rounded">Away</div>
        <div class="m-badge --tertiary --small --rounded">Busy</div>
      </div>
    `;const t=document.createElement("div");t.innerHTML=`
      <h4 style="margin: 0 0 0.5rem 0;">Notification Counts</h4>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span>Messages</span>
        <div class="m-badge --danger --small --rounded">12</div>
        <span>Alerts</span>
        <div class="m-badge --warning --small --rounded">3</div>
        <span>Updates</span>
        <div class="m-badge --primary --small --rounded">New</div>
      </div>
    `;const o=document.createElement("div");return o.innerHTML=`
      <h4 style="margin: 0 0 0.5rem 0;">Category Tags</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <div class="m-badge --outline --primary">React</div>
        <div class="m-badge --outline --secondary">TypeScript</div>
        <div class="m-badge --outline --tertiary">CSS</div>
        <div class="m-badge --outline --warning">JavaScript</div>
      </div>
    `,n.append(a,t,o),n},play:async({canvasElement:n})=>{const a=n.querySelector("h4");await e(a).toBeInTheDocument(),await e(a).toHaveTextContent("Status Indicators");const t=n.querySelector(".m-badge.--primary"),o=n.querySelector(".m-badge.--danger"),s=n.querySelector(".m-badge.--warning"),i=n.querySelector(".m-badge.--tertiary");await e(t).toHaveClass("m-badge","--primary","--small","--rounded"),await e(o).toHaveClass("m-badge","--danger","--small","--rounded"),await e(s).toHaveClass("m-badge","--warning","--small","--rounded"),await e(i).toHaveClass("m-badge","--tertiary","--small","--rounded");const d=n.querySelectorAll("h4"),r=d[1];await e(r).toBeInTheDocument(),await e(r).toHaveTextContent("Notification Counts");const g=n.querySelectorAll(".m-badge"),l=[...g].find(u=>u.textContent==="12"),c=[...g].find(u=>u.textContent==="3"),m=[...g].find(u=>u.textContent==="New");await e(l).toHaveClass("m-badge","--danger","--small","--rounded"),await e(c).toHaveClass("m-badge","--warning","--small","--rounded"),await e(m).toHaveClass("m-badge","--primary","--small","--rounded");const p=d[2];await e(p).toBeInTheDocument(),await e(p).toHaveTextContent("Category Tags");const y=[...g].find(u=>u.textContent==="React"),b=[...g].find(u=>u.textContent==="TypeScript"),H=[...g].find(u=>u.textContent==="CSS"),L=[...g].find(u=>u.textContent==="JavaScript");await e(y).toHaveClass("m-badge","--outline","--primary"),await e(b).toHaveClass("m-badge","--outline","--secondary"),await e(H).toHaveClass("m-badge","--outline","--tertiary"),await e(L).toHaveClass("m-badge","--outline","--warning");const E=globalThis.getComputedStyle(t),v=globalThis.getComputedStyle(y);await e(E.backgroundColor).not.toBe("rgba(0, 0, 0, 0)"),await e(v.backgroundColor).toBe("rgba(0, 0, 0, 0)"),await e(l.textContent).toMatch(/^\d+$/),await e(c.textContent).toMatch(/^\d+$/),await e(m.textContent).toBe("New")},parameters:{docs:{description:{story:"Real-world usage examples showing badges as status indicators, notification counts, and category tags."}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    buttonBadge.classList.add("m-badge", "--transition");
    if (variant !== "default") buttonBadge.classList.add(\`--\${variant}\`);
    if (disabled) buttonBadge.disabled = true;
    buttonBadge.textContent = \`\${label} Button\`;

    // Link badge
    const linkBadge = document.createElement("a");
    linkBadge.classList.add("m-badge", "--transition");
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
    disabled: false
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
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    countBadge.textContent = "3";
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
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const q=["Default","AllVariants","Interactive","OutlineStyle","WithIcon","SizeComparison","ShapeVariations","UseCaseExamples"];export{x as AllVariants,f as Default,w as Interactive,B as OutlineStyle,S as ShapeVariations,T as SizeComparison,h as UseCaseExamples,C as WithIcon,q as __namedExportsOrder,D as default};
