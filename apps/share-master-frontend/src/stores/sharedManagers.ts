import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { api } from '../services/api';

type ManagerStatus = 'active' | 'pending' | 'frozen';

export interface SharedManager {
  id: string;
  name: string;
  industry: string;
  region: string;
  status: ManagerStatus;
  statusIcon: string;
  monthlyGmv: number;
  rewardPlanId: string | null;
  rewardPlanName?: string | null;
  directCustomers: number;
  indirectCustomers: number;
  avatar: string;
}

const presetManagers: SharedManager[] = [
  {
    id: 'gm-001',
    name: '陈璐',
    industry: '美容',
    region: '上海·徐汇',
    status: 'active',
    statusIcon: 'badge-check',
    monthlyGmv: 486000,
    rewardPlanId: 'rp-001',
    rewardPlanName: '星耀掌柜激励',
    directCustomers: 128,
    indirectCustomers: 312,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'gm-002',
    name: '李牧',
    industry: '奶茶',
    region: '深圳·南山',
    status: 'active',
    statusIcon: 'badge-check',
    monthlyGmv: 286000,
    rewardPlanId: 'rp-003',
    rewardPlanName: '热力成长计划',
    directCustomers: 96,
    indirectCustomers: 218,
    avatar: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'gm-003',
    name: '王雪',
    industry: '餐饮',
    region: '杭州·滨江',
    status: 'pending',
    statusIcon: 'clock-3',
    monthlyGmv: 168000,
    rewardPlanId: null,
    rewardPlanName: null,
    directCustomers: 45,
    indirectCustomers: 112,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  }
];

export const useSharedManagerStore = defineStore('sharedManagers', () => {
  const managers = ref<SharedManager[]>(presetManagers);
  const loading = ref(false);

  async function fetchManagers() {
    loading.value = true;
    try {
      const response = await api.get('/shared-managers');
      managers.value = response.data;
    } catch (error) {
      console.warn('fallback to preset managers', error);
    } finally {
      loading.value = false;
    }
  }

  function filteredManagers(status: ManagerStatus) {
    return managers.value.filter((manager) => manager.status === status);
  }

  const metrics = computed(() => [
    {
      title: '活跃掌柜',
      value: `${filteredManagers('active').length} 位`,
      trend: '▲ 12%',
      icon: 'users'
    },
    {
      title: '待审核',
      value: `${filteredManagers('pending').length} 位`,
      trend: '▼ 4%',
      icon: 'timer-reset'
    },
    {
      title: '月GMV',
      value: `￥${managers.value.reduce((sum, item) => sum + item.monthlyGmv, 0).toLocaleString()}`,
      trend: '▲ 18%',
      icon: 'line-chart'
    }
  ]);

  function openAssignReward(id: string) {
    console.info('open reward assignment for', id);
  }

  async function unassignConcierge(id: string) {
    await api.post(`/shared-managers/${id}/unassign-concierge`);
  }

  function openOnboardModal() {
    console.info('open onboarding modal');
  }

  return {
    managers,
    loading,
    metrics,
    fetchManagers,
    filteredManagers,
    openAssignReward,
    unassignConcierge,
    openOnboardModal
  };
});
