const i=(e={})=>{const a=document.createElement("input");return a.type="checkbox",a.classList.add("m-toggle"),e.checked&&(a.checked=e.checked),e.disabled&&(a.disabled=e.disabled),e.id&&(a.id=e.id),e.name&&(a.name=e.name),e.value&&(a.value=e.value),e.onChange&&a.addEventListener("change",()=>{e.onChange&&e.onChange(a.checked)}),a},{expect:n,within:r}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Toggle",tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Disables the toggle switch"},checked:{control:"boolean",description:"Indicates whether the toggle is checked"}},parameters:{docs:{description:{component:`
### Overview

The Toggle component provides a switch-style checkbox input with smooth animations and visual feedback. It offers an intuitive on/off control for boolean settings.

### Usage

Use Toggle components for binary choices, settings toggles, and feature enable/disable controls. The component provides clear visual state indication and smooth transitions for better user experience.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-toggle | --toggle-size | 1.2em | Size of the toggle switch |
| .m-toggle | --toggle-transition | 0.1s ease | Animation timing for state changes |
| .m-toggle | --toggle-width | calc(var(--toggle-size) * 1.8) | Width of the toggle track |
| .m-toggle | --toggle-checked-translate-x | calc(var(--toggle-size) * 0.8) | Translation distance when checked |
| .m-toggle | --toggle-bg-color | var(--color-dark) | Background color when unchecked |
| .m-toggle | --toggle-bg-color-checked | var(--color-primary) | Background color when checked |
| .m-toggle | --toggle-button-color | var(--color-light) | Color of the sliding button |
| .m-toggle | --toggle-button-scale | 0.8 | Scale factor for the button |
| .m-toggle | --toggle-lighter-brightness | 150% | Brightness for hover/focus states |
| .m-toggle | --toggle-disabled-opacity | 0.5 | Opacity when disabled |

### Data Attributes

No specific data attributes are defined for this component.

### Caution

- The component requires proper labeling for accessibility
- Animations depend on CSS transitions and transforms
- Color variables should provide sufficient contrast
- Disabled state prevents interaction but maintains visual clarity
        `}},a11y:{config:{rules:[{id:"label",enabled:!1}]}}}},o={parameters:{docs:{description:{story:"Default toggle switch with interactive behavior."}}},render:e=>i(e),args:{checked:!1,disabled:!1},play:async({canvasElement:e})=>{const t=r(e).getByRole("checkbox");await n(t).not.toBeNull(),await n(t).toHaveClass("m-toggle"),await n(t).not.toBeChecked(),t.click(),await n(t).toBeChecked(),t.click(),await n(t).not.toBeChecked()}},c={parameters:{docs:{description:{story:"Toggle in checked state showing active styling."}}},render:()=>i({checked:!0}),play:async({canvasElement:e})=>{const t=r(e).getByRole("checkbox");await n(t).not.toBeNull(),await n(t).toHaveClass("m-toggle"),await n(t).toBeChecked()}},s={parameters:{docs:{description:{story:"Toggle in disabled state with reduced opacity and no interaction."}}},render:()=>{const e=i({disabled:!0}),a=i({checked:!0,disabled:!0}),t=document.createElement("div");return t.style.display="flex",t.style.gap="1rem",t.append(e),t.append(a),t},play:async({canvasElement:e})=>{const t=r(e).getAllByRole("checkbox");for(const l of t)await n(l).not.toBeNull(),await n(l).toHaveClass("m-toggle"),await n(l).toBeDisabled()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
