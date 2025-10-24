<template>
  <div class="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-3">
    <div
      v-for="metric in metrics"
      :key="metric.title"
      class="flex flex-col gap-2 rounded-[24px] bg-brand-night/70 p-5 text-brand-gold shadow-lg"
    >
      <div class="flex items-center justify-between">
        <h3 class="text-sm uppercase tracking-[0.2em] text-brand-gold/70">{{ metric.title }}</h3>
        <LucideIcon :name="metric.icon" size="sm" class="text-brand-gold/70" />
      </div>
      <p class="text-2xl font-semibold">{{ metric.value }}</p>
      <p class="text-xs text-emerald-300">{{ metric.trend }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import LucideIcon from './LucideIcon.vue';

defineProps<{
  metrics: Array<{ title: string; value: string; trend: string; icon: string }>;
}>();
</script>
