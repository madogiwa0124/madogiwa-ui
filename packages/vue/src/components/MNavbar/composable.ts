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

  const attachOutsideClickListener = (listener: (event: MouseEvent) => void, target: Document | null): ReturnType<typeof setTimeout> | undefined => {
    if (!target) return undefined;
    // Use setTimeout to avoid immediate trigger from the same click that opened the menu
    return setTimeout(() => {
      target.addEventListener("click", listener);
    }, 0);
  };

  const detachOutsideClickListener = (listener: (event: MouseEvent) => void, target: Document | null, listenerId?: ReturnType<typeof setTimeout>): void => {
    if (listenerId !== undefined) clearTimeout(listenerId);
    target?.removeEventListener("click", listener);
  };

  const attachDocumentOutsideClickListener = () => attachOutsideClickListener(handleClick, watchDocument.value);
  const detachDocumentOutsideClickListener = (listenerId?: ReturnType<typeof setTimeout>) => {
    detachOutsideClickListener(handleClick, watchDocument.value, listenerId);
  };

  onUnmounted(() => {
    detachDocumentOutsideClickListener();
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

  return {
    attachOutsideClickListener: attachDocumentOutsideClickListener,
    detachOutsideClickListener: detachDocumentOutsideClickListener,
  };
};
