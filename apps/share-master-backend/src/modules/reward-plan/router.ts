import { Router } from 'express';
import { prisma } from '../../config/prisma.js';
import { RewardPlanService } from './service.js';

const service = new RewardPlanService(prisma);
export const rewardPlanRouter = Router();

rewardPlanRouter.get('/', async (_req, res) => {
  const result = await service.list();
  res.json(result);
});

rewardPlanRouter.post('/', async (req, res, next) => {
  try {
    const created = await service.create(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});
