import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r=e((()=>{t=e=>{let t=document.createElement(`button`);return t.classList.add(`m-tabs__item`),t.setAttribute(`role`,`tab`),t.textContent=e.text,e.id&&(t.id=e.id),e.ariaControls&&t.setAttribute(`aria-controls`,e.ariaControls),e.disabled&&(t.disabled=e.disabled),e.active?(t.classList.add(`--active`),t.setAttribute(`aria-selected`,`true`),t.setAttribute(`tabindex`,`0`)):(t.setAttribute(`aria-selected`,`false`),t.setAttribute(`tabindex`,`-1`)),t},n=e=>{let n=document.createElement(`div`),r=document.createElement(`nav`);r.classList.add(`m-tabs`),e.transition&&r.classList.add(`--transition`),e.scrollhint&&r.classList.add(`--scrollhint`);let i=document.createElement(`div`);i.classList.add(`m-tabs__list`),i.setAttribute(`role`,`tablist`);for(let n of e.tabs){let e=t(n);i.append(e)}r.append(i),n.append(r);for(let t of e.tabs)if(t.ariaControls){let e=document.createElement(`div`);e.id=t.ariaControls,e.setAttribute(`role`,`tabpanel`),n.append(e)}return n}})),i,a,o,s,c,l,u;e((()=>{r(),{expect:i,within:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Tabs`,tags:[`autodocs`],argTypes:{tabs:{control:`object`,description:`The tabs array for the component`},transition:{control:{type:`boolean`},description:`The transition animation modifier for the component`},scrollhint:{control:{type:`boolean`},description:`The scroll hint modifier for the component`}},parameters:{docs:{description:{component:`
### Overview

The Tabs component provides a navigation interface for switching between multiple content areas. It supports active states, disabled states, and hover effects with optional transition animations and scroll hints.

### Usage

Use Tabs for organizing content into separate views that users can switch between. Ideal for settings panels, product information sections, and any interface requiring content categorization.

### Example code

\`\`\`html
<!-- Basic tabs -->
<div class="m-tabs">
  <div class="m-tabs__list" role="tablist">
    <button class="m-tabs__item --active" role="tab" aria-selected="true">Tab 1</button>
    <button class="m-tabs__item" role="tab">Tab 2</button>
    <button class="m-tabs__item" role="tab">Tab 3</button>
  </div>
</div>

<!-- Tabs with transitions and scroll hints -->
<div class="m-tabs --transition --scrollhint">
  <div class="m-tabs__list" role="tablist">
    <button class="m-tabs__item --active" role="tab">Dashboard</button>
    <button class="m-tabs__item" role="tab">Analytics</button>
    <button class="m-tabs__item" role="tab" disabled>Settings</button>
  </div>
</div>
\`\`\`

### Elements

| Name | Description |
| ---- | ----------- |
| .m-tabs__list | Container for tab items with scrollable overflow |
| .m-tabs__item | Individual tab button elements |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-tabs | .--transition | Enables smooth hover transition effects |
| .m-tabs | .--scrollhint | Shows visual scroll indicators when content overflows |
| .m-tabs__item | .--active | Marks the currently selected tab |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --tabs-default-border | 1px solid var(--color-border) | Border style for the tab list |
| --tabs-scrollbar-color | rgb(from var(--color-primary) r g b / 50%) transparent | Scrollbar color scheme |
| --tabs-item-padding | var(--spacing-2) var(--spacing-4) | Internal padding for tab items |
| --tabs-active-item-border-color | var(--color-primary) | Border color for active tabs |
| --tabs-active-item-border | 2px solid transparent | Border specification for active state |
| --tabs-active-item-filter | brightness(0.95) | Visual filter for active tabs |
| --tabs-active-item-color | var(--color-primary) | Text color for active tabs |
| --tabs-hover-item-filter | brightness(0.95) | Visual filter for hover state |
| --tabs-disabled-item-filter | brightness(0.65) | Visual filter for disabled tabs |
| --tabs-hover-transition | 0.3s ease | Transition timing for hover effects |
| --tabs-item-background-color | var(--color-bg-subtle) | Background color for tab items |

### Data Attributes

This component does not use data attributes for styling or behavior.標準的なARIA属性を使用します。

### Caution

- JavaScript implementation required for tab switching functionality
- Proper ARIA attributes (\`aria-controls\`, \`aria-selected\`, \`tabindex\`) must be managed dynamically
- Scroll hints use advanced CSS features that may not work in older browsers
- Test keyboard navigation and screen reader compatibility
        `}}}},s={parameters:{docs:{description:{story:`Default tab navigation with active, normal, and disabled states.`}}},render:e=>n(e),args:{tabs:[{text:`Active Tab`,active:!0,ariaControls:`panel-1`},{text:`Tab 2`,ariaControls:`panel-2`},{text:`Tab 3`,ariaControls:`panel-3`},{text:`Disabled`,disabled:!0,ariaControls:`panel-4`}],transition:!1,scrollhint:!1},play:async({canvasElement:e})=>{let t=a(e),n=t.getByRole(`tablist`),r=t.getAllByRole(`tab`),o=t.getByRole(`tab`,{selected:!0}),s=t.getByRole(`tab`,{name:`Disabled`});await i(n).not.toBeNull(),await i(n).not.toBeNull(),await i(r.length).toBe(4),await i(n.parentElement).toHaveClass(`m-tabs`),await i(o).toHaveTextContent(`Active Tab`),await i(o).toHaveAttribute(`aria-selected`,`true`),await i(o).toHaveAttribute(`tabindex`,`0`),await i(s).toHaveTextContent(`Disabled`),await i(s).toBeDisabled(),await i(s).toHaveAttribute(`aria-selected`,`false`),await i(s).toHaveAttribute(`tabindex`,`-1`)}},c={parameters:{docs:{description:{story:`Tabs with smooth transition effects enabled on hover.`}}},render:()=>n({tabs:[{text:`Home`,active:!0,ariaControls:`home-panel`},{text:`Products`,ariaControls:`products-panel`},{text:`About`,ariaControls:`about-panel`},{text:`Contact`,ariaControls:`contact-panel`}],transition:!0}),play:async({canvasElement:e})=>{let t=a(e).getByRole(`tablist`).parentElement;await i(t).toHaveClass(`m-tabs`),await i(t).toHaveClass(`--transition`)}},l={parameters:{docs:{description:{story:`Tabs with scroll hints for better UX when content overflows horizontally.`}}},args:{tabs:[{text:`Dashboard`,active:!0,ariaControls:`dashboard-panel`},{text:`Analytics`,ariaControls:`analytics-panel`},{text:`Reports`,ariaControls:`reports-panel`},{text:`Settings`,ariaControls:`settings-panel`},{text:`Users`,ariaControls:`users-panel`},{text:`Billing`,ariaControls:`billing-panel`},{text:`Security`,ariaControls:`security-panel`},{text:`Integrations`,ariaControls:`integrations-panel`},{text:`Support`,ariaControls:`support-panel`},{text:`Feedback`,ariaControls:`feedback-panel`},{text:`Updates`,ariaControls:`updates-panel`},{text:`Changelog`,ariaControls:`changelog-panel`},{text:`More`,ariaControls:`more-panel`}]},render:e=>n({tabs:e.tabs,scrollhint:!0}),play:async({canvasElement:e})=>{let t=a(e).getByRole(`tablist`).parentElement;await i(t).toHaveClass(`m-tabs`),await i(t).toHaveClass(`--scrollhint`)}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithTransition`,`WithScrollHint`]}))();export{s as Default,l as WithScrollHint,c as WithTransition,u as __namedExportsOrder,o as default};