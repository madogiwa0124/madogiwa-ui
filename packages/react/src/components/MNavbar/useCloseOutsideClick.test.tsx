import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { useCloseOutsideClick } from "./useCloseOutsideClick";
import { useRef } from "react";

const Harness = ({ enabled, onClose }: { enabled: boolean; onClose: () => void }) => {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLButtonElement>(null);
  useCloseOutsideClick({ enabled, insideRefs: [firstRef, secondRef], onClose });
  return (
    <>
      <div ref={firstRef}>
        <button type="button">Inside first</button>
      </div>
      <button ref={secondRef} type="button">Inside second</button>
      <button type="button">Outside</button>
    </>
  );
};

describe("useCloseOutsideClick", () => {
  it("calls onClose when clicking outside every inside element", async () => {
    const onClose = vi.fn();
    const screen = await render(<Harness enabled onClose={onClose} />);
    await screen.getByRole("button", { name: "Outside" }).click();
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("does not call onClose when clicking a descendant of an inside element", async () => {
    const onClose = vi.fn();
    const screen = await render(<Harness enabled onClose={onClose} />);
    await screen.getByRole("button", { name: "Inside first" }).click();
    await screen.getByRole("button", { name: "Inside second" }).click();
    expect(onClose).not.toHaveBeenCalled();
  });

  it("does not listen while disabled", async () => {
    const onClose = vi.fn();
    const screen = await render(<Harness enabled={false} onClose={onClose} />);
    await screen.getByRole("button", { name: "Outside" }).click();
    expect(onClose).not.toHaveBeenCalled();
  });

  it("stops listening when enabled turns false", async () => {
    const onClose = vi.fn();
    const screen = await render(<Harness enabled onClose={onClose} />);
    await screen.rerender(<Harness enabled={false} onClose={onClose} />);
    await screen.getByRole("button", { name: "Outside" }).click();
    expect(onClose).not.toHaveBeenCalled();
  });

  it("removes the listener on unmount", async () => {
    const onClose = vi.fn();
    const screen = await render(<Harness enabled onClose={onClose} />);
    await screen.unmount();
    document.body.click();
    expect(onClose).not.toHaveBeenCalled();
  });
});
