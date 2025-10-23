const i=(t={})=>{const o=document.createElement("select");if(o.classList.add("m-select"),t.disabled&&(o.disabled=t.disabled),t.required&&(o.required=t.required),t.multiple&&(o.multiple=t.multiple),t.id&&(o.id=t.id),t.name&&(o.name=t.name),t.options)for(const[e,a]of t.options.entries()){if(t.separators?.includes(e)){const s=document.createElement("hr");o.append(s)}const l=document.createElement("option");l.value=a.value,l.textContent=a.label,a.disabled&&(l.disabled=a.disabled),t.value===a.value&&(l.selected=!0),o.append(l)}if(t.optgroups)for(const e of t.optgroups){const a=document.createElement("optgroup");a.label=e.label;for(const l of e.options){const s=document.createElement("option");s.value=l.value,s.textContent=l.label,l.disabled&&(s.disabled=l.disabled),t.value===l.value&&(s.selected=!0),a.append(s)}o.append(a)}return t.onChange&&o.addEventListener("change",()=>{if(t.onChange)if(t.multiple){const e=[...o.selectedOptions].map(a=>a.value);t.onChange(e)}else t.onChange(o.value)}),o},{expect:n,userEvent:b,within:c}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Select",tags:["autodocs"],argTypes:{options:{control:"object",description:"Array of options for the select dropdown"},optgroups:{control:"object",description:"Array of option groups for the select dropdown"},separators:{control:"object",description:"Array of separators for the select dropdown"},value:{control:"text",description:"Current value of the select dropdown"},disabled:{control:"boolean",description:"Disables the select dropdown"},required:{control:"boolean",description:"Marks the select dropdown as required"},multiple:{control:"boolean",description:"Allows multiple selections in the select dropdown"},onChange:{action:"changed"}},parameters:{docs:{description:{component:`
### Overview

The Select component provides a customizable dropdown selection interface with support for grouping, separators, and modern styling. It enhances the native select element with improved visual design.

### Usage

Use Select components for choosing from a list of options, category selection, and form inputs requiring single or multiple selections. The component supports option grouping and visual separators for better organization.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-select | .--error | Applies error styling with danger border color |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-select | --select-padding | var(--spacing-3) | Internal padding for the select element |
| .m-select | --select-checkmark-gap | var(--spacing-4) | Gap for checkmark indicator |
| .m-select | --select-bg-color | var(--color-bg-light) | Background color of the select |
| .m-select | --select-border-color | var(--color-border) | Default border color |
| .m-select | --select-border | 2px solid var(--select-border-color) | Complete border specification |
| .m-select | --select-border-radius | var(--radius-sm) | Border radius of the select |
| .m-select | --select-invalid-border-color | var(--color-danger) | Border color for invalid state |
| .m-select | --select-hover-opacity | 0.8 | Opacity on hover state |
| .m-select | --select-disabled-opacity | 0.65 | Opacity when disabled |

### Caution

- Modern customizable select features require Chrome support
- Multiple select styling not supported
- Accessibility requires proper labeling
- Custom styling may not work in all browsers
        `}},a11y:{config:{rules:[{id:"select-name",enabled:!1}]}}}},r={parameters:{docs:{description:{story:"Default select dropdown with basic options."}}},render:t=>i(t),args:{options:[{value:"",label:"--- Select ---"},{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]},play:async({canvasElement:t})=>{const e=c(t).getByRole("combobox");await n(e).not.toBeNull(),await n(e).toHaveClass("m-select"),await n(e).not.toBeDisabled(),await b.selectOptions(e,""),await n(e).toHaveValue("")}},p={parameters:{docs:{description:{story:"Select with visual separators between option groups."}}},render:()=>i({options:[{value:"",label:"--- Select ---"},{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],separators:[3]}),play:async({canvasElement:t})=>{const e=c(t).getByRole("combobox"),a=e.querySelectorAll("hr");await n(e).not.toBeNull(),await n(e).toHaveClass("m-select"),await n(e).not.toBeDisabled(),await n(a.length).toBe(1)}},u={parameters:{docs:{description:{story:"Select with option groups for better organization."}}},render:()=>i({options:[{value:"",label:"--- Select ---"},{value:"option1",label:"Option 1"},{value:"option6",label:"Option 6"}],optgroups:[{label:"Group 1",options:[{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]},{label:"Group 2",options:[{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}]}]}),play:async({canvasElement:t})=>{const e=c(t).getByRole("combobox"),a=e.querySelectorAll("optgroup");await n(e).not.toBeNull(),await n(e).toHaveClass("m-select"),await n(e).not.toBeDisabled(),await n(a.length).toBe(2),a[0]&&(await n(a[0].label).toBe("Group 1"),await n(a[0].querySelectorAll("option").length).toBe(2)),a[1]&&(await n(a[1].label).toBe("Group 2"),await n(a[1].querySelectorAll("option").length).toBe(2))}},d={parameters:{docs:{description:{story:"Multiple select mode (note: styling not fully supported)."}}},render:()=>{const t=document.createElement("div"),o=document.createElement("p");o.textContent="Multiple select is not supported",o.style.fontWeight="bold",t.append(o);const e=i({multiple:!0,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]});return t.append(e),t},play:async({canvasElement:t})=>{const e=c(t).getByRole("listbox");await n(e).not.toBeNull(),await n(e).toHaveClass("m-select"),await n(e.multiple).toBe(!0),await b.selectOptions(e,["option1","option2"]),await n(e).toHaveValue(["option1","option2"])}},m={parameters:{docs:{description:{story:"Select in disabled state with pre-selected value."}}},render:()=>i({disabled:!0,value:"option2",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]}),play:async({canvasElement:t})=>{const e=c(t).getByRole("combobox");await n(e).not.toBeNull(),await n(e).toHaveClass("m-select"),await n(e).toBeDisabled(),await n(e).toHaveValue("option2");const a=e.value;await b.click(e),await n(e).toHaveValue(a)}},v={parameters:{docs:{description:{story:"Select in invalid state showing validation error styling."}}},render:()=>{const t=document.createElement("div"),o=document.createElement("form");o.noValidate=!0;const e=i({required:!0,id:"required-select",options:[{value:"",label:"-- Select --"},{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]});return o.reportValidity(),o.append(e),t.append(o),t},play:async({canvasElement:t})=>{const e=c(t).getByRole("combobox"),a=document.querySelector("form");await n(e).not.toBeNull(),await n(e).toHaveClass("m-select"),await n(e).toBeRequired(),await n(e).toHaveValue(""),a?.reportValidity(),await n(e.validity.valid).toBe(!1),await n(e.validity.valueMissing).toBe(!0)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const w=["Default","Separator","Group","Multiple","Disabled","Invalid"];export{r as Default,m as Disabled,u as Group,v as Invalid,d as Multiple,p as Separator,w as __namedExportsOrder,g as default};
