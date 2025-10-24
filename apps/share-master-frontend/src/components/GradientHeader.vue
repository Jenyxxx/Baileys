<template>
  <header class="relative flex flex-col gap-6 overflow-hidden rounded-[28px] bg-gradient-to-r from-brand-sand to-brand-gold p-6 text-brand-espresso shadow-xl sm:p-10">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="text-sm uppercase tracking-[0.3em] text-brand-espresso/70">共享掌柜 · 拓客运营</p>
        <h1 class="mt-1 font-display text-3xl font-semibold sm:text-4xl">商家增长中枢</h1>
      </div>
      <div class="flex items-center gap-3 rounded-full bg-brand-night/70 px-4 py-2 text-sm text-brand-gold">
        <LucideIcon name="zap" size="md" class="opacity-80" />
        <span>实时 GMV：￥2,380,000</span>
      </div>
    </div>
    <div class="flex flex-wrap gap-4 text-sm text-brand-espresso/80 sm:text-base">
      <div class="flex items-center gap-2 rounded-full bg-brand-night/70 px-4 py-2 text-brand-gold">
        <LucideIcon name="sparkles" size="sm" class="opacity-80" />
        <span>专为美容 / 奶茶 / 餐饮门店打造</span>
      </div>
      <div class="flex items-center gap-2 rounded-full bg-brand-night/70 px-4 py-2 text-brand-gold">
        <LucideIcon name="shield-check" size="sm" class="opacity-80" />
        <span>百万级弹性架构</span>
      </div>
      <div class="flex items-center gap-2 rounded-full bg-brand-night/70 px-4 py-2 text-brand-gold">
        <LucideIcon name="orbit" size="sm" class="opacity-80" />
        <span>AI 赋能拓客引流</span>
      </div>
    </div>
    <div class="grid gap-3 sm:grid-cols-3">
      <StatCard title="活跃掌柜" value="326" trend="▲ 12%" />
      <StatCard title="新拓客" value="1,824" trend="▲ 31%" />
      <StatCard title="奖励发放" value="￥582,430" trend="▲ 8%" />
    </div>
  </header>
</template>

<script setup lang="ts">
import LucideIcon from './LucideIcon.vue';
import StatCard from './StatCard.vue';
</script>
