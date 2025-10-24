<template>
  <TabScaffold
    title="奖励方案工坊"
    subtitle="REWARD DESIGN"
    description="灵活设置充值门槛、掌柜配额与多级客源分润比例，支持动态调整与AB测试，驱动掌柜拓客积极性。"
    :tabs="tabs"
    v-model:currentTab="currentTab"
  >
    <template #actions>
      <button class="rounded-full bg-brand-night/70 px-4 py-2 text-xs text-brand-gold" @click="openCreator">新建方案</button>
    </template>
    <div class="grid h-full grid-cols-1 gap-4 overflow-hidden px-6 pb-6 pt-4 xl:grid-cols-2">
      <article
        v-for="plan in filteredPlans"
        :key="plan.id"
        class="flex flex-col gap-4 rounded-[24px] bg-brand-night/70 p-6 text-brand-gold shadow-lg"
      >
        <header class="flex items-center justify-between">
          <div>
            <h3 class="font-display text-xl font-semibold text-brand-gold">{{ plan.name }}</h3>
            <p class="text-xs uppercase tracking-[0.3em] text-brand-gold/60">收益期 {{ plan.benefitDurationMonths }} 个月</p>
          </div>
          <LucideIcon name="trophy" size="md" class="rounded-2xl bg-brand-night/60 p-3" />
        </header>
        <dl class="grid grid-cols-2 gap-3 text-xs text-brand-gold/80">
          <div class="rounded-2xl bg-brand-night/50 p-4">
            <dt class="uppercase tracking-[0.2em] text-[10px] text-brand-gold/60">充值金额</dt>
            <dd class="text-lg font-semibold text-brand-gold">￥{{ plan.topUpAmount.toLocaleString() }}</dd>
          </div>
          <div class="rounded-2xl bg-brand-night/50 p-4">
            <dt class="uppercase tracking-[0.2em] text-[10px] text-brand-gold/60">掌柜数量</dt>
            <dd class="text-lg font-semibold text-brand-gold">{{ plan.managerQuota }} 位</dd>
          </div>
          <div class="rounded-2xl bg-brand-night/50 p-4">
            <dt class="uppercase tracking-[0.2em] text-[10px] text-brand-gold/60">直接客源比例</dt>
            <dd class="text-lg font-semibold text-brand-gold">{{ plan.directRatio }}%</dd>
          </div>
          <div class="rounded-2xl bg-brand-night/50 p-4">
            <dt class="uppercase tracking-[0.2em] text-[10px] text-brand-gold/60">间接客源比例</dt>
            <dd class="text-lg font-semibold text-brand-gold">{{ plan.indirectRatio }}%</dd>
          </div>
        </dl>
        <footer class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-brand-gold/60">
            <span v-for="tag in plan.tags" :key="tag" class="rounded-full bg-brand-tagBg px-3 py-1 text-brand-tagText">{{ tag }}</span>
          </div>
          <button class="rounded-full bg-gradient-to-r from-brand-buttonLeft to-brand-buttonRight px-4 py-2 text-xs font-medium text-brand-night">
            绑定掌柜
          </button>
        </footer>
      </article>
    </div>
  </TabScaffold>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import LucideIcon from '../components/LucideIcon.vue';
import TabScaffold, { type TabItem } from '../components/TabScaffold.vue';
import { useRewardPlanStore } from '../stores/rewardPlans';

const store = useRewardPlanStore();
const currentTab = ref('all');

const tabs: TabItem[] = [
  { key: 'all', label: '全部方案' },
  { key: 'beauty', label: '美容行业' },
  { key: 'tea', label: '奶茶行业' },
  { key: 'dining', label: '餐饮行业' }
];

const filteredPlans = computed(() =>
  store.plans.filter((plan) => currentTab.value === 'all' || plan.tags.includes(currentTab.value))
);

function openCreator() {
  console.info('open plan creator');
}
</script>
