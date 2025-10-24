<template>
  <TabScaffold
    title="共享掌柜中心"
    subtitle="SHARED MANAGER"
    description="统一管理掌柜与代理权益，支持批量入驻、智能分配奖励方案，并与拓客增长数据实时联动。"
    :tabs="tabs"
    v-model:currentTab="currentTab"
  >
    <template #actions>
      <button class="rounded-full bg-brand-night/70 px-4 py-2 text-xs text-brand-gold" @click="openOnboard">批量入驻</button>
    </template>
    <template #default>
      <div class="flex h-full flex-col">
        <MetricsGrid :metrics="metrics" />
        <CardList
          :items="managerCards"
          primary-label="指派奖励方案"
          secondary-label="解绑管家"
          @primary="assignPlan"
          @secondary="unassignConcierge"
        />
      </div>
    </template>
  </TabScaffold>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import CardList from '../components/CardList.vue';
import MetricsGrid from '../components/MetricsGrid.vue';
import TabScaffold, { type TabItem } from '../components/TabScaffold.vue';
import { useSharedManagerStore } from '../stores/sharedManagers';

const store = useSharedManagerStore();
const currentTab = ref('active');

const tabs: TabItem[] = [
  { key: 'active', label: '活跃掌柜' },
  { key: 'pending', label: '待审核' },
  { key: 'frozen', label: '风控冻结' }
];

const metrics = computed(() => store.metrics);

const managerCards = computed(() =>
  store.filteredManagers(currentTab.value).map((manager) => ({
    id: manager.id,
    title: manager.name,
    subtitle: `${manager.industry} · ${manager.region}`,
    statusIcon: manager.statusIcon,
    avatar: manager.avatar,
    meta: [
      { label: '月GMV', value: `￥${manager.monthlyGmv.toLocaleString()}` },
      { label: '绑定方案', value: manager.rewardPlanName ?? '未分配' },
      { label: '直属客源', value: `${manager.directCustomers} 人` },
      { label: '间接客源', value: `${manager.indirectCustomers} 人` }
    ]
  }))
);

function assignPlan(id: string) {
  store.openAssignReward(id);
}

function unassignConcierge(id: string) {
  store.unassignConcierge(id);
}

function openOnboard() {
  store.openOnboardModal();
}
</script>
