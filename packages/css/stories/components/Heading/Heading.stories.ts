import type { Meta, StoryObj } from "@storybook/html";
import { expect, userEvent } from "storybook/test";

type HeadingProperties = {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
};

const meta: Meta<HeadingProperties> = {
  title: "Components/Heading",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
      description: "The text content of the heading",
    },
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
      description: "The semantic heading level (h1-h6)",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<HeadingProperties>;

export const Default: Story = {
  render: (args) => {
    const text = args["text"] || "Default Heading";
    const level = args["level"];
    const className = args["className"] || "";

    const safeLevel = Math.max(1, Math.min(6, level));
    const levelString = safeLevel.toString();

    const heading = document.createElement(`h${levelString}`);
    heading.textContent = text;
    heading.classList.add(`m-h${levelString}`);

    if (className) {
      heading.classList.add(...className.split(" ").filter(cls => cls.trim()));
    }

    return heading;
  },
  args: {
    text: "Default Heading",
    level: 1,
    className: "",
  },
  play: async ({ canvasElement, args }) => {
    const expectedLevel = args["level"];
    const safeLevel = Math.max(1, Math.min(6, expectedLevel));
    const expectedText = args["text"] || "Default Heading";
    const levelString = safeLevel.toString();

    const heading = canvasElement.querySelector(`h${levelString}`) as HTMLHeadingElement;

    // Test basic properties
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveClass(`m-h${levelString}`);
    await expect(heading).toHaveTextContent(expectedText);
    await expect(heading.tagName.toLowerCase()).toBe(`h${levelString}`);

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
  },
};

export const AllHeadings: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1.5rem";
    container.style.padding = "1rem";

    const headingData = [
      { level: 1, text: "Heading Level 1 - Main Title", description: "Primary page heading, used once per page" },
      { level: 2, text: "Heading Level 2 - Section Title", description: "Major section headings" },
      { level: 3, text: "Heading Level 3 - Subsection", description: "Subsection headings" },
      { level: 4, text: "Heading Level 4 - Minor Heading", description: "Component titles and labels" },
      { level: 5, text: "Heading Level 5 - Small Heading", description: "Small headings and labels" },
      { level: 6, text: "Heading Level 6 - Caption", description: "Smallest headings and captions" },
    ];

    for (const data of headingData) {
      const section = document.createElement("div");
      section.style.display = "flex";
      section.style.flexDirection = "column";
      section.style.gap = "0.5rem";
      section.style.padding = "1rem";
      section.style.border = "1px solid #e5e7eb";
      section.style.borderRadius = "0.375rem";
      section.style.backgroundColor = "#f9fafb";

      const levelString = data.level.toString();
      const heading = document.createElement(`h${levelString}`);
      heading.textContent = data.text;
      heading.classList.add(`m-h${levelString}`);

      const description = document.createElement("p");
      description.textContent = data.description;
      description.style.margin = "0";
      description.style.fontSize = "0.875rem";
      description.style.color = "#6b7280";
      description.style.fontStyle = "italic";

      section.append(heading, description);
      container.append(section);
    }

    return container;
  },
  play: async ({ canvasElement }) => {
    // Verify that all heading levels (h1-h6) are rendered
    for (let level = 1; level <= 6; level++) {
      const levelString = level.toString();
      const heading = canvasElement.querySelector(`h${levelString}`) as HTMLHeadingElement;
      await expect(heading).toBeInTheDocument();
      await expect(heading).toHaveClass(`m-h${levelString}`);
      await expect(heading).toHaveTextContent(`Heading Level ${levelString}`);
      await expect(heading.tagName.toLowerCase()).toBe(`h${levelString}`);

      // Test visual hierarchy - larger levels should have larger font sizes
      const computedStyle = globalThis.getComputedStyle(heading);
      const fontSize = Number.parseFloat(computedStyle.fontSize);

      switch (level) {
        case 1: {
          // h1 should be the largest (text-3xl)
          await expect(fontSize).toBeGreaterThan(20); // Significantly larger than base
          break;
        }
        case 2: {
          // h2 should be smaller than h1 but larger than h3 (text-2xl)
          await expect(fontSize).toBeGreaterThan(18); // Larger than h3
          break;
        }
        case 3: {
          // h3 should be larger than h4 (text-xl)
          await expect(fontSize).toBeGreaterThan(16); // Larger than base
          break;
        }
        case 4: {
          // h4 should be slightly larger than base (text-lg)
          await expect(fontSize).toBeGreaterThan(16); // Slightly larger than base
          break;
        }
        default: {
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
        story: "Overview of all heading levels showing the visual hierarchy and usage guidelines.",
      },
    },
  },
};

