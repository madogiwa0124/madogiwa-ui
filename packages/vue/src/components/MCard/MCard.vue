<script setup lang="ts">
import { MCardActions, MCardContent } from "./index";
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
    <MCardActions v-if="$slots['actions']">
      <slot name="actions" />
    </MCardActions>
  </div>
</template>
