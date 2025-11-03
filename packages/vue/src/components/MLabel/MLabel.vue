<script lang="ts" setup>
defineProps<{
  required?: boolean;
  disabled?: boolean;
}>();
</script>
<template>
  <label class="m-label" :class="[{ '--required': required, '--disabled': disabled }]">
    <slot />
  </label>
</template>
