import { MH1, MH2, MH3, MH4, MH5, MH6 } from "./index";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";

describe("MHeading", () => {
  it.each([
    { Heading: MH1, level: 1 },
    { Heading: MH2, level: 2 },
    { Heading: MH3, level: 3 },
    { Heading: MH4, level: 4 },
    { Heading: MH5, level: 5 },
    { Heading: MH6, level: 6 },
  ])("renders an h$level heading with the m-h$level class", async ({ Heading, level }) => {
    const screen = await render(<Heading className="custom">Title</Heading>);
    await expect.element(screen.getByRole("heading", { level, name: "Title" })).toHaveClass(`m-h${String(level)}`, "custom");
  });
});
