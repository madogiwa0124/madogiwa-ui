import { type ComputedRef, type InjectionKey, type Ref, computed, inject, ref } from "vue";

export interface FieldContext {
  controlId: ComputedRef<string>;
  helpId: ComputedRef<string>;
  errorId: ComputedRef<string>;
  hasHelp: Ref<boolean>;
  hasError: Ref<boolean>;
  describedBy: ComputedRef<string | undefined>;
}

export const fieldContextKey: InjectionKey<FieldContext> = Symbol("MField");

export const createFieldContext = (id: () => string): FieldContext => {
  const controlId = computed(() => id());
  const helpId = computed(() => `${controlId.value}-help`);
  const errorId = computed(() => `${controlId.value}-error`);
  const hasHelp = ref(false);
  const hasError = ref(false);
  // NOTE: Only reference elements that exist and have content, so that aria-describedby never points to a missing element.
  const describedBy = computed(() => [
    hasError.value ? errorId.value : undefined,
    hasHelp.value ? helpId.value : undefined,
  ].filter(Boolean).join(" ") || undefined);

  return { controlId, helpId, errorId, hasHelp, hasError, describedBy };
};

export const useFieldContext = (): FieldContext | undefined => inject(fieldContextKey, undefined);
