<template>
  <TabScaffold
    title="运营编排中心"
    subtitle="OPERATIONS"
    description="自动化编排掌柜、顾客触达流程，支持模板化活动、任务激励与AI推荐。"
    :tabs="tabs"
    v-model:currentTab="currentTab"
  >
    <div class="flex h-full flex-col gap-4 overflow-hidden px-6 pb-6 pt-4">
      <article class="flex flex-col gap-4 rounded-[24px] bg-brand-night/70 p-6 text-brand-gold shadow-lg">
        <header class="flex items-center justify-between">
          <h3 class="font-display text-xl font-semibold text-brand-gold">智能触达编排</h3>
          <LucideIcon name="workflow" size="md" class="rounded-2xl bg-brand-night/60 p-3" />
        </header>
        <p class="text-xs text-brand-gold/70">通过AI分析客群标签，自动匹配短信、企微、优惠券等多触点触达策略，支持A/B测试。</p>
        <div class="grid gap-3 text-xs text-brand-gold/80 md:grid-cols-3">
          <div class="rounded-2xl bg-brand-night/50 p-4">
            <h4 class="font-semibold text-brand-gold">美容复购剧本</h4>
            <p>专属管家 + 贵宾卡礼包</p>
          </div>
          <div class="rounded-2xl bg-brand-night/50 p-4">
            <h4 class="font-semibold text-brand-gold">奶茶节日上新</h4>
            <p>限定口味 + 社群裂变</p>
          </div>
          <div class="rounded-2xl bg-brand-night/50 p-4">
            <h4 class="font-semibold text-brand-gold">餐饮企业宴请</h4>
            <p>储值礼包 + 私域邀约</p>
          </div>
        </div>
      </article>
      <article class="flex flex-col gap-4 rounded-[24px] bg-brand-night/70 p-6 text-brand-gold shadow-lg">
        <header class="flex items-center justify-between">
          <h3 class="font-display text-xl font-semibold text-brand-gold">任务激励中心</h3>
          <LucideIcon name="target" size="md" class="rounded-2xl bg-brand-night/60 p-3" />
        </header>
        <ul class="text-xs text-brand-gold/70">
          <li>拉新任务：30 客户 / 周 · 奖励 ￥300</li>
          <li>贵宾卡激活：50 张 / 月 · 奖励 ￥500</li>
          <li>GMV 保底：￥300,000 / 月 · 奖励 ￥1,000</li>
        </ul>
      </article>
    </div>
  </TabScaffold>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LucideIcon from '../components/LucideIcon.vue';
import TabScaffold, { type TabItem } from '../components/TabScaffold.vue';

const currentTab = ref('orchestration');
const tabs: TabItem[] = [
  { key: 'orchestration', label: '编排剧本' },
  { key: 'missions', label: '任务激励' },
  { key: 'automation', label: '自动化' }
];
</script>
