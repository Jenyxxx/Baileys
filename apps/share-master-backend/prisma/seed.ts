import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const merchant = await prisma.merchant.upsert({
    where: { id: 'merchant-seed' },
    create: {
      id: 'merchant-seed',
      name: '共享掌柜旗舰店',
      industry: '综合',
      region: '全国'
    },
    update: {}
  });

  const rewardPlan = await prisma.rewardPlan.upsert({
    where: { id: 'reward-seed' },
    create: {
      id: 'reward-seed',
      name: '星耀掌柜激励',
      topUpAmount: 20000,
      managerQuota: 50,
      directRatio: 18,
      indirectRatio: 6,
      benefitDurationMonths: 12,
      tags: ['all', 'beauty']
    },
    update: {}
  });

  const concierge = await prisma.concierge.upsert({
    where: { id: 'concierge-seed' },
    create: {
      id: 'concierge-seed',
      name: 'Grace',
      expertise: '美容顾问',
      region: '上海',
      rating: 4.9,
      activeManagers: 26
    },
    update: {}
  });

  await prisma.sharedManager.upsert({
    where: { id: 'manager-seed' },
    create: {
      id: 'manager-seed',
      name: '陈璐',
      industry: '美容',
      region: '上海·徐汇',
      status: 'active',
      monthlyGmv: 486000,
      directCustomers: 128,
      indirectCustomers: 312,
      rewardPlanId: rewardPlan.id,
      conciergeId: concierge.id,
      merchantId: merchant.id
    },
    update: {}
  });

  await prisma.vipCard.upsert({
    where: { id: 'vip-card-seed' },
    create: {
      id: 'vip-card-seed',
      code: 'GOLD-2024',
      merchantId: merchant.id,
      tier: '金卡',
      issueCount: 1200,
      redemptionRate: 0.46,
      benefits: ['到店礼遇', '专属美容师', '周年焕肤券']
    },
    update: {}
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
