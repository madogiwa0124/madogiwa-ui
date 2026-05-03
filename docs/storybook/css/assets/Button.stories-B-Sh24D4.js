import{n as e}from"./chunk-DnJy8xQt.js";var t,n=e((()=>{t=(e={})=>{let{label:t=`Button`,variant:n=``,outline:r=!1,block:i=!1,disabled:a=!1,iconOnly:o=!1,onClick:s=null,transition:c=!1}=e,l=document.createElement(`button`);return l.textContent=t,l.type=`button`,l.classList.add(`m-btn`),r&&l.classList.add(`--outline`),n&&l.classList.add(`--${n}`),i&&l.classList.add(`--block`),e.rounded&&l.classList.add(`--rounded`),o&&l.classList.add(`--icon-only`),o&&l.classList.add(`--icon-only`),c&&l.classList.add(`--transition`),a&&(l.disabled=!0,l.classList.add(`disabled`)),s&&typeof s==`function`&&l.addEventListener(`click`,s),l}})),r,i,a,o,s,c,l,u,d,f,p;e((()=>{n(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/Button`,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`The label text for the component`},variant:{control:{type:`select`},options:[`default`,`primary`,`secondary`,`tertiary`],description:`The variant style for the component`},outline:{control:`boolean`,description:`The outline style modifier for the component`},block:{control:`boolean`,description:`The block width modifier for the component`},disabled:{control:`boolean`,description:`The disabled state for the component`},transition:{control:`boolean`,description:`The transition animation modifier for the component`},rounded:{control:`boolean`,description:`The rounded corners modifier for the component`},iconOnly:{control:`boolean`,description:`The icon-only layout modifier for the component`}},parameters:{docs:{description:{component:`
### Overview

The Button component provides interactive elements for user actions with various styling options and states. It implements BEM + CSS Nesting pattern with the m- prefix for Madogiwa UI.

### Usage

Use buttons for triggering actions, submitting forms, or navigating within your application. Select appropriate variants to establish visual hierarchy and communicate action importance. Primary buttons should be used for main actions, secondary for supporting actions, and tertiary for subtle interactions.

### Example code

\`\`\`html
<button class="m-btn">Default Button</button>
<button class="m-btn --primary">Primary Button</button>
<button class="m-btn --secondary --outline">Secondary Outline</button>
<button class="m-btn --tertiary --transition">Tertiary with Transition</button>
<button class="m-btn --block">Full Width Button</button>
<button class="m-btn --primary --rounded --icon-only">🔍</button>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-btn | .--primary | Apply primary color variant for main actions |
| .m-btn | .--secondary | Apply secondary color variant for secondary actions |
| .m-btn | .--tertiary | Apply tertiary color variant for subtle actions |
| .m-btn | .--outline | Apply outline style with transparent background |
| .m-btn | .--block | Make button full width (display: block) |
| .m-btn | .--rounded | Apply fully rounded corners using --radius-full |
| .m-btn | .--icon-only | Reduce padding for icon-only buttons |
| .m-btn | .--transition | Enable smooth hover/focus transitions |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-btn | --btn-color-default | var(--color-default) | Default variant background color |
| .m-btn | --btn-color-primary | var(--color-primary) | Primary variant background color |
| .m-btn | --btn-color-secondary | var(--color-secondary) | Secondary variant background color |
| .m-btn | --btn-color-tertiary | var(--color-tertiary) | Tertiary variant background color |
| .m-btn | --btn-text-color-default | var(--color-text-default) | Default variant text color |
| .m-btn | --btn-text-color-primary | var(--color-text-inverse) | Primary variant text color |
| .m-btn | --btn-text-color-secondary | var(--color-text-inverse) | Secondary variant text color |
| .m-btn | --btn-text-color-tertiary | var(--color-text-default) | Tertiary variant text color |
| .m-btn | --btn-outline-text-color-factor | 0.5 | Multiplier for deriving outline text colors |
| .m-btn | --btn-outline-text-color-default | var(--color-default) | Outline default variant text color |
| .m-btn | --btn-outline-text-color-primary | var(--color-primary) | Outline primary variant text color |
| .m-btn | --btn-outline-text-color-secondary | var(--color-secondary) | Outline secondary variant text color |
| .m-btn | --btn-outline-text-color-tertiary | var(--color-tertiary) | Outline tertiary variant text color |
| .m-btn | --btn-darker-brightness | 90% | Darker brightness filter value |
| .m-btn | --btn-lighter-brightness | 110% | Hover brightness filter value |
| .m-btn | --btn-disabled-opacity | 0.65 | Disabled state opacity |
| .m-btn | --btn-padding-x | var(--spacing-6) | Horizontal padding |
| .m-btn | --btn-padding-y | var(--spacing-2) | Vertical padding |
| .m-btn | --btn-box-shadow | var(--shadow-sm) | Button shadow |
| .m-btn | --btn-border-radius | var(--radius-md) | Default border radius |
| .m-btn | --btn-rounded-border-radius | var(--radius-full) | Rounded modifier border radius |
| .m-btn | --btn-border-width | var(--border-width) | Border width |
| .m-btn | --btn-active-transform | translateY(1px) | Active state transform |
| .m-btn | --btn-transition-duration | 0.2s | Transition animation duration |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use --transition modifier selectively to respect user motion preferences
- Icon-only buttons require proper accessible labels or aria-label attributes
- Ensure sufficient color contrast for outline variants in your color scheme
- Block buttons should be used sparingly to maintain visual hierarchy
        `}}}},a={parameters:{docs:{description:{story:`Basic button with default styling. Demonstrates the base button component without any modifiers.`}}},render:e=>t(e),args:{label:`Button`,outline:!1,variant:`default`,block:!1,disabled:!1,rounded:!1,iconOnly:!1,transition:!1},play:async({canvasElement:e})=>{let t=e;await r(t).not.toBeNull();let n=t.querySelector(`button`);await r(n).not.toBeNull(),await r(n).toHaveClass(`m-btn`),await r(n).toHaveTextContent(`Button`),await r(n).not.toBeDisabled()}},o={parameters:{docs:{description:{story:`Button color variants using design system colors. Shows primary, secondary, and tertiary variants for different action hierarchies.`}}},render:e=>{let n=document.createElement(`div`);n.className=`d-flex`,n.style.gap=`10px`;for(let r of[`primary`,`secondary`,`tertiary`]){let i=t({label:r,variant:r,transition:e.transition??!1});n.append(i)}return n},args:{},play:async({canvasElement:e})=>{let t=e;await r(t).not.toBeNull();let n=t.querySelectorAll(`button`),i=[`primary`,`secondary`,`tertiary`];await r(n).toHaveLength(i.length);for(let[e,t]of n.entries()){let n=i[e];n&&(await r(t).toHaveClass(`m-btn`),await r(t).toHaveClass(`--${n}`),await r(t).toHaveTextContent(n))}}},s={parameters:{docs:{description:{story:`Outline button variants with transparent backgrounds and colored borders. Provides subtle styling for secondary actions.`}}},render:e=>{let n=document.createElement(`div`);n.className=`d-flex`,n.style.gap=`10px`;for(let r of[`default`,`primary`,`secondary`,`tertiary`]){let i=t({label:r,variant:r,outline:!0,transition:e.transition??!1});n.append(i)}return n},args:{},play:async({canvasElement:e})=>{let t=e;await r(t).not.toBeNull();let n=t.querySelectorAll(`button`),i=[`default`,`primary`,`secondary`,`tertiary`];await r(n).toHaveLength(i.length);for(let[e,t]of n.entries()){let n=i[e];n&&(await r(t).toHaveClass(`m-btn`),await r(t).toHaveClass(`--${n}`),await r(t).toHaveClass(`--outline`),await r(t).toHaveTextContent(n))}}},c={parameters:{docs:{description:{story:`Full-width block button that spans the entire container width. Useful for forms and mobile layouts.`}}},render:()=>{let e=document.createElement(`div`);e.style.width=`100%`;let n=t({label:`Block Button`,variant:`primary`,block:!0});return e.append(n),e},play:async({canvasElement:e})=>{let t=e;await r(t).not.toBeNull();let n=t.querySelector(`button`);await r(n).not.toBeNull(),await r(n).toHaveClass(`m-btn`),await r(n).toHaveClass(`--primary`),await r(n).toHaveClass(`--block`),await r(n).toHaveTextContent(`Block Button`)}},l={parameters:{docs:{description:{story:`Buttons with fully rounded corners using --radius-full. Shows both filled and outline variants.`}}},render:()=>{let e=document.createElement(`div`);e.className=`d-flex`,e.style.gap=`10px`;let n=t({label:`Rounded Button`,variant:`primary`,rounded:!0});e.append(n);let r=t({label:`Rounded Outline`,variant:`primary`,outline:!0,rounded:!0});return e.append(r),e},play:async({canvasElement:e})=>{let t=e;await r(t).not.toBeNull();let n=t.querySelectorAll(`button`);await r(n).toHaveLength(2);for(let e of n)await r(e).toHaveClass(`m-btn`),await r(e).toHaveClass(`--primary`),await r(e).toHaveClass(`--rounded`);await r(n[1]).toHaveClass(`--outline`)}},u={parameters:{docs:{description:{story:`Comparison between normal and disabled button states. Disabled buttons have reduced opacity and are non-interactive.`}}},render:()=>{let e=document.createElement(`div`);e.className=`d-flex`,e.style.gap=`10px`;let n=t({label:`Normal Button`,variant:`primary`}),r=t({label:`Disabled Button`,variant:`primary`,disabled:!0});return e.append(n),e.append(r),e},play:async({canvasElement:e})=>{let t=e;await r(t).not.toBeNull();let n=t.querySelectorAll(`button`);await r(n).toHaveLength(2);let i=n[0],a=n[1];await r(i).toHaveClass(`m-btn`),await r(i).toHaveTextContent(`Normal Button`),await r(i).not.toBeDisabled(),await r(a).toHaveClass(`m-btn`),await r(a).toHaveTextContent(`Disabled Button`),await r(a).toBeDisabled()}},d={parameters:{docs:{description:{story:`Button with an icon and text. Icons are automatically aligned and spaced using CSS gap property.`}}},render:()=>{let e=document.createElement(`div`);e.className=`d-flex`,e.style.gap=`10px`;let n=t({label:`Button with Icon`,variant:`primary`}),r=document.createElement(`span`);return r.className=`icon`,r.textContent=`+`,n.prepend(r),e.append(n),e},play:async({canvasElement:e})=>{let t=e;await r(t).not.toBeNull();let n=t.querySelector(`button`),i=n?.querySelector(`.icon`);await r(n).not.toBeNull(),await r(n).toHaveClass(`m-btn`),await r(n).toHaveClass(`--primary`),await r(n).toHaveTextContent(`Button with Icon`),await r(i).not.toBeNull(),await r(i).toHaveTextContent(`+`)}},f={parameters:{docs:{description:{story:`Icon-only button with reduced padding for compact layouts. Remember to provide accessible labels.`}}},render:()=>{let e=document.createElement(`div`);e.className=`d-flex`,e.style.gap=`10px`;let n=t({label:``,variant:`primary`,iconOnly:!0}),r=document.createElement(`span`);return r.className=`icon`,r.textContent=`+`,n.prepend(r),e.append(n),e},play:async({canvasElement:e})=>{let t=e;await r(t).not.toBeNull();let n=t.querySelector(`button`),i=n?.querySelector(`.icon`);await r(n).not.toBeNull(),await r(n).toHaveClass(`m-btn`),await r(n).toHaveClass(`--primary`),await r(n).toHaveClass(`--icon-only`),await r(i).not.toBeNull(),await r(i).toHaveTextContent(`+`)}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Basic button with default styling. Demonstrates the base button component without any modifiers."
      }
    }
  },
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
    await expect(canvas).not.toBeNull();
    const button = canvas.querySelector("button");
    await expect(button).not.toBeNull();
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveTextContent("Button");
    await expect(button).not.toBeDisabled();
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Button color variants using design system colors. Shows primary, secondary, and tertiary variants for different action hierarchies."
      }
    }
  },
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
    await expect(canvas).not.toBeNull();
    const buttons = canvas.querySelectorAll("button");
    const expectedVariants = ["primary", "secondary", "tertiary"];
    await expect(buttons).toHaveLength(expectedVariants.length);
    for (const [index, button] of buttons.entries()) {
      const variant = expectedVariants[index];
      if (variant) {
        await expect(button).toHaveClass("m-btn");
        await expect(button).toHaveClass(\`--\${variant}\`);
        await expect(button).toHaveTextContent(variant);
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Outline button variants with transparent backgrounds and colored borders. Provides subtle styling for secondary actions."
      }
    }
  },
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
    await expect(canvas).not.toBeNull();
    const buttons = canvas.querySelectorAll("button");
    const expectedVariants = ["default", "primary", "secondary", "tertiary"];
    await expect(buttons).toHaveLength(expectedVariants.length);
    for (const [index, button] of buttons.entries()) {
      const variant = expectedVariants[index];
      if (variant) {
        await expect(button).toHaveClass("m-btn");
        await expect(button).toHaveClass(\`--\${variant}\`);
        await expect(button).toHaveClass("--outline");
        await expect(button).toHaveTextContent(variant);
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Full-width block button that spans the entire container width. Useful for forms and mobile layouts."
      }
    }
  },
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
    await expect(canvas).not.toBeNull();
    const button = canvas.querySelector("button");
    await expect(button).not.toBeNull();
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveClass("--primary");
    await expect(button).toHaveClass("--block");
    await expect(button).toHaveTextContent("Block Button");
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Buttons with fully rounded corners using --radius-full. Shows both filled and outline variants."
      }
    }
  },
  render: () => {
    const container = document.createElement("div");
    container.className = "d-flex";
    container.style.gap = "10px";
    const button = createButton({
      label: "Rounded Button",
      variant: "primary",
      rounded: true
    });
    container.append(button);
    const outlineButton = createButton({
      label: "Rounded Outline",
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
    await expect(canvas).not.toBeNull();
    const buttons = canvas.querySelectorAll("button");
    await expect(buttons).toHaveLength(2);
    for (const button of buttons) {
      await expect(button).toHaveClass("m-btn");
      await expect(button).toHaveClass("--primary");
      await expect(button).toHaveClass("--rounded");
    }

    // Check that second button has outline modifier
    await expect(buttons[1]).toHaveClass("--outline");
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Comparison between normal and disabled button states. Disabled buttons have reduced opacity and are non-interactive."
      }
    }
  },
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
    await expect(canvas).not.toBeNull();
    const buttons = canvas.querySelectorAll("button");
    await expect(buttons).toHaveLength(2);
    const normalButton = buttons[0];
    const disabledButton = buttons[1];

    // Test normal button
    await expect(normalButton).toHaveClass("m-btn");
    await expect(normalButton).toHaveTextContent("Normal Button");
    await expect(normalButton).not.toBeDisabled();

    // Test disabled button
    await expect(disabledButton).toHaveClass("m-btn");
    await expect(disabledButton).toHaveTextContent("Disabled Button");
    await expect(disabledButton).toBeDisabled();
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Button with an icon and text. Icons are automatically aligned and spaced using CSS gap property."
      }
    }
  },
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
    await expect(canvas).not.toBeNull();
    const button = canvas.querySelector("button");
    const icon = button?.querySelector(".icon");
    await expect(button).not.toBeNull();
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveClass("--primary");
    await expect(button).toHaveTextContent("Button with Icon");
    await expect(icon).not.toBeNull();
    await expect(icon).toHaveTextContent("+");
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Icon-only button with reduced padding for compact layouts. Remember to provide accessible labels."
      }
    }
  },
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
    icon.textContent = "+"; // Using simple text icon here
    buttonWithIcon.prepend(icon);
    container.append(buttonWithIcon);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    await expect(canvas).not.toBeNull();
    const button = canvas.querySelector("button");
    const icon = button?.querySelector(".icon");
    await expect(button).not.toBeNull();
    await expect(button).toHaveClass("m-btn");
    await expect(button).toHaveClass("--primary");
    await expect(button).toHaveClass("--icon-only");
    await expect(icon).not.toBeNull();
    await expect(icon).toHaveTextContent("+");
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Variants`,`OutlineButtons`,`BlockButton`,`RoundedButton`,`DisabledButton`,`WithIconButton`,`IconOnlyButton`]}))();export{c as BlockButton,a as Default,u as DisabledButton,f as IconOnlyButton,s as OutlineButtons,l as RoundedButton,o as Variants,d as WithIconButton,p as __namedExportsOrder,i as default};