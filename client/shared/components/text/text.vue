<script setup lang="ts">
import type { Props } from './text.types.ts';

const { font } = withDefaults(
  defineProps<Props>(), {
  font: 'sans',
});
</script>

<template>
  <span class="text" :class="{ [font]: true }">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
@import '@/app/styles/variables';

.text {
  &.sans {
    font-family: $font-sans;
  }

  &.mono {
    font-family: $font-mono;
  }
}
</style>
