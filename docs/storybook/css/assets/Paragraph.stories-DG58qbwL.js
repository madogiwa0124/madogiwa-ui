import{n as e}from"./chunk-BneVvdWh.js";var t,n=e((()=>{t=(e={})=>{let{text:t=`Paragraph text`}=e,n=document.createElement(`p`);return n.classList.add(`m-p`),t&&(n.textContent=t),n}})),r,i,a,o,s,c,l;e((()=>{n(),{expect:r,within:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/Paragraph`,tags:[`autodocs`],argTypes:{text:{control:`text`,description:`The text content of the paragraph.`}},parameters:{docs:{description:{component:`
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
        `}}}},o={parameters:{docs:{description:{story:`Default paragraph with standard spacing and typography.`}}},render:e=>t(e),args:{text:`This is sample text. Paragraphs are used to group multiple sentences and display related information together.`},play:async({canvasElement:e})=>{let t=i(e).getByText(/This is sample text/);await r(t).not.toBeNull(),await r(t.tagName.toLowerCase()).toBe(`p`),await r(t).toHaveClass(`m-p`)}},s={parameters:{docs:{description:{story:`Multiple paragraphs showing automatic spacing between elements.`}}},render:()=>{let e=document.createElement(`div`);for(let n of[`This is the first paragraph. Appropriate spacing is automatically set between paragraphs.`,`This is the second paragraph. Appropriate spacing is automatically set between paragraphs.`,`This is the third paragraph. Appropriate spacing is automatically set between paragraphs.`])e.append(t({text:n}));return e},play:async({canvasElement:e})=>{let t=i(e).getAllByText(/This is the.*paragraph/);await r(t).toHaveLength(3);for(let e of t)await r(e).not.toBeNull(),await r(e.tagName.toLowerCase()).toBe(`p`),await r(e).toHaveClass(`m-p`)}},c={parameters:{docs:{description:{story:`Paragraph with longer content to demonstrate text flow and readability.`}}},render:()=>{let e=document.createElement(`div`);e.style.cssText=`max-width: 600px;`;let n=t({text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`});return e.append(n),e},play:async({canvasElement:e})=>{let t=i(e).getByText(/Lorem ipsum dolor sit amet/);await r(t).not.toBeNull(),await r(t).toHaveClass(`m-p`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Default`,`MultipleParagraphs`,`LongContent`]}))();export{o as Default,c as LongContent,s as MultipleParagraphs,l as __namedExportsOrder,a as default};