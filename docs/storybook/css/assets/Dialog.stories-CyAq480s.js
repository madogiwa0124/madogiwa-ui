import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a,o,s;e((()=>{({expect:t,userEvent:n,within:r}=__STORYBOOK_MODULE_TEST__),i={title:`Components/Dialog`,tags:[`autodocs`],argTypes:{title:{control:{type:`text`},description:`The title text for the component`},content:{control:{type:`text`},description:`The content text for the component`},backDropBlur:{control:{type:`boolean`},description:`The backdrop blur modifier for the component`},transition:{control:{type:`boolean`},description:`The transition animation modifier for the component`},showCancel:{control:{type:`boolean`},description:`The cancel button visibility for the component`},showConfirm:{control:{type:`boolean`},description:`The confirm button visibility for the component`},cancelText:{control:{type:`text`},description:`The cancel button text for the component`},confirmText:{control:{type:`text`},description:`The confirm button text for the component`}},parameters:{docs:{description:{component:`
### Overview

The Dialog component provides a modal dialog using the native HTML \`<dialog>\` element. It supports backdrop blur effects, smooth transitions, and flexible content layout with header, content, and footer sections.

### Usage

Use dialogs for confirmation prompts requiring user decision, important notifications that need immediate attention, form inputs that should be completed before continuing, or warning messages about destructive actions. Perfect for delete confirmations, settings panels, login forms, error messages, and multi-step workflows.

### Example code

\`\`\`html
<dialog class="m-dialog --transition --backdrop-blur">
  <div class="m-dialog__content">
    <h2>Confirm Action</h2>
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    <div class="m-dialog__actions">
      <button class="m-button --secondary">Cancel</button>
      <button class="m-button --danger">Delete</button>
    </div>
  </div>
</dialog>
\`\`\`


**⚠️ JavaScript Required**

opening and closing the dialog requires using the HTMLDialogElement API:


\`\`\`js
const dialog = document.querySelector('dialog.m-dialog');
// To open the dialog
dialog.showModal();
// To close the dialog
dialog.close();
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-dialog | .--backdrop-blur | Enables backdrop blur effect behind the dialog |
| .m-dialog | .--transition | Enables smooth open/close transition animations |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --dialog-text-color | var(--color-text-default) | Dialog text color |
| --dialog-bg-color | var(--color-bg-default) | Dialog background color |
| --dialog-zindex | var(--zindex-modal) | Z-index for dialog stacking |
| --dialog-padding | var(--spacing-3) | Internal padding of the dialog |
| --dialog-border-radius | var(--radius-sm) | Border radius of the dialog |
| --dialog-box-shadow | var(--shadow-lg) | Box shadow around the dialog |
| --dialog-content-gap | var(--spacing-2) | Gap between content elements |
| --dialog-backdrop-bg-color | var(--color-overlay) | Backdrop overlay color |
| --dialog-backdrop-blur | blur(4px) | Backdrop blur filter strength |
| --dialog-transition-duration | 0.2s | Duration of transition animations |
| --dialog-transition-transform-start | translateY(20%) | Initial transform for transition |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use HTMLDialogElement API to open/close dialogs properly
- Always provide a way to close the dialog (close button or cancel action)
- Consider the user's workflow when using dialogs
- Avoid nested dialogs as they can confuse users
- Test keyboard navigation and screen reader compatibility
        `}}}},a={render:e=>{let t=document.createElement(`div`),n=document.createElement(`dialog`);n.className=`m-dialog`;let r=e.backDropBlur,i=e.transition,a=e.title,o=e.content,s=e.showCancel,c=e.showConfirm,l=e.cancelText,u=e.confirmText;r&&n.classList.add(`--backdrop-blur`),i&&n.classList.add(`--transition`);let d=document.createElement(`header`);d.className=`m-dialog__header`;let f=document.createElement(`h2`);f.textContent=a,f.style.margin=`0`,f.style.fontWeight=`bold`,d.append(f);let p=document.createElement(`div`);p.className=`m-dialog__content`;let m=document.createElement(`p`);m.textContent=o,m.style.margin=`0`,p.append(m);let h=document.createElement(`footer`);if(h.className=`m-dialog__footer`,h.style.display=`flex`,h.style.gap=`0.5rem`,h.style.justifyContent=`flex-end`,s){let e=document.createElement(`button`);e.className=`m-btn`,e.textContent=l,e.addEventListener(`click`,()=>{n.close()}),h.append(e)}if(c){let e=document.createElement(`button`);e.className=`m-btn --primary`,e.textContent=u,e.addEventListener(`click`,()=>{n.close()}),h.append(e)}n.append(d,p,h);let g=document.createElement(`button`);return g.textContent=`Open Dialog`,g.className=`m-btn --primary`,g.addEventListener(`click`,()=>{n.showModal()}),t.append(g,n),t},args:{title:`Confirm Action`,content:`Are you sure you want to proceed with this action?`,backDropBlur:!1,transition:!1,showCancel:!0,showConfirm:!0,cancelText:`Cancel`,confirmText:`Confirm`},play:async({canvasElement:e,args:i})=>{let a=e.querySelector(`dialog`),o=e.querySelector(`button`);await t(a).toBeInTheDocument(),await t(a).toHaveClass(`m-dialog`),await t(a.open).toBe(!1),await t(o).toBeInTheDocument();let s=i.backDropBlur,c=i.transition;await(s?t(a).toHaveClass(`--backdrop-blur`):t(a).not.toHaveClass(`--backdrop-blur`)),await(c?t(a).toHaveClass(`--transition`):t(a).not.toHaveClass(`--transition`)),await n.click(o),await t(a.open).toBe(!0),await t(a).toHaveTextContent(i.title),await t(a).toHaveTextContent(i.content);let l=a.querySelector(`.m-dialog__header`),u=a.querySelector(`.m-dialog__content`),d=a.querySelector(`.m-dialog__footer`);await t(l).toBeInTheDocument(),await t(u).toBeInTheDocument(),await t(d).toBeInTheDocument();let f=i.showCancel,p=i.showConfirm,m=i.cancelText,h=i.confirmText;if(f){let e=await r(a).findByText(m);await t(e).toBeInTheDocument(),await n.click(e),await t(a.open).toBe(!1)}if(p&&!f){let e=await r(a).findByText(h);await t(e).toBeInTheDocument(),await n.click(e),await t(a.open).toBe(!1)}}},o={render:e=>{let t=document.createElement(`div`),n=document.createElement(`dialog`);n.className=`m-dialog --backdrop-blur --transition`;let r=document.createElement(`header`);r.className=`m-dialog__header`;let i=document.createElement(`h2`);i.textContent=`Enhanced Dialog`,i.style.margin=`0`,i.style.fontWeight=`600`,r.append(i);let a=document.createElement(`div`);a.className=`m-dialog__content`,a.innerHTML=`
      <p style="margin: 0 0 1rem 0;">This dialog demonstrates the backdrop blur and transition effects.</p>
      <p style="margin: 0;">Notice how the background is blurred and the dialog animates smoothly.</p>
    `;let o=document.createElement(`footer`);o.className=`m-dialog__footer`,o.style.display=`flex`,o.style.gap=`0.5rem`,o.style.justifyContent=`flex-end`;let s=document.createElement(`button`);s.className=`m-btn --primary`,s.textContent=`Got it!`,s.addEventListener(`click`,()=>{n.close()}),o.append(s),n.append(r,a,o);let c=document.createElement(`button`);return c.textContent=`Open Enhanced Dialog`,c.className=`m-btn --primary`,c.addEventListener(`click`,()=>{n.showModal()}),t.append(c,n),t},play:async({canvasElement:e})=>{let i=e.querySelector(`dialog`),a=e.querySelector(`button`);await t(i).toHaveClass(`--backdrop-blur`),await t(i).toHaveClass(`--transition`),await t(i.open).toBe(!1),await n.click(a),await t(i.open).toBe(!0),await t(i).toHaveTextContent(`Enhanced Dialog`);let o=await r(i).findByText(`Got it!`);await n.click(o),await t(i.open).toBe(!1)},parameters:{docs:{description:{story:`Dialog with backdrop blur and smooth transition animations enabled.`}}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const dialog = document.createElement("dialog");
    dialog.className = "m-dialog";
    const backDropBlur = args["backDropBlur"];
    const transition = args["transition"];
    const title = args["title"];
    const content = args["content"];
    const showCancel = args["showCancel"];
    const showConfirm = args["showConfirm"];
    const cancelText = args["cancelText"];
    const confirmText = args["confirmText"];
    if (backDropBlur) dialog.classList.add("--backdrop-blur");
    if (transition) dialog.classList.add("--transition");

    // Create header
    const header = document.createElement("header");
    header.className = "m-dialog__header";
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;
    titleElement.style.margin = "0";
    titleElement.style.fontWeight = "bold";
    header.append(titleElement);

    // Create content
    const contentDiv = document.createElement("div");
    contentDiv.className = "m-dialog__content";
    const contentText = document.createElement("p");
    contentText.textContent = content;
    contentText.style.margin = "0";
    contentDiv.append(contentText);

    // Create footer
    const footer = document.createElement("footer");
    footer.className = "m-dialog__footer";
    footer.style.display = "flex";
    footer.style.gap = "0.5rem";
    footer.style.justifyContent = "flex-end";
    if (showCancel) {
      const cancelButton = document.createElement("button");
      cancelButton.className = "m-btn";
      cancelButton.textContent = cancelText;
      cancelButton.addEventListener("click", () => {
        dialog.close();
      });
      footer.append(cancelButton);
    }
    if (showConfirm) {
      const confirmButton = document.createElement("button");
      confirmButton.className = "m-btn --primary";
      confirmButton.textContent = confirmText;
      confirmButton.addEventListener("click", () => {
        dialog.close();
      });
      footer.append(confirmButton);
    }
    dialog.append(header, contentDiv, footer);

    // Create trigger button
    const openDialogButton = document.createElement("button");
    openDialogButton.textContent = "Open Dialog";
    openDialogButton.className = "m-btn --primary";
    openDialogButton.addEventListener("click", () => {
      dialog.showModal();
    });
    container.append(openDialogButton, dialog);
    return container;
  },
  args: {
    title: "Confirm Action",
    content: "Are you sure you want to proceed with this action?",
    backDropBlur: false,
    transition: false,
    showCancel: true,
    showConfirm: true,
    cancelText: "Cancel",
    confirmText: "Confirm"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const dialog = canvasElement.querySelector("dialog") as HTMLDialogElement;
    const openButton = canvasElement.querySelector("button") as HTMLButtonElement;

    // Test initial state
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveClass("m-dialog");
    await expect(dialog.open).toBe(false);
    await expect(openButton).toBeInTheDocument();

    // Test modifiers
    const backDropBlur = args["backDropBlur"];
    const transition = args["transition"];
    await (backDropBlur ? expect(dialog).toHaveClass("--backdrop-blur") : expect(dialog).not.toHaveClass("--backdrop-blur"));
    await (transition ? expect(dialog).toHaveClass("--transition") : expect(dialog).not.toHaveClass("--transition"));

    // Test opening dialog
    await userEvent.click(openButton);
    await expect(dialog.open).toBe(true);
    await expect(dialog).toHaveTextContent(args["title"]);
    await expect(dialog).toHaveTextContent(args["content"]);

    // Test dialog structure
    const header = dialog.querySelector(".m-dialog__header");
    const content = dialog.querySelector(".m-dialog__content");
    const footer = dialog.querySelector(".m-dialog__footer");
    await expect(header).toBeInTheDocument();
    await expect(content).toBeInTheDocument();
    await expect(footer).toBeInTheDocument();

    // Test buttons based on configuration
    const showCancel = args["showCancel"];
    const showConfirm = args["showConfirm"];
    const cancelText = args["cancelText"];
    const confirmText = args["confirmText"];
    if (showCancel) {
      const cancelButton = await within(dialog).findByText(cancelText);
      await expect(cancelButton).toBeInTheDocument();

      // Test cancel functionality
      await userEvent.click(cancelButton);
      await expect(dialog.open).toBe(false);
    }
    if (showConfirm && !showCancel) {
      const confirmButton = await within(dialog).findByText(confirmText);
      await expect(confirmButton).toBeInTheDocument();

      // Test confirm functionality
      await userEvent.click(confirmButton);
      await expect(dialog.open).toBe(false);
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const container = document.createElement("div");
    const dialog = document.createElement("dialog");
    dialog.className = "m-dialog --backdrop-blur --transition";
    const header = document.createElement("header");
    header.className = "m-dialog__header";
    const title = document.createElement("h2");
    title.textContent = "Enhanced Dialog";
    title.style.margin = "0";
    title.style.fontWeight = "600";
    header.append(title);
    const content = document.createElement("div");
    content.className = "m-dialog__content";
    content.innerHTML = \`
      <p style="margin: 0 0 1rem 0;">This dialog demonstrates the backdrop blur and transition effects.</p>
      <p style="margin: 0;">Notice how the background is blurred and the dialog animates smoothly.</p>
    \`;
    const footer = document.createElement("footer");
    footer.className = "m-dialog__footer";
    footer.style.display = "flex";
    footer.style.gap = "0.5rem";
    footer.style.justifyContent = "flex-end";
    const closeButton = document.createElement("button");
    closeButton.className = "m-btn --primary";
    closeButton.textContent = "Got it!";
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
    footer.append(closeButton);
    dialog.append(header, content, footer);
    const openButton = document.createElement("button");
    openButton.textContent = "Open Enhanced Dialog";
    openButton.className = "m-btn --primary";
    openButton.addEventListener("click", () => {
      dialog.showModal();
    });
    container.append(openButton, dialog);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const dialog = canvasElement.querySelector("dialog") as HTMLDialogElement;
    const openButton = canvasElement.querySelector("button") as HTMLButtonElement;

    // Test enhanced features
    await expect(dialog).toHaveClass("--backdrop-blur");
    await expect(dialog).toHaveClass("--transition");
    await expect(dialog.open).toBe(false);

    // Test opening with effects
    await userEvent.click(openButton);
    await expect(dialog.open).toBe(true);
    await expect(dialog).toHaveTextContent("Enhanced Dialog");

    // Test closing
    const closeButton = await within(dialog).findByText("Got it!");
    await userEvent.click(closeButton);
    await expect(dialog.open).toBe(false);
  },
  parameters: {
    docs: {
      description: {
        story: "Dialog with backdrop blur and smooth transition animations enabled."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`,`WithBlurAndTransition`]}))();export{a as Default,o as WithBlurAndTransition,s as __namedExportsOrder,i as default};