import { Router } from 'express';
import { sharedManagerRouter } from '../modules/shared-manager/router.js';
import { rewardPlanRouter } from '../modules/reward-plan/router.js';
import { conciergeRouter } from '../modules/concierge/router.js';
import { vipCardRouter } from '../modules/vip-card/router.js';

export const apiRouter = Router();

apiRouter.use('/shared-managers', sharedManagerRouter);
apiRouter.use('/reward-plans', rewardPlanRouter);
apiRouter.use('/concierges', conciergeRouter);
apiRouter.use('/vip-cards', vipCardRouter);
