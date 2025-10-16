// TypeScript Helper Pattern for Columns layout system
export interface ColumnsProperties {
  columnsLength?: number;
  gap?: boolean;
  autoFit?: boolean;
  autoFitMin?: string;
  alignRows?: boolean;
  children?: Array<{
    content: string;
    colSize?: number;
    subgridRows?: number;
  }>;
}

export const createColumns = (
  props: ColumnsProperties = {},
): HTMLElement => {
  const {
    columnsLength,
    gap = true,
    autoFit = false,
    alignRows = false,
    children = [],
    autoFitMin = "0",
  } = props;

  const container = document.createElement("div");
  container.className = `m-columns`.trim();

  if (!gap) {
    container.classList.add("--no-gap");
  }

  if (alignRows) {
    container.classList.add("--align-rows");
  }

  if (autoFit) {
    container.classList.add("--auto-fit");
  }

  if (autoFit && autoFitMin && autoFitMin !== "0") {
    container.style.setProperty("--columns-auto-fit-min", autoFitMin);
  }

  if (columnsLength && columnsLength !== 12) {
    container.dataset["columnsLength"] = String(columnsLength);
  }

  for (const child of children) {
    const element = document.createElement("div");
    element.innerHTML = child.content;

    if (child.colSize) {
      element.dataset["colSize"] = String(child.colSize);
    }

    if (alignRows && child.subgridRows && child.subgridRows !== 1) {
      element.dataset["subgridRows"] = String(child.subgridRows);
    }

    container.append(element);
  }

  return container;
};
