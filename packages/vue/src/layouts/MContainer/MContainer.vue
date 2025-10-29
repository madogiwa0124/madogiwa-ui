<script setup lang="ts">
import { computed } from "vue";

const { padding, noCentering } = defineProps<{
  padding?: boolean;
  noCentering?: boolean;
}>();

const modifiers = computed(() => ({
  "--padding": padding,
  "--no-centering": noCentering,
}));
</script>
<template>
  <div class="m-container" :class="modifiers">
    <slot />
  </div>
</template>
