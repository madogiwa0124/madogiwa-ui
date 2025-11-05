import { onMounted, onUnmounted, ref } from "vue";

export const useCloseOutsideClick = ({ getInsideElements, onClose }: {
  getInsideElements: () => HTMLElement[];
  onClose: () => void;
}) => {
  const watchDocument = ref<Document | null>(null);
  const insideElements = ref<HTMLElement[]>([]);

  onMounted(() => {
    watchDocument.value = document;
    insideElements.value = getInsideElements();
  });

  onUnmounted(() => {
    detachOutsideClickListener();
  });

  const handleClickOutside = (event: MouseEvent, insideElements: HTMLElement[]) => {
    const target = event.target as HTMLElement;
    const isOutside = (element: HTMLElement | null, clicked: HTMLElement) => element && !element.contains(clicked);

    const isOutsideAll = insideElements.every(el => isOutside(el, target));
    if (isOutsideAll) onClose();
  };

  const handleClick = (event: MouseEvent) => {
    handleClickOutside(event, insideElements.value);
  };

  const attachOutsideClickListener = (): ReturnType<typeof setTimeout> | undefined => {
    if (!watchDocument.value) return undefined;
    // Use setTimeout to avoid immediate trigger from the same click that opened the menu
    return setTimeout(() => {
      watchDocument.value?.addEventListener("click", handleClick);
    }, 0);
  };

  const detachOutsideClickListener = (listenerId?: ReturnType<typeof setTimeout>): void => {
    if (listenerId !== undefined) clearTimeout(listenerId);
    watchDocument.value?.removeEventListener("click", handleClick);
  };

  return {
    attachOutsideClickListener,
    detachOutsideClickListener,
  };
};
