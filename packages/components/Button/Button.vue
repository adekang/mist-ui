<script setup lang="ts">
import { computed, inject, ref } from "vue";
import type { ButtonEmits, ButtonProps} from "./types";
import {throttle}from "lodash-es"
import MIcon from "../Icon/Icon.vue";
import { BUTTON_GROUP_CTX_Key } from "./contants";

defineOptions({
  name: 'MButton',
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag:"button",
  nativeType:"button",
  useThrottle: true,
  throttleDuration: 500,
})

const emit= defineEmits<ButtonEmits>()
const slots= defineSlots()
const ctx = inject(BUTTON_GROUP_CTX_Key, null)

const size  = computed(() => ctx?.size ?? props.size ?? "")
const type = computed(() => ctx?.type ?? props.type ?? "")
const disabled = computed(() => ctx?.disabled ?? props.disabled ?? false)

const _ref = ref<HTMLButtonElement>()

const handleBtnClick = (e: MouseEvent) => {
emit('click', e)
}

const iconStyle = computed(() => ({
  marginRight: slots.loading ? '6px' : void 0,
}))

const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)


defineExpose({
  ref:_ref,
})

</script>

<template>
  <component
   :is="tag"
    ref="_ref"
    :autofocus="autofocus"
    class="m-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : null"
    :class="{
      [`m-button--${type}`]: type,
      [`m-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e:MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
  <template v-if="loading">
    <slot name="loading">
      <m-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'"  :style="iconStyle" spin size="1x"/>
    </slot>
  </template>
    <m-icon v-if="icon && !loading" :icon="icon" :style="iconStyle" size="1x"/>
    <slot></slot>
  </component>
</template>



<style  scoped>
@import './style.css'


</style>