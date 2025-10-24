<template>
  <div class="flex h-full flex-col">
    <div class="grid flex-1 grid-cols-1 gap-4 overflow-hidden px-6 pb-6 pt-4 sm:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="item in items"
        :key="item.id"
        class="group flex flex-col gap-4 rounded-[24px] bg-brand-night/70 p-5 text-brand-gold shadow-lg transition-all"
      >
        <header class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <img :src="item.avatar" alt="avatar" class="h-12 w-12 rounded-2xl object-cover" loading="lazy" />
            <div>
              <h3 class="font-display text-lg font-semibold text-brand-gold">{{ item.title }}</h3>
              <p class="text-xs uppercase tracking-[0.3em] text-brand-gold/60">{{ item.subtitle }}</p>
            </div>
          </div>
          <LucideIcon :name="item.statusIcon" size="sm" class="text-emerald-300" />
        </header>
        <dl class="grid grid-cols-2 gap-3 text-xs text-brand-gold/70">
          <div v-for="meta in item.meta" :key="meta.label" class="flex flex-col gap-1 rounded-2xl bg-brand-night/50 p-3">
            <dt class="uppercase tracking-[0.2em] text-[10px] text-brand-gold/60">{{ meta.label }}</dt>
            <dd class="text-sm text-brand-gold">{{ meta.value }}</dd>
          </div>
        </dl>
        <div class="flex items-center justify-between">
          <button
            class="rounded-full bg-gradient-to-r from-brand-buttonLeft to-brand-buttonRight px-4 py-2 text-xs font-medium text-brand-night shadow-md"
            @click="$emit('primary', item.id)"
          >
            {{ primaryLabel }}
          </button>
          <button
            class="rounded-full bg-brand-deleteBg px-4 py-2 text-xs font-medium text-brand-deleteText"
            @click="$emit('secondary', item.id)"
          >
            {{ secondaryLabel }}
          </button>
        </div>
      </article>
    </div>
    <footer class="flex items-center justify-between px-6 pb-6 text-xs text-brand-gold/60">
      <span>共 {{ items.length }} 条数据</span>
      <div class="flex gap-2">
        <button class="rounded-full bg-brand-night/60 px-3 py-1">上一页</button>
        <button class="rounded-full bg-brand-night/60 px-3 py-1">下一页</button>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import LucideIcon from './LucideIcon.vue';

defineProps<{
  items: Array<{
    id: string;
    title: string;
    subtitle: string;
    statusIcon: string;
    avatar: string;
    meta: Array<{ label: string; value: string }>;
  }>;
  primaryLabel: string;
  secondaryLabel: string;
}>();

defineEmits<{ primary: [id: string]; secondary: [id: string] }>();
</script>
