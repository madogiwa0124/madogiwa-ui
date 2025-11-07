<script setup lang="ts">
import { ref } from "vue";
import { MAccordion, MAlert, MBadge, MBtn, MCard, MCardImage, MCheckbox, MColumns, MContainer, MDialog, MH1, MH2, MH3, MInput, MLabel, MLink, MNavbar, MNavbarItem, MNavbarTitle, MP, MRadio, MSelect, MSnackbar, MTable, MTabs, MTabsItem, MTabsList, MTextarea, MToggle } from "../src/index";
const SampleImage = new URL("320x240.png", import.meta.url).href;

type DemoTabs = "buttons" | "links" | "cards" | "modals" | "inputs" | "accordion" | "badge" | "snackbar" | "columns" | "alert" | "table";
const activeTab = ref<DemoTabs>("buttons");
const checkboxValue = ref<boolean>(false);
const radioValue = ref<string>("option1");
const toggleValue = ref<boolean>(false);
const inputValue = ref<string>("");
const emailValue = ref<string>("");
const selectValue = ref<string>("");
const textareaValue = ref<string>("");

// Dialog and Snackbar state
const isDialogOpen = ref<boolean>(false);
const isSnackbarOpen = ref<boolean>(false);
</script>
<!-- eslint-disable vue/max-lines-per-block -->
<template>
  <MNavbar mobile-menu-variant="side" transition close-outside-click>
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
        <MTabsItem id="components-links-tab" :active="activeTab === 'links'" aria-controls="components-links" @click="activeTab = 'links'">
          Links
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
        <MTabsItem id="components-accordion-tab" :active="activeTab === 'accordion'" aria-controls="components-accordion" @click="activeTab = 'accordion'">
          Accordion
        </MTabsItem>
        <MTabsItem id="components-badge-tab" :active="activeTab === 'badge'" aria-controls="components-badge" @click="activeTab = 'badge'">
          Badge
        </MTabsItem>
        <MTabsItem id="components-snackbar-tab" :active="activeTab === 'snackbar'" aria-controls="components-snackbar" @click="activeTab = 'snackbar'">
          Snackbar
        </MTabsItem>
        <MTabsItem id="components-columns-tab" :active="activeTab === 'columns'" aria-controls="components-columns" @click="activeTab = 'columns'">
          Columns
        </MTabsItem>
        <MTabsItem id="components-alert-tab" :active="activeTab === 'alert'" aria-controls="components-alert" @click="activeTab = 'alert'">
          Alert
        </MTabsItem>
        <MTabsItem id="components-table-tab" :active="activeTab === 'table'" aria-controls="components-table" @click="activeTab = 'table'">
          Table
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
    <section id="components-links" role="tabpanel" aria-labelledby="components-links-tab" :class="{ 'm-hidden': activeTab !== 'links' }">
      <MH2>
        Links
      </MH2>
      <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap;">
        <MLink href="#">
          Sample Link
        </MLink>
      </div>
    </section>
    <section id="components-cards" role="tabpanel" aria-labelledby="components-cards-tab" :class="{ 'm-hidden': activeTab !== 'cards' }">
      <MH2>
        MCard
      </MH2>
      <div style="display: flex; gap: var(--spacing-4); flex-wrap: wrap;">
        <MCard style="max-width: 320px;">
          <template #image>
            <MCardImage :src="SampleImage" alt="Sample image" />
          </template>
          <MH3 style="margin-top: 0;">
            Card Title
          </MH3>
          <MP>
            This is a basic card component with an image, content, and actions.
          </MP>
          <template #actions>
            <MBtn variant="primary">
              Action
            </MBtn>
            <MBtn outline>
              Cancel
            </MBtn>
          </template>
        </MCard>

        <MCard floating style="max-width: 320px;">
          <MH3 style="margin-top: 0;">
            Floating Card
          </MH3>
          <MP>
            This card has a floating shadow effect with hover interaction.
          </MP>
          <template #actions>
            <MBtn variant="secondary">
              Learn More
            </MBtn>
          </template>
        </MCard>
      </div>
    </section>
    <section id="components-modals" role="tabpanel" aria-labelledby="components-modals-tab" :class="{ 'm-hidden': activeTab !== 'modals' }">
      <MH2>
        Modals
      </MH2>

      <div style="margin-bottom: var(--spacing-6);">
        <MH3>
          MDialog
        </MH3>
        <MP>
          <MBtn variant="primary" @click="isDialogOpen = true">
            Open Dialog
          </MBtn>
        </MP>
        <MDialog :open="isDialogOpen" backdrop-blur transition @close="isDialogOpen = false">
          <div style="padding: var(--spacing-3);">
            <MH3 style="margin-top: 0;">
              Dialog Title
            </MH3>
            <MP>
              This is a dialog component that can be controlled via props. It includes backdrop blur and smooth transitions.
            </MP>
            <div style="display: flex; gap: var(--spacing-2); justify-content: flex-end; margin-top: var(--spacing-4);">
              <MBtn outline @click="isDialogOpen = false">
                Cancel
              </MBtn>
              <MBtn variant="primary" @click="isDialogOpen = false">
                Confirm
              </MBtn>
            </div>
          </div>
        </MDialog>
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
    <section id="components-accordion" role="tabpanel" aria-labelledby="components-accordion-tab" :class="{ 'm-hidden': activeTab !== 'accordion' }">
      <MH2>
        MAccordion
      </MH2>
      <div style="display: flex; flex-direction: column; gap: var(--spacing-3);">
        <MAccordion transition>
          <template #summary>
            What is Madogiwa UI?
          </template>
          <MP>
            Madogiwa UI is a modern CSS framework leveraging cutting-edge CSS features like @property, CSS Nesting, and logical properties.
          </MP>
        </MAccordion>

        <MAccordion outline transition>
          <template #summary>
            How do I get started?
          </template>
          <MP>
            Install the package via npm or yarn, import the CSS, and start using the components in your Vue application.
          </MP>
        </MAccordion>

        <MAccordion transition>
          <template #summary>
            Is it accessible?
          </template>
          <MP>
            Yes! Madogiwa UI uses semantic HTML elements like details and summary for optimal accessibility.
          </MP>
        </MAccordion>
      </div>
    </section>
    <section id="components-badge" role="tabpanel" aria-labelledby="components-badge-tab" :class="{ 'm-hidden': activeTab !== 'badge' }">
      <MH2>
        MBadge
      </MH2>
      <!-- eslint-disable vue/singleline-html-element-content-newline -->
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <div>
          <MH3>
            Basic Badges
          </MH3>
          <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap; align-items: center;">
            <MBadge>Default</MBadge>
            <MBadge variant="primary">Primary</MBadge>
            <MBadge variant="secondary">Secondary</MBadge>
            <MBadge variant="tertiary">Tertiary</MBadge>
            <MBadge variant="danger">Danger</MBadge>
            <MBadge variant="warning">Warning</MBadge>
          </div>
        </div>

        <div>
          <MH3>
            Outline Badges
          </MH3>
          <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap; align-items: center;">
            <MBadge outline>Default</MBadge>
            <MBadge variant="primary" outline>Primary</MBadge>
            <MBadge variant="secondary" outline>Secondary</MBadge>
          </div>
        </div>

        <div>
          <MH3>
            Small & Rounded Badges
          </MH3>
          <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap; align-items: center;">
            <MBadge small>Small</MBadge>
            <MBadge rounded>Rounded</MBadge>
            <MBadge variant="danger" small rounded>5</MBadge>
            <MBadge variant="primary" small rounded>99+</MBadge>
            <MBadge as="button" variant="primary" small rounded class>
              <span class="icon">×</span>
            </MBadge>
          </div>
        </div>

        <div>
          <MH3>
            Interactive Badges
          </MH3>
          <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap; align-items: center;">
            <MBadge as="button" variant="primary" transition>
              Button Badge
            </MBadge>
            <MBadge as="a" variant="secondary" transition>
              Link Badge
            </MBadge>
          </div>
        </div>
      </div>
      <!-- eslint-enable vue/singleline-html-element-content-newline -->
    </section>
    <section id="components-snackbar" role="tabpanel" aria-labelledby="components-snackbar-tab" :class="{ 'm-hidden': activeTab !== 'snackbar' }">
      <MH2>
        MSnackbar (Popover API)
      </MH2>
      <MP>
        Snackbar component uses the modern Popover API for temporary notifications at screen edges.
      </MP>
      <div style="display: flex; flex-direction: column; gap: var(--spacing-3); margin-top: var(--spacing-4);">
        <div>
          <MH3>
            Position: Left Bottom (Default)
          </MH3>
          <MBtn variant="primary" @click="isSnackbarOpen = true">
            Show Snackbar
          </MBtn>
        </div>
      </div>
      <MSnackbar :open="isSnackbarOpen" transition @close="isSnackbarOpen = false">
        This is a snackbar notification.
        <template #actions>
          <MBtn variant="secondary" icon-only rounded @click="isSnackbarOpen = false">
            <span class="icon">×</span>
          </MBtn>
        </template>
      </MSnackbar>
    </section>
    <section id="components-columns" role="tabpanel" aria-labelledby="components-columns-tab" :class="{ 'm-hidden': activeTab !== 'columns' }">
      <MH2>
        MColumns
      </MH2>
      <div style="display: flex; flex-direction: column; gap: var(--spacing-6);">
        <div>
          <MH3>
            12-Column Grid
          </MH3>
          <MColumns :columns-length="12">
            <div data-col-size="6" style="background: var(--color-primary); color: var(--color-text-light); padding: var(--spacing-2); text-align: center;">
              6 columns
            </div>
            <div data-col-size="6" style="background: var(--color-secondary); color: var(--color-text-light); padding: var(--spacing-2); text-align: center;">
              6 columns
            </div>
            <div data-col-size="4" style="background: var(--color-tertiary); padding: var(--spacing-2); text-align: center;">
              4 columns
            </div>
            <div data-col-size="4" style="background: var(--color-tertiary); padding: var(--spacing-2); text-align: center;">
              4 columns
            </div>
            <div data-col-size="4" style="background: var(--color-tertiary); padding: var(--spacing-2); text-align: center;">
              4 columns
            </div>
          </MColumns>
        </div>

        <div>
          <MH3>
            No Gap
          </MH3>
          <MColumns :columns-length="3" no-gap>
            <div style="background: var(--color-primary); color: var(--color-text-light); padding: var(--spacing-2); text-align: center;">
              Column 1
            </div>
            <div style="background: var(--color-secondary); color: var(--color-text-light); padding: var(--spacing-2); text-align: center;">
              Column 2
            </div>
            <div style="background: var(--color-tertiary); padding: var(--spacing-2); text-align: center;">
              Column 3
            </div>
          </MColumns>
        </div>

        <div>
          <MH3>
            Auto Fit (Responsive)
          </MH3>
          <MP>
            Resize the browser window to see columns automatically adjust.
          </MP>
          <MColumns auto-fit style="--columns-auto-fit-min: 200px;">
            <MCard>Auto-fit Card 1</MCard>
            <MCard>Auto-fit Card 2</MCard>
            <MCard>Auto-fit Card 3</MCard>
          </MColumns>
        </div>
      </div>
    </section>
    <section id="components-alert" role="tabpanel" aria-labelledby="components-alert-tab" :class="{ 'm-hidden': activeTab !== 'alert' }">
      <MH2>
        MAlert
      </MH2>
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <MAlert variant="primary" transition>
          <template #icons>
            ℹ️
          </template>
          This is an informational alert message.
          <template #actions>
            <MBtn variant="primary">
              Take Action
            </MBtn>
          </template>
        </MAlert>

        <MAlert variant="warning" transition>
          <template #icons>
            ⚠️
          </template>
          This is a warning alert message.
        </MAlert>

        <MAlert variant="danger" transition auto-dismiss="5s" with-progress>
          <template #icons>
            ❌
          </template>
          This is a danger alert message.
        </MAlert>
      </div>
    </section>
    <section id="components-table" role="tabpanel" aria-labelledby="components-table-tab" :class="{ 'm-hidden': activeTab !== 'table' }">
      <MH2>
        MTable
      </MH2>
      <div style="display: flex; flex-direction: column; gap: var(--spacing-6);">
        <div>
          <MH3>
            Basic Table
          </MH3>
          <MTable full-width transition>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>Designer</td>
              </tr>
              <tr>
                <td>Bob Johnson</td>
                <td>bob@example.com</td>
                <td>Manager</td>
              </tr>
            </tbody>
          </MTable>
        </div>

        <div>
          <MH3>
            Striped Table
          </MH3>
          <MTable stripe full-width transition>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laptop</td>
                <td>$999</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>$29</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Keyboard</td>
                <td>$79</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Monitor</td>
                <td>$299</td>
                <td>8</td>
              </tr>
            </tbody>
          </MTable>
        </div>

        <div>
          <MH3>
            Hoverable Table
          </MH3>
          <MTable hoverable full-width transition>
            <thead>
              <tr>
                <th>ID</th>
                <th>Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Design new homepage</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Fix login bug</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Update documentation</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </MTable>
        </div>

        <div>
          <MH3>
            Bordered Table
          </MH3>
          <MTable bordered full-width transition>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Basic</th>
                <th>Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Users</td>
                <td>5</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>10GB</td>
                <td>1TB</td>
              </tr>
              <tr>
                <td>Support</td>
                <td>Email</td>
                <td>24/7 Phone</td>
              </tr>
            </tbody>
          </MTable>
        </div>

        <div>
          <MH3>
            All Modifiers Combined
          </MH3>
          <MTable stripe bordered hoverable full-width transition>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Widget A</td>
                <td>10</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Widget B</td>
                <td>5</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Widget C</td>
                <td>8</td>
                <td>$160</td>
              </tr>
            </tbody>
          </MTable>
        </div>
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
