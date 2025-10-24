import { z } from 'zod';

export const rewardPlanSchema = z.object({
  id: z.string(),
  name: z.string(),
  topUpAmount: z.number().nonnegative(),
  managerQuota: z.number().int().nonnegative(),
  directRatio: z.number().min(0).max(100),
  indirectRatio: z.number().min(0).max(100),
  benefitDurationMonths: z.number().int().positive(),
  tags: z.array(z.string()).default([])
});

export type RewardPlanDTO = z.infer<typeof rewardPlanSchema>;

export const createRewardPlanSchema = rewardPlanSchema.omit({ id: true }).extend({ name: z.string().min(2) });
