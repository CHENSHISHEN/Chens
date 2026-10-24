# chen / space

基于 [Astro Devosfera](https://github.com/0xdres/astro-devosfera) 的个人主页首版，保留上游 MIT 许可证。上游说明见 README.template.md。

## 本地运行

需要 Node.js 22.12+（当前使用 24）与 pnpm。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

生产构建与搜索预览：

```sh
pnpm build
pnpm preview --host 127.0.0.1 --port 4321
```

搜索索引在构建时生成；完整搜索请使用生产预览。

## 内容维护

- 站点名称、介绍、站点地址：`src/config.ts`。上线前在 `.env` 设置 `PUBLIC_SITE_URL` 为实际域名，重新构建。
- 顶部模块、分类、示例项目与知识库：`src/data/space.ts`。
- 首页：`src/pages/index.astro`。
- 示例标识：示例文章的 frontmatter 设置 `demo: true`；发布真实文章时省略或改为 `false`。
- 中文文章：`src/data/blog/chen/*.md`，通过 frontmatter 的 `tags` 中 `data`、`ai`、`dev`、`notes` 设置主分类。
- 主题与响应式样式：`src/styles/space.css`。
- 真实联系方式：复制 `.env.example` 为 `.env` 后填写；未填写的联系方式不展示。

第一版已包含博客、项目、知识库、工具箱、关于；工具在本地浏览器处理输入。项目卡片与文章为明确标注的展示示例，个人介绍待确认。原作者文章保留为草稿，相册暂关闭。

GitHub 仓库：[CHENSHISHEN/Chens](https://github.com/CHENSHISHEN/Chens)（公开）。`origin` 指向个人项目仓库，`upstream` 指向原始模板仓库。

## GitHub Pages 自动部署

站点地址：[https://pages.chencc.cc/](https://pages.chencc.cc/)。

推送到 `main` 后，`.github/workflows/deploy.yml` 使用 Node.js 24 和固定的 pnpm 11.25.0 执行 `pnpm run build`（包含类型检查、Astro 静态构建和 Pagefind 搜索索引），将 `dist/` 上传并发布到 GitHub Pages。也可以在 Actions 页面手动运行该工作流。

- 仓库 Settings → Pages → Source 使用 **GitHub Actions**。
- 工作流设置 `PUBLIC_SITE_URL=https://pages.chencc.cc/`，用于 canonical、RSS 和站点地图。
- `public/CNAME` 会随构建复制到 `dist/CNAME`；Pages 设置中的自定义域名同样保持 `pages.chencc.cc`。
- 自定义域名使用根路径，不设置 `/Chens` 作为 Astro `base`。
- 本地默认地址仍为 `http://localhost:4321/`；模拟正式域名构建可运行 `PUBLIC_SITE_URL=https://pages.chencc.cc/ pnpm build`。

构建和部署都成功后生效。后续文章、项目或样式修改推送到 `main`，都会自动更新网站。
