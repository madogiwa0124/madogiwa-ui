import type { Meta, StoryObj } from "@storybook/html";
import {
  type Property,
  createColorElement,
  createCornerElement,
  createShadowElement,
  createSpacingElement,
  createTypographyElement,
  customProperties,
  designTokens,
} from "./Variables";
import { expect } from "storybook/test";

const meta: Meta = {
  title: "Foundation/Variables",
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          "example description",
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // NOTE: This rule is disabled because the color contrast cannot be guaranteed in storybook.
            // https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=RuleDescription
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const PrimitiveColor: Story = {
  render: (_args) => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement);
    for (const property of tokens["primitiveColor"] ?? []) {
      createAndAppendElements(property, createColorElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const container = canvas.querySelector("div");

    await expect(container).not.toBeNull();
  },
};

export const SemanticColor: Story = {
  render: (_args) => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement);
    for (const property of tokens["semanticColor"] ?? []) {
      createAndAppendElements(property, createColorElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const container = canvas.querySelector("div");

    await expect(container).not.toBeNull();
  },
};

export const Spacing: Story = {
  render: (_args) => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement);
    for (const property of tokens["spacing"] ?? []) {
      createAndAppendElements(property, createSpacingElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const container = canvas.querySelector("div");

    await expect(container).not.toBeNull();
  },
};

export const Typography: Story = {
  render: (_args) => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement);
    for (const property of tokens["typography"] ?? []) {
      createAndAppendElements(property, createTypographyElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const container = canvas.querySelector("div");

    await expect(container).not.toBeNull();
  },
};

export const Shadow: Story = {
  render: (_args) => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement);
    for (const property of tokens["shadow"] ?? []) {
      createAndAppendElements(property, createShadowElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const container = canvas.querySelector("div");

    await expect(container).not.toBeNull();
    // If shadow tokens exist, verify that child elements are present
  },
};

export const Corner: Story = {
  render: (_args) => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement);
    for (const property of tokens["corner"] ?? []) {
      createAndAppendElements(property, createCornerElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const container = canvas.querySelector("div");

    await expect(container).not.toBeNull();
  },
};

export const Breakpoint: Story = {
  render: (_args) => {
    // Breakpoint definitions (single source of truth)
    const breakpoints = {
      "2xl": { min: 96, minPx: 1536, description: "Large desktop monitors" },
      "xl": { min: 80, minPx: 1280, description: "Desktop monitors" },
      "lg": { min: 64, minPx: 1024, description: "Laptops" },
      "md": { min: 48, minPx: 768, description: "Tablets" },
      "sm": { min: 40, minPx: 640, description: "Mobile landscape" },
      "max-2xl": { max: 96, maxPx: 1536, description: "Below large desktop monitors" },
      "max-xl": { max: 80, maxPx: 1280, description: "Below desktop monitors" },
      "max-lg": { max: 64, maxPx: 1024, description: "Below laptops" },
      "max-md": { max: 48, maxPx: 768, description: "Below tablets" },
      "max-sm": { max: 40, maxPx: 640, description: "Below mobile landscape" },
    };

    const container = document.createElement("div");

    // Title
    const title = document.createElement("h1");
    title.textContent = "Media Breakpoints";
    title.classList.add("h1");
    container.append(title);

    // Current viewport indicator
    const currentIndicator = document.createElement("div");
    currentIndicator.style.background = "#f8fafc";
    currentIndicator.style.border = "1px solid #e2e8f0";
    currentIndicator.style.padding = "1rem";
    currentIndicator.style.borderRadius = "8px";
    currentIndicator.style.marginBottom = "2rem";
    currentIndicator.style.textAlign = "center";

    const updateCurrentBreakpoint = () => {
      const width = window.innerWidth;
      let current = "< sm";

      if (width <= breakpoints["2xl"].minPx) {
        for (const [name, bp] of Object.entries(breakpoints)) {
          if ("minPx" in bp && width >= bp.minPx) {
            current = name;
            break;
          }
        }
      } else {
        current = `> 2xl`;
      }

      currentIndicator.innerHTML = `Current: <strong>${String(width)}px (${current})</strong>`;
    };

    updateCurrentBreakpoint();
    window.addEventListener("resize", updateCurrentBreakpoint);
    container.append(currentIndicator);

    // Breakpoints table
    const table = document.createElement("table");
    table.style.width = "100%";

    // Table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    for (const text of ["Name", "Range", "Description", "Custom Media"]) {
      const th = document.createElement("th");
      th.textContent = text;
      th.style.borderBottom = "2px solid #e2e8f0";
      th.style.fontWeight = "600";
      headerRow.append(th);
    }
    thead.append(headerRow);
    table.append(thead);

    // Table body
    const tbody = document.createElement("tbody");
    for (const [name, bp] of Object.entries(breakpoints)) {
      const row = document.createElement("tr");
      row.style.borderBottom = "1px solid #f1f5f9";

      // Name
      const nameCell = document.createElement("td");
      nameCell.textContent = name;
      nameCell.style.padding = "0.75rem";
      nameCell.style.fontWeight = "600";
      row.append(nameCell);

      // Range
      const rangeCell = document.createElement("td");
      if ("min" in bp) {
        rangeCell.textContent = `≥ ${String(bp.min)}rem (${String(bp.minPx)}px)`;
      } else if ("max" in bp) {
        rangeCell.textContent = `< ${String(bp.max)}rem (${String(bp.maxPx)}px)`;
      }
      rangeCell.style.padding = "0.75rem";
      row.append(rangeCell);

      // Description
      const descCell = document.createElement("td");
      descCell.textContent = bp.description;
      descCell.style.padding = "0.75rem";
      descCell.style.color = "#64748b";
      row.append(descCell);

      // Custom Media
      const mediaCell = document.createElement("td");
      const code = document.createElement("code");
      code.textContent = `--media-breakpoint-${name}`;
      code.style.background = "#f1f5f9";
      code.style.padding = "0.25rem 0.5rem";
      code.style.borderRadius = "4px";
      mediaCell.style.padding = "0.75rem";
      mediaCell.append(code);
      row.append(mediaCell);

      tbody.append(row);
    }
    table.append(tbody);
    container.append(table);

    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const container = canvas.querySelector("div");
    const title = canvas.querySelector("h1");
    const table = canvas.querySelector("table");

    await expect(container).not.toBeNull();
    await expect(title).toBeInTheDocument();
    await expect(table).toBeInTheDocument();

    const rows = table?.querySelectorAll("tbody tr");
    await expect(rows?.length).toBe(10);
  },
};

const getDesignTokens = (element: HTMLElement): Record<string, Property[]> => {
  const properties = customProperties(element);
  const tokens = designTokens(properties);
  return tokens;
};

const createAndAppendElements = (
  property: Property,
  builder: (property: Property) => HTMLElement,
  appendTo: HTMLElement,
) => {
  const el = builder(property);
  appendTo.append(el);
};
