import { MNavbar, MNavbarItem, MNavbarTitle } from "./index";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";

const items = (
  <>
    <MNavbarItem>
      <a href="/home">Home</a>
    </MNavbarItem>
    <MNavbarItem end>
      <button type="button">Sign Up</button>
    </MNavbarItem>
  </>
);

describe("MNavbar", () => {
  it("renders the title, items and hamburger in the order navbar.css expects", async () => {
    const screen = await render(
      <MNavbar title={<MNavbarTitle href="/">Madogiwa</MNavbarTitle>} mobileMenuVariant="float" transition aria-label="Main">
        {items}
      </MNavbar>,
    );
    const nav = screen.getByRole("navigation", { name: "Main" });
    await expect.element(nav).toHaveClass("m-navbar", "--mobile-float-menu", "--transition");
    const classes = [...nav.element().children].map(child => child.className);
    expect(classes).toEqual(["m-navbar__title", "m-navbar__items", "m-navbar__hamburger"]);
  });

  it("does not render the hamburger without a mobile menu variant", async () => {
    const screen = await render(<MNavbar>{items}</MNavbar>);
    await expect.element(screen.getByRole("button", { name: "Open menu" })).not.toBeInTheDocument();
  });

  it("adds the side menu classes for the side-left variant", async () => {
    const screen = await render(<MNavbar mobileMenuVariant="side-left">{items}</MNavbar>);
    await expect.element(screen.getByRole("navigation")).toHaveClass("--mobile-side-menu", "--slide-left");
  });

  it("toggles the menu with the hamburger button", async () => {
    const screen = await render(<MNavbar mobileMenuVariant="side">{items}</MNavbar>);
    const button = screen.getByRole("button", { name: "Open menu" });
    await expect.element(button).toHaveAttribute("aria-expanded", "false");
    await expect.element(button).toHaveAttribute("aria-controls", screen.getByRole("list").element().id);
    await button.click();
    const closeButton = screen.getByRole("button", { name: "Close menu" });
    await expect.element(closeButton).toHaveAttribute("aria-expanded", "true");
    await closeButton.click();
    await expect.element(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the menu when the mobile menu variant changes", async () => {
    const screen = await render(<MNavbar mobileMenuVariant="side">{items}</MNavbar>);
    await screen.getByRole("button", { name: "Open menu" }).click();
    await screen.rerender(<MNavbar>{items}</MNavbar>);
    await screen.rerender(<MNavbar mobileMenuVariant="side">{items}</MNavbar>);
    await expect.element(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });

  it("uses the given menu labels", async () => {
    const screen = await render(<MNavbar mobileMenuVariant="side" openMenuLabel="メニューを開く">{items}</MNavbar>);
    await expect.element(screen.getByRole("button", { name: "メニューを開く" })).toBeInTheDocument();
  });

  it("closes the menu on an outside click when closeOutsideClick is set", async () => {
    const screen = await render(
      <>
        <MNavbar mobileMenuVariant="side" closeOutsideClick>{items}</MNavbar>
        <p>Outside</p>
      </>,
    );
    await screen.getByRole("button", { name: "Open menu" }).click();
    await screen.getByRole("button", { name: "Sign Up" }).click();
    await expect.element(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
    await screen.getByText("Outside").click();
    await expect.element(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps the menu open on an outside click without closeOutsideClick", async () => {
    const screen = await render(
      <>
        <MNavbar mobileMenuVariant="side">{items}</MNavbar>
        <p>Outside</p>
      </>,
    );
    await screen.getByRole("button", { name: "Open menu" }).click();
    await screen.getByText("Outside").click();
    await expect.element(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
  });
});

describe("MNavbarTitle", () => {
  it("renders a link when href is given", async () => {
    const screen = await render(<MNavbarTitle href="/">Madogiwa</MNavbarTitle>);
    const link = screen.getByRole("link", { name: "Madogiwa" });
    await expect.element(link).toHaveClass("m-navbar__title");
    await expect.element(link).toHaveAttribute("href", "/");
  });

  it("renders a span without href", async () => {
    const screen = await render(<MNavbarTitle>Madogiwa</MNavbarTitle>);
    const title = screen.getByText("Madogiwa");
    await expect.element(title).toHaveClass("m-navbar__title");
    expect(title.element().tagName).toBe("SPAN");
    await expect.element(title).not.toHaveAttribute("href");
  });
});

describe("MNavbarItem", () => {
  it("adds the end modifier class", async () => {
    const screen = await render(<ul><MNavbarItem end>Item</MNavbarItem></ul>);
    await expect.element(screen.getByRole("listitem")).toHaveClass("m-navbar__item", "--end");
  });
});
