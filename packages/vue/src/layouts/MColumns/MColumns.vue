<script setup lang="ts">
const {
  columnsLength = null,
  autoFit = false,
  noGap = false,
  alignRows = false,
} = defineProps<{
  columnsLength?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | null;
  autoFit?: boolean;
  noGap?: boolean;
  alignRows?: boolean;
}>();
</script>

<template>
  <div
    class="m-columns"
    :class="[
      { '--auto-fit': autoFit },
      { '--no-gap': noGap },
      { '--align-rows': alignRows }
    ]"
    :data-columns-length="columnsLength"
  >
    <slot />
  </div>
</template>
