const{expect:i}=__STORYBOOK_MODULE_TEST__,m={title:"Components/Accordion",tags:["autodocs"],argTypes:{title:{control:"text",description:"The title text for the component"},content:{control:"text",description:"The content text for the component"},transition:{control:{type:"boolean"},description:"The transition animation modifier for the component"},outline:{control:{type:"boolean"},description:"The outline style modifier for the component"},open:{control:{type:"boolean"},description:"The initial open state for the component"}},parameters:{docs:{description:{component:`
### Overview

The Accordion component provides expandable/collapsible content sections using native HTML elements for optimal accessibility and semantic structure.

### Usage

Use accordions to organize content into expandable sections that help users focus on specific information while maintaining a clean interface. Ideal for FAQs, documentation sections, or any content that benefits from progressive disclosure. They work well when you need to present multiple topics in a compact space.

### Example code

\`\`\`html
<details class="m-accordion --transition">
  <summary class="m-accordion__summary">What is Madogiwa UI?</summary>
  <div class="m-accordion__content">
    <p>Madogiwa UI is a modern CSS framework leveraging cutting-edge CSS features.</p>
  </div>
</details>

<details class="m-accordion --outline --transition">
  <summary class="m-accordion__summary">How do I get started?</summary>
  <div class="m-accordion__content">
    <p>Install the package and import the CSS in your project.</p>
  </div>
</details>
\`\`\`

### Elements

| Name | Description |
| ---- | ----------- |
| .m-accordion__summary | Clickable header element that toggles accordion state |
| .m-accordion__content | Expandable content area that contains accordion body |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-accordion | .--transition | Enables smooth animations for expand/collapse transitions |
| .m-accordion | .--outline | Adds border styling and padding around the accordion |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --accordion-summary-padding | var(--spacing-3) 0 var(--spacing-3) 0 | Padding for the accordion summary/header |
| --accordion-summary-font-weight | var(--font-weight-bold) | Font weight of the summary text |
| --accordion-summary-icon-gap | var(--spacing-2) | Gap between icon and summary text |
| --accordion-summary-icon-size | 0.6rem | Size of the expand/collapse icon |
| --accordion-summary-icon-color | var(--color-text-default) | Color of the expand/collapse icon |
| --accordion-summary-icon-clip-path | polygon(0 0, 100% 50%, 0 100%) | Shape of the expand/collapse icon |
| --accordion-summary-icon-open-transform | rotate(90deg) | Transform applied to icon when open |
| --accordion-content-padding | 0 var(--spacing-3) var(--spacing-3) var(--spacing-3) | Padding for the accordion content area |
| --accordion-outline-border | 1px solid var(--color-border) | Border style for outline variant |
| --accordion-outline-border-radius | var(--radius-md) | Border radius for outline variant |
| --accordion-outline-padding | 0 var(--spacing-2) 0 var(--spacing-2) | Padding for outline variant |
| --accordion-transition-time | 0.2s | Duration of expand/collapse animations |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use semantic HTML structure with \`<details>\` and \`<summary>\` elements
- Consider motion preferences when using the transition modifier
- Ensure accordion content is accessible when expanded

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Uses native details and summary elements for optimal screen reader support
- Keyboard navigation is handled natively by the browser
- Focus management follows standard HTML behavior without additional JavaScript
- Consider motion preferences when using the transition modifier
        `}}}},c={render:t=>{const e=document.createElement("div"),n=document.createElement("details");n.classList.add("m-accordion"),t.transition&&n.classList.add("--transition"),t.outline&&n.classList.add("--outline"),t.open&&(n.open=!0);const o=t.title,a=t.content;return n.innerHTML=`
      <summary class="m-accordion__summary" id="summary" aria-controls="content">
        ${o}
      </summary>
      <div class="m-accordion__content" id="content" aria-labelledby="summary">
        <p>${a}</p>
      </div>
    `,e.append(n),e},args:{title:"What is Madogiwa UI?",content:"Madogiwa UI is a modern CSS framework leveraging cutting-edge CSS features like @property, CSS Nesting, and logical properties.",transition:!1,outline:!1,open:!1},play:async({canvasElement:t})=>{const e=t.querySelector(".m-accordion"),n=e.querySelector(".m-accordion__summary"),o=e.querySelector(".m-accordion__content");await i(e.open).toBe(!1),await i(o).not.toBeVisible(),n.click(),await i(e.open).toBe(!0),await new Promise(a=>{setTimeout(a,300)}),await i(o).toBeVisible(),n.click(),await i(e.open).toBe(!1)}},r={render:t=>{const e=document.createElement("div"),n=document.createElement("details");n.classList.add("m-accordion"),t.transition&&n.classList.add("--transition"),t.outline&&n.classList.add("--outline"),t.open&&(n.open=!0);const o=t.title,a=t.content;return n.innerHTML=`
      <summary class="m-accordion__summary">
        ${o}
      </summary>
      <div class="m-accordion__content">
        <p>${a}</p>
      </div>
    `,e.append(n),e},args:{title:"Accordion with Smooth Transitions",content:"This accordion includes smooth expand/collapse animations for better user experience.",transition:!0,outline:!1,open:!1}},s={render:t=>{const e=document.createElement("div"),n=document.createElement("details");n.classList.add("m-accordion"),t.transition&&n.classList.add("--transition"),t.outline&&n.classList.add("--outline"),t.open&&(n.open=!0);const o=t.title,a=t.content;return n.innerHTML=`
      <summary class="m-accordion__summary">
        ${o}
      </summary>
      <div class="m-accordion__content">
        <p>${a}</p>
      </div>
    `,e.append(n),e},args:{title:"Accordion with Outline Style",content:"This accordion has border and padding styling for visual separation.",transition:!1,outline:!0,open:!1}},d={render:t=>{const e=document.createElement("div"),n=document.createElement("details");n.classList.add("m-accordion"),t.transition&&n.classList.add("--transition"),t.outline&&n.classList.add("--outline"),t.open&&(n.open=!0);const o=t.title,a=t.content;return n.innerHTML=`
      <summary class="m-accordion__summary">
        ${o}
      </summary>
      <div class="m-accordion__content">
        <p>${a}</p>
      </div>
    `,e.append(n),e},args:{title:"Pre-expanded Accordion",content:"This accordion is open by default, useful for highlighting important content.",transition:!0,outline:!0,open:!0}},l={render:()=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="1rem";const e=[{title:"Getting Started",content:"Learn how to install and configure Madogiwa UI in your project."},{title:"Components",content:"Explore the available components and their usage patterns."},{title:"Customization",content:"Discover how to customize the framework to match your design system."}];for(const n of e){const o=document.createElement("details");o.classList.add("m-accordion","--transition","--outline"),o.innerHTML=`
        <summary class="m-accordion__summary">
          ${n.title}
        </summary>
        <div class="m-accordion__content">
          <p>${n.content}</p>
        </div>
      `,t.append(o)}return t},parameters:{docs:{description:{story:"Multiple accordions can be used together to create expandable content sections."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const accordion = document.createElement("details");
    accordion.classList.add("m-accordion");
    if (args["transition"]) accordion.classList.add("--transition");
    if (args["outline"]) accordion.classList.add("--outline");
    if (args["open"]) accordion.open = true;
    const title = args["title"];
    const content = args["content"];
    accordion.innerHTML = \`
      <summary class="m-accordion__summary" id="summary" aria-controls="content">
        \${title}
      </summary>
      <div class="m-accordion__content" id="content" aria-labelledby="summary">
        <p>\${content}</p>
      </div>
    \`;
    container.append(accordion);
    return container;
  },
  args: {
    title: "What is Madogiwa UI?",
    content: "Madogiwa UI is a modern CSS framework leveraging cutting-edge CSS features like @property, CSS Nesting, and logical properties.",
    transition: false,
    outline: false,
    open: false
  },
  play: async ({
    canvasElement
  }) => {
    const accordion = canvasElement.querySelector(".m-accordion") as HTMLDetailsElement;
    const summary = accordion.querySelector(".m-accordion__summary") as HTMLElement;
    const content = accordion.querySelector(".m-accordion__content") as HTMLElement;

    // Initial state - accordion should be closed
    await expect(accordion.open).toBe(false);
    await expect(content).not.toBeVisible();

    // Click to open
    summary.click();
    await expect(accordion.open).toBe(true);

    // Wait for any potential transitions
    await new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    await expect(content).toBeVisible();

    // Click to close
    summary.click();
    await expect(accordion.open).toBe(false);
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const accordion = document.createElement("details");
    accordion.classList.add("m-accordion");
    if (args["transition"]) accordion.classList.add("--transition");
    if (args["outline"]) accordion.classList.add("--outline");
    if (args["open"]) accordion.open = true;
    const title = args["title"];
    const content = args["content"];
    accordion.innerHTML = \`
      <summary class="m-accordion__summary">
        \${title}
      </summary>
      <div class="m-accordion__content">
        <p>\${content}</p>
      </div>
    \`;
    container.append(accordion);
    return container;
  },
  args: {
    title: "Accordion with Smooth Transitions",
    content: "This accordion includes smooth expand/collapse animations for better user experience.",
    transition: true,
    outline: false,
    open: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const accordion = document.createElement("details");
    accordion.classList.add("m-accordion");
    if (args["transition"]) accordion.classList.add("--transition");
    if (args["outline"]) accordion.classList.add("--outline");
    if (args["open"]) accordion.open = true;
    const title = args["title"];
    const content = args["content"];
    accordion.innerHTML = \`
      <summary class="m-accordion__summary">
        \${title}
      </summary>
      <div class="m-accordion__content">
        <p>\${content}</p>
      </div>
    \`;
    container.append(accordion);
    return container;
  },
  args: {
    title: "Accordion with Outline Style",
    content: "This accordion has border and padding styling for visual separation.",
    transition: false,
    outline: true,
    open: false
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    const accordion = document.createElement("details");
    accordion.classList.add("m-accordion");
    if (args["transition"]) accordion.classList.add("--transition");
    if (args["outline"]) accordion.classList.add("--outline");
    if (args["open"]) accordion.open = true;
    const title = args["title"];
    const content = args["content"];
    accordion.innerHTML = \`
      <summary class="m-accordion__summary">
        \${title}
      </summary>
      <div class="m-accordion__content">
        <p>\${content}</p>
      </div>
    \`;
    container.append(accordion);
    return container;
  },
  args: {
    title: "Pre-expanded Accordion",
    content: "This accordion is open by default, useful for highlighting important content.",
    transition: true,
    outline: true,
    open: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1rem";
    const accordions = [{
      title: "Getting Started",
      content: "Learn how to install and configure Madogiwa UI in your project."
    }, {
      title: "Components",
      content: "Explore the available components and their usage patterns."
    }, {
      title: "Customization",
      content: "Discover how to customize the framework to match your design system."
    }];
    for (const accordionData of accordions) {
      const accordion = document.createElement("details");
      accordion.classList.add("m-accordion", "--transition", "--outline");
      accordion.innerHTML = \`
        <summary class="m-accordion__summary">
          \${accordionData.title}
        </summary>
        <div class="m-accordion__content">
          <p>\${accordionData.content}</p>
        </div>
      \`;
      container.append(accordion);
    }
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple accordions can be used together to create expandable content sections."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const u=["Default","WithTransition","WithOutline","OpenByDefault","MultipleAccordions"];export{c as Default,l as MultipleAccordions,d as OpenByDefault,s as WithOutline,r as WithTransition,u as __namedExportsOrder,m as default};
