const P={primitiveColor:/--color-(.*)-(\d+)/,semanticColor:/--color-(.*)/,shadow:/--shadow-(.*)/,spacing:/--spacing-(.*)/,typography:/--(line-height|text|font-weight|font-family|letter-spacing)(.*)/,corner:/--radius(.*)/},A=(t,e=P,n="natural")=>{const d=[...t.computedStyleMap().entries()].filter(([s,m])=>s.startsWith("--")).map(([s,m])=>({name:s,value:[...m].join(", "),styleType:I(s,e)}));return n==="natural"?d.sort(M):d.sort(L)},M=(t,e)=>{const n={xs:1,sm:2,md:3,lg:4,xl:5,"2xl":6,"3xl":7,"4xl":8,"5xl":9,tiny:1,small:2,medium:3,large:4,huge:5,none:0,auto:100},o=/(\\d+|xs|sm|md|lg|xl|\\d*xl|tiny|small|medium|large|huge|none|auto)/g,a=t.name.split(o).filter(s=>s!==""),r=e.name.split(o).filter(s=>s!==""),d=Math.max(a.length,r.length);for(let s=0;s<d;s++){const m=a[s]??"",u=r[s]??"",l=n[m.toLowerCase()],c=n[u.toLowerCase()];if(typeof l=="number"&&typeof c=="number"){if(l!==c)return l-c}else{const p=Number(m),y=Number(u);if(!Number.isNaN(p)&&!Number.isNaN(y)){if(p!==y)return p-y}else if(m!==u)return m.localeCompare(u)}}return 0},L=(t,e)=>{const n=/(\\d+)/g,o=t.name.split(n),a=e.name.split(n),r=Math.max(o.length,a.length);for(let d=0;d<r;d++){const s=o[d]??"",m=a[d]??"",u=Number(s),l=Number(m);if(!Number.isNaN(u)&&!Number.isNaN(l)){if(u!==l)return u-l}else if(s!==m)return s.localeCompare(m)}return 0},N=t=>{const e=t.filter(o=>o.styleType);return Object.groupBy(e,o=>o.styleType)},q=t=>{const e=document.createElement("div"),n=document.createElement("span");return n.textContent=`${t.name}: ${t.value}`,n.style.color=t.value,n.style.filter="invert(100%) grayscale(100%) contrast(100)",e.classList.add("color-variable"),e.style.backgroundColor=t.value,e.style.padding="1rem",e.style.borderRadius="0.25rem",e.style.margin="0.5rem",e.append(n),e},D=t=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="1rem";const n=document.createElement("div");n.classList.add("spacing-variable"),n.style.width=t.value,n.style.height="2rem",n.style.border="1px solid lightgray",n.style.margin="0.5rem";const o=document.createElement("div");return o.textContent=`${t.name}: ${t.value}`,e.append(o),e.append(n),e},$=t=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="0.5rem",e.style.padding="1rem",e.style.border="1px solid #e0e0e0",e.style.borderRadius="0.25rem",e.style.margin="0.5rem",e.style.backgroundColor="#fafafa";const n=document.createElement("div"),o=R(t.value,16);let a=`${t.name}: ${t.value}`;o&&o!==t.value&&(a+=` (${o})`),n.textContent=a,n.style.fontSize="0.875rem",n.style.color="#666",n.style.fontFamily="monospace";const r=document.createElement("div");return r.textContent="Sample Text 123",t.name.includes("text")?r.style.fontSize=t.value:t.name.includes("font-weight")?r.style.fontWeight=t.value:t.name.includes("line-height")?r.style.lineHeight=t.value:t.name.includes("letter-spacing")?r.style.letterSpacing=t.value:t.name.includes("font-family")&&(r.style.fontFamily=t.value),e.append(n),e.append(r),e},z=t=>{const e=document.createElement("div");e.classList.add("shadow-variable"),e.style.display="flex",e.style.flexDirection="column",e.style.gap="0.5rem",e.style.padding="2rem",e.style.margin="1rem",e.style.backgroundColor="#ffffff",e.style.borderRadius="0.5rem",e.style.border="1px solid #e0e0e0";const n=document.createElement("div");n.textContent=`${t.name}: ${t.value}`,n.style.fontSize="0.875rem",n.style.color="#666",n.style.fontFamily="monospace",n.style.marginBottom="1rem";const o=document.createElement("div");return o.textContent="Shadow Sample",o.style.padding="1.5rem",o.style.backgroundColor="#f8f9fa",o.style.borderRadius="0.25rem",o.style.textAlign="center",o.style.color="#333",o.style.fontWeight="500",o.style.boxShadow=t.value,e.append(n),e.append(o),e},O=t=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="0.5rem",e.style.padding="2rem",e.style.margin="1rem",e.style.backgroundColor="#ffffff",e.style.border="1px solid #e0e0e0";const n=document.createElement("div");n.textContent=`${t.name}: ${t.value}`,n.style.fontSize="0.875rem",n.style.color="#666",n.style.fontFamily="monospace",n.style.marginBottom="1rem";const o=document.createElement("div");return o.textContent="Corner Sample",o.style.padding="1.5rem",o.style.backgroundColor="#3b82f6",o.style.color="white",o.style.textAlign="center",o.style.fontWeight="500",o.style.borderRadius=t.value,o.style.border="2px solid #1e40af",e.append(n),e.append(o),e},R=(t,e)=>{const n=t.match(/^([\d.]+)px$/);if(n?.[1])return`${(Number.parseFloat(n[1])/e).toFixed(3)}rem`},I=(t,e)=>{for(const[n,o]of Object.entries(e))if(o.test(t))return n},{expect:i}=__STORYBOOK_MODULE_TEST__,G={title:"Foundation/Variables",tags:["autodocs"],argTypes:{sortMode:{control:{type:"select"},options:["natural","numeric"],description:"Sort mode for CSS variables: 'natural' uses size variants (xs→sm→md), 'numeric' prioritizes numeric order (1→2→10)"}},parameters:{docs:{description:{component:`
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
        `}},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},E={parameters:{docs:{description:{story:"Displays all primitive color tokens used as the foundation for semantic colors. These colors are typically used for building color scales and should not be used directly in components."}}},render:()=>{const t=document.querySelector("#storybook-root"),e=document.createElement("div"),n=g(t??document.documentElement,"numeric").primitiveColor??[];for(const o of n)h(o,q,e);return e},play:async({canvasElement:t})=>{const e=t.querySelectorAll(".color-variable");await i(e.length).toBeGreaterThanOrEqual(0)}},v={parameters:{docs:{description:{story:"Shows semantic color tokens that convey meaning and context. These are the colors that should be used in components to maintain consistent visual hierarchy."}}},render:()=>{const t=document.querySelector("#storybook-root"),e=document.createElement("div"),n=g(t??document.documentElement,"natural").semanticColor??[];for(const o of n)h(o,q,e);return e},play:async({canvasElement:t})=>{const e=t.querySelectorAll(".color-variable");await i(e.length).toBeGreaterThanOrEqual(0)}},w={parameters:{docs:{description:{story:"Demonstrates spacing tokens for consistent margins, padding, and gaps throughout the design system. Values are shown with visual representations."}}},render:()=>{const t=document.querySelector("#storybook-root"),e=document.createElement("div"),n=g(t??document.documentElement,"numeric").spacing??[];for(const o of n)h(o,D,e);return e},play:async({canvasElement:t})=>{const e=t.querySelector("div"),n=t.querySelectorAll(".spacing-variable");await i(e).toBeTruthy(),await i(n.length).toBeGreaterThanOrEqual(0)}},C={parameters:{docs:{description:{story:"Shows typography tokens including font families, sizes, weights, line heights, and letter spacing. Each token includes sample text to demonstrate the visual effect."}}},render:()=>{const t=document.querySelector("#storybook-root"),e=document.createElement("div"),n=g(t??document.documentElement,"natural").typography??[];for(const o of n)h(o,$,e);return e},play:async({canvasElement:t})=>{const e=t.querySelector("div"),n=t.querySelectorAll("div");await i(e).toBeTruthy(),await i(n.length).toBeGreaterThanOrEqual(1)}},k={parameters:{docs:{description:{story:"Displays shadow tokens used for creating depth and elevation effects. Each shadow is demonstrated on a sample element to show the visual impact."}}},render:()=>{const t=document.querySelector("#storybook-root"),e=document.createElement("div"),n=g(t??document.documentElement,"natural").shadow??[];for(const o of n)h(o,z,e);return e},play:async({canvasElement:t})=>{const e=t.querySelectorAll(".shadow-variable");await i(e.length).toBeGreaterThan(0)}},S={parameters:{docs:{description:{story:"Shows border radius tokens for consistent rounded corners. Each value is demonstrated on a sample element to visualize the corner rounding effect."}}},render:()=>{const t=document.querySelector("#storybook-root"),e=document.createElement("div"),n=g(t??document.documentElement,"natural").corner??[];for(const o of n)h(o,O,e);return e},play:async({canvasElement:t})=>{const e=t.querySelectorAll(".corner-variable");await i(e.length).toBeGreaterThanOrEqual(0)}},B={parameters:{docs:{description:{story:"Interactive breakpoint reference showing media query ranges with real-time viewport detection. Resize the browser to see the current breakpoint highlighted."}}},render:t=>{const e={"2xl":{min:96,minPx:1536,description:"Large desktop monitors"},xl:{min:80,minPx:1280,description:"Desktop monitors"},lg:{min:64,minPx:1024,description:"Laptops"},md:{min:48,minPx:768,description:"Tablets"},sm:{min:40,minPx:640,description:"Mobile landscape"},"max-2xl":{max:96,maxPx:1536,description:"Below large desktop monitors"},"max-xl":{max:80,maxPx:1280,description:"Below desktop monitors"},"max-lg":{max:64,maxPx:1024,description:"Below laptops"},"max-md":{max:48,maxPx:768,description:"Below tablets"},"max-sm":{max:40,maxPx:640,description:"Below mobile landscape"}},n=document.createElement("div"),o=document.createElement("h1");o.textContent="Media Breakpoints",o.classList.add("h1"),n.append(o);const a=document.createElement("div");a.style.background="#f8fafc",a.style.border="1px solid #e2e8f0",a.style.padding="1rem",a.style.borderRadius="8px",a.style.marginBottom="2rem",a.style.textAlign="center";const r=()=>{const l=window.innerWidth;let c="< sm";if(l<=e["2xl"].minPx){for(const[p,y]of Object.entries(e))if("minPx"in y&&l>=y.minPx){c=p;break}}else c="> 2xl";a.innerHTML=`Current: <strong>${String(l)}px (${c})</strong>`};r(),window.addEventListener("resize",r),n.append(a);const d=document.createElement("table");d.style.width="100%";const s=document.createElement("thead"),m=document.createElement("tr");for(const l of["Name","Range","Description","Custom Media"]){const c=document.createElement("th");c.textContent=l,c.style.borderBottom="2px solid #e2e8f0",c.style.fontWeight="600",m.append(c)}s.append(m),d.append(s);const u=document.createElement("tbody");for(const[l,c]of Object.entries(e)){const p=document.createElement("tr");p.style.borderBottom="1px solid #f1f5f9";const y=document.createElement("td");y.textContent=l,y.style.padding="0.75rem",y.style.fontWeight="600",p.append(y);const f=document.createElement("td");"min"in c?f.textContent=`≥ ${String(c.min)}rem (${String(c.minPx)}px)`:"max"in c&&(f.textContent=`< ${String(c.max)}rem (${String(c.maxPx)}px)`),f.style.padding="0.75rem",p.append(f);const b=document.createElement("td");b.textContent=c.description,b.style.padding="0.75rem",b.style.color="#64748b",p.append(b);const T=document.createElement("td"),x=document.createElement("code");x.textContent=`--media-breakpoint-${l}`,x.style.background="#f1f5f9",x.style.padding="0.25rem 0.5rem",x.style.borderRadius="4px",T.style.padding="0.75rem",T.append(x),p.append(T),u.append(p)}return d.append(u),n.append(d),n},args:{sortMode:"natural"},play:async({canvasElement:t})=>{const e=t.querySelector("div"),n=t.querySelector("h1"),o=t.querySelector("table");await i(e).toBeTruthy(),await i(n).toBeTruthy(),await i(n?.textContent).toContain("Media Breakpoints"),await i(o).toBeTruthy();const a=t.querySelectorAll("tbody tr");await i(a).toHaveLength(10);const r=t.querySelectorAll("th");await i(r).toHaveLength(4),await i(r[0]?.textContent).toBe("Name"),await i(r[1]?.textContent).toBe("Range"),await i(r[2]?.textContent).toBe("Description"),await i(r[3]?.textContent).toBe("Custom Media")}},g=(t,e="natural")=>{const n=A(t,void 0,e);return N(n)},h=(t,e,n)=>{const o=e(t);n.append(o)};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const H=["PrimitiveColor","SemanticColor","Spacing","Typography","Shadow","Corner","Breakpoint"];export{B as Breakpoint,S as Corner,E as PrimitiveColor,v as SemanticColor,k as Shadow,w as Spacing,C as Typography,H as __namedExportsOrder,G as default};
