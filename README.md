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

GitHub 仓库：[CHENSHISHEN/chen-homepage](https://github.com/CHENSHISHEN/chen-homepage)（私有）。`origin` 指向个人项目仓库，`upstream` 指向原始模板仓库。尚未部署网站，未接入自动发布。
