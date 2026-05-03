import{n as e}from"./chunk-DnJy8xQt.js";var t,n=e((()=>{t=(e={})=>{let t=document.createElement(`select`);if(t.classList.add(`m-select`),e.disabled&&(t.disabled=e.disabled),e.required&&(t.required=e.required),e.multiple&&(t.multiple=e.multiple),e.id&&(t.id=e.id),e.name&&(t.name=e.name),e.options)for(let[n,r]of e.options.entries()){if(e.separators?.includes(n)){let e=document.createElement(`hr`);t.append(e)}let i=document.createElement(`option`);i.value=r.value,i.textContent=r.label,r.disabled&&(i.disabled=r.disabled),e.value===r.value&&(i.selected=!0),t.append(i)}if(e.optgroups)for(let n of e.optgroups){let r=document.createElement(`optgroup`);r.label=n.label;for(let t of n.options){let n=document.createElement(`option`);n.value=t.value,n.textContent=t.label,t.disabled&&(n.disabled=t.disabled),e.value===t.value&&(n.selected=!0),r.append(n)}t.append(r)}return e.onChange&&t.addEventListener(`change`,()=>{if(e.onChange)if(e.multiple){let n=[...t.selectedOptions].map(e=>e.value);e.onChange(n)}else e.onChange(t.value)}),t}})),r,i,a,o,s,c,l,u,d,f,p;e((()=>{n(),{expect:r,userEvent:i,within:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Select`,tags:[`autodocs`],argTypes:{options:{control:`object`,description:`The options array for the component`},optgroups:{control:`object`,description:`The option groups array for the component`},separators:{control:`object`,description:`The separators array for the component`},value:{control:`text`,description:`The current value for the component`},disabled:{control:`boolean`,description:`The disabled state for the component`},required:{control:`boolean`,description:`The required attribute for the component`},multiple:{control:`boolean`,description:`The multiple selection modifier for the component`},onChange:{action:`changed`}},parameters:{docs:{description:{component:`
### Overview

The Select component provides a customizable dropdown selection interface with support for grouping, separators, and modern styling. It enhances the native select element with improved visual design.

### Usage

Use Select components for choosing from a list of options, category selection, and form inputs requiring single or multiple selections. The component supports option grouping and visual separators for better organization.

### Example code

\`\`\`html
<!-- Basic select -->
<select class="m-select">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>

<!-- Select with option groups -->
<select class="m-select">
  <optgroup label="Group 1">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </optgroup>
</select>

<!-- Disabled select -->
<select class="m-select" disabled>
  <option value="option1">Option 1</option>
</select>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-select | .--error | Applies error styling with danger border color |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --select-padding | var(--spacing-3) | Internal padding for the select element |
| --select-checkmark-gap | var(--spacing-4) | Gap for checkmark indicator |
| --select-bg-color | initial | Background color of the select |
| --select-border-color | var(--color-border) | Default border color |
| --select-hover-border-color | var(--color-border) | Border color on hover |
| --select-border | 2px solid var(--select-border-color) | Complete border specification |
| --select-border-radius | var(--radius-sm) | Border radius of the select |
| --select-invalid-border-color | var(--color-danger) | Border color for invalid state |
| --select-hover-opacity | 0.8 | Opacity on hover state |
| --select-disabled-opacity | 0.65 | Opacity when disabled |
| --select-optgroup-bg-color | var(--select-bg-color) | Background color for optgroup elements (inherited from select) |
| --select-optgroup-font-weight | var(--font-weight-bold) | Font weight for optgroup labels |
| --select-option-bg-color | var(--select-bg-color) | Background color for option elements (inherited from select) |
| --select-option-padding | var(--spacing-2) | Padding for option elements |
| --select-option-checked-bg-color | var(--color-tertiary) | Background color for checked options |
| --select-option-checked-text-color | var(--color-text-default) | Text color for checked options |
| --select-option-hover-darker-rate | 0.9 | Darkness rate for option hover state |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Modern customizable select features require Chrome support (experimental)
- Always provide labels for accessibility compliance
- Test across different browsers for consistent behavior
- Consider fallback styling for unsupported browsers
        `}},a11y:{config:{rules:[{id:`select-name`,enabled:!1}]}}}},s={parameters:{docs:{description:{story:`Default select dropdown with basic options.`}}},render:e=>t(e),args:{options:[{value:``,label:`--- Select ---`},{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}]},play:async({canvasElement:e})=>{let t=a(e).getByRole(`combobox`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-select`),await r(t).not.toBeDisabled(),await i.selectOptions(t,``),await r(t).toHaveValue(``)}},c={parameters:{docs:{description:{story:`Select with visual separators between option groups.`}}},render:()=>t({options:[{value:``,label:`--- Select ---`},{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}],separators:[3]}),play:async({canvasElement:e})=>{let t=a(e).getByRole(`combobox`),n=t.querySelectorAll(`hr`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-select`),await r(t).not.toBeDisabled(),await r(n.length).toBe(1)}},l={parameters:{docs:{description:{story:`Select with option groups for better organization.`}}},render:()=>t({options:[{value:``,label:`--- Select ---`},{value:`option1`,label:`Option 1`},{value:`option6`,label:`Option 6`}],optgroups:[{label:`Group 1`,options:[{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}]},{label:`Group 2`,options:[{value:`option4`,label:`Option 4`},{value:`option5`,label:`Option 5`}]}]}),play:async({canvasElement:e})=>{let t=a(e).getByRole(`combobox`),n=t.querySelectorAll(`optgroup`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-select`),await r(t).not.toBeDisabled(),await r(n.length).toBe(2),n[0]&&(await r(n[0].label).toBe(`Group 1`),await r(n[0].querySelectorAll(`option`).length).toBe(2)),n[1]&&(await r(n[1].label).toBe(`Group 2`),await r(n[1].querySelectorAll(`option`).length).toBe(2))}},u={parameters:{docs:{description:{story:`Multiple select mode (note: styling not fully supported).`}}},render:()=>{let e=document.createElement(`div`),n=document.createElement(`p`);n.textContent=`Multiple select is not supported`,n.style.fontWeight=`bold`,e.append(n);let r=t({multiple:!0,options:[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}]});return e.append(r),e},play:async({canvasElement:e})=>{let t=a(e).getByRole(`listbox`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-select`),await r(t.multiple).toBe(!0),await i.selectOptions(t,[`option1`,`option2`]),await r(t).toHaveValue([`option1`,`option2`])}},d={parameters:{docs:{description:{story:`Select in disabled state with pre-selected value.`}}},render:()=>t({disabled:!0,value:`option2`,options:[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}]}),play:async({canvasElement:e})=>{let t=a(e).getByRole(`combobox`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-select`),await r(t).toBeDisabled(),await r(t).toHaveValue(`option2`);let n=t.value;await i.click(t),await r(t).toHaveValue(n)}},f={parameters:{docs:{description:{story:`Select in invalid state showing validation error styling.`}}},render:()=>{let e=document.createElement(`div`),n=document.createElement(`form`);n.noValidate=!0;let r=t({required:!0,id:`required-select`,options:[{value:``,label:`-- Select --`},{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}]});return n.reportValidity(),n.append(r),e.append(n),e},play:async({canvasElement:e})=>{let t=a(e).getByRole(`combobox`),n=document.querySelector(`form`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-select`),await r(t).toBeRequired(),await r(t).toHaveValue(``),n?.reportValidity(),await r(t.validity.valid).toBe(!1),await r(t.validity.valueMissing).toBe(!0)}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default select dropdown with basic options."
      }
    }
  },
  render: args => createSelect(args),
  args: {
    options: [{
      value: "",
      label: "--- Select ---"
    }, {
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect(select).not.toBeDisabled();
    await userEvent.selectOptions(select, "");
    await expect(select).toHaveValue("");
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Select with visual separators between option groups."
      }
    }
  },
  render: () => createSelect({
    options: [{
      value: "",
      label: "--- Select ---"
    }, {
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }],
    separators: [3]
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    const separators = select.querySelectorAll("hr");
    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect(select).not.toBeDisabled();
    await expect(separators.length).toBe(1);
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Select with option groups for better organization."
      }
    }
  },
  render: () => createSelect({
    options: [{
      value: "",
      label: "--- Select ---"
    }, {
      value: "option1",
      label: "Option 1"
    }, {
      value: "option6",
      label: "Option 6"
    }],
    optgroups: [{
      label: "Group 1",
      options: [{
        value: "option2",
        label: "Option 2"
      }, {
        value: "option3",
        label: "Option 3"
      }]
    }, {
      label: "Group 2",
      options: [{
        value: "option4",
        label: "Option 4"
      }, {
        value: "option5",
        label: "Option 5"
      }]
    }]
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    const optgroups = select.querySelectorAll("optgroup");
    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect(select).not.toBeDisabled();
    await expect(optgroups.length).toBe(2);
    if (optgroups[0]) {
      await expect(optgroups[0].label).toBe("Group 1");
      await expect(optgroups[0].querySelectorAll("option").length).toBe(2);
    }
    if (optgroups[1]) {
      await expect(optgroups[1].label).toBe("Group 2");
      await expect(optgroups[1].querySelectorAll("option").length).toBe(2);
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Multiple select mode (note: styling not fully supported)."
      }
    }
  },
  render: () => {
    const container = document.createElement("div");
    const notSupportedMessage = document.createElement("p");
    notSupportedMessage.textContent = "Multiple select is not supported";
    notSupportedMessage.style.fontWeight = "bold";
    container.append(notSupportedMessage);
    const select = createSelect({
      multiple: true,
      options: [{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }, {
        value: "option3",
        label: "Option 3"
      }]
    });
    container.append(select);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("listbox");
    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect((select as HTMLSelectElement).multiple).toBe(true);
    await userEvent.selectOptions(select, ["option1", "option2"]);
    await expect(select).toHaveValue(["option1", "option2"]);
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Select in disabled state with pre-selected value."
      }
    }
  },
  render: () => createSelect({
    disabled: true,
    value: "option2",
    options: [{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }]
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect(select).toBeDisabled();
    await expect(select).toHaveValue("option2");
    const initialValue = (select as HTMLSelectElement).value;
    await userEvent.click(select);
    await expect(select as HTMLSelectElement).toHaveValue(initialValue);
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Select in invalid state showing validation error styling."
      }
    }
  },
  render: () => {
    const container = document.createElement("div");
    const form = document.createElement("form");
    form.noValidate = true;
    const select = createSelect({
      required: true,
      id: "required-select",
      options: [{
        value: "",
        label: "-- Select --"
      }, {
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }, {
        value: "option3",
        label: "Option 3"
      }]
    });
    form.reportValidity();
    form.append(select);
    container.append(form);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    const form = document.querySelector<HTMLFormElement>("form");
    await expect(select).not.toBeNull();
    await expect(select).toHaveClass("m-select");
    await expect(select).toBeRequired();
    await expect(select).toHaveValue("");
    form?.reportValidity();
    await expect((select as HTMLSelectElement).validity.valid).toBe(false);
    await expect((select as HTMLSelectElement).validity.valueMissing).toBe(true);
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Separator`,`Group`,`Multiple`,`Disabled`,`Invalid`]}))();export{s as Default,d as Disabled,l as Group,f as Invalid,u as Multiple,c as Separator,p as __namedExportsOrder,o as default};