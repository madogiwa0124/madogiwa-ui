import { MH2, MH3, MLi, MOl, MUl } from "../../src";

const items = ["First item", "Second item", "Third item"].map(item => <MLi key={item}>{item}</MLi>);

// NOTE: role="list" restores list semantics that Safari drops when list-style is removed by the --none modifier.
export const ListSection = () => (
  <>
    <MH2>MList</MH2>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-6)" }}>
      <div>
        <MH3>MOl (Ordered List)</MH3>
        <MOl role="list">{items}</MOl>
      </div>
      <div>
        <MH3>MUl (Unordered List)</MH3>
        <MUl role="list">{items}</MUl>
      </div>
      <div>
        <MH3>None (no marker)</MH3>
        <div style={{ display: "flex", gap: "var(--spacing-6)" }}>
          <MOl none role="list">{items}</MOl>
          <MUl none role="list">{items}</MUl>
        </div>
      </div>
      <div>
        <MH3>Inline</MH3>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-2)" }}>
          <MOl inline role="list">{items}</MOl>
          <MUl inline role="list">{items}</MUl>
        </div>
      </div>
    </div>
  </>
);
