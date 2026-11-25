import { MAccordion, MAccordionContent, MAccordionSummary } from "./index";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";

const Accordion = (props: { open?: boolean }) => (
  <MAccordion transition outline data-testid="accordion" {...props}>
    <MAccordionSummary>What is Madogiwa UI?</MAccordionSummary>
    <MAccordionContent>A modern CSS framework.</MAccordionContent>
  </MAccordion>
);

describe("MAccordion", () => {
  it("renders a details element with the modifier classes", async () => {
    const screen = await render(<Accordion />);
    await expect.element(screen.getByTestId("accordion")).toHaveClass("m-accordion", "--transition", "--outline");
    await expect.element(screen.getByText("What is Madogiwa UI?")).toHaveClass("m-accordion__summary");
  });

  it("toggles the content when the summary is clicked", async () => {
    const screen = await render(<Accordion />);
    const content = screen.getByText("A modern CSS framework.");
    await expect.element(content).not.toBeVisible();
    await screen.getByText("What is Madogiwa UI?").click();
    await expect.element(content).toBeVisible();
    await expect.element(content).toHaveClass("m-accordion__content");
  });

  it("starts expanded when open is passed", async () => {
    const screen = await render(<Accordion open />);
    await expect.element(screen.getByText("A modern CSS framework.")).toBeVisible();
  });
});
