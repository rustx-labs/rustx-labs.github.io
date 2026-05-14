# RustX Labs

<p>
  <a href="https://github.com/rustx-labs/rustx-labs.github.io/actions/workflows/gh-pages.yml"><img src="https://github.com/rustx-labs/rustx-labs.github.io/actions/workflows/gh-pages.yml/badge.svg" alt="GitHub Pages"></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61dafb?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss" alt="Tailwind CSS">
  <a href="https://rustx-labs.github.io"><img src="https://img.shields.io/badge/site-live-brightgreen" alt="Site Live"></a>
  <a href="./README.md"><img src="https://img.shields.io/badge/lang-English-blue" alt="English"></a>
</p>

> 专注 Rust 工程化、交付流水线与开发者体验的工程团队。

本仓库包含 [rustx-labs.github.io](https://rustx-labs.github.io) 的源码，即 RustX Labs 的官方网站及软件更新代理服务。

## 项目概述

RustX Labs 是一个致力于构建生产级 Rust 工程基础设施的团队。本网站承担两项职能：

1. **团队主页** — 展示我们的核心方向、工程计划和社区协作模式。
2. **更新代理** — 提供一个稳定的、托管于 GitHub Pages 的端点，用于代理软件更新清单并通过我们的域名重定向下载地址。

### 支持的软件

更新代理目前为以下软件提供更新清单：

| 软件 | 说明 |
|------|------|
| **NovaDB** | 面向开发者的快速、现代数据库客户端 |
| **Sky Monitor** | 轻量级 macOS 菜单栏系统监控工具 |

每个软件在 `/api/updates/<slug>` 有一个更新端点，该端点会获取上游更新清单，将下载地址改写为经由本站的地址，然后返回结果。

## 技术栈

- **框架：** [Next.js 16](https://nextjs.org/)（App Router + 静态导出）
- **语言：** [TypeScript 6](https://www.typescriptlang.org/)
- **UI：** [React 19](https://react.dev/) + [Tailwind CSS 4](https://tailwindcss.com/)
- **包管理器：** [Bun](https://bun.sh/)
- **部署方式：** GitHub Pages（静态导出）

## 快速开始

### 环境要求

- [Bun](https://bun.sh/)（v1.x 或更高版本）

### 安装依赖

```bash
bun install
```

### 本地开发

```bash
bun dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。修改文件后页面会自动更新。

### 构建

```bash
bun run build
```

构建产物为 `out/` 目录下的静态文件，可直接部署到 GitHub Pages 或任意静态托管服务。

### 代码检查

```bash
bun run lint
```

## 目录结构

```
.
├── app/
│   ├── api/updates/[slug]/   # 更新代理 API 路由
│   ├── components/            # 共享 React 组件
│   │   ├── ScrollCard.tsx     # 滚动触发动画卡片
│   │   └── ThemeToggle.tsx    # 深色/浅色主题切换
│   ├── globals.css            # 全局样式
│   ├── layout.tsx             # 根布局
│   └── page.tsx               # 首页
├── config.json                # 软件注册表 & 站点配置
├── public/
│   ├── logo.svg               # RustX Labs Logo
│   └── og.svg                 # Open Graph 图片
├── scripts/
│   └── download-assets.sh     # 资源下载脚本
├── next.config.js             # Next.js 配置（静态导出）
└── package.json
```

## 配置说明

软件条目在 `config.json` 中定义：

```json
{
  "site_url": "https://rustx-labs.github.io",
  "softwares": {
    "novadb": {
      "name": "NovaDB",
      "download_url": "https://.../stable.json",
      "description": "面向开发者的快速、现代数据库客户端。"
    }
  }
}
```

添加新软件只需在 `softwares` 对象中新增一个条目，`/api/updates/<slug>` 路由会根据配置自动生成。

## 参与贡献

欢迎参与贡献。协作流程：

1. **提案** — 提交 Issue 或发起讨论，对齐方向与范围。
2. **实施** — Fork 仓库，创建分支，提交 Pull Request。
3. **交付** — 经过审查与批准后合并并部署。

### 协作准则

- 提案先行，设计评审明确范围
- 异步协作，文档优先对齐
- 交付可追踪，复盘沉淀

## 许可证

详见 [LICENSE](./LICENSE)。

---

<p align="center">
  <strong>RustX Labs</strong> — 工程、交付、协作
</p>
