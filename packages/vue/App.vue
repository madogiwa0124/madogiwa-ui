<script setup lang="ts">
import { MButton, MContainer, MH1, MH2, MNavbar, MNavbarItem, MNavbarTitle } from "./src/index";
</script>

<template>
  <MNavbar mobile-menu-variant="side" transition>
    <template #title>
      <MNavbarTitle href="/">
        <b>MNavbar</b>
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
  <MContainer padding>
    <MH1>
      Madogiwa UI - Vue
    </MH1>
    <section>
      <MH2>
        MButton
      </MH2>
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
  </MContainer>
</template>
<!-- eslint-disable-next-line vue/no-restricted-block -->
<style scoped>
.m-h1 {
  margin-top: var(--spacing-6);
}
</style>
