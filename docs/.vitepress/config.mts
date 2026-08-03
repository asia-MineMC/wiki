import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 部署在 <username>.github.io/<repo>/ 路径下，base 必须与仓库名一致
  base: '/vitepress-site/',
  title: "My VitePress Site",
  description: "A VitePress site deployed to GitHub Pages",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      { text: '关于', link: '/about' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '部署到 GitHub Pages', link: '/guide/deploy' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DobeShadow/vitepress-site' }
    ],
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2026'
    }
  }
})
