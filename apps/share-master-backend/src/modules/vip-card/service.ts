import { PrismaClient } from '@prisma/client';
import { createVipCardSchema } from './model.js';

export class VipCardService {
  constructor(private readonly prisma: PrismaClient) {}

  list() {
    return this.prisma.vipCard.findMany({
      include: { merchant: true }
    });
  }

  async create(payload: unknown) {
    const data = createVipCardSchema.parse(payload);
    return this.prisma.vipCard.create({ data });
  }
}
