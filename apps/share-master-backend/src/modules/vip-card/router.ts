import { Router } from 'express';
import { prisma } from '../../config/prisma.js';
import { VipCardService } from './service.js';

const service = new VipCardService(prisma);
export const vipCardRouter = Router();

vipCardRouter.get('/', async (_req, res) => {
  const result = await service.list();
  res.json(result);
});

vipCardRouter.post('/', async (req, res, next) => {
  try {
    const created = await service.create(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});
