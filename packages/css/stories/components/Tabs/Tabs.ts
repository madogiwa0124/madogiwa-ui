export interface TabProperties {
  text: string;
  active?: boolean;
  disabled?: boolean;
  id?: string;
  ariaControls?: string;
}

export interface TabsProperties {
  tabs: TabProperties[];
  transition?: boolean;
  scrollhint?: boolean;
}

export const createTab = (
  props: TabProperties,
): HTMLButtonElement => {
  const tab = document.createElement("button");
  tab.classList.add("m-tabs__item");
  tab.setAttribute("role", "tab");

  // Set basic properties
  tab.textContent = props.text;

  // Set attributes
  if (props.id) tab.id = props.id;
  if (props.ariaControls) tab.setAttribute("aria-controls", props.ariaControls);
  if (props.disabled) tab.disabled = props.disabled;

  // Set active state
  if (props.active) {
    tab.classList.add("--active");
    tab.setAttribute("aria-selected", "true");
    tab.setAttribute("tabindex", "0");
  } else {
    tab.setAttribute("aria-selected", "false");
    tab.setAttribute("tabindex", "-1");
  }

  return tab;
};

export const createTabs = (
  props: TabsProperties,
): HTMLElement => {
  const container = document.createElement("div");
  const nav = document.createElement("nav");
  nav.classList.add("m-tabs");

  // Add modifiers
  if (props.transition) nav.classList.add("--transition");
  if (props.scrollhint) nav.classList.add("--scrollhint");

  // Create tab list
  const tabList = document.createElement("div");
  tabList.classList.add("m-tabs__list");
  tabList.setAttribute("role", "tablist");

  // Create tabs
  for (const tabProperties of props.tabs) {
    const tab = createTab(tabProperties);
    tabList.append(tab);
  }

  nav.append(tabList);
  container.append(nav);

  // Create tab panels
  for (const tabProperties of props.tabs) {
    if (tabProperties.ariaControls) {
      const panel = document.createElement("div");
      panel.id = tabProperties.ariaControls;
      panel.setAttribute("role", "tabpanel");
      container.append(panel);
    }
  }

  return container;
};
