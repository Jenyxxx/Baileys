import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import pinoHttp from 'pino-http';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';
import { apiRouter } from './api/router.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: '*', maxAge: 86400 }));
app.use(express.json({ limit: '1mb' }));
app.use(pinoHttp({ logger }));
app.use(morgan('tiny'));

app.use('/api', apiRouter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  logger.error({ err }, 'Unhandled error');
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(env.port, () => {
  logger.info(`Share Master API listening on ${env.port}`);
});
