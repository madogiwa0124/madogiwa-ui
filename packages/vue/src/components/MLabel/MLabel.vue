<script lang="ts" setup>
import { useFieldContext } from "../MField/fieldContext";

defineProps<{
  required?: boolean;
  disabled?: boolean;
}>();

const field = useFieldContext();
</script>
<template>
  <label :for="field?.controlId.value" class="m-label" :class="[{ '--required': required, '--disabled': disabled }]">
    <slot />
  </label>
</template>
