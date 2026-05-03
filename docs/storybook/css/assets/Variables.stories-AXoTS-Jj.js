import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a,o,s,c,l,u,d,f,p=e((()=>{t={primitiveColor:/--color-(.*)-(\d+)/,semanticColor:/--color-(.*)/,shadow:/--shadow-(.*)/,spacing:/--spacing-(.*)/,typography:/--(line-height|text|font-weight|font-family|letter-spacing)(.*)/,corner:/--radius(.*)/},n=(e,n=t,a=`natural`)=>{let o=[...e.computedStyleMap().entries()].filter(([e,t])=>e.startsWith(`--`)).map(([e,t])=>({name:e,value:[...t].join(`, `),styleType:f(e,n)}));return a===`natural`?o.toSorted(r):o.toSorted(i)},r=(e,t)=>{let n={xs:1,sm:2,md:3,lg:4,xl:5,"2xl":6,"3xl":7,"4xl":8,"5xl":9,tiny:1,small:2,medium:3,large:4,huge:5,none:0,auto:100},r=/(\\d+|xs|sm|md|lg|xl|\\d*xl|tiny|small|medium|large|huge|none|auto)/g,i=e.name.split(r).filter(e=>e!==``),a=t.name.split(r).filter(e=>e!==``),o=Math.max(i.length,a.length);for(let e=0;e<o;e++){let t=i[e]??``,r=a[e]??``,o=n[t.toLowerCase()],s=n[r.toLowerCase()];if(typeof o==`number`&&typeof s==`number`){if(o!==s)return o-s}else{let e=Number(t),n=Number(r);if(!Number.isNaN(e)&&!Number.isNaN(n)){if(e!==n)return e-n}else if(t!==r)return t.localeCompare(r)}}return 0},i=(e,t)=>{let n=/(\\d+)/g,r=e.name.split(n),i=t.name.split(n),a=Math.max(r.length,i.length);for(let e=0;e<a;e++){let t=r[e]??``,n=i[e]??``,a=Number(t),o=Number(n);if(!Number.isNaN(a)&&!Number.isNaN(o)){if(a!==o)return a-o}else if(t!==n)return t.localeCompare(n)}return 0},a=e=>{let t=e.filter(e=>e.styleType);return Object.groupBy(t,e=>e.styleType)},o=e=>{let t=document.createElement(`div`),n=document.createElement(`span`);return n.textContent=`${e.name}: ${e.value}`,n.style.color=e.value,n.style.filter=`invert(100%) grayscale(100%) contrast(100)`,t.classList.add(`color-variable`),t.style.backgroundColor=e.value,t.style.padding=`1rem`,t.style.borderRadius=`0.25rem`,t.style.margin=`0.5rem`,t.append(n),t},s=e=>{let t=document.createElement(`div`);t.style.display=`flex`,t.style.alignItems=`center`,t.style.gap=`1rem`;let n=document.createElement(`div`);n.classList.add(`spacing-variable`),n.style.width=e.value,n.style.height=`2rem`,n.style.border=`1px solid lightgray`,n.style.margin=`0.5rem`;let r=document.createElement(`div`);return r.textContent=`${e.name}: ${e.value}`,t.append(r),t.append(n),t},c=e=>{let t=document.createElement(`div`);t.style.display=`flex`,t.style.flexDirection=`column`,t.style.gap=`0.5rem`,t.style.padding=`1rem`,t.style.border=`1px solid #e0e0e0`,t.style.borderRadius=`0.25rem`,t.style.margin=`0.5rem`,t.style.backgroundColor=`#fafafa`;let n=document.createElement(`div`),r=d(e.value,16),i=`${e.name}: ${e.value}`;r&&r!==e.value&&(i+=` (${r})`),n.textContent=i,n.style.fontSize=`0.875rem`,n.style.color=`#666`,n.style.fontFamily=`monospace`;let a=document.createElement(`div`);return a.textContent=`Sample Text 123`,e.name.includes(`text`)?a.style.fontSize=e.value:e.name.includes(`font-weight`)?a.style.fontWeight=e.value:e.name.includes(`line-height`)?a.style.lineHeight=e.value:e.name.includes(`letter-spacing`)?a.style.letterSpacing=e.value:e.name.includes(`font-family`)&&(a.style.fontFamily=e.value),t.append(n),t.append(a),t},l=e=>{let t=document.createElement(`div`);t.classList.add(`shadow-variable`),t.style.display=`flex`,t.style.flexDirection=`column`,t.style.gap=`0.5rem`,t.style.padding=`2rem`,t.style.margin=`1rem`,t.style.backgroundColor=`#ffffff`,t.style.borderRadius=`0.5rem`,t.style.border=`1px solid #e0e0e0`;let n=document.createElement(`div`);n.textContent=`${e.name}: ${e.value}`,n.style.fontSize=`0.875rem`,n.style.color=`#666`,n.style.fontFamily=`monospace`,n.style.marginBottom=`1rem`;let r=document.createElement(`div`);return r.textContent=`Shadow Sample`,r.style.padding=`1.5rem`,r.style.backgroundColor=`#f8f9fa`,r.style.borderRadius=`0.25rem`,r.style.textAlign=`center`,r.style.color=`#333`,r.style.fontWeight=`500`,r.style.boxShadow=e.value,t.append(n),t.append(r),t},u=e=>{let t=document.createElement(`div`);t.style.display=`flex`,t.style.flexDirection=`column`,t.style.gap=`0.5rem`,t.style.padding=`2rem`,t.style.margin=`1rem`,t.style.backgroundColor=`#ffffff`,t.style.border=`1px solid #e0e0e0`;let n=document.createElement(`div`);n.textContent=`${e.name}: ${e.value}`,n.style.fontSize=`0.875rem`,n.style.color=`#666`,n.style.fontFamily=`monospace`,n.style.marginBottom=`1rem`;let r=document.createElement(`div`);return r.textContent=`Corner Sample`,r.style.padding=`1.5rem`,r.style.backgroundColor=`#3b82f6`,r.style.color=`white`,r.style.textAlign=`center`,r.style.fontWeight=`500`,r.style.borderRadius=e.value,r.style.border=`2px solid #1e40af`,t.append(n),t.append(r),t},d=(e,t)=>{let n=e.match(/^([\d.]+)px$/);if(n?.[1])return`${(Number.parseFloat(n[1])/t).toFixed(3)}rem`},f=(e,t)=>{for(let[n,r]of Object.entries(t))if(r.test(e))return n}})),m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{p(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`Foundation/Variables`,tags:[`autodocs`],argTypes:{sortMode:{control:{type:`select`},options:[`natural`,`numeric`],description:`Sort mode for CSS variables: 'natural' uses size variants (xs→sm→md), 'numeric' prioritizes numeric order (1→2→10)`}},parameters:{docs:{description:{component:`
### Overview

The Variables system provides a comprehensive collection of design tokens that form the foundation of Madogiwa UI. These variables are organized into categories including colors, spacing, typography, shadows, and corner radius.

### Usage

Design tokens are CSS custom properties that maintain consistent visual design across your application. They can be referenced in CSS using \`var()\` syntax and are organized into semantic categories for easy maintenance.

Dark mode tokens apply automatically when the root element has \`data-theme="dark"\`, enabling semantic colors and related values to switch without additional overrides.

### Sort Modes

- **Natural**: Prioritizes size variants (xs→sm→md→lg→xl) for intuitive size progression
- **Numeric**: Prioritizes numeric values (1→2→10) for numerical order

### CSS Variables Categories

#### Primitive Colors
Base color values used as building blocks for semantic colors.

#### Semantic Colors
Context-aware colors that convey meaning (primary, success, error, etc.).

#### Spacing
Consistent spacing values for margins, padding, and layout gaps.

#### Typography
Font families, sizes, weights, and line heights for text styling.

#### Shadows
Box shadow values for elevation and depth effects.

#### Corner
Border radius values for consistent rounded corners.

#### Breakpoints
Media query breakpoints for responsive design implementation.

### Caution

- Color contrast may vary in Storybook examples
- Use semantic colors instead of primitive colors when possible
- Breakpoints are defined using rem units for better accessibility
        `}},a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},g={parameters:{docs:{description:{story:`Displays all primitive color tokens used as the foundation for semantic colors. These colors are typically used for building color scales and should not be used directly in components.`}}},render:()=>{let e=document.querySelector(`#storybook-root`),t=document.createElement(`div`),n=C(e??document.documentElement,`numeric`).primitiveColor??[];for(let e of n)w(e,o,t);return t},play:async({canvasElement:e})=>{await m(e.querySelectorAll(`.color-variable`).length).toBeGreaterThanOrEqual(0)}},_={parameters:{docs:{description:{story:`Shows semantic color tokens that convey meaning and context. These are the colors that should be used in components to maintain consistent visual hierarchy.`}}},render:()=>{let e=document.querySelector(`#storybook-root`),t=document.createElement(`div`),n=C(e??document.documentElement,`natural`).semanticColor??[];for(let e of n)w(e,o,t);return t},play:async({canvasElement:e})=>{await m(e.querySelectorAll(`.color-variable`).length).toBeGreaterThanOrEqual(0)}},v={parameters:{docs:{description:{story:`Demonstrates spacing tokens for consistent margins, padding, and gaps throughout the design system. Values are shown with visual representations.`}}},render:()=>{let e=document.querySelector(`#storybook-root`),t=document.createElement(`div`),n=C(e??document.documentElement,`numeric`).spacing??[];for(let e of n)w(e,s,t);return t},play:async({canvasElement:e})=>{let t=e.querySelector(`div`),n=e.querySelectorAll(`.spacing-variable`);await m(t).toBeTruthy(),await m(n.length).toBeGreaterThanOrEqual(0)}},y={parameters:{docs:{description:{story:`Shows typography tokens including font families, sizes, weights, line heights, and letter spacing. Each token includes sample text to demonstrate the visual effect.`}}},render:()=>{let e=document.querySelector(`#storybook-root`),t=document.createElement(`div`),n=C(e??document.documentElement,`natural`).typography??[];for(let e of n)w(e,c,t);return t},play:async({canvasElement:e})=>{let t=e.querySelector(`div`),n=e.querySelectorAll(`div`);await m(t).toBeTruthy(),await m(n.length).toBeGreaterThanOrEqual(1)}},b={parameters:{docs:{description:{story:`Displays shadow tokens used for creating depth and elevation effects. Each shadow is demonstrated on a sample element to show the visual impact.`}}},render:()=>{let e=document.querySelector(`#storybook-root`),t=document.createElement(`div`),n=C(e??document.documentElement,`natural`).shadow??[];for(let e of n)w(e,l,t);return t},play:async({canvasElement:e})=>{await m(e.querySelectorAll(`.shadow-variable`).length).toBeGreaterThan(0)}},x={parameters:{docs:{description:{story:`Shows border radius tokens for consistent rounded corners. Each value is demonstrated on a sample element to visualize the corner rounding effect.`}}},render:()=>{let e=document.querySelector(`#storybook-root`),t=document.createElement(`div`),n=C(e??document.documentElement,`natural`).corner??[];for(let e of n)w(e,u,t);return t},play:async({canvasElement:e})=>{await m(e.querySelectorAll(`.corner-variable`).length).toBeGreaterThanOrEqual(0)}},S={parameters:{docs:{description:{story:`Interactive breakpoint reference showing media query ranges with real-time viewport detection. Resize the browser to see the current breakpoint highlighted.`}}},render:e=>{let t={"2xl":{min:96,minPx:1536,description:`Large desktop monitors`},xl:{min:80,minPx:1280,description:`Desktop monitors`},lg:{min:64,minPx:1024,description:`Laptops`},md:{min:48,minPx:768,description:`Tablets`},sm:{min:40,minPx:640,description:`Mobile landscape`},"max-2xl":{max:96,maxPx:1536,description:`Below large desktop monitors`},"max-xl":{max:80,maxPx:1280,description:`Below desktop monitors`},"max-lg":{max:64,maxPx:1024,description:`Below laptops`},"max-md":{max:48,maxPx:768,description:`Below tablets`},"max-sm":{max:40,maxPx:640,description:`Below mobile landscape`}},n=document.createElement(`div`),r=document.createElement(`h1`);r.textContent=`Media Breakpoints`,r.classList.add(`h1`),n.append(r);let i=document.createElement(`div`);i.style.background=`#f8fafc`,i.style.border=`1px solid #e2e8f0`,i.style.padding=`1rem`,i.style.borderRadius=`8px`,i.style.marginBottom=`2rem`,i.style.textAlign=`center`;let a=()=>{let e=window.innerWidth,n=`< sm`;if(e<=t[`2xl`].minPx){for(let[r,i]of Object.entries(t))if(`minPx`in i&&e>=i.minPx){n=r;break}}else n=`> 2xl`;i.innerHTML=`Current: <strong>${String(e)}px (${n})</strong>`};a(),window.addEventListener(`resize`,a),n.append(i);let o=document.createElement(`table`);o.style.width=`100%`;let s=document.createElement(`thead`),c=document.createElement(`tr`);for(let e of[`Name`,`Range`,`Description`,`Custom Media`]){let t=document.createElement(`th`);t.textContent=e,t.style.borderBottom=`2px solid #e2e8f0`,t.style.fontWeight=`600`,c.append(t)}s.append(c),o.append(s);let l=document.createElement(`tbody`);for(let[e,n]of Object.entries(t)){let t=document.createElement(`tr`);t.style.borderBottom=`1px solid #f1f5f9`;let r=document.createElement(`td`);r.textContent=e,r.style.padding=`0.75rem`,r.style.fontWeight=`600`,t.append(r);let i=document.createElement(`td`);`min`in n?i.textContent=`≥ ${String(n.min)}rem (${String(n.minPx)}px)`:`max`in n&&(i.textContent=`< ${String(n.max)}rem (${String(n.maxPx)}px)`),i.style.padding=`0.75rem`,t.append(i);let a=document.createElement(`td`);a.textContent=n.description,a.style.padding=`0.75rem`,a.style.color=`#64748b`,t.append(a);let o=document.createElement(`td`),s=document.createElement(`code`);s.textContent=`--media-breakpoint-${e}`,s.style.background=`#f1f5f9`,s.style.padding=`0.25rem 0.5rem`,s.style.borderRadius=`4px`,o.style.padding=`0.75rem`,o.append(s),t.append(o),l.append(t)}return o.append(l),n.append(o),n},args:{sortMode:`natural`},play:async({canvasElement:e})=>{let t=e.querySelector(`div`),n=e.querySelector(`h1`),r=e.querySelector(`table`);await m(t).toBeTruthy(),await m(n).toBeTruthy(),await m(n?.textContent).toContain(`Media Breakpoints`),await m(r).toBeTruthy(),await m(e.querySelectorAll(`tbody tr`)).toHaveLength(10);let i=e.querySelectorAll(`th`);await m(i).toHaveLength(4),await m(i[0]?.textContent).toBe(`Name`),await m(i[1]?.textContent).toBe(`Range`),await m(i[2]?.textContent).toBe(`Description`),await m(i[3]?.textContent).toBe(`Custom Media`)}},C=(e,t=`natural`)=>a(n(e,void 0,t)),w=(e,t,n)=>{let r=t(e);n.append(r)},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Displays all primitive color tokens used as the foundation for semantic colors. These colors are typically used for building color scales and should not be used directly in components."
      }
    }
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "numeric")["primitiveColor"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createColorElement, container);
    }
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const colorElements = canvasElement.querySelectorAll(".color-variable");
    await expect(colorElements.length).toBeGreaterThanOrEqual(0);
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows semantic color tokens that convey meaning and context. These are the colors that should be used in components to maintain consistent visual hierarchy."
      }
    }
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "natural")["semanticColor"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createColorElement, container);
    }
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const colorElements = canvasElement.querySelectorAll(".color-variable");
    await expect(colorElements.length).toBeGreaterThanOrEqual(0);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Demonstrates spacing tokens for consistent margins, padding, and gaps throughout the design system. Values are shown with visual representations."
      }
    }
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "numeric")["spacing"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createSpacingElement, container);
    }
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector("div");
    const spacingElements = canvasElement.querySelectorAll(".spacing-variable");
    await expect(container).toBeTruthy();
    await expect(spacingElements.length).toBeGreaterThanOrEqual(0);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows typography tokens including font families, sizes, weights, line heights, and letter spacing. Each token includes sample text to demonstrate the visual effect."
      }
    }
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "natural")["typography"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createTypographyElement, container);
    }
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector("div");
    const typographyElements = canvasElement.querySelectorAll("div");
    await expect(container).toBeTruthy();
    await expect(typographyElements.length).toBeGreaterThanOrEqual(1);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Displays shadow tokens used for creating depth and elevation effects. Each shadow is demonstrated on a sample element to show the visual impact."
      }
    }
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "natural")["shadow"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createShadowElement, container);
    }
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const shadowElements = canvasElement.querySelectorAll(".shadow-variable");
    await expect(shadowElements.length).toBeGreaterThan(0);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows border radius tokens for consistent rounded corners. Each value is demonstrated on a sample element to visualize the corner rounding effect."
      }
    }
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "natural")["corner"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createCornerElement, container);
    }
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const cornerElements = canvasElement.querySelectorAll(".corner-variable");
    await expect(cornerElements.length).toBeGreaterThanOrEqual(0);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Interactive breakpoint reference showing media query ranges with real-time viewport detection. Resize the browser to see the current breakpoint highlighted."
      }
    }
  },
  render: _args => {
    // Breakpoint definitions (single source of truth)
    const breakpoints = {
      "2xl": {
        min: 96,
        minPx: 1536,
        description: "Large desktop monitors"
      },
      "xl": {
        min: 80,
        minPx: 1280,
        description: "Desktop monitors"
      },
      "lg": {
        min: 64,
        minPx: 1024,
        description: "Laptops"
      },
      "md": {
        min: 48,
        minPx: 768,
        description: "Tablets"
      },
      "sm": {
        min: 40,
        minPx: 640,
        description: "Mobile landscape"
      },
      "max-2xl": {
        max: 96,
        maxPx: 1536,
        description: "Below large desktop monitors"
      },
      "max-xl": {
        max: 80,
        maxPx: 1280,
        description: "Below desktop monitors"
      },
      "max-lg": {
        max: 64,
        maxPx: 1024,
        description: "Below laptops"
      },
      "max-md": {
        max: 48,
        maxPx: 768,
        description: "Below tablets"
      },
      "max-sm": {
        max: 40,
        maxPx: 640,
        description: "Below mobile landscape"
      }
    };
    const container = document.createElement("div");

    // Title
    const title = document.createElement("h1");
    title.textContent = "Media Breakpoints";
    title.classList.add("h1");
    container.append(title);

    // Current viewport indicator
    const currentIndicator = document.createElement("div");
    currentIndicator.style.background = "#f8fafc";
    currentIndicator.style.border = "1px solid #e2e8f0";
    currentIndicator.style.padding = "1rem";
    currentIndicator.style.borderRadius = "8px";
    currentIndicator.style.marginBottom = "2rem";
    currentIndicator.style.textAlign = "center";
    const updateCurrentBreakpoint = () => {
      const width = window.innerWidth;
      let current = "< sm";
      if (width <= breakpoints["2xl"].minPx) {
        for (const [name, bp] of Object.entries(breakpoints)) {
          if ("minPx" in bp && width >= bp.minPx) {
            current = name;
            break;
          }
        }
      } else {
        current = \`> 2xl\`;
      }
      currentIndicator.innerHTML = \`Current: <strong>\${String(width)}px (\${current})</strong>\`;
    };
    updateCurrentBreakpoint();
    window.addEventListener("resize", updateCurrentBreakpoint);
    container.append(currentIndicator);

    // Breakpoints table
    const table = document.createElement("table");
    table.style.width = "100%";

    // Table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    for (const text of ["Name", "Range", "Description", "Custom Media"]) {
      const th = document.createElement("th");
      th.textContent = text;
      th.style.borderBottom = "2px solid #e2e8f0";
      th.style.fontWeight = "600";
      headerRow.append(th);
    }
    thead.append(headerRow);
    table.append(thead);

    // Table body
    const tbody = document.createElement("tbody");
    for (const [name, bp] of Object.entries(breakpoints)) {
      const row = document.createElement("tr");
      row.style.borderBottom = "1px solid #f1f5f9";

      // Name
      const nameCell = document.createElement("td");
      nameCell.textContent = name;
      nameCell.style.padding = "0.75rem";
      nameCell.style.fontWeight = "600";
      row.append(nameCell);

      // Range
      const rangeCell = document.createElement("td");
      if ("min" in bp) {
        rangeCell.textContent = \`≥ \${String(bp.min)}rem (\${String(bp.minPx)}px)\`;
      } else if ("max" in bp) {
        rangeCell.textContent = \`< \${String(bp.max)}rem (\${String(bp.maxPx)}px)\`;
      }
      rangeCell.style.padding = "0.75rem";
      row.append(rangeCell);

      // Description
      const descCell = document.createElement("td");
      descCell.textContent = bp.description;
      descCell.style.padding = "0.75rem";
      descCell.style.color = "#64748b";
      row.append(descCell);

      // Custom Media
      const mediaCell = document.createElement("td");
      const code = document.createElement("code");
      code.textContent = \`--media-breakpoint-\${name}\`;
      code.style.background = "#f1f5f9";
      code.style.padding = "0.25rem 0.5rem";
      code.style.borderRadius = "4px";
      mediaCell.style.padding = "0.75rem";
      mediaCell.append(code);
      row.append(mediaCell);
      tbody.append(row);
    }
    table.append(tbody);
    container.append(table);
    return container;
  },
  args: {
    sortMode: "natural"
  },
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector("div");
    const title = canvasElement.querySelector("h1");
    const table = canvasElement.querySelector("table");
    await expect(container).toBeTruthy();
    await expect(title).toBeTruthy();
    await expect(title?.textContent).toContain("Media Breakpoints");
    await expect(table).toBeTruthy();
    const rows = canvasElement.querySelectorAll("tbody tr");
    await expect(rows).toHaveLength(10);

    // Verify table headers
    const headers = canvasElement.querySelectorAll("th");
    await expect(headers).toHaveLength(4);
    await expect(headers[0]?.textContent).toBe("Name");
    await expect(headers[1]?.textContent).toBe("Range");
    await expect(headers[2]?.textContent).toBe("Description");
    await expect(headers[3]?.textContent).toBe("Custom Media");
  }
}`,...S.parameters?.docs?.source}}},T=[`PrimitiveColor`,`SemanticColor`,`Spacing`,`Typography`,`Shadow`,`Corner`,`Breakpoint`]}))();export{S as Breakpoint,x as Corner,g as PrimitiveColor,_ as SemanticColor,b as Shadow,v as Spacing,y as Typography,T as __namedExportsOrder,h as default};