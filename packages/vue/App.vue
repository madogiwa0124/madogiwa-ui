<script setup lang="ts">
import { onMounted } from "vue";
import { MButton } from "./src/index";

onMounted(() => {
  document.querySelector(".m-navbar__hamburger-menu")?.addEventListener("click", (event) => {
    const button = event.currentTarget as HTMLButtonElement;
    const expanded = button.getAttribute("aria-expanded") === "true" || false;
    button.setAttribute("aria-expanded", (!expanded).toString());
  });
});

</script>

<template>
  <MNavbar mobile-menu-variant="side" transition>
    <template #title>
      <MNavbarTitle href="/">
        Madogiwa UI
      </MNavbarTitle>
    </template>
    <template #items>
      <MNavbarItem>
        <a href="/home">Home</a>
      </MNavbarItem>
      <MNavbarItem>
        <a href="/about">About</a>
      </MNavbarItem>
      <MNavbarItem>
        <a href="/services">Services</a>
      </MNavbarItem>
      <MNavbarItem :end="true">
        <MButton variant="primary">
          Sign Up
        </MButton>
        <MButton variant="secondary" outline>
          Log In
        </MButton>
      </MNavbarItem>
    </template>
  </MNavbar>
  <div class="m-container --padding">
    <h1 class="m-h1">
      Madogiwa UI - Vue
    </h1>
    <section>
      <h2 class="m-h2">
        MButton
      </h2>
      <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap;">
        <MButton variant="primary" rounded outline transition>
          Primary Button
        </MButton>
        <MButton variant="secondary">
          Secondary Button
        </MButton>
        <MButton variant="tertiary">
          Tertiary Button
        </MButton>
      </div>
    </section>
  </div>
</template>
<!-- eslint-disable-next-line vue/no-restricted-block -->
<style scoped>
.m-h1 {
  margin-top: var(--spacing-6);
}
</style>
