const n=(e={})=>{const t=document.createElement("textarea");return t.classList.add("m-textarea"),e.block&&t.classList.add("--block"),e.error&&t.classList.add("--error"),e.autoFit&&t.classList.add("--auto-fit"),e.placeholder&&(t.placeholder=e.placeholder),e.rows&&(t.rows=e.rows),e.cols&&(t.cols=e.cols),e.disabled&&(t.disabled=e.disabled),e.required&&(t.required=e.required),e.value&&(t.value=e.value),e.id&&(t.id=e.id),e.name&&(t.name=e.name),e.onChange&&t.addEventListener("input",a=>{const x=a.target;e.onChange&&e.onChange(x.value)}),t},{expect:r,within:o}=__STORYBOOK_MODULE_TEST__,u={title:"Components/Textarea",tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the textarea"},rows:{control:"number",description:"Number of visible text lines"},cols:{control:"number",description:"Number of visible text columns"},block:{control:"boolean",description:"Display the textarea as a block element"},disabled:{control:"boolean",description:"Disable the textarea"},required:{control:"boolean",description:"Indicate whether the textarea is required"},error:{control:"boolean",description:"Indicate whether the textarea has an error"},autoFit:{control:"boolean",description:"Enable automatic height adjustment"},value:{control:"text",description:"Controlled value of the textarea"},onChange:{action:"input"}},parameters:{docs:{description:{component:`
### Overview

The Textarea component provides a multi-line text input element with various styling options and responsive behavior. It supports automatic content sizing and proper validation states for enhanced user experience.

### Usage

Use Textarea components for collecting longer text input such as comments, descriptions, messages, and feedback. The component handles various states including validation, disabled, and auto-sizing for optimal user experience across different form scenarios.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-textarea | .--block | Makes the textarea display as block-level with full width |
| .m-textarea | .--error | Applies error styling with danger border color |
| .m-textarea | .--auto-fit | Enables automatic height adjustment based on content |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-textarea | --textarea-border-radius | var(--radius-sm) | Border radius of the textarea element |
| .m-textarea | --textarea-border-color | var(--color-border) | Default border color |
| .m-textarea | --textarea-border | 1px solid var(--textarea-border-color) | Complete border specification |
| .m-textarea | --textarea-bg-color | initial | Background color of the textarea |
| .m-textarea | --textarea-placeholder-color | var(--color-text-muted) | Color of placeholder text |
| .m-textarea | --textarea-hover-opacity | 0.8 | Opacity on hover and focus states |
| .m-textarea | --textarea-disabled-opacity | 0.65 | Opacity when disabled |
| .m-textarea | --textarea-disabled-color | var(--color-text-muted) | Text color when disabled |
| .m-textarea | --textarea-invalid-border-color | var(--color-danger) | Border color for invalid/error states |

### Caution

- The auto-fit modifier uses field-sizing property with limited browser support
- Validation states (invalid, error) should be properly managed in forms
- Proper labeling is essential for accessibility
        `}},a11y:{config:{rules:[{id:"select-name",enabled:!1},{id:"label",enabled:!1}]}}}},s={parameters:{docs:{description:{story:"Default textarea with basic styling and placeholder text."}}},render:e=>n(e),args:{placeholder:"Type your message here...",block:!1,disabled:!1,required:!1,error:!1,autoFit:!1},play:async({canvasElement:e})=>{const a=o(e).getByRole("textbox");await r(a).not.toBeNull(),await r(a).toHaveClass("m-textarea"),await r(a).not.toBeDisabled(),await r(a).not.toBeRequired()}},i={parameters:{docs:{description:{story:"Textarea in disabled state with reduced opacity and disabled cursor."}}},render:()=>n({value:"This is a disabled textarea",disabled:!0}),play:async({canvasElement:e})=>{const a=o(e).getByDisplayValue("This is a disabled textarea");await r(a).not.toBeNull(),await r(a).toHaveClass("m-textarea"),await r(a).toBeDisabled()}},l={parameters:{docs:{description:{story:"Textarea in invalid state showing validation error styling."}}},render:()=>{const e=document.createElement("form");e.style.cssText="display: contents;",e.noValidate=!0;const t=n({placeholder:"Required field",required:!0});return e.append(t),e.reportValidity(),e},play:async({canvasElement:e})=>{const a=o(e).getByRole("textbox");await r(a).not.toBeNull(),await r(a).toHaveClass("m-textarea"),await r(a).toBeRequired(),await r(a).toBeInvalid()}},c={parameters:{docs:{description:{story:"Block-level textarea that takes full width of its container."}}},render:()=>n({placeholder:"Block level textarea",block:!0}),play:async({canvasElement:e})=>{const a=o(e).getByPlaceholderText("Block level textarea");await r(a).not.toBeNull(),await r(a).toHaveClass("m-textarea"),await r(a).toHaveClass("--block")}},d={parameters:{docs:{description:{story:"Textarea with auto-fit modifier that adjusts height based on content (limited browser support)."}}},render:()=>n({placeholder:"Auto-fit textarea",autoFit:!0}),play:async({canvasElement:e})=>{const a=o(e).getByPlaceholderText("Auto-fit textarea");await r(a).not.toBeNull(),await r(a).toHaveClass("m-textarea"),await r(a).toHaveClass("--auto-fit")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default textarea with basic styling and placeholder text."
      }
    }
  },
  render: args => createTextarea(args),
  args: {
    placeholder: "Type your message here...",
    block: false,
    disabled: false,
    required: false,
    error: false,
    autoFit: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("m-textarea");
    await expect(textarea).not.toBeDisabled();
    await expect(textarea).not.toBeRequired();
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Textarea in disabled state with reduced opacity and disabled cursor."
      }
    }
  },
  render: () => createTextarea({
    value: "This is a disabled textarea",
    disabled: true
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByDisplayValue("This is a disabled textarea");
    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("m-textarea");
    await expect(textarea).toBeDisabled();
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Textarea in invalid state showing validation error styling."
      }
    }
  },
  render: () => {
    const form = document.createElement("form");
    form.style.cssText = "display: contents;";
    form.noValidate = true;
    const textarea = createTextarea({
      placeholder: "Required field",
      required: true
    });
    form.append(textarea);
    form.reportValidity();
    return form;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("m-textarea");
    await expect(textarea).toBeRequired();
    await expect(textarea).toBeInvalid();
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Block-level textarea that takes full width of its container."
      }
    }
  },
  render: () => createTextarea({
    placeholder: "Block level textarea",
    block: true
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText("Block level textarea");
    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("m-textarea");
    await expect(textarea).toHaveClass("--block");
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Textarea with auto-fit modifier that adjusts height based on content (limited browser support)."
      }
    }
  },
  render: () => createTextarea({
    placeholder: "Auto-fit textarea",
    autoFit: true
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText("Auto-fit textarea");
    await expect(textarea).not.toBeNull();
    await expect(textarea).toHaveClass("m-textarea");
    await expect(textarea).toHaveClass("--auto-fit");
  }
}`,...d.parameters?.docs?.source}}};const m=["Default","Disabled","Invalid","Block","AutoFit"];export{d as AutoFit,c as Block,s as Default,i as Disabled,l as Invalid,m as __namedExportsOrder,u as default};
