<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { MSnackbarActions, MSnackbarBody } from "./index";

const {
  open = false,
  transition = false,
  position = null,
} = defineProps<{
  open?: boolean;
  transition?: boolean;
  position?: "right-bottom" | "left-top" | "right-top" | null;
}>();

const snackbarRef = ref<HTMLDivElement | null>(null);

// Watch for prop changes and update popover state
watch(() => open, (newValue) => {
  if (!snackbarRef.value) return;

  if (newValue) {
    snackbarRef.value.showPopover();
  } else {
    snackbarRef.value.hidePopover();
  }
});

// Initialize popover state on mount
onMounted(() => {
  if (open && snackbarRef.value) {
    snackbarRef.value.showPopover();
  }
});
</script>

<template>
  <div
    ref="snackbarRef"
    popover="manual"
    class="m-snackbar"
    :class="[
      { '--transition': transition },
      position ? `--${position}` : ''
    ]"
  >
    <MSnackbarBody v-if="$slots['default']">
      <slot />
    </MSnackbarBody>
    <MSnackbarActions v-if="$slots['actions']">
      <slot name="actions" />
    </MSnackbarActions>
  </div>
</template>
