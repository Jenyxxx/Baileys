<template>
  <RouterLink
    :to="to"
    class="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[28px] bg-brand-night/70 p-6 text-brand-gold shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-brand-night/80"
  >
    <div class="flex items-center justify-between">
      <LucideIcon :name="icon" size="lg" class="rounded-2xl bg-brand-night/60 p-3" />
      <LucideIcon name="arrow-up-right" size="sm" class="text-brand-gold/70" />
    </div>
    <div>
      <h2 class="font-display text-2xl font-semibold text-brand-gold">{{ title }}</h2>
      <p class="mt-2 text-sm text-brand-gold/70">{{ description }}</p>
    </div>
    <img :src="image" class="absolute -bottom-8 right-0 w-40 opacity-70 transition-all duration-300 group-hover:opacity-90" alt="卡片背景" loading="lazy" />
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LucideIcon from './LucideIcon.vue';

defineProps<{ title: string; description: string; to: string; icon: string; image: string }>();
</script>
