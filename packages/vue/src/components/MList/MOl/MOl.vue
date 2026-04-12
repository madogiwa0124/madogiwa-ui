<script lang="ts" setup>
defineProps<{
  none?: boolean;
  inline?: boolean;
}>();
</script>
<template>
  <ol
    class="m-ol"
    :class="[{ '--none': none }, { '--inline': inline }]"
  >
    <slot />
  </ol>
</template>
