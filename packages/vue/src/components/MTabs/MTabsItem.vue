<script setup lang="ts">
const { active = false } = defineProps<{ active?: boolean }>();
const emit = defineEmits<{ (type: "click", event: MouseEvent): void }>();
const onClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>

<template>
  <button
    type="button"
    class="m-tabs__item"
    :class="[{ '--active': active }]"
    role="tab"
    :aria-selected="active ? 'true' : 'false'"
    :tabindex="active ? '0' : '-1'"
    @click="onClick"
  >
    <slot />
  </button>
</template>
