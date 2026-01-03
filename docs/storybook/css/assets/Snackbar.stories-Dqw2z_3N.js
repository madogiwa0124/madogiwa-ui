const u=t=>{const e=document.createElement("div"),a=document.createElement("button");a.classList.add("m-btn","--primary"),a.textContent="Show Snackbar",a.setAttribute("popovertarget",t.id??"snackbar");const n=document.createElement("div");n.classList.add("m-snackbar"),n.popover="manual",n.id=t.id??"snackbar",n.setAttribute("role","alert"),t.transition&&n.classList.add("--transition"),t.position&&t.position!=="default"&&n.classList.add(`--${t.position}`);const r=document.createElement("div");r.classList.add("m-snackbar__body");const c=document.createElement("div");c.classList.add("m-snackbar__content");const l=document.createElement("span");l.textContent=t.message,c.append(l);const b=document.createElement("div");if(b.classList.add("m-snackbar__actions"),t.actions)for(const s of t.actions){const o=document.createElement("button");o.textContent=s.text,o.setAttribute("popovertarget",t.id??"snackbar"),s.ariaLabel&&o.setAttribute("aria-label",s.ariaLabel),s.onClick&&o.addEventListener("click",s.onClick),b.append(o)}else{const s=document.createElement("button");s.textContent="OK",s.setAttribute("popovertarget",t.id??"snackbar");const o=document.createElement("button");o.textContent="×",o.setAttribute("aria-label","Close snackbar"),o.setAttribute("popovertarget",t.id??"snackbar"),b.append(s,o)}return r.append(c,b),n.append(r),e.append(a,n),e},{expect:i,within:f}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Snackbar",tags:["autodocs"],argTypes:{message:{control:"text",description:"The message content for the component"},position:{control:{type:"select"},options:["default","right-top","right-bottom","left-top"],description:"The position modifier for the component"},transition:{control:{type:"boolean"},description:"The transition animation modifier for the component"},actions:{control:"object",description:"The actions array for the component"},id:{control:"text",description:"The ID attribute for the component"}},parameters:{docs:{description:{component:`
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
        `}}}},d={parameters:{docs:{description:{story:"Default snackbar notification with message and action buttons."}}},render:t=>u(t),args:{message:"This is a snackbar message.",position:"default",transition:!1,id:"default-snackbar"},play:async({canvasElement:t})=>{const e=f(t),a=e.getByText("Show Snackbar");a.click();const n=e.getByRole("alert");await i(a).not.toBeNull(),await i(n).not.toBeNull(),await i(n).toHaveClass("m-snackbar"),await i(n).toBeVisible(),e.getByLabelText("Close snackbar").click(),await i(n).not.toBeVisible()}},p={parameters:{docs:{description:{story:"Snackbar with smooth fade-in/out transition effects."}}},render:()=>u({message:"Notification with smooth transitions.",transition:!0,id:"transition-snackbar"}),play:async({canvasElement:t})=>{const e=f(t);e.getByText("Show Snackbar").click();const n=e.getByRole("alert");await i(n).toHaveClass("m-snackbar"),await i(n).toHaveClass("--transition")}},m={parameters:{docs:{description:{story:"Snackbar positioned at different corners of the screen."}}},render:()=>{const t=document.createElement("div");t.style.cssText="display: flex; flex-direction: column; gap: 10px;";const e=[{position:"default",label:"Bottom Left (default)"},{position:"right-bottom",label:"Bottom Right"},{position:"left-top",label:"Top Left"},{position:"right-top",label:"Top Right"}];for(const[a,{position:n,label:r}]of e.entries()){const c=u({message:`Snackbar at ${r}`,position:n,id:`snackbar-${String(a)}`}),l=c.querySelector("button");l.textContent=`Show ${r}`,t.append(c)}return t},play:async({canvasElement:t})=>{const a=f(t).getAllByText(/Show/);await i(a.length).toBe(4);for(const n of a)await i(n).toHaveAttribute("popovertarget")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const g=["Default","WithTransition","Positions"];export{d as Default,m as Positions,p as WithTransition,g as __namedExportsOrder,k as default};
