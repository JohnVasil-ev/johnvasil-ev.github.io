<script setup lang="ts">
const { opacity = 1 } = defineProps<{
  opacity?: number;
}>();
</script>

<template>
  <svg viewBox="0 0 100 100" fill="#081426" xmlns="http://www.w3.org/2000/svg">
    <title>Logo</title>
    <path stroke="#64FFDA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
      d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z" />
    <g :style="{ opacity }">
      <polygon fill="#64FFDA" points="26,37 32,37 46,67 40,67" />
      <polygon fill="#64FFDA" points="39,37 45,37 59,67 53,67" />
      <polygon fill="#64FFDA" points="67,37 73,37 59,67 53,67" />
    </g>
  </svg>
</template>
