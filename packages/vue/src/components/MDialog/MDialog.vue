<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const {
  open = false,
  backdropBlur = false,
  transition = false,
} = defineProps<{
  open?: boolean;
  backdropBlur?: boolean;
  transition?: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const dialogRef = ref<HTMLDialogElement | null>(null);

// Watch for prop changes and update dialog state
watch(() => open, (newValue) => {
  if (!dialogRef.value) return;

  if (newValue) {
    dialogRef.value.showModal();
  } else {
    dialogRef.value.close();
  }
});

// Handle native close event (ESC key, etc.)
const handleClose = () => {
  emit("close");
};

// Initialize dialog state on mount
onMounted(() => {
  if (open && dialogRef.value) {
    dialogRef.value.showModal();
  }
});
</script>

<template>
  <dialog
    ref="dialogRef"
    class="m-dialog"
    :class="[
      { '--backdrop-blur': backdropBlur },
      { '--transition': transition }
    ]"
    @close="handleClose"
  >
    <slot />
  </dialog>
</template>
