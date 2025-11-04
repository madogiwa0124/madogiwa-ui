<script setup lang="ts">
const {
  src,
  alt,
} = defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <img
    class="m-card__image"
    :src="src"
    :alt="alt"
  >
</template>
