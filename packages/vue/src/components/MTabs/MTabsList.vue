<script setup lang="ts">
const nextTabIndex = (key: string, current: number, length: number): number | undefined => {
  switch (key) {
    case "ArrowRight": {
      return (current + 1) % length;
    }
    case "ArrowLeft": {
      return (current - 1 + length) % length;
    }
    case "Home": {
      return 0;
    }
    case "End": {
      return length - 1;
    }
    default: {
      return undefined;
    }
  }
};

// NOTE: Arrow keys only move focus (manual activation in the WAI-ARIA tabs pattern); the tab is activated by Enter/Space on the focused button.
// Automatic activation would emit click on every arrow key, which is costly when switching tabs navigates or fetches data.
const onKeydown = (event: KeyboardEvent) => {
  if (event.defaultPrevented || !(event.currentTarget instanceof HTMLElement)) return;
  const tabs = [...event.currentTarget.querySelectorAll<HTMLElement>("[role=\"tab\"]:not(:disabled)")];
  const current = tabs.indexOf(document.activeElement as HTMLElement);
  if (current === -1) return;
  const next = nextTabIndex(event.key, current, tabs.length);
  if (next === undefined) return;
  event.preventDefault();
  tabs[next]?.focus();
};
</script>

<template>
  <div class="m-tabs__list" role="tablist" @keydown="onKeydown">
    <slot />
  </div>
</template>
