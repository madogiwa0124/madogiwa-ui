const{expect:p,within:v}=__STORYBOOK_MODULE_TEST__,S={title:"Utils/Visibility",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["hidden","visible","invisible","sr-only","hidden-sm","hidden-md","hidden-lg","hidden-xl","hidden-2xl","visible-sm","visible-md","visible-lg","visible-xl","visible-2xl","hidden-max-sm","hidden-max-md","hidden-max-lg","hidden-max-xl","hidden-max-2xl","visible-max-sm","visible-max-md","visible-max-lg","visible-max-xl","visible-max-2xl"],description:"The visibility utility class variant"}},parameters:{docs:{description:{component:`
### Overview

Visibility utilities control the visibility and display behavior of elements, including responsive visibility based on breakpoints.

### Usage

Use visibility utilities to show or hide elements in different contexts:

- Basic visibility control (hidden, visible, invisible)
- Screen reader only content (sr-only)
- Responsive visibility based on breakpoints

Responsive utilities allow you to control visibility at different screen sizes, making it easy to create responsive layouts that adapt to various devices.

### Example code

\`\`\`html
<!-- Basic visibility -->
<div class="m-hidden">Always hidden</div>
<div class="m-visible">Always visible</div>
<div class="m-invisible">Invisible but takes up space</div>

<!-- Screen reader only -->
<span class="m-sr-only">Hidden from visual users but available to screen readers</span>

<!-- Hide on sm and above (≥ 40rem / 640px) -->
<div class="m-hidden-sm">Hidden on small screens and above</div>

<!-- Show on md and above (≥ 48rem / 768px) -->
<div class="m-visible-md">Visible on medium screens and above</div>

<!-- Hide below lg (< 64rem / 1024px) -->
<div class="m-hidden-max-lg">Hidden on screens smaller than large</div>

<!-- Show below xl (< 80rem / 1280px) -->
<div class="m-visible-max-xl">Visible on screens smaller than extra large</div>
\`\`\`

### Modifiers

| Target | Name | Description |
| ------ | ---- | ----------- |
| - | .m-hidden | Hides the element completely (display: none) |
| - | .m-visible | Sets visibility: visible on the element |
| - | .m-invisible | Makes the element invisible but maintains its space |
| - | .m-sr-only | Hides the element visually but keeps it accessible to screen readers |
| - | .m-hidden-sm | Hides on screens ≥ 40rem (640px) and above |
| - | .m-hidden-md | Hides on screens ≥ 48rem (768px) and above |
| - | .m-hidden-lg | Hides on screens ≥ 64rem (1024px) and above |
| - | .m-hidden-xl | Hides on screens ≥ 80rem (1280px) and above |
| - | .m-hidden-2xl | Hides on screens ≥ 96rem (1536px) and above |
| - | .m-visible-sm | Shows on screens ≥ 40rem (640px) and above |
| - | .m-visible-md | Shows on screens ≥ 48rem (768px) and above |
| - | .m-visible-lg | Shows on screens ≥ 64rem (1024px) and above |
| - | .m-visible-xl | Shows on screens ≥ 80rem (1280px) and above |
| - | .m-visible-2xl | Shows on screens ≥ 96rem (1536px) and above |
| - | .m-hidden-max-sm | Hides on screens < 40rem (640px) |
| - | .m-hidden-max-md | Hides on screens < 48rem (768px) |
| - | .m-hidden-max-lg | Hides on screens < 64rem (1024px) |
| - | .m-hidden-max-xl | Hides on screens < 80rem (1280px) |
| - | .m-hidden-max-2xl | Hides on screens < 96rem (1536px) |
| - | .m-visible-max-sm | Shows on screens < 40rem (640px) |
| - | .m-visible-max-md | Shows on screens < 48rem (768px) |
| - | .m-visible-max-lg | Shows on screens < 64rem (1024px) |
| - | .m-visible-max-xl | Shows on screens < 80rem (1280px) |
| - | .m-visible-max-2xl | Shows on screens < 96rem (1536px) |

### Caution

- All visibility utilities use \`!important\` to ensure they override other styles
- The \`.m-sr-only\` class should be used for content that should only be available to screen readers
- Responsive utilities work in conjunction with the breakpoints defined in the foundation
- Consider using \`.m-invisible\` instead of \`.m-hidden\` when you want to maintain layout spacing
        `}},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},C=o=>{const e=document.createElement("div");e.style.padding="20px",e.style.fontFamily="system-ui, sans-serif";const i=document.createElement("p");i.style.marginBottom="16px",i.style.padding="12px",i.style.backgroundColor="var(--color-bg-subtle)",i.style.borderRadius="4px",i.style.fontSize="14px";const n=document.createElement("div");n.className=`m-${o}`,n.style.padding="20px",n.style.backgroundColor="var(--color-primary)",n.style.color="var(--color-text-inverse)",n.style.borderRadius="4px",n.style.fontWeight="bold",n.textContent=`Element with .m-${o}`;const s=document.createElement("div");return s.style.padding="20px",s.style.backgroundColor="var(--color-secondary)",s.style.color="var(--color-text-inverse)",s.style.borderRadius="4px",s.style.fontWeight="bold",s.style.marginTop="16px",s.textContent="Reference element (always visible)",o.includes("-sm")?i.textContent="Resize your browser to see the effect at 640px (sm) breakpoint":o.includes("-md")?i.textContent="Resize your browser to see the effect at 768px (md) breakpoint":o.includes("-lg")?i.textContent="Resize your browser to see the effect at 1024px (lg) breakpoint":o.includes("-xl")?i.textContent="Resize your browser to see the effect at 1280px (xl) breakpoint":o.includes("-2xl")?i.textContent="Resize your browser to see the effect at 1536px (2xl) breakpoint":o==="sr-only"?i.textContent="The element is hidden visually but accessible to screen readers":o==="invisible"?i.textContent="The element is invisible but still takes up space in the layout":i.textContent=`The element is ${o}`,e.append(i,n,s),e},b={parameters:{docs:{description:{story:"Hides the element completely with display: none."}}},render:()=>C("hidden"),args:{variant:"hidden"},play:async({canvasElement:o})=>{const i=v(o).getByText(/Element with .m-hidden/);await p(i).toHaveClass("m-hidden")}},m={parameters:{docs:{description:{story:"Sets visibility: visible on the element."}}},render:()=>C("visible"),args:{variant:"visible"},play:async({canvasElement:o})=>{const i=v(o).getByText(/Element with .m-visible/);await p(i).toHaveClass("m-visible")}},u={parameters:{docs:{description:{story:"Makes the element invisible with visibility: hidden but maintains its space in the layout."}}},render:()=>C("invisible"),args:{variant:"invisible"},play:async({canvasElement:o})=>{const i=v(o).getByText(/Element with .m-invisible/);await p(i).toHaveClass("m-invisible")}},h={parameters:{docs:{description:{story:"Hides the element visually but keeps it accessible to screen readers for improved accessibility."}}},render:()=>C("sr-only"),args:{variant:"sr-only"},play:async({canvasElement:o})=>{const i=v(o).getByText(/Element with .m-sr-only/);await p(i).toHaveClass("m-sr-only")}},y={parameters:{docs:{description:{story:"Demonstrates multiple responsive visibility utilities working together. Resize the viewport to see different elements appear and disappear at different breakpoints."}}},render:()=>{const o=document.createElement("div");o.style.padding="20px",o.style.fontFamily="system-ui, sans-serif";const e=document.createElement("p");e.style.marginBottom="16px",e.style.padding="12px",e.style.backgroundColor="var(--color-bg-subtle)",e.style.borderRadius="4px",e.style.fontSize="14px",e.textContent="Resize your browser to see different elements appear at different breakpoints";const i=(s,c,f)=>{const t=document.createElement("div");return t.className=s,t.style.padding="16px",t.style.backgroundColor=f,t.style.color="var(--color-text-inverse)",t.style.borderRadius="4px",t.style.marginBottom="12px",t.style.fontWeight="bold",t.textContent=c,t},n=[i("m-visible-max-sm","< 640px (Mobile only)","#f44336"),i("m-visible-sm m-hidden-md","640px - 767px (Small only)","#e91e63"),i("m-visible-md m-hidden-lg","768px - 1023px (Medium only)","#9c27b0"),i("m-visible-lg m-hidden-xl","1024px - 1279px (Large only)","#673ab7"),i("m-visible-xl m-hidden-2xl","1280px - 1535px (XL only)","#3f51b5"),i("m-visible-2xl","≥ 1536px (2XL and above)","#2196f3")];return o.append(e,...n),o},play:async({canvasElement:o})=>{const i=v(o).getByText(/Mobile only/);await p(i).toHaveClass("m-visible-max-sm")}},x={parameters:{docs:{description:{story:"Matrix view showing which classes are visible or hidden at different breakpoints. Resize your browser to see the current breakpoint highlighted."}}},render:()=>{const o=document.createElement("div");o.style.padding="20px",o.style.fontFamily="system-ui, sans-serif",o.style.overflowX="auto";const e="var(--color-bg-muted)",i="var(--color-primary)",n="var(--color-danger)",s="var(--color-default)",c=document.createElement("p");c.style.marginBottom="20px",c.style.padding="12px",c.style.backgroundColor="var(--color-bg-muted)",c.style.borderRadius="4px",c.style.fontSize="14px",c.innerHTML=`
      <strong>Legend:</strong>
      <span style="background: ${i}; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">display: block</span>
      <span style="background: ${n}; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">display: none</span>
      <span style="background: ${s}; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">visibility: hidden</span>
      <br>
      <strong>Current breakpoint:</strong> <span id="current-breakpoint" style="font-weight: bold; color: var(--color-primary);"></span>
    `;const f=()=>{const a=window.innerWidth;let l="< 40rem (640px) - xs";a>=1536?l="≥ 96rem (1536px) - 2xl":a>=1280?l="≥ 80rem (1280px) - xl":a>=1024?l="≥ 64rem (1024px) - lg":a>=768?l="≥ 48rem (768px) - md":a>=640&&(l="≥ 40rem (640px) - sm");const r=document.querySelector("#current-breakpoint");r&&(r.textContent=l)};f(),window.addEventListener("resize",f);const t=document.createElement("table");t.style.width="100%",t.style.borderCollapse="collapse",t.style.marginTop="16px",t.style.backgroundColor="var(--color-bg-default)",t.style.boxShadow="0 2px 4px rgba(0,0,0,0.1)";const N=document.createElement("thead"),g=document.createElement("tr");g.style.backgroundColor="var(--color-bg-muted)";const k=["Class",`< 40rem
(640px)`,`≥ 40rem
(640px)`,`≥ 48rem
(768px)`,`≥ 64rem
(1024px)`,`≥ 80rem
(1280px)`,`≥ 96rem
(1536px)`];for(const a of k){const l=document.createElement("th");l.style.padding="12px 8px",l.style.borderBottom="2px solid var(--color-border)",l.style.fontSize="12px",l.style.fontWeight="bold",l.style.textAlign=a==="Class"?"left":"center",l.style.whiteSpace="pre-line",l.textContent=a,g.append(l)}N.append(g),t.append(N);const E=document.createElement("tbody"),H=[{class:".m-hidden-sm",states:[{value:"No effect (inherits parent)",color:e},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n}],description:"Hidden on sm and above"},{class:".m-hidden-md",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n}],description:"Hidden on md and above"},{class:".m-hidden-lg",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n}],description:"Hidden on lg and above"},{class:".m-hidden-xl",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n}],description:"Hidden on xl and above"},{class:".m-hidden-2xl",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"display: none (applied)",color:n}],description:"Hidden on 2xl and above"},{class:".m-visible-sm",states:[{value:"No effect (inherits parent)",color:e},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i}],description:"Visible on sm and above"},{class:".m-visible-md",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i}],description:"Visible on md and above"},{class:".m-visible-lg",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i}],description:"Visible on lg and above"},{class:".m-visible-xl",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i}],description:"Visible on xl and above"},{class:".m-visible-2xl",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"visibility: visible (applied)",color:i}],description:"Visible on 2xl and above"},{class:".m-hidden-max-sm",states:[{value:"display: none (applied)",color:n},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Hidden below sm"},{class:".m-hidden-max-md",states:[{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Hidden below md"},{class:".m-hidden-max-lg",states:[{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Hidden below lg"},{class:".m-hidden-max-xl",states:[{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Hidden below xl"},{class:".m-hidden-max-2xl",states:[{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"display: none (applied)",color:n},{value:"No effect (inherits parent)",color:e}],description:"Hidden below 2xl"},{class:".m-visible-max-sm",states:[{value:"visibility: visible (applied)",color:i},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Visible below sm"},{class:".m-visible-max-md",states:[{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Visible below md"},{class:".m-visible-max-lg",states:[{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Visible below lg"},{class:".m-visible-max-xl",states:[{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Visible below xl"},{class:".m-visible-max-2xl",states:[{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"visibility: visible (applied)",color:i},{value:"No effect (inherits parent)",color:e}],description:"Visible below 2xl"},{class:".m-invisible-sm",states:[{value:"No effect (inherits parent)",color:e},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n}],description:"Invisible on sm and above"},{class:".m-invisible-md",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n}],description:"Invisible on md and above"},{class:".m-invisible-lg",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n}],description:"Invisible on lg and above"},{class:".m-invisible-xl",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n}],description:"Invisible on xl and above"},{class:".m-invisible-2xl",states:[{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"visibility: hidden (applied)",color:n}],description:"Invisible on 2xl and above"},{class:".m-invisible-max-sm",states:[{value:"visibility: hidden (applied)",color:n},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Invisible below sm"},{class:".m-invisible-max-md",states:[{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Invisible below md"},{class:".m-invisible-max-lg",states:[{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Invisible below lg"},{class:".m-invisible-max-xl",states:[{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"No effect (inherits parent)",color:e},{value:"No effect (inherits parent)",color:e}],description:"Invisible below xl"},{class:".m-invisible-max-2xl",states:[{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"visibility: hidden (applied)",color:n},{value:"No effect (inherits parent)",color:e}],description:"Invisible below 2xl"}];for(const a of H){const l=document.createElement("tr");l.style.borderBottom="1px solid var(--color-border)";const r=document.createElement("td");r.style.padding="12px 8px",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="600",r.style.backgroundColor="var(--color-bg-muted)",r.innerHTML=`${a.class}<br><span style="font-size: 11px; color: var(--color-bg-muted); font-weight: normal;">${a.description}</span>`,l.append(r);for(const w of a.states){const d=document.createElement("td");d.style.padding="12px 8px",d.style.textAlign="center",d.style.fontSize="12px",d.style.fontFamily="monospace",d.style.backgroundColor=w.color,d.style.fontWeight="500",d.textContent=w.value,l.append(d)}E.append(l)}return t.append(E),o.append(c,t),o},play:async({canvasElement:o})=>{const e=o.querySelector("table");await p(e).toBeInTheDocument()}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Hides the element completely with display: none."
      }
    }
  },
  render: () => createExample("hidden"),
  args: {
    variant: "hidden"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hiddenElement = canvas.getByText(/Element with .m-hidden/);
    await expect(hiddenElement).toHaveClass("m-hidden");
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sets visibility: visible on the element."
      }
    }
  },
  render: () => createExample("visible"),
  args: {
    variant: "visible"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const visibleElement = canvas.getByText(/Element with .m-visible/);
    await expect(visibleElement).toHaveClass("m-visible");
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Makes the element invisible with visibility: hidden but maintains its space in the layout."
      }
    }
  },
  render: () => createExample("invisible"),
  args: {
    variant: "invisible"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const invisibleElement = canvas.getByText(/Element with .m-invisible/);
    await expect(invisibleElement).toHaveClass("m-invisible");
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Hides the element visually but keeps it accessible to screen readers for improved accessibility."
      }
    }
  },
  render: () => createExample("sr-only"),
  args: {
    variant: "sr-only"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const srOnlyElement = canvas.getByText(/Element with .m-sr-only/);
    await expect(srOnlyElement).toHaveClass("m-sr-only");
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Demonstrates multiple responsive visibility utilities working together. Resize the viewport to see different elements appear and disappear at different breakpoints."
      }
    }
  },
  render: () => {
    const container = document.createElement("div");
    container.style.padding = "20px";
    container.style.fontFamily = "system-ui, sans-serif";
    const info = document.createElement("p");
    info.style.marginBottom = "16px";
    info.style.padding = "12px";
    info.style.backgroundColor = "var(--color-bg-subtle)";
    info.style.borderRadius = "4px";
    info.style.fontSize = "14px";
    info.textContent = "Resize your browser to see different elements appear at different breakpoints";
    const createBox = (className: string, label: string, color: string): HTMLDivElement => {
      const box = document.createElement("div");
      box.className = className;
      box.style.padding = "16px";
      box.style.backgroundColor = color;
      box.style.color = "var(--color-text-inverse)";
      box.style.borderRadius = "4px";
      box.style.marginBottom = "12px";
      box.style.fontWeight = "bold";
      box.textContent = label;
      return box;
    };
    const boxes = [createBox("m-visible-max-sm", "< 640px (Mobile only)", "#f44336"), createBox("m-visible-sm m-hidden-md", "640px - 767px (Small only)", "#e91e63"), createBox("m-visible-md m-hidden-lg", "768px - 1023px (Medium only)", "#9c27b0"), createBox("m-visible-lg m-hidden-xl", "1024px - 1279px (Large only)", "#673ab7"), createBox("m-visible-xl m-hidden-2xl", "1280px - 1535px (XL only)", "#3f51b5"), createBox("m-visible-2xl", "≥ 1536px (2XL and above)", "#2196f3")];
    container.append(info, ...boxes);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const mobileBox = canvas.getByText(/Mobile only/);
    await expect(mobileBox).toHaveClass("m-visible-max-sm");
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Matrix view showing which classes are visible or hidden at different breakpoints. Resize your browser to see the current breakpoint highlighted."
      }
    }
  },
  render: () => {
    const container = document.createElement("div");
    container.style.padding = "20px";
    container.style.fontFamily = "system-ui, sans-serif";
    container.style.overflowX = "auto";
    const noEffectColor = "var(--color-bg-muted)"; // Light gray
    const visibleColor = "var(--color-primary)"; // Light green
    const hiddenColor = "var(--color-danger)"; // Light red
    const invisibleColor = "var(--color-default)"; // Light gray

    const info = document.createElement("p");
    info.style.marginBottom = "20px";
    info.style.padding = "12px";
    info.style.backgroundColor = "var(--color-bg-muted)";
    info.style.borderRadius = "4px";
    info.style.fontSize = "14px";
    info.innerHTML = \`
      <strong>Legend:</strong>
      <span style="background: \${visibleColor}; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">display: block</span>
      <span style="background: \${hiddenColor}; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">display: none</span>
      <span style="background: \${invisibleColor}; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">visibility: hidden</span>
      <br>
      <strong>Current breakpoint:</strong> <span id="current-breakpoint" style="font-weight: bold; color: var(--color-primary);"></span>
    \`;

    // Update current breakpoint indicator
    const updateBreakpoint = (): void => {
      const width = window.innerWidth;
      let breakpoint = "< 40rem (640px) - xs";
      if (width >= 1536) breakpoint = "≥ 96rem (1536px) - 2xl";else if (width >= 1280) breakpoint = "≥ 80rem (1280px) - xl";else if (width >= 1024) breakpoint = "≥ 64rem (1024px) - lg";else if (width >= 768) breakpoint = "≥ 48rem (768px) - md";else if (width >= 640) breakpoint = "≥ 40rem (640px) - sm";
      const indicator = document.querySelector("#current-breakpoint");
      if (indicator) {
        indicator.textContent = breakpoint;
      }
    };
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginTop = "16px";
    table.style.backgroundColor = "var(--color-bg-default)";
    table.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";

    // Table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.style.backgroundColor = "var(--color-bg-muted)";
    const headers = ["Class", "< 40rem\\n(640px)", "≥ 40rem\\n(640px)", "≥ 48rem\\n(768px)", "≥ 64rem\\n(1024px)", "≥ 80rem\\n(1280px)", "≥ 96rem\\n(1536px)"];
    for (const header of headers) {
      const th = document.createElement("th");
      th.style.padding = "12px 8px";
      th.style.borderBottom = "2px solid var(--color-border)";
      th.style.fontSize = "12px";
      th.style.fontWeight = "bold";
      th.style.textAlign = header === "Class" ? "left" : "center";
      th.style.whiteSpace = "pre-line";
      th.textContent = header;
      headerRow.append(th);
    }
    thead.append(headerRow);
    table.append(thead);

    // Table body
    const tbody = document.createElement("tbody");

    // Define visibility states for each class at each breakpoint
    const classStates: Array<{
      class: string;
      states: Array<{
        value: string;
        color: string;
      }>;
      description: string;
    }> = [{
      class: ".m-hidden-sm",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }],
      description: "Hidden on sm and above"
    }, {
      class: ".m-hidden-md",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }],
      description: "Hidden on md and above"
    }, {
      class: ".m-hidden-lg",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }],
      description: "Hidden on lg and above"
    }, {
      class: ".m-hidden-xl",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }],
      description: "Hidden on xl and above"
    }, {
      class: ".m-hidden-2xl",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }],
      description: "Hidden on 2xl and above"
    }, {
      class: ".m-visible-sm",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }],
      description: "Visible on sm and above"
    }, {
      class: ".m-visible-md",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }],
      description: "Visible on md and above"
    }, {
      class: ".m-visible-lg",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }],
      description: "Visible on lg and above"
    }, {
      class: ".m-visible-xl",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }],
      description: "Visible on xl and above"
    }, {
      class: ".m-visible-2xl",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }],
      description: "Visible on 2xl and above"
    }, {
      class: ".m-hidden-max-sm",
      states: [{
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Hidden below sm"
    }, {
      class: ".m-hidden-max-md",
      states: [{
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Hidden below md"
    }, {
      class: ".m-hidden-max-lg",
      states: [{
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Hidden below lg"
    }, {
      class: ".m-hidden-max-xl",
      states: [{
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Hidden below xl"
    }, {
      class: ".m-hidden-max-2xl",
      states: [{
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "display: none (applied)",
        color: hiddenColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Hidden below 2xl"
    }, {
      class: ".m-visible-max-sm",
      states: [{
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Visible below sm"
    }, {
      class: ".m-visible-max-md",
      states: [{
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Visible below md"
    }, {
      class: ".m-visible-max-lg",
      states: [{
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Visible below lg"
    }, {
      class: ".m-visible-max-xl",
      states: [{
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Visible below xl"
    }, {
      class: ".m-visible-max-2xl",
      states: [{
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "visibility: visible (applied)",
        color: visibleColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Visible below 2xl"
    }, {
      class: ".m-invisible-sm",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }],
      description: "Invisible on sm and above"
    }, {
      class: ".m-invisible-md",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }],
      description: "Invisible on md and above"
    }, {
      class: ".m-invisible-lg",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }],
      description: "Invisible on lg and above"
    }, {
      class: ".m-invisible-xl",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }],
      description: "Invisible on xl and above"
    }, {
      class: ".m-invisible-2xl",
      states: [{
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }],
      description: "Invisible on 2xl and above"
    }, {
      class: ".m-invisible-max-sm",
      states: [{
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Invisible below sm"
    }, {
      class: ".m-invisible-max-md",
      states: [{
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Invisible below md"
    }, {
      class: ".m-invisible-max-lg",
      states: [{
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Invisible below lg"
    }, {
      class: ".m-invisible-max-xl",
      states: [{
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Invisible below xl"
    }, {
      class: ".m-invisible-max-2xl",
      states: [{
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "visibility: hidden (applied)",
        color: hiddenColor
      }, {
        value: "No effect (inherits parent)",
        color: noEffectColor
      }],
      description: "Invisible below 2xl"
    }];
    for (const item of classStates) {
      const row = document.createElement("tr");
      row.style.borderBottom = "1px solid var(--color-border)";

      // Class name cell
      const classCell = document.createElement("td");
      classCell.style.padding = "12px 8px";
      classCell.style.fontFamily = "monospace";
      classCell.style.fontSize = "13px";
      classCell.style.fontWeight = "600";
      classCell.style.backgroundColor = "var(--color-bg-muted)";
      classCell.innerHTML = \`\${item.class}<br><span style="font-size: 11px; color: var(--color-bg-muted); font-weight: normal;">\${item.description}</span>\`;
      row.append(classCell);

      // State cells
      for (const state of item.states) {
        const stateCell = document.createElement("td");
        stateCell.style.padding = "12px 8px";
        stateCell.style.textAlign = "center";
        stateCell.style.fontSize = "12px";
        stateCell.style.fontFamily = "monospace";
        stateCell.style.backgroundColor = state.color;
        stateCell.style.fontWeight = "500";
        stateCell.textContent = state.value;
        row.append(stateCell);
      }
      tbody.append(row);
    }
    table.append(tbody);
    container.append(info, table);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const table = canvasElement.querySelector("table");
    await expect(table).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source}}};const B=["Hidden","Visible","Invisible","ScreenReaderOnly","ResponsiveDemo","MatrixDemo"];export{b as Hidden,u as Invisible,x as MatrixDemo,y as ResponsiveDemo,h as ScreenReaderOnly,m as Visible,B as __namedExportsOrder,S as default};