export const HeadingHierarchy: Story = {
  render: () => {
    const container = document.createElement("article");
    container.style.maxWidth = "600px";
    container.style.padding = "2rem";
    container.style.lineHeight = "1.6";

    container.innerHTML = `
      <h1 class="m-h1">Introduction to Web Development</h1>
      <p style="margin-bottom: 2rem; color: #6b7280;">A comprehensive guide to modern web development practices and techniques.</p>

      <h2 class="m-h2">Getting Started</h2>
      <p style="margin-bottom: 1.5rem;">Before diving into web development, it's important to understand the fundamentals.</p>

      <h3 class="m-h3">Setting Up Your Environment</h3>
      <p style="margin-bottom: 1rem;">Choose the right tools and configure your development environment.</p>

      <h4 class="m-h4">Code Editor Selection</h4>
      <p style="margin-bottom: 1rem;">Popular editors include Visual Studio Code, WebStorm, and Sublime Text.</p>

      <h5 class="m-h5">Extensions and Plugins</h5>
      <p style="margin-bottom: 1rem;">Enhance your editor with useful extensions for better productivity.</p>

      <h6 class="m-h6">Configuration Tips</h6>
      <p style="margin-bottom: 2rem;">Fine-tune your settings for optimal workflow.</p>

      <h2 class="m-h2">Core Technologies</h2>
      <p style="margin-bottom: 1.5rem;">Learn about the foundational technologies of web development.</p>

      <h3 class="m-h3">HTML Structure</h3>
      <p style="margin-bottom: 1rem;">Understanding semantic markup and document structure.</p>

      <h3 class="m-h3">CSS Styling</h3>
      <p style="margin-bottom: 1rem;">Creating beautiful and responsive designs with modern CSS.</p>

      <h3 class="m-h3">JavaScript Functionality</h3>
      <p>Adding interactivity and dynamic behavior to your websites.</p>
    `;

    return container;
  },
  play: async ({ canvasElement }) => {
    // Test proper heading hierarchy
    const headings = canvasElement.querySelectorAll("h1, h2, h3, h4, h5, h6");
    await expect(headings.length).toBeGreaterThan(0);

    // Test that h1 exists and is unique
    const h1Elements = canvasElement.querySelectorAll("h1");
    await expect(h1Elements).toHaveLength(1);
    await expect(h1Elements[0]).toHaveTextContent("Introduction to Web Development");

    // Test that all headings have proper classes
    for (const heading of headings) {
      const tagName = heading.tagName.toLowerCase();
      const expectedClass = `m-${tagName}`;
      await expect(heading).toHaveClass(expectedClass);
    }

    // Test semantic structure
    await expect(canvasElement.querySelector("article")).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: "Example of proper heading hierarchy in a structured document, demonstrating semantic usage.",
      },
    },
  },
};

