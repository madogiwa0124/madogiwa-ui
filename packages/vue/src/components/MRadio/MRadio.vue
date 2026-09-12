<script lang="ts" setup>
const modelValue = defineModel<string>({ default: "" });
</script>
<template>
  <input
    v-model="modelValue"
    type="radio"
    class="m-radio"
  >
</template>
