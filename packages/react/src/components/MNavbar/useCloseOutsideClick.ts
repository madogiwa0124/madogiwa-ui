import { type RefObject, useEffect } from "react";

export type UseCloseOutsideClickOptions = {
  enabled: boolean;
  insideRefs: readonly RefObject<HTMLElement | null>[];
  onClose: () => void;
};

// NOTE: Unlike the Vue composable, no setTimeout is needed to skip the click that opened the menu: that click lands on the hamburger button, which is one of the inside elements.
export const useCloseOutsideClick = ({ enabled, insideRefs, onClose }: UseCloseOutsideClickOptions) => {
  useEffect(() => {
    if (!enabled) return;

    // NOTE: Narrow to Node rather than HTMLElement so that clicks on SVG icons inside the menu are still recognized as inside.
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;
      const target = event.target;
      if (insideRefs.some(ref => ref.current?.contains(target))) return;
      onClose();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [enabled, insideRefs, onClose]);
};
