const l=(e={})=>{const a=document.createElement("input");return a.type="checkbox",a.classList.add("m-toggle"),e.checked&&(a.checked=e.checked),e.disabled&&(a.disabled=e.disabled),e.id&&(a.id=e.id),e.name&&(a.name=e.name),e.value&&(a.value=e.value),e.onChange&&a.addEventListener("change",()=>{e.onChange&&e.onChange(a.checked)}),a},{expect:n,within:r}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Toggle",tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"The disabled state for the component"},checked:{control:"boolean",description:"The checked state for the component"}},parameters:{docs:{description:{component:`
### Overview

The Toggle component provides a switch-style checkbox input with smooth animations and visual feedback. It offers an intuitive on/off control for boolean settings.

### Usage

Use Toggle components for binary choices, settings toggles, and feature enable/disable controls. Perfect for on/off settings, preferences, and boolean state controls with clear visual feedback.

### Example code

\`\`\`html
<!-- Basic toggle -->
<label>
  <input type="checkbox" class="m-toggle">
  Enable notifications
</label>

<!-- Checked toggle -->
<label>
  <input type="checkbox" class="m-toggle" checked>
  Dark mode enabled
</label>

<!-- Disabled toggle -->
<label>
  <input type="checkbox" class="m-toggle" disabled>
  Feature unavailable
</label>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

This component has no modifiers.

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --toggle-size | 1.2em | Size of the toggle switch |
| --toggle-transition | 0.1s ease | Animation timing for state changes |
| --toggle-width | calc(var(--toggle-size) * 1.8) | Width of the toggle track |
| --toggle-checked-translate-x | calc(var(--toggle-size) * 0.8) | Translation distance when checked |
| --toggle-bg-color | var(--color-bg-inverse) | Background color when unchecked |
| --toggle-bg-color-checked | var(--color-primary) | Background color when checked |
| --toggle-button-color | var(--color-text-inverse) | Color of the sliding button |
| --toggle-button-scale | 0.8 | Scale factor for the button |
| --toggle-lighter-brightness | 150% | Brightness for hover/focus states |
| --toggle-disabled-opacity | 0.5 | Opacity when disabled |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Always provide labels for accessibility compliance
- Ensure sufficient color contrast between states
- Test keyboard navigation and screen reader compatibility
- Consider motion preferences for transition animations
        `}},a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},o={parameters:{docs:{description:{story:"Default toggle switch with interactive behavior."}}},render:e=>l(e),args:{checked:!1,disabled:!1},play:async({canvasElement:e})=>{const t=r(e).getByRole("checkbox");await n(t).not.toBeNull(),await n(t).toHaveClass("m-toggle"),await n(t).not.toBeChecked(),t.click(),await n(t).toBeChecked(),t.click(),await n(t).not.toBeChecked()}},c={parameters:{docs:{description:{story:"Toggle in checked state showing active styling."}}},render:()=>l({checked:!0}),play:async({canvasElement:e})=>{const t=r(e).getByRole("checkbox");await n(t).not.toBeNull(),await n(t).toHaveClass("m-toggle"),await n(t).toBeChecked()}},s={parameters:{docs:{description:{story:"Toggle in disabled state with reduced opacity and no interaction."}}},render:()=>{const e=l({disabled:!0}),a=l({checked:!0,disabled:!0}),t=document.createElement("div");return t.style.display="flex",t.style.gap="1rem",t.append(e),t.append(a),t},play:async({canvasElement:e})=>{const t=r(e).getAllByRole("checkbox");for(const i of t)await n(i).not.toBeNull(),await n(i).toHaveClass("m-toggle"),await n(i).toBeDisabled()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default toggle switch with interactive behavior."
      }
    }
  },
  render: args => createToggle(args),
  args: {
    checked: false,
    disabled: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("checkbox");
    await expect(toggle).not.toBeNull();
    await expect(toggle).toHaveClass("m-toggle");
    await expect(toggle).not.toBeChecked();
    toggle.click();
    await expect(toggle).toBeChecked();
    toggle.click();
    await expect(toggle).not.toBeChecked();
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Toggle in checked state showing active styling."
      }
    }
  },
  render: () => createToggle({
    checked: true
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("checkbox");
    await expect(toggle).not.toBeNull();
    await expect(toggle).toHaveClass("m-toggle");
    await expect(toggle).toBeChecked();
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Toggle in disabled state with reduced opacity and no interaction."
      }
    }
  },
  render: () => {
    const notChecked = createToggle({
      disabled: true
    });
    const checked = createToggle({
      checked: true,
      disabled: true
    });
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "1rem";
    container.append(notChecked);
    container.append(checked);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggles = canvas.getAllByRole("checkbox");
    for (const toggle of toggles) {
      await expect(toggle).not.toBeNull();
      await expect(toggle).toHaveClass("m-toggle");
      await expect(toggle).toBeDisabled();
    }
  }
}`,...s.parameters?.docs?.source}}};const d=["Default","Checked","Disabled"];export{c as Checked,o as Default,s as Disabled,d as __namedExportsOrder,g as default};
