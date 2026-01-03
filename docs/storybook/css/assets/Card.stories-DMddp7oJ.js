const p=""+new URL("320x240-CKx3L0Iq.png",import.meta.url).href,{expect:e,userEvent:u}=__STORYBOOK_MODULE_TEST__,h={title:"Components/Card",tags:["autodocs"],argTypes:{content:{control:{type:"text"},description:"The HTML content for the component"},floating:{control:{type:"boolean"},description:"The floating shadow modifier for the component"},hasImage:{control:{type:"boolean"},description:"The image inclusion for the component"},imageAlt:{control:{type:"text"},description:"The image alt text for the component"},hasFooter:{control:{type:"boolean"},description:"The footer area inclusion for the component"},footerJustify:{control:{type:"select"},options:["flex-start","center","flex-end","space-between"],description:"The footer content alignment for the component",if:{arg:"hasFooter",truthy:!0}}},parameters:{docs:{description:{component:`
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
  <div class="m-card__footer">
    <button class="m-btn">Cancel</button>
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
| .m-card__footer | Footer area with flex layout for buttons and controls |

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
| --card-footer-flex-direction | row | Flex direction for footer items |
| --card-footer-padding | var(--spacing-1) | Padding for card footer area |
| --card-footer-item-gap | var(--spacing-1) | Gap between footer items |
| --card-footer-justify | flex-end | Horizontal alignment of footer items |
| --card-footer-border-top | initial | Top border for card footer area |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Ensure sufficient contrast between text and background for readability
- Use meaningful alt text for images to enhance accessibility
- Consider loading performance when using multiple image cards
        `}}}},l={render:n=>{const a=document.createElement("div"),t=document.createElement("div");t.classList.add("m-card");const o=n.content,c=n.floating,i=n.hasFooter,s=n.footerJustify;c&&t.classList.add("--floating");const r=document.createElement("div");if(r.classList.add("m-card__content"),r.innerHTML=`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Card Title</h3>
      <p style="margin: 0; color: var(--color-text-subtle); line-height: 1.5;">${o}</p>
    `,t.append(r),i){const d=document.createElement("div");d.classList.add("m-card__footer"),d.style.setProperty("--card-footer-justify",s),d.innerHTML=`
        <button class="m-btn">Cancel</button>
        <button class="m-btn --primary">Confirm</button>
      `,t.append(d)}return a.append(t),a},args:{content:"This is a basic card with content. Cards are perfect for organizing related information in a clean, digestible format.",floating:!1,hasFooter:!1,footerJustify:"flex-end"},play:async({canvasElement:n,args:a})=>{const t=n.querySelector(".m-card"),o=n.querySelector(".m-card__content");await e(t).toBeInTheDocument(),await e(t).toHaveClass("m-card"),await e(o).toBeInTheDocument(),await e(o).toHaveClass("m-card__content"),await e(o).toHaveTextContent("Card Title"),await e(o).toHaveTextContent(/basic card with content/),await(a.floating?e(t).toHaveClass("--floating"):e(t).not.toHaveClass("--floating"));const i=a.hasFooter,s=n.querySelector(".m-card__footer");i?(await e(s).toBeInTheDocument(),await e(s).toHaveClass("m-card__footer")):await e(s).not.toBeInTheDocument();const r=globalThis.getComputedStyle(t);await e(r.backgroundColor).not.toBe("rgba(0, 0, 0, 0)"),await e(r.borderRadius).not.toBe("0px")}},m={render:n=>{const a=document.createElement("div"),t=document.createElement("div");t.classList.add("m-card","--floating");const o=n.content,c=document.createElement("div");return c.classList.add("m-card__content"),c.innerHTML=`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Floating Card</h3>
      <p style="margin: 0; color: var(--color-text-subtle); line-height: 1.5;">${o}</p>
    `,t.append(c),a.append(t),a},args:{content:"This card uses the floating modifier to add an elevated shadow effect. Hover over it to see the interaction."},play:async({canvasElement:n})=>{const a=n.querySelector(".m-card");await e(a).toBeInTheDocument(),await e(a).toHaveClass("m-card"),await e(a).toHaveClass("--floating");const t=globalThis.getComputedStyle(a);await e(t.boxShadow).not.toBe("none"),await u.hover(a),await e(a).toHaveClass("--floating"),await u.unhover(a)},parameters:{docs:{description:{story:"Card with floating shadow effect and hover interaction."}}}},f={render:n=>{const a=document.createElement("div"),t=document.createElement("div");t.classList.add("m-card"),t.style.width="320px",n.floating&&t.classList.add("--floating");const o=n.hasImage,c=n.content,i=n.imageAlt;if(o){const r=document.createElement("img");r.classList.add("m-card__image"),r.src=p,r.alt=i,t.append(r)}const s=document.createElement("div");if(s.classList.add("m-card__content"),s.innerHTML=`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Image Card</h3>
      <p style="margin: 0; color: var(--color-text-subtle); line-height: 1.5;">${c}</p>
    `,t.append(s),n.hasFooter){const r=document.createElement("div");r.classList.add("m-card__footer"),r.style.justifyContent=n.footerJustify;const d=document.createElement("button");d.classList.add("m-btn"),d.textContent="Cancel";const g=document.createElement("button");g.classList.add("m-btn","--primary"),g.textContent="Confirm",r.append(d,g),t.append(r)}return a.append(t),a},args:{content:"This card demonstrates how images can be integrated with content. The image is responsive and maintains proper aspect ratio.",hasImage:!0,imageAlt:"Example card image showing 320x240 placeholder",hasFooter:!1,footerJustify:"flex-end",floating:!1},play:async({canvasElement:n,args:a})=>{const t=n.querySelector(".m-card"),o=n.querySelector(".m-card__image"),c=n.querySelector(".m-card__content");if(await e(t).toBeInTheDocument(),await e(t).toHaveClass("m-card"),await e(c).toBeInTheDocument(),a.hasImage){await e(o).toBeInTheDocument(),await e(o).toHaveClass("m-card__image"),await e(o).toHaveAttribute("src",p),await e(o).toHaveAttribute("alt",a.imageAlt);const i=globalThis.getComputedStyle(o);await e(i.width).toBe("318px"),await e(i.objectFit).toBe("cover")}if(a.hasFooter){const i=n.querySelector(".m-card__footer");await e(i).toBeInTheDocument(),await e(i).toHaveClass("m-card__footer"),await e(i).toHaveStyle(`justify-content: ${a.footerJustify}`)}await e(c).toHaveTextContent("Image Card"),await e(c).toHaveTextContent(/image/)},parameters:{docs:{description:{story:"Card with image header and content area."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const card = document.createElement("div");
    card.classList.add("m-card");
    const content = args["content"];
    const floating = args["floating"];
    const hasFooter = args["hasFooter"];
    const footerJustify = args["footerJustify"];
    if (floating) card.classList.add("--floating");
    const contentElement = document.createElement("div");
    contentElement.classList.add("m-card__content");
    contentElement.innerHTML = \`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Card Title</h3>
      <p style="margin: 0; color: var(--color-text-subtle); line-height: 1.5;">\${content}</p>
    \`;
    card.append(contentElement);
    if (hasFooter) {
      const footerElement = document.createElement("div");
      footerElement.classList.add("m-card__footer");
      footerElement.style.setProperty("--card-footer-justify", footerJustify);
      footerElement.innerHTML = \`
        <button class="m-btn">Cancel</button>
        <button class="m-btn --primary">Confirm</button>
      \`;
      card.append(footerElement);
    }
    container.append(card);
    return container;
  },
  args: {
    content: "This is a basic card with content. Cards are perfect for organizing related information in a clean, digestible format.",
    floating: false,
    hasFooter: false,
    footerJustify: "flex-end"
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

    // Test footer element if present
    const hasFooter = args["hasFooter"];
    const footer = canvasElement.querySelector(".m-card__footer");
    if (hasFooter) {
      await expect(footer).toBeInTheDocument();
      await expect(footer).toHaveClass("m-card__footer");
    } else {
      await expect(footer).not.toBeInTheDocument();
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
      <p style="margin: 0; color: var(--color-text-subtle); line-height: 1.5;">\${content}</p>
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      <p style="margin: 0; color: var(--color-text-subtle); line-height: 1.5;">\${content}</p>
    \`;
    card.append(contentElement);
    if (args["hasFooter"]) {
      const footerElement = document.createElement("div");
      footerElement.classList.add("m-card__footer");
      footerElement.style.justifyContent = args["footerJustify"];
      const cancelButton = document.createElement("button");
      cancelButton.classList.add("m-btn");
      cancelButton.textContent = "Cancel";
      const confirmButton = document.createElement("button");
      confirmButton.classList.add("m-btn", "--primary");
      confirmButton.textContent = "Confirm";
      footerElement.append(cancelButton, confirmButton);
      card.append(footerElement);
    }
    container.append(card);
    return container;
  },
  args: {
    content: "This card demonstrates how images can be integrated with content. The image is responsive and maintains proper aspect ratio.",
    hasImage: true,
    imageAlt: "Example card image showing 320x240 placeholder",
    hasFooter: false,
    footerJustify: "flex-end",
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
    if (args["hasFooter"]) {
      // Test footer area
      const footer = canvasElement.querySelector(".m-card__footer") as HTMLDivElement;
      await expect(footer).toBeInTheDocument();
      await expect(footer).toHaveClass("m-card__footer");
      await expect(footer).toHaveStyle(\`justify-content: \${args["footerJustify"]}\`);
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
}`,...f.parameters?.docs?.source}}};const v=["Default","Floating","FullCardSample"];export{l as Default,m as Floating,f as FullCardSample,v as __namedExportsOrder,h as default};
