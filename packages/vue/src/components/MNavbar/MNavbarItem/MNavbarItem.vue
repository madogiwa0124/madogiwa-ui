<script setup lang="ts">
const { end = false } = defineProps<{
  end?: boolean;
}>();

</script>
<template>
  <li :class="['m-navbar__item', { '--end': end }]">
    <slot />
  </li>
</template>
