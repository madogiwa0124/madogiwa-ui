const i=(a={})=>{const{text:t="Paragraph text"}=a,e=document.createElement("p");return e.classList.add("m-p"),t&&(e.textContent=t),e},{expect:n,within:c}=__STORYBOOK_MODULE_TEST__,l={title:"Components/Paragraph",tags:["autodocs"],argTypes:{text:{control:"text",description:"The text content of the paragraph."}},parameters:{docs:{description:{component:`
### Overview

The Paragraph component provides a styled paragraph element with consistent spacing and typography. It ensures proper text flow and readability with automatic spacing management between paragraphs.

### Usage

Use Paragraph components for body text, descriptions, and any multi-sentence content that needs proper spacing and typography. The component automatically handles spacing between consecutive paragraphs and maintains consistent text styling.

### Elements

| Name | Description |
| ---- | ----------- |
| .m-p | The main paragraph element with automatic spacing and typography |

### Modifiers

No specific modifiers are defined for this component.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-p | margin-top | var(--spacing-0) | Top margin for paragraph spacing |
| .m-p | margin-bottom | var(--spacing-4) | Bottom margin for paragraph spacing |

### Data Attributes

No specific data attributes are defined for this component.

### Caution

- The component uses spacing variables that should be defined in the design system
- Top margin is set to zero to prevent double spacing at the beginning of content
- Bottom margin provides consistent spacing between paragraphs
        `}}}},r={parameters:{docs:{description:{story:"Default paragraph with standard spacing and typography."}}},render:a=>i(a),args:{text:"This is sample text. Paragraphs are used to group multiple sentences and display related information together."},play:async({canvasElement:a})=>{const e=c(a).getByText(/This is sample text/);await n(e).not.toBeNull(),await n(e.tagName.toLowerCase()).toBe("p"),await n(e).toHaveClass("m-p")}},s={parameters:{docs:{description:{story:"Multiple paragraphs showing automatic spacing between elements."}}},render:()=>{const a=document.createElement("div"),t=["This is the first paragraph. Appropriate spacing is automatically set between paragraphs.","This is the second paragraph. Appropriate spacing is automatically set between paragraphs.","This is the third paragraph. Appropriate spacing is automatically set between paragraphs."];for(const e of t)a.append(i({text:e}));return a},play:async({canvasElement:a})=>{const e=c(a).getAllByText(/This is the.*paragraph/);await n(e).toHaveLength(3);for(const p of e)await n(p).not.toBeNull(),await n(p.tagName.toLowerCase()).toBe("p"),await n(p).toHaveClass("m-p")}},o={parameters:{docs:{description:{story:"Paragraph with longer content to demonstrate text flow and readability."}}},render:()=>{const a=document.createElement("div");a.style.cssText="max-width: 600px;";const t=i({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});return a.append(t),a},play:async({canvasElement:a})=>{const e=c(a).getByText(/Lorem ipsum dolor sit amet/);await n(e).not.toBeNull(),await n(e).toHaveClass("m-p")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default paragraph with standard spacing and typography."
      }
    }
  },
  render: args => createParagraph(args),
  args: {
    text: "This is sample text. Paragraphs are used to group multiple sentences and display related information together."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const paragraph = canvas.getByText(/This is sample text/);
    await expect(paragraph).not.toBeNull();
    await expect(paragraph.tagName.toLowerCase()).toBe("p");
    await expect(paragraph).toHaveClass("m-p");
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Multiple paragraphs showing automatic spacing between elements."
      }
    }
  },
  render: () => {
    const container = document.createElement("div");
    const paragraphs = ["This is the first paragraph. Appropriate spacing is automatically set between paragraphs.", "This is the second paragraph. Appropriate spacing is automatically set between paragraphs.", "This is the third paragraph. Appropriate spacing is automatically set between paragraphs."];
    for (const text of paragraphs) {
      container.append(createParagraph({
        text
      }));
    }
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const paragraphs = canvas.getAllByText(/This is the.*paragraph/);
    await expect(paragraphs).toHaveLength(3);
    for (const paragraph of paragraphs) {
      await expect(paragraph).not.toBeNull();
      await expect(paragraph.tagName.toLowerCase()).toBe("p");
      await expect(paragraph).toHaveClass("m-p");
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Paragraph with longer content to demonstrate text flow and readability."
      }
    }
  },
  render: () => {
    const container = document.createElement("div");
    container.style.cssText = "max-width: 600px;";
    const paragraph = createParagraph({
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    });
    container.append(paragraph);
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const paragraph = canvas.getByText(/Lorem ipsum dolor sit amet/);
    await expect(paragraph).not.toBeNull();
    await expect(paragraph).toHaveClass("m-p");
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","MultipleParagraphs","LongContent"];export{r as Default,o as LongContent,s as MultipleParagraphs,g as __namedExportsOrder,l as default};
