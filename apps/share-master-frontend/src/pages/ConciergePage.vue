<template>
  <TabScaffold
    title="专属管家网络"
    subtitle="CONCIERGE"
    description="建立区域化行业顾问团队，为掌柜提供开店、营销、运营全链路陪伴与赋能。"
    :tabs="tabs"
    v-model:currentTab="currentTab"
  >
    <template #actions>
      <button class="rounded-full bg-brand-night/70 px-4 py-2 text-xs text-brand-gold">新增管家</button>
    </template>
    <div class="grid h-full grid-cols-1 gap-4 overflow-hidden px-6 pb-6 pt-4 lg:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="concierge in filteredConcierge"
        :key="concierge.id"
        class="flex flex-col gap-4 rounded-[24px] bg-brand-night/70 p-6 text-brand-gold shadow-lg"
      >
        <header class="flex items-center gap-4">
          <img :src="concierge.avatar" class="h-16 w-16 rounded-3xl object-cover" loading="lazy" />
          <div>
            <h3 class="font-display text-xl font-semibold text-brand-gold">{{ concierge.name }}</h3>
            <p class="text-xs uppercase tracking-[0.3em] text-brand-gold/60">{{ concierge.expertise }}</p>
          </div>
        </header>
        <div class="flex items-center justify-between rounded-2xl bg-brand-night/50 p-4 text-sm text-brand-gold/80">
          <span>负责区域：{{ concierge.region }}</span>
          <span>服务掌柜：{{ concierge.activeManagers }} 位</span>
        </div>
        <div class="flex items-center justify-between text-xs text-brand-gold/70">
          <span class="flex items-center gap-1"><LucideIcon name="star" size="sm" /> 评分 {{ concierge.rating.toFixed(1) }}</span>
          <button class="rounded-full bg-gradient-to-r from-brand-buttonLeft to-brand-buttonRight px-4 py-2 text-xs font-medium text-brand-night">
            分配掌柜
          </button>
        </div>
      </article>
    </div>
  </TabScaffold>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import LucideIcon from '../components/LucideIcon.vue';
import TabScaffold, { type TabItem } from '../components/TabScaffold.vue';
import { useConciergeStore } from '../stores/concierge';

const store = useConciergeStore();
const currentTab = ref('all');

const tabs: TabItem[] = [
  { key: 'all', label: '全部管家' },
  { key: 'beauty', label: '美容顾问' },
  { key: 'tea', label: '奶茶顾问' },
  { key: 'dining', label: '餐饮顾问' }
];

const filteredConcierge = computed(() =>
  store.concierges.filter((item) => currentTab.value === 'all' || item.expertise.includes(tabs.find((tab) => tab.key === currentTab.value)?.label ?? ''))
);
</script>