export const CustomStyling: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "2rem";
    container.style.padding = "2rem";

    // Large heading with custom styling
    const largeSection = document.createElement("div");
    largeSection.innerHTML = `
      <h1 class="m-h1" style="--h1-font-size: 4rem; --h1-line-height: 1.1; color: #2563eb;">Extra Large H1</h1>
      <p style="margin: 0; color: #6b7280;">H1 heading with custom font size (4rem) and tight line height, showcasing the text-3xl base</p>
    `;

    // Compact headings using margin variables
    const compactSection = document.createElement("div");
    compactSection.innerHTML = `
      <h2 class="m-h2" style="--h2-margin: 0 0 0.5rem 0;">Compact Heading</h2>
      <p style="margin: 0; color: #6b7280;">Heading with reduced bottom margin using --h2-margin CSS variable</p>
    `;

    // Colored headings
    const coloredSection = document.createElement("div");
    coloredSection.innerHTML = `
      <h3 class="m-h3" style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 0.5rem;">Success Heading</h3>
      <h3 class="m-h3" style="color: #dc2626; border-left: 4px solid #dc2626; padding-left: 1rem;">Error Heading</h3>
      <h3 class="m-h3" style="color: #d97706; background-color: #fef3c7; padding: 0.75rem; border-radius: 0.375rem;">Warning Heading</h3>
    `;

    // Typography and spacing variations using heading-specific CSS variables
    const typographySection = document.createElement("div");
    typographySection.innerHTML = `
      <h4 class="m-h4" style="--h4-font-weight: var(--font-weight-bold); --h4-font-size: 1.25rem; --h4-margin: 0 0 1.5rem 0;">Bold H4 with Larger Size</h4>
      <p style="margin: 0 0 1rem 0; color: #6b7280;">H4 heading with increased font weight, size, and margin using CSS variables</p>
      <h5 class="m-h5" style="--h5-font-size: 0.875rem; --h5-line-height: 1.2; --h5-margin: 0 0 0.25rem 0; text-transform: uppercase; letter-spacing: 0.05em;">Small Caps H5</h5>
      <p style="margin: 0 0 1rem 0; color: #6b7280;">H5 heading with reduced size, tight spacing, and uppercase styling</p>
      <h6 class="m-h6" style="--h6-margin: 0.5rem 0; text-align: center; color: #6b7280; font-style: italic;">Centered Caption</h6>
      <p style="margin: 0; color: #6b7280;">H6 heading with top and bottom margin for caption-style layout</p>
    `;

    container.append(largeSection, compactSection, coloredSection, typographySection);
    return container;
  },
  play: async ({ canvasElement }) => {
    const headings = canvasElement.querySelectorAll("h1, h2, h3");

    for (const heading of headings) {
      const tagName = heading.tagName.toLowerCase();
      await expect(heading).toHaveClass(`m-${tagName}`);
    }

    // Test custom styling is applied
    const largeHeading = canvasElement.querySelector("h1");
    const computedStyle = globalThis.getComputedStyle(largeHeading as Element);
    await expect(computedStyle.color).toBe("rgb(37, 99, 235)"); // #2563eb
  },
  parameters: {
    docs: {
      description: {
        story: "Examples of custom styling using CSS variables and additional styles for different contexts.",
      },
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.padding = "2rem";
    container.style.border = "1px solid #e5e7eb";
    container.style.borderRadius = "0.5rem";
    container.style.backgroundColor = "#f9fafb";

    // Create controls
    const controls = document.createElement("div");
    controls.style.display = "flex";
    controls.style.gap = "1rem";
    controls.style.marginBottom = "2rem";
    controls.style.alignItems = "center";

    const levelLabel = document.createElement("label");
    levelLabel.textContent = "Heading Level:";
    levelLabel.style.fontWeight = "500";

    const levelSelect = document.createElement("select");
    levelSelect.style.padding = "0.5rem";
    levelSelect.style.border = "1px solid #d1d5db";
    levelSelect.style.borderRadius = "0.25rem";

    for (let levelIndex = 1; levelIndex <= 6; levelIndex++) {
      const option = document.createElement("option");
      const levelString = levelIndex.toString();
      option.value = levelString;
      option.textContent = `H${levelString}`;
      levelSelect.append(option);
    }

    const textLabel = document.createElement("label");
    textLabel.textContent = "Text:";
    textLabel.style.fontWeight = "500";

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.value = "Interactive Heading";
    textInput.style.padding = "0.5rem";
    textInput.style.border = "1px solid #d1d5db";
    textInput.style.borderRadius = "0.25rem";
    textInput.style.minWidth = "200px";

    controls.append(levelLabel, levelSelect, textLabel, textInput);

    // Create demo heading
    const demoHeading = document.createElement("h1");
    demoHeading.classList.add("m-h1");
    demoHeading.textContent = "Interactive Heading";
    demoHeading.style.marginTop = "0";

    // Update function
    const updateHeading = () => {
      const newLevel = levelSelect.value;
      const newText = textInput.value || "Interactive Heading";

      // Remove old classes
      for (let levelIndex = 1; levelIndex <= 6; levelIndex++) {
        const levelString = levelIndex.toString();
        demoHeading.classList.remove(`m-h${levelString}`);
      }

      // Update tag name simulation by updating class and text
      demoHeading.classList.add(`m-h${newLevel}`);
      demoHeading.textContent = newText;

      // Apply corresponding styles using heading-specific CSS variables including margin
      const styles = {
        1: { fontSize: "var(--h1-font-size)", fontWeight: "var(--h1-font-weight)", lineHeight: "var(--h1-line-height)", margin: "var(--h1-margin)" },
        2: { fontSize: "var(--h2-font-size)", fontWeight: "var(--h2-font-weight)", lineHeight: "var(--h2-line-height)", margin: "var(--h2-margin)" },
        3: { fontSize: "var(--h3-font-size)", fontWeight: "var(--h3-font-weight)", lineHeight: "var(--h3-line-height)", margin: "var(--h3-margin)" },
        4: { fontSize: "var(--h4-font-size)", fontWeight: "var(--h4-font-weight)", lineHeight: "var(--h4-line-height)", margin: "var(--h4-margin)" },
        5: { fontSize: "var(--h5-font-size)", fontWeight: "var(--h5-font-weight)", lineHeight: "var(--h5-line-height)", margin: "var(--h5-margin)" },
        6: { fontSize: "var(--h6-font-size)", fontWeight: "var(--h6-font-weight)", lineHeight: "var(--h6-line-height)", margin: "var(--h6-margin)" },
      };

      const style = styles[Number(newLevel) as keyof typeof styles];
      Object.assign(demoHeading.style, style);
    };

    levelSelect.addEventListener("change", updateHeading);
    textInput.addEventListener("input", updateHeading);

    container.append(controls, demoHeading);
    return container;
  },
  play: async ({ canvasElement }) => {
    const levelSelect = canvasElement.querySelector("select") as HTMLSelectElement;
    const textInput = canvasElement.querySelector("input") as HTMLInputElement;
    const heading = canvasElement.querySelector("h1") as HTMLHeadingElement;

    // Test initial state
    await expect(levelSelect).toBeInTheDocument();
    await expect(textInput).toBeInTheDocument();
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent("Interactive Heading");

    // Test level change
    await userEvent.selectOptions(levelSelect, "3");
    await expect(heading).toHaveClass("m-h3");

    // Test text change
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "New Heading Text");
    await expect(heading).toHaveTextContent("New Heading Text");
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive demo allowing you to test different heading levels and content.",
      },
    },
  },
};

