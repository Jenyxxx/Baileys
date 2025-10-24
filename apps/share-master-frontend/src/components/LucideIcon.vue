<template>
  <img
    :src="`https://unpkg.com/lucide-static@latest/icons/${name}.svg`"
    :alt="name"
    :class="['inline-block', sizeClass, props.class]"
    loading="lazy"
    referrerpolicy="no-referrer"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Size = 'xs' | 'sm' | 'md' | 'lg';

const props = defineProps<{ name: string; size?: Size; class?: string }>();

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'h-3 w-3';
    case 'sm':
      return 'h-4 w-4';
    case 'lg':
      return 'h-8 w-8';
    default:
      return 'h-5 w-5';
  }
});
</script>
