import type { Meta, StoryObj } from "@storybook/html";
import { expect, within } from "storybook/test";

interface NavbarProperties {
  title: string;
  items: Array<{ text: string; href: string; end?: boolean; icon?: string }>;
  buttons: Array<{ text: string; variant?: "primary" | "secondary"; icon?: string }>;
  transition: boolean;
  hoverMenu: boolean;
  showHamburger: boolean;
}

const meta: Meta<NavbarProperties> = {
  title: "Components/Navbar",
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Title/brand text for the navbar",
    },
    items: {
      control: { type: "object" },
      description: "Navigation items array",
    },
    buttons: {
      control: { type: "object" },
      description: "Action buttons array",
    },
    transition: {
      control: { type: "boolean" },
      description: "Enable transition effects",
      defaultValue: true,
    },
    hoverMenu: {
      control: { type: "boolean" },
      description: "Enable hover-based hamburger menu",
      defaultValue: true,
    },
    showHamburger: {
      control: { type: "boolean" },
      description: "Show hamburger menu on mobile",
      defaultValue: true,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `example description`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<NavbarProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const transitionClass = args.transition ? " --transition" : "";
    const hoverClass = args.hoverMenu ? " --hover-hamburger-menu" : "";

    const navigationItems = args.items.map(item =>
      `<a href="${item.href}" class="navbar__item${item.end ? " --end" : ""}">${item.text}</a>`,
    ).join("");

    const actionButtons = args.buttons.map(button =>
      `<button class="btn${button.variant === "primary" ? " --primary" : ""}">${button.text}</button>`,
    ).join("");

    const hamburgerSection = args.showHamburger
      ? `
      <div class="navbar__hamburger">
        <button class="hamburger-menu" aria-label="Menu" aria-expanded="false"></button>
      </div>`
      : "";

    container.innerHTML = `
      <nav role="navigation" class="navbar${transitionClass}${hoverClass}">
        <a href="#" class="navbar__title">${args.title}</a>
        <div class="navbar__items" id="navigation-menu">
          ${navigationItems}
          <div class="navbar__item --end">
            ${actionButtons}
          </div>
        </div>
        ${hamburgerSection}
      </nav>
    `;

    return container;
  },
  args: {
    title: "Brand Name",
    items: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Services", href: "#" },
      { text: "Contact", href: "#" },
    ],
    buttons: [
      { text: "Login", variant: "secondary" },
      { text: "Sign Up", variant: "primary" },
    ],
    transition: true,
    hoverMenu: true,
    showHamburger: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByRole("navigation");
    const title = canvas.getByText("Brand Name");
    const hamburger = canvas.getByLabelText("Menu");

    await expect(navbar).toHaveClass("navbar");
    await expect(title).toBeInTheDocument();
    await expect(hamburger).toBeInTheDocument();
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");

    // Check navigation items
    const homeLink = canvas.getByText("Home");
    const aboutLink = canvas.getByText("About");
    await expect(homeLink).toBeInTheDocument();
    await expect(aboutLink).toBeInTheDocument();

    // Check buttons
    const loginButton = canvas.getByText("Login");
    const signupButton = canvas.getByText("Sign Up");
    await expect(loginButton).toBeInTheDocument();
    await expect(signupButton).toBeInTheDocument();
  },
};

export const MinimalNavbar: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const transitionClass = args.transition ? " --transition" : "";
    const hoverClass = args.hoverMenu ? " --hover-hamburger-menu" : "";

    const navigationItems = args.items.map(item =>
      `<a href="${item.href}" class="navbar__item">${item.text}</a>`,
    ).join("");

    const hamburgerSection = args.showHamburger
      ? `
      <div class="navbar__hamburger">
        <button class="hamburger-menu" aria-label="Menu" aria-expanded="false"></button>
      </div>`
      : "";

    container.innerHTML = `
      <nav role="navigation" class="navbar${transitionClass}${hoverClass}">
        <a href="#" class="navbar__title">${args.title}</a>
        <div class="navbar__items" id="navigation-menu">
          ${navigationItems}
        </div>
        ${hamburgerSection}
      </nav>
    `;

    return container;
  },
  args: {
    title: "Simple Brand",
    items: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Contact", href: "#" },
    ],
    buttons: [],
    transition: false,
    hoverMenu: false,
    showHamburger: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByRole("navigation");
    const title = canvas.getByText("Simple Brand");

    await expect(navbar).toBeInTheDocument();
    await expect(title).toBeInTheDocument();

    const homeLink = canvas.getByText("Home");
    const aboutLink = canvas.getByText("About");
    const contactLink = canvas.getByText("Contact");

    await expect(homeLink).toBeInTheDocument();
    await expect(aboutLink).toBeInTheDocument();
    await expect(contactLink).toBeInTheDocument();
  },
};

