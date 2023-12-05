<script setup lang="ts">
import { BaseSeo, OpenGraphSeo, TwitterSeo, YMetrika } from '@/app/seo';
import { ScreenLoader } from '@/widgets';

const lang = "en";

const isLoaded = ref(false);
const setLoaded = () => isLoaded.value = true;
</script>

<template>
  <Html :lang="lang">

  <Head>
    <BaseSeo />
    <OpenGraphSeo />
    <TwitterSeo />
    <YMetrika />
    <Title>Ivan Vasiliev | Portfolio</Title>
  </Head>

  <Body>
    <NuxtLayout v-if="isLoaded">
      <NuxtPage />
    </NuxtLayout>
    <ScreenLoader v-else :set-loaded="setLoaded" />
  </Body>

  </Html>
</template>

<style lang="scss">
@use '@/app/styles/global.scss';
</style>
