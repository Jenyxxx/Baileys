import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '../services/api';

export interface Concierge {
  id: string;
  name: string;
  expertise: string;
  region: string;
  rating: number;
  activeManagers: number;
  avatar: string;
}

const presetConcierges: Concierge[] = [
  {
    id: 'cc-001',
    name: 'Grace',
    expertise: '美容顾问',
    region: '上海',
    rating: 4.9,
    activeManagers: 26,
    avatar: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'cc-002',
    name: 'Leo',
    expertise: '奶茶顾问',
    region: '广州',
    rating: 4.7,
    activeManagers: 18,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'cc-003',
    name: 'Mia',
    expertise: '餐饮顾问',
    region: '杭州',
    rating: 4.8,
    activeManagers: 22,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
  }
];

export const useConciergeStore = defineStore('concierge', () => {
  const concierges = ref<Concierge[]>(presetConcierges);
  const loading = ref(false);

  async function fetchConcierges() {
    loading.value = true;
    try {
      const response = await api.get('/concierges');
      concierges.value = response.data;
    } catch (error) {
      console.warn('fallback to preset concierges', error);
    } finally {
      loading.value = false;
    }
  }

  async function assign(managerId: string, conciergeId: string) {
    await api.post(`/shared-managers/${managerId}/assign-concierge`, { conciergeId });
  }

  return { concierges, loading, fetchConcierges, assign };
});
