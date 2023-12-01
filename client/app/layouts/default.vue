<script setup lang="ts">
import { CursorFloatLight } from '@/shared/components';
import { Header, InfoPanels } from '@/widgets';
</script>

<template>
  <Header />
  <InfoPanels />
  <CursorFloatLight />
  <slot></slot>
</template>

<style scoped lang="scss"></style>
