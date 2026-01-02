import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface ContainerProperties {
  content: string;
  padding?: boolean;
  noCentering?: boolean;
}

const meta: Meta<ContainerProperties> = {
  title: "Layouts/Container",
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: { type: "text" },
      description: "The content for the component",
    },
    padding: {
      control: { type: "boolean" },
      description: "The responsive padding modifier for the component",
    },
    noCentering: {
      control: { type: "boolean" },
      description: "The centering disable modifier for the component",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Container component provides responsive layout constraints with predefined breakpoints and automatic centering.

### Usage

Use Container to constrain content width and center it horizontally. Perfect for main content areas, article layouts, and ensuring optimal reading widths across different screen sizes.

### Example code

\`\`\`html
<!-- Basic container -->
<div class="m-container">
  <p>Your content here</p>
</div>

<!-- Container with responsive padding -->
<div class="m-container --padding">
  <article>Article content with automatic padding</article>
</div>

<!-- Container without centering -->
<div class="m-container --no-centering">
  <nav>Navigation content aligned to start</nav>
</div>
\`\`\`

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-container | .--padding | Enables responsive padding that increases with screen size |
| .m-container | .--no-centering | Disables horizontal centering (margin-inline: 0) |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --container-2xl-max-width | var(--media-2xl-max-width) | Maximum width for 2XL breakpoint |
| --container-xl-max-width | var(--media-xl-max-width) | Maximum width for XL breakpoint |
| --container-lg-max-width | var(--media-lg-max-width) | Maximum width for large breakpoint |
| --container-md-max-width | var(--media-md-max-width) | Maximum width for medium breakpoint |
| --container-sm-max-width | var(--media-sm-max-width) | Maximum width for small breakpoint |
| --container-default-padding | 0 var(--spacing-2) | Default padding for mobile |
| --container-sm-padding | 0 var(--spacing-3) | Padding for small breakpoint |
| --container-md-padding | 0 var(--spacing-4) | Padding for medium breakpoint |
| --container-lg-padding | 0 var(--spacing-5) | Padding for large breakpoint |
| --container-xl-padding | 0 var(--spacing-6) | Padding for XL breakpoint |
| --container-2xl-padding | 0 var(--spacing-7) | Padding for 2XL breakpoint |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Container uses logical properties (margin-inline) for better internationalization
- Responsive breakpoints are managed through CSS custom media queries
- Padding modifier provides different spacing at each breakpoint
- Consider content hierarchy when nesting containers
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ContainerProperties>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic container with centered layout and responsive max-width constraints.",
      },
    },
  },
  render: (args) => {
    const wrapper = document.createElement("div");
    const container = document.createElement("div");
    container.classList.add("m-container");

    if (args.padding) container.classList.add("--padding");
    if (args.noCentering) container.classList.add("--no-centering");

    container.style.backgroundColor = "var(--color-bg-default)";
    container.innerHTML = `<p>${args.content}</p>`;

    // Wrapper for visual context
    wrapper.style.backgroundColor = "var(--color-bg-subtle)";
    wrapper.style.padding = "1rem";
    wrapper.style.minHeight = "200px";

    wrapper.append(container);
    return wrapper;
  },
  args: {
    content: "This is content inside the container. Resize the viewport to see responsive behavior and padding changes.",
    padding: false,
    noCentering: false,
  },
  play: async ({ canvasElement, args }) => {
    const container = canvasElement.querySelector(".m-container") as HTMLElement;

    await expect(container).toBeInTheDocument();
    await expect(container).toHaveClass("m-container");

    const content = container.querySelector("p") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(args.content);

    // Test responsive max-width CSS variables
    const computedStyle = getComputedStyle(container);
    const smMaxWidth = computedStyle.getPropertyValue("--container-sm-max-width").trim();
    const mdMaxWidth = computedStyle.getPropertyValue("--container-md-max-width").trim();
    const lgMaxWidth = computedStyle.getPropertyValue("--container-lg-max-width").trim();
    const xlMaxWidth = computedStyle.getPropertyValue("--container-xl-max-width").trim();
    const xxlMaxWidth = computedStyle.getPropertyValue("--container-2xl-max-width").trim();

    await expect(smMaxWidth).toBe("40rem");
    await expect(mdMaxWidth).toBe("48rem");
    await expect(lgMaxWidth).toBe("64rem");
    await expect(xlMaxWidth).toBe("80rem");
    await expect(xxlMaxWidth).toBe("96rem");
  },
};

export const ResponsiveDemo: Story = {
  parameters: {
    docs: {
      description: {
        story: "Demonstrates container behavior across different breakpoints with visual indicators for max-width values.",
      },
    },
  },
  render: (args) => {
    const wrapper = document.createElement("div");
    wrapper.style.backgroundColor = "var(--color-bg-subtle)";
    wrapper.style.padding = "1rem";
    wrapper.style.fontFamily = "system-ui, sans-serif";

    const title = document.createElement("h2");
    title.textContent = "Container Responsive Breakpoints";
    title.style.textAlign = "center";
    title.style.marginBottom = "2rem";

    const containers = [
      { label: "Small", width: "40rem", bgColor: "var(--color-bg-subtle)", padding: "0 var(--spacing-2)" },
      { label: "Medium", width: "48rem", bgColor: "var(--color-bg-subtle)", padding: "0 var(--spacing-3)" },
      { label: "Large", width: "64rem", bgColor: "var(--color-bg-subtle)", padding: "0 var(--spacing-4)" },
      { label: "X Large", width: "80rem", bgColor: "var(--color-bg-subtle)", padding: "0 var(--spacing-5)" },
      { label: "2X Large", width: "96rem", bgColor: "var(--color-bg-subtle)", padding: "0 var(--spacing-6)" },
    ];

    for (const { label, width, bgColor, padding } of containers) {
      const section = document.createElement("div");
      section.style.marginBottom = "2rem";

      const heading = document.createElement("h3");
      heading.textContent = label;
      heading.style.marginBottom = "0.5rem";
      heading.style.fontSize = "1rem";

      const container = document.createElement("div");
      container.classList.add("m-container");
      container.style.backgroundColor = bgColor;
      container.style.border = "2px dashed var(--color-text-muted)";
      container.style.setProperty("--container-2xl-max-width", width);
      container.style.setProperty("--container-xl-max-width", width);
      container.style.setProperty("--container-lg-max-width", width);
      container.style.setProperty("--container-md-max-width", width);
      container.style.setProperty("--container-sm-max-width", width);

      container.style.setProperty("--container-default-padding", padding);
      container.style.setProperty("--container-sm-padding", padding);
      container.style.setProperty("--container-md-padding", padding);
      container.style.setProperty("--container-lg-padding", padding);
      container.style.setProperty("--container-xl-padding", padding);
      container.style.setProperty("--container-2xl-padding", padding);
      if (args.padding) container.classList.add("--padding");
      if (args.noCentering) container.classList.add("--no-centering");

      const content = document.createElement("div");
      content.innerHTML = `
        <p><strong>Max-width:</strong> ${width}</p>
        <p>This container demonstrates responsive behavior with both width and padding changes.</p>
        <p><code>margin-inline: auto</code> centers the container horizontally.</p>
      `;

      container.append(content);
      section.append(heading, container);
      wrapper.append(section);
    }

    wrapper.prepend(title);
    return wrapper;
  },
  args: {
    padding: false,
    noCentering: false,
  },
  play: async ({ canvasElement }) => {
    const containers = canvasElement.querySelectorAll(".m-container");

    await expect(containers).toHaveLength(5);

    for (const container of containers) {
      await expect(container).toHaveClass("m-container");

      const computedStyle = getComputedStyle(container as HTMLElement);
      const marginInlineStart = computedStyle.marginInlineStart;
      const marginInlineEnd = computedStyle.marginInlineEnd;

      // Test that containers are centered using logical properties
      await expect(marginInlineStart).not.toBe("auto");
      await expect(marginInlineEnd).not.toBe("auto");
    }
  },
};

export const NestedContent: Story = {
  parameters: {
    docs: {
      description: {
        story: "Container with realistic nested content structure showing how it works with complex layouts including headers, articles, and grid systems.",
      },
    },
  },
  render: (args) => {
    const wrapper = document.createElement("div");
    const container = document.createElement("div");
    container.classList.add("m-container");
    if (args.padding) container.classList.add("--padding");
    if (args.noCentering) container.classList.add("--no-centering");

    container.style.backgroundColor = "var(--color-bg-subtle)";

    // Create realistic content structure
    container.innerHTML = `
      <header style="margin-bottom: 2rem; padding: 1rem; background: var(--color-bg-muted); border-radius: 4px;">
        <h1 style="margin: 0; font-size: 2rem;">Page Header</h1>
        <p style="margin: 0.5rem 0 0 0; color: var(--color-text-default);">Subtitle or description</p>
      </header>

      <main style="margin-bottom: 2rem;">
        <article style="margin-bottom: 2rem; padding: 1.5rem; background: var(--color-bg-default); border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2>Article Title</h2>
          <p>${args.content}</p>
          <p>This demonstrates how the container works with realistic nested content structure and responsive padding.</p>
        </article>

        <section style="padding: 1.5rem; background: var(--color-bg-default); border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3>Section Title</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
            <div style="padding: 1rem; background: var(--color-bg-muted); border-radius: 4px;">
              <h4 style="margin-top: 0;">Card 1</h4>
              <p style="margin-bottom: 0;">Card content here.</p>
            </div>
            <div style="padding: 1rem; background: var(--color-bg-muted); border-radius: 4px;">
              <h4 style="margin-top: 0;">Card 2</h4>
              <p style="margin-bottom: 0;">Card content here.</p>
            </div>
            <div style="padding: 1rem; background: var(--color-bg-muted); border-radius: 4px;">
              <h4 style="margin-top: 0;">Card 3</h4>
              <p style="margin-bottom: 0;">Card content here.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style="padding: 1rem; background: var(--color-bg-muted); border-radius: 4px; text-align: center;">
        <p style="margin: 0; color: var(--color-text-default);">&copy; 2025 Example Footer</p>
      </footer>
    `;

    wrapper.style.backgroundColor = "var(--color-bg-default)";
    wrapper.style.padding = "1rem";
    wrapper.append(container);

    return wrapper;
  },
  args: {
    content: "This article content shows how the container constrains width while maintaining readability with responsive padding for complex layouts.",
    padding: false,
    noCentering: false,
  },
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector(".m-container") as HTMLElement;

    await expect(container).toBeInTheDocument();
    await expect(container).toHaveClass("m-container");

    // Test that nested elements exist
    const header = container.querySelector("header") as HTMLElement;
    const main = container.querySelector("main") as HTMLElement;
    const footer = container.querySelector("footer") as HTMLElement;

    await expect(header).toBeInTheDocument();
    await expect(main).toBeInTheDocument();
    await expect(footer).toBeInTheDocument();

    // Test grid layout works within container
    const cardGrid = container.querySelector("[style*='grid-template-columns']") as HTMLElement;
    await expect(cardGrid).toBeInTheDocument();

    const cards = cardGrid.querySelectorAll("div");
    await expect(cards.length).toBeGreaterThanOrEqual(3);

    // Test logical properties
    const computedStyle = getComputedStyle(container);
    await expect(computedStyle.marginInlineStart).not.toBe("auto");
    await expect(computedStyle.marginInlineEnd).not.toBe("auto");
  },
};
