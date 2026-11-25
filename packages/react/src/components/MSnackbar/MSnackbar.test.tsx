import { MSnackbar, MSnackbarActions, MSnackbarBody } from "./index";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";

describe("MSnackbar", () => {
  it("renders a manual popover with the modifier classes", async () => {
    const screen = await render(<MSnackbar open transition position="right-top" data-testid="snackbar">Saved</MSnackbar>);
    const snackbar = screen.getByTestId("snackbar");
    await expect.element(snackbar).toHaveClass("m-snackbar", "--transition", "--right-top");
    await expect.element(snackbar).toHaveAttribute("popover", "manual");
  });

  it("stays hidden when open is false", async () => {
    const screen = await render(<MSnackbar>Saved</MSnackbar>);
    await expect.element(screen.getByText("Saved")).not.toBeVisible();
  });

  it("shows the popover when open is true on mount", async () => {
    const screen = await render(<MSnackbar open data-testid="snackbar">Saved</MSnackbar>);
    const snackbar = screen.getByTestId("snackbar");
    await expect.element(snackbar).toBeVisible();
    expect(snackbar.element().matches(":popover-open")).toBe(true);
  });

  it("shows and hides the popover when the open prop changes", async () => {
    const screen = await render(<MSnackbar open={false}>Saved</MSnackbar>);
    await screen.rerender(<MSnackbar open>Saved</MSnackbar>);
    await expect.element(screen.getByText("Saved")).toBeVisible();
    await screen.rerender(<MSnackbar open={false}>Saved</MSnackbar>);
    await expect.element(screen.getByText("Saved")).not.toBeVisible();
  });

  it("nests the actions inside the body when composed", async () => {
    const screen = await render(
      <MSnackbar open>
        <MSnackbarBody>
          Saved
          <MSnackbarActions>
            <button type="button">Close</button>
          </MSnackbarActions>
        </MSnackbarBody>
      </MSnackbar>,
    );
    const actions = screen.getByRole("button", { name: "Close" }).element().parentElement;
    expect(actions?.className).toBe("m-snackbar__actions");
    expect(actions?.parentElement?.className).toBe("m-snackbar__body");
  });
});
