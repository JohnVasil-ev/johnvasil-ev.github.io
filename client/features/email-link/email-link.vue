<script setup lang="ts">
import { InfoSidePanel, Line, MountRevealContainer } from '@/shared/components';
const email = 'va3iliev.ip@gmail.com';
</script>

<template>
  <InfoSidePanel side="right">
    <MountRevealContainer :delay="100" :initial-opactity="0">
      <a class="email" :href="'mailto:' + email">{{ email }}</a>
      <Line direction="vertical" size="90px" />
    </MountRevealContainer>
  </InfoSidePanel>
</template>

<style scoped lang="scss">
@import '@/app/styles/variables';

.email {
  margin: 0px auto;
  padding: 10px;
  font-family: $font-mono;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  transition: $transition;

  @media (hover: hover) {
    &:hover {
      color: #60ffd9;
      transform: translateY(-5px);
    }
  }
}
</style>
