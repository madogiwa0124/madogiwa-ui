import{n as e}from"./chunk-DnJy8xQt.js";var t,n=e((()=>{t=``+new URL(`320x240-CKx3L0Iq.png`,import.meta.url).href})),r,i,a,o,s,c,l;e((()=>{n(),{expect:r,userEvent:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/Card`,tags:[`autodocs`],argTypes:{content:{control:{type:`text`},description:`The HTML content for the component`},floating:{control:{type:`boolean`},description:`The floating shadow modifier for the component`},hasImage:{control:{type:`boolean`},description:`The image inclusion for the component`},imageAlt:{control:{type:`text`},description:`The image alt text for the component`},hasFooter:{control:{type:`boolean`},description:`The footer area inclusion for the component`},footerJustify:{control:{type:`select`},options:[`flex-start`,`center`,`flex-end`,`space-between`],description:`The footer content alignment for the component`,if:{arg:`hasFooter`,truthy:!0}}},parameters:{docs:{description:{component:`
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
        `}}}},o={render:e=>{let t=document.createElement(`div`),n=document.createElement(`div`);n.classList.add(`m-card`);let r=e.content,i=e.floating,a=e.hasFooter,o=e.footerJustify;i&&n.classList.add(`--floating`);let s=document.createElement(`div`);if(s.classList.add(`m-card__content`),s.innerHTML=`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Card Title</h3>
      <p style="margin: 0; color: var(--color-text-subtle); line-height: 1.5;">${r}</p>
    `,n.append(s),a){let e=document.createElement(`div`);e.classList.add(`m-card__footer`),e.style.setProperty(`--card-footer-justify`,o),e.innerHTML=`
        <button class="m-btn">Cancel</button>
        <button class="m-btn --primary">Confirm</button>
      `,n.append(e)}return t.append(n),t},args:{content:`This is a basic card with content. Cards are perfect for organizing related information in a clean, digestible format.`,floating:!1,hasFooter:!1,footerJustify:`flex-end`},play:async({canvasElement:e,args:t})=>{let n=e.querySelector(`.m-card`),i=e.querySelector(`.m-card__content`);await r(n).toBeInTheDocument(),await r(n).toHaveClass(`m-card`),await r(i).toBeInTheDocument(),await r(i).toHaveClass(`m-card__content`),await r(i).toHaveTextContent(`Card Title`),await r(i).toHaveTextContent(/basic card with content/),await(t.floating?r(n).toHaveClass(`--floating`):r(n).not.toHaveClass(`--floating`));let a=t.hasFooter,o=e.querySelector(`.m-card__footer`);a?(await r(o).toBeInTheDocument(),await r(o).toHaveClass(`m-card__footer`)):await r(o).not.toBeInTheDocument();let s=globalThis.getComputedStyle(n);await r(s.backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`),await r(s.borderRadius).not.toBe(`0px`)}},s={render:e=>{let t=document.createElement(`div`),n=document.createElement(`div`);n.classList.add(`m-card`,`--floating`);let r=e.content,i=document.createElement(`div`);return i.classList.add(`m-card__content`),i.innerHTML=`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Floating Card</h3>
      <p style="margin: 0; color: var(--color-text-subtle); line-height: 1.5;">${r}</p>
    `,n.append(i),t.append(n),t},args:{content:`This card uses the floating modifier to add an elevated shadow effect. Hover over it to see the interaction.`},play:async({canvasElement:e})=>{let t=e.querySelector(`.m-card`);await r(t).toBeInTheDocument(),await r(t).toHaveClass(`m-card`),await r(t).toHaveClass(`--floating`),await r(globalThis.getComputedStyle(t).boxShadow).not.toBe(`none`),await i.hover(t),await r(t).toHaveClass(`--floating`),await i.unhover(t)},parameters:{docs:{description:{story:`Card with floating shadow effect and hover interaction.`}}}},c={render:e=>{let n=document.createElement(`div`),r=document.createElement(`div`);r.classList.add(`m-card`),r.style.width=`320px`,e.floating&&r.classList.add(`--floating`);let i=e.hasImage,a=e.content,o=e.imageAlt;if(i){let e=document.createElement(`img`);e.classList.add(`m-card__image`),e.src=t,e.alt=o,r.append(e)}let s=document.createElement(`div`);if(s.classList.add(`m-card__content`),s.innerHTML=`
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;">Image Card</h3>
      <p style="margin: 0; color: var(--color-text-subtle); line-height: 1.5;">${a}</p>
    `,r.append(s),e.hasFooter){let t=document.createElement(`div`);t.classList.add(`m-card__footer`),t.style.justifyContent=e.footerJustify;let n=document.createElement(`button`);n.classList.add(`m-btn`),n.textContent=`Cancel`;let i=document.createElement(`button`);i.classList.add(`m-btn`,`--primary`),i.textContent=`Confirm`,t.append(n,i),r.append(t)}return n.append(r),n},args:{content:`This card demonstrates how images can be integrated with content. The image is responsive and maintains proper aspect ratio.`,hasImage:!0,imageAlt:`Example card image showing 320x240 placeholder`,hasFooter:!1,footerJustify:`flex-end`,floating:!1},play:async({canvasElement:e,args:n})=>{let i=e.querySelector(`.m-card`),a=e.querySelector(`.m-card__image`),o=e.querySelector(`.m-card__content`);if(await r(i).toBeInTheDocument(),await r(i).toHaveClass(`m-card`),await r(o).toBeInTheDocument(),n.hasImage){await r(a).toBeInTheDocument(),await r(a).toHaveClass(`m-card__image`),await r(a).toHaveAttribute(`src`,t),await r(a).toHaveAttribute(`alt`,n.imageAlt);let e=globalThis.getComputedStyle(a);await r(e.width).toBe(`318px`),await r(e.objectFit).toBe(`cover`)}if(n.hasFooter){let t=e.querySelector(`.m-card__footer`);await r(t).toBeInTheDocument(),await r(t).toHaveClass(`m-card__footer`),await r(t).toHaveStyle(`justify-content: ${n.footerJustify}`)}await r(o).toHaveTextContent(`Image Card`),await r(o).toHaveTextContent(/image/)},parameters:{docs:{description:{story:`Card with image header and content area.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Floating`,`FullCardSample`]}))();export{o as Default,s as Floating,c as FullCardSample,l as __namedExportsOrder,a as default};