import{n as e}from"./chunk-DnJy8xQt.js";var t,n=e((()=>{t=e=>{let t=document.createElement(`div`),n=document.createElement(`button`);n.classList.add(`m-btn`,`--primary`),n.textContent=`Show Snackbar`,n.setAttribute(`popovertarget`,e.id??`snackbar`);let r=document.createElement(`div`);r.classList.add(`m-snackbar`),r.popover=`manual`,r.id=e.id??`snackbar`,r.setAttribute(`role`,`alert`),e.transition&&r.classList.add(`--transition`),e.position&&e.position!==`default`&&r.classList.add(`--${e.position}`);let i=document.createElement(`div`);i.classList.add(`m-snackbar__body`);let a=document.createElement(`div`);a.classList.add(`m-snackbar__content`);let o=document.createElement(`span`);o.textContent=e.message,a.append(o);let s=document.createElement(`div`);if(s.classList.add(`m-snackbar__actions`),e.actions)for(let t of e.actions){let n=document.createElement(`button`);n.textContent=t.text,n.setAttribute(`popovertarget`,e.id??`snackbar`),t.ariaLabel&&n.setAttribute(`aria-label`,t.ariaLabel),t.onClick&&n.addEventListener(`click`,t.onClick),s.append(n)}else{let t=document.createElement(`button`);t.textContent=`OK`,t.setAttribute(`popovertarget`,e.id??`snackbar`);let n=document.createElement(`button`);n.textContent=`×`,n.setAttribute(`aria-label`,`Close snackbar`),n.setAttribute(`popovertarget`,e.id??`snackbar`),s.append(t,n)}return i.append(a,s),r.append(i),t.append(n,r),t}})),r,i,a,o,s,c,l;e((()=>{n(),{expect:r,within:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/Snackbar`,tags:[`autodocs`],argTypes:{message:{control:`text`,description:`The message content for the component`},position:{control:{type:`select`},options:[`default`,`right-top`,`right-bottom`,`left-top`],description:`The position modifier for the component`},transition:{control:{type:`boolean`},description:`The transition animation modifier for the component`},actions:{control:`object`,description:`The actions array for the component`},id:{control:`text`,description:`The ID attribute for the component`}},parameters:{docs:{description:{component:`
### Overview

The Snackbar component provides temporary notification messages that appear at the bottom of the screen. It uses the Popover API for modern, accessible overlay behavior with customizable positioning and transitions.

### Usage

Use Snackbars for brief confirmations, error messages, and status updates that don't require immediate user action. Ideal for form submission feedback, connection status, and non-critical notifications.

### Example code

\`\`\`html
<!-- Basic snackbar -->
<div class="m-snackbar" popover>
  <div class="m-snackbar__body">
    <div class="m-snackbar__content">Message sent successfully!</div>
    <div class="m-snackbar__actions">
      <button popovertarget="snackbar-1" popovertargetaction="hide">Close</button>
    </div>
  </div>
</div>

<!-- Positioned snackbar with transition -->
<div class="m-snackbar --right-top --transition" popover>
  <div class="m-snackbar__body">
    <div class="m-snackbar__content">Changes saved automatically</div>
  </div>
</div>
\`\`\`

### Elements

| Name | Description |
| ---- | ----------- |
| .m-snackbar__body | Content wrapper with flex layout for message and actions |
| .m-snackbar__actions | Container for action buttons (OK, Close, etc.) |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-snackbar | .--transition | Enables smooth fade-in/out animations |
| .m-snackbar | .--right-bottom | Positions snackbar at bottom-right corner |
| .m-snackbar | .--left-top | Positions snackbar at top-left corner |
| .m-snackbar | .--right-top | Positions snackbar at top-right corner |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --snackbar-position-x | var(--spacing-4) | Horizontal distance from screen edge |
| --snackbar-position-y | var(--spacing-4) | Vertical distance from screen edge |
| --snackbar-zindex | var(--zindex-snackbar) | Z-index for proper layering |
| --snackbar-margin-for-small-screens | var(--spacing-2) | Margin on mobile devices |
| --snackbar-bg-color | var(--color-primary) | Background color of the snackbar |
| --snackbar-text-color | var(--color-text-inverse) | Text color for message content |
| --snackbar-border-radius | var(--radius-sm) | Border radius for rounded corners |
| --snackbar-box-shadow | var(--shadow-md) | Drop shadow for elevation |
| --snackbar-inner-spacing | var(--spacing-3) | Internal padding and gaps |
| --snackbar-action-spacing | var(--spacing-2) | Spacing between action buttons |
| --snackbar-transition-duration | 0.2s | Animation timing for transitions |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Requires modern browser support for Popover API
- Use lpopoverm attribute for proper accessibility behavior
- Test across different screen sizes for responsive positioning
- Consider motion preferences when using transition animations
        `}}}},o={parameters:{docs:{description:{story:`Default snackbar notification with message and action buttons.`}}},render:e=>t(e),args:{message:`This is a snackbar message.`,position:`default`,transition:!1,id:`default-snackbar`},play:async({canvasElement:e})=>{let t=i(e),n=t.getByText(`Show Snackbar`);n.click();let a=t.getByRole(`alert`);await r(n).not.toBeNull(),await r(a).not.toBeNull(),await r(a).toHaveClass(`m-snackbar`),await r(a).toBeVisible(),t.getByLabelText(`Close snackbar`).click(),await r(a).not.toBeVisible()}},s={parameters:{docs:{description:{story:`Snackbar with smooth fade-in/out transition effects.`}}},render:()=>t({message:`Notification with smooth transitions.`,transition:!0,id:`transition-snackbar`}),play:async({canvasElement:e})=>{let t=i(e);t.getByText(`Show Snackbar`).click();let n=t.getByRole(`alert`);await r(n).toHaveClass(`m-snackbar`),await r(n).toHaveClass(`--transition`)}},c={parameters:{docs:{description:{story:`Snackbar positioned at different corners of the screen.`}}},render:()=>{let e=document.createElement(`div`);e.style.cssText=`display: flex; flex-direction: column; gap: 10px;`;for(let[n,{position:r,label:i}]of[{position:`default`,label:`Bottom Left (default)`},{position:`right-bottom`,label:`Bottom Right`},{position:`left-top`,label:`Top Left`},{position:`right-top`,label:`Top Right`}].entries()){let a=t({message:`Snackbar at ${i}`,position:r,id:`snackbar-${String(n)}`}),o=a.querySelector(`button`);o.textContent=`Show ${i}`,e.append(a)}return e},play:async({canvasElement:e})=>{let t=i(e).getAllByText(/Show/);await r(t.length).toBe(4);for(let e of t)await r(e).toHaveAttribute(`popovertarget`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default snackbar notification with message and action buttons."
      }
    }
  },
  render: args => createSnackbar(args),
  args: {
    message: "This is a snackbar message.",
    position: "default",
    transition: false,
    id: "default-snackbar"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Show Snackbar");
    button.click();
    const snackbar = canvas.getByRole("alert");
    await expect(button).not.toBeNull();
    await expect(snackbar).not.toBeNull();
    await expect(snackbar).toHaveClass("m-snackbar");
    await expect(snackbar).toBeVisible();
    const closeButton = canvas.getByLabelText("Close snackbar");
    closeButton.click();
    await expect(snackbar).not.toBeVisible();
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Snackbar with smooth fade-in/out transition effects."
      }
    }
  },
  render: () => createSnackbar({
    message: "Notification with smooth transitions.",
    transition: true,
    id: "transition-snackbar"
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Show Snackbar");
    button.click();
    const snackbar = canvas.getByRole("alert");
    await expect(snackbar).toHaveClass("m-snackbar");
    await expect(snackbar).toHaveClass("--transition");
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Snackbar positioned at different corners of the screen."
      }
    }
  },
  render: () => {
    const container = document.createElement("div");
    container.style.cssText = "display: flex; flex-direction: column; gap: 10px;";
    const positions: Array<{
      position: "default" | "right-top" | "right-bottom" | "left-top";
      label: string;
    }> = [{
      position: "default",
      label: "Bottom Left (default)"
    }, {
      position: "right-bottom",
      label: "Bottom Right"
    }, {
      position: "left-top",
      label: "Top Left"
    }, {
      position: "right-top",
      label: "Top Right"
    }];
    for (const [index, {
      position,
      label
    }] of positions.entries()) {
      const snackbarContainer = createSnackbar({
        message: \`Snackbar at \${label}\`,
        position,
        id: \`snackbar-\${String(index)}\`
      });
      const button = snackbarContainer.querySelector("button") as HTMLButtonElement;
      button.textContent = \`Show \${label}\`;
      container.append(snackbarContainer);
    }
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByText(/Show/);
    await expect(buttons.length).toBe(4);
    for (const button of buttons) {
      await expect(button).toHaveAttribute("popovertarget");
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`WithTransition`,`Positions`]}))();export{o as Default,c as Positions,s as WithTransition,l as __namedExportsOrder,a as default};