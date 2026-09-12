<script lang="ts" setup>
const modelValue = defineModel<string>({ default: "" });

defineProps<{
  block?: boolean;
  error?: boolean;
  autoFit?: boolean;
}>();
</script>
<template>
  <textarea
    v-model="modelValue"
    class="m-textarea"
    :class="[
      { '--block': block },
      { '--error': error },
      { '--auto-fit': autoFit }
    ]"
  />
</template>
