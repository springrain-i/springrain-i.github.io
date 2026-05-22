import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '春雨的笔记本',
  description: 'SpringRain 的技术笔记、项目复盘与长期写作。',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#f7f5ef' }],
    ['meta', { name: 'author', content: 'springrain-i' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    logo: '/brand-mark.svg',
    siteTitle: 'SpringRain',
    nav: [
      { text: 'Notes', link: '/notes/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'About', link: '/about' }
    ],
    sidebar: {
      '/notes/': [
        {
          text: 'Notes',
          items: [
            { text: '索引', link: '/notes/' },
            { text: '写作系统', link: '/notes/writing-system' },
            { text: 'GitHub 主页维护', link: '/notes/github-profile' }
          ]
        }
      ],
      '/blog/': [
        {
          text: 'Blog',
          items: [
            { text: '索引', link: '/blog/' },
            { text: '重启我的个人博客', link: '/blog/rebuild-this-site' }
          ]
        }
      ],
      '/projects/': [
        {
          text: 'Projects',
          items: [{ text: '索引', link: '/projects/' }]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/springrain-i' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本文目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: 'Built with VitePress. Written as a long-term notebook.',
      copyright: 'Copyright © 2026 springrain-i'
    }
  }
})

