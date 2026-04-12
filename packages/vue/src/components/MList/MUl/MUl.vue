<script lang="ts" setup>
defineProps<{
  none?: boolean;
  inline?: boolean;
}>();
</script>
<template>
  <ul
    class="m-ul"
    :class="[{ '--none': none }, { '--inline': inline }]"
  >
    <slot />
  </ul>
</template>
