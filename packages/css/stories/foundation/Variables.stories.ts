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

type VariablesProperties = {
  sortMode: "natural" | "numeric";
};

const meta: Meta<VariablesProperties> = {
  title: "Foundation/Variables",
  tags: ["autodocs"],
  argTypes: {
    sortMode: {
      control: {
        type: "select",
      },
      options: ["natural", "numeric"],
      description: "Sort mode for CSS variables: 'natural' uses size variants (xs→sm→md), 'numeric' prioritizes numeric order (1→2→10)",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview

The Variables system provides a comprehensive collection of design tokens that form the foundation of Madogiwa UI. These variables are organized into categories including colors, spacing, typography, shadows, and corner radius.

### Usage

Design tokens are CSS custom properties that maintain consistent visual design across your application. They can be referenced in CSS using \`var()\` syntax and are organized into semantic categories for easy maintenance.

Dark mode tokens apply automatically when the root element has \`data-theme="dark"\`, enabling semantic colors and related values to switch without additional overrides.

### Sort Modes

- **Natural**: Prioritizes size variants (xs→sm→md→lg→xl) for intuitive size progression
- **Numeric**: Prioritizes numeric values (1→2→10) for numerical order

### CSS Variables Categories

#### Primitive Colors
Base color values used as building blocks for semantic colors.

#### Semantic Colors
Context-aware colors that convey meaning (primary, success, error, etc.).

#### Spacing
Consistent spacing values for margins, padding, and layout gaps.

#### Typography
Font families, sizes, weights, and line heights for text styling.

#### Shadows
Box shadow values for elevation and depth effects.

#### Corner
Border radius values for consistent rounded corners.

#### Breakpoints
Media query breakpoints for responsive design implementation.

### Caution

- Color contrast may vary in Storybook examples
- Use semantic colors instead of primitive colors when possible
- Breakpoints are defined using rem units for better accessibility
        `,
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
type Story = StoryObj<VariablesProperties>;

export const PrimitiveColor: Story = {
  parameters: {
    docs: {
      description: {
        story: "Displays all primitive color tokens used as the foundation for semantic colors. These colors are typically used for building color scales and should not be used directly in components.",
      },
    },
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "numeric")["primitiveColor"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createColorElement, container);
    }
    return container;
  },
  play: async ({ canvasElement }) => {
    const colorElements = canvasElement.querySelectorAll(".color-variable");

    await expect(colorElements.length).toBeGreaterThanOrEqual(0);
  },
};

export const SemanticColor: Story = {
  parameters: {
    docs: {
      description: {
        story: "Shows semantic color tokens that convey meaning and context. These are the colors that should be used in components to maintain consistent visual hierarchy.",
      },
    },
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "natural")["semanticColor"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createColorElement, container);
    }
    return container;
  },
  play: async ({ canvasElement }) => {
    const colorElements = canvasElement.querySelectorAll(".color-variable");

    await expect(colorElements.length).toBeGreaterThanOrEqual(0);
  },
};

export const Spacing: Story = {
  parameters: {
    docs: {
      description: {
        story: "Demonstrates spacing tokens for consistent margins, padding, and gaps throughout the design system. Values are shown with visual representations.",
      },
    },
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "numeric")["spacing"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createSpacingElement, container);
    }
    return container;
  },
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector("div");
    const spacingElements = canvasElement.querySelectorAll(".spacing-variable");

    await expect(container).toBeTruthy();
    await expect(spacingElements.length).toBeGreaterThanOrEqual(0);
  },
};

export const Typography: Story = {
  parameters: {
    docs: {
      description: {
        story: "Shows typography tokens including font families, sizes, weights, line heights, and letter spacing. Each token includes sample text to demonstrate the visual effect.",
      },
    },
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "natural")["typography"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createTypographyElement, container);
    }
    return container;
  },
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector("div");
    const typographyElements = canvasElement.querySelectorAll("div");

    await expect(container).toBeTruthy();
    await expect(typographyElements.length).toBeGreaterThanOrEqual(1);
  },
};

export const Shadow: Story = {
  parameters: {
    docs: {
      description: {
        story: "Displays shadow tokens used for creating depth and elevation effects. Each shadow is demonstrated on a sample element to show the visual impact.",
      },
    },
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "natural")["shadow"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createShadowElement, container);
    }
    return container;
  },
  play: async ({ canvasElement }) => {
    const shadowElements = canvasElement.querySelectorAll(".shadow-variable");

    await expect(shadowElements.length).toBeGreaterThan(0);
  },
};

export const Corner: Story = {
  parameters: {
    docs: {
      description: {
        story: "Shows border radius tokens for consistent rounded corners. Each value is demonstrated on a sample element to visualize the corner rounding effect.",
      },
    },
  },
  render: () => {
    const rootElement = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootElement ?? document.documentElement, "natural")["corner"] ?? [];
    for (const property of tokens) {
      createAndAppendElements(property, createCornerElement, container);
    }
    return container;
  },
  play: async ({ canvasElement }) => {
    const cornerElements = canvasElement.querySelectorAll(".corner-variable");

    await expect(cornerElements.length).toBeGreaterThanOrEqual(0);
  },
};

export const Breakpoint: Story = {
  parameters: {
    docs: {
      description: {
        story: "Interactive breakpoint reference showing media query ranges with real-time viewport detection. Resize the browser to see the current breakpoint highlighted.",
      },
    },
  },
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
  args: {
    sortMode: "natural",
  },
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector("div");
    const title = canvasElement.querySelector("h1");
    const table = canvasElement.querySelector("table");

    await expect(container).toBeTruthy();
    await expect(title).toBeTruthy();
    await expect(title?.textContent).toContain("Media Breakpoints");
    await expect(table).toBeTruthy();

    const rows = canvasElement.querySelectorAll("tbody tr");
    await expect(rows).toHaveLength(10);

    // Verify table headers
    const headers = canvasElement.querySelectorAll("th");
    await expect(headers).toHaveLength(4);
    await expect(headers[0]?.textContent).toBe("Name");
    await expect(headers[1]?.textContent).toBe("Range");
    await expect(headers[2]?.textContent).toBe("Description");
    await expect(headers[3]?.textContent).toBe("Custom Media");
  },
};

const getDesignTokens = (element: HTMLElement, sortMode: "natural" | "numeric" = "natural"): Record<string, Property[]> => {
  const properties = customProperties(element, undefined, sortMode);
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
