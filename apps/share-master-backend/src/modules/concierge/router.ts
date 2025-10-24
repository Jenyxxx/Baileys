import { Router } from 'express';
import { prisma } from '../../config/prisma.js';
import { ConciergeService } from './service.js';

const service = new ConciergeService(prisma);
export const conciergeRouter = Router();

conciergeRouter.get('/', async (_req, res) => {
  const result = await service.list();
  res.json(result);
});

conciergeRouter.post('/', async (req, res, next) => {
  try {
    const created = await service.create(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});
