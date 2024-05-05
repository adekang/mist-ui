<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps} from "./types";
defineOptions({
  name: 'MButton',
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag:"button",
  nativeType:"button",
})

const slots= defineSlots()

const _ref = ref<HTMLButtonElement>()





</script>

<template>
  <component
   :is="tag"
    ref="_ref"
    class="m-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : null"
    :class="{
      [`m-button--${type}`]: type,
      [`m-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
  >
    <slot></slot>
  </component>
</template>



<style  scoped>

</style>