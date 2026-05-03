import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a;e((()=>{({expect:t}=__STORYBOOK_MODULE_TEST__),n={title:`Components/Heading`,tags:[`autodocs`],argTypes:{text:{control:{type:`text`},description:`The text content of the heading`},level:{control:{type:`select`},options:[1,2,3,4,5,6],description:`The semantic heading level (h1-h6)`},className:{control:{type:`text`},description:`Additional CSS classes to apply`}},parameters:{docs:{description:{component:`
### Overview

The Heading component provides semantically correct heading elements (h1-h6) with consistent typography and spacing. Each heading level follows a clear visual hierarchy while maintaining proper semantic structure for accessibility.

### Usage

Use headings to:
- Create document structure and hierarchy
- Improve content organization and readability
- Provide landmarks for screen readers and assistive technologies
- Establish visual emphasis and content flow
- Support SEO through proper semantic markup

**Common use cases:**
- Page titles and main headings (h1)
- Section headings and subheadings (h2-h3)
- Component titles and labels (h4-h6)
- Article and blog post structure
- Navigation landmarks

### Heading Levels

| Level | Component | Usage |
| ----- | ------- | ----- |
| 1 | .m-h1 | Page titles, main headings |
| 2 | .m-h2 | Major section headings |
| 3 | .m-h3 | Subsection headings |
| 4 | .m-h4 | Minor headings, component titles |
| 5 | .m-h5 | Small headings, labels |
| 6 | .m-h6 | Smallest headings, captions |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --h1-font-size | var(--text-3xl) | Font size for h1 headings (largest) |
| --h1-font-weight | var(--font-weight-bold) | Font weight for h1 headings |
| --h1-line-height | var(--text-3xl--line-height) | Line height for h1 headings |
| --h1-margin | 0 0 var(--spacing-4) 0 | Margin for h1 headings |
| --h2-font-size | var(--text-2xl) | Font size for h2 headings |
| --h2-font-weight | var(--font-weight-bold) | Font weight for h2 headings |
| --h2-line-height | var(--text-2xl--line-height) | Line height for h2 headings |
| --h2-margin | 0 0 var(--spacing-4) 0 | Margin for h2 headings |
| --h3-font-size | var(--text-xl) | Font size for h3 headings |
| --h3-font-weight | var(--font-weight-bold) | Font weight for h3 headings |
| --h3-line-height | var(--text-xl--line-height) | Line height for h3 headings |
| --h3-margin | 0 0 var(--spacing-4) 0 | Margin for h3 headings |
| --h4-font-size | var(--text-lg) | Font size for h4 headings |
| --h4-font-weight | var(--font-weight-medium) | Font weight for h4 headings |
| --h4-line-height | var(--text-lg--line-height) | Line height for h4 headings |
| --h4-margin | 0 0 var(--spacing-2) 0 | Margin for h4 headings (smaller than h1-h3) |
| --h5-font-size | var(--text-base) | Font size for h5 headings |
| --h5-font-weight | var(--font-weight-medium) | Font weight for h5 headings |
| --h5-line-height | var(--text-base--line-height) | Line height for h5 headings |
| --h5-margin | 0 0 var(--spacing-2) 0 | Margin for h5 headings (smaller than h1-h3) |
| --h6-font-size | var(--text-base) | Font size for h6 headings |
| --h6-font-weight | var(--font-weight-medium) | Font weight for h6 headings |
| --h6-line-height | var(--text-base--line-height) | Line height for h6 headings |
| --h6-margin | 0 0 var(--spacing-2) 0 | Margin for h6 headings (smaller than h1-h3) |

### Caution

- Use only one h1 per page for the main title
- Don't skip heading levels (h1 → h3 without h2)
- Ensure headings are descriptive and meaningful
        `}}}},r={render:e=>{let t=e.text||`Default Heading`,n=e.level,r=e.className||``,i=Math.max(1,Math.min(6,n)).toString(),a=document.createElement(`h${i}`);return a.textContent=t,a.classList.add(`m-h${i}`),r&&a.classList.add(...r.split(` `).filter(e=>e.trim())),a},args:{text:`Default Heading`,level:1,className:``},play:async({canvasElement:e,args:n})=>{let r=n.level,i=Math.max(1,Math.min(6,r)),a=n.text||`Default Heading`,o=i.toString(),s=e.querySelector(`h${o}`);await t(s).toBeInTheDocument(),await t(s).toHaveClass(`m-h${o}`),await t(s).toHaveTextContent(a),await t(s.tagName.toLowerCase()).toBe(`h${o}`);let c=globalThis.getComputedStyle(s);await t(c.marginTop).toBe(`0px`),await t(Number.parseFloat(c.marginBottom)).toBeGreaterThan(0),i<=3?await t(Number.parseInt(c.fontWeight)).toBeGreaterThanOrEqual(700):(await t(Number.parseInt(c.fontWeight)).toBeGreaterThanOrEqual(500),await t(Number.parseInt(c.fontWeight)).toBeLessThan(700))}},i={render:()=>{let e=document.createElement(`div`);e.style.display=`flex`,e.style.flexDirection=`column`,e.style.gap=`1.5rem`,e.style.padding=`1rem`;for(let t of[{level:1,text:`Heading Level 1 - Main Title`,description:`Primary page heading, used once per page`},{level:2,text:`Heading Level 2 - Section Title`,description:`Major section headings`},{level:3,text:`Heading Level 3 - Subsection`,description:`Subsection headings`},{level:4,text:`Heading Level 4 - Minor Heading`,description:`Component titles and labels`},{level:5,text:`Heading Level 5 - Small Heading`,description:`Small headings and labels`},{level:6,text:`Heading Level 6 - Caption`,description:`Smallest headings and captions`}]){let n=document.createElement(`div`);n.style.display=`flex`,n.style.flexDirection=`column`,n.style.gap=`0.5rem`,n.style.padding=`1rem`,n.style.border=`1px solid var(--color-border)`,n.style.borderRadius=`0.375rem`,n.style.backgroundColor=`var(--color-bg-muted)`;let r=t.level.toString(),i=document.createElement(`h${r}`);i.textContent=t.text,i.classList.add(`m-h${r}`);let a=document.createElement(`p`);a.textContent=t.description,a.style.margin=`0`,a.style.fontSize=`0.875rem`,a.style.color=`var(--color-text-subtle)`,a.style.fontStyle=`italic`,n.append(i,a),e.append(n)}return e},play:async({canvasElement:e})=>{for(let n=1;n<=6;n++){let r=n.toString(),i=e.querySelector(`h${r}`);await t(i).toBeInTheDocument(),await t(i).toHaveClass(`m-h${r}`),await t(i).toHaveTextContent(`Heading Level ${r}`),await t(i.tagName.toLowerCase()).toBe(`h${r}`);let a=globalThis.getComputedStyle(i),o=Number.parseFloat(a.fontSize);switch(n){case 1:await t(o).toBeGreaterThan(20);break;case 2:await t(o).toBeGreaterThan(18);break;case 3:await t(o).toBeGreaterThan(16);break;case 4:await t(o).toBeGreaterThan(16);break;default:await t(o).toBeGreaterThanOrEqual(16);break}let s=Number.parseInt(a.fontWeight);n<=3?await t(s).toBeGreaterThanOrEqual(700):(await t(s).toBeGreaterThanOrEqual(500),await t(s).toBeLessThan(700))}},parameters:{docs:{description:{story:`Overview of all heading levels showing the visual hierarchy and usage guidelines.`}}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const text = args["text"] || "Default Heading";
    const level = args["level"];
    const className = args["className"] || "";
    const safeLevel = Math.max(1, Math.min(6, level));
    const levelString = safeLevel.toString();
    const heading = document.createElement(\`h\${levelString}\`);
    heading.textContent = text;
    heading.classList.add(\`m-h\${levelString}\`);
    if (className) {
      heading.classList.add(...className.split(" ").filter(cls => cls.trim()));
    }
    return heading;
  },
  args: {
    text: "Default Heading",
    level: 1,
    className: ""
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const expectedLevel = args["level"];
    const safeLevel = Math.max(1, Math.min(6, expectedLevel));
    const expectedText = args["text"] || "Default Heading";
    const levelString = safeLevel.toString();
    const heading = canvasElement.querySelector(\`h\${levelString}\`) as HTMLHeadingElement;

    // Test basic properties
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveClass(\`m-h\${levelString}\`);
    await expect(heading).toHaveTextContent(expectedText);
    await expect(heading.tagName.toLowerCase()).toBe(\`h\${levelString}\`);

    // Test styling
    const computedStyle = globalThis.getComputedStyle(heading);
    await expect(computedStyle.marginTop).toBe("0px");
    await expect(Number.parseFloat(computedStyle.marginBottom)).toBeGreaterThan(0);

    // Test font properties based on level
    if (safeLevel <= 3) {
      // h1, h2, h3 should be bold
      await expect(Number.parseInt(computedStyle.fontWeight)).toBeGreaterThanOrEqual(700);
    } else {
      // h4, h5, h6 should be medium weight
      await expect(Number.parseInt(computedStyle.fontWeight)).toBeGreaterThanOrEqual(500);
      await expect(Number.parseInt(computedStyle.fontWeight)).toBeLessThan(700);
    }
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1.5rem";
    container.style.padding = "1rem";
    const headingData = [{
      level: 1,
      text: "Heading Level 1 - Main Title",
      description: "Primary page heading, used once per page"
    }, {
      level: 2,
      text: "Heading Level 2 - Section Title",
      description: "Major section headings"
    }, {
      level: 3,
      text: "Heading Level 3 - Subsection",
      description: "Subsection headings"
    }, {
      level: 4,
      text: "Heading Level 4 - Minor Heading",
      description: "Component titles and labels"
    }, {
      level: 5,
      text: "Heading Level 5 - Small Heading",
      description: "Small headings and labels"
    }, {
      level: 6,
      text: "Heading Level 6 - Caption",
      description: "Smallest headings and captions"
    }];
    for (const data of headingData) {
      const section = document.createElement("div");
      section.style.display = "flex";
      section.style.flexDirection = "column";
      section.style.gap = "0.5rem";
      section.style.padding = "1rem";
      section.style.border = "1px solid var(--color-border)";
      section.style.borderRadius = "0.375rem";
      section.style.backgroundColor = "var(--color-bg-muted)";
      const levelString = data.level.toString();
      const heading = document.createElement(\`h\${levelString}\`);
      heading.textContent = data.text;
      heading.classList.add(\`m-h\${levelString}\`);
      const description = document.createElement("p");
      description.textContent = data.description;
      description.style.margin = "0";
      description.style.fontSize = "0.875rem";
      description.style.color = "var(--color-text-subtle)";
      description.style.fontStyle = "italic";
      section.append(heading, description);
      container.append(section);
    }
    return container;
  },
  play: async ({
    canvasElement
  }) => {
    // Verify that all heading levels (h1-h6) are rendered
    for (let level = 1; level <= 6; level++) {
      const levelString = level.toString();
      const heading = canvasElement.querySelector(\`h\${levelString}\`) as HTMLHeadingElement;
      await expect(heading).toBeInTheDocument();
      await expect(heading).toHaveClass(\`m-h\${levelString}\`);
      await expect(heading).toHaveTextContent(\`Heading Level \${levelString}\`);
      await expect(heading.tagName.toLowerCase()).toBe(\`h\${levelString}\`);

      // Test visual hierarchy - larger levels should have larger font sizes
      const computedStyle = globalThis.getComputedStyle(heading);
      const fontSize = Number.parseFloat(computedStyle.fontSize);
      switch (level) {
        case 1:
          {
            // h1 should be the largest (text-3xl)
            await expect(fontSize).toBeGreaterThan(20); // Significantly larger than base
            break;
          }
        case 2:
          {
            // h2 should be smaller than h1 but larger than h3 (text-2xl)
            await expect(fontSize).toBeGreaterThan(18); // Larger than h3
            break;
          }
        case 3:
          {
            // h3 should be larger than h4 (text-xl)
            await expect(fontSize).toBeGreaterThan(16); // Larger than base
            break;
          }
        case 4:
          {
            // h4 should be slightly larger than base (text-lg)
            await expect(fontSize).toBeGreaterThan(16); // Slightly larger than base
            break;
          }
        default:
          {
            // h5-h6 use base font size
            await expect(fontSize).toBeGreaterThanOrEqual(16); // Base font size
            break;
          }
      }

      // Test font weight
      const fontWeight = Number.parseInt(computedStyle.fontWeight);
      if (level <= 3) {
        await expect(fontWeight).toBeGreaterThanOrEqual(700); // Bold
      } else {
        await expect(fontWeight).toBeGreaterThanOrEqual(500); // Medium
        await expect(fontWeight).toBeLessThan(700);
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Overview of all heading levels showing the visual hierarchy and usage guidelines."
      }
    }
  }
}`,...i.parameters?.docs?.source}}},a=[`Default`,`AllHeadings`]}))();export{i as AllHeadings,r as Default,a as __namedExportsOrder,n as default};