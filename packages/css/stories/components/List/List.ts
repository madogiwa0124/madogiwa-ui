export interface ListProperties {
  items?: string[];
  none?: boolean;
  inline?: boolean;
}

export const createOl = (props: ListProperties = {}): HTMLOListElement => {
  const { items = ["Item 1", "Item 2", "Item 3"], none = false, inline = false } = props;

  const ol = document.createElement("ol");
  ol.classList.add("m-ol");

  if (none) ol.classList.add("--none");
  if (inline) ol.classList.add("--inline");

  for (const item of items) {
    const li = document.createElement("li");
    li.classList.add("m-li");
    li.textContent = item;
    ol.append(li);
  }

  return ol;
};

export const createUl = (props: ListProperties = {}): HTMLUListElement => {
  const { items = ["Item 1", "Item 2", "Item 3"], none = false, inline = false } = props;

  const ul = document.createElement("ul");
  ul.classList.add("m-ul");

  if (none) ul.classList.add("--none");
  if (inline) ul.classList.add("--inline");

  for (const item of items) {
    const li = document.createElement("li");
    li.classList.add("m-li");
    li.textContent = item;
    ul.append(li);
  }

  return ul;
};

export type ListType = "ol" | "ul";

export interface NestedListProperties {
  parent: ListType;
  child: ListType;
}

const createList = (type: ListType, items: (string | Node)[][]): HTMLOListElement | HTMLUListElement => {
  const list = document.createElement(type);
  list.classList.add(type === "ol" ? "m-ol" : "m-ul");

  for (const children of items) {
    const li = document.createElement("li");
    li.classList.add("m-li");
    li.append(...children);
    list.append(li);
  }

  return list;
};

export const createNestedList = ({ parent, child }: NestedListProperties): HTMLOListElement | HTMLUListElement => {
  const childList = createList(child, [["Child item 1"], ["Child item 2"]]);
  return createList(parent, [["Parent item 1", childList], ["Parent item 2"], ["Parent item 3"]]);
};

export const createMixedContentList = (type: ListType): HTMLOListElement | HTMLUListElement => {
  const strong = document.createElement("strong");
  strong.textContent = "Strict Locals";
  const code = document.createElement("code");
  code.textContent = "locals";
  return createList(type, [
    [strong, " is enabled by default, so every partial must declare its ", code, " explicitly. This sentence is long enough to wrap onto multiple lines."],
    ["Plain text item"],
  ]);
};
