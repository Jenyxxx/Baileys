import { Router } from 'express';
import { prisma } from '../../config/prisma.js';
import { SharedManagerService } from './service.js';

const service = new SharedManagerService(prisma);
export const sharedManagerRouter = Router();

sharedManagerRouter.get('/', async (_req, res) => {
  const result = await service.list();
  res.json(result);
});

sharedManagerRouter.post('/', async (req, res, next) => {
  try {
    const created = await service.create(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});

sharedManagerRouter.post('/:id/assign-reward', async (req, res, next) => {
  try {
    const updated = await service.assignReward(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    next(error);
  }
});

sharedManagerRouter.post('/:id/assign-concierge', async (req, res, next) => {
  try {
    const updated = await service.assignConcierge(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    next(error);
  }
});

sharedManagerRouter.post('/:id/unassign-concierge', async (req, res, next) => {
  try {
    const updated = await service.unassignConcierge(req.params.id);
    res.json(updated);
  } catch (error) {
    next(error);
  }
});
