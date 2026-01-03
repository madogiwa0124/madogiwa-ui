const i=(t={})=>{const n=document.createElement("select");if(n.classList.add("m-select"),t.disabled&&(n.disabled=t.disabled),t.required&&(n.required=t.required),t.multiple&&(n.multiple=t.multiple),t.id&&(n.id=t.id),t.name&&(n.name=t.name),t.options)for(const[e,a]of t.options.entries()){if(t.separators?.includes(e)){const s=document.createElement("hr");n.append(s)}const l=document.createElement("option");l.value=a.value,l.textContent=a.label,a.disabled&&(l.disabled=a.disabled),t.value===a.value&&(l.selected=!0),n.append(l)}if(t.optgroups)for(const e of t.optgroups){const a=document.createElement("optgroup");a.label=e.label;for(const l of e.options){const s=document.createElement("option");s.value=l.value,s.textContent=l.label,l.disabled&&(s.disabled=l.disabled),t.value===l.value&&(s.selected=!0),a.append(s)}n.append(a)}return t.onChange&&n.addEventListener("change",()=>{if(t.onChange)if(t.multiple){const e=[...n.selectedOptions].map(a=>a.value);t.onChange(e)}else t.onChange(n.value)}),n},{expect:o,userEvent:b,within:r}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Select",tags:["autodocs"],argTypes:{options:{control:"object",description:"The options array for the component"},optgroups:{control:"object",description:"The option groups array for the component"},separators:{control:"object",description:"The separators array for the component"},value:{control:"text",description:"The current value for the component"},disabled:{control:"boolean",description:"The disabled state for the component"},required:{control:"boolean",description:"The required attribute for the component"},multiple:{control:"boolean",description:"The multiple selection modifier for the component"},onChange:{action:"changed"}},parameters:{docs:{description:{component:`
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
        `}},a11y:{config:{rules:[{id:"select-name",enabled:!1}]}}}},c={parameters:{docs:{description:{story:"Default select dropdown with basic options."}}},render:t=>i(t),args:{options:[{value:"",label:"--- Select ---"},{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await o(e).not.toBeNull(),await o(e).toHaveClass("m-select"),await o(e).not.toBeDisabled(),await b.selectOptions(e,""),await o(e).toHaveValue("")}},p={parameters:{docs:{description:{story:"Select with visual separators between option groups."}}},render:()=>i({options:[{value:"",label:"--- Select ---"},{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],separators:[3]}),play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox"),a=e.querySelectorAll("hr");await o(e).not.toBeNull(),await o(e).toHaveClass("m-select"),await o(e).not.toBeDisabled(),await o(a.length).toBe(1)}},u={parameters:{docs:{description:{story:"Select with option groups for better organization."}}},render:()=>i({options:[{value:"",label:"--- Select ---"},{value:"option1",label:"Option 1"},{value:"option6",label:"Option 6"}],optgroups:[{label:"Group 1",options:[{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]},{label:"Group 2",options:[{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}]}]}),play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox"),a=e.querySelectorAll("optgroup");await o(e).not.toBeNull(),await o(e).toHaveClass("m-select"),await o(e).not.toBeDisabled(),await o(a.length).toBe(2),a[0]&&(await o(a[0].label).toBe("Group 1"),await o(a[0].querySelectorAll("option").length).toBe(2)),a[1]&&(await o(a[1].label).toBe("Group 2"),await o(a[1].querySelectorAll("option").length).toBe(2))}},d={parameters:{docs:{description:{story:"Multiple select mode (note: styling not fully supported)."}}},render:()=>{const t=document.createElement("div"),n=document.createElement("p");n.textContent="Multiple select is not supported",n.style.fontWeight="bold",t.append(n);const e=i({multiple:!0,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]});return t.append(e),t},play:async({canvasElement:t})=>{const e=r(t).getByRole("listbox");await o(e).not.toBeNull(),await o(e).toHaveClass("m-select"),await o(e.multiple).toBe(!0),await b.selectOptions(e,["option1","option2"]),await o(e).toHaveValue(["option1","option2"])}},v={parameters:{docs:{description:{story:"Select in disabled state with pre-selected value."}}},render:()=>i({disabled:!0,value:"option2",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]}),play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox");await o(e).not.toBeNull(),await o(e).toHaveClass("m-select"),await o(e).toBeDisabled(),await o(e).toHaveValue("option2");const a=e.value;await b.click(e),await o(e).toHaveValue(a)}},m={parameters:{docs:{description:{story:"Select in invalid state showing validation error styling."}}},render:()=>{const t=document.createElement("div"),n=document.createElement("form");n.noValidate=!0;const e=i({required:!0,id:"required-select",options:[{value:"",label:"-- Select --"},{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]});return n.reportValidity(),n.append(e),t.append(n),t},play:async({canvasElement:t})=>{const e=r(t).getByRole("combobox"),a=document.querySelector("form");await o(e).not.toBeNull(),await o(e).toHaveClass("m-select"),await o(e).toBeRequired(),await o(e).toHaveValue(""),a?.reportValidity(),await o(e.validity.valid).toBe(!1),await o(e.validity.valueMissing).toBe(!0)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const w=["Default","Separator","Group","Multiple","Disabled","Invalid"];export{c as Default,v as Disabled,u as Group,m as Invalid,d as Multiple,p as Separator,w as __namedExportsOrder,g as default};
