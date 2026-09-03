# 海峡尽头：2027 中美战争

以公开军力资料为背景的架空战争小说站点，使用 Next.js 与 Nextra 构建。

内容分为：

- `pages/forces.mdx`：中美海、陆、空及战略打击力量公开资料底稿；
- `pages/actors.mdx`：周边国家、欧洲、条约关系与经济底盘；
- `pages/story/`：按序章、十四章与尾声分篇的完整小说正文；
- `pages/about.mdx`：事实、虚构与写作边界说明。
- `notes/outline.mdx`：不对外展示的创作大纲、全书时间线和人物弧线。

## 本地运行

```bash
pnpm install --frozen-lockfile
pnpm dev
```

本仓库保留了原有的 `basePath: /docs` 配置，本地访问地址为 `http://localhost:3000/docs`。

## 构建

```bash
pnpm build
```

## Vercel 部署

Vercel 会依据锁文件自动使用固定的 pnpm 版本并识别 Next.js。仓库根目录的 `vercel.json` 将域名根路径永久跳转到站点入口 `/docs`，无需覆盖构建命令或输出目录。

小说人物与战役进程均属虚构，不代表对现实战争的支持或预测。
