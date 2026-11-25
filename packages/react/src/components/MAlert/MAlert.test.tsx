import { MAlert, MAlertActions, MAlertContent, MAlertIcons } from "./index";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";

describe("MAlert", () => {
  it("renders an alert with the m-alert class", async () => {
    const screen = await render(<MAlert>Saved</MAlert>);
    const alert = screen.getByRole("alert");
    await expect.element(alert).toHaveAttribute("class", "m-alert");
    await expect.element(alert).not.toHaveAttribute("data-auto-dismiss");
  });

  it("adds the variant and progress modifiers and the auto dismiss duration", async () => {
    const screen = await render(<MAlert variant="danger" withProgress autoDismiss="5s">Failed</MAlert>);
    const alert = screen.getByRole("alert");
    await expect.element(alert).toHaveClass("m-alert", "--danger", "--with-progress");
    await expect.element(alert).toHaveAttribute("data-auto-dismiss", "5s");
  });

  it("renders the composed icons, content and actions in order", async () => {
    const screen = await render(
      <MAlert>
        <MAlertIcons>i</MAlertIcons>
        <MAlertContent>Saved</MAlertContent>
        <MAlertActions>
          <button type="button">Undo</button>
        </MAlertActions>
      </MAlert>,
    );
    const classes = [...screen.getByRole("alert").element().children].map(child => child.className);
    expect(classes).toEqual(["m-alert__icons", "m-alert__content", "m-alert__actions"]);
  });
});
