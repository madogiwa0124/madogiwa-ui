const{expect:c,userEvent:s}=__STORYBOOK_MODULE_TEST__,p={title:"Components/Checkbox",tags:["autodocs"],argTypes:{label:{control:{type:"text"},description:"The label text for the component"},checked:{control:{type:"boolean"},description:"The checked state for the component"},disabled:{control:{type:"boolean"},description:"The disabled state for the component"},name:{control:{type:"text"},description:"The name attribute for the component"},value:{control:{type:"text"},description:"The value attribute for the component"}},parameters:{docs:{description:{component:`
### Overview

The Checkbox component provides a custom-styled checkbox input that maintains accessibility while offering visual consistency across different browsers and platforms.

### Usage

Use checkboxes for multi-select options where users can choose multiple items, boolean settings and preferences, accepting terms and conditions, or toggling feature states. Checkboxes are ideal when users need to make independent yes/no decisions for multiple options.

### Example code

\`\`\`html
<input type="checkbox" class="m-checkbox" id="example" name="example" value="example-value">
<label for="example">Example checkbox</label>

<input type="checkbox" class="m-checkbox" id="checked" name="checked" value="checked-value" checked>
<label for="checked">Pre-checked checkbox</label>

<input type="checkbox" class="m-checkbox" id="disabled" name="disabled" value="disabled-value" disabled>
<label for="disabled">Disabled checkbox</label>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

This component does not have modifiers - styling is handled through states.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-checkbox | --checkbox-size | 1em | Size of the checkbox |
| .m-checkbox | --checkbox-border-color | var(--color-text-default) | Border color |
| .m-checkbox | --checkbox-mark-border | 2px solid transparent | Border style for the checkmark |
| .m-checkbox | --checkbox-mark-position-top | 0 | Top position of the checkmark |
| .m-checkbox | --checkbox-mark-position-left | 20% | Left position of the checkmark |
| .m-checkbox | --checkbox-bg-color | var(--color-bg-muted) | Background color |
| .m-checkbox | --checkbox-border-radius | 0.2em | Border radius |
| .m-checkbox | --checkbox-lighter-brightness | 150% | Brightness on hover/focus |
| .m-checkbox | --checkbox-disabled-opacity | 0.65 | Opacity when disabled |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Ensure sufficient contrast between checkbox and background for visibility
- Use clear and concise labels for better usability
- Maintain consistent sizing and spacing in forms
- Test across different browsers for consistent appearance
- Always associate labels with inputs for accessibility
        `}},a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},l={render:a=>{const e=document.createElement("div"),t=document.createElement("input");t.type="checkbox",t.classList.add("m-checkbox");const o=a.checked?!!a.checked:!1,n=a.disabled?!!a.disabled:!1,i=a.name?String(a.name):"checkbox",k=a.value?String(a.value):"checkbox";return t.name=i,t.value=k,t.checked=o,t.disabled=n,e.append(t),e},args:{checked:!1,disabled:!1,name:"example",value:"example-value"},play:async({canvasElement:a,args:e})=>{const t=a.querySelector("input[type='checkbox']");await c(t).toBeInTheDocument(),await c(t).toHaveClass("m-checkbox"),await c(t).toHaveAttribute("name",String(e.name)),await c(t).toHaveAttribute("value",String(e.value));const o=!!e.checked,n=!!e.disabled;await c(t.checked).toBe(o),n?await c(t).toBeDisabled():(await c(t).not.toBeDisabled(),await s.click(t),await c(t.checked).toBe(!o),await s.click(t),await c(t.checked).toBe(o));const i=globalThis.getComputedStyle(t);await c(i.appearance).toBe("none"),await c(i.cursor).toBe(n?"not-allowed":"pointer")}},r={render:a=>{const e=document.createElement("div"),t=document.createElement("input");return t.type="checkbox",t.classList.add("m-checkbox"),t.name="checkbox-checked",t.value="checked-value",t.checked=!0,e.append(t),e},args:{checked:!0},play:async({canvasElement:a})=>{const e=a.querySelector("input[type='checkbox']");await c(e).toBeInTheDocument(),await c(e).toHaveClass("m-checkbox"),await c(e).toBeChecked(),await c(e).not.toBeDisabled(),await s.click(e),await c(e).not.toBeChecked(),await s.click(e),await c(e).toBeChecked();const t=globalThis.getComputedStyle(e);await c(t.backgroundColor).not.toBe("rgba(0, 0, 0, 0)")},parameters:{docs:{description:{story:"Checkbox in checked state by default."}}}},d={render:()=>{const a=document.createElement("div"),e=document.createElement("input");return e.type="checkbox",e.classList.add("m-checkbox"),e.name="checkbox-disabled",e.value="disabled-value",e.disabled=!0,a.append(e),a},play:async({canvasElement:a})=>{const e=a.querySelector("input[type='checkbox']");await c(e).toBeInTheDocument(),await c(e).toHaveClass("m-checkbox"),await c(e).not.toBeChecked(),await c(e).toBeDisabled();const t=e.checked;await s.click(e),await c(e.checked).toBe(t);const o=globalThis.getComputedStyle(e);await c(o.cursor).toBe("not-allowed"),await c(Number.parseFloat(o.opacity)).toBeLessThan(1)},parameters:{docs:{description:{story:"Disabled checkbox that cannot be interacted with."}}}},b={render:()=>{const a=document.createElement("div"),e=document.createElement("input");return e.type="checkbox",e.classList.add("m-checkbox"),e.name="checkbox-checked-disabled",e.value="checked-disabled-value",e.checked=!0,e.disabled=!0,a.append(e),a},play:async({canvasElement:a})=>{const e=a.querySelector("input[type='checkbox']");await c(e).toBeInTheDocument(),await c(e).toHaveClass("m-checkbox"),await c(e).toBeChecked(),await c(e).toBeDisabled(),await s.click(e),await c(e).toBeChecked();const t=globalThis.getComputedStyle(e);await c(t.cursor).toBe("not-allowed"),await c(Number.parseFloat(t.opacity)).toBeLessThan(1)},parameters:{docs:{description:{story:"Disabled checkbox in checked state."}}}},h={render:a=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="0.5rem";const t=document.createElement("input");t.type="checkbox",t.classList.add("m-checkbox"),t.id="checkbox-with-label",t.name="agreement",t.value="agreed";const o=a.label?String(a.label):"I agree to the terms of service",n=document.createElement("label");return n.htmlFor="checkbox-with-label",n.textContent=o,n.style.cursor="pointer",n.style.userSelect="none",e.append(t,n),e},args:{label:"I agree to the terms of service"},play:async({canvasElement:a,args:e})=>{const t=a.querySelector("input[type='checkbox']"),o=a.querySelector("label");await c(t).toBeInTheDocument(),await c(o).toBeInTheDocument(),await c(o).toHaveAttribute("for","checkbox-with-label"),await c(o).toHaveTextContent(String(e.label)),await c(t.id).toBe("checkbox-with-label"),await c(t).not.toBeChecked(),await s.click(o),await c(t).toBeChecked(),await s.click(o),await c(t).not.toBeChecked(),o.focus(),await s.keyboard(" "),await c(t).toBeChecked();const n=globalThis.getComputedStyle(o);await c(n.cursor).toBe("pointer")},parameters:{docs:{description:{story:"Checkbox with associated label for improved accessibility and usability."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-checkbox");
    const checked = args["checked"] ? Boolean(args["checked"]) : false;
    const disabled = args["disabled"] ? Boolean(args["disabled"]) : false;
    const name = args["name"] ? String(args["name"]) : "checkbox";
    const value = args["value"] ? String(args["value"]) : "checkbox";
    checkbox.name = name;
    checkbox.value = value;
    checkbox.checked = checked;
    checkbox.disabled = disabled;
    container.append(checkbox);
    return container;
  },
  args: {
    checked: false,
    disabled: false,
    name: "example",
    value: "example-value"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const checkbox = canvasElement.querySelector("input[type='checkbox']") as HTMLInputElement;

    // Test basic properties
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).toHaveClass("m-checkbox");
    await expect(checkbox).toHaveAttribute("name", String(args["name"]));
    await expect(checkbox).toHaveAttribute("value", String(args["value"]));

    // Test initial states
    const initialChecked = Boolean(args["checked"]);
    const isDisabled = Boolean(args["disabled"]);
    await expect(checkbox.checked).toBe(initialChecked);
    if (isDisabled) {
      await expect(checkbox).toBeDisabled();
    } else {
      await expect(checkbox).not.toBeDisabled();

      // Test interaction only if not disabled
      await userEvent.click(checkbox);
      await expect(checkbox.checked).toBe(!initialChecked);
      await userEvent.click(checkbox);
      await expect(checkbox.checked).toBe(initialChecked);
    }

    // Test styling
    const computedStyle = globalThis.getComputedStyle(checkbox);
    await expect(computedStyle.appearance).toBe("none");
    await expect(computedStyle.cursor).toBe(isDisabled ? "not-allowed" : "pointer");
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-checkbox");
    checkbox.name = "checkbox-checked";
    checkbox.value = "checked-value";
    checkbox.checked = true;
    container.append(checkbox);
    return container;
  },
  args: {
    checked: true
  },
  play: async ({
    canvasElement
  }) => {
    const checkbox = canvasElement.querySelector("input[type='checkbox']") as HTMLInputElement;

    // Test initial checked state
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).toHaveClass("m-checkbox");
    await expect(checkbox).toBeChecked();
    await expect(checkbox).not.toBeDisabled();

    // Test unchecking
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();

    // Test checking again
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();

    // Test styling for checked state
    const computedStyle = globalThis.getComputedStyle(checkbox);
    // When checked, background should change to primary color
    await expect(computedStyle.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox in checked state by default."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-checkbox");
    checkbox.name = "checkbox-disabled";
    checkbox.value = "disabled-value";
    checkbox.disabled = true;
    container.append(checkbox);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const checkbox = canvasElement.querySelector("input[type='checkbox']") as HTMLInputElement;

    // Test disabled state
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).toHaveClass("m-checkbox");
    await expect(checkbox).not.toBeChecked();
    await expect(checkbox).toBeDisabled();

    // Test that clicking doesn't change state when disabled
    const initialChecked = checkbox.checked;
    await userEvent.click(checkbox);
    await expect(checkbox.checked).toBe(initialChecked);

    // Test disabled styling
    const computedStyle = globalThis.getComputedStyle(checkbox);
    await expect(computedStyle.cursor).toBe("not-allowed");
    await expect(Number.parseFloat(computedStyle.opacity)).toBeLessThan(1);
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled checkbox that cannot be interacted with."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-checkbox");
    checkbox.name = "checkbox-checked-disabled";
    checkbox.value = "checked-disabled-value";
    checkbox.checked = true;
    checkbox.disabled = true;
    container.append(checkbox);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const checkbox = canvasElement.querySelector("input[type='checkbox']") as HTMLInputElement;

    // Test checked and disabled state
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).toHaveClass("m-checkbox");
    await expect(checkbox).toBeChecked();
    await expect(checkbox).toBeDisabled();

    // Test that clicking doesn't change state when disabled
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked(); // Should remain checked

    // Test styling combines both states
    const computedStyle = globalThis.getComputedStyle(checkbox);
    await expect(computedStyle.cursor).toBe("not-allowed");
    await expect(Number.parseFloat(computedStyle.opacity)).toBeLessThan(1);
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled checkbox in checked state."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.gap = "0.5rem";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("m-checkbox");
    checkbox.id = "checkbox-with-label";
    checkbox.name = "agreement";
    checkbox.value = "agreed";
    const labelText = args["label"] ? String(args["label"]) : "I agree to the terms of service";
    const label = document.createElement("label");
    label.htmlFor = "checkbox-with-label";
    label.textContent = labelText;
    label.style.cursor = "pointer";
    label.style.userSelect = "none";
    container.append(checkbox, label);
    return container;
  },
  args: {
    label: "I agree to the terms of service"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const checkbox = canvasElement.querySelector("input[type='checkbox']") as HTMLInputElement;
    const label = canvasElement.querySelector("label") as HTMLLabelElement;

    // Test label association
    await expect(checkbox).toBeInTheDocument();
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveAttribute("for", "checkbox-with-label");
    await expect(label).toHaveTextContent(String(args["label"]));
    await expect(checkbox.id).toBe("checkbox-with-label");

    // Test initial state
    await expect(checkbox).not.toBeChecked();

    // Test label click functionality
    await userEvent.click(label);
    await expect(checkbox).toBeChecked();
    await userEvent.click(label);
    await expect(checkbox).not.toBeChecked();

    // Test keyboard interaction via label
    label.focus();
    await userEvent.keyboard(" "); // Space key
    await expect(checkbox).toBeChecked();

    // Test label styling
    const labelStyle = globalThis.getComputedStyle(label);
    await expect(labelStyle.cursor).toBe("pointer");
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox with associated label for improved accessibility and usability."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const x=["Default","Checked","Disabled","CheckedDisabled","WithLabel"];export{r as Checked,b as CheckedDisabled,l as Default,d as Disabled,h as WithLabel,x as __namedExportsOrder,p as default};
