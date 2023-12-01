<script setup lang="ts">
import { InfoSidePanel, Line, MountRevealContainer } from '@/shared/components';
import { GithubIcon } from '@/shared/icons';

const links = [
  {
    title: 'Github',
    href: 'https://github.com/JohnVasil-ev',
    icon: GithubIcon,
  },
];
</script>

<template>
  <InfoSidePanel side="left">
    <MountRevealContainer :delay="100" :initial-opactity="0">
      <ul class="social-list">
        <MountRevealContainer v-for="({ title, href, icon }, i) in links" is="li"
          :delay="300 + (links.length * 150 - i * 150)" :initial-opactity="0" :key="title">
          <a class="link" :href="href" target="_blank" :aria-label="title">
            <component :is="icon"></component>
          </a>
        </MountRevealContainer>
      </ul>
      <Line direction="vertical" size="90px" />
    </MountRevealContainer>
  </InfoSidePanel>
</template>

<style scoped lang="scss">
@import '@/app/styles/variables';

.social-list {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;

  & .link {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: $transition;
    padding: 5px;
    color: #b0cdf1;
    width: 20px;

    @media (hover: hover) {
      &:hover {
        color: #60ffd9;
        transform: translateY(-5px);
      }
    }

    &>svg {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
