import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a,o,s,c,l;e((()=>{({expect:t,userEvent:n}=__STORYBOOK_MODULE_TEST__),r={title:`Components/Checkbox`,tags:[`autodocs`],argTypes:{label:{control:{type:`text`},description:`The label text for the component`},checked:{control:{type:`boolean`},description:`The checked state for the component`},disabled:{control:{type:`boolean`},description:`The disabled state for the component`},name:{control:{type:`text`},description:`The name attribute for the component`},value:{control:{type:`text`},description:`The value attribute for the component`}},parameters:{docs:{description:{component:`
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
| .m-checkbox | --checkbox-mark-bg-color | var(--color-primary) | Background color when checked |
| .m-checkbox | --checkbox-mark-color | var(--color-text-inverse) | Checkmark color |
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
        `}},a11y:{config:{rules:[{id:`label`,enabled:!1}]}}}},i={render:e=>{let t=document.createElement(`div`),n=document.createElement(`input`);n.type=`checkbox`,n.classList.add(`m-checkbox`);let r=e.checked?!!e.checked:!1,i=e.disabled?!!e.disabled:!1,a=e.name?String(e.name):`checkbox`,o=e.value?String(e.value):`checkbox`;return n.name=a,n.value=o,n.checked=r,n.disabled=i,t.append(n),t},args:{checked:!1,disabled:!1,name:`example`,value:`example-value`},play:async({canvasElement:e,args:r})=>{let i=e.querySelector(`input[type='checkbox']`);await t(i).toBeInTheDocument(),await t(i).toHaveClass(`m-checkbox`),await t(i).toHaveAttribute(`name`,String(r.name)),await t(i).toHaveAttribute(`value`,String(r.value));let a=!!r.checked,o=!!r.disabled;await t(i.checked).toBe(a),o?await t(i).toBeDisabled():(await t(i).not.toBeDisabled(),await n.click(i),await t(i.checked).toBe(!a),await n.click(i),await t(i.checked).toBe(a));let s=globalThis.getComputedStyle(i);await t(s.appearance).toBe(`none`),await t(s.cursor).toBe(o?`not-allowed`:`pointer`)}},a={render:e=>{let t=document.createElement(`div`),n=document.createElement(`input`);return n.type=`checkbox`,n.classList.add(`m-checkbox`),n.name=`checkbox-checked`,n.value=`checked-value`,n.checked=!0,t.append(n),t},args:{checked:!0},play:async({canvasElement:e})=>{let r=e.querySelector(`input[type='checkbox']`);await t(r).toBeInTheDocument(),await t(r).toHaveClass(`m-checkbox`),await t(r).toBeChecked(),await t(r).not.toBeDisabled(),await n.click(r),await t(r).not.toBeChecked(),await n.click(r),await t(r).toBeChecked(),await t(globalThis.getComputedStyle(r).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`)},parameters:{docs:{description:{story:`Checkbox in checked state by default.`}}}},o={render:()=>{let e=document.createElement(`div`),t=document.createElement(`input`);return t.type=`checkbox`,t.classList.add(`m-checkbox`),t.name=`checkbox-disabled`,t.value=`disabled-value`,t.disabled=!0,e.append(t),e},play:async({canvasElement:e})=>{let r=e.querySelector(`input[type='checkbox']`);await t(r).toBeInTheDocument(),await t(r).toHaveClass(`m-checkbox`),await t(r).not.toBeChecked(),await t(r).toBeDisabled();let i=r.checked;await n.click(r),await t(r.checked).toBe(i);let a=globalThis.getComputedStyle(r);await t(a.cursor).toBe(`not-allowed`),await t(Number.parseFloat(a.opacity)).toBeLessThan(1)},parameters:{docs:{description:{story:`Disabled checkbox that cannot be interacted with.`}}}},s={render:()=>{let e=document.createElement(`div`),t=document.createElement(`input`);return t.type=`checkbox`,t.classList.add(`m-checkbox`),t.name=`checkbox-checked-disabled`,t.value=`checked-disabled-value`,t.checked=!0,t.disabled=!0,e.append(t),e},play:async({canvasElement:e})=>{let r=e.querySelector(`input[type='checkbox']`);await t(r).toBeInTheDocument(),await t(r).toHaveClass(`m-checkbox`),await t(r).toBeChecked(),await t(r).toBeDisabled(),await n.click(r),await t(r).toBeChecked();let i=globalThis.getComputedStyle(r);await t(i.cursor).toBe(`not-allowed`),await t(Number.parseFloat(i.opacity)).toBeLessThan(1)},parameters:{docs:{description:{story:`Disabled checkbox in checked state.`}}}},c={render:e=>{let t=document.createElement(`div`);t.style.display=`flex`,t.style.alignItems=`center`,t.style.gap=`0.5rem`;let n=document.createElement(`input`);n.type=`checkbox`,n.classList.add(`m-checkbox`),n.id=`checkbox-with-label`,n.name=`agreement`,n.value=`agreed`;let r=e.label?String(e.label):`I agree to the terms of service`,i=document.createElement(`label`);return i.htmlFor=`checkbox-with-label`,i.textContent=r,i.style.cursor=`pointer`,i.style.userSelect=`none`,t.append(n,i),t},args:{label:`I agree to the terms of service`},play:async({canvasElement:e,args:r})=>{let i=e.querySelector(`input[type='checkbox']`),a=e.querySelector(`label`);await t(i).toBeInTheDocument(),await t(a).toBeInTheDocument(),await t(a).toHaveAttribute(`for`,`checkbox-with-label`),await t(a).toHaveTextContent(String(r.label)),await t(i.id).toBe(`checkbox-with-label`),await t(i).not.toBeChecked(),await n.click(a),await t(i).toBeChecked(),await n.click(a),await t(i).not.toBeChecked(),a.focus(),await n.keyboard(` `),await t(i).toBeChecked(),await t(globalThis.getComputedStyle(a).cursor).toBe(`pointer`)},parameters:{docs:{description:{story:`Checkbox with associated label for improved accessibility and usability.`}}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Checked`,`Disabled`,`CheckedDisabled`,`WithLabel`]}))();export{a as Checked,s as CheckedDisabled,i as Default,o as Disabled,c as WithLabel,l as __namedExportsOrder,r as default};