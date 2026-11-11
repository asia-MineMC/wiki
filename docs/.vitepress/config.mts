import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 部署在 <username>.github.io/<repo>/ 路径下，base 必须与仓库名一致
  base: '/wiki/',
  title: 'WIKI • MINEMC',
  description: 'MINEMC 服务器 · 养老生存百科 —— 玩家向玩法教程与指令大全',
  // 部署到虚拟主机（Apache）时，无扩展名会被 NamelessMC 的 .htaccess 兜底到 index.php，
  // 因此关闭 cleanUrls，改用 .html 链接，静态文件可直接命中。
  cleanUrls: false,
  head: [
    // 草方块图标与论坛门户保持一致（对应「主页 · MINEMC」标签页的草方块）
    ['link', { rel: 'icon', type: 'image/png', href: '/wiki/favicon.png' }]
  ],
  themeConfig: {
    // 导航栏左上角用斜体字标（透明底、品牌蓝），不再显示文字
    logo: '/wordmark.png',
    siteTitle: '',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '新手入门', link: '/guide/start' },
      { text: '附魔', link: '/guide/enchant' },
      { text: '市场', link: '/guide/market' },
      { text: '决斗', link: '/guide/duel' },
      { text: 'BOSS', link: '/guide/boss' },
      { text: '宝石', link: '/guide/gems' },
      { text: '更新日志', link: '/guide/changelog' },
      { text: '返回主页', link: 'https://www.minemc.asia/' }
    ],
    sidebar: [
      {
        text: '玩法百科',
        items: [
          { text: '新手入门', link: '/guide/start' },
          { text: '自定义附魔', link: '/guide/enchant' },
          { text: '全球市场与求购', link: '/guide/market' },
          { text: '单挑决斗', link: '/guide/duel' },
          { text: '世界 BOSS', link: '/guide/boss' },
          { text: '宝石商城', link: '/guide/gems' },
          { text: '更新日志', link: '/guide/changelog' }
        ]
      }
    ],
    footer: {
      message: 'MINEMC 维基百科',
      copyright: 'Copyright © 2026'
    },
    search: {
      provider: 'local'
    }
  }
})
