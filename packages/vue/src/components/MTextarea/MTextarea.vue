<script lang="ts" setup>
import { computed } from "vue";
import { useFieldContext } from "../MField/fieldContext";

const modelValue = defineModel<string>({ default: "" });

const props = defineProps<{
  block?: boolean;
  error?: boolean;
  autoFit?: boolean;
}>();

const field = useFieldContext();
const invalid = computed(() => props.error || field?.hasError.value);
</script>
<template>
  <textarea
    :id="field?.controlId.value"
    v-model="modelValue"
    class="m-textarea"
    :class="[
      { '--block': block },
      { '--error': invalid },
      { '--auto-fit': autoFit }
    ]"
    :aria-invalid="invalid || undefined"
    :aria-describedby="field?.describedBy.value"
  />
</template>
