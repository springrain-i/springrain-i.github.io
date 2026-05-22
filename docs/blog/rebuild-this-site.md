# 重启我的个人博客

<div class="spring-meta">
  <span>site</span>
  <span>vitepress</span>
  <span>rebuild</span>
</div>

## 起点

旧版本博客已经有了雏形，也积累了一些学习笔记。但它的问题也很明显：内容过时、导航混杂、视觉上更像课程笔记站，而不是一个可以长期维护的个人技术入口。

这次重构的目标不是追求复杂，而是先把基础打稳：

- 首页能清楚说明我是谁、写什么、做什么。
- Notes 和 Blog 分开，避免所有内容堆在同一层。
- Projects 有独立入口，方便和 GitHub 主页互相引用。
- 视觉上更清爽，有个人气质，但不喧宾夺主。

## 为什么选择 VitePress

VitePress 适合技术博客和文档：

- 保留 Markdown 写作体验。
- 底层是 Vue，后续可以自定义组件。
- 静态部署简单，适合 GitHub Pages。
- 默认文档能力完整，包括导航、搜索、目录和代码高亮。

## 新结构

```text
docs/
  index.md
  notes/
  blog/
  projects/
  about.md
```

其中：

- `notes/` 放可复用技术笔记。
- `blog/` 放完整文章和复盘。
- `projects/` 放项目展示。
- `about.md` 放个人介绍和链接。

## 后续计划

1. 先把 GitHub profile 和博客首页打通。
2. 再迁移旧站里仍有价值的技术笔记。
3. 每次迁移顺手更新过时内容。
4. 最后再考虑把文章拆成更适合其他平台的短内容。

先把自己的知识库打扫干净，再考虑对外分发。

