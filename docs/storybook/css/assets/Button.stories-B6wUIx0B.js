const c=(t={})=>{const{label:e="Button",variant:n="",outline:o=!1,block:r=!1,disabled:i=!1,iconOnly:x=!1,onClick:f=null,transition:B=!1}=t,s=document.createElement("button");return s.textContent=e,s.type="button",s.classList.add("m-btn"),o&&s.classList.add("--outline"),n&&s.classList.add(`--${n}`),r&&s.classList.add("--block"),t.rounded&&s.classList.add("--rounded"),x&&s.classList.add("--icon-only"),x&&s.classList.add("--icon-only"),B&&s.classList.add("--transition"),i&&(s.disabled=!0,s.classList.add("disabled")),f&&typeof f=="function"&&s.addEventListener("click",f),s},{expect:a}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Button",tags:["autodocs"],argTypes:{label:{control:"text",description:"Button text content"},variant:{control:{type:"select"},options:["default","primary","secondary","tertiary"],description:"Button color variant using design system colors"},outline:{control:"boolean",description:"Apply outline style (--outline modifier)"},block:{control:"boolean",description:"Make button full width (--block modifier)"},disabled:{control:"boolean",description:"Disable button interaction"},transition:{control:"boolean",description:"Enable smooth transitions (--transition modifier)"},rounded:{control:"boolean",description:"Apply fully rounded corners (--rounded modifier)"},iconOnly:{control:"boolean",description:"Icon-only button with reduced padding (--icon-only modifier)"}},parameters:{docs:{description:{component:`
### Overview

Flexible button component implementing BEM + CSS Nesting pattern with m- prefix for Madogiwa UI. Supports multiple design system variants, interactive states, and layout modifiers for comprehensive user interface needs.

### Usage

Use buttons for primary actions, form submissions, navigation triggers, and interactive elements. Apply appropriate variants to establish visual hierarchy and provide clear user feedback. Consider accessibility requirements when implementing icon-only buttons and ensure sufficient color contrast for all variants.

### Modifiers

Describe **all modifiers** defined in this component.

| Target | Name | Description |
| ------ | ---- | ----------- |
| .m-btn | .--primary | Apply primary color variant |
| .m-btn | .--secondary | Apply secondary color variant |
| .m-btn | .--tertiary | Apply tertiary color variant |
| .m-btn | .--outline | Apply outline style with transparent background |
| .m-btn | .--block | Make button full width (display: block) |
| .m-btn | .--rounded | Apply fully rounded corners |
| .m-btn | .--icon-only | Reduce padding for icon-only buttons |
| .m-btn | .--transition | Enable smooth hover/focus transitions |

### CSS Variables

Describe **all CSS variables** defined in this component.

