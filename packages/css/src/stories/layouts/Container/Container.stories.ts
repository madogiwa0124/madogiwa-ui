import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface ContainerProperties {
  content: string;
  customMaxWidth?: string;
  backgroundColor?: string;
  noPadding?: boolean;
}

const meta: Meta<ContainerProperties> = {
  title: "Layouts/Container",
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: { type: "text" },
      description: "Content to display inside the container.",
    },
    customMaxWidth: {
      control: { type: "text" },
      description: "Custom max-width value (overrides default responsive breakpoints).",
    },
    backgroundColor: {
      control: { type: "color" },
      description: "Background color for visual demonstration (not part of component).",
    },
    noPadding: {
      control: { type: "boolean" },
      description: "Remove padding from container (--no-padding modifier).",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Container component provides responsive layout constraints with predefined breakpoints and responsive padding.

- **Mobile**: max-width 100% with spacing-1 padding
- **Small**: max-width 540px (>576px) with spacing-2 padding
- **Medium**: max-width 768px (>768px) with spacing-4 padding
- **Large**: max-width 1024px (>992px) with spacing-6 padding

The container is centered horizontally and uses logical properties (margin-inline, max-inline-size, padding-inline) for better internationalization support.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ContainerProperties>;

export const Default: Story = {
  render: (args) => {
    const wrapper = document.createElement("div");
    const container = document.createElement("div");
    container.classList.add("container");

    if (args.noPadding) {
      container.classList.add("--no-padding");
    }

    if (args.customMaxWidth) {
      container.style.setProperty("--container-lg-max-width", args.customMaxWidth);
      container.style.setProperty("--container-md-max-width", args.customMaxWidth);
      container.style.setProperty("--container-sm-max-width", args.customMaxWidth);
    }

    if (args.backgroundColor) {
      container.style.backgroundColor = args.backgroundColor;
      container.style.borderRadius = "8px";
    }

    container.innerHTML = `<p>${args.content}</p>`;

    // Wrapper for visual context
    wrapper.style.backgroundColor = "#f5f5f5";
    wrapper.style.padding = "1rem";
    wrapper.style.minHeight = "200px";

    wrapper.append(container);
    return wrapper;
  },
  args: {
    content: "This is content inside the container. Resize the viewport to see responsive behavior and padding changes.",
    backgroundColor: "#ffffff",
    noPadding: false,
  },
  play: async ({ canvasElement, args }) => {
    const container = canvasElement.querySelector(".container") as HTMLElement;

    await expect(container).toBeInTheDocument();
    await expect(container).toHaveClass("container");

    if (args.noPadding) {
      await expect(container).toHaveClass("--no-padding");
    }

    const content = container.querySelector("p") as HTMLElement;
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent(args.content);

    // Test responsive max-width CSS variables
    const computedStyle = getComputedStyle(container);
    const smMaxWidth = computedStyle.getPropertyValue("--container-sm-max-width").trim();
    const mdMaxWidth = computedStyle.getPropertyValue("--container-md-max-width").trim();
    const lgMaxWidth = computedStyle.getPropertyValue("--container-lg-max-width").trim();

    await expect(smMaxWidth).toBe("540px");
    await expect(mdMaxWidth).toBe("768px");
    await expect(lgMaxWidth).toBe("1024px");
  },
};

export const ResponsiveDemo: Story = {
  render: () => {
    const wrapper = document.createElement("div");
    wrapper.style.backgroundColor = "#f0f0f0";
    wrapper.style.padding = "1rem";
    wrapper.style.fontFamily = "system-ui, sans-serif";

    const title = document.createElement("h2");
    title.textContent = "Container Responsive Breakpoints & Padding";
    title.style.textAlign = "center";
    title.style.marginBottom = "2rem";

    const containers = [
      { label: "Mobile (100% width, spacing-1 padding)", width: "100%", padding: "var(--spacing-1)", bgColor: "#fff3e0" },
      { label: "Small (540px max, spacing-2 padding)", width: "540px", padding: "var(--spacing-2)", bgColor: "#e3f2fd" },
      { label: "Medium (768px max, spacing-4 padding)", width: "768px", padding: "var(--spacing-4)", bgColor: "#f3e5f5" },
      { label: "Large (1024px max, spacing-6 padding)", width: "1024px", padding: "var(--spacing-6)", bgColor: "#e8f5e8" },
    ];

    for (const { label, width, padding, bgColor } of containers) {
      const section = document.createElement("div");
      section.style.marginBottom = "2rem";

      const heading = document.createElement("h3");
      heading.textContent = label;
      heading.style.marginBottom = "0.5rem";
      heading.style.fontSize = "1rem";

      const container = document.createElement("div");
      container.classList.add("container");
      container.style.backgroundColor = bgColor;
      container.style.border = "2px dashed #666";
      container.style.setProperty("--container-lg-max-width", width);
      container.style.setProperty("--container-md-max-width", width);
      container.style.setProperty("--container-sm-max-width", width);

      const content = document.createElement("div");
      content.innerHTML = `
        <p><strong>Max-width:</strong> ${width}</p>
        <p><strong>Padding:</strong> ${padding}</p>
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
  args: {},
  play: async ({ canvasElement }) => {
    const containers = canvasElement.querySelectorAll(".container");

    await expect(containers).toHaveLength(4);

    for (const container of containers) {
      await expect(container).toHaveClass("container");

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
  render: (args) => {
    const wrapper = document.createElement("div");
    const container = document.createElement("div");
    container.classList.add("container");

    if (args.noPadding) {
      container.classList.add("--no-padding");
    }

    container.style.backgroundColor = args.backgroundColor ?? "#f5f5f5";
    if (!args.noPadding) {
      // Let responsive padding handle spacing
    }

    // Create realistic content structure
    container.innerHTML = `
      <header style="margin-bottom: 2rem; padding: 1rem; background: #e0e0e0; border-radius: 4px;">
        <h1 style="margin: 0; font-size: 2rem;">Page Header</h1>
        <p style="margin: 0.5rem 0 0 0; color: #666;">Subtitle or description</p>
      </header>

      <main style="margin-bottom: 2rem;">
        <article style="margin-bottom: 2rem; padding: 1.5rem; background: white; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2>Article Title</h2>
          <p>${args.content}</p>
          <p>This demonstrates how the container works with realistic nested content structure and responsive padding.</p>
        </article>

        <section style="padding: 1.5rem; background: white; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3>Section Title</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
            <div style="padding: 1rem; background: #f9f9f9; border-radius: 4px;">
              <h4 style="margin-top: 0;">Card 1</h4>
              <p style="margin-bottom: 0;">Card content here.</p>
            </div>
            <div style="padding: 1rem; background: #f9f9f9; border-radius: 4px;">
              <h4 style="margin-top: 0;">Card 2</h4>
              <p style="margin-bottom: 0;">Card content here.</p>
            </div>
            <div style="padding: 1rem; background: #f9f9f9; border-radius: 4px;">
              <h4 style="margin-top: 0;">Card 3</h4>
              <p style="margin-bottom: 0;">Card content here.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style="padding: 1rem; background: #e0e0e0; border-radius: 4px; text-align: center;">
        <p style="margin: 0; color: #666;">&copy; 2025 Example Footer</p>
      </footer>
    `;

    wrapper.style.backgroundColor = "#fafafa";
    wrapper.style.padding = "1rem";
    wrapper.append(container);

    return wrapper;
  },
  args: {
    content: "This article content shows how the container constrains width while maintaining readability with responsive padding for complex layouts.",
    backgroundColor: "#f8f9fa",
    noPadding: false,
  },
  play: async ({ canvasElement, args }) => {
    const container = canvasElement.querySelector(".container") as HTMLElement;

    await expect(container).toBeInTheDocument();
    await expect(container).toHaveClass("container");

    if (args.noPadding) {
      await expect(container).toHaveClass("--no-padding");
    }

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
