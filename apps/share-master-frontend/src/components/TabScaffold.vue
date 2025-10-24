<template>
  <section class="flex h-full flex-col">
    <header class="flex flex-col gap-3 bg-gradient-to-r from-brand-sand/40 to-brand-gold/50 px-6 pb-4 pt-6 text-brand-espresso">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-brand-espresso/60">{{ subtitle }}</p>
          <h2 class="font-display text-2xl font-semibold">{{ title }}</h2>
        </div>
        <slot name="actions" />
      </div>
      <p class="max-w-3xl text-sm text-brand-espresso/70">{{ description }}</p>
      <nav class="flex gap-2 overflow-x-auto pb-1 text-sm text-brand-espresso" :class="{ 'no-scrollbar': true }">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="group relative rounded-full px-4 py-2 transition-colors"
          :class="[
            currentTab === tab.key
              ? 'bg-brand-night/70 text-brand-gold'
              : 'bg-brand-night/30 text-brand-espresso/70 hover:bg-brand-night/40'
          ]"
          @click="$emit('update:currentTab', tab.key)"
        >
          <span>{{ tab.label }}</span>
          <span
            v-if="currentTab === tab.key"
            class="absolute inset-x-4 -bottom-1 h-1 rounded-full bg-brand-accent"
          />
        </button>
      </nav>
    </header>
    <div class="relative flex-1 overflow-hidden bg-brand-night/40">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
export interface TabItem {
  key: string;
  label: string;
}

defineProps<{
  title: string;
  subtitle: string;
  description: string;
  tabs: TabItem[];
  currentTab: string;
}>();

defineEmits<{ 'update:currentTab': [key: string] }>();
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
