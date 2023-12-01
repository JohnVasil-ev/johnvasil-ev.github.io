<script setup lang="ts">
import { HexagonIcon, LogoIcon } from '@/shared/icons';
</script>

<template>
  <a class="container" href="/">
    <HexagonIcon class="icon" />
    <LogoIcon class="icon logo" />
  </a>
</template>

<style scoped lang="scss">
@import '@/app/styles/variables';

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
  width: 50px;
  flex-shrink: 0;

  &>.icon {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;

    &.logo {
      transition: $transition;

      @media (hover: hover) {
        &:hover {
          transform: translate(-2px, -2px);
        }
      }

      &:active {
        transform: initial;
      }
    }

  }
}
</style>
