<template>
  <div class="flex flex-col gap-1 rounded-3xl bg-brand-night/70 p-5 text-brand-gold">
    <span class="text-sm uppercase tracking-[0.2em] text-brand-gold/70">{{ title }}</span>
    <strong class="text-2xl font-semibold">{{ value }}</strong>
    <span class="text-xs text-emerald-300">{{ trend }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; value: string; trend: string }>();
</script>
