<script setup lang="ts">
import type { Variant } from "../../index";
import { computed } from "vue";

const {
  as = "span",
  variant = null,
  outline = false,
  small = false,
  rounded = false,
  transition = false,
} = defineProps<{
  as?: "span" | "button" | "a";
  variant?: Variant | "danger" | "warning";
  outline?: boolean;
  small?: boolean;
  rounded?: boolean;
  transition?: boolean;
}>();

const classes = computed(() => [
  "m-badge",
  variant ? `--${variant}` : "",
  { "--outline": outline },
  { "--small": small },
  { "--rounded": rounded },
  { "--transition": transition },
]);

// NOTE: Same default as MBtn: a native <button> submits its form when type is omitted. A type passed by the consumer falls through and wins.
const buttonType = computed(() => as === "button" ? "button" : undefined);
</script>

<template>
  <component
    :is="as"
    :class="classes"
    :type="buttonType"
  >
    <slot />
  </component>
</template>
