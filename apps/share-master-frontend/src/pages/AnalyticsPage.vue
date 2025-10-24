<template>
  <TabScaffold
    title="数据洞察"
    subtitle="INSIGHTS"
    description="监控掌柜拓客效率、客户生命周期价值与资金流转，支持百万级数据可视化。"
    :tabs="tabs"
    v-model:currentTab="currentTab"
  >
    <div class="grid h-full grid-cols-1 gap-4 overflow-hidden px-6 pb-6 pt-4 lg:grid-cols-2">
      <article class="flex flex-col gap-4 rounded-[24px] bg-brand-night/70 p-6 text-brand-gold shadow-lg">
        <header class="flex items-center justify-between">
          <h3 class="font-display text-xl font-semibold text-brand-gold">拓客渠道贡献</h3>
          <LucideIcon name="pie-chart" size="md" class="rounded-2xl bg-brand-night/60 p-3" />
        </header>
        <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80" class="h-48 w-full rounded-2xl object-cover" alt="chart" loading="lazy" />
        <ul class="text-xs text-brand-gold/70">
          <li>小程序裂变 · 45%</li>
          <li>贵宾卡核销 · 32%</li>
          <li>社群私域 · 18%</li>
          <li>广告投放 · 5%</li>
        </ul>
      </article>
      <article class="flex flex-col gap-4 rounded-[24px] bg-brand-night/70 p-6 text-brand-gold shadow-lg">
        <header class="flex items-center justify-between">
          <h3 class="font-display text-xl font-semibold text-brand-gold">资金流转</h3>
          <LucideIcon name="banknote" size="md" class="rounded-2xl bg-brand-night/60 p-3" />
        </header>
        <img src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=900&q=80" class="h-48 w-full rounded-2xl object-cover" alt="finance" loading="lazy" />
        <p class="text-xs text-brand-gold/70">实时监控充值、奖励发放与消费核销，提供风控预警。</p>
      </article>
    </div>
  </TabScaffold>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LucideIcon from '../components/LucideIcon.vue';
import TabScaffold, { type TabItem } from '../components/TabScaffold.vue';

const currentTab = ref('overview');
const tabs: TabItem[] = [
  { key: 'overview', label: '概览' },
  { key: 'funnels', label: '拉新漏斗' },
  { key: 'finance', label: '资金流转' }
];
</script>