| Name | Default | Description |
| ---- | ------- | ----------- |
| --btn-color-default | var(--color-default) | Default variant background color |
| --btn-color-primary | var(--color-primary) | Primary variant background color |
| --btn-color-secondary | var(--color-secondary) | Secondary variant background color |
| --btn-color-tertiary | var(--color-tertiary) | Tertiary variant background color |
| --btn-text-color-default | var(--color-text) | Default variant text color |
| --btn-text-color-primary | var(--color-text-light) | Primary variant text color |
| --btn-text-color-secondary | var(--color-text-light) | Secondary variant text color |
| --btn-text-color-tertiary | var(--color-text) | Tertiary variant text color |
| --btn-outline-text-color-default | color(from var(--btn-color-default) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline default variant text color |
| --btn-outline-text-color-primary | color(from var(--btn-color-primary) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline primary variant text color |
| --btn-outline-text-color-secondary | color(from var(--btn-color-secondary) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline secondary variant text color |
| --btn-outline-text-color-tertiary | color(from var(--btn-color-tertiary) srgb calc(r * 0.55) calc(g * 0.55) calc(b * 0.55)) | Outline tertiary variant text color |
| --btn-darker-brightness | 90% | Darker brightness filter value |
| --btn-lighter-brightness | 110% | Hover brightness filter value |
| --btn-disabled-opacity | 0.65 | Disabled state opacity |
| --btn-padding-x | var(--spacing-6) | Horizontal padding |
| --btn-padding-y | var(--spacing-2) | Vertical padding |
| --btn-box-shadow | var(--shadow-sm) | Button shadow |
| --btn-border-radius | var(--radius-md) | Default border radius |
| --btn-rounded-border-radius | var(--radius-full) | Rounded modifier border radius |
| --btn-border-width | var(--border-width) | Border width |
| --btn-active-transform | translateY(1px) | Active state transform |
| --btn-transition-duration | 0.2s | Transition animation duration |

### Caution

- Use --transition modifier selectively to respect user motion preferences.
- Icon-only buttons require proper accessible labels or aria-label attributes.
- Ensure sufficient color contrast for outline variants in your color scheme.
- Block buttons should be used sparingly to maintain visual hierarchy.
        `}}}},l={render:t=>c(t),args:{label:"Button",outline:!1,variant:"default",block:!1,disabled:!1,rounded:!1,iconOnly:!1,transition:!1},play:async({canvasElement:t})=>{const n=t.querySelector("button");await a(n).not.toBeDisabled(),await a(n).toHaveTextContent("Button"),await a(n).toHaveClass("m-btn")}},u={render:t=>{const e=document.createElement("div");e.className="d-flex",e.style.gap="10px";const n=["primary","secondary","tertiary"];for(const o of n){const r=c({label:o,variant:o,transition:t.transition??!1});e.append(r)}return e},args:{},play:async({canvasElement:t})=>{const n=t.querySelectorAll("button");for(const[o,r]of n.entries()){const i=["primary","secondary","tertiary"][o];i&&(await a(r).toHaveClass("m-btn"),await a(r).toHaveClass(`--${i}`),await a(r).toHaveTextContent(i))}}},d={render:t=>{const e=document.createElement("div");e.className="d-flex",e.style.gap="10px";const n=["default","primary","secondary","tertiary"];for(const o of n){const r=c({label:o,variant:o,outline:!0,transition:t.transition??!1});e.append(r)}return e},args:{},play:async({canvasElement:t})=>{const n=t.querySelectorAll("button");for(const[o,r]of n.entries()){const i=["default","primary","secondary","tertiary"][o];i&&(await a(r).toHaveClass("m-btn"),await a(r).toHaveClass(`--${i}`),await a(r).toHaveClass("--outline"),await a(r).toHaveTextContent(i))}}},b={render:()=>{const t=document.createElement("div");t.style.width="100%";const e=c({label:"Block Button",variant:"primary",block:!0});return t.append(e),t},play:async({canvasElement:t})=>{const n=t.querySelector("button");await a(n).toHaveClass("m-btn"),await a(n).toHaveStyle({display:"block"})}},p={render:()=>{const t=document.createElement("div"),e=c({label:"Block Button",variant:"primary",rounded:!0});t.append(e);const n=c({label:"Block Button",variant:"primary",outline:!0,rounded:!0});return t.append(n),t},play:async({canvasElement:t})=>{const n=t.querySelectorAll("button");for(const o of n)await a(o).toHaveClass("m-btn"),await a(o).toHaveStyle({borderRadius:"9999px"})}},m={render:()=>{const t=document.createElement("div");t.className="d-flex",t.style.gap="10px";const e=c({label:"Normal Button",variant:"primary"}),n=c({label:"Disabled Button",variant:"primary",disabled:!0});return t.append(e),t.append(n),t},play:async({canvasElement:t})=>{const n=t.querySelectorAll("button"),o=n[1];await a(o).toBeDisabled();const r=n[0];await a(r).not.toBeDisabled()}},v={render:()=>{const t=document.createElement("div");t.className="d-flex",t.style.gap="10px";const e=c({label:"Button with Icon",variant:"primary"}),n=document.createElement("span");return n.className="icon",n.textContent="+",e.prepend(n),t.append(e),t},play:async({canvasElement:t})=>{const n=t.querySelector("button"),o=n?.querySelector(".icon");await a(n).toHaveClass("m-btn"),await a(n).toHaveTextContent("Button with Icon"),await a(o).not.toBeNull(),await a(o).toHaveTextContent("+")}},y={render:()=>{const t=document.createElement("div");t.className="d-flex",t.style.gap="10px";const e=c({label:"",variant:"primary",iconOnly:!0}),n=document.createElement("span");return n.className="icon",n.textContent="",n.textContent="+",e.prepend(n),t.append(e),t},play:async({canvasElement:t})=>{const n=t.querySelector("button"),o=n?.querySelector(".icon");await a(n).toHaveClass("m-btn"),await a(n).toHaveClass("--icon-only"),await a(o).not.toBeNull(),await a(o).toHaveTextContent("+")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: ButtonProperties) => {
    return createButton(args);
  },
  args: {
    label: "Button",
    outline: false,
    variant: "default",
    block: false,
    disabled: false,
    rounded: false,
    iconOnly: false,
    transition: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const button = canvas.querySelector("button");
    await expect(button).not.toBeDisabled();
    await expect(button).toHaveTextContent("Button");
    await expect(button).toHaveClass("m-btn");
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: ButtonProperties) => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";
    const variants = ["primary", "secondary", "tertiary"] as const;
    for (const variant of variants) {
      const button = createButton({
        label: variant,
        variant,
        transition: args.transition ?? false
      });
      container.append(button);
    }
    return container;
  },
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const buttons = canvas.querySelectorAll("button");
    for (const [index, button] of buttons.entries()) {
      const variant = ["primary", "secondary", "tertiary"][index];
      if (variant) {
        await expect(button).toHaveClass("m-btn");
        await expect(button).toHaveClass(\`--\${variant}\`);
        await expect(button).toHaveTextContent(variant);
      }
    }
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: ButtonProperties) => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";
    const variants = ["default", "primary", "secondary", "tertiary"] as const;
    for (const variant of variants) {
      const button = createButton({
        label: variant,
        variant,
        outline: true,
        transition: args.transition ?? false
      });
      container.append(button);
    }
    return container;
  },
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const buttons = canvas.querySelectorAll("button");
    for (const [index, button] of buttons.entries()) {
      const variant = ["default", "primary", "secondary", "tertiary"][index];
      if (variant) {
        await expect(button).toHaveClass("m-btn");
        await expect(button).toHaveClass(\`--\${variant}\`);
        await expect(button).toHaveClass("--outline");
        await expect(button).toHaveTextContent(variant);
      }
    }
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.width = "100%";
    const button = createButton({
      label: "Block Button",
      variant: "primary",
      block: true
    });
    container.append(button);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const button = canvas.querySelector("button");
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveStyle({
      display: "block"
    });
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    const button = createButton({
      label: "Block Button",
      variant: "primary",
      rounded: true
    });
    container.append(button);
    const outlineButton = createButton({
      label: "Block Button",
      variant: "primary",
      outline: true,
      rounded: true
    });
    container.append(outlineButton);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const buttons = canvas.querySelectorAll("button");

    // Verify that rounded buttons are styled correctly
    for (const button of buttons) {
      await expect(button).toHaveClass("m-btn");
      await expect(button).toHaveStyle({
        borderRadius: "9999px" // Example: Specify extremely rounded corners
      });
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";
    const normalButton = createButton({
      label: "Normal Button",
      variant: "primary"
    });
    const disabledButton = createButton({
      label: "Disabled Button",
      variant: "primary",
      disabled: true
    });
    container.append(normalButton);
    container.append(disabledButton);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const buttons = canvas.querySelectorAll("button");
    const disabledButton = buttons[1];
    await expect(disabledButton).toBeDisabled();
    const normalButton = buttons[0];
    await expect(normalButton).not.toBeDisabled();
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";
    const buttonWithIcon = createButton({
      label: "Button with Icon",
      variant: "primary"
    });

    // Add icon
    const icon = document.createElement("span");
    icon.className = "icon"; // Icon class name
    icon.textContent = "+"; // Using simple text icon here
    buttonWithIcon.prepend(icon);
    container.append(buttonWithIcon);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const button = canvas.querySelector("button");
    const icon = button?.querySelector(".icon");
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveTextContent("Button with Icon");
    await expect(icon).not.toBeNull();
    await expect(icon).toHaveTextContent("+");
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";
    const buttonWithIcon = createButton({
      label: "",
      variant: "primary",
      iconOnly: true
    });

    // Add icon
    const icon = document.createElement("span");
    icon.className = "icon"; // Icon class name
    icon.textContent = "";
    icon.textContent = "+"; // Using simple text icon here
    buttonWithIcon.prepend(icon);
    container.append(buttonWithIcon);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const button = canvas.querySelector("button");
    const icon = button?.querySelector(".icon");
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveClass("--icon-only");
    await expect(icon).not.toBeNull();
    await expect(icon).toHaveTextContent("+");
  }
}`,...y.parameters?.docs?.source}}};const w=["Default","Variants","OutlineButtons","BlockButton","RoundedButton","DisabledButton","WithIconButton","IconOnlyButton"];export{b as BlockButton,l as Default,m as DisabledButton,y as IconOnlyButton,d as OutlineButtons,p as RoundedButton,u as Variants,v as WithIconButton,w as __namedExportsOrder,g as default};
