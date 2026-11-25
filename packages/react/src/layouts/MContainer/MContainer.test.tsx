import { describe, expect, it } from "vitest";
import { MContainer } from "./index";
import { render } from "vitest-browser-react";

describe("MContainer", () => {
  it("renders a container with the m-container class", async () => {
    const screen = await render(<MContainer data-testid="container" />);
    await expect.element(screen.getByTestId("container")).toHaveAttribute("class", "m-container");
  });

  it("adds the padding and no-centering modifier classes", async () => {
    const screen = await render(<MContainer padding noCentering data-testid="container" />);
    await expect.element(screen.getByTestId("container")).toHaveClass("--padding", "--no-centering");
  });
});
