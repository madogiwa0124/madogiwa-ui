<script setup lang="ts">
import { onMounted } from "vue";
import MButton from "./src/components/MButton";

onMounted(() => {
  document.querySelector(".m-navbar__hamburger-menu")?.addEventListener("click", (event) => {
    const button = event.currentTarget as HTMLButtonElement;
    const expanded = button.getAttribute("aria-expanded") === "true" || false;
    button.setAttribute("aria-expanded", (!expanded).toString());
  });
});

</script>

<template>
  <nav class="m-navbar --mobile-side-menu --transition">
    <a href="/" class="m-navbar__title">Madogiwa UI</a>
    <div class="m-navbar__items">
      <a href="/home" class="m-navbar__item --start">Home</a>
      <a href="/about" class="m-navbar__item">About</a>
      <a href="/services" class="m-navbar__item">Services</a>
      <div class="m-navbar__item --end">
        <MButton variant="primary">
          Sign Up
        </MButton>
        <MButton variant="secondary" outline>
          Log In
        </MButton>
      </div>
    </div>
    <div class="m-navbar__hamburger">
      <button class="m-navbar__hamburger-menu" aria-expanded="false" />
    </div>
  </nav>
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
