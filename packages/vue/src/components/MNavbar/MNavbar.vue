<script setup lang="ts">
// TODO: Close the menu when clicking on the backdrop of the side menu (`.m-navbar::after`)

import { computed, ref } from "vue";
import { MNavbarHamburger, MNavbarHamburgerMenu } from "./index";

const { mobileMenuVariant = null, transition, id = "m-navbar" } = defineProps<{
  mobileMenuVariant?: null | "float" | "side" | "side-left";
  transition?: boolean;
  id?: string;
}>();

const hamburgerMenuOpen = ref(false);
const hasHamburgerMenu = computed(() => mobileMenuVariant !== null);
const mobileMenuClass = computed(() => {
  if (!mobileMenuVariant) return "";
  return {
    "float": "--mobile-float-menu",
    "side": "--mobile-side-menu",
    "side-left": "--mobile-side-menu --slide-left",
  }[mobileMenuVariant];
});

</script>
<template>
  <nav :id class="m-navbar" :class="[mobileMenuClass, transition ? '--transition' : '']">
    <slot name="title" />
    <ul class="m-navbar__items">
      <slot name="items" />
    </ul>
    <slot name="hamburger">
      <MNavbarHamburger v-if="hasHamburgerMenu">
        <MNavbarHamburgerMenu :show-menu="hamburgerMenuOpen" :aria-controls="id" />
      </MNavbarHamburger>
    </slot>
  </nav>
</template>
