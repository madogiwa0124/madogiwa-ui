<script setup lang="ts">
import { MAccordionContent, MAccordionSummary } from "./index";
const {
  transition = false,
  outline = false,
} = defineProps<{
  transition?: boolean;
  outline?: boolean;
}>();
</script>

<template>
  <details
    class="m-accordion"
    :class="[
      { '--transition': transition },
      { '--outline': outline }
    ]"
  >
    <MAccordionSummary v-if="$slots['summary']">
      <slot name="summary" />
    </MAccordionSummary>
    <MAccordionContent v-if="$slots['default']">
      <slot />
    </MAccordionContent>
  </details>
</template>
