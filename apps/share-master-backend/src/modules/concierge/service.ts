import { PrismaClient } from '@prisma/client';
import { createConciergeSchema } from './model.js';

export class ConciergeService {
  constructor(private readonly prisma: PrismaClient) {}

  list() {
    return this.prisma.concierge.findMany({
      include: { sharedManagers: true }
    });
  }

  async create(payload: unknown) {
    const data = createConciergeSchema.parse(payload);
    return this.prisma.concierge.create({ data });
  }
}
