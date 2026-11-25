import { MH2, MH3, MTable, type MTableProps } from "../../src";

type TableSample = {
  title: string;
  modifiers: Pick<MTableProps, "stripe" | "bordered" | "hoverable">;
  headers: string[];
  rows: string[][];
};

const samples: TableSample[] = [
  {
    title: "Basic Table",
    modifiers: {},
    headers: ["Name", "Email", "Role"],
    rows: [["John Doe", "john@example.com", "Developer"], ["Jane Smith", "jane@example.com", "Designer"], ["Bob Johnson", "bob@example.com", "Manager"]],
  },
  {
    title: "Striped Table",
    modifiers: { stripe: true },
    headers: ["Product", "Price", "Stock"],
    rows: [["Laptop", "$999", "15"], ["Mouse", "$29", "50"], ["Keyboard", "$79", "30"], ["Monitor", "$299", "8"]],
  },
  {
    title: "Hoverable Table",
    modifiers: { hoverable: true },
    headers: ["ID", "Task", "Status"],
    rows: [["1", "Design new homepage", "In Progress"], ["2", "Fix login bug", "Completed"], ["3", "Update documentation", "Pending"]],
  },
  {
    title: "Bordered Table",
    modifiers: { bordered: true },
    headers: ["Feature", "Basic", "Pro"],
    rows: [["Users", "5", "Unlimited"], ["Storage", "10GB", "1TB"], ["Support", "Email", "24/7 Phone"]],
  },
  {
    title: "All Modifiers Combined",
    modifiers: { stripe: true, bordered: true, hoverable: true },
    headers: ["#", "Item", "Quantity", "Price"],
    rows: [["1", "Widget A", "10", "$100"], ["2", "Widget B", "5", "$250"], ["3", "Widget C", "8", "$160"]],
  },
];

export const TableSection = () => (
  <>
    <MH2>MTable</MH2>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-6)" }}>
      {samples.map(({ title, modifiers, headers, rows }) => (
        <div key={title}>
          <MH3>{title}</MH3>
          <MTable {...modifiers} fullWidth transition>
            <thead>
              <tr>
                {headers.map(header => <th key={header}>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row[0]}>
                  {row.map((cell, index) => <td key={headers[index]}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </MTable>
        </div>
      ))}
    </div>
  </>
);
