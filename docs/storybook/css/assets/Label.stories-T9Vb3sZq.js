import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a,o,s,c,l,u;e((()=>{({expect:t,userEvent:n,within:r}=__STORYBOOK_MODULE_TEST__),i=(e={})=>{let{text:t=`Label`,htmlFor:n,required:r=!1,disabled:i=!1,className:a=``}=e,o=document.createElement(`label`);return o.className=`m-label ${a}`.trim(),o.textContent=t,n&&(o.htmlFor=n),r&&o.classList.add(`--required`),i&&o.classList.add(`--disabled`),o},a={title:`Components/Label`,tags:[`autodocs`],argTypes:{text:{control:{type:`text`},description:`The label text for the component`},htmlFor:{control:{type:`text`},description:`The form element ID for the component`},required:{control:{type:`boolean`},description:`The required indicator modifier for the component`},disabled:{control:{type:`boolean`},description:`The disabled state modifier for the component`}},parameters:{docs:{description:{component:`
### Overview

The Label component provides accessible and consistent labeling for form elements. It ensures proper association between labels and form controls, supporting screen readers and improving usability for all users.

### Usage

Use labels to provide accessible and consistent labeling for form elements. Essential for screen readers and improving usability for all users. Perfect for form field identification, required field indicators, and associating labels with form controls.

### Example code

\`\`\`html
<!-- Basic label -->
<label class="m-label" for="username">Username</label>
<input class="m-input" type="text" id="username">

<!-- Required field label -->
<label class="m-label --required" for="email">Email Address</label>
<input class="m-input" type="email" id="email" required>

<!-- Disabled label -->
<label class="m-label --disabled" for="disabled-field">Disabled Field</label>
<input class="m-input" type="text" id="disabled-field" disabled>
\`\`\`

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-label | .--required | Adds required indicator (asterisk) after the label text |
| .m-label | .--disabled | Applies disabled styling (reduced opacity and cursor change) |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --label-display | block | Display behavior of the label |
| --label-font-weight | var(--font-weight-medium) | Font weight for label text |
| --label-required-icon-content | "*" | Content for the required indicator |
| --label-required-icon-size | 1em | Font size for the required indicator |
| --label-required-icon-color | var(--color-danger) | Color of the required indicator |
| --label-disabled-opacity | 0.6 | Opacity value when label is disabled |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Always associate labels with form controls using \`for\` attribute
- Ensure unique ID values for proper form element association
- Avoid using labels for non-form elements
- Do not rely solely on visual cues for required fields
- Keep label text concise and descriptive
        `}}}},o={render:e=>{let t=document.createElement(`div`),n=i({text:e.text,htmlFor:e.htmlFor,required:e.required,disabled:e.disabled});return t.append(n),t},args:{text:`Default Label`,htmlFor:``,required:!1,disabled:!1},play:async({canvasElement:e,args:n})=>{let i=r(e).getByRole(`generic`).querySelector(`label`);await t(i).toBeInTheDocument(),await t(i).toHaveClass(`m-label`),await t(i).toHaveTextContent(n.text),await(n.required?t(i).toHaveClass(`--required`):t(i).not.toHaveClass(`--required`)),await(n.disabled?t(i).toHaveClass(`--disabled`):t(i).not.toHaveClass(`--disabled`)),n.htmlFor&&await t(i).toHaveAttribute(`for`,n.htmlFor);let a=globalThis.getComputedStyle(i);await t(a.display).toBe(`block`),await t(Number.parseInt(a.fontWeight,10)).toBeGreaterThanOrEqual(500),n.disabled&&(await t(Number.parseFloat(a.opacity)).toBeLessThan(1),await t(a.cursor).toBe(`not-allowed`))}},s={render:()=>{let e=document.createElement(`div`);e.style.display=`flex`,e.style.flexDirection=`column`,e.style.gap=`0.5rem`,e.style.maxWidth=`300px`;let t=i({text:`Email Address`,htmlFor:`email-input`}),n=document.createElement(`input`);return n.className=`m-input`,n.id=`email-input`,n.type=`email`,n.placeholder=`Enter your email`,n.style.padding=`0.5rem`,n.style.border=`1px solid #d1d5db`,n.style.borderRadius=`0.375rem`,e.append(t,n),e},play:async({canvasElement:e})=>{let i=r(e),a=i.getByText(`Email Address`),o=i.getByRole(`textbox`);await t(a).toBeInTheDocument(),await t(a).toHaveClass(`m-label`),await t(o).toBeInTheDocument(),await t(a).toHaveAttribute(`for`,`email-input`),await t(o).toHaveAttribute(`id`,`email-input`),await t(o).toHaveAttribute(`type`,`email`),await n.click(a),await t(o).toHaveFocus(),await n.clear(o),await n.type(o,`test@example.com`),await t(o).toHaveValue(`test@example.com`),await t(o).toBeValid()},parameters:{docs:{description:{story:`Label properly associated with an input field using the for attribute. Demonstrates proper label-input relationship for accessibility.`}}}},c={render:()=>{let e=document.createElement(`div`);e.style.display=`flex`,e.style.flexDirection=`column`,e.style.gap=`0.5rem`,e.style.maxWidth=`300px`;let t=i({text:`Full Name`,htmlFor:`name-input`,required:!0}),n=document.createElement(`input`);n.className=`m-input`,n.id=`name-input`,n.type=`text`,n.placeholder=`Enter your full name`,n.required=!0,n.style.padding=`0.5rem`,n.style.border=`1px solid #d1d5db`,n.style.borderRadius=`0.375rem`;let r=document.createElement(`small`);return r.textContent=`This field is required`,r.style.color=`#6b7280`,r.style.fontSize=`0.75rem`,e.append(t,n,r),e},play:async({canvasElement:e})=>{let i=r(e),a=i.getByText(/Full Name/),o=i.getByRole(`textbox`),s=i.getByText(`This field is required`);await t(a).toBeInTheDocument(),await t(a).toHaveClass(`--required`),await t(o).toHaveAttribute(`required`),await t(s).toBeInTheDocument(),await t(globalThis.getComputedStyle(a,`::after`).content).toBe(`"*"`),await n.click(a),await t(o).toHaveFocus(),await t(o).toBeInvalid(),await n.type(o,`John Doe`),await t(o).toBeValid()},parameters:{docs:{description:{story:`Label for a required field with visual indicator. Shows the --required modifier and proper form validation integration.`}}}},l={render:()=>{let e=document.createElement(`div`);e.style.display=`flex`,e.style.flexDirection=`column`,e.style.gap=`1rem`,e.style.maxWidth=`300px`;let t=document.createElement(`div`);t.style.display=`flex`,t.style.flexDirection=`column`,t.style.gap=`0.5rem`;let n=i({text:`Enabled Field`,htmlFor:`enabled-input`}),r=document.createElement(`input`);r.id=`enabled-input`,r.type=`text`,r.placeholder=`You can type here`,r.style.padding=`0.5rem`,r.style.border=`1px solid #d1d5db`,r.style.borderRadius=`0.375rem`,t.append(n,r);let a=document.createElement(`div`);a.style.display=`flex`,a.style.flexDirection=`column`,a.style.gap=`0.5rem`;let o=i({text:`Disabled Field`,htmlFor:`disabled-input`,disabled:!0}),s=document.createElement(`input`);return s.id=`disabled-input`,s.type=`text`,s.placeholder=`Cannot type here`,s.disabled=!0,s.style.padding=`0.5rem`,s.style.border=`1px solid #d1d5db`,s.style.borderRadius=`0.375rem`,s.style.backgroundColor=`#f3f4f6`,s.style.cursor=`not-allowed`,a.append(o,s),e.append(t,a),e},play:async({canvasElement:e})=>{let i=r(e),a=i.getByText(`Enabled Field`),o=e.querySelector(`#enabled-input`),s=i.getByText(`Disabled Field`),c=e.querySelector(`#disabled-input`);await t(a).not.toHaveClass(`--disabled`),await n.click(a),await t(o).toHaveFocus(),await n.type(o,`test input`),await t(o).toHaveValue(`test input`),await t(c).toBeDisabled(),await t(s).toHaveClass(`--disabled`);let l=globalThis.getComputedStyle(s);await t(Number.parseFloat(l.opacity)).toBeLessThan(1),await t(l.cursor).toBe(`not-allowed`),await n.click(s),await t(c).not.toHaveFocus()},parameters:{docs:{description:{story:`Comparison between enabled and disabled label states. Shows the --disabled modifier behavior and visual differences.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const label = createLabel({
      text: args.text,
      htmlFor: args.htmlFor,
      required: args.required,
      disabled: args.disabled
    });
    container.append(label);
    return container;
  },
  args: {
    text: "Default Label",
    htmlFor: "",
    required: false,
    disabled: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByRole("generic").querySelector("label") as HTMLLabelElement;

    // Test basic properties
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveClass("m-label");
    await expect(label).toHaveTextContent(args.text);

    // Test modifier classes
    await (args.required ? expect(label).toHaveClass("--required") : expect(label).not.toHaveClass("--required"));
    await (args.disabled ? expect(label).toHaveClass("--disabled") : expect(label).not.toHaveClass("--disabled"));

    // Test htmlFor attribute
    if (args.htmlFor) {
      await expect(label).toHaveAttribute("for", args.htmlFor);
    }

    // Test CSS properties
    const computedStyle = globalThis.getComputedStyle(label);
    await expect(computedStyle.display).toBe("block");
    await expect(Number.parseInt(computedStyle.fontWeight, 10)).toBeGreaterThanOrEqual(500);

    // Test disabled styling
    if (args.disabled) {
      await expect(Number.parseFloat(computedStyle.opacity)).toBeLessThan(1);
      await expect(computedStyle.cursor).toBe("not-allowed");
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "0.5rem";
    container.style.maxWidth = "300px";
    const label = createLabel({
      text: "Email Address",
      htmlFor: "email-input"
    });
    const input = document.createElement("input");
    input.className = "m-input";
    input.id = "email-input";
    input.type = "email";
    input.placeholder = "Enter your email";
    input.style.padding = "0.5rem";
    input.style.border = "1px solid #d1d5db";
    input.style.borderRadius = "0.375rem";
    container.append(label, input);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Email Address");
    const input = canvas.getByRole("textbox");

    // Test label and input association
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveClass("m-label");
    await expect(input).toBeInTheDocument();
    await expect(label).toHaveAttribute("for", "email-input");
    await expect(input).toHaveAttribute("id", "email-input");
    await expect(input).toHaveAttribute("type", "email");

    // Test label click focuses input
    await userEvent.click(label);
    await expect(input).toHaveFocus();

    // Test typing functionality
    await userEvent.clear(input);
    await userEvent.type(input, "test@example.com");
    await expect(input).toHaveValue("test@example.com");

    // Test form validation behavior
    await expect(input).toBeValid();
  },
  parameters: {
    docs: {
      description: {
        story: "Label properly associated with an input field using the for attribute. Demonstrates proper label-input relationship for accessibility."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "0.5rem";
    container.style.maxWidth = "300px";
    const label = createLabel({
      text: "Full Name",
      htmlFor: "name-input",
      required: true
    });
    const input = document.createElement("input");
    input.className = "m-input";
    input.id = "name-input";
    input.type = "text";
    input.placeholder = "Enter your full name";
    input.required = true;
    input.style.padding = "0.5rem";
    input.style.border = "1px solid #d1d5db";
    input.style.borderRadius = "0.375rem";
    const helpText = document.createElement("small");
    helpText.textContent = "This field is required";
    helpText.style.color = "#6b7280";
    helpText.style.fontSize = "0.75rem";
    container.append(label, input, helpText);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(/Full Name/);
    const input = canvas.getByRole("textbox");
    const helpText = canvas.getByText("This field is required");

    // Test required field setup
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveClass("--required");
    await expect(input).toHaveAttribute("required");
    await expect(helpText).toBeInTheDocument();

    // Test CSS required indicator
    const pseudoElement = globalThis.getComputedStyle(label, "::after");
    await expect(pseudoElement.content).toBe("\\"*\\"");

    // Test interaction behavior
    await userEvent.click(label);
    await expect(input).toHaveFocus();

    // Test form validation
    await expect(input).toBeInvalid(); // Empty required field
    await userEvent.type(input, "John Doe");
    await expect(input).toBeValid(); // Filled required field
  },
  parameters: {
    docs: {
      description: {
        story: "Label for a required field with visual indicator. Shows the --required modifier and proper form validation integration."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1rem";
    container.style.maxWidth = "300px";

    // Enabled field
    const enabledGroup = document.createElement("div");
    enabledGroup.style.display = "flex";
    enabledGroup.style.flexDirection = "column";
    enabledGroup.style.gap = "0.5rem";
    const enabledLabel = createLabel({
      text: "Enabled Field",
      htmlFor: "enabled-input"
    });
    const enabledInput = document.createElement("input");
    enabledInput.id = "enabled-input";
    enabledInput.type = "text";
    enabledInput.placeholder = "You can type here";
    enabledInput.style.padding = "0.5rem";
    enabledInput.style.border = "1px solid #d1d5db";
    enabledInput.style.borderRadius = "0.375rem";
    enabledGroup.append(enabledLabel, enabledInput);

    // Disabled field
    const disabledGroup = document.createElement("div");
    disabledGroup.style.display = "flex";
    disabledGroup.style.flexDirection = "column";
    disabledGroup.style.gap = "0.5rem";
    const disabledLabel = createLabel({
      text: "Disabled Field",
      htmlFor: "disabled-input",
      disabled: true
    });
    const disabledInput = document.createElement("input");
    disabledInput.id = "disabled-input";
    disabledInput.type = "text";
    disabledInput.placeholder = "Cannot type here";
    disabledInput.disabled = true;
    disabledInput.style.padding = "0.5rem";
    disabledInput.style.border = "1px solid #d1d5db";
    disabledInput.style.borderRadius = "0.375rem";
    disabledInput.style.backgroundColor = "#f3f4f6";
    disabledInput.style.cursor = "not-allowed";
    disabledGroup.append(disabledLabel, disabledInput);
    container.append(enabledGroup, disabledGroup);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const enabledLabel = canvas.getByText("Enabled Field");
    const enabledInput = canvasElement.querySelector("#enabled-input") as HTMLInputElement;
    const disabledLabel = canvas.getByText("Disabled Field");
    const disabledInput = canvasElement.querySelector("#disabled-input") as HTMLInputElement;

    // Test enabled field functionality
    await expect(enabledLabel).not.toHaveClass("--disabled");
    await userEvent.click(enabledLabel);
    await expect(enabledInput).toHaveFocus();
    await userEvent.type(enabledInput, "test input");
    await expect(enabledInput).toHaveValue("test input");

    // Test disabled field state
    await expect(disabledInput).toBeDisabled();
    await expect(disabledLabel).toHaveClass("--disabled");

    // Test disabled styling
    const disabledStyle = globalThis.getComputedStyle(disabledLabel);
    await expect(Number.parseFloat(disabledStyle.opacity)).toBeLessThan(1);
    await expect(disabledStyle.cursor).toBe("not-allowed");

    // Test that disabled label doesn't focus disabled input
    await userEvent.click(disabledLabel);
    await expect(disabledInput).not.toHaveFocus();
  },
  parameters: {
    docs: {
      description: {
        story: "Comparison between enabled and disabled label states. Shows the --disabled modifier behavior and visual differences."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithInput`,`Required`,`Disabled`]}))();export{o as Default,l as Disabled,c as Required,s as WithInput,u as __namedExportsOrder,a as default};