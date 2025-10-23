const{expect:n,userEvent:r,within:m}=__STORYBOOK_MODULE_TEST__,d=(a={})=>{const{text:l="Label",htmlFor:t,required:e=!1,disabled:s=!1,className:o=""}=a,i=document.createElement("label");return i.className=`m-label ${o}`.trim(),i.textContent=l,t&&(i.htmlFor=t),e&&i.classList.add("--required"),s&&i.classList.add("--disabled"),i},y={title:"Components/Label",tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The label text content"},htmlFor:{control:{type:"text"},description:"The ID of the form element this label is associated with"},required:{control:{type:"boolean"},description:"Whether the associated form field is required"},disabled:{control:{type:"boolean"},description:"Whether the label appears disabled"}},parameters:{docs:{description:{component:`
### Overview

The Label component provides accessible and consistent labeling for form elements. It ensures proper association between labels and form controls, supporting screen readers and improving usability for all users.

### Usage

Use labels for:
- Form input identification and description
- Accessible form design and compliance
- Clear user guidance and instruction
- Required field indication
- Form field grouping and organization

**Common use cases:**
- Text inputs, textareas, and select elements
- Checkbox and radio button groups
- File upload controls
- Form sections and fieldsets
- Required field indicators

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
| --label-spacing-bottom | var(--spacing-1) | Bottom margin when not last child |
| --label-required-icon-content | "*" | Content for the required indicator |
| --label-required-icon-size | 1em | Font size for the required indicator |
| --label-required-icon-color | var(--color-danger) | Color of the required indicator |
| --label-disabled-opacity | 0.6 | Opacity value when label is disabled |

### Caution
- Avoid using labels without associated form controls
- Do not use labels for non-form elements
- Ensure unique htmlFor values for proper association
- Avoid excessive label text length
- Do not rely solely on visual cues for required fields
        `}}}},c={render:a=>{const l=document.createElement("div"),t=d({text:a.text,htmlFor:a.htmlFor,required:a.required,disabled:a.disabled});return l.append(t),l},args:{text:"Default Label",htmlFor:"",required:!1,disabled:!1},play:async({canvasElement:a,args:l})=>{const e=m(a).getByRole("generic").querySelector("label");await n(e).toBeInTheDocument(),await n(e).toHaveClass("m-label"),await n(e).toHaveTextContent(l.text),await(l.required?n(e).toHaveClass("--required"):n(e).not.toHaveClass("--required")),await(l.disabled?n(e).toHaveClass("--disabled"):n(e).not.toHaveClass("--disabled")),l.htmlFor&&await n(e).toHaveAttribute("for",l.htmlFor);const s=globalThis.getComputedStyle(e);await n(s.display).toBe("block"),await n(Number.parseInt(s.fontWeight,10)).toBeGreaterThanOrEqual(500),l.disabled&&(await n(Number.parseFloat(s.opacity)).toBeLessThan(1),await n(s.cursor).toBe("not-allowed"))}},p={render:()=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="0.5rem",a.style.maxWidth="300px";const l=d({text:"Email Address",htmlFor:"email-input"}),t=document.createElement("input");return t.className="m-input",t.id="email-input",t.type="email",t.placeholder="Enter your email",t.style.padding="0.5rem",t.style.border="1px solid #d1d5db",t.style.borderRadius="0.375rem",a.append(l,t),a},play:async({canvasElement:a})=>{const l=m(a),t=l.getByText("Email Address"),e=l.getByRole("textbox");await n(t).toBeInTheDocument(),await n(t).toHaveClass("m-label"),await n(e).toBeInTheDocument(),await n(t).toHaveAttribute("for","email-input"),await n(e).toHaveAttribute("id","email-input"),await n(e).toHaveAttribute("type","email"),await r.click(t),await n(e).toHaveFocus(),await r.clear(e),await r.type(e,"test@example.com"),await n(e).toHaveValue("test@example.com"),await n(e).toBeValid()},parameters:{docs:{description:{story:"Label properly associated with an input field using the for attribute. Demonstrates proper label-input relationship for accessibility."}}}},u={render:()=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="0.5rem",a.style.maxWidth="300px";const l=d({text:"Full Name",htmlFor:"name-input",required:!0}),t=document.createElement("input");t.className="m-input",t.id="name-input",t.type="text",t.placeholder="Enter your full name",t.required=!0,t.style.padding="0.5rem",t.style.border="1px solid #d1d5db",t.style.borderRadius="0.375rem";const e=document.createElement("small");return e.textContent="This field is required",e.style.color="#6b7280",e.style.fontSize="0.75rem",a.append(l,t,e),a},play:async({canvasElement:a})=>{const l=m(a),t=l.getByText(/Full Name/),e=l.getByRole("textbox"),s=l.getByText("This field is required");await n(t).toBeInTheDocument(),await n(t).toHaveClass("--required"),await n(e).toHaveAttribute("required"),await n(s).toBeInTheDocument();const o=globalThis.getComputedStyle(t,"::after");await n(o.content).toBe('"*"'),await r.click(t),await n(e).toHaveFocus(),await n(e).toBeInvalid(),await r.type(e,"John Doe"),await n(e).toBeValid()},parameters:{docs:{description:{story:"Label for a required field with visual indicator. Shows the --required modifier and proper form validation integration."}}}},b={render:()=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="1rem",a.style.maxWidth="300px";const l=document.createElement("div");l.style.display="flex",l.style.flexDirection="column",l.style.gap="0.5rem";const t=d({text:"Enabled Field",htmlFor:"enabled-input"}),e=document.createElement("input");e.id="enabled-input",e.type="text",e.placeholder="You can type here",e.style.padding="0.5rem",e.style.border="1px solid #d1d5db",e.style.borderRadius="0.375rem",l.append(t,e);const s=document.createElement("div");s.style.display="flex",s.style.flexDirection="column",s.style.gap="0.5rem";const o=d({text:"Disabled Field",htmlFor:"disabled-input",disabled:!0}),i=document.createElement("input");return i.id="disabled-input",i.type="text",i.placeholder="Cannot type here",i.disabled=!0,i.style.padding="0.5rem",i.style.border="1px solid #d1d5db",i.style.borderRadius="0.375rem",i.style.backgroundColor="#f3f4f6",i.style.cursor="not-allowed",s.append(o,i),a.append(l,s),a},play:async({canvasElement:a})=>{const l=m(a),t=l.getByText("Enabled Field"),e=a.querySelector("#enabled-input"),s=l.getByText("Disabled Field"),o=a.querySelector("#disabled-input");await n(t).not.toHaveClass("--disabled"),await r.click(t),await n(e).toHaveFocus(),await r.type(e,"test input"),await n(e).toHaveValue("test input"),await n(o).toBeDisabled(),await n(s).toHaveClass("--disabled");const i=globalThis.getComputedStyle(s);await n(Number.parseFloat(i.opacity)).toBeLessThan(1),await n(i.cursor).toBe("not-allowed"),await r.click(s),await n(o).not.toHaveFocus()},parameters:{docs:{description:{story:"Comparison between enabled and disabled label states. Shows the --disabled modifier behavior and visual differences."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const x=["Default","WithInput","Required","Disabled"];export{c as Default,b as Disabled,u as Required,p as WithInput,x as __namedExportsOrder,y as default};
