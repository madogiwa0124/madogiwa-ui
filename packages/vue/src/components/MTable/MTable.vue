<script lang="ts" setup>
const {
  stripe = false,
  bordered = false,
  hoverable = false,
  fullWidth = false,
  transition = false,
} = defineProps<{
  stripe?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
  transition?: boolean;
}>();
</script>
<template>
  <table
    class="m-table"
    :class="[
      { '--stripe': stripe },
      { '--bordered': bordered },
      { '--hoverable': hoverable },
      { '--full-width': fullWidth },
      { '--transition': transition },
    ]"
  >
    <slot />
  </table>
</template>
