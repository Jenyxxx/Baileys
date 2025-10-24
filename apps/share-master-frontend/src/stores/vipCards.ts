import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '../services/api';

export interface VipCard {
  id: string;
  code: string;
  merchantId: string;
  merchantName: string;
  tier: string;
  issueCount: number;
  redemptionRate: number;
  benefits: string[];
  cover: string;
}

const presetCards: VipCard[] = [
  {
    id: 'vc-001',
    code: 'GOLD-2024',
    merchantId: 'gm-001',
    merchantName: '璀璨医美',
    tier: '金卡',
    issueCount: 1200,
    redemptionRate: 0.46,
    benefits: ['到店礼遇', '专属美容师', '周年焕肤券'],
    cover: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'vc-002',
    code: 'BUBBLE-66',
    merchantId: 'gm-002',
    merchantName: '沐光茶饮',
    tier: '黑金卡',
    issueCount: 980,
    redemptionRate: 0.38,
    benefits: ['新品抢先', '社群秒杀', '生日专享'],
    cover: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'vc-003',
    code: 'DINNER-88',
    merchantId: 'gm-003',
    merchantName: '隽味宴会',
    tier: '尊享卡',
    issueCount: 720,
    redemptionRate: 0.29,
    benefits: ['私房菜单', '宴会管家', '免服务费'],
    cover: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=200&q=80'
  }
];

export const useVipCardStore = defineStore('vipCards', () => {
  const cards = ref<VipCard[]>(presetCards);
  const loading = ref(false);

  async function fetchCards() {
    loading.value = true;
    try {
      const response = await api.get('/vip-cards');
      cards.value = response.data;
    } catch (error) {
      console.warn('fallback to preset vip cards', error);
    } finally {
      loading.value = false;
    }
  }

  async function issueCard(payload: Partial<VipCard>) {
    const response = await api.post('/vip-cards', payload);
    cards.value.push(response.data);
  }

  return { cards, loading, fetchCards, issueCard };
});
