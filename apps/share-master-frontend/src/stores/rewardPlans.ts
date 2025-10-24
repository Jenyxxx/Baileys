import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '../services/api';

export interface RewardPlan {
  id: string;
  name: string;
  topUpAmount: number;
  managerQuota: number;
  directRatio: number;
  indirectRatio: number;
  benefitDurationMonths: number;
  tags: string[];
}

const presetPlans: RewardPlan[] = [
  {
    id: 'rp-001',
    name: '星耀掌柜激励',
    topUpAmount: 20000,
    managerQuota: 50,
    directRatio: 18,
    indirectRatio: 6,
    benefitDurationMonths: 12,
    tags: ['all', 'beauty']
  },
  {
    id: 'rp-002',
    name: '臻享贵宾计划',
    topUpAmount: 15000,
    managerQuota: 40,
    directRatio: 15,
    indirectRatio: 5,
    benefitDurationMonths: 9,
    tags: ['all', 'dining']
  },
  {
    id: 'rp-003',
    name: '热力成长计划',
    topUpAmount: 10000,
    managerQuota: 80,
    directRatio: 12,
    indirectRatio: 4,
    benefitDurationMonths: 6,
    tags: ['all', 'tea']
  }
];

export const useRewardPlanStore = defineStore('rewardPlans', () => {
  const plans = ref<RewardPlan[]>(presetPlans);
  const loading = ref(false);

  async function fetchPlans() {
    loading.value = true;
    try {
      const response = await api.get('/reward-plans');
      plans.value = response.data;
    } catch (error) {
      console.warn('fallback to preset plans', error);
    } finally {
      loading.value = false;
    }
  }

  async function createPlan(payload: Partial<RewardPlan>) {
    const response = await api.post('/reward-plans', payload);
    plans.value.push(response.data);
  }

  return { plans, loading, fetchPlans, createPlan };
});
