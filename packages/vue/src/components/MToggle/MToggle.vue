<script lang="ts" setup>
const modelValue = defineModel<boolean>();
</script>
<template>
  <input
    v-model="modelValue"
    type="checkbox"
    role="switch"
    class="m-toggle"
  >
</template>
