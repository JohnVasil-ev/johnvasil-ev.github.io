<script setup lang="ts">
const { x, y } = useMouse({ type: 'client' });

</script>

<template>
  <div :style="{ background: `radial-gradient(450px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }"
    class="cursor-light"></div>
</template>

<style scoped lang="scss">
.cursor-light {
  inset: 0;
  z-index: 1000;
  position: fixed;
  pointer-events: none;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
}
</style>
