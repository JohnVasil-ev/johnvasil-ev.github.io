<script setup lang="ts">
import type { Props } from './mount-reveal-container.types';

import { useTimer } from '@/shared/composables';

const { delay, is, initialOpactity, offset } = withDefaults(
  defineProps<Props>(), {
  is: 'div',
  initialOpactity: 0.1,
  offset: '10px',
});

const elRef = ref<HTMLElement | null>(null);
useTimer(() => {
  if (elRef.value) {
    elRef.value.classList.add('visible');
  }
}, delay);
</script>

<template>
  <component :is="is" ref="elRef" class="container">
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
.container {
  visibility: visible;
  opacity: v-bind(initialOpactity);
  transform: translateY(v-bind(offset));
}

.visible {
  opacity: 1;
  transform: initial;
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
}
</style>
