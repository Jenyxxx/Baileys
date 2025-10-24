<template>
  <TabScaffold
    title="贵宾卡引流中心"
    subtitle="VIP CARDS"
    description="通过数字化贵宾卡，打通掌柜拓客、客户沉淀与权益发放闭环，精准驱动复购。"
    :tabs="tabs"
    v-model:currentTab="currentTab"
  >
    <template #actions>
      <button class="rounded-full bg-brand-night/70 px-4 py-2 text-xs text-brand-gold" @click="issueVipCard">发放贵宾卡</button>
    </template>
    <div class="grid h-full grid-cols-1 gap-4 overflow-hidden px-6 pb-6 pt-4 lg:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="card in filteredCards"
        :key="card.id"
        class="flex flex-col gap-4 rounded-[24px] bg-brand-night/70 p-6 text-brand-gold shadow-lg"
      >
        <header class="flex items-center justify-between">
          <div>
            <h3 class="font-display text-xl font-semibold text-brand-gold">{{ card.tier }} 贵宾卡</h3>
            <p class="text-xs uppercase tracking-[0.3em] text-brand-gold/60">{{ card.merchantName }}</p>
          </div>
          <img :src="card.cover" class="h-16 w-16 rounded-2xl object-cover" loading="lazy" />
        </header>
        <div class="rounded-2xl bg-brand-night/50 p-4 text-sm text-brand-gold/80">
          <p>总发行：{{ card.issueCount }} 张</p>
          <p>核销率：{{ (card.redemptionRate * 100).toFixed(1) }}%</p>
        </div>
        <ul class="flex flex-wrap gap-2 text-xs text-brand-gold/80">
          <li v-for="benefit in card.benefits" :key="benefit" class="rounded-full bg-brand-tagBg px-3 py-1 text-brand-tagText">{{ benefit }}</li>
        </ul>
        <button class="rounded-full bg-gradient-to-r from-brand-buttonLeft to-brand-buttonRight px-4 py-2 text-xs font-medium text-brand-night">
          查看拓客数据
        </button>
      </article>
    </div>
  </TabScaffold>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import TabScaffold, { type TabItem } from '../components/TabScaffold.vue';
import { useVipCardStore } from '../stores/vipCards';

const store = useVipCardStore();
const currentTab = ref('all');

const tabs: TabItem[] = [
  { key: 'all', label: '全部贵宾卡' },
  { key: 'active', label: '热销中' },
  { key: 'expiring', label: '即将到期' }
];

const filteredCards = computed(() =>
  store.cards.filter((card) => {
    if (currentTab.value === 'all') return true;
    if (currentTab.value === 'active') return card.redemptionRate > 0.3;
    return card.redemptionRate <= 0.3;
  })
);

function issueVipCard() {
  console.info('issue vip card');
}
</script>
