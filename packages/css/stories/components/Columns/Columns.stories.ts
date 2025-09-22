import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface ColumnsProperties {
  leftContent: string;
  mainContent: string;
  rightContent: string;
  showLeft?: boolean;
  showRight?: boolean;
  noGap?: boolean;
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
    noGap: {
      control: { type: "boolean" },
      description: "Remove gap between columns",
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: "example description",
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

    if (args.noGap) {
      container.classList.add("--no-gap");
    }

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
    noGap: false,
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
    showRight: false,
  },
  play: async ({ canvasElement }) => {
    const columnsContainer = canvasElement.querySelector<HTMLElement>(".columns");
    const leftColumn = columnsContainer?.querySelector(".columns__left");
    const mainColumn = columnsContainer?.querySelector(".columns__main");
    const rightColumn = columnsContainer?.querySelector(".columns__right");

    if (leftColumn) {
      await expect(leftColumn).toBeInTheDocument();
    }
    if (rightColumn) {
      await expect(rightColumn).toBeInTheDocument();
    }

    await expect(mainColumn).toBeInTheDocument();
  },
};

export const ResponsiveDemo: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.width = "100%";
    container.style.border = "2px solid #e5e7eb";
    container.style.padding = "1rem";
    container.style.backgroundColor = "#f9fafb";
    container.style.borderRadius = "8px";

    const viewportInfo = document.createElement("div");
    viewportInfo.style.textAlign = "center";
    viewportInfo.style.fontSize = "0.75rem";
    viewportInfo.style.color = "#6b7280";
    viewportInfo.style.marginBottom = "1rem";
    viewportInfo.style.fontFamily = "monospace";
    viewportInfo.style.background = "#f3f4f6";
    viewportInfo.style.padding = "0.5rem";
    viewportInfo.style.borderRadius = "4px";

    // JavaScript to show current viewport width
    const updateViewportInfo = () => {
      const width = window.innerWidth;
      const isMobile = width < 576;
      viewportInfo.innerHTML = `Current viewport: ${String(width)}px ${isMobile ? "(Mobile layout)" : "(Desktop layout)"}`;
      viewportInfo.style.color = isMobile ? "red" : "green";
    };

    updateViewportInfo();
    window.addEventListener("resize", updateViewportInfo);

    const columnsContainer = document.createElement("div");
    columnsContainer.classList.add("columns");

    const leftColumn = document.createElement("div");
    leftColumn.classList.add("columns__left");
    leftColumn.innerHTML = `
      <div style="background: #dbeafe; padding: 1rem; border-radius: 4px; text-align: center; border: 2px solid #3b82f6;">
        <strong>Left Column</strong><br>
        <small style="color: #1d4ed8;">First in mobile order</small>
      </div>
    `;

    const mainColumn = document.createElement("div");
    mainColumn.classList.add("columns__main");
    mainColumn.innerHTML = `
      <div style="background: #f3f4f6; padding: 1rem; border-radius: 4px; text-align: center; border: 2px solid #6b7280;">
        <strong>Main Column</strong><br>
        <small style="color: #374151;">Second in mobile order</small>
      </div>
    `;

    const rightColumn = document.createElement("div");
    rightColumn.classList.add("columns__right");
    rightColumn.innerHTML = `
      <div style="background: #fef3c7; padding: 1rem; border-radius: 4px; text-align: center; border: 2px solid #f59e0b;">
        <strong>Right Column</strong><br>
        <small style="color: #92400e;">Third in mobile order</small>
      </div>
    `;

    columnsContainer.append(leftColumn);
    columnsContainer.append(mainColumn);
    columnsContainer.append(rightColumn);

    container.append(viewportInfo);
    container.append(columnsContainer);

    return container;
  },
  play: async ({ canvasElement }) => {
    const leftColumn = canvasElement.querySelector(".columns__left");
    const mainColumn = canvasElement.querySelector(".columns__main");
    const rightColumn = canvasElement.querySelector(".columns__right");

    await expect(leftColumn).toBeInTheDocument();
    await expect(mainColumn).toBeInTheDocument();
    await expect(rightColumn).toBeInTheDocument();

    // Test responsive container
    const container = canvasElement.querySelector(".columns");
    await expect(container).toBeInTheDocument();

    // Verify viewport info display
    const viewportInfo = canvasElement.querySelector("[style*='monospace']");
    await expect(viewportInfo).toBeInTheDocument();
  },
};
