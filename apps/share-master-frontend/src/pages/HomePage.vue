<template>
  <section class="flex h-full flex-col overflow-hidden">
    <div class="grid flex-1 grid-cols-1 gap-4 overflow-hidden px-4 pb-6 pt-4 sm:grid-cols-2 xl:grid-cols-3">
      <HomeMenuCard
        v-for="item in menuItems"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
        :to="item.to"
        :image="item.image"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import HomeMenuCard from '../components/HomeMenuCard.vue';

const menuItems = computed(() => [
  {
    title: '共享掌柜',
    description: '统一管理掌柜生命周期、代理与收益分配',
    icon: 'user-cog',
    to: '/shared-managers',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: '奖励方案',
    description: '设计多层级激励策略，驱动拓客活跃度',
    icon: 'trophy',
    to: '/reward-plans',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: '专属管家',
    description: '匹配行业顾问，保障掌柜服务体验',
    icon: 'briefcase-business',
    to: '/concierge',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: '贵宾卡',
    description: '发放数字化贵宾卡，沉淀高价值客群',
    icon: 'badge-percent',
    to: '/vip-cards',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: '数据洞察',
    description: '实时掌控拓客增长、拉新转化率',
    icon: 'chart-noise',
    to: '/analytics',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: '运营编排',
    description: '自动化触达客户、触发营销闭环',
    icon: 'workflow',
    to: '/operations',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
  }
]);
</script>
