<script lang="ts" setup>
const modelValue = defineModel<string | number>();

defineProps<{
  block?: boolean;
  error?: boolean;
  transition?: boolean;
  type?: string;
}>();
</script>
<template>
  <input
    v-model="modelValue"
    :type="type || 'text'"
    class="m-input"
    :class="[
      { '--block': block },
      { '--error': error },
      { '--transition': transition }
    ]"
  >
</template>
