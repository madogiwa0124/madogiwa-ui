import{n as e}from"./chunk-DnJy8xQt.js";var t,n=e((()=>{t=(e={})=>{let t=document.createElement(`textarea`);return t.classList.add(`m-textarea`),e.block&&t.classList.add(`--block`),e.error&&t.classList.add(`--error`),e.autoFit&&t.classList.add(`--auto-fit`),e.placeholder&&(t.placeholder=e.placeholder),e.rows&&(t.rows=e.rows),e.cols&&(t.cols=e.cols),e.disabled&&(t.disabled=e.disabled),e.required&&(t.required=e.required),e.value&&(t.value=e.value),e.id&&(t.id=e.id),e.name&&(t.name=e.name),e.onChange&&t.addEventListener(`input`,t=>{let n=t.target;e.onChange&&e.onChange(n.value)}),t}})),r,i,a,o,s,c,l,u,d;e((()=>{n(),{expect:r,within:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/Textarea`,tags:[`autodocs`],argTypes:{placeholder:{control:`text`,description:`The placeholder text for the component`},rows:{control:`number`,description:`The rows attribute for the component`},cols:{control:`number`,description:`The cols attribute for the component`},block:{control:`boolean`,description:`The block display modifier for the component`},disabled:{control:`boolean`,description:`The disabled state for the component`},required:{control:`boolean`,description:`The required attribute for the component`},error:{control:`boolean`,description:`The error state modifier for the component`},autoFit:{control:`boolean`,description:`The auto-fit modifier for the component`},value:{control:`text`,description:`Controlled value of the textarea`},onChange:{action:`input`}},parameters:{docs:{description:{component:`
### Overview

The Textarea component provides a multi-line text input element with various styling options and responsive behavior. It supports automatic content sizing and proper validation states for enhanced user experience.

### Usage

Use Textarea components for collecting longer text input such as comments, descriptions, messages, and feedback. Perfect for forms requiring multi-line text input with proper validation and accessibility support.

### Example code

\`\`\`html
<!-- Basic textarea -->
<textarea class="m-textarea" placeholder="Enter your message..."></textarea>

<!-- Block textarea with auto-fit -->
<textarea class="m-textarea --block --auto-fit" rows="4" placeholder="Type your feedback here..."></textarea>

<!-- Error state textarea -->
<textarea class="m-textarea --error" placeholder="This field has an error"></textarea>

<!-- Disabled textarea -->
<textarea class="m-textarea" disabled>This textarea is disabled</textarea>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-textarea | .--block | Makes the textarea display as block-level with full width |
| .m-textarea | .--error | Applies error styling with danger border color |
| .m-textarea | .--auto-fit | Enables automatic height adjustment based on content |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --textarea-border-radius | var(--radius-sm) | Border radius of the textarea element |
| --textarea-border-color | var(--color-border) | Default border color |
| --textarea-border | 1px solid var(--textarea-border-color) | Complete border specification |
| --textarea-bg-color | initial | Background color of the textarea |
| --textarea-placeholder-color | var(--color-text-muted) | Color of placeholder text |
| --textarea-hover-opacity | 0.8 | Opacity on hover and focus states |
| --textarea-hover-border-color | var(--color-border) | Border color on hover and focus |
| --textarea-disabled-opacity | 0.65 | Opacity when disabled |
| --textarea-disabled-color | var(--color-text-muted) | Text color when disabled |
| --textarea-invalid-border-color | var(--color-danger) | Border color for invalid/error states |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- The auto-fit modifier uses \`field-sizing\` property with limited browser support
- Always provide labels for accessibility compliance
- Test validation states for proper error messaging
- Consider content length limits for better user experience
        `}},a11y:{config:{rules:[{id:`select-name`,enabled:!1},{id:`label`,enabled:!1}]}}}},o={parameters:{docs:{description:{story:`Default textarea with basic styling and placeholder text.`}}},render:e=>t(e),args:{placeholder:`Type your message here...`,block:!1,disabled:!1,required:!1,error:!1,autoFit:!1},play:async({canvasElement:e})=>{let t=i(e).getByRole(`textbox`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-textarea`),await r(t).not.toBeDisabled(),await r(t).not.toBeRequired()}},s={parameters:{docs:{description:{story:`Textarea in disabled state with reduced opacity and disabled cursor.`}}},render:()=>t({value:`This is a disabled textarea`,disabled:!0}),play:async({canvasElement:e})=>{let t=i(e).getByDisplayValue(`This is a disabled textarea`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-textarea`),await r(t).toBeDisabled()}},c={parameters:{docs:{description:{story:`Textarea in invalid state showing validation error styling.`}}},render:()=>{let e=document.createElement(`form`);e.style.cssText=`display: contents;`,e.noValidate=!0;let n=t({placeholder:`Required field`,required:!0});return e.append(n),e.reportValidity(),e},play:async({canvasElement:e})=>{let t=i(e).getByRole(`textbox`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-textarea`),await r(t).toBeRequired(),await r(t).toBeInvalid()}},l={parameters:{docs:{description:{story:`Block-level textarea that takes full width of its container.`}}},render:()=>t({placeholder:`Block level textarea`,block:!0}),play:async({canvasElement:e})=>{let t=i(e).getByPlaceholderText(`Block level textarea`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-textarea`),await r(t).toHaveClass(`--block`)}},u={parameters:{docs:{description:{story:`Textarea with auto-fit modifier that adjusts height based on content (limited browser support).`}}},render:()=>t({placeholder:`Auto-fit textarea`,autoFit:!0}),play:async({canvasElement:e})=>{let t=i(e).getByPlaceholderText(`Auto-fit textarea`);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-textarea`),await r(t).toHaveClass(`--auto-fit`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Disabled`,`Invalid`,`Block`,`AutoFit`]}))();export{u as AutoFit,l as Block,o as Default,s as Disabled,c as Invalid,d as __namedExportsOrder,a as default};