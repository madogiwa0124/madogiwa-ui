export interface TableProperties {
  stripe?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
  transition?: boolean;
}

export const createTable = (
  properties: TableProperties = {},
): HTMLTableElement => {
  const { stripe = false, bordered = false, hoverable = false, fullWidth = false, transition = false } = properties;

  const table = document.createElement("table");
  table.classList.add("m-table");

  if (stripe) table.classList.add("--stripe");
  if (bordered) table.classList.add("--bordered");
  if (hoverable) table.classList.add("--hoverable");
  if (fullWidth) table.classList.add("--full-width");
  if (transition) table.classList.add("--transition");

  return table;
};

export const createSimpleTable = (properties: TableProperties = {}): HTMLTableElement => {
  const table = createTable(properties);

  // Create thead
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Name", "Age", "Email"];
  for (const header of headers) {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.append(th);
  }
  thead.append(headerRow);
  table.append(thead);

  // Create tbody
  const tbody = document.createElement("tbody");
  const data = [
    ["John Doe", "28", "john@example.com"],
    ["Jane Smith", "34", "jane@example.com"],
    ["Bob Johnson", "45", "bob@example.com"],
  ];

  for (const row of data) {
    const tr = document.createElement("tr");
    for (const cell of row) {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.append(td);
    }
    tbody.append(tr);
  }
  table.append(tbody);

  return table;
};