export const WithIcons: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const transitionClass = args.transition ? " --transition" : "";
    const hoverClass = args.hoverMenu ? " --hover-hamburger-menu" : "";

    const navigationItems = args.items.map(item =>
      `<a href="${item.href}" class="navbar__item">
        <span class="icon">${item.icon ?? ""}</span>
        ${item.text}
      </a>`,
    ).join("");

    const actionButtons = args.buttons.map(button =>
      `<button class="btn${button.variant === "primary" ? " --primary" : ""}">
        ${button.icon ? `<span class="icon">${button.icon}</span>` : ""}
        ${button.text}
      </button>`,
    ).join("");

    const hamburgerSection = args.showHamburger
      ? `
      <div class="navbar__hamburger">
        <button class="hamburger-menu" aria-label="Menu" aria-expanded="false"></button>
      </div>`
      : "";

    container.innerHTML = `
      <nav role="navigation" class="navbar${transitionClass}${hoverClass}">
        <a href="#" class="navbar__title">
          <span class="icon">🏢</span>
          ${args.title}
        </a>
        <div class="navbar__items" id="navigation-menu">
          ${navigationItems}
          <div class="navbar__item --end">
            ${actionButtons}
          </div>
        </div>
        ${hamburgerSection}
      </nav>
    `;

    return container;
  },
  args: {
    title: "IconApp",
    items: [
      { text: "About", href: "#", icon: "ℹ️" },
      { text: "Services", href: "#", icon: "⚙️" },
      { text: "Contact", href: "#", icon: "📧" },
    ],
    buttons: [
      { text: "Login", variant: "secondary", icon: "👤" },
      { text: "Sign Up", variant: "primary", icon: "✨" },
    ],
    transition: true,
    hoverMenu: true,
    showHamburger: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByRole("navigation");
    const icons = canvasElement.querySelectorAll(".icon");

    await expect(navbar).toBeInTheDocument();
    await expect(icons.length).toBeGreaterThan(0);

    const brandIcon = canvasElement.querySelector(".navbar__title .icon");
    await expect(brandIcon).toBeInTheDocument();
  },
};

export const NoHamburger: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const transitionClass = args.transition ? " --transition" : "";

    const navigationItems = args.items.map(item =>
      `<a href="${item.href}" class="navbar__item">${item.text}</a>`,
    ).join("");

    const actionButtons = args.buttons.map(button =>
      `<button class="btn${button.variant === "primary" ? " --primary" : ""}">${button.text}</button>`,
    ).join("");

    container.innerHTML = `
      <nav role="navigation" class="navbar${transitionClass}">
        <a href="#" class="navbar__title">${args.title}</a>
        <div class="navbar__items">
          ${navigationItems}
          <div class="navbar__item --end">
            ${actionButtons}
          </div>
        </div>
      </nav>
    `;

    return container;
  },
  args: {
    title: "Desktop Only",
    items: [
      { text: "Dashboard", href: "#" },
      { text: "Analytics", href: "#" },
      { text: "Settings", href: "#" },
    ],
    buttons: [
      { text: "Profile", variant: "secondary" },
      { text: "Logout", variant: "primary" },
    ],
    transition: true,
    hoverMenu: false,
    showHamburger: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByRole("navigation");
    const title = canvas.getByText("Desktop Only");

    await expect(navbar).toBeInTheDocument();
    await expect(title).toBeInTheDocument();

    const hamburger = canvasElement.querySelector(".hamburger-menu");
    await expect(hamburger).not.toBeInTheDocument();
  },
};
