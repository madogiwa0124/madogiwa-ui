function d(e={}){const{name:n="radio",value:a="radio",id:t,checked:i=!1,disabled:c=!1,className:b="m-radio"}=e,r=document.createElement("input");return r.type="radio",r.className=b,r.name=n,r.value=a,r.checked=i,r.disabled=c,t&&(r.id=t),r}function v(e){const{text:n,htmlFor:a,cursor:t="pointer",userSelect:i="none"}=e,c=document.createElement("label");return c.htmlFor=a,c.textContent=n,c.style.cursor=t,c.style.userSelect=i,c}function w(e,n){const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.gap="0.5rem";const t=d(e),i=v({text:n,htmlFor:e.id});return a.append(t),a.append(i),a}const{expect:o,userEvent:h,within:m}=__STORYBOOK_MODULE_TEST__,f={title:"Components/Radio",tags:["autodocs"],argTypes:{name:{control:"text",description:"The name attribute for the component"},value:{control:"text",description:"The value attribute for the component"},checked:{control:"boolean",description:"The checked state for the component"},disabled:{control:"boolean",description:"The disabled state for the component"}},parameters:{docs:{description:{component:`
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
| --radio-size | 1.2em | Size of the radio button |
| --radio-border-color | var(--color-dark) | Border color of the radio button |
| --radio-bg-color | var(--color-light) | Background color when unchecked |
| --radio-lighter-brightness | 150% | Brightness for hover/focus states |
| --radio-disabled-opacity | 0.65 | Opacity when disabled |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Radio buttons with the same \`name\` attribute form an exclusive group
- Always provide labels for accessibility compliance
- Test keyboard navigation and screen reader compatibility
- Ensure sufficient contrast for the checked indicator
        `}},a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},s={parameters:{docs:{description:{story:"Default radio button with basic interaction."}}},render:e=>d(e),args:{name:"radio-default",value:"radio-default",checked:!1,disabled:!1},play:async({canvasElement:e})=>{const a=m(e).getByRole("radio");await o(a).not.toBeNull(),await o(a).toHaveClass("m-radio"),await o(a).not.toBeChecked(),await o(a).not.toBeDisabled(),await h.click(a),await o(a).toBeChecked()}},l={parameters:{docs:{description:{story:"Radio button group showing checked and unchecked states."}}},render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 10px;",e.classList.add("radio-group");const n=d({name:"radio-checked",value:"radio-checked",checked:!0}),a=d({name:"radio-checked",value:"radio-not-checked",checked:!1});return e.append(n,a),e},play:async({canvasElement:e})=>{const t=m(e).getAllByRole("radio")[0];await o(t).not.toBeNull(),await o(t).toHaveClass("m-radio"),await o(t).toBeChecked(),await o(t).toHaveAttribute("name","radio-checked"),await o(t).toHaveAttribute("value","radio-checked")}},u={parameters:{docs:{description:{story:"Radio button in disabled state preventing interaction."}}},render:()=>{const e=d({name:"radio-disabled",value:"radio-disabled",checked:!0,disabled:!0}),n=d({name:"radio-disabled",value:"radio-disabled",checked:!1,disabled:!0}),a=document.createElement("div");return a.style.cssText="display: flex; flex-direction: column; gap: 10px;",a.append(e,n),a},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("radio");for(const t of a)await o(t).not.toBeNull(),await o(t).toHaveClass("m-radio"),await o(t).toBeDisabled()}},p={parameters:{docs:{description:{story:"Radio button with associated label for better accessibility."}}},render:e=>w({name:e.name??"radio-with-label",value:e.value??"radio-with-label",id:e.id??"radio-with-label-default",disabled:e.disabled??!1},e.text),args:{name:"radio-with-label",value:"radio-with-label",id:"radio-with-label",disabled:!1,text:"Select this option"},play:async({canvasElement:e,args:n})=>{const a=m(e),t=a.getByRole("radio"),i=a.getByText(n.text);await o(t).not.toBeNull(),await o(t).toHaveAttribute("id",n.id),await o(t).toHaveAttribute("name",n.name),await o(t).toHaveAttribute("value",n.value),await o(i).not.toBeNull(),await o(i).toHaveAttribute("for",n.id),await o(i).toHaveTextContent(n.text),await o(t).not.toBeChecked(),await h.click(i),await o(t).toBeChecked()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const k=["Default","Checked","Disabled","WithLabel"];export{l as Checked,s as Default,u as Disabled,p as WithLabel,k as __namedExportsOrder,f as default};
