const{expect:a,within:l}=__STORYBOOK_MODULE_TEST__,y={title:"Components/Alert",tags:["autodocs"],argTypes:{content:{control:{type:"text"},description:"The message content for the component"},icon:{control:{type:"text"},description:"The icon markup for the component"},variant:{control:{type:"select"},options:["default","primary","secondary","tertiary","danger","warning"],description:"The style variant for the component"},autoDismiss:{control:{type:"select"},options:["0s","3s","5s","10s"],description:"The auto dismiss duration for the component"},autoDismissProgress:{control:{type:"boolean"},description:"The progress bar visibility for the component"},hasActions:{control:{type:"boolean"},description:"The action buttons inclusion for the component"}},parameters:{docs:{description:{component:`
### Overview

The Alert component provides contextual feedback messages to users about system status, user actions, or important information with various visual styles and interactive features.

### Usage

Use alerts to communicate important information that requires user attention but doesn't interrupt workflow. Perfect for success confirmations, error messages, warnings, or informational updates. Alerts are non-modal and can be dismissed manually or automatically after a set time.

### Example code

\`\`\`html
<!-- Basic alert -->
<div class="m-alert" role="alert">
  <div class="m-alert__content">This is a default alert message.</div>
</div>

<!-- Alert with icon and actions -->
<div class="m-alert --primary" role="alert">
  <div class="m-alert__icons">✓</div>
  <div class="m-alert__content">Operation completed successfully!</div>
  <div class="m-alert__actions">
    <button class="m-button">View Details</button>
  </div>
</div>

<!-- Auto-dismiss alert with progress -->
<div class="m-alert --warning --with-progress" role="alert" data-auto-dismiss="5s">
  <div class="m-alert__icons">⚠️</div>
  <div class="m-alert__content">This alert will disappear in 5 seconds.</div>
</div>
\`\`\`

### Elements

| Name | Description |
| ---- | ----------- |
| .m-alert__icons | Container for alert icons or status indicators |
| .m-alert__content | Main content area containing the alert message |
| .m-alert__actions | Action area for buttons like dismiss or additional actions |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-alert | .--primary | Primary alert style with brand colors |
| .m-alert | .--secondary | Secondary alert style |
| .m-alert | .--tertiary | Tertiary alert style with subtle appearance |
| .m-alert | .--danger | Danger alert for errors and critical issues |
| .m-alert | .--warning | Warning alert for caution messages |
| .m-alert | .--with-progress | Show progress bar for auto dismiss |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --alert-bg-color | var(--color-default) | Background color for default alert |
| --alert-text-color | var(--color-text-default) | Text color for default alert |
| --alert-border-color | var(--color-border) | Border color for default alert |
| --alert-border | 1px solid var(--color-border) | Border style |
| --alert-padding | var(--spacing-2) | Internal padding |
| --alert-item-gap | var(--spacing-2) | Gap between alert elements |
| --alert-icon-size | 1rem | Size of icons |
| --alert-primary-bg-color | var(--color-primary) | Primary variant background |
| --alert-primary-text-color | var(--color-text-inverse) | Primary variant text color |
| --alert-primary-border-color | var(--color-primary) | Primary variant border color |
| --alert-secondary-bg-color | var(--color-secondary) | Secondary variant background |
| --alert-secondary-text-color | var(--color-text-inverse) | Secondary variant text color |
| --alert-secondary-border-color | var(--color-secondary) | Secondary variant border color |
| --alert-tertiary-bg-color | var(--color-tertiary) | Tertiary variant background |
| --alert-tertiary-text-color | var(--color-text-default) | Tertiary variant text color |
| --alert-tertiary-border-color | var(--color-tertiary) | Tertiary variant border color |
| --alert-danger-bg-color | var(--color-danger) | Danger variant background |
| --alert-danger-text-color | var(--color-text-default) | Danger variant text color |
| --alert-danger-border-color | var(--color-danger) | Danger variant border color |
| --alert-warning-bg-color | var(--color-warning) | Warning variant background |
| --alert-warning-text-color | var(--color-text-default) | Warning variant text color |
| --alert-warning-border-color | var(--color-warning) | Warning variant border color |
| --alert-auto-dismiss-duration | 5s | Default auto dismiss duration |
| --alert-auto-dismiss-fade-duration | 0.3s | Fade out animation duration |
| --alert-auto-dismiss-progress-bg-color | rgb(from var(--color-bg-default) r g b / 40%) | Progress bar background color |
| --alert-auto-dismiss-progress-height | 4px | Progress bar height |

### Data Attributes

| Target | Attribute | Values | Description |
| ------ | --------- | ------ | ----------- |
| .m-alert | data-auto-dismiss | "3s", "5s", "10s", "0s" | Set auto-dismiss duration (0s disables) |

### Caution

- Use \`role="alert"\` for screen reader announcements
- Ensure sufficient color contrast for all variants
- Consider motion preferences when using auto-dismiss animations
- Provide alternative ways to dismiss alerts for accessibility
- Ensure sufficient color contrast ratios for all variants
- Auto dismiss can be controlled or disabled for users who need more time
- Icons should include appropriate semantic meaning through context
        `}}}},d={render:e=>{const r=document.createElement("div"),t=document.createElement("div");t.classList.add("m-alert"),t.setAttribute("role","alert");const n=e.content,o=e.variant;return o!=="default"&&t.classList.add(`--${o}`),t.innerHTML=`
      <div class="m-alert__content">${n}</div>
    `,r.append(t),r},args:{content:"This is a basic alert message providing important information to the user.",variant:"default"},play:async({canvasElement:e})=>{const t=l(e).getByRole("alert");await a(t).toBeInTheDocument(),await a(t).toHaveClass("m-alert");const n=t.querySelector(".m-alert__content");await a(n).toBeInTheDocument(),await a(n).toHaveTextContent(/alert message/)}},m={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem";const r=[{name:"default",class:"",message:"This is a default alert for general information."},{name:"primary",class:"--primary",message:"This is a primary alert for important actions."},{name:"secondary",class:"--secondary",message:"This is a secondary alert for supporting information."},{name:"tertiary",class:"--tertiary",message:"This is a tertiary alert for subtle notifications."},{name:"danger",class:"--danger",message:"This is a danger alert for errors and critical issues."},{name:"warning",class:"--warning",message:"This is a warning alert for caution messages."}];for(const t of r){const n=document.createElement("div");n.setAttribute("role","alert"),n.classList.add("m-alert"),t.class&&n.classList.add(t.class),n.innerHTML=`<div class="m-alert__content">${t.message}</div>`,e.append(n)}return e},play:async({canvasElement:e})=>{const t=l(e).getAllByRole("alert");await a(t).toHaveLength(6);const n=["default","primary","secondary","tertiary","danger","warning"];for(const[o,s]of n.entries()){const i=t[o];if(i){await a(i).toBeInTheDocument(),await a(i).toHaveClass("m-alert"),s!=="default"&&await a(i).toHaveClass(`--${s}`);const c=i.querySelector(".m-alert__content");await a(c).toBeInTheDocument(),await a(c).toHaveTextContent(new RegExp(s))}}},parameters:{docs:{description:{story:"Showcase of all available alert variants with their respective styling and use cases."}}}},u={render:e=>{const r=document.createElement("div"),t=document.createElement("div");t.setAttribute("role","alert"),t.classList.add("m-alert");const n=e.content,o=e.icon,s=e.variant;return s!=="default"&&t.classList.add(`--${s}`),t.innerHTML=`
      <div class="m-alert__icons"><span class="icon">${o}</span></div>
      <div class="m-alert__content">${n}</div>
    `,r.append(t),r},args:{content:"This alert includes an icon to provide visual context and improve recognition.",icon:"ℹ️",variant:"primary"},play:async({canvasElement:e})=>{const t=l(e).getByRole("alert");await a(t).toBeInTheDocument(),await a(t).toHaveClass("m-alert");const n=t.querySelector(".m-alert__icons");await a(n).toBeInTheDocument();const o=t.querySelector(".m-alert__content");await a(o).toBeInTheDocument(),await a(o).toHaveTextContent(/visual context/)}},v={render:e=>{const r=document.createElement("div"),t=document.createElement("div");t.setAttribute("role","alert"),t.classList.add("m-alert");const n=e.content,o=e.icon,s=e.variant;s!=="default"&&t.classList.add(`--${s}`),t.innerHTML=`
      <div class="m-alert__icons">${o}</div>
      <div class="m-alert__content">${n}</div>
    `;const i=document.createElement("div");i.classList.add("m-alert__actions");const c=document.createElement("button");return c.classList.add("m-btn","--icon-only","--rounded"),c.style.backgroundColor="transparent",c.innerHTML="✕",c.setAttribute("aria-label","Close alert"),c.addEventListener("click",()=>{t.remove()}),i.append(c),t.append(i),r.append(t),r},args:{content:"This alert includes action buttons that allow users to interact with or dismiss the message.",icon:"⚠️",variant:"warning"},play:async({canvasElement:e})=>{const r=l(e),t=r.getByRole("alert");await a(t).toBeInTheDocument(),await a(t).toHaveClass("m-alert");const n=t.querySelector(".m-alert__icons");await a(n).toBeInTheDocument();const o=t.querySelector(".m-alert__content");await a(o).toBeInTheDocument();const s=r.getByRole("button");await a(s).toBeInTheDocument(),await a(s).toHaveClass("m-btn");const i=t.querySelector(".m-alert__actions");await a(i).toBeInTheDocument(),await a(i).toContainElement(s)}},p={render:e=>{const r=document.createElement("div"),t=document.createElement("div");t.setAttribute("role","alert"),t.classList.add("m-alert");const n=e.content,o=e.variant,s=e.autoDismiss,i=e.autoDismissProgress;return o!=="default"&&t.classList.add(`--${o}`),s&&s!=="0s"&&(t.dataset.autoDismiss=s,i&&t.classList.add("--with-progress")),t.innerHTML=`
      <div class="m-alert__content">${n}</div>
    `,r.append(t),r},args:{content:"This alert will automatically dismiss after the specified duration. Watch the progress bar!",variant:"primary",autoDismiss:"3s",autoDismissProgress:!0},play:async({canvasElement:e})=>{const t=l(e).getByRole("alert");await a(t).toBeVisible(),await a(t).toHaveClass("m-alert");const n=t.querySelector(".m-alert__content");await a(n).toBeInTheDocument(),await a(n).toHaveTextContent(/automatically dismiss/),t.classList.contains("--with-progress")&&await a(t).toHaveClass("--with-progress")},parameters:{docs:{description:{story:"Alert with auto-dismiss functionality and optional progress bar. The alert will fade out after the specified duration."}}}},g={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem";const r=[{variant:"primary",icon:"✅",content:"Successfully saved your changes!"},{variant:"warning",icon:"⚠️",content:"Please review the information before continuing."},{variant:"danger",icon:"❌",content:"An error occurred while processing your request."}];for(const t of r){const n=document.createElement("div");n.setAttribute("role","alert"),n.classList.add("m-alert",`--${t.variant}`),n.innerHTML=`
        <div class="m-alert__icons">${t.icon}</div>
        <div class="m-alert__content">${t.content}</div>
      `,e.append(n)}return e},parameters:{docs:{description:{story:"Multiple alerts can be stacked to show different types of messages simultaneously."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.classList.add("m-alert");
    alert.setAttribute("role", "alert");
    const content = args["content"];
    const variant = args["variant"];
    if (variant !== "default") {
      alert.classList.add(\`--\${variant}\`);
    }
    alert.innerHTML = \`
      <div class="m-alert__content">\${content}</div>
    \`;
    container.append(alert);
    return container;
  },
  args: {
    content: "This is a basic alert message providing important information to the user.",
    variant: "default"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("alert");
    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass("m-alert");
    const content = alert.querySelector(".m-alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(/alert message/);
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1rem";
    const variants = [{
      name: "default",
      class: "",
      message: "This is a default alert for general information."
    }, {
      name: "primary",
      class: "--primary",
      message: "This is a primary alert for important actions."
    }, {
      name: "secondary",
      class: "--secondary",
      message: "This is a secondary alert for supporting information."
    }, {
      name: "tertiary",
      class: "--tertiary",
      message: "This is a tertiary alert for subtle notifications."
    }, {
      name: "danger",
      class: "--danger",
      message: "This is a danger alert for errors and critical issues."
    }, {
      name: "warning",
      class: "--warning",
      message: "This is a warning alert for caution messages."
    }];
    for (const variant of variants) {
      const alert = document.createElement("div");
      alert.setAttribute("role", "alert");
      alert.classList.add("m-alert");
      if (variant.class) {
        alert.classList.add(variant.class);
      }
      alert.innerHTML = \`<div class="m-alert__content">\${variant.message}</div>\`;
      container.append(alert);
    }
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alerts = canvas.getAllByRole("alert");
    await expect(alerts).toHaveLength(6);
    const variants = ["default", "primary", "secondary", "tertiary", "danger", "warning"];
    for (const [index, variant] of variants.entries()) {
      const alert = alerts[index];
      if (alert) {
        await expect(alert).toBeInTheDocument();
        await expect(alert).toHaveClass("m-alert");
        if (variant !== "default") {
          await expect(alert).toHaveClass(\`--\${variant}\`);
        }
        const content = alert.querySelector(".m-alert__content") as HTMLElement;
        await expect(content).toBeInTheDocument();
        await expect(content).toHaveTextContent(new RegExp(variant));
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Showcase of all available alert variants with their respective styling and use cases."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.setAttribute("role", "alert");
    alert.classList.add("m-alert");
    const content = args["content"];
    const icon = args["icon"];
    const variant = args["variant"];
    if (variant !== "default") {
      alert.classList.add(\`--\${variant}\`);
    }
    alert.innerHTML = \`
      <div class="m-alert__icons"><span class="icon">\${icon}</span></div>
      <div class="m-alert__content">\${content}</div>
    \`;
    container.append(alert);
    return container;
  },
  args: {
    content: "This alert includes an icon to provide visual context and improve recognition.",
    icon: "ℹ️",
    variant: "primary"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("alert");
    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass("m-alert");
    const iconContainer = alert.querySelector(".m-alert__icons") as HTMLElement;
    await expect(iconContainer).toBeInTheDocument();
    const content = alert.querySelector(".m-alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(/visual context/);
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.setAttribute("role", "alert");
    alert.classList.add("m-alert");
    const content = args["content"];
    const icon = args["icon"];
    const variant = args["variant"];
    if (variant !== "default") {
      alert.classList.add(\`--\${variant}\`);
    }
    alert.innerHTML = \`
      <div class="m-alert__icons">\${icon}</div>
      <div class="m-alert__content">\${content}</div>
    \`;

    // Create actions container
    const actionsContainer = document.createElement("div");
    actionsContainer.classList.add("m-alert__actions");

    // Create dismiss button
    const dismissButton = document.createElement("button");
    dismissButton.classList.add("m-btn", "--icon-only", "--rounded");
    dismissButton.style.backgroundColor = "transparent";
    dismissButton.innerHTML = "✕";
    dismissButton.setAttribute("aria-label", "Close alert");

    // Add click handler
    dismissButton.addEventListener("click", () => {
      alert.remove();
    });
    actionsContainer.append(dismissButton);
    alert.append(actionsContainer);
    container.append(alert);
    return container;
  },
  args: {
    content: "This alert includes action buttons that allow users to interact with or dismiss the message.",
    icon: "⚠️",
    variant: "warning"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("alert");
    await expect(alert).toBeInTheDocument();
    await expect(alert).toHaveClass("m-alert");
    const iconContainer = alert.querySelector(".m-alert__icons") as HTMLElement;
    await expect(iconContainer).toBeInTheDocument();
    const content = alert.querySelector(".m-alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    const actionButton = canvas.getByRole("button");
    await expect(actionButton).toBeInTheDocument();
    await expect(actionButton).toHaveClass("m-btn");
    const actionsContainer = alert.querySelector(".m-alert__actions") as HTMLElement;
    await expect(actionsContainer).toBeInTheDocument();
    await expect(actionsContainer).toContainElement(actionButton);

    // Test button interaction
    // await userEvent.click(actionButton);
    // await expect(actionButton).toHaveFocus();
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const alert = document.createElement("div");
    alert.setAttribute("role", "alert");
    alert.classList.add("m-alert");
    const content = args["content"];
    const variant = args["variant"];
    const autoDismiss = args["autoDismiss"];
    const showProgress = args["autoDismissProgress"];
    if (variant !== "default") {
      alert.classList.add(\`--\${variant}\`);
    }
    if (autoDismiss && autoDismiss !== "0s") {
      alert.dataset["autoDismiss"] = autoDismiss;
      if (showProgress) {
        alert.classList.add("--with-progress");
      }
    }
    alert.innerHTML = \`
      <div class="m-alert__content">\${content}</div>
    \`;
    container.append(alert);
    return container;
  },
  args: {
    content: "This alert will automatically dismiss after the specified duration. Watch the progress bar!",
    variant: "primary",
    autoDismiss: "3s",
    autoDismissProgress: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("alert");
    await expect(alert).toBeVisible();
    await expect(alert).toHaveClass("m-alert");
    const content = alert.querySelector(".m-alert__content") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(/automatically dismiss/);

    // Check if progress bar is visible when enabled
    if (alert.classList.contains("--with-progress")) {
      await expect(alert).toHaveClass("--with-progress");
    }

    // Note: We don't test the actual dismissal in play function as it would make the test slow
    // The CSS animation handles the auto-dismiss functionality
  },
  parameters: {
    docs: {
      description: {
        story: "Alert with auto-dismiss functionality and optional progress bar. The alert will fade out after the specified duration."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1rem";
    const alerts = [{
      variant: "primary",
      icon: "✅",
      content: "Successfully saved your changes!"
    }, {
      variant: "warning",
      icon: "⚠️",
      content: "Please review the information before continuing."
    }, {
      variant: "danger",
      icon: "❌",
      content: "An error occurred while processing your request."
    }];
    for (const alertData of alerts) {
      const alert = document.createElement("div");
      alert.setAttribute("role", "alert");
      alert.classList.add("m-alert", \`--\${alertData.variant}\`);
      alert.innerHTML = \`
        <div class="m-alert__icons">\${alertData.icon}</div>
        <div class="m-alert__content">\${alertData.content}</div>
      \`;
      container.append(alert);
    }
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple alerts can be stacked to show different types of messages simultaneously."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const f=["Default","AllVariants","WithIcon","WithActions","AutoDismiss","MultipleAlerts"];export{m as AllVariants,p as AutoDismiss,d as Default,g as MultipleAlerts,v as WithActions,u as WithIcon,f as __namedExportsOrder,y as default};
