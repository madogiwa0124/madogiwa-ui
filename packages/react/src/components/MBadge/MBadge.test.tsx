import { describe, expect, it } from "vitest";
import { MBadge } from "./index";
import { render } from "vitest-browser-react";

describe("MBadge", () => {
  it("renders a span with the m-badge class by default", async () => {
    const screen = await render(<MBadge>New</MBadge>);
    const badge = screen.getByText("New");
    await expect.element(badge).toHaveAttribute("class", "m-badge");
    expect(badge.element().tagName).toBe("SPAN");
  });

  it("adds the variant and modifier classes", async () => {
    const screen = await render(<MBadge variant="danger" outline small rounded transition>New</MBadge>);
    await expect.element(screen.getByText("New")).toHaveClass("--danger", "--outline", "--small", "--rounded", "--transition");
  });

  it("renders as a link with its attributes when as is a", async () => {
    const screen = await render(<MBadge as="a" href="/news">New</MBadge>);
    await expect.element(screen.getByRole("link", { name: "New" })).toHaveAttribute("href", "/news");
  });

  it("renders as a button when as is button", async () => {
    const screen = await render(<MBadge as="button" type="button">New</MBadge>);
    await expect.element(screen.getByRole("button", { name: "New" })).toHaveClass("m-badge");
  });

  it("type-checks props against the element chosen by as", () => {
    // @ts-expect-error href is not a span attribute, so it requires as="a"
    expect(<MBadge href="/news">New</MBadge>).toBeTruthy();
  });
});