export const SpacingDemo: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.padding = "2rem";
    container.style.backgroundColor = "#f9fafb";
    container.style.border = "1px solid #e5e7eb";
    container.style.borderRadius = "0.5rem";

    // Demonstration of different margin behaviors
    const content = document.createElement("div");
    content.innerHTML = `
      <div style="background: white; padding: 1rem; margin-bottom: 2rem; border-radius: 0.375rem; border: 1px solid #e5e7eb;">
        <h1 class="m-h1">H1 Heading (Large Margin)</h1>
        <p style="margin: 0; color: #6b7280;">H1 uses --spacing-4 for bottom margin, providing more separation</p>
      </div>

      <div style="background: white; padding: 1rem; margin-bottom: 2rem; border-radius: 0.375rem; border: 1px solid #e5e7eb;">
        <h2 class="m-h2">H2 Section Heading</h2>
        <p style="margin: 0; color: #6b7280;">H2 also uses --spacing-4 for consistent section separation</p>
      </div>

      <div style="background: white; padding: 1rem; margin-bottom: 2rem; border-radius: 0.375rem; border: 1px solid #e5e7eb;">
        <h3 class="m-h3">H3 Subsection Heading</h3>
        <p style="margin: 0; color: #6b7280;">H3 maintains --spacing-4 for clear subsection breaks</p>
      </div>

      <div style="background: white; padding: 1rem; margin-bottom: 2rem; border-radius: 0.375rem; border: 1px solid #e5e7eb;">
        <h4 class="m-h4">H4 Component Title (Smaller Margin)</h4>
        <p style="margin: 0; color: #6b7280;">H4 uses --spacing-2 for tighter spacing, suitable for component titles</p>
      </div>

      <div style="background: white; padding: 1rem; margin-bottom: 2rem; border-radius: 0.375rem; border: 1px solid #e5e7eb;">
        <h5 class="m-h5">H5 Label Heading</h5>
        <p style="margin: 0; color: #6b7280;">H5 also uses --spacing-2 for compact label-like presentation</p>
      </div>

      <div style="background: white; padding: 1rem; border-radius: 0.375rem; border: 1px solid #e5e7eb;">
        <h6 class="m-h6">H6 Caption Heading</h6>
        <p style="margin: 0; color: #6b7280;">H6 maintains --spacing-2 for minimal spacing as captions</p>
      </div>

      <div style="margin-top: 2rem; padding: 1rem; background: #fef3c7; border-radius: 0.375rem; border-left: 4px solid #d97706;">
        <h4 style="margin: 0; color: #92400e;">Spacing Pattern</h4>
        <p style="margin: 0.5rem 0 0 0; color: #92400e; font-size: 0.875rem;">
          • H1-H3: Use --spacing-4 (larger margin) for major content separation<br>
          • H4-H6: Use --spacing-2 (smaller margin) for compact component layouts
        </p>
      </div>
    `;

    container.append(content);
    return container;
  },
  play: async ({ canvasElement }) => {
    const headings = canvasElement.querySelectorAll("h1, h2, h3, h4, h5, h6");

    // Test that headings are rendered with correct classes
    for (const heading of headings) {
      const tagName = heading.tagName.toLowerCase();
      await expect(heading).toHaveClass(`m-${tagName}`);
    }

    // Test margin differences
    const h1 = canvasElement.querySelector("h1") as HTMLHeadingElement;
    const h4 = canvasElement.querySelector("h4") as HTMLHeadingElement;

    await expect(h1).toBeInTheDocument();
    await expect(h4).toBeInTheDocument();

    const h1Style = globalThis.getComputedStyle(h1);
    const h4Style = globalThis.getComputedStyle(h4);

    const h1MarginBottom = Number.parseFloat(h1Style.marginBottom);
    const h4MarginBottom = Number.parseFloat(h4Style.marginBottom);

    // H1 should have larger bottom margin than H4
    await expect(h1MarginBottom).toBeGreaterThan(h4MarginBottom);
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the different margin behaviors between heading levels. H1-H3 use larger margins (--spacing-4) for major content separation, while H4-H6 use smaller margins (--spacing-2) for compact layouts.",
      },
    },
  },
};

