<script setup lang="ts">
import { computed, ref } from "vue";

const {
  showMenu = false,
  closeLabel = "Close menu",
  openLabel = "Open menu",
} = defineProps<{
  showMenu?: boolean;
  closeLabel?: string;
  openLabel?: string;
}>();
const emits = defineEmits<{
  (event: "showMenu", value: boolean): void;
}>();
const menuOpen = ref(showMenu);
const ariaLabel = computed(() => menuOpen.value ? closeLabel : openLabel);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  emits("showMenu", menuOpen.value);
};
</script>
<template>
  <button
    type="button"
    class="m-navbar__hamburger-menu"
    :aria-label="ariaLabel"
    :aria-expanded="menuOpen"
    @click="toggleMenu"
  />
</template>
