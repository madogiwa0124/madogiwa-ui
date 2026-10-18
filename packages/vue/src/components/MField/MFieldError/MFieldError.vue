<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from "vue";
import { useFieldContext } from "../fieldContext";

const field = useFieldContext();
const element = useTemplateRef<HTMLDivElement>("element");

const updateHasError = (): void => {
  if (field) field.hasError.value = (element.value?.textContent ?? "").trim() !== "";
};

// NOTE: The element is always rendered so that it works as a live region. Toggle its content instead of the element.
onMounted(() => {
  updateHasError();
  if (!field || !element.value) return;
  // NOTE: Watch the DOM instead of the slot, so that changes inside nested components are also detected.
  const observer = new MutationObserver(updateHasError);
  observer.observe(element.value, { childList: true, characterData: true, subtree: true });
  onBeforeUnmount(() => {
    observer.disconnect();
  });
});

onBeforeUnmount(() => {
  if (field) field.hasError.value = false;
});
</script>

<template>
  <div
    :id="field?.errorId.value"
    ref="element"
    class="m-field__error"
    aria-live="polite"
  >
    <slot />
  </div>
</template>
