<script setup lang="ts">
import { MountRevealContainer, Text } from '@/shared/components';
</script>

<template>
  <section class="hero-container">
    <MountRevealContainer :delay="100" offset="20px">
      <Text class="welcome" font="mono">
        Hi, my name is
      </Text>
    </MountRevealContainer>
    <MountRevealContainer :delay="200" offset="20px">
      <Text class="big-heading name">
        Ivan Vasiliev.
      </Text>
    </MountRevealContainer>
    <MountRevealContainer :delay="300" offset="20px">
      <Text class="big-heading label">
        I am a front-end<br />developer.
      </Text>
    </MountRevealContainer>
    <MountRevealContainer class="description" :delay="400" offset="20px">
      <Text>
        Currently, I'm focused on imroving my skills and also bulding modern, fast and powerfull
        web applications at <a class="link" href="https://ibs.ru/" target="_blank">IBS</a>.
      </Text>
    </MountRevealContainer>
  </section>
</template>

<style scoped lang="scss">
@import '@/app/styles/variables';

.hero-container {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0px;
  margin: 0px auto;
  max-width: 1000px;
}

.welcome {
  color: #60ffd9;
}

.name {
  color: #b0cdf1;
}

.label {
  margin-top: 5px;
  line-height: 0.9;
}

.big-heading {
  font-weight: 600;
  font-size: clamp(40px, 8vw, 80px);
}

.description {
  margin: 20px 0px 0px;
  max-width: 540px;
}

.link {
  color: #60ffd9;

  &::after {
    content: "";
    width: 0px;
    height: 1px;
    bottom: 1px;
    opacity: 0.5;
    display: block;
    position: relative;
    background-color: #009076;
    transition: $transition;
  }

  @media (hover: hover) {
    &:hover::after {
      width: 100%;
    }
  }
}
</style>
