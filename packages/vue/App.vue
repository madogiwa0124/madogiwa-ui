<script setup lang="ts">
import { ref } from "vue";
import { MBtn, MCheckbox, MContainer, MH1, MH2, MH3, MInput, MLabel, MNavbar, MNavbarItem, MNavbarTitle, MP, MRadio, MSelect, MTabs, MTabsItem, MTabsList, MTextarea, MToggle } from "./src/index";

type DemoTabs = "buttons" | "cards" | "modals" | "inputs";
const activeTab = ref<DemoTabs>("buttons");
const checkboxValue = ref<boolean>(false);
const radioValue = ref<string>("option1");
const toggleValue = ref<boolean>(false);
const inputValue = ref<string>("");
const emailValue = ref<string>("");
const selectValue = ref<string>("");
const textareaValue = ref<string>("");
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
        <MBtn variant="primary">
          Sign Up
        </MBtn>
        <MBtn variant="secondary" outline>
          Log In
        </MBtn>
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
        <MTabsItem id="components-inputs-tab" :active="activeTab === 'inputs'" aria-controls="components-inputs" @click="activeTab = 'inputs'">
          Inputs
        </MTabsItem>
      </MTabsList>
    </MTabs>
    <section id="components-buttons" role="tabpanel" aria-labelledby="components-buttons-tab" :class="{ 'm-hidden': activeTab !== 'buttons' }">
      <MH2>
        MButton
      </MH2>
      <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap;">
        <MBtn variant="primary" rounded outline transition>
          Primary Button
        </MBtn>
        <MBtn variant="secondary">
          Secondary Button
        </MBtn>
        <MBtn variant="tertiary">
          Tertiary Button
        </MBtn>
      </div>
    </section>
    <section id="components-cards" role="tabpanel" aria-labelledby="components-cards-tab" :class="{ 'm-hidden': activeTab !== 'cards' }">
      <MH2>
        MCard
      </MH2>
      <div>
        <MP>tobe implemented</MP>
      </div>
    </section>
    <section id="components-modals" role="tabpanel" aria-labelledby="components-modals-tab" :class="{ 'm-hidden': activeTab !== 'modals' }">
      <MH2>
        MModal
      </MH2>
      <div>
        <MP>tobe implemented</MP>
      </div>
    </section>
    <section id="components-inputs" role="tabpanel" aria-labelledby="components-inputs-tab" :class="{ 'm-hidden': activeTab !== 'inputs' }">
      <MH2>
        MInputs
      </MH2>
      <div>
        <MH3>
          Sample Form
        </MH3>
        <MP>
          <form
            style="padding: var(--spacing-4); border: 1px solid var(--color-border); border-radius: var(--radius-md); display: flex; flex-direction: column; gap: var(--spacing-3); max-width: 520px;"
            @submit.prevent="event => {
              const form = event.target as HTMLFormElement;
              if (form.checkValidity()) {
              } else {
                form.reportValidity();
              }
            }"
          >
            <!-- Name -->
            <div style="display: grid; gap: var(--spacing-1);">
              <MLabel for="form-name" required>
                Name
              </MLabel>
              <MInput id="form-name" v-model="inputValue" block transition placeholder="John Doe" required />
            </div>

            <div style="display: grid; gap: var(--spacing-1);">
              <MLabel for="form-name" disabled>
                Address
              </MLabel>
              <MInput id="form-address" v-model="inputValue" block transition placeholder="123 Main St" disabled />
            </div>

            <!-- Email -->
            <div style="display: grid; gap: var(--spacing-1);">
              <MLabel for="form-email">
                Email
              </MLabel>
              <MInput
                id="form-email"
                v-model="emailValue"
                type="email"
                block
                transition
                placeholder="you@example.com"
                required
              />
            </div>

            <!-- Plan (Radio) -->
            <div style="display: grid; gap: var(--spacing-1);">
              <MLabel>
                Plan
              </MLabel>
              <div style="display: flex; gap: var(--spacing-4); align-items: center;">
                <MLabel style="display: inline-flex; align-items: center; gap: var(--spacing-1);">
                  <MRadio v-model="radioValue" name="plan" value="basic" />
                  Basic
                </MLabel>
                <MLabel style="display: inline-flex; align-items: center; gap: var(--spacing-1);">
                  <MRadio v-model="radioValue" name="plan" value="pro" />
                  Pro
                </MLabel>
              </div>
            </div>

            <!-- Category (Select) -->
            <div style="display: grid; gap: var(--spacing-1);">
              <MLabel for="form-category">
                Category
              </MLabel>
              <MSelect id="form-category" v-model="selectValue">
                <option value="" disabled>
                  Please select one
                </option>
                <optgroup label="General">
                  <option value="feedback">
                    Feedback
                  </option>
                  <option value="support">
                    Support
                  </option>
                </optgroup>
                <optgroup label="Other">
                  <option value="other">
                    Other
                  </option>
                </optgroup>
              </MSelect>
            </div>

            <!-- Message (Textarea) -->
            <div style="display: grid; gap: var(--spacing-1);">
              <MLabel for="form-message">
                Message
              </MLabel>
              <MTextarea id="form-message" v-model="textareaValue" block auto-fit placeholder="Tell us more..." :rows="4" />
            </div>

            <!-- Preferences (Checkbox / Toggle) -->
            <div style="display: grid; gap: var(--spacing-2);">
              <MLabel style="display: inline-flex; align-items: center; gap: var(--spacing-1);">
                <MCheckbox v-model="checkboxValue" />
                Subscribe to newsletter
              </MLabel>
              <MLabel style="display: inline-flex; align-items: center; gap: var(--spacing-1);">
                Enable notifications
                <MToggle v-model="toggleValue" />
              </MLabel>
            </div>

            <!-- Actions -->
            <div style="margin-top: var(--spacing-2); display: flex; gap: var(--spacing-2); justify-content: flex-end;">
              <MBtn type="reset" outline>
                Reset
              </MBtn>
              <MBtn variant="primary" type="submit" rounded transition>
                Submit
              </MBtn>
            </div>
          </form>
        </MP>
      </div>
      <div>
        <MH3>
          MCheckbox
        </MH3>
        <MP>
          <MLabel style="display: inline-flex; align-items: center; gap: var(--spacing-1);">
            <MCheckbox v-model="checkboxValue" />
            Check me!
          </MLabel>
        </MP>
        <MP>
          value: {{ checkboxValue }}
        </MP>
      </div>
      <div>
        <MH3>
          MRadio
        </MH3>
        <MP style="display: flex; flex-direction: column; gap: var(--spacing-2);">
          <MLabel style="display: inline-flex; align-items: center; gap: var(--spacing-1);">
            <MRadio v-model="radioValue" name="options" value="option1" />
            Option 1
          </MLabel>
          <MLabel style="display: inline-flex; align-items: center; gap: var(--spacing-1);">
            <MRadio v-model="radioValue" name="options" value="option2" />
            Option 2
          </MLabel>
        </MP>
        <MP>
          value: {{ radioValue }}<MP />
        </MP>
      </div>
      <div>
        <MH3>
          MToggle
        </MH3>
        <MP>
          <MLabel style="display: inline-flex; align-items: center; gap: var(--spacing-1);">
            Toggle me!
            <MToggle v-model="toggleValue" />
          </MLabel>
        </MP>
        <MP>
          value: {{ toggleValue }}
        </MP>
      </div>
      <div>
        <MH3>
          MInput
        </MH3>
        <MP style="display: flex; flex-direction: column; gap: var(--spacing-2);">
          <div>
            <MLabel for="text-input">
              Text Input
            </MLabel>
            <MInput id="text-input" v-model="inputValue" block transition placeholder="Enter your name" />
          </div>
          <div>
            <MLabel for="email-input" required>
              Email Input
            </MLabel>
            <MInput id="email-input" v-model="emailValue" type="email" block transition placeholder="your@email.com" />
          </div>
        </MP>
        <MP>
          Text value: {{ inputValue }}<br>
          Email value: {{ emailValue }}
        </MP>
      </div>
      <div>
        <MH3>
          MSelect
        </MH3>
        <MP>
          <MLabel for="select-input">
            Choose an option
          </MLabel>
          <MSelect id="select-input" v-model="selectValue">
            <option value="" disabled>
              Please select one
            </option>
            <option value="option0">
              Option 0
            </option>
            <hr>
            <optgroup label="Group 1">
              <option value="option1-1">
                Option 1-1
              </option>
              <option value="option1-2">
                Option 1-2
              </option>
            </optgroup>
            <optgroup label="Group 2">
              <option value="option2-1">
                Option 2-1
              </option>
              <option value="option2-2" disabled>
                Option 2-2 (Disabled)
              </option>
            </optgroup>
            <hr>
            <option value="option3">
              Option 3
            </option>
          </MSelect>
        </MP>
        <MP>
          Selected value: {{ selectValue }}
        </MP>
      </div>
      <div>
        <MH3>
          MTextarea
        </MH3>
        <MP>
          <MLabel for="textarea-input">
            Your Message
          </MLabel>
          <MTextarea id="textarea-input" v-model="textareaValue" block auto-fit placeholder="Type your message here..." :rows="3" />
        </MP>
        <MP>
          Message: {{ textareaValue }}
        </MP>
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
