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
      description: "Content to display inside the container.",
    },
    padding: {
      control: { type: "boolean" },
      description: "Enable responsive padding inside the container.",
      defaultValue: false,
    },
    noCentering: {
      control: { type: "boolean" },
      description: "Disable horizontal centering of the container.",
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Container component provides responsive layout constraints with predefined breakpoints.

- **Mobile**: max-width 100%
- **Small**: max-width 576px (>576px)
- **Medium**: max-width 768px (>768px)
- **Large**: max-width 1024px (>1024px)
- **X Large**: max-width 1280px (>1280px)
- **2X Large**: max-width 1536px (>1536px)

The container is centered horizontally and uses logical properties (margin-inline, max-inline-size) for better internationalization support.
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

    if (args.padding) container.classList.add("--padding");
    if (args.noCentering) container.classList.add("--no-centering");

    container.style.backgroundColor = "#ffffff";
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
    padding: false,
    noCentering: false,
  },
  play: async ({ canvasElement, args }) => {
    const container = canvasElement.querySelector(".container") as HTMLElement;

    await expect(container).toBeInTheDocument();
    await expect(container).toHaveClass("container");

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

    await expect(smMaxWidth).toBe("640px");
    await expect(mdMaxWidth).toBe("768px");
    await expect(lgMaxWidth).toBe("1024px");
    await expect(xlMaxWidth).toBe("1280px");
    await expect(xxlMaxWidth).toBe("1536px");
  },
};

export const ResponsiveDemo: Story = {
  render: (args) => {
    const wrapper = document.createElement("div");
    wrapper.style.backgroundColor = "#f0f0f0";
    wrapper.style.padding = "1rem";
    wrapper.style.fontFamily = "system-ui, sans-serif";

    const title = document.createElement("h2");
    title.textContent = "Container Responsive Breakpoints";
    title.style.textAlign = "center";
    title.style.marginBottom = "2rem";

    const containers = [
      { label: "Small", width: "640px", bgColor: "#e3f2fd", padding: "0 var(--spacing-2)" },
      { label: "Medium", width: "768px", bgColor: "#f3e5f5", padding: "0 var(--spacing-3)" },
      { label: "Large", width: "1024px", bgColor: "#e8f5e8", padding: "0 var(--spacing-4)" },
      { label: "X Large", width: "1280px", bgColor: "#fff3e0", padding: "0 var(--spacing-5)" },
      { label: "2X Large", width: "1536px", bgColor: "#fce4ec", padding: "0 var(--spacing-6)" },
    ];

    for (const { label, width, bgColor, padding } of containers) {
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
    const containers = canvasElement.querySelectorAll(".container");

    await expect(containers).toHaveLength(5);

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
    if (args.padding) container.classList.add("--padding");
    if (args.noCentering) container.classList.add("--no-centering");

    container.style.backgroundColor = "#f5f5f5";

    // Create realistic content structure
    container.innerHTML = `
      <header style="margin-bottom: 2rem; padding: 1rem; background: #e0e0e0; border-radius: 4px;">
        <h1 style="margin: 0; font-size: 2rem;">Page Header</h1>
        <p style="margin: 0.5rem 0 0 0; color: #333;">Subtitle or description</p>
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
            <div style="padding: 1rem; background: #c9c9c9; border-radius: 4px;">
              <h4 style="margin-top: 0;">Card 1</h4>
              <p style="margin-bottom: 0;">Card content here.</p>
            </div>
            <div style="padding: 1rem; background: #c9c9c9; border-radius: 4px;">
              <h4 style="margin-top: 0;">Card 2</h4>
              <p style="margin-bottom: 0;">Card content here.</p>
            </div>
            <div style="padding: 1rem; background: #c9c9c9; border-radius: 4px;">
              <h4 style="margin-top: 0;">Card 3</h4>
              <p style="margin-bottom: 0;">Card content here.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style="padding: 1rem; background: #e0e0e0; border-radius: 4px; text-align: center;">
        <p style="margin: 0; color: #333;">&copy; 2025 Example Footer</p>
      </footer>
    `;

    wrapper.style.backgroundColor = "#fafafa";
    wrapper.style.padding = "1rem";
    wrapper.append(container);

    return wrapper;
  },
  args: {
    content: "This article content shows how the container constrains width while maintaining readability with responsive padding for complex layouts.",
    padding: false,
    noCentering: false,
  },
  play: async ({ canvasElement, args }) => {
    const container = canvasElement.querySelector(".container") as HTMLElement;

    await expect(container).toBeInTheDocument();
    await expect(container).toHaveClass("container");

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
