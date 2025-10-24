import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/shared-managers',
    name: 'sharedManagers',
    component: () => import('../pages/SharedManagerPage.vue')
  },
  {
    path: '/reward-plans',
    name: 'rewardPlans',
    component: () => import('../pages/RewardPlanPage.vue')
  },
  {
    path: '/concierge',
    name: 'concierge',
    component: () => import('../pages/ConciergePage.vue')
  },
  {
    path: '/vip-cards',
    name: 'vipCards',
    component: () => import('../pages/VipCardPage.vue')
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import('../pages/AnalyticsPage.vue')
  },
  {
    path: '/operations',
    name: 'operations',
    component: () => import('../pages/OperationsPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