export const FontSizeHierarchy: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.padding = "2rem";
    container.style.backgroundColor = "#f9fafb";
    container.style.border = "1px solid #e5e7eb";
    container.style.borderRadius = "0.5rem";

    const content = document.createElement("div");
    content.innerHTML = `
      <div style="text-align: center; margin-bottom: 3rem;">
        <h2 style="margin: 0 0 1rem 0; color: #374151;">Typography Scale Demonstration</h2>
        <p style="margin: 0; color: #6b7280;">Visual comparison of all heading levels with their font size tokens</p>
      </div>

      <div style="display: grid; gap: 2rem;">
        <div style="display: flex; align-items: baseline; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h1 class="m-h1" style="margin: 0; color: #1e40af;">H1 Heading</h1>
          <div style="flex: 1; border-top: 1px dashed #d1d5db;"></div>
          <span style="font-size: 0.875rem; color: #6b7280; font-family: monospace;">text-3xl (--h1-font-size)</span>
        </div>

        <div style="display: flex; align-items: baseline; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.5rem; border-left: 4px solid #059669;">
          <h2 class="m-h2" style="margin: 0; color: #047857;">H2 Section</h2>
          <div style="flex: 1; border-top: 1px dashed #d1d5db;"></div>
          <span style="font-size: 0.875rem; color: #6b7280; font-family: monospace;">text-2xl (--h2-font-size)</span>
        </div>

        <div style="display: flex; align-items: baseline; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.5rem; border-left: 4px solid #7c3aed;">
          <h3 class="m-h3" style="margin: 0; color: #6d28d9;">H3 Subsection</h3>
          <div style="flex: 1; border-top: 1px dashed #d1d5db;"></div>
          <span style="font-size: 0.875rem; color: #6b7280; font-family: monospace;">text-xl (--h3-font-size)</span>
        </div>

        <div style="display: flex; align-items: baseline; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.5rem; border-left: 4px solid #ea580c;">
          <h4 class="m-h4" style="margin: 0; color: #c2410c;">H4 Component</h4>
          <div style="flex: 1; border-top: 1px dashed #d1d5db;"></div>
          <span style="font-size: 0.875rem; color: #6b7280; font-family: monospace;">text-lg (--h4-font-size)</span>
        </div>

        <div style="display: flex; align-items: baseline; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.5rem; border-left: 4px solid #dc2626;">
          <h5 class="m-h5" style="margin: 0; color: #b91c1c;">H5 Label</h5>
          <div style="flex: 1; border-top: 1px dashed #d1d5db;"></div>
          <span style="font-size: 0.875rem; color: #6b7280; font-family: monospace;">text-base (--h5-font-size)</span>
        </div>

        <div style="display: flex; align-items: baseline; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.5rem; border-left: 4px solid #6b7280;">
          <h6 class="m-h6" style="margin: 0; color: #4b5563;">H6 Caption</h6>
          <div style="flex: 1; border-top: 1px dashed #d1d5db;"></div>
          <span style="font-size: 0.875rem; color: #6b7280; font-family: monospace;">text-base (--h6-font-size)</span>
        </div>
      </div>

      <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%); border-radius: 0.5rem; border: 1px solid #f59e0b;">
        <h4 style="margin: 0 0 1rem 0; color: #92400e; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.25rem;">📏</span>
          Font Size Hierarchy
        </h4>
        <div style="color: #92400e; font-size: 0.875rem; line-height: 1.6;">
          <strong>Perfect Scale:</strong> Each level creates clear visual distinction<br>
          <strong>H1 (text-3xl)</strong> → <strong>H2 (text-2xl)</strong> → <strong>H3 (text-xl)</strong> → <strong>H4 (text-lg)</strong> → <strong>H5-H6 (text-base)</strong>
        </div>
      </div>
    `;

    container.append(content);
    return container;
  },
  play: async ({ canvasElement }) => {
    const headings = canvasElement.querySelectorAll("h1, h2, h3, h4, h5, h6");

    // Test that all headings are rendered with proper classes
    for (const heading of headings) {
      const tagName = heading.tagName.toLowerCase();
      if (tagName.startsWith("h")) {
        await expect(heading).toHaveClass(`m-${tagName}`);
      }
    }

    // Test font size progression from largest to smallest
    const h1 = canvasElement.querySelector("h1") as HTMLHeadingElement;
    const h2 = canvasElement.querySelector("h2.m-h2") as HTMLHeadingElement;
    const h3 = canvasElement.querySelector("h3") as HTMLHeadingElement;
    const h4 = canvasElement.querySelector("h4") as HTMLHeadingElement;
    const h5 = canvasElement.querySelector("h5") as HTMLHeadingElement;

    await expect(h1).toBeInTheDocument();
    await expect(h2).toBeInTheDocument();
    await expect(h3).toBeInTheDocument();
    await expect(h4).toBeInTheDocument();
    await expect(h5).toBeInTheDocument();

    const h1Size = Number.parseFloat(globalThis.getComputedStyle(h1).fontSize);
    const h2Size = Number.parseFloat(globalThis.getComputedStyle(h2).fontSize);
    const h3Size = Number.parseFloat(globalThis.getComputedStyle(h3).fontSize);
    const h4Size = Number.parseFloat(globalThis.getComputedStyle(h4).fontSize);
    const h5Size = Number.parseFloat(globalThis.getComputedStyle(h5).fontSize);

    // Test proper size hierarchy: H1 > H2 > H3 > H4 >= H5
    await expect(h1Size).toBeGreaterThan(h2Size);
    await expect(h2Size).toBeGreaterThan(h3Size);
    await expect(h3Size).toBeGreaterThan(h4Size);
    await expect(h4Size).toBeGreaterThanOrEqual(h5Size);
  },
  parameters: {
    docs: {
      description: {
        story: "Visual demonstration of the complete font size hierarchy showing the progression from H1 (text-3xl) down to H6 (text-base). Each heading level represents a clear step in the typographic scale for optimal readability and visual hierarchy.",
      },
    },
  },
};
