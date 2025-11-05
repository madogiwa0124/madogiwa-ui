import { mount } from "@vue/test-utils";
import { defineComponent, h, ref } from "vue";
import { useCloseOutsideClick } from "./composable";
import { describe, expect, it, vi } from "vitest";

const buildTestComponent = (insideElementsCount: number, onClose: () => void) => {
  return defineComponent({
    setup() {
      const insideRefs = Array.from({ length: insideElementsCount }, () => ref<HTMLElement | null>(null));
      const { attachOutsideClickListener, detachOutsideClickListener } = useCloseOutsideClick({
        getInsideElements: () => insideRefs.map(r => r.value).filter(Boolean) as HTMLElement[],
        onClose,
      });

      return {
        insideRefs,
        attachOutsideClickListener,
        detachOutsideClickListener,
      };
    },
    render() {
      return h("div", this.insideRefs.map((insideRef, index) =>
        h("div", { ref: insideRef, class: `inside${String(index + 1)}` }, `Inside ${String(index + 1)}`),
      ));
    },
  });
};

describe("useCloseOutsideClick", () => {
  it("calls onClose when clicking outside the inside elements", async () => {
    const onClose = vi.fn();

    const TestComponent = buildTestComponent(1, onClose);

    const wrapper = mount(TestComponent, {
      attachTo: document.body,
    });

    // Attach listener
    const timeoutId = wrapper.vm.attachOutsideClickListener();
    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });

    // Click outside
    const outsideElement = document.createElement("div");
    document.body.append(outsideElement);
    const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });
    outsideElement.dispatchEvent(clickEvent);
    await wrapper.vm.$nextTick();

    expect(onClose).toHaveBeenCalledTimes(1);

    wrapper.vm.detachOutsideClickListener(timeoutId);
    outsideElement.remove();
    wrapper.unmount();
  });

  it("does not call onClose when clicking inside the inside elements", async () => {
    const onClose = vi.fn();
    const TestComponent = buildTestComponent(1, onClose);

    const wrapper = mount(TestComponent, {
      attachTo: document.body,
    });

    // Attach listener
    const timeoutId = wrapper.vm.attachOutsideClickListener();
    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });

    // Click inside
    const insideElement = wrapper.find(".inside1");
    await insideElement.trigger("click");
    await wrapper.vm.$nextTick();

    expect(onClose).not.toHaveBeenCalled();

    wrapper.vm.detachOutsideClickListener(timeoutId);
    wrapper.unmount();
  });

  it("handles multiple inside elements correctly", async () => {
    const onClose = vi.fn();
    const TestComponent = buildTestComponent(2, onClose);

    const wrapper = mount(TestComponent, {
      attachTo: document.body,
    });

    // Attach listener
    const timeoutId = wrapper.vm.attachOutsideClickListener();
    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });

    // Click inside first element
    const insideElement1 = wrapper.find(".inside1");
    await insideElement1.trigger("click");
    await wrapper.vm.$nextTick();
    expect(onClose).not.toHaveBeenCalled();

    // Click inside second element
    const insideElement2 = wrapper.find(".inside2");
    await insideElement2.trigger("click");
    await wrapper.vm.$nextTick();
    expect(onClose).not.toHaveBeenCalled();

    // Click outside
    const outsideElement = document.createElement("div");
    document.body.append(outsideElement);
    const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });
    outsideElement.dispatchEvent(clickEvent);
    await wrapper.vm.$nextTick();
    expect(onClose).toHaveBeenCalledTimes(1);

    wrapper.vm.detachOutsideClickListener(timeoutId);
    outsideElement.remove();
    wrapper.unmount();
  });

  it("detaches listener correctly and stops triggering onClose", async () => {
    const onClose = vi.fn();
    const TestComponent = buildTestComponent(1, onClose);

    const wrapper = mount(TestComponent, {
      attachTo: document.body,
    });

    // Attach listener
    const timeoutId = wrapper.vm.attachOutsideClickListener();
    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });

    // Detach listener immediately
    wrapper.vm.detachOutsideClickListener(timeoutId);

    // Click outside
    const outsideElement = document.createElement("div");
    document.body.append(outsideElement);
    const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });
    outsideElement.dispatchEvent(clickEvent);
    await wrapper.vm.$nextTick();

    // Should not be called because listener was detached
    expect(onClose).not.toHaveBeenCalled();

    outsideElement.remove();
    wrapper.unmount();
  });

  it("does not attach listener when document is not available", () => {
    const onClose = vi.fn();

    const TestComponent = buildTestComponent(1, onClose);

    const wrapper = mount(TestComponent);

    // Should return undefined when document is not available
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(wrapper.vm.result).toBeUndefined();

    wrapper.unmount();
  });
});
