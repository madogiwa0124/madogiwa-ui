<!-- eslint-disable-next-line vue/max-lines-per-block -->
<script setup lang="ts">
import { computed, ref, useTemplateRef, watchEffect } from "vue";
import { MNavbarHamburger, MNavbarHamburgerMenu, MNavbarItems } from "./index";
import { useCloseOutsideClick } from "./composable";

const { mobileMenuVariant = null, transition, id = "m-navbar", closeOutsideClick = false } = defineProps<{
  mobileMenuVariant?: null | "float" | "side" | "side-left";
  closeOutsideClick?: boolean;
  transition?: boolean;
  id?: string;
}>();

const templateItems = useTemplateRef<InstanceType<typeof MNavbarItems> | null>("items");
const templateHamburger = useTemplateRef<InstanceType<typeof MNavbarHamburger> | null>("hamburger");
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

const { attachOutsideClickListener, detachOutsideClickListener } = useCloseOutsideClick({
  // NOTE: It's unavoidable for $el to be any, so ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  getInsideElements: () => [templateItems.value?.$el, templateHamburger.value?.$el].filter(Boolean) as HTMLElement[],
  onClose: () => { hamburgerMenuOpen.value = false; },
});

// Add/remove click listener based on menu state and variant
watchEffect((onCleanup) => {
  if (!closeOutsideClick) return;
  if (!hamburgerMenuOpen.value || !mobileMenuVariant) return;
  const timeoutId = attachOutsideClickListener();

  onCleanup(() => {
    detachOutsideClickListener(timeoutId);
  });
});

</script>
<template>
  <nav :id class="m-navbar" :class="[mobileMenuClass, transition ? '--transition' : '']">
    <slot name="title" />
    <MNavbarItems ref="items">
      <slot name="items" />
    </MNavbarItems>
    <slot name="hamburger">
      <MNavbarHamburger v-if="hasHamburgerMenu" ref="hamburger">
        <MNavbarHamburgerMenu :show-menu="hamburgerMenuOpen" :aria-controls="id" @show-menu="hamburgerMenuOpen = $event" />
      </MNavbarHamburger>
    </slot>
  </nav>
</template>
