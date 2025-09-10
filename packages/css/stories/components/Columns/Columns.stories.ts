import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";

interface ColumnsProperties {
  leftContent: string;
  mainContent: string;
  rightContent: string;
  showLeft?: boolean;
  showRight?: boolean;
}

const meta: Meta<ColumnsProperties> = {
  title: "Layouts/Columns",
  tags: ["autodocs"],
  argTypes: {
    leftContent: {
      control: { type: "text" },
      description: "Content for the left column",
    },
    mainContent: {
      control: { type: "text" },
      description: "Content for the main column",
    },
    rightContent: {
      control: { type: "text" },
      description: "Content for the right column",
    },
    showLeft: {
      control: { type: "boolean" },
      description: "Show left column",
    },
    showRight: {
      control: { type: "boolean" },
      description: "Show right column",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The Columns component provides a flexible and intelligent 3-column grid layout with responsive behavior.

## Features

- **Adaptive Layout**: Uses CSS \`:has()\` selector to automatically adjust grid template areas based on which columns are present
- **Desktop**: Displays up to 3 columns side by side with automatic layout optimization
- **Mobile** (< 576px): Stacks columns vertically in order: left, main, right
- **Customizable**: Column widths and gaps can be adjusted via CSS variables
- **Semantic**: Uses CSS Grid areas for clear content organization

## Layout Variations

- **3 columns**: \`"left main right"\` when all columns are present
- **2 columns (main + right)**: \`"main right"\` when left column is missing
- **2 columns (left + main)**: \`"left main"\` when right column is missing
- **1 column**: \`"main"\` when only main column is present

Perfect for layouts like sidebar + main content + aside, product pages, documentation, or any multi-column content arrangement that needs to adapt automatically.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ColumnsProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    container.classList.add("columns");

    // Create columns
    if (args.showLeft) {
      const leftColumn = document.createElement("div");
      leftColumn.classList.add("columns__left");
      leftColumn.innerHTML = `<div style="background: #f0f9ff; padding: 1rem; border-radius: 4px; border-left: 4px solid #0284c7;">${args.leftContent}</div>`;
      container.append(leftColumn);
    }

    const mainColumn = document.createElement("div");
    mainColumn.classList.add("columns__main");
    mainColumn.innerHTML = `<div style="background: #f8fafc; padding: 1rem; border-radius: 4px; border: 1px solid #e2e8f0;">${args.mainContent}</div>`;
    container.append(mainColumn);

    if (args.showRight) {
      const rightColumn = document.createElement("div");
      rightColumn.classList.add("columns__right");
      rightColumn.innerHTML = `<div style="background: #fefce8; padding: 1rem; border-radius: 4px; border-right: 4px solid #ca8a04;">${args.rightContent}</div>`;
      container.append(rightColumn);
    }

    return container;
  },
  args: {
    leftContent: "Left Sidebar Content",
    mainContent: "Main Content Area - This is where the primary content goes. It can contain articles, forms, or any main page content.",
    rightContent: "Right Sidebar Content",
    showLeft: true,
    showRight: true,
  },
  play: async ({ canvasElement }) => {
    const columnsContainer = canvasElement.querySelector<HTMLElement>(".columns");

    await expect(columnsContainer).toHaveClass("columns");

    const leftColumn = columnsContainer?.querySelector(".columns__left");
    const mainColumn = columnsContainer?.querySelector(".columns__main");
    const rightColumn = columnsContainer?.querySelector(".columns__right");

    await expect(mainColumn).toBeInTheDocument();

    if (leftColumn) {
      await expect(leftColumn).toBeInTheDocument();
    }

    if (rightColumn) {
      await expect(rightColumn).toBeInTheDocument();
    }
  },
};

export const TwoColumnsMainSidebar: Story = {
  render: (args) => {
    const container = document.createElement("div");
    container.classList.add("columns");

    const leftColumn = document.createElement("div");
    leftColumn.classList.add("columns__left");
    leftColumn.innerHTML = `<div style="background: #f0f9ff; padding: 1rem; border-radius: 4px; border-left: 4px solid #0284c7;">${args.leftContent}</div>`;
    container.append(leftColumn);

    const mainColumn = document.createElement("div");
    mainColumn.classList.add("columns__main");
    mainColumn.innerHTML = `<div style="background: #f8fafc; padding: 1rem; border-radius: 4px; border: 1px solid #e2e8f0;">${args.mainContent}</div>`;
    container.append(mainColumn);

    return container;
  },
  args: {
    leftContent: "Left Sidebar Content",
    mainContent: "Main Content Area - This is where the primary content goes. It can contain articles, forms, or any main page content.",
  },
  parameters: {
    docs: {
      description: {
        story: "A common 2-column layout with main content and a right sidebar. Perfect for blog posts, articles, or documentation with supplementary content. Uses CSS :has() selector to automatically adjust grid template areas.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const mainColumn = canvas.getByText(/Main Content Area/);
    const sidebar = canvas.getByText(/Left Sidebar Content/);

    await expect(mainColumn).toBeInTheDocument();
    await expect(sidebar).toBeInTheDocument();
  },
};
