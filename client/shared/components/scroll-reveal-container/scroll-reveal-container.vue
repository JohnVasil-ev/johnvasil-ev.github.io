<script setup lang="ts">
import { ref } from 'vue';

import type { Props } from './scroll-reveal-container.props';

const { threshold } = withDefaults(
  defineProps<Props>(), {
  threshold: 0.5,
});

const elRef = ref<HTMLElement | null>(null);
useScrollReveal(elRef, (entry) => {
  entry.target.classList.add('visible');
}, { threshold });
</script>

<template>
  <section ref="elRef" class="container">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.container {
  visibility: visible;
  opacity: 0;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1);
}

.visible {
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
}
</style>
