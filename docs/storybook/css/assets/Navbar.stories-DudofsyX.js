const l=(e={})=>{const{title:a="Brand Name",items:n=[],buttons:r=[],transition:s=!1,hoverMenu:i=!1,showMenu:o=!1,menuVariant:c,noHamburger:y=!0,menuToggleByJS:w=!1}=e,f=document.createElement("div"),S=s?" --transition":"",B=i?" --hover-hamburger-menu":"",M=c?{float:" --mobile-float-menu",side:" --mobile-side-menu","slide-left":" --mobile-side-menu --slide-left"}[c]:"",H=n.map(m=>`<a href="${m.href}" class="m-navbar__item${m.end?" --end":""}">${m.text}</a>`).join(""),C=r.map(m=>`<button class="m-btn${m.variant==="primary"?" --primary":""}">${m.text}</button>`).join(""),_=r.length>0?`
    <div class="m-navbar__item --end">
      ${C}
    </div>`:"",x=`
    <div class="m-navbar__hamburger">
      <button class="m-navbar__hamburger-menu" aria-label="Menu" aria-expanded="${String(o)}" aria-controls="navigation-menu"></button>
    </div>
  `;if(f.innerHTML=`
    <nav role="navigation" class="m-navbar${S}${B}${M}">
      ${c=="slide-left"?x:""}
      <a href="#" class="m-navbar__title">${a}</a>
      <div class="m-navbar__items" id="navigation-menu">
        ${H}
        ${_}
      </div>
      ${y||c=="slide-left"?"":x}
    </nav>
  `.trim(),w&&!y){const m=f.querySelector(".m-navbar__hamburger-menu");m.addEventListener("click",()=>{const T=m.getAttribute("aria-expanded")==="true";m.setAttribute("aria-expanded",String(!T))})}return f},{expect:t,userEvent:u,within:b}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Navbar",tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Title/brand text for the navbar"},items:{control:{type:"object"},description:"Navigation items array with text, href, and optional end positioning"},buttons:{control:{type:"object"},description:"Action buttons array with variant support (primary/secondary)"},transition:{control:{type:"boolean"},description:"Enable smooth transition effects for hamburger menu"},menuVariant:{control:{type:"select"},options:["side","float","slide-left"],description:"Hamburger menu display style: 'side' (drawer) or 'float' (dropdown)"},showMenu:{control:{type:"boolean"},description:"(For testing) Force show menu state regardless of responsive behavior"}},parameters:{layout:"fullscreen",docs:{description:{component:`
### Overview

The Navbar component provides responsive navigation with mobile-first design. It features flexible hamburger menu variants and comprehensive customization options.

### Usage

Use the navbar for:
- Primary site navigation
- Brand/logo display
- Action buttons (login, signup, etc.)
- Responsive mobile menu patterns
- Multi-level navigation structures

**⚠️ Need JavaScript**

The opening and closing of the hamburger menu on mobile must be controlled via JavaScript by the value of \`.m-navbar__hamburger-menu[aria-expanded]\`.

\`\`\`js
const hamburgerMenu = document.querySelector(".m-navbar__hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  const isExpanded = hamburgerMenu.getAttribute("aria-expanded") === "true";
  hamburgerMenu.setAttribute("aria-expanded", String(!isExpanded));
});
\`\`\`

### Elements

| Name | Description |
| ---- | ----------- |
| .m-navbar__title | Brand/logo area with link styling |
| .m-navbar__items | Main navigation container |
| .m-navbar__item | Individual navigation link or button container |
| .m-navbar__hamburger | Mobile hamburger button container |
| .m-navbar__hamburger-menu | Hamburger menu toggle button |

### Modifiers

| Target | Name | Description |
| ------ | ---- | ----------- |
| .m-navbar | .--transition | Enables smooth animations for menu transitions |
| .m-navbar | .--hover-hamburger-menu | **Experimental**: CSS-only hover menu activation |
| .m-navbar | .--mobile-float-menu | Dropdown-style floating menu (no backdrop) |
| .m-navbar | .--mobile-side-menu | Drawer-style right side menu (with backdrop) |
| .m-navbar | .--mobile-side-menu .--slide-left | Drawer-style left side menu (with backdrop) |
| .m-navbar__item | .--end | Aligns item to the end of the navigation (right in LTR) |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --navbar-bg-color | var(--color-bg-light) | Background color of the navbar |
| --navbar-min-height | 56px | Minimum height of the navbar |
| --navbar-item-padding | var(--spacing-2) var(--spacing-3) | Padding for navbar items |
| --navbar-item-gap | var(--spacing-2) | Gap between items with content |
| --navbar-item-text-color | var(--color-text) | Text color for navigation items |
| --navbar-item-hover-bg-color | var(--color-primary) | Background color on item hover |
| --navbar-item-hover-text-color | var(--color-text-light) | Text color on item hover |
| --navbar-hamburger-icon-content | "☰" | Hamburger menu icon content |
| --navbar-hamburger-icon-close-content | "×" | Close menu icon content |
| --navbar-hamburger-icon-size | 1.5rem | Size of hamburger menu icons |
| --navbar-hamburger-icon-padding | 0 var(--spacing-2) | Padding for hamburger icon |
| --navbar-hamburger-icon-color | var(--color-text) | Color of hamburger icon |
| --navbar-hamburger-icon-hover-bg-color | color(from var(--navbar-bg-color) srgb calc(r * 0.8) calc(g * 0.8) calc(b * 0.8)) | Hover background for icon |
| --navbar-hamburger-icon-border-radius | var(--radius-sm) | Border radius for hamburger icon |
| --navbar-hamburger-menu-size | 2.5rem | Size of hamburger menu button |
| --navbar-hamburger-menu-bg-color | var(--color-bg-light) | Background of mobile menu |
| --navbar-hamburger-menu-border | 2px solid var(--color-bg-light) | Border for hamburger menu |
| --navbar-hamburger-menu-border-radius | 0 0 var(--radius-sm) var(--radius-sm) | Border radius for menu |
| --navbar-hamburger-menu-box-shadow | var(--shadow-md) | Box shadow for menu |
| --navbar-hamburger-menu-item-separate-border | 1px solid var(--color-bg-light) | Border between menu items |
| --navbar-base-zindex | var(--zindex-navbar) | Base z-index for navbar layering |
| --navbar-backdrop-zindex | calc(var(--navbar-base-zindex) + 1) | Z-index for backdrop |
| --navbar-menu-zindex | calc(var(--navbar-backdrop-zindex) + 1) | Z-index for menu items |
| --navbar-hamburger-menu-zindex | calc(var(--navbar-menu-zindex) + 1) | Z-index for hamburger menu button |
| --navbar-hamburger-menu-slidein-transition | 0.1s ease-in-out | Slide-in animation duration |
| --navbar-hamburger-menu-hover-item-transition | 0.3s ease-in-out | Item hover transition |
| --navbar-hamburger-float-menu-position-right | var(--spacing-2) | Right position for float menu |
| --navbar-hamburger-side-menu-close-x-position | var(--spacing-3) | Horizontal position of close button in side menu |
| --navbar-hamburger-side-menu-close-y-position | var(--spacing-2) | Vertical position of close button in side menu |
| --navbar-hamburger-side-menu-max-width | 80vw | Maximum width for side menu |
| --navbar-hamburger-side-menu-min-width | 40vw | Minimum width for side menu |
| --navbar-hamburger-side-menu-backdrop-color | var(--color-overlay) | Backdrop color for side menu |
| --navbar-hamburger-side-menu-backdrop-filter | blur(2px) | Backdrop filter effect |

### Caution
- Ensure sufficient contrast between text and background for readability
- Use meaningful alt text for icons to enhance accessibility
- **Close Button Position**: The close button position in side menus can be optimized by dynamically adjusting \`--navbar-hamburger-side-menu-close-x-position\`, \`--navbar-hamburger-side-menu-close-y-position\` based on menu width using JavaScript for better user experience
        `}}}},v={render:e=>{const a=l({title:e.title,items:e.items,buttons:e.buttons,transition:e.transition,noHamburger:!1,menuToggleByJS:!0,menuVariant:e.menuVariant}),n=document.createElement("main");return n.className="m-container",n.style.padding="var(--spacing-4)",n.innerHTML=`
      <h1 class="m-h1">Page Content</h1>
      <p>This demonstrates the navbar in a real page context.</p>
      <p><strong>Try:</strong> Resize the viewport to see responsive behavior.</p>
      <button class="m-btn --primary">Sample Action</button>
    `,a.append(n),a},args:{title:"Brand Name",items:[{text:"Home",href:"#"},{text:"About",href:"#"},{text:"Services",href:"#"},{text:"Contact",href:"#"}],buttons:[{text:"Login",variant:"secondary"},{text:"Sign Up",variant:"primary"}],transition:!1},play:async({canvasElement:e,args:a})=>{const n=b(e),r=n.getByRole("navigation");await t(r).toBeInTheDocument(),await t(r).toHaveClass("m-navbar");const s=n.getByText(a.title);await t(s).toBeInTheDocument(),await t(s).toHaveClass("m-navbar__title");for(const i of a.items){const o=n.getByText(i.text);await t(o).toBeInTheDocument(),await t(o).toHaveClass("m-navbar__item"),await t(o).toHaveAttribute("href",i.href)}for(const i of a.buttons){const o=n.getByText(i.text);await t(o).toBeInTheDocument(),await t(o).toHaveClass("m-btn"),i.variant==="primary"&&await t(o).toHaveClass("--primary")}a.transition&&await t(r).toHaveClass("--transition"),a.hoverMenu&&await t(r).toHaveClass("--hover-hamburger-menu")}},d={render:e=>l({title:e.title,items:e.items,buttons:e.buttons,transition:e.transition,showMenu:e.showMenu,menuVariant:"side",noHamburger:!1,menuToggleByJS:!0}),args:{title:"Side Menu Demo",items:[{text:"Home",href:"#"},{text:"About",href:"#"},{text:"Services",href:"#"},{text:"Contact",href:"#"}],buttons:[{text:"Login",variant:"secondary"},{text:"Sign Up",variant:"primary"}],transition:!1,showMenu:!1},globals:{viewport:{value:"mobile1"}},play:async({canvasElement:e})=>{const a=b(e),n=a.getByRole("navigation"),r=a.getByLabelText("Menu");await t(n).toHaveClass("--mobile-side-menu"),await u.click(r),await t(r).toHaveAttribute("aria-expanded","true");const s=getComputedStyle(n,"::after");await t(s.display).not.toBe("none");const i=e.querySelector(".m-navbar__items"),o=getComputedStyle(i);await t(o.position).toBe("fixed"),await u.click(r),await t(r).toHaveAttribute("aria-expanded","false")},parameters:{docs:{description:{story:"Side menu variant that creates a full-height drawer with backdrop overlay. Ideal for complex navigation with many items."}}}},g={render:e=>l({title:e.title,items:e.items,buttons:e.buttons,transition:e.transition,showMenu:e.showMenu,menuVariant:"slide-left",noHamburger:!1,menuToggleByJS:!0}),args:{title:"Side Menu Demo",items:[{text:"Home",href:"#"},{text:"About",href:"#"},{text:"Services",href:"#"},{text:"Contact",href:"#"}],buttons:[{text:"Login",variant:"secondary"},{text:"Sign Up",variant:"primary"}],transition:!1,showMenu:!1},globals:{viewport:{value:"mobile1"}},play:async({canvasElement:e})=>{const a=b(e),n=a.getByRole("navigation"),r=a.getByLabelText("Menu");await t(n).toHaveClass("--mobile-side-menu"),await u.click(r),await t(r).toHaveAttribute("aria-expanded","true");const s=getComputedStyle(n,"::after");await t(s.display).not.toBe("none");const i=e.querySelector(".m-navbar__items"),o=getComputedStyle(i);await t(o.position).toBe("fixed"),await u.click(r),await t(r).toHaveAttribute("aria-expanded","false")},parameters:{docs:{description:{story:"Side menu variant that creates a full-height drawer with backdrop overlay. Ideal for complex navigation with many items."}}}},p={render:e=>l({title:e.title,items:e.items,buttons:e.buttons,transition:e.transition,hoverMenu:!1,showMenu:e.showMenu,menuVariant:"float",noHamburger:!1,menuToggleByJS:!0}),args:{title:"Float Menu Demo",items:[{text:"Home",href:"#"},{text:"About",href:"#"},{text:"Services",href:"#"},{text:"Contact",href:"#"}],buttons:[{text:"Login",variant:"secondary"},{text:"Sign Up",variant:"primary"}],transition:!1,showMenu:!1},globals:{viewport:{value:"mobile1"}},play:async({canvasElement:e})=>{const a=b(e),n=a.getByLabelText("Menu");await new Promise(c=>{setTimeout(()=>{c()},300)});const r=a.getByRole("navigation");await t(r).toHaveClass("--mobile-float-menu");const s=e.querySelector(".m-navbar__items"),i=getComputedStyle(s);await t(i.opacity).toBe("0"),await t(r).not.toHaveClass("--hover-hamburger-menu"),await u.click(n),await t(n).toHaveAttribute("aria-expanded","true");const o=getComputedStyle(s);await t(o.position).toBe("absolute"),await t(o.opacity).toBe("1"),await u.click(n),await t(n).toHaveAttribute("aria-expanded","false")},parameters:{docs:{description:{story:"Float menu variant that creates a dropdown-style menu positioned relative to the navbar. Lightweight option without backdrop overlay."}}}},h={render:e=>l({title:e.title,items:e.items,buttons:e.buttons,transition:e.transition,hoverMenu:!0,showMenu:e.showMenu,menuVariant:e.menuVariant,noHamburger:!1,menuToggleByJS:!1}),args:{title:"(Experimental) Demo",items:[{text:"Home",href:"#"},{text:"About",href:"#"},{text:"Services",href:"#"},{text:"Contact",href:"#"}],buttons:[{text:"Login",variant:"secondary"},{text:"Sign Up",variant:"primary"}],transition:!1,showMenu:!1,menuVariant:"float"},globals:{viewport:{value:"mobile1"}},play:async({canvasElement:e})=>{const a=b(e),n=a.getByRole("navigation"),r=a.getByLabelText("Menu");await new Promise(o=>{setTimeout(()=>{o()},300)}),await t(n).toHaveClass("--hover-hamburger-menu");const s=e.querySelector(".m-navbar__items"),i=getComputedStyle(s);await t(i.opacity).toBe("0"),await u.hover(r),await t(n).toHaveClass("--hover-hamburger-menu")},parameters:{docs:{description:{story:"**Experimental**: CSS-only hover activation for hamburger menu. Provides instant access without requiring clicks, using pure CSS hover states."}}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const navbar = createNavbar({
      title: args.title,
      items: args.items,
      buttons: args.buttons,
      transition: args.transition,
      noHamburger: false,
      menuToggleByJS: true,
      menuVariant: args.menuVariant
    });

    // Add sample page content for context
    const pageContent = document.createElement("main");
    pageContent.className = "m-container";
    pageContent.style.padding = "var(--spacing-4)";
    pageContent.innerHTML = \`
      <h1 class="m-h1">Page Content</h1>
      <p>This demonstrates the navbar in a real page context.</p>
      <p><strong>Try:</strong> Resize the viewport to see responsive behavior.</p>
      <button class="m-btn --primary">Sample Action</button>
    \`;
    navbar.append(pageContent);
    return navbar;
  },
  args: {
    title: "Brand Name",
    items: [{
      text: "Home",
      href: "#"
    }, {
      text: "About",
      href: "#"
    }, {
      text: "Services",
      href: "#"
    }, {
      text: "Contact",
      href: "#"
    }],
    buttons: [{
      text: "Login",
      variant: "secondary" as const
    }, {
      text: "Sign Up",
      variant: "primary" as const
    }],
    transition: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByRole("navigation");
    await expect(navbar).toBeInTheDocument();
    await expect(navbar).toHaveClass("m-navbar");
    const title = canvas.getByText(args.title);
    await expect(title).toBeInTheDocument();
    await expect(title).toHaveClass("m-navbar__title");
    for (const item of args.items) {
      const link = canvas.getByText(item.text);
      await expect(link).toBeInTheDocument();
      await expect(link).toHaveClass("m-navbar__item");
      await expect(link).toHaveAttribute("href", item.href);
    }
    for (const button of args.buttons) {
      const buttonElement = canvas.getByText(button.text);
      await expect(buttonElement).toBeInTheDocument();
      await expect(buttonElement).toHaveClass("m-btn");
      if (button.variant === "primary") {
        await expect(buttonElement).toHaveClass("--primary");
      }
    }
    if (args.transition) {
      await expect(navbar).toHaveClass("--transition");
    }
    if (args.hoverMenu) {
      await expect(navbar).toHaveClass("--hover-hamburger-menu");
    }
  }
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return createNavbar({
      title: args.title,
      items: args.items,
      buttons: args.buttons,
      transition: args.transition,
      showMenu: args.showMenu,
      menuVariant: "side",
      noHamburger: false,
      menuToggleByJS: true
    });
  },
  args: {
    title: "Side Menu Demo",
    items: [{
      text: "Home",
      href: "#"
    }, {
      text: "About",
      href: "#"
    }, {
      text: "Services",
      href: "#"
    }, {
      text: "Contact",
      href: "#"
    }],
    buttons: [{
      text: "Login",
      variant: "secondary" as const
    }, {
      text: "Sign Up",
      variant: "primary" as const
    }],
    transition: false,
    showMenu: false
  },
  globals: {
    viewport: {
      value: "mobile1"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByRole("navigation");
    const hamburger = canvas.getByLabelText("Menu");
    await expect(navbar).toHaveClass("--mobile-side-menu");
    await userEvent.click(hamburger);
    await expect(hamburger).toHaveAttribute("aria-expanded", "true");
    const backdropStyle = getComputedStyle(navbar, "::after");
    await expect(backdropStyle.display).not.toBe("none");
    const navItems = canvasElement.querySelector(".m-navbar__items") as HTMLElement;
    const itemsStyle = getComputedStyle(navItems);
    await expect(itemsStyle.position).toBe("fixed");
    await userEvent.click(hamburger);
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
  },
  parameters: {
    docs: {
      description: {
        story: "Side menu variant that creates a full-height drawer with backdrop overlay. Ideal for complex navigation with many items."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    return createNavbar({
      title: args.title,
      items: args.items,
      buttons: args.buttons,
      transition: args.transition,
      showMenu: args.showMenu,
      menuVariant: "slide-left",
      noHamburger: false,
      menuToggleByJS: true
    });
  },
  args: {
    title: "Side Menu Demo",
    items: [{
      text: "Home",
      href: "#"
    }, {
      text: "About",
      href: "#"
    }, {
      text: "Services",
      href: "#"
    }, {
      text: "Contact",
      href: "#"
    }],
    buttons: [{
      text: "Login",
      variant: "secondary" as const
    }, {
      text: "Sign Up",
      variant: "primary" as const
    }],
    transition: false,
    showMenu: false
  },
  globals: {
    viewport: {
      value: "mobile1"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByRole("navigation");
    const hamburger = canvas.getByLabelText("Menu");
    await expect(navbar).toHaveClass("--mobile-side-menu");
    await userEvent.click(hamburger);
    await expect(hamburger).toHaveAttribute("aria-expanded", "true");
    const backdropStyle = getComputedStyle(navbar, "::after");
    await expect(backdropStyle.display).not.toBe("none");
    const navItems = canvasElement.querySelector(".m-navbar__items") as HTMLElement;
    const itemsStyle = getComputedStyle(navItems);
    await expect(itemsStyle.position).toBe("fixed");
    await userEvent.click(hamburger);
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
  },
  parameters: {
    docs: {
      description: {
        story: "Side menu variant that creates a full-height drawer with backdrop overlay. Ideal for complex navigation with many items."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return createNavbar({
      title: args.title,
      items: args.items,
      buttons: args.buttons,
      transition: args.transition,
      hoverMenu: false,
      showMenu: args.showMenu,
      menuVariant: "float",
      noHamburger: false,
      menuToggleByJS: true
    });
  },
  args: {
    title: "Float Menu Demo",
    items: [{
      text: "Home",
      href: "#"
    }, {
      text: "About",
      href: "#"
    }, {
      text: "Services",
      href: "#"
    }, {
      text: "Contact",
      href: "#"
    }],
    buttons: [{
      text: "Login",
      variant: "secondary" as const
    }, {
      text: "Sign Up",
      variant: "primary" as const
    }],
    transition: false,
    showMenu: false
  },
  globals: {
    viewport: {
      value: "mobile1"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hamburger = canvas.getByLabelText("Menu");
    await new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
    const navbar = canvas.getByRole("navigation");
    await expect(navbar).toHaveClass("--mobile-float-menu");
    const navItems = canvasElement.querySelector(".m-navbar__items") as HTMLElement;
    const computedStyle = getComputedStyle(navItems);
    await expect(computedStyle.opacity).toBe("0");
    await expect(navbar).not.toHaveClass("--hover-hamburger-menu");
    await userEvent.click(hamburger);
    await expect(hamburger).toHaveAttribute("aria-expanded", "true");
    const activatedStyle = getComputedStyle(navItems);
    await expect(activatedStyle.position).toBe("absolute");
    await expect(activatedStyle.opacity).toBe("1");
    await userEvent.click(hamburger);
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");
  },
  parameters: {
    docs: {
      description: {
        story: "Float menu variant that creates a dropdown-style menu positioned relative to the navbar. Lightweight option without backdrop overlay."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return createNavbar({
      title: args.title,
      items: args.items,
      buttons: args.buttons,
      transition: args.transition,
      hoverMenu: true,
      showMenu: args.showMenu,
      menuVariant: args.menuVariant,
      noHamburger: false,
      menuToggleByJS: false
    });
  },
  args: {
    title: "(Experimental) Demo",
    items: [{
      text: "Home",
      href: "#"
    }, {
      text: "About",
      href: "#"
    }, {
      text: "Services",
      href: "#"
    }, {
      text: "Contact",
      href: "#"
    }],
    buttons: [{
      text: "Login",
      variant: "secondary" as const
    }, {
      text: "Sign Up",
      variant: "primary" as const
    }],
    transition: false,
    showMenu: false,
    menuVariant: "float"
  },
  globals: {
    viewport: {
      value: "mobile1"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByRole("navigation");
    const hamburger = canvas.getByLabelText("Menu");
    await new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
    await expect(navbar).toHaveClass("--hover-hamburger-menu");
    const navItems = canvasElement.querySelector(".m-navbar__items") as HTMLElement;
    const computedStyle = getComputedStyle(navItems);
    await expect(computedStyle.opacity).toBe("0");
    await userEvent.hover(hamburger);
    await expect(navbar).toHaveClass("--hover-hamburger-menu");
  },
  parameters: {
    docs: {
      description: {
        story: "**Experimental**: CSS-only hover activation for hamburger menu. Provides instant access without requiring clicks, using pure CSS hover states."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const E=["Default","WithSideMenu","WithSideLeftMenu","WithFloatMenu","WithHoverMenu"];export{v as Default,p as WithFloatMenu,h as WithHoverMenu,g as WithSideLeftMenu,d as WithSideMenu,E as __namedExportsOrder,k as default};
