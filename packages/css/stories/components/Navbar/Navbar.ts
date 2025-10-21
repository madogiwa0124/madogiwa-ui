export interface NavbarProperties {
  title?: string;
  items?: Array<{ text: string; href: string; end?: boolean; icon?: string }>;
  buttons?: Array<{ text: string; variant?: "primary" | "secondary"; icon?: string }>;
  transition?: boolean;
  hoverMenu?: boolean;
  showMenu?: boolean;
  menuVariant?: "side" | "float" | "slide-left";
  className?: string;
  noHamburger?: boolean;
  menuToggleByJS?: boolean;
}

export const createNavbar = (
  props: NavbarProperties = {},
): HTMLElement => {
  const {
    title = "Brand Name",
    items = [],
    buttons = [],
    transition = false,
    hoverMenu = false,
    showMenu = false,
    menuVariant,
    noHamburger = true,
    menuToggleByJS = false,
  } = props;

  const container = document.createElement("div");
  const transitionClass = transition ? " --transition" : "";
  const hoverClass = hoverMenu ? " --hover-hamburger-menu" : "";

  const menuVariantClass = menuVariant
    ? {
        "float": " --mobile-float-menu",
        "side": " --mobile-side-menu",
        "slide-left": " --mobile-side-menu --slide-left",
      }[menuVariant]
    : "";

  const navigationItems = items.map(item =>
    `<a href="${item.href}" class="m-navbar__item${item.end ? " --end" : ""}">${item.text}</a>`,
  ).join("");

  const actionButtons = buttons.map(button =>
    `<button class="m-btn${button.variant === "primary" ? " --primary" : ""}">${button.text}</button>`,
  ).join("");

  const buttonsSection = buttons.length > 0
    ? `
    <div class="m-navbar__item --end">
      ${actionButtons}
    </div>`
    : "";

  const hamburgerSection = `
    <div class="m-navbar__hamburger">
      <button class="m-navbar__hamburger-menu" aria-label="Menu" aria-expanded="${String(showMenu)}" aria-controls="navigation-menu"></button>
    </div>
  `;

  container.innerHTML = `
    <nav role="navigation" class="m-navbar${transitionClass}${hoverClass}${menuVariantClass}">
      ${menuVariant == "slide-left" ? hamburgerSection : ""}
      <a href="#" class="m-navbar__title">${title}</a>
      <div class="m-navbar__items" id="navigation-menu">
        ${navigationItems}
        ${buttonsSection}
      </div>
      ${noHamburger || menuVariant == "slide-left" ? "" : hamburgerSection}
    </nav>
  `.trim();

  if (menuToggleByJS && !noHamburger) {
    const hamburgerMenu = container.querySelector(".m-navbar__hamburger-menu") as HTMLButtonElement;
    hamburgerMenu.addEventListener("click", () => {
      const isExpanded = hamburgerMenu.getAttribute("aria-expanded") === "true";
      hamburgerMenu.setAttribute("aria-expanded", String(!isExpanded));
    });
  }

  return container;
};

export type NavbarStoryProperties = {
  title: string;
  items: Array<{ text: string; href: string; end?: boolean; icon?: string }>;
  buttons: Array<{ text: string; variant?: "primary" | "secondary"; icon?: string }>;
  transition: boolean;
  hoverMenu: boolean;
  showHamburger: boolean;
  showMenu: boolean;
  menuVariant: "side" | "float";
};
