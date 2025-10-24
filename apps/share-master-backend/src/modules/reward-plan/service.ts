import { PrismaClient } from '@prisma/client';
import { createRewardPlanSchema } from './model.js';

export class RewardPlanService {
  constructor(private readonly prisma: PrismaClient) {}

  list() {
    return this.prisma.rewardPlan.findMany({
      include: { sharedManagers: true }
    });
  }

  async create(payload: unknown) {
    const data = createRewardPlanSchema.parse(payload);
    return this.prisma.rewardPlan.create({ data });
  }
}
