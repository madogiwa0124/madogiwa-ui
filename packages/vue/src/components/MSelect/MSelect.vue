<script lang="ts" setup>
const modelValue = defineModel<string | number>();

defineProps<{
  error?: boolean;
}>();
</script>
<template>
  <select
    v-model="modelValue"
    class="m-select"
    :class="[
      { '--error': error }
    ]"
  >
    <slot />
  </select>
</template>
