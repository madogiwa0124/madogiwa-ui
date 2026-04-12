import{n as e}from"./chunk-BneVvdWh.js";var t,n,r,i,a,o,s,c,l,u,d;e((()=>{({expect:t,within:n}=__STORYBOOK_MODULE_TEST__),r={title:`Utils/Visibility`,tags:[`autodocs`],argTypes:{variant:{control:{type:`select`},options:[`hidden`,`visible`,`invisible`,`sr-only`,`hidden-sm`,`hidden-md`,`hidden-lg`,`hidden-xl`,`hidden-2xl`,`visible-sm`,`visible-md`,`visible-lg`,`visible-xl`,`visible-2xl`,`hidden-max-sm`,`hidden-max-md`,`hidden-max-lg`,`hidden-max-xl`,`hidden-max-2xl`,`visible-max-sm`,`visible-max-md`,`visible-max-lg`,`visible-max-xl`,`visible-max-2xl`],description:`The visibility utility class variant`}},parameters:{docs:{description:{component:`
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
        `}},a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},i=e=>{let t=document.createElement(`div`);t.style.padding=`20px`,t.style.fontFamily=`system-ui, sans-serif`;let n=document.createElement(`p`);n.style.marginBottom=`16px`,n.style.padding=`12px`,n.style.backgroundColor=`var(--color-bg-subtle)`,n.style.borderRadius=`4px`,n.style.fontSize=`14px`;let r=document.createElement(`div`);r.className=`m-${e}`,r.style.padding=`20px`,r.style.backgroundColor=`var(--color-primary)`,r.style.color=`var(--color-text-inverse)`,r.style.borderRadius=`4px`,r.style.fontWeight=`bold`,r.textContent=`Element with .m-${e}`;let i=document.createElement(`div`);return i.style.padding=`20px`,i.style.backgroundColor=`var(--color-secondary)`,i.style.color=`var(--color-text-inverse)`,i.style.borderRadius=`4px`,i.style.fontWeight=`bold`,i.style.marginTop=`16px`,i.textContent=`Reference element (always visible)`,e.includes(`-sm`)?n.textContent=`Resize your browser to see the effect at 640px (sm) breakpoint`:e.includes(`-md`)?n.textContent=`Resize your browser to see the effect at 768px (md) breakpoint`:e.includes(`-lg`)?n.textContent=`Resize your browser to see the effect at 1024px (lg) breakpoint`:e.includes(`-xl`)?n.textContent=`Resize your browser to see the effect at 1280px (xl) breakpoint`:e.includes(`-2xl`)?n.textContent=`Resize your browser to see the effect at 1536px (2xl) breakpoint`:e===`sr-only`?n.textContent=`The element is hidden visually but accessible to screen readers`:e===`invisible`?n.textContent=`The element is invisible but still takes up space in the layout`:n.textContent=`The element is ${e}`,t.append(n,r,i),t},a={parameters:{docs:{description:{story:`Hides the element completely with display: none.`}}},render:()=>i(`hidden`),args:{variant:`hidden`},play:async({canvasElement:e})=>{await t(n(e).getByText(/Element with .m-hidden/)).toHaveClass(`m-hidden`)}},o={parameters:{docs:{description:{story:`Sets visibility: visible on the element.`}}},render:()=>i(`visible`),args:{variant:`visible`},play:async({canvasElement:e})=>{await t(n(e).getByText(/Element with .m-visible/)).toHaveClass(`m-visible`)}},s={parameters:{docs:{description:{story:`Makes the element invisible with visibility: hidden but maintains its space in the layout.`}}},render:()=>i(`invisible`),args:{variant:`invisible`},play:async({canvasElement:e})=>{await t(n(e).getByText(/Element with .m-invisible/)).toHaveClass(`m-invisible`)}},c={parameters:{docs:{description:{story:`Hides the element visually but keeps it accessible to screen readers for improved accessibility.`}}},render:()=>i(`sr-only`),args:{variant:`sr-only`},play:async({canvasElement:e})=>{await t(n(e).getByText(/Element with .m-sr-only/)).toHaveClass(`m-sr-only`)}},l={parameters:{docs:{description:{story:`Demonstrates multiple responsive visibility utilities working together. Resize the viewport to see different elements appear and disappear at different breakpoints.`}}},render:()=>{let e=document.createElement(`div`);e.style.padding=`20px`,e.style.fontFamily=`system-ui, sans-serif`;let t=document.createElement(`p`);t.style.marginBottom=`16px`,t.style.padding=`12px`,t.style.backgroundColor=`var(--color-bg-subtle)`,t.style.borderRadius=`4px`,t.style.fontSize=`14px`,t.textContent=`Resize your browser to see different elements appear at different breakpoints`;let n=(e,t,n)=>{let r=document.createElement(`div`);return r.className=e,r.style.padding=`16px`,r.style.backgroundColor=n,r.style.color=`var(--color-text-inverse)`,r.style.borderRadius=`4px`,r.style.marginBottom=`12px`,r.style.fontWeight=`bold`,r.textContent=t,r},r=[n(`m-visible-max-sm`,`< 640px (Mobile only)`,`#f44336`),n(`m-visible-sm m-hidden-md`,`640px - 767px (Small only)`,`#e91e63`),n(`m-visible-md m-hidden-lg`,`768px - 1023px (Medium only)`,`#9c27b0`),n(`m-visible-lg m-hidden-xl`,`1024px - 1279px (Large only)`,`#673ab7`),n(`m-visible-xl m-hidden-2xl`,`1280px - 1535px (XL only)`,`#3f51b5`),n(`m-visible-2xl`,`≥ 1536px (2XL and above)`,`#2196f3`)];return e.append(t,...r),e},play:async({canvasElement:e})=>{await t(n(e).getByText(/Mobile only/)).toHaveClass(`m-visible-max-sm`)}},u={parameters:{docs:{description:{story:`Matrix view showing which classes are visible or hidden at different breakpoints. Resize your browser to see the current breakpoint highlighted.`}}},render:()=>{let e=document.createElement(`div`);e.style.padding=`20px`,e.style.fontFamily=`system-ui, sans-serif`,e.style.overflowX=`auto`;let t=`var(--color-bg-muted)`,n=`var(--color-primary)`,r=`var(--color-danger)`,i=document.createElement(`p`);i.style.marginBottom=`20px`,i.style.padding=`12px`,i.style.backgroundColor=`var(--color-bg-muted)`,i.style.borderRadius=`4px`,i.style.fontSize=`14px`,i.innerHTML=`
      <strong>Legend:</strong>
      <span style="background: ${n}; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">display: block</span>
      <span style="background: ${r}; padding: 2px 8px; border-radius: 3px; margin: 0 4px;">display: none</span>
      <span style="background: var(--color-default); padding: 2px 8px; border-radius: 3px; margin: 0 4px;">visibility: hidden</span>
      <br>
      <strong>Current breakpoint:</strong> <span id="current-breakpoint" style="font-weight: bold; color: var(--color-primary);"></span>
    `;let a=()=>{let e=window.innerWidth,t=`< 40rem (640px) - xs`;e>=1536?t=`≥ 96rem (1536px) - 2xl`:e>=1280?t=`≥ 80rem (1280px) - xl`:e>=1024?t=`≥ 64rem (1024px) - lg`:e>=768?t=`≥ 48rem (768px) - md`:e>=640&&(t=`≥ 40rem (640px) - sm`);let n=document.querySelector(`#current-breakpoint`);n&&(n.textContent=t)};a(),window.addEventListener(`resize`,a);let o=document.createElement(`table`);o.style.width=`100%`,o.style.borderCollapse=`collapse`,o.style.marginTop=`16px`,o.style.backgroundColor=`var(--color-bg-default)`,o.style.boxShadow=`0 2px 4px rgba(0,0,0,0.1)`;let s=document.createElement(`thead`),c=document.createElement(`tr`);c.style.backgroundColor=`var(--color-bg-muted)`;for(let e of[`Class`,`< 40rem
(640px)`,`≥ 40rem
(640px)`,`≥ 48rem
(768px)`,`≥ 64rem
(1024px)`,`≥ 80rem
(1280px)`,`≥ 96rem
(1536px)`]){let t=document.createElement(`th`);t.style.padding=`12px 8px`,t.style.borderBottom=`2px solid var(--color-border)`,t.style.fontSize=`12px`,t.style.fontWeight=`bold`,t.style.textAlign=e===`Class`?`left`:`center`,t.style.whiteSpace=`pre-line`,t.textContent=e,c.append(t)}s.append(c),o.append(s);let l=document.createElement(`tbody`),u=[{class:`.m-hidden-sm`,states:[{value:`No effect (inherits parent)`,color:t},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r}],description:`Hidden on sm and above`},{class:`.m-hidden-md`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r}],description:`Hidden on md and above`},{class:`.m-hidden-lg`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r}],description:`Hidden on lg and above`},{class:`.m-hidden-xl`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r}],description:`Hidden on xl and above`},{class:`.m-hidden-2xl`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`display: none (applied)`,color:r}],description:`Hidden on 2xl and above`},{class:`.m-visible-sm`,states:[{value:`No effect (inherits parent)`,color:t},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n}],description:`Visible on sm and above`},{class:`.m-visible-md`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n}],description:`Visible on md and above`},{class:`.m-visible-lg`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n}],description:`Visible on lg and above`},{class:`.m-visible-xl`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n}],description:`Visible on xl and above`},{class:`.m-visible-2xl`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`visibility: visible (applied)`,color:n}],description:`Visible on 2xl and above`},{class:`.m-hidden-max-sm`,states:[{value:`display: none (applied)`,color:r},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Hidden below sm`},{class:`.m-hidden-max-md`,states:[{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Hidden below md`},{class:`.m-hidden-max-lg`,states:[{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Hidden below lg`},{class:`.m-hidden-max-xl`,states:[{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Hidden below xl`},{class:`.m-hidden-max-2xl`,states:[{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`display: none (applied)`,color:r},{value:`No effect (inherits parent)`,color:t}],description:`Hidden below 2xl`},{class:`.m-visible-max-sm`,states:[{value:`visibility: visible (applied)`,color:n},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Visible below sm`},{class:`.m-visible-max-md`,states:[{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Visible below md`},{class:`.m-visible-max-lg`,states:[{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Visible below lg`},{class:`.m-visible-max-xl`,states:[{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Visible below xl`},{class:`.m-visible-max-2xl`,states:[{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`visibility: visible (applied)`,color:n},{value:`No effect (inherits parent)`,color:t}],description:`Visible below 2xl`},{class:`.m-invisible-sm`,states:[{value:`No effect (inherits parent)`,color:t},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r}],description:`Invisible on sm and above`},{class:`.m-invisible-md`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r}],description:`Invisible on md and above`},{class:`.m-invisible-lg`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r}],description:`Invisible on lg and above`},{class:`.m-invisible-xl`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r}],description:`Invisible on xl and above`},{class:`.m-invisible-2xl`,states:[{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`visibility: hidden (applied)`,color:r}],description:`Invisible on 2xl and above`},{class:`.m-invisible-max-sm`,states:[{value:`visibility: hidden (applied)`,color:r},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Invisible below sm`},{class:`.m-invisible-max-md`,states:[{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Invisible below md`},{class:`.m-invisible-max-lg`,states:[{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Invisible below lg`},{class:`.m-invisible-max-xl`,states:[{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`No effect (inherits parent)`,color:t},{value:`No effect (inherits parent)`,color:t}],description:`Invisible below xl`},{class:`.m-invisible-max-2xl`,states:[{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`visibility: hidden (applied)`,color:r},{value:`No effect (inherits parent)`,color:t}],description:`Invisible below 2xl`}];for(let e of u){let t=document.createElement(`tr`);t.style.borderBottom=`1px solid var(--color-border)`;let n=document.createElement(`td`);n.style.padding=`12px 8px`,n.style.fontFamily=`monospace`,n.style.fontSize=`13px`,n.style.fontWeight=`600`,n.style.backgroundColor=`var(--color-bg-muted)`,n.innerHTML=`${e.class}<br><span style="font-size: 11px; color: var(--color-bg-muted); font-weight: normal;">${e.description}</span>`,t.append(n);for(let n of e.states){let e=document.createElement(`td`);e.style.padding=`12px 8px`,e.style.textAlign=`center`,e.style.fontSize=`12px`,e.style.fontFamily=`monospace`,e.style.backgroundColor=n.color,e.style.fontWeight=`500`,e.textContent=n.value,t.append(e)}l.append(t)}return o.append(l),e.append(i,o),e},play:async({canvasElement:e})=>{await t(e.querySelector(`table`)).toBeInTheDocument()}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Hidden`,`Visible`,`Invisible`,`ScreenReaderOnly`,`ResponsiveDemo`,`MatrixDemo`]}))();export{a as Hidden,s as Invisible,u as MatrixDemo,l as ResponsiveDemo,c as ScreenReaderOnly,o as Visible,d as __namedExportsOrder,r as default};