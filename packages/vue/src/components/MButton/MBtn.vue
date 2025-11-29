<script lang="ts" setup>
import type { Variant } from "../../index";
const {
  variant = null,
  outline = false,
  block = false,
  rounded = false,
  iconOnly = false,
  transition = false,
} = defineProps<{
  variant?: Variant;
  outline?: boolean;
  block?: boolean;
  rounded?: boolean;
  iconOnly?: boolean;
  transition?: boolean;
}>();
</script>
<template>
  <button
    class="m-btn"
    :class="[
      variant ? `--${variant}` : '',
      { '--outline': outline },
      { '--block': block },
      { '--rounded': rounded },
      { '--icon-only': iconOnly },
      { '--transition': transition }
    ]"
  >
    <slot />
  </button>
</template>
