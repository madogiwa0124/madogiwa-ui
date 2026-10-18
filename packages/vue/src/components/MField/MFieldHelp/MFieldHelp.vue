<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { useFieldContext } from "../fieldContext";

const field = useFieldContext();

onMounted(() => {
  if (field) field.hasHelp.value = true;
});

onBeforeUnmount(() => {
  if (field) field.hasHelp.value = false;
});
</script>

<template>
  <div :id="field?.helpId.value" class="m-field__help">
    <slot />
  </div>
</template>
