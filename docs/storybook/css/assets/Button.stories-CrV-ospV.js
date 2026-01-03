const l=(n={})=>{const{label:a="Button",variant:t="",outline:o=!1,block:s=!1,disabled:i=!1,iconOnly:c=!1,onClick:x=null,transition:w=!1}=n,r=document.createElement("button");return r.textContent=a,r.type="button",r.classList.add("m-btn"),o&&r.classList.add("--outline"),t&&r.classList.add(`--${t}`),s&&r.classList.add("--block"),n.rounded&&r.classList.add("--rounded"),c&&r.classList.add("--icon-only"),c&&r.classList.add("--icon-only"),w&&r.classList.add("--transition"),i&&(r.disabled=!0,r.classList.add("disabled")),x&&typeof x=="function"&&r.addEventListener("click",x),r},{expect:e}=__STORYBOOK_MODULE_TEST__,B={title:"Components/Button",tags:["autodocs"],argTypes:{label:{control:"text",description:"The label text for the component"},variant:{control:{type:"select"},options:["default","primary","secondary","tertiary"],description:"The variant style for the component"},outline:{control:"boolean",description:"The outline style modifier for the component"},block:{control:"boolean",description:"The block width modifier for the component"},disabled:{control:"boolean",description:"The disabled state for the component"},transition:{control:"boolean",description:"The transition animation modifier for the component"},rounded:{control:"boolean",description:"The rounded corners modifier for the component"},iconOnly:{control:"boolean",description:"The icon-only layout modifier for the component"}},parameters:{docs:{description:{component:`
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
| .m-btn | --btn-outline-text-color-default | color(from var(--btn-color-default) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline default variant text color |
| .m-btn | --btn-outline-text-color-primary | color(from var(--btn-color-primary) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline primary variant text color |
| .m-btn | --btn-outline-text-color-secondary | color(from var(--btn-color-secondary) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline secondary variant text color |
| .m-btn | --btn-outline-text-color-tertiary | color(from var(--btn-color-tertiary) srgb calc(r * 0.55) calc(g * 0.55) calc(b * 0.55)) | Outline tertiary variant text color |
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
        `}}}},u={parameters:{docs:{description:{story:"Basic button with default styling. Demonstrates the base button component without any modifiers."}}},render:n=>l(n),args:{label:"Button",outline:!1,variant:"default",block:!1,disabled:!1,rounded:!1,iconOnly:!1,transition:!1},play:async({canvasElement:n})=>{const a=n;await e(a).not.toBeNull();const t=a.querySelector("button");await e(t).not.toBeNull(),await e(t).toHaveClass("m-btn"),await e(t).toHaveTextContent("Button"),await e(t).not.toBeDisabled()}},d={parameters:{docs:{description:{story:"Button color variants using design system colors. Shows primary, secondary, and tertiary variants for different action hierarchies."}}},render:n=>{const a=document.createElement("div");a.className="d-flex",a.style.gap="10px";const t=["primary","secondary","tertiary"];for(const o of t){const s=l({label:o,variant:o,transition:n.transition??!1});a.append(s)}return a},args:{},play:async({canvasElement:n})=>{const a=n;await e(a).not.toBeNull();const t=a.querySelectorAll("button"),o=["primary","secondary","tertiary"];await e(t).toHaveLength(o.length);for(const[s,i]of t.entries()){const c=o[s];c&&(await e(i).toHaveClass("m-btn"),await e(i).toHaveClass(`--${c}`),await e(i).toHaveTextContent(c))}}},b={parameters:{docs:{description:{story:"Outline button variants with transparent backgrounds and colored borders. Provides subtle styling for secondary actions."}}},render:n=>{const a=document.createElement("div");a.className="d-flex",a.style.gap="10px";const t=["default","primary","secondary","tertiary"];for(const o of t){const s=l({label:o,variant:o,outline:!0,transition:n.transition??!1});a.append(s)}return a},args:{},play:async({canvasElement:n})=>{const a=n;await e(a).not.toBeNull();const t=a.querySelectorAll("button"),o=["default","primary","secondary","tertiary"];await e(t).toHaveLength(o.length);for(const[s,i]of t.entries()){const c=o[s];c&&(await e(i).toHaveClass("m-btn"),await e(i).toHaveClass(`--${c}`),await e(i).toHaveClass("--outline"),await e(i).toHaveTextContent(c))}}},p={parameters:{docs:{description:{story:"Full-width block button that spans the entire container width. Useful for forms and mobile layouts."}}},render:()=>{const n=document.createElement("div");n.style.width="100%";const a=l({label:"Block Button",variant:"primary",block:!0});return n.append(a),n},play:async({canvasElement:n})=>{const a=n;await e(a).not.toBeNull();const t=a.querySelector("button");await e(t).not.toBeNull(),await e(t).toHaveClass("m-btn"),await e(t).toHaveClass("--primary"),await e(t).toHaveClass("--block"),await e(t).toHaveTextContent("Block Button")}},m={parameters:{docs:{description:{story:"Buttons with fully rounded corners using --radius-full. Shows both filled and outline variants."}}},render:()=>{const n=document.createElement("div");n.className="d-flex",n.style.gap="10px";const a=l({label:"Rounded Button",variant:"primary",rounded:!0});n.append(a);const t=l({label:"Rounded Outline",variant:"primary",outline:!0,rounded:!0});return n.append(t),n},play:async({canvasElement:n})=>{const a=n;await e(a).not.toBeNull();const t=a.querySelectorAll("button");await e(t).toHaveLength(2);for(const o of t)await e(o).toHaveClass("m-btn"),await e(o).toHaveClass("--primary"),await e(o).toHaveClass("--rounded");await e(t[1]).toHaveClass("--outline")}},y={parameters:{docs:{description:{story:"Comparison between normal and disabled button states. Disabled buttons have reduced opacity and are non-interactive."}}},render:()=>{const n=document.createElement("div");n.className="d-flex",n.style.gap="10px";const a=l({label:"Normal Button",variant:"primary"}),t=l({label:"Disabled Button",variant:"primary",disabled:!0});return n.append(a),n.append(t),n},play:async({canvasElement:n})=>{const a=n;await e(a).not.toBeNull();const t=a.querySelectorAll("button");await e(t).toHaveLength(2);const o=t[0],s=t[1];await e(o).toHaveClass("m-btn"),await e(o).toHaveTextContent("Normal Button"),await e(o).not.toBeDisabled(),await e(s).toHaveClass("m-btn"),await e(s).toHaveTextContent("Disabled Button"),await e(s).toBeDisabled()}},v={parameters:{docs:{description:{story:"Button with an icon and text. Icons are automatically aligned and spaced using CSS gap property."}}},render:()=>{const n=document.createElement("div");n.className="d-flex",n.style.gap="10px";const a=l({label:"Button with Icon",variant:"primary"}),t=document.createElement("span");return t.className="icon",t.textContent="+",a.prepend(t),n.append(a),n},play:async({canvasElement:n})=>{const a=n;await e(a).not.toBeNull();const t=a.querySelector("button"),o=t?.querySelector(".icon");await e(t).not.toBeNull(),await e(t).toHaveClass("m-btn"),await e(t).toHaveClass("--primary"),await e(t).toHaveTextContent("Button with Icon"),await e(o).not.toBeNull(),await e(o).toHaveTextContent("+")}},f={parameters:{docs:{description:{story:"Icon-only button with reduced padding for compact layouts. Remember to provide accessible labels."}}},render:()=>{const n=document.createElement("div");n.className="d-flex",n.style.gap="10px";const a=l({label:"",variant:"primary",iconOnly:!0}),t=document.createElement("span");return t.className="icon",t.textContent="+",a.prepend(t),n.append(a),n},play:async({canvasElement:n})=>{const a=n;await e(a).not.toBeNull();const t=a.querySelector("button"),o=t?.querySelector(".icon");await e(t).not.toBeNull(),await e(t).toHaveClass("m-btn"),await e(t).toHaveClass("--primary"),await e(t).toHaveClass("--icon-only"),await e(o).not.toBeNull(),await e(o).toHaveTextContent("+")}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const h=["Default","Variants","OutlineButtons","BlockButton","RoundedButton","DisabledButton","WithIconButton","IconOnlyButton"];export{p as BlockButton,u as Default,y as DisabledButton,f as IconOnlyButton,b as OutlineButtons,m as RoundedButton,d as Variants,v as WithIconButton,h as __namedExportsOrder,B as default};
