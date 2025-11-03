<script lang="ts" setup>
const modelValue = defineModel<boolean>();
</script>
<template>
  <input
    v-model="modelValue"
    type="checkbox"
    class="m-toggle"
  >
</template>
