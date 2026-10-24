// 模块资料集中维护；文章正文位于 src/data/blog/chen/。
export const navigation = [
  { label: "博客", href: "/posts/", icon: "book" },
  { label: "项目", href: "/projects/", icon: "code" },
  { label: "知识库", href: "/knowledge/", icon: "layers" },
  { label: "工具箱", href: "/tools/", icon: "tool" },
  { label: "关于", href: "/about/", icon: "user" },
];
export const categories = [
  { name: "数据工程", tag: "data", icon: "database", color: "purple" },
  { name: "AI 与自动化", tag: "ai", icon: "spark", color: "amber" },
  { name: "开发与工具", tag: "dev", icon: "terminal", color: "green" },
  { name: "思考与记录", tag: "notes", icon: "pen", color: "blue" },
];
export const projects = [
  {
    slug: "data-workbench",
    name: "数据工作台",
    subtitle: "DATA ENGINEERING",
    description: "把数据探查、SQL 片段与日常巡检组织在一个工作空间。",
    tags: ["SQL", "数据工程", "效率工具"],
    icon: "database",
    color: "purple",
    points: [
      "整理常用 SQL 与查询思路",
      "记录数据口径和排查过程",
      "沉淀可复用的巡检清单",
    ],
  },
  {
    slug: "agent-workflow",
    name: "Agent 工作流实验",
    subtitle: "AI & AUTOMATION",
    description: "探索从一个想法到可验证产出的 AI 协作方式。",
    tags: ["AI Agent", "自动化", "工作流"],
    icon: "spark",
    color: "amber",
    points: [
      "把大任务拆成可验证的小步骤",
      "探索工具调用与上下文管理",
      "记录实验结果与适用边界",
    ],
  },
  {
    slug: "personal-space",
    name: "这个个人空间",
    subtitle: "BUILD IN PUBLIC",
    description: "基于 Astro Devosfera，把博客慢慢生长成自己的数字花园。",
    tags: ["Astro", "TypeScript", "个人网站"],
    icon: "code",
    color: "green",
    points: [
      "保留终端风格与暗色视觉",
      "加入项目、知识库和工具箱",
      "用 Markdown 持续积累内容",
    ],
  },
];
export const knowledge = [
  {
    name: "数据工程笔记",
    description: "从数据建模到 SQL 调优，搭建一张自己的知识地图。",
    icon: "database",
    color: "purple",
    tag: "data",
    topics: ["数仓分层与建模", "SQL 查询思路", "数据质量与排查"],
  },
  {
    name: "AI 实践手册",
    description: "记录提示词、Agent 协作与自动化中的具体做法。",
    icon: "spark",
    color: "amber",
    tag: "ai",
    topics: ["任务拆解与验证", "上下文与工具", "自动化工作流"],
  },
  {
    name: "开发备忘录",
    description: "把经常查、反复用的小知识，放在触手可及的地方。",
    icon: "terminal",
    color: "green",
    tag: "dev",
    topics: ["命令行与 Git", "环境与配置", "个人网站搭建"],
  },
];
