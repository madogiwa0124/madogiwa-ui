import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { MDialog } from "./index";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";

const ControlledDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => { setOpen(true); }}>Open</button>
      <MDialog open={open} onClose={() => { setOpen(false); }}>Hello</MDialog>
      <output role="status">{open ? "opened" : "closed"}</output>
    </>
  );
};

describe("MDialog", () => {
  it("renders a dialog with the m-dialog class and modifier classes", async () => {
    const screen = await render(<MDialog open backdropBlur transition className="custom">Hello</MDialog>);
    await expect.element(screen.getByRole("dialog")).toHaveClass("m-dialog", "--backdrop-blur", "--transition", "custom");
  });

  it("stays closed when open is false", async () => {
    const screen = await render(<MDialog>Hello</MDialog>);
    await expect.element(screen.getByText("Hello")).not.toBeVisible();
  });

  it("opens as a modal when open is true on mount", async () => {
    const screen = await render(<MDialog open>Hello</MDialog>);
    const dialog = screen.getByRole("dialog");
    await expect.element(dialog).toBeVisible();
    expect(dialog.element().matches(":modal")).toBe(true);
  });

  it("opens and closes when the open prop changes", async () => {
    const screen = await render(<MDialog open={false}>Hello</MDialog>);
    await screen.rerender(<MDialog open>Hello</MDialog>);
    await expect.element(screen.getByRole("dialog")).toBeVisible();
    await screen.rerender(<MDialog open={false}>Hello</MDialog>);
    await expect.element(screen.getByText("Hello")).not.toBeVisible();
  });

  it("calls onClose when the dialog is closed with the Escape key", async () => {
    const onClose = vi.fn();
    const screen = await render(<MDialog open onClose={onClose}>Hello</MDialog>);
    await expect.element(screen.getByRole("dialog")).toBeVisible();
    await userEvent.keyboard("{Escape}");
    await vi.waitFor(() => {
      expect(onClose).toHaveBeenCalledOnce();
    });
  });

  it("can be reopened after being closed with the Escape key when used controlled", async () => {
    const screen = await render(<ControlledDialog />);
    await screen.getByRole("button", { name: "Open" }).click();
    await expect.element(screen.getByRole("dialog")).toBeVisible();
    await userEvent.keyboard("{Escape}");
    await expect.element(screen.getByRole("status")).toHaveTextContent("closed");
    await screen.getByRole("button", { name: "Open" }).click();
    await expect.element(screen.getByRole("dialog")).toBeVisible();
  });
});
