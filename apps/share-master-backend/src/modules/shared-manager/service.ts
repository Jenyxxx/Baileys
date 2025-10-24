import { PrismaClient } from '@prisma/client';
import { assignConciergeSchema, assignRewardSchema, createSharedManagerSchema } from './model.js';

export class SharedManagerService {
  constructor(private readonly prisma: PrismaClient) {}

  list() {
    return this.prisma.sharedManager.findMany({
      include: {
        rewardPlan: true,
        concierge: true
      }
    });
  }

  async create(payload: unknown) {
    const data = createSharedManagerSchema.parse(payload);
    return this.prisma.sharedManager.create({ data });
  }

  async assignReward(managerId: string, payload: unknown) {
    const data = assignRewardSchema.parse(payload);
    return this.prisma.sharedManager.update({
      where: { id: managerId },
      data: { rewardPlanId: data.rewardPlanId }
    });
  }

  async assignConcierge(managerId: string, payload: unknown) {
    const data = assignConciergeSchema.parse(payload);
    return this.prisma.sharedManager.update({
      where: { id: managerId },
      data: { conciergeId: data.conciergeId }
    });
  }

  async unassignConcierge(managerId: string) {
    return this.prisma.sharedManager.update({
      where: { id: managerId },
      data: { conciergeId: null }
    });
  }
}
