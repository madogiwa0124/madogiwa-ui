<script setup lang="ts">
const props = defineProps<{
  transition?: boolean;
  scrollhint?: boolean;
}>();
</script>

<template>
  <div
    class="m-tabs"
    :class="[
      { '--transition': props.transition },
      { '--scrollhint': props.scrollhint }
    ]"
  >
    <slot />
  </div>
</template>
