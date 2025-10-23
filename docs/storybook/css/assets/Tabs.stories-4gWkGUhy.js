const p=t=>{const a=document.createElement("button");return a.classList.add("m-tabs__item"),a.setAttribute("role","tab"),a.textContent=t.text,t.id&&(a.id=t.id),t.ariaControls&&a.setAttribute("aria-controls",t.ariaControls),t.disabled&&(a.disabled=t.disabled),t.active?(a.classList.add("--active"),a.setAttribute("aria-selected","true"),a.setAttribute("tabindex","0")):(a.setAttribute("aria-selected","false"),a.setAttribute("tabindex","-1")),a},b=t=>{const a=document.createElement("div"),e=document.createElement("nav");e.classList.add("m-tabs"),t.transition&&e.classList.add("--transition"),t.scrollhint&&e.classList.add("--scrollhint");const r=document.createElement("div");r.classList.add("m-tabs__list"),r.setAttribute("role","tablist");for(const o of t.tabs){const s=p(o);r.append(s)}e.append(r),a.append(e);for(const o of t.tabs)if(o.ariaControls){const s=document.createElement("div");s.id=o.ariaControls,s.setAttribute("role","tabpanel"),a.append(s)}return a},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/Tabs",tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Array of tab objects for the tab navigation."},transition:{control:{type:"boolean"},description:"Enable transition effects on tab hover."},scrollhint:{control:{type:"boolean"},description:"Enable scroll hint effects on tab list."}},parameters:{docs:{description:{component:`
### Overview

The Tabs component provides a navigation interface for switching between multiple content areas. It supports active states, disabled states, and hover effects with optional transition animations and scroll hints.

### Usage

Use Tabs for organizing content into separate views that users can switch between. Ideal for settings panels, product information sections, and any interface requiring content categorization. The component handles keyboard navigation and screen reader compatibility.

### Elements

| Name | Description |
| ---- | ----------- |
| .m-tabs | The main container element for the tab navigation |
| .m-tabs__list | Container for tab items with scrollable overflow |
| .m-tabs__item | Individual tab button elements |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-tabs | .--transition | Enables smooth hover transition effects |
| .m-tabs | .--scrollhint | Shows visual scroll indicators when content overflows |
| .m-tabs__item | .--active | Marks the currently selected tab |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-tabs | --tabs-default-border | 1px solid var(--color-border) | Border style for the tab list |
| .m-tabs | --tabs-scrollbar-color | rgb(from var(--color-primary) r g b / 50%) transparent | Scrollbar color scheme |
| .m-tabs | --tabs-item-padding | var(--spacing-2) var(--spacing-4) | Internal padding for tab items |
| .m-tabs | --tabs-active-item-border-color | var(--color-primary) | Border color for active tabs |
| .m-tabs | --tabs-active-item-border | 2px solid transparent | Border specification for active state |
| .m-tabs | --tabs-active-item-filter | brightness(0.95) | Visual filter for active tabs |
| .m-tabs | --tabs-hover-item-filter | brightness(0.95) | Visual filter for hover state |
| .m-tabs | --tabs-disabled-item-filter | brightness(0.65) | Visual filter for disabled tabs |
| .m-tabs | --tabs-hover-transition | 0.3s ease | Transition timing for hover effects |
| .m-tabs | --tabs-item-background-color | var(--color-bg-light) | Background color for tab items |

### Data Attributes

No specific data attributes are defined for this component. Uses standard ARIA attributes for accessibility.

### Caution

- This component provides styling only; JavaScript implementation required for tab switching functionality
- Proper ARIA attributes (aria-controls, aria-selected, tabindex) must be managed dynamically by JavaScript.
- Scroll hints use advanced CSS features that may not work in older browsers
- Background attachment local may have performance implications on some devices
        `}}}},i={parameters:{docs:{description:{story:"Default tab navigation with active, normal, and disabled states."}}},render:t=>b(t),args:{tabs:[{text:"Active Tab",active:!0,ariaControls:"panel-1"},{text:"Tab 2",ariaControls:"panel-2"},{text:"Tab 3",ariaControls:"panel-3"},{text:"Disabled",disabled:!0,ariaControls:"panel-4"}],transition:!1,scrollhint:!1},play:async({canvasElement:t})=>{const a=d(t),e=a.getByRole("tablist"),r=a.getAllByRole("tab"),o=a.getByRole("tab",{selected:!0}),s=a.getByRole("tab",{name:"Disabled"});await n(e).not.toBeNull(),await n(e).not.toBeNull(),await n(r.length).toBe(4),await n(e.parentElement).toHaveClass("m-tabs"),await n(o).toHaveTextContent("Active Tab"),await n(o).toHaveAttribute("aria-selected","true"),await n(o).toHaveAttribute("tabindex","0"),await n(s).toHaveTextContent("Disabled"),await n(s).toBeDisabled(),await n(s).toHaveAttribute("aria-selected","false"),await n(s).toHaveAttribute("tabindex","-1")}},l={parameters:{docs:{description:{story:"Tabs with smooth transition effects enabled on hover."}}},render:()=>b({tabs:[{text:"Home",active:!0,ariaControls:"home-panel"},{text:"Products",ariaControls:"products-panel"},{text:"About",ariaControls:"about-panel"},{text:"Contact",ariaControls:"contact-panel"}],transition:!0}),play:async({canvasElement:t})=>{const e=d(t).getByRole("tablist").parentElement;await n(e).toHaveClass("m-tabs"),await n(e).toHaveClass("--transition")}},c={parameters:{docs:{description:{story:"Tabs with scroll hints for better UX when content overflows horizontally."}}},args:{tabs:[{text:"Dashboard",active:!0,ariaControls:"dashboard-panel"},{text:"Analytics",ariaControls:"analytics-panel"},{text:"Reports",ariaControls:"reports-panel"},{text:"Settings",ariaControls:"settings-panel"},{text:"Users",ariaControls:"users-panel"},{text:"Billing",ariaControls:"billing-panel"},{text:"Security",ariaControls:"security-panel"},{text:"Integrations",ariaControls:"integrations-panel"},{text:"Support",ariaControls:"support-panel"},{text:"Feedback",ariaControls:"feedback-panel"},{text:"Updates",ariaControls:"updates-panel"},{text:"Changelog",ariaControls:"changelog-panel"},{text:"More",ariaControls:"more-panel"}]},render:t=>b({tabs:t.tabs,scrollhint:!0}),play:async({canvasElement:t})=>{const e=d(t).getByRole("tablist").parentElement;await n(e).toHaveClass("m-tabs"),await n(e).toHaveClass("--scrollhint")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default tab navigation with active, normal, and disabled states."
      }
    }
  },
  render: args => createTabs(args),
  args: {
    tabs: [{
      text: "Active Tab",
      active: true,
      ariaControls: "panel-1"
    }, {
      text: "Tab 2",
      ariaControls: "panel-2"
    }, {
      text: "Tab 3",
      ariaControls: "panel-3"
    }, {
      text: "Disabled",
      disabled: true,
      ariaControls: "panel-4"
    }],
    transition: false,
    scrollhint: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getByRole("tablist");
    const allTabs = canvas.getAllByRole("tab");
    const activeTab = canvas.getByRole("tab", {
      selected: true
    });
    const disabledTab = canvas.getByRole("tab", {
      name: "Disabled"
    });
    await expect(tabs).not.toBeNull();
    await expect(tabs).not.toBeNull();
    await expect(allTabs.length).toBe(4);
    await expect(tabs.parentElement).toHaveClass("m-tabs");
    await expect(activeTab).toHaveTextContent("Active Tab");
    await expect(activeTab).toHaveAttribute("aria-selected", "true");
    await expect(activeTab).toHaveAttribute("tabindex", "0");
    await expect(disabledTab).toHaveTextContent("Disabled");
    await expect(disabledTab).toBeDisabled();
    await expect(disabledTab).toHaveAttribute("aria-selected", "false");
    await expect(disabledTab).toHaveAttribute("tabindex", "-1");
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Tabs with smooth transition effects enabled on hover."
      }
    }
  },
  render: () => createTabs({
    tabs: [{
      text: "Home",
      active: true,
      ariaControls: "home-panel"
    }, {
      text: "Products",
      ariaControls: "products-panel"
    }, {
      text: "About",
      ariaControls: "about-panel"
    }, {
      text: "Contact",
      ariaControls: "contact-panel"
    }],
    transition: true
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tabsContainer = canvas.getByRole("tablist").parentElement;
    await expect(tabsContainer).toHaveClass("m-tabs");
    await expect(tabsContainer).toHaveClass("--transition");
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Tabs with scroll hints for better UX when content overflows horizontally."
      }
    }
  },
  args: {
    tabs: [{
      text: "Dashboard",
      active: true,
      ariaControls: "dashboard-panel"
    }, {
      text: "Analytics",
      ariaControls: "analytics-panel"
    }, {
      text: "Reports",
      ariaControls: "reports-panel"
    }, {
      text: "Settings",
      ariaControls: "settings-panel"
    }, {
      text: "Users",
      ariaControls: "users-panel"
    }, {
      text: "Billing",
      ariaControls: "billing-panel"
    }, {
      text: "Security",
      ariaControls: "security-panel"
    }, {
      text: "Integrations",
      ariaControls: "integrations-panel"
    }, {
      text: "Support",
      ariaControls: "support-panel"
    }, {
      text: "Feedback",
      ariaControls: "feedback-panel"
    }, {
      text: "Updates",
      ariaControls: "updates-panel"
    }, {
      text: "Changelog",
      ariaControls: "changelog-panel"
    }, {
      text: "More",
      ariaControls: "more-panel"
    }]
  },
  render: args => createTabs({
    tabs: args.tabs,
    scrollhint: true
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tabsContainer = canvas.getByRole("tablist").parentElement;
    await expect(tabsContainer).toHaveClass("m-tabs");
    await expect(tabsContainer).toHaveClass("--scrollhint");
  }
}`,...c.parameters?.docs?.source}}};const v=["Default","WithTransition","WithScrollHint"];export{i as Default,c as WithScrollHint,l as WithTransition,v as __namedExportsOrder,m as default};
