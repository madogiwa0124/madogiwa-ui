<script setup lang="ts">
import type { Variant } from "../../types";
import { MAlertActions, MAlertContent, MAlertIcons } from "./index";

const {
  variant = null,
  withProgress = false,
  autoDismiss = null,
} = defineProps<{
  variant?: Variant | "danger" | "warning";
  withProgress?: boolean;
  autoDismiss?: "3s" | "5s" | "10s" | "0s" | null;
}>();
</script>

<template>
  <div
    class="m-alert"
    role="alert"
    :class="[
      variant ? `--${variant}` : '',
      { '--with-progress': withProgress }
    ]"
    :data-auto-dismiss="autoDismiss"
  >
    <MAlertIcons v-if="$slots['icons']">
      <slot name="icons" />
    </MAlertIcons>
    <MAlertContent v-if="$slots['default']">
      <slot />
    </MAlertContent>
    <MAlertActions v-if="$slots['actions']">
      <slot name="actions" />
    </MAlertActions>
  </div>
</template>
