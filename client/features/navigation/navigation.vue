<script setup lang="ts">
import { MountRevealContainer } from '@/shared/components';

const anchors = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Experience',
    href: '#experience',
  },
  {
    title: 'Work',
    href: '#work',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];
</script>

<template>
  <ol class="anchor-list">
    <MountRevealContainer v-for="({ title, href }, i) in anchors" is="li" :delay="300 + (i * 150)" :initial-opactity="0"
      :key="title">
      <a class="anchor" :href="href">{{ title }}</a>
    </MountRevealContainer>
  </ol>
</template>

<style scoped lang="scss">
@import '@/app/styles/variables';

.anchor-list {
  counter-reset: anchors;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0px;
  margin: 0px;

  &>li {
    margin: 0 5px;

    &>.anchor {
      counter-increment: anchors 1;
      transition: $transition;
      padding: 10px;
      color: #b0cdf1;
      font-family: $font-mono;
      font-size: 13px;

      @media (hover: hover) {
        &:hover {
          color: #60ffd9;
        }
      }

      &::before {
        content: "0" counter(anchors) ".";
        margin-right: 5px;
        color: #60ffd9;
        font-size: 12px;
        text-align: right;
      }
    }
  }
}
</style>
