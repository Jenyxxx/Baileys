# 共享掌柜拓客前端

基于 Vue 3 + Tailwind CSS 的响应式管理端，覆盖 PC 与 iPhone 16 Pro Max 视图，承载共享掌柜、奖励方案、贵宾卡、专属管家等业务模块。界面遵循潘通流行色金色系设计，引用 Unsplash 高清素材与 Lucide Static 图标。

## 开发与构建

```bash
yarn install
yarn --cwd ../../ install # 若作为独立子项目也可单独装包
cd apps/share-master-frontend
yarn install
yarn dev
```

默认运行在 `http://localhost:5173`。

## 目录结构

- `src/pages`：九宫格首页与各模块内页
- `src/components`：复用组件（渐变头部、Tab 框架、卡片列表等）
- `src/stores`：Pinia 数据层，默认提供预置数据并对接后端 API
- `src/services/api.ts`：Axios 实例，指向后端 REST API

## 设计要点

- 九宫格首页，突出核心模块入口
- 内页 Tab 顶部导航，左右滑动体验，卡片化信息展示
- 无滚动条、柔和金黑配色、全圆角矩形视觉语言
- Lucide Static CDN 图标统一风格，Unsplash 高清图做卡片背景

## 测试建议

- 结合 Cypress / Playwright 进行端到端测试
- 通过 Vitest 或 Jest 编写组件与 store 的单测
- 使用 Storybook 校验组件状态与响应式表现
