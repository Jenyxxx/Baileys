export interface EnvConfig {
  port: number;
  databaseUrl: string;
  redisUrl: string;
  mongoUrl: string;
  nodeEnv: 'development' | 'production' | 'test';
}

export const env: EnvConfig = {
  port: Number(process.env.PORT ?? 4080),
  databaseUrl: process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5432/share_master',
  redisUrl: process.env.REDIS_URL ?? 'redis://localhost:6379/0',
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/share-master-logs',
  nodeEnv: (process.env.NODE_ENV as EnvConfig['nodeEnv']) ?? 'development'
};
