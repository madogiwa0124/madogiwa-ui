<script setup lang="ts">
import { ref } from "vue";
import { MButton, MContainer, MH1, MH2, MNavbar, MNavbarItem, MNavbarTitle, MTabs, MTabsItem, MTabsList } from "./src/index";

type DemoTabs = "buttons" | "cards" | "modals";
const activeTab = ref<DemoTabs>("buttons");
</script>
<!-- eslint-disable vue/max-lines-per-block -->
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
      <MNavbarItem end>
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
    <MTabs scrollhint transition style="margin-bottom: var(--spacing-4)">
      <MTabsList aria-label="Components">
        <MTabsItem id="components-buttons-tab" :active="activeTab === 'buttons'" aria-controls="components-buttons" @click="activeTab = 'buttons'">
          Buttons
        </MTabsItem>
        <MTabsItem id="components-cards-tab" :active="activeTab === 'cards'" aria-controls="components-cards" @click="activeTab = 'cards'">
          Cards
        </MTabsItem>
        <MTabsItem id="components-modals-tab" :active="activeTab === 'modals'" aria-controls="components-modals" @click="activeTab = 'modals'">
          Modals
        </MTabsItem>
      </MTabsList>
    </MTabs>
    <section id="components-buttons" role="tabpanel" aria-labelledby="components-buttons-tab" :class="{ 'm-hidden': activeTab !== 'buttons' }">
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
    <section id="components-cards" role="tabpanel" aria-labelledby="components-cards-tab" :class="{ 'm-hidden': activeTab !== 'cards' }">
      <MH2>
        MCard
      </MH2>
      <div>
        tobe implemented
      </div>
    </section>
    <section id="components-modals" role="tabpanel" aria-labelledby="components-modals-tab" :class="{ 'm-hidden': activeTab !== 'modals' }">
      <MH2>
        MModal
      </MH2>
      <div>
        tobe implemented
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
