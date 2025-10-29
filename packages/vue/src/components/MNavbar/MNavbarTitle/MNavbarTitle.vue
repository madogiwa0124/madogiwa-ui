<script setup lang="ts">
import { computed } from "vue";

// NOTE: href is guaranteed to be `undefined | string` for the a tag, so the props should be the same.
// eslint-disable-next-line unicorn/no-useless-undefined
const { href = undefined } = defineProps<{ href?: string }>();
const isLink = computed(() => !!href);
</script>
<template>
  <a v-if="isLink" :href class="m-navbar__title">
    <slot />
  </a>
  <span v-else class="m-navbar__title">
    <slot />
  </span>
</template>
