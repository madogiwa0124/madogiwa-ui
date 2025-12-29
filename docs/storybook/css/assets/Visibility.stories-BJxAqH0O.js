const{expect:d,within:p}=__STORYBOOK_MODULE_TEST__,E={title:"Utils/Visibility",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["hidden","visible","invisible","sr-only","hidden-sm","hidden-md","hidden-lg","hidden-xl","hidden-2xl","visible-sm","visible-md","visible-lg","visible-xl","visible-2xl","hidden-max-sm","hidden-max-md","hidden-max-lg","hidden-max-xl","hidden-max-2xl","visible-max-sm","visible-max-md","visible-max-lg","visible-max-xl","visible-max-2xl"],description:"The visibility utility class variant"}},parameters:{docs:{description:{component:`
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
        `}},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},x=n=>{const i=document.createElement("div");i.style.padding="20px",i.style.fontFamily="system-ui, sans-serif";const e=document.createElement("p");e.style.marginBottom="16px",e.style.padding="12px",e.style.backgroundColor="#e3f2fd",e.style.borderRadius="4px",e.style.fontSize="14px";const t=document.createElement("div");t.className=`m-${n}`,t.style.padding="20px",t.style.backgroundColor="#4caf50",t.style.color="white",t.style.borderRadius="4px",t.style.fontWeight="bold",t.textContent=`Element with .m-${n}`;const o=document.createElement("div");return o.style.padding="20px",o.style.backgroundColor="#2196f3",o.style.color="white",o.style.borderRadius="4px",o.style.fontWeight="bold",o.style.marginTop="16px",o.textContent="Reference element (always visible)",n.includes("-sm")?e.textContent="Resize your browser to see the effect at 640px (sm) breakpoint":n.includes("-md")?e.textContent="Resize your browser to see the effect at 768px (md) breakpoint":n.includes("-lg")?e.textContent="Resize your browser to see the effect at 1024px (lg) breakpoint":n.includes("-xl")?e.textContent="Resize your browser to see the effect at 1280px (xl) breakpoint":n.includes("-2xl")?e.textContent="Resize your browser to see the effect at 1536px (2xl) breakpoint":n==="sr-only"?e.textContent="The element is hidden visually but accessible to screen readers":n==="invisible"?e.textContent="The element is invisible but still takes up space in the layout":e.textContent=`The element is ${n}`,i.append(e,t,o),i},v={parameters:{docs:{description:{story:"Hides the element completely with display: none."}}},render:()=>x("hidden"),args:{variant:"hidden"},play:async({canvasElement:n})=>{const e=p(n).getByText(/Element with .m-hidden/);await d(e).toHaveClass("m-hidden")}},b={parameters:{docs:{description:{story:"Sets visibility: visible on the element."}}},render:()=>x("visible"),args:{variant:"visible"},play:async({canvasElement:n})=>{const e=p(n).getByText(/Element with .m-visible/);await d(e).toHaveClass("m-visible")}},m={parameters:{docs:{description:{story:"Makes the element invisible with visibility: hidden but maintains its space in the layout."}}},render:()=>x("invisible"),args:{variant:"invisible"},play:async({canvasElement:n})=>{const e=p(n).getByText(/Element with .m-invisible/);await d(e).toHaveClass("m-invisible")}},u={parameters:{docs:{description:{story:"Hides the element visually but keeps it accessible to screen readers for improved accessibility."}}},render:()=>x("sr-only"),args:{variant:"sr-only"},play:async({canvasElement:n})=>{const e=p(n).getByText(/Element with .m-sr-only/);await d(e).toHaveClass("m-sr-only")}},h={parameters:{docs:{description:{story:"Demonstrates multiple responsive visibility utilities working together. Resize the viewport to see different elements appear and disappear at different breakpoints."}}},render:()=>{const n=document.createElement("div");n.style.padding="20px",n.style.fontFamily="system-ui, sans-serif";const i=document.createElement("p");i.style.marginBottom="16px",i.style.padding="12px",i.style.backgroundColor="#e3f2fd",i.style.borderRadius="4px",i.style.fontSize="14px",i.textContent="Resize your browser to see different elements appear at different breakpoints";const e=(o,f,g)=>{const s=document.createElement("div");return s.className=o,s.style.padding="16px",s.style.backgroundColor=g,s.style.color="white",s.style.borderRadius="4px",s.style.marginBottom="12px",s.style.fontWeight="bold",s.textContent=f,s},t=[e("m-visible-max-sm","< 640px (Mobile only)","#f44336"),e("m-visible-sm m-hidden-md","640px - 767px (Small only)","#e91e63"),e("m-visible-md m-hidden-lg","768px - 1023px (Medium only)","#9c27b0"),e("m-visible-lg m-hidden-xl","1024px - 1279px (Large only)","#673ab7"),e("m-visible-xl m-hidden-2xl","1280px - 1535px (XL only)","#3f51b5"),e("m-visible-2xl","≥ 1536px (2XL and above)","#2196f3")];return n.append(i,...t),n},play:async({canvasElement:n})=>{const e=p(n).getByText(/Mobile only/);await d(e).toHaveClass("m-visible-max-sm")}},y={parameters:{docs:{description:{story:"Matrix view showing which classes are visible (🟢) or hidden (🔴) at different breakpoints. Resize your browser to see the current breakpoint highlighted."}}},render:()=>{const n=document.createElement("div");n.style.padding="20px",n.style.fontFamily="system-ui, sans-serif",n.style.overflowX="auto";const i=document.createElement("p");i.style.marginBottom="20px",i.style.padding="12px",i.style.backgroundColor="#e3f2fd",i.style.borderRadius="4px",i.style.fontSize="14px",i.innerHTML=`
      <strong>Legend:</strong>
      <span style="background: #c8e6c9; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">display: block</span>
      <span style="background: #ffcdd2; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">display: none</span>
      <span style="background: #e0e0e0; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">visibility: hidden</span>
      <br>
      <strong>Current breakpoint:</strong> <span id="current-breakpoint" style="font-weight: bold; color: #1976d2;"></span>
    `;const e=()=>{const a=window.innerWidth;let l="< 40rem (640px) - xs";a>=1536?l="≥ 96rem (1536px) - 2xl":a>=1280?l="≥ 80rem (1280px) - xl":a>=1024?l="≥ 64rem (1024px) - lg":a>=768?l="≥ 48rem (768px) - md":a>=640&&(l="≥ 40rem (640px) - sm");const r=document.querySelector("#current-breakpoint");r&&(r.textContent=l)};e(),window.addEventListener("resize",e);const t=document.createElement("table");t.style.width="100%",t.style.borderCollapse="collapse",t.style.marginTop="16px",t.style.backgroundColor="white",t.style.boxShadow="0 2px 4px rgba(0,0,0,0.1)";const o=document.createElement("thead"),f=document.createElement("tr");f.style.backgroundColor="#f5f5f5";const g=["Class",`< 40rem
(640px)`,`≥ 40rem
(640px)`,`≥ 48rem
(768px)`,`≥ 64rem
(1024px)`,`≥ 80rem
(1280px)`,`≥ 96rem
(1536px)`];for(const a of g){const l=document.createElement("th");l.style.padding="12px 8px",l.style.borderBottom="2px solid #ddd",l.style.fontSize="12px",l.style.fontWeight="bold",l.style.textAlign=a==="Class"?"left":"center",l.style.whiteSpace="pre-line",l.textContent=a,f.append(l)}o.append(f),t.append(o);const s=document.createElement("tbody"),w=[{class:".m-hidden-sm",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"}],description:"Hidden on sm and above"},{class:".m-hidden-md",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"}],description:"Hidden on md and above"},{class:".m-hidden-lg",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"}],description:"Hidden on lg and above"},{class:".m-hidden-xl",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"}],description:"Hidden on xl and above"},{class:".m-hidden-2xl",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"display: none (applied)",color:"#ffcdd2"}],description:"Hidden on 2xl and above"},{class:".m-visible-sm",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"}],description:"Visible on sm and above"},{class:".m-visible-md",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"}],description:"Visible on md and above"},{class:".m-visible-lg",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"}],description:"Visible on lg and above"},{class:".m-visible-xl",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"}],description:"Visible on xl and above"},{class:".m-visible-2xl",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"visibility: visible (applied)",color:"#c8e6c9"}],description:"Visible on 2xl and above"},{class:".m-hidden-max-sm",states:[{value:"display: none (applied)",color:"#ffcdd2"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Hidden below sm"},{class:".m-hidden-max-md",states:[{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Hidden below md"},{class:".m-hidden-max-lg",states:[{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Hidden below lg"},{class:".m-hidden-max-xl",states:[{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Hidden below xl"},{class:".m-hidden-max-2xl",states:[{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"display: none (applied)",color:"#ffcdd2"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Hidden below 2xl"},{class:".m-visible-max-sm",states:[{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Visible below sm"},{class:".m-visible-max-md",states:[{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Visible below md"},{class:".m-visible-max-lg",states:[{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Visible below lg"},{class:".m-visible-max-xl",states:[{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Visible below xl"},{class:".m-visible-max-2xl",states:[{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"visibility: visible (applied)",color:"#c8e6c9"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Visible below 2xl"},{class:".m-invisible-sm",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"}],description:"Invisible on sm and above"},{class:".m-invisible-md",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"}],description:"Invisible on md and above"},{class:".m-invisible-lg",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"}],description:"Invisible on lg and above"},{class:".m-invisible-xl",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"}],description:"Invisible on xl and above"},{class:".m-invisible-2xl",states:[{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"visibility: hidden (applied)",color:"#e0e0e0"}],description:"Invisible on 2xl and above"},{class:".m-invisible-max-sm",states:[{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Invisible below sm"},{class:".m-invisible-max-md",states:[{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Invisible below md"},{class:".m-invisible-max-lg",states:[{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Invisible below lg"},{class:".m-invisible-max-xl",states:[{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"No effect (inherits parent)",color:"#f5f5f5"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Invisible below xl"},{class:".m-invisible-max-2xl",states:[{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"visibility: hidden (applied)",color:"#e0e0e0"},{value:"No effect (inherits parent)",color:"#f5f5f5"}],description:"Invisible below 2xl"}];for(const a of w){const l=document.createElement("tr");l.style.borderBottom="1px solid #eee";const r=document.createElement("td");r.style.padding="12px 8px",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="600",r.innerHTML=`${a.class}<br><span style="font-size: 11px; color: #666; font-weight: normal;">${a.description}</span>`,l.append(r);for(const N of a.states){const c=document.createElement("td");c.style.padding="12px 8px",c.style.textAlign="center",c.style.fontSize="12px",c.style.fontFamily="monospace",c.style.backgroundColor=N.color,c.style.fontWeight="500",c.textContent=N.value,l.append(c)}s.append(l)}return t.append(s),n.append(i,t),n},play:async({canvasElement:n})=>{const i=n.querySelector("table");await d(i).toBeInTheDocument()}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    info.style.backgroundColor = "#e3f2fd";
    info.style.borderRadius = "4px";
    info.style.fontSize = "14px";
    info.textContent = "Resize your browser to see different elements appear at different breakpoints";
    const createBox = (className: string, label: string, color: string): HTMLDivElement => {
      const box = document.createElement("div");
      box.className = className;
      box.style.padding = "16px";
      box.style.backgroundColor = color;
      box.style.color = "white";
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Matrix view showing which classes are visible (🟢) or hidden (🔴) at different breakpoints. Resize your browser to see the current breakpoint highlighted."
      }
    }
  },
  render: () => {
    const container = document.createElement("div");
    container.style.padding = "20px";
    container.style.fontFamily = "system-ui, sans-serif";
    container.style.overflowX = "auto";
    const info = document.createElement("p");
    info.style.marginBottom = "20px";
    info.style.padding = "12px";
    info.style.backgroundColor = "#e3f2fd";
    info.style.borderRadius = "4px";
    info.style.fontSize = "14px";
    info.innerHTML = \`
      <strong>Legend:</strong>
      <span style="background: #c8e6c9; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">display: block</span>
      <span style="background: #ffcdd2; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">display: none</span>
      <span style="background: #e0e0e0; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">visibility: hidden</span>
      <br>
      <strong>Current breakpoint:</strong> <span id="current-breakpoint" style="font-weight: bold; color: #1976d2;"></span>
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
    table.style.backgroundColor = "white";
    table.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";

    // Table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.style.backgroundColor = "#f5f5f5";
    const headers = ["Class", "< 40rem\\n(640px)", "≥ 40rem\\n(640px)", "≥ 48rem\\n(768px)", "≥ 64rem\\n(1024px)", "≥ 80rem\\n(1280px)", "≥ 96rem\\n(1536px)"];
    for (const header of headers) {
      const th = document.createElement("th");
      th.style.padding = "12px 8px";
      th.style.borderBottom = "2px solid #ddd";
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
        color: "#f5f5f5"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }],
      description: "Hidden on sm and above"
    }, {
      class: ".m-hidden-md",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }],
      description: "Hidden on md and above"
    }, {
      class: ".m-hidden-lg",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }],
      description: "Hidden on lg and above"
    }, {
      class: ".m-hidden-xl",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }],
      description: "Hidden on xl and above"
    }, {
      class: ".m-hidden-2xl",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }],
      description: "Hidden on 2xl and above"
    }, {
      class: ".m-visible-sm",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }],
      description: "Visible on sm and above"
    }, {
      class: ".m-visible-md",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }],
      description: "Visible on md and above"
    }, {
      class: ".m-visible-lg",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }],
      description: "Visible on lg and above"
    }, {
      class: ".m-visible-xl",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }],
      description: "Visible on xl and above"
    }, {
      class: ".m-visible-2xl",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }],
      description: "Visible on 2xl and above"
    }, {
      class: ".m-hidden-max-sm",
      states: [{
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Hidden below sm"
    }, {
      class: ".m-hidden-max-md",
      states: [{
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Hidden below md"
    }, {
      class: ".m-hidden-max-lg",
      states: [{
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Hidden below lg"
    }, {
      class: ".m-hidden-max-xl",
      states: [{
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Hidden below xl"
    }, {
      class: ".m-hidden-max-2xl",
      states: [{
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "display: none (applied)",
        color: "#ffcdd2"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Hidden below 2xl"
    }, {
      class: ".m-visible-max-sm",
      states: [{
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Visible below sm"
    }, {
      class: ".m-visible-max-md",
      states: [{
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Visible below md"
    }, {
      class: ".m-visible-max-lg",
      states: [{
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Visible below lg"
    }, {
      class: ".m-visible-max-xl",
      states: [{
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Visible below xl"
    }, {
      class: ".m-visible-max-2xl",
      states: [{
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "visibility: visible (applied)",
        color: "#c8e6c9"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Visible below 2xl"
    }, {
      class: ".m-invisible-sm",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }],
      description: "Invisible on sm and above"
    }, {
      class: ".m-invisible-md",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }],
      description: "Invisible on md and above"
    }, {
      class: ".m-invisible-lg",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }],
      description: "Invisible on lg and above"
    }, {
      class: ".m-invisible-xl",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }],
      description: "Invisible on xl and above"
    }, {
      class: ".m-invisible-2xl",
      states: [{
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }],
      description: "Invisible on 2xl and above"
    }, {
      class: ".m-invisible-max-sm",
      states: [{
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Invisible below sm"
    }, {
      class: ".m-invisible-max-md",
      states: [{
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Invisible below md"
    }, {
      class: ".m-invisible-max-lg",
      states: [{
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Invisible below lg"
    }, {
      class: ".m-invisible-max-xl",
      states: [{
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Invisible below xl"
    }, {
      class: ".m-invisible-max-2xl",
      states: [{
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "visibility: hidden (applied)",
        color: "#e0e0e0"
      }, {
        value: "No effect (inherits parent)",
        color: "#f5f5f5"
      }],
      description: "Invisible below 2xl"
    }];
    for (const item of classStates) {
      const row = document.createElement("tr");
      row.style.borderBottom = "1px solid #eee";

      // Class name cell
      const classCell = document.createElement("td");
      classCell.style.padding = "12px 8px";
      classCell.style.fontFamily = "monospace";
      classCell.style.fontSize = "13px";
      classCell.style.fontWeight = "600";
      classCell.innerHTML = \`\${item.class}<br><span style="font-size: 11px; color: #666; font-weight: normal;">\${item.description}</span>\`;
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
}`,...y.parameters?.docs?.source}}};const C=["Hidden","Visible","Invisible","ScreenReaderOnly","ResponsiveDemo","MatrixDemo"];export{v as Hidden,m as Invisible,y as MatrixDemo,h as ResponsiveDemo,u as ScreenReaderOnly,b as Visible,C as __namedExportsOrder,E as default};
