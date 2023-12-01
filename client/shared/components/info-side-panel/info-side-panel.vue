<script setup lang="ts">
import type { Props } from './info-side-panel.types';

const { side } = defineProps<Props>();
</script>

<template>
  <div class="info-panel" :class="{ [side]: true }">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.info-panel {
  top: auto;
  bottom: 0px;
  width: 40px;
  z-index: 900;
  position: fixed;
}

.left {
  left: 40px;
  right: auto;
}

.right {
  right: 40px;
  left: auto;
}

@media (max-width: 1080px) {
  .left {
    left: 20px;
    right: auto;
  }

  .right {
    right: 20px;
    left: auto;
  }
}

@media (max-width: 768px) {
  .info-panel {
    display: none;
  }
}
</style>
