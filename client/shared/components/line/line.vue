<script setup lang="ts">
import type { Props } from './line.types';

const { direction, size } = withDefaults(
  defineProps<Props>(), {
  size: '100%',
});
</script>

<template>
  <div class="line" :class="{ [direction === 'horizontal' && 'hor' || 'ver']: true }"></div>
</template>

<style scoped lang="scss">
.line {
  content: "";
  display: block;
  background-color: #2d3756;

  &.hor {
    width: v-bind(size);
    height: 1px;
    margin: auto 0px;
  }

  &.ver {
    width: 1px;
    height: v-bind(size);
    margin: 0px auto;
  }
}
</style>
