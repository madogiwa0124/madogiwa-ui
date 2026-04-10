import{n as e}from"./chunk-BneVvdWh.js";function t(e={}){let{name:t=`radio`,value:n=`radio`,id:r,checked:i=!1,disabled:a=!1,className:o=`m-radio`}=e,s=document.createElement(`input`);return s.type=`radio`,s.className=o,s.name=t,s.value=n,s.checked=i,s.disabled=a,r&&(s.id=r),s}function n(e){let{text:t,htmlFor:n,cursor:r=`pointer`,userSelect:i=`none`}=e,a=document.createElement(`label`);return a.htmlFor=n,a.textContent=t,a.style.cursor=r,a.style.userSelect=i,a}function r(e,r){let i=document.createElement(`div`);i.style.display=`flex`,i.style.alignItems=`center`,i.style.gap=`0.5rem`;let a=t(e),o=n({text:r,htmlFor:e.id});return i.append(a),i.append(o),i}var i=e((()=>{})),a,o,s,c,l,u,d,f,p;e((()=>{i(),{expect:a,userEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Radio`,tags:[`autodocs`],argTypes:{name:{control:`text`,description:`The name attribute for the component`},value:{control:`text`,description:`The value attribute for the component`},checked:{control:`boolean`,description:`The checked state for the component`},disabled:{control:`boolean`,description:`The disabled state for the component`}},parameters:{docs:{description:{component:`
### Overview

The Radio component provides a circular selection input for exclusive choices within a group. It offers clear visual feedback and smooth interactions for single-choice scenarios.

### Usage

Use Radio components for mutually exclusive options, preference selection, and form inputs where only one choice is allowed. Group related radio buttons with the same name attribute for proper behavior.

### Example code

\`\`\`html
<!-- Basic radio buttons group -->
<div>
  <label>
    <input type="radio" class="m-radio" name="size" value="small" checked>
    Small
  </label>
  <label>
    <input type="radio" class="m-radio" name="size" value="medium">
    Medium
  </label>
  <label>
    <input type="radio" class="m-radio" name="size" value="large">
    Large
  </label>
</div>

<!-- Disabled radio button -->
<label>
  <input type="radio" class="m-radio" name="color" value="red" disabled>
  Red (Not available)
</label>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

This component has no modifiers.

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --radio-size | 1em | Size of the radio button |
| --radio-border-color | var(--color-text-default) | Border color of the radio button |
| --radio-mark-bg-color | var(--color-text-inverse) | Background color when checked |
| --radio-mark-color | var(--color-primary) | Inner mark color when checked |
| --radio-bg-color | var(--color-bg-muted) | Background color when unchecked |
| --radio-lighter-brightness | 150% | Brightness for hover/focus states |
| --radio-disabled-opacity | 0.65 | Opacity when disabled |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Radio buttons with the same \`name\` attribute form an exclusive group
- Always provide labels for accessibility compliance
- Test keyboard navigation and screen reader compatibility
- Ensure sufficient contrast for the checked indicator
        `}},a11y:{config:{rules:[{id:`label`,enabled:!1}]}}}},l={parameters:{docs:{description:{story:`Default radio button with basic interaction.`}}},render:e=>t(e),args:{name:`radio-default`,value:`radio-default`,checked:!1,disabled:!1},play:async({canvasElement:e})=>{let t=s(e).getByRole(`radio`);await a(t).not.toBeNull(),await a(t).toHaveClass(`m-radio`),await a(t).not.toBeChecked(),await a(t).not.toBeDisabled(),await o.click(t),await a(t).toBeChecked()}},u={parameters:{docs:{description:{story:`Radio button group showing checked and unchecked states.`}}},render:()=>{let e=document.createElement(`div`);e.style.cssText=`display: flex; flex-direction: column; gap: 10px;`,e.classList.add(`radio-group`);let n=t({name:`radio-checked`,value:`radio-checked`,checked:!0}),r=t({name:`radio-checked`,value:`radio-not-checked`,checked:!1});return e.append(n,r),e},play:async({canvasElement:e})=>{let t=s(e).getAllByRole(`radio`)[0];await a(t).not.toBeNull(),await a(t).toHaveClass(`m-radio`),await a(t).toBeChecked(),await a(t).toHaveAttribute(`name`,`radio-checked`),await a(t).toHaveAttribute(`value`,`radio-checked`)}},d={parameters:{docs:{description:{story:`Radio button in disabled state preventing interaction.`}}},render:()=>{let e=t({name:`radio-disabled`,value:`radio-disabled`,checked:!0,disabled:!0}),n=t({name:`radio-disabled`,value:`radio-disabled`,checked:!1,disabled:!0}),r=document.createElement(`div`);return r.style.cssText=`display: flex; flex-direction: column; gap: 10px;`,r.append(e,n),r},play:async({canvasElement:e})=>{let t=s(e).getAllByRole(`radio`);for(let e of t)await a(e).not.toBeNull(),await a(e).toHaveClass(`m-radio`),await a(e).toBeDisabled()}},f={parameters:{docs:{description:{story:`Radio button with associated label for better accessibility.`}}},render:e=>r({name:e.name??`radio-with-label`,value:e.value??`radio-with-label`,id:e.id??`radio-with-label-default`,disabled:e.disabled??!1},e.text),args:{name:`radio-with-label`,value:`radio-with-label`,id:`radio-with-label`,disabled:!1,text:`Select this option`},play:async({canvasElement:e,args:t})=>{let n=s(e),r=n.getByRole(`radio`),i=n.getByText(t.text);await a(r).not.toBeNull(),await a(r).toHaveAttribute(`id`,t.id),await a(r).toHaveAttribute(`name`,t.name),await a(r).toHaveAttribute(`value`,t.value),await a(i).not.toBeNull(),await a(i).toHaveAttribute(`for`,t.id),await a(i).toHaveTextContent(t.text),await a(r).not.toBeChecked(),await o.click(i),await a(r).toBeChecked()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default radio button with basic interaction."
      }
    }
  },
  render: args => createRadio(args),
  args: {
    name: "radio-default",
    value: "radio-default",
    checked: false,
    disabled: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole("radio");
    await expect(radio).not.toBeNull();
    await expect(radio).toHaveClass("m-radio");
    await expect(radio).not.toBeChecked();
    await expect(radio).not.toBeDisabled();
    await userEvent.click(radio);
    await expect(radio).toBeChecked();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Radio button group showing checked and unchecked states."
      }
    }
  },
  render: () => {
    const root = document.createElement("div");
    root.style.cssText = "display: flex; flex-direction: column; gap: 10px;";
    root.classList.add("radio-group");
    const checked = createRadio({
      name: "radio-checked",
      value: "radio-checked",
      checked: true
    });
    const notChecked = createRadio({
      name: "radio-checked",
      value: "radio-not-checked",
      checked: false
    });
    root.append(checked, notChecked);
    return root;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole("radio");
    const checkedRadio = radios[0];
    await expect(checkedRadio).not.toBeNull();
    await expect(checkedRadio).toHaveClass("m-radio");
    await expect(checkedRadio).toBeChecked();
    await expect(checkedRadio).toHaveAttribute("name", "radio-checked");
    await expect(checkedRadio).toHaveAttribute("value", "radio-checked");
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Radio button in disabled state preventing interaction."
      }
    }
  },
  render: () => {
    const checked = createRadio({
      name: "radio-disabled",
      value: "radio-disabled",
      checked: true,
      disabled: true
    });
    const notChecked = createRadio({
      name: "radio-disabled",
      value: "radio-disabled",
      checked: false,
      disabled: true
    });
    const container = document.createElement("div");
    container.style.cssText = "display: flex; flex-direction: column; gap: 10px;";
    container.append(checked, notChecked);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole("radio");
    for (const radio of radios) {
      await expect(radio).not.toBeNull();
      await expect(radio).toHaveClass("m-radio");
      await expect(radio).toBeDisabled();
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Radio button with associated label for better accessibility."
      }
    }
  },
  render: args => createRadioWithLabel({
    name: args.name ?? "radio-with-label",
    value: args.value ?? "radio-with-label",
    id: args.id ?? "radio-with-label-default",
    disabled: args.disabled ?? false
  }, args.text),
  args: {
    name: "radio-with-label",
    value: "radio-with-label",
    id: "radio-with-label",
    disabled: false,
    text: "Select this option"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole("radio");
    const label = canvas.getByText(args.text);
    await expect(radio).not.toBeNull();
    await expect(radio).toHaveAttribute("id", args.id);
    await expect(radio).toHaveAttribute("name", args.name);
    await expect(radio).toHaveAttribute("value", args.value);
    await expect(label).not.toBeNull();
    await expect(label).toHaveAttribute("for", args.id);
    await expect(label).toHaveTextContent(args.text);
    await expect(radio).not.toBeChecked();
    await userEvent.click(label);
    await expect(radio).toBeChecked();
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Checked`,`Disabled`,`WithLabel`]}))();export{u as Checked,l as Default,d as Disabled,f as WithLabel,p as __namedExportsOrder,c as default};