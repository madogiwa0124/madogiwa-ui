<script setup lang="ts">
import { provide, useId } from "vue";
import { createFieldContext, fieldContextKey } from "./fieldContext";

const props = defineProps<{
  id?: string;
}>();

const generatedId = useId();
provide(fieldContextKey, createFieldContext(() => props.id ?? generatedId));
</script>

<template>
  <div class="m-field">
    <slot />
  </div>
</template>
