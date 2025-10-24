import { z } from 'zod';

export const sharedManagerSchema = z.object({
  id: z.string(),
  name: z.string(),
  industry: z.enum(['美容', '奶茶', '餐饮', '其他']).default('其他'),
  region: z.string(),
  status: z.enum(['active', 'pending', 'frozen']).default('pending'),
  rewardPlanId: z.string().nullable(),
  conciergeId: z.string().nullable(),
  avatar: z.string().url().optional(),
  monthlyGmv: z.number().nonnegative().default(0),
  directCustomers: z.number().int().nonnegative().default(0),
  indirectCustomers: z.number().int().nonnegative().default(0)
});

export type SharedManagerDTO = z.infer<typeof sharedManagerSchema>;

export const createSharedManagerSchema = sharedManagerSchema
  .omit({ id: true })
  .extend({ name: z.string().min(2), industry: z.string(), region: z.string() });

export const assignRewardSchema = z.object({ rewardPlanId: z.string() });
export const assignConciergeSchema = z.object({ conciergeId: z.string() });
