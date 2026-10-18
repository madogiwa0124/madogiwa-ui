<script lang="ts" setup>
import { computed } from "vue";
import { useFieldContext } from "../MField/fieldContext";

const modelValue = defineModel<string | number>({ default: "" });

const props = defineProps<{
  error?: boolean;
}>();

const field = useFieldContext();
const invalid = computed(() => props.error || field?.hasError.value);
</script>
<template>
  <select
    :id="field?.controlId.value"
    v-model="modelValue"
    class="m-select"
    :class="[
      { '--error': invalid }
    ]"
    :aria-invalid="invalid || undefined"
    :aria-describedby="field?.describedBy.value"
  >
    <slot />
  </select>
</template>
