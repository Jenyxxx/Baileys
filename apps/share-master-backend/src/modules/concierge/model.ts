import { z } from 'zod';

export const conciergeSchema = z.object({
  id: z.string(),
  name: z.string(),
  expertise: z.string(),
  region: z.string(),
  rating: z.number().min(0).max(5),
  activeManagers: z.number().int().nonnegative(),
  avatar: z.string().url().optional()
});

export type ConciergeDTO = z.infer<typeof conciergeSchema>;

export const createConciergeSchema = conciergeSchema.omit({ id: true }).extend({ name: z.string().min(2) });
