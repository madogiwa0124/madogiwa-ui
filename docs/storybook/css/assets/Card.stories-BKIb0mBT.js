const u=""+new URL("320x240-CKx3L0Iq.png",import.meta.url).href,{expect:t,userEvent:h}=__STORYBOOK_MODULE_TEST__,f={title:"Components/Card",tags:["autodocs"],argTypes:{content:{control:{type:"text"},description:"The HTML content for the component"},floating:{control:{type:"boolean"},description:"The floating shadow modifier for the component"},hasImage:{control:{type:"boolean"},description:"The image inclusion for the component"},imageAlt:{control:{type:"text"},description:"The image alt text for the component"},hasActions:{control:{type:"boolean"},description:"The action buttons inclusion for the component"},actionsJustify:{control:{type:"select"},options:["flex-start","center","flex-end","space-between"],description:"The action buttons alignment for the component",if:{arg:"hasActions",truthy:!0}}},parameters:{docs:{description:{component:`
### Overview

The Card component provides a flexible container for content with optional images, shadows, and various styling options following a clean, minimal design approach.

### Usage

Use cards to display content in organized, digestible sections and group related information together. Perfect for product showcases, article previews, profile cards, feature highlights, or dashboard widgets.

### Example code

\`\`\`html
<div class="m-card">
  <img class="m-card__image" src="image.jpg" alt="Card image">
  <div class="m-card__content">
    <h3>Card Title</h3>
    <p>Card content goes here with relevant information.</p>
  </div>
  <div class="m-card__actions">
    <button class="m-btn --default">Cancel</button>
    <button class="m-btn --primary">Confirm</button>
  </div>
</div>

<div class="m-card --floating">
  <div class="m-card__content">
    <h3>Floating Card</h3>
    <p>This card has an elevated shadow effect.</p>
  </div>
</div>
\`\`\`

### Elements

| Name | Description |
| ---- | ----------- |
| .m-card__image | Card image element with responsive sizing and proper aspect ratio |
| .m-card__content | Main content area with proper padding for text and media |
| .m-card__actions | Action area with flex layout for buttons and controls |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-card | .--floating | Adds elevated shadow effect with hover interaction |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --card-floating-shadow | var(--shadow-sm) | Shadow for floating card variant |
| --card-radius | var(--radius-md) | Border radius of the card |
| --card-bg-color | var(--color-white) | Background color |
| --card-border-color | var(--color-border) | Border color |
| --card-content-padding | var(--spacing-2) | Padding for card content area |
| --card-actions-padding | var(--spacing-1) | Padding for card actions area |
| --card-actions-item-gap | var(--spacing-1) | Gap between action items |
| --card-actions-justify | flex-end | Horizontal alignment of action items |
| --card-actions-border-top | initial | Top border for card actions area |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Ensure sufficient contrast between text and background for readability
- Use meaningful alt text for images to enhance accessibility
- Consider loading performance when using multiple image cards
        `}}}},l={render:n=>{const a=document.createElement("div"),e=document.createElement("div");e.classList.add("m-card");const o=n.content,i=n.floating,s=n.hasActions,r=n.actionsJustify;i&&e.classList.add("--floating");const c=document.createElement("div");if(c.classList.add("m-card__content"),c.innerHTML=`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Card Title</h3>
      <p style="margin: 0; color: #666; line-height: 1.5;">${o}</p>
    `,e.append(c),s){const d=document.createElement("div");d.classList.add("m-card__actions"),d.style.setProperty("--card-actions-justify",r),d.innerHTML=`
        <button class="m-btn --default">Cancel</button>
        <button class="m-btn --primary">Confirm</button>
      `,e.append(d)}return a.append(e),a},args:{content:"This is a basic card with content. Cards are perfect for organizing related information in a clean, digestible format.",floating:!1,hasActions:!1,actionsJustify:"flex-end"},play:async({canvasElement:n,args:a})=>{const e=n.querySelector(".m-card"),o=n.querySelector(".m-card__content");await t(e).toBeInTheDocument(),await t(e).toHaveClass("m-card"),await t(o).toBeInTheDocument(),await t(o).toHaveClass("m-card__content"),await t(o).toHaveTextContent("Card Title"),await t(o).toHaveTextContent(/basic card with content/),await(a.floating?t(e).toHaveClass("--floating"):t(e).not.toHaveClass("--floating"));const s=a.hasActions,r=n.querySelector(".m-card__actions");s?(await t(r).toBeInTheDocument(),await t(r).toHaveClass("m-card__actions")):await t(r).not.toBeInTheDocument();const c=globalThis.getComputedStyle(e);await t(c.backgroundColor).not.toBe("rgba(0, 0, 0, 0)"),await t(c.borderRadius).not.toBe("0px")}},m={render:n=>{const a=document.createElement("div"),e=document.createElement("div");e.classList.add("m-card","--floating");const o=n.content,i=document.createElement("div");return i.classList.add("m-card__content"),i.innerHTML=`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Floating Card</h3>
      <p style="margin: 0; color: #666; line-height: 1.5;">${o}</p>
    `,e.append(i),a.append(e),a},args:{content:"This card uses the floating modifier to add an elevated shadow effect. Hover over it to see the interaction."},play:async({canvasElement:n})=>{const a=n.querySelector(".m-card");await t(a).toBeInTheDocument(),await t(a).toHaveClass("m-card"),await t(a).toHaveClass("--floating");const e=globalThis.getComputedStyle(a);await t(e.boxShadow).not.toBe("none"),await h.hover(a),await t(a).toHaveClass("--floating"),await h.unhover(a)},parameters:{docs:{description:{story:"Card with floating shadow effect and hover interaction."}}}},g={render:n=>{const a=document.createElement("div"),e=document.createElement("div");e.classList.add("m-card"),e.style.width="320px",n.floating&&e.classList.add("--floating");const o=n.hasImage,i=n.content,s=n.imageAlt;if(o){const c=document.createElement("img");c.classList.add("m-card__image"),c.src=u,c.alt=s,e.append(c)}const r=document.createElement("div");if(r.classList.add("m-card__content"),r.innerHTML=`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Image Card</h3>
      <p style="margin: 0; color: #666; line-height: 1.5;">${i}</p>
    `,e.append(r),n.hasActions){const c=document.createElement("div");c.classList.add("m-card__actions"),c.style.justifyContent=n.actionsJustify;const d=document.createElement("button");d.classList.add("m-btn","--default"),d.textContent="Cancel";const p=document.createElement("button");p.classList.add("m-btn","--primary"),p.textContent="Confirm",c.append(d,p),e.append(c)}return a.append(e),a},args:{content:"This card demonstrates how images can be integrated with content. The image is responsive and maintains proper aspect ratio.",hasImage:!0,imageAlt:"Example card image showing 320x240 placeholder",hasActions:!1,actionsJustify:"flex-end",floating:!1},play:async({canvasElement:n,args:a})=>{const e=n.querySelector(".m-card"),o=n.querySelector(".m-card__image"),i=n.querySelector(".m-card__content");if(await t(e).toBeInTheDocument(),await t(e).toHaveClass("m-card"),await t(i).toBeInTheDocument(),a.hasImage){await t(o).toBeInTheDocument(),await t(o).toHaveClass("m-card__image"),await t(o).toHaveAttribute("src",u),await t(o).toHaveAttribute("alt",a.imageAlt);const s=globalThis.getComputedStyle(o);await t(s.width).toBe("318px"),await t(s.objectFit).toBe("cover")}if(a.hasActions){const s=n.querySelector(".m-card__actions");await t(s).toBeInTheDocument(),await t(s).toHaveClass("m-card__actions"),await t(s).toHaveStyle(`justify-content: ${a.actionsJustify}`)}await t(i).toHaveTextContent("Image Card"),await t(i).toHaveTextContent(/image/)},parameters:{docs:{description:{story:"Card with image header and content area."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const card = document.createElement("div");
    card.classList.add("m-card");
    const content = args["content"];
    const floating = args["floating"];
    const hasActions = args["hasActions"];
    const actionsJustify = args["actionsJustify"];
    if (floating) card.classList.add("--floating");
    const contentElement = document.createElement("div");
    contentElement.classList.add("m-card__content");
    contentElement.innerHTML = \`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Card Title</h3>
      <p style="margin: 0; color: #666; line-height: 1.5;">\${content}</p>
    \`;
    card.append(contentElement);
    if (hasActions) {
      const actionsElement = document.createElement("div");
      actionsElement.classList.add("m-card__actions");
      actionsElement.style.setProperty("--card-actions-justify", actionsJustify);
      actionsElement.innerHTML = \`
        <button class="m-btn --default">Cancel</button>
        <button class="m-btn --primary">Confirm</button>
      \`;
      card.append(actionsElement);
    }
    container.append(card);
    return container;
  },
  args: {
    content: "This is a basic card with content. Cards are perfect for organizing related information in a clean, digestible format.",
    floating: false,
    hasActions: false,
    actionsJustify: "flex-end"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const card = canvasElement.querySelector(".m-card") as HTMLDivElement;
    const content = canvasElement.querySelector(".m-card__content") as HTMLDivElement;

    // Test basic card structure
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveClass("m-card");
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveClass("m-card__content");

    // Test content
    await expect(content).toHaveTextContent("Card Title");
    await expect(content).toHaveTextContent(/basic card with content/);

    // Test floating modifier
    const hasFloating = args["floating"];
    await (hasFloating ? expect(card).toHaveClass("--floating") : expect(card).not.toHaveClass("--floating"));

    // Test actions element if present
    const hasActions = args["hasActions"];
    const actions = canvasElement.querySelector(".m-card__actions");
    if (hasActions) {
      await expect(actions).toBeInTheDocument();
      await expect(actions).toHaveClass("m-card__actions");
    } else {
      await expect(actions).not.toBeInTheDocument();
    }

    // Test styling
    const computedStyle = globalThis.getComputedStyle(card);
    await expect(computedStyle.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    await expect(computedStyle.borderRadius).not.toBe("0px");
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const card = document.createElement("div");
    card.classList.add("m-card", "--floating");
    const content = args["content"];
    const contentElement = document.createElement("div");
    contentElement.classList.add("m-card__content");
    contentElement.innerHTML = \`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Floating Card</h3>
      <p style="margin: 0; color: #666; line-height: 1.5;">\${content}</p>
    \`;
    card.append(contentElement);
    container.append(card);
    return container;
  },
  args: {
    content: "This card uses the floating modifier to add an elevated shadow effect. Hover over it to see the interaction."
  },
  play: async ({
    canvasElement
  }) => {
    const card = canvasElement.querySelector(".m-card") as HTMLDivElement;

    // Test floating card structure
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveClass("m-card");
    await expect(card).toHaveClass("--floating");

    // Test shadow effect
    const computedStyle = globalThis.getComputedStyle(card);
    await expect(computedStyle.boxShadow).not.toBe("none");

    // Test hover interaction
    await userEvent.hover(card);
    // Note: The actual shadow change on hover is handled by CSS transitions
    // We can verify the transition property exists
    await expect(card).toHaveClass("--floating");
    await userEvent.unhover(card);
  },
  parameters: {
    docs: {
      description: {
        story: "Card with floating shadow effect and hover interaction."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const card = document.createElement("div");
    card.classList.add("m-card");
    card.style.width = "320px";
    if (args["floating"]) card.classList.add("--floating");
    const hasImage = args["hasImage"];
    const content = args["content"];
    const imageAlt = args["imageAlt"];
    if (hasImage) {
      const imageElement = document.createElement("img");
      imageElement.classList.add("m-card__image");
      imageElement.src = exampleImage;
      imageElement.alt = imageAlt;
      card.append(imageElement);
    }
    const contentElement = document.createElement("div");
    contentElement.classList.add("m-card__content");
    contentElement.innerHTML = \`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Image Card</h3>
      <p style="margin: 0; color: #666; line-height: 1.5;">\${content}</p>
    \`;
    card.append(contentElement);
    if (args["hasActions"]) {
      const actionsElement = document.createElement("div");
      actionsElement.classList.add("m-card__actions");
      actionsElement.style.justifyContent = args["actionsJustify"];
      const cancelButton = document.createElement("button");
      cancelButton.classList.add("m-btn", "--default");
      cancelButton.textContent = "Cancel";
      const confirmButton = document.createElement("button");
      confirmButton.classList.add("m-btn", "--primary");
      confirmButton.textContent = "Confirm";
      actionsElement.append(cancelButton, confirmButton);
      card.append(actionsElement);
    }
    container.append(card);
    return container;
  },
  args: {
    content: "This card demonstrates how images can be integrated with content. The image is responsive and maintains proper aspect ratio.",
    hasImage: true,
    imageAlt: "Example card image showing 320x240 placeholder",
    hasActions: false,
    actionsJustify: "flex-end",
    floating: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const card = canvasElement.querySelector(".m-card") as HTMLDivElement;
    const image = canvasElement.querySelector(".m-card__image") as HTMLImageElement;
    const content = canvasElement.querySelector(".m-card__content") as HTMLDivElement;

    // Test card structure
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveClass("m-card");
    await expect(content).toBeInTheDocument();
    if (args["hasImage"]) {
      // Test image element
      await expect(image).toBeInTheDocument();
      await expect(image).toHaveClass("m-card__image");
      await expect(image).toHaveAttribute("src", exampleImage);
      await expect(image).toHaveAttribute("alt", args["imageAlt"]);

      // Test image styling
      const imageStyle = globalThis.getComputedStyle(image);
      await expect(imageStyle.width).toBe("318px"); // Should be 100% of container minus borders
      await expect(imageStyle.objectFit).toBe("cover");
    }
    if (args["hasActions"]) {
      // Test actions area
      const actions = canvasElement.querySelector(".m-card__actions") as HTMLDivElement;
      await expect(actions).toBeInTheDocument();
      await expect(actions).toHaveClass("m-card__actions");
      await expect(actions).toHaveStyle(\`justify-content: \${args["actionsJustify"]}\`);
    }

    // Test content
    await expect(content).toHaveTextContent("Image Card");
    await expect(content).toHaveTextContent(/image/);
  },
  parameters: {
    docs: {
      description: {
        story: "Card with image header and content area."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const w=["Default","Floating","FullCardSample"];export{l as Default,m as Floating,g as FullCardSample,w as __namedExportsOrder,f as default};
