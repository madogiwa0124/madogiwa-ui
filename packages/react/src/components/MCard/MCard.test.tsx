import { MCard, MCardContent, MCardFooter, MCardImage } from "./index";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";

describe("MCard", () => {
  it("renders a card with the m-card class", async () => {
    const screen = await render(<MCard data-testid="card" />);
    await expect.element(screen.getByTestId("card")).toHaveAttribute("class", "m-card");
  });

  it("adds the floating modifier class", async () => {
    const screen = await render(<MCard floating data-testid="card" />);
    await expect.element(screen.getByTestId("card")).toHaveClass("m-card", "--floating");
  });

  it("renders the composed image, content and footer in order", async () => {
    const screen = await render(
      <MCard data-testid="card">
        <MCardImage src="/sample.png" alt="Sample image" />
        <MCardContent>Body</MCardContent>
        <MCardFooter>Actions</MCardFooter>
      </MCard>,
    );
    const classes = [...screen.getByTestId("card").element().children].map(child => child.className);
    expect(classes).toEqual(["m-card__image", "m-card__content", "m-card__footer"]);
  });
});

describe("MCardContent", () => {
  it("renders content with the m-card__content class", async () => {
    const screen = await render(<MCardContent>Body</MCardContent>);
    await expect.element(screen.getByText("Body")).toHaveClass("m-card__content");
  });
});

describe("MCardFooter", () => {
  it("renders a footer with the m-card__footer class", async () => {
    const screen = await render(<MCardFooter>Actions</MCardFooter>);
    await expect.element(screen.getByText("Actions")).toHaveClass("m-card__footer");
  });
});

describe("MCardImage", () => {
  it("renders an image with the m-card__image class and alt text", async () => {
    const screen = await render(<MCardImage src="/sample.png" alt="Sample image" />);
    const image = screen.getByRole("img", { name: "Sample image" });
    await expect.element(image).toHaveClass("m-card__image");
    await expect.element(image).toHaveAttribute("src", "/sample.png");
  });

  it("requires src and alt at the type level", () => {
    // @ts-expect-error alt is required so that the image is never rendered without alternative text
    expect(<MCardImage src="/sample.png" />).toBeTruthy();
  });

  it("passes native img attributes such as loading through to the img", async () => {
    const screen = await render(<MCardImage src="/sample.png" alt="Sample image" loading="lazy" />);
    const image = screen.getByRole("img", { name: "Sample image" });
    await expect.element(image).toHaveAttribute("loading", "lazy");
  });
});
