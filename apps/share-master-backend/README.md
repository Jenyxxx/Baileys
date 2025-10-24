# 共享掌柜拓客后端

Node.js + Express + Prisma 的百万级可扩展 REST API，支撑共享掌柜、奖励方案、专属管家、贵宾卡等模块。采用 PostgreSQL / Redis / MongoDB 组合：

- **PostgreSQL**：核心交易与账户数据
- **Redis**：账号态势缓存、热数据、限流
- **MongoDB**：行为日志、异常追踪

## 快速开始

```bash
cd apps/share-master-backend
yarn install
npx prisma generate
yarn dev
```

默认监听 `http://localhost:4080`，健康检查位于 `/health`。

## API 模块

- `GET /api/shared-managers`：掌柜列表、含奖励方案与管家映射
- `POST /api/shared-managers`：创建掌柜
- `POST /api/shared-managers/:id/assign-reward`：绑定奖励方案
- `POST /api/shared-managers/:id/assign-concierge`：绑定专属管家
- `POST /api/shared-managers/:id/unassign-concierge`：解绑管家
- `GET /api/reward-plans` / `POST /api/reward-plans`
- `GET /api/concierges` / `POST /api/concierges`
- `GET /api/vip-cards` / `POST /api/vip-cards`

所有请求体使用 `zod` 校验，错误统一返回 422/400。

## 架构原则

- 分层：Router → Service → Prisma Repository
- Observability：pino + morgan 日志，MongoDB 事件日志表
- 可扩展性：Prisma schema 预留 EventLog、Merchant 关联，便于多租户扩展
- 安全：Helmet、CORS 白名单、JSON 限流、后续可对接 API Key/Token 鉴权

## 测试建议

- 使用 Jest / Vitest 对 Service 层单测（mock Prisma）
- Supertest 覆盖主要 REST API
- Contract Testing 与前端接口保持一致
