<script lang="ts" setup>
const modelValue = defineModel<string | number>({ default: "" });

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
    :aria-invalid="error || undefined"
  >
    <slot />
  </select>
</template>
