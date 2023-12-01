<script setup lang="ts">
// import { Navigation } from '@/features';
import { Logo } from '@/shared/components';
import { useTimer } from '@/shared/composables';

const elRef = ref<HTMLElement | null>(null);
useTimer(() => {
  if (elRef.value) {
    elRef.value.classList.add('visible');
  }
}, 100);
</script>

<template>
  <header ref="elRef">
    <Logo />
    <nav>
      <!-- <Navigation /> -->
      <div class="resume-container">
        <a class="resume" href="/resume.pdf" target="_blank">Resume</a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import '@/app/styles/variables';

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 800;
  padding: 0px 50px;
  height: 100px;
  backdrop-filter: blur(10px);
  transform: translateY(-100%);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

  &.visible {
    transform: initial;
  }

  &>nav {
    display: flex;
    align-items: center;
    position: relative;
    color: #b0cdf1;
    counter-reset: item 0;
    z-index: 12;
    gap: 15px;

    &>.resume-container {
      background-color: #64ffda;
      border-radius: 4px;

      &>.resume {
        color: #64ffda;
        background-color: #0a192f;
        border: 1px solid #64ffda;
        border-radius: 4px;
        padding: 0.75rem 1rem;
        font-family: $font-mono;
        line-height: 1;
        text-decoration: none;
        transition: $transition;
        font-size: 13px;

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
}

@media (max-width: 1080px) {
  header {
    padding: 0px 40px;
  }
}

@media (max-width: 768px) {
  header {
    padding: 0px 25px;
  }
}
</style>
