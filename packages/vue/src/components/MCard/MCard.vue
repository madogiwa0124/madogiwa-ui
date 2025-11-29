<script setup lang="ts">
import { MCardContent, MCardFooter } from "./index";
const {
  floating = false,
} = defineProps<{
  floating?: boolean;
}>();
</script>

<template>
  <div
    class="m-card"
    :class="[
      { '--floating': floating }
    ]"
  >
    <slot name="image" />
    <MCardContent v-if="$slots['default']">
      <slot />
    </MCardContent>
    <MCardFooter v-if="$slots['footer']">
      <slot name="footer" />
    </MCardFooter>
  </div>
</template>
