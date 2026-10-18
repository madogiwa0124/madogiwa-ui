<script lang="ts" setup>
import { computed } from "vue";
import { useFieldContext } from "../MField/fieldContext";

const modelValue = defineModel<string | number>({ default: "" });

const props = defineProps<{
  block?: boolean;
  error?: boolean;
  transition?: boolean;
  type?: string;
}>();

const field = useFieldContext();
const invalid = computed(() => props.error || field?.hasError.value);
</script>
<template>
  <input
    :id="field?.controlId.value"
    v-model="modelValue"
    :type="type || 'text'"
    class="m-input"
    :class="[
      { '--block': block },
      { '--error': invalid },
      { '--transition': transition }
    ]"
    :aria-invalid="invalid || undefined"
    :aria-describedby="field?.describedBy.value"
  >
</template>
