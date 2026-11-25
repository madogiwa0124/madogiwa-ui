import { describe, expect, it } from "vitest";
import { MLabel } from "./index";
import { render } from "vitest-browser-react";

describe("MLabel", () => {
  it("renders a label with the m-label class", async () => {
    const screen = await render(<MLabel>Name</MLabel>);
    await expect.element(screen.getByText("Name")).toHaveAttribute("class", "m-label");
  });

  it("adds the required and disabled modifier classes", async () => {
    const screen = await render(<MLabel required disabled>Name</MLabel>);
    await expect.element(screen.getByText("Name")).toHaveClass("--required", "--disabled");
  });

  it("labels the control referenced by htmlFor", async () => {
    const screen = await render(
      <>
        <MLabel htmlFor="name">Name</MLabel>
        <input id="name" />
      </>,
    );
    await expect.element(screen.getByLabelText("Name")).toHaveAttribute("id", "name");
  });
});
