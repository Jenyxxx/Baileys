import { z } from 'zod';

export const vipCardSchema = z.object({
  id: z.string(),
  code: z.string(),
  merchantId: z.string(),
  tier: z.string(),
  issueCount: z.number().int().nonnegative(),
  redemptionRate: z.number().min(0).max(1),
  benefits: z.array(z.string()),
  cover: z.string().url().optional()
});

export type VipCardDTO = z.infer<typeof vipCardSchema>;

export const createVipCardSchema = vipCardSchema.omit({ id: true });
