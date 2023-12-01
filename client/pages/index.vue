<script setup lang="ts">
import { Hero } from '@/widgets';
</script>

<template>
  <main class="content">
    <Hero />
  </main>
</template>

<style scoped lang="scss">
.content {
  padding: 0px 150px;
  margin: 0px auto;
  max-width: 1600px;
  min-height: 100vh;
}

@media (max-width: 1080px) {
  .content {
    padding: 0px 100px;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 0px 50px;
  }
}

@media (max-width: 480px) {
  .content {
    padding: 0px 25px;
  }
}
</style>
