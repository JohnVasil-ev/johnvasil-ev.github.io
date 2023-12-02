<script setup lang="ts">
import type { Props } from './screen-loader.types';

import { LogoIcon } from '@/shared/icons';

const { $anime } = useNuxtApp();
const { setLoaded } = defineProps<Props>();

const opacity = ref(0);

onMounted(() => nextTick(() => {
  const anim = $anime.timeline({
    loop: false,
    direction: 'alternate',
    complete: setLoaded,
  });

  opacity.value = 1;

  anim
    .add({
      targets: 'svg path',
      easing: 'easeInOutQuart',
      duration: 1500,
      strokeDashoffset: [$anime.setDashoffset, 0],
    })
    .add({
      targets: 'svg g',
      easing: 'easeInOutQuart',
      duration: 700,
      opacity: 1,
    })
    .add({
      targets: 'svg',
      easing: 'easeInOutQuart',
      duration: 650,
      delay: 500,
      opacity: 0,
      scale: 0.1,
    });
}));
</script>

<template>
  <div class="wrapper">
    <div class="container" :style="{ opacity }">
      <LogoIcon class="svg" :opacity="0" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/app/styles/variables';

.wrapper {
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;

  &>.container {
    width: max-content;
    max-width: 100px;
    transition: $transition;

    &>.svg {
      width: 100%;
      height: 100%;
      display: block;
      margin: 0 auto;
      fill: none;
    }
  }
}
</style>
