import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 部署在 <username>.github.io/<repo>/ 路径下，base 必须与仓库名一致
  base: '/vitepress-site/',
  title: "MINEMC 服务器玩家指南",
  description: "来自雨云的神奇服务器 —— 玩家向插件玩法教程与指令大全",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '新手入门', link: '/guide/quickstart' },
      { text: '生存指南', link: '/survival/residence' },
      { text: 'RPG 成长', link: '/rpg/skills' },
      { text: '社交系统', link: '/social/guild' },
      { text: '装扮与宠物', link: '/cosmetic/title' },
      { text: '其他玩法', link: '/extras/seasons' }
    ],
    sidebar: [
      {
        text: '新手入门',
        items: [
          { text: '新手指南', link: '/guide/quickstart' },
          { text: '金币与点券', link: '/economy/money' }
        ]
      },
      {
        text: '生存指南',
        items: [
          { text: '领地系统', link: '/survival/residence' },
          { text: '箱子商店', link: '/survival/quickshop' },
          { text: '全球市场', link: '/survival/auctions' },
          { text: '每日回收', link: '/survival/recycle' },
          { text: '随机传送', link: '/survival/rtp' },
          { text: '玩家地标', link: '/survival/warp' },
          { text: '世界介绍', link: '/survival/worlds' }
        ]
      },
      {
        text: 'RPG 成长',
        items: [
          { text: '技能系统', link: '/rpg/skills' },
          { text: '附魔系统', link: '/rpg/enchanting' },
          { text: '怪物与 BOSS', link: '/rpg/mobs' },
          { text: '抽奖箱', link: '/rpg/crates' },
          { text: '挂机经验池', link: '/rpg/exppond' },
          { text: '每日任务', link: '/rpg/quests' },
          { text: '签到与在线奖励', link: '/rpg/rewards' }
        ]
      },
      {
        text: '社交系统',
        items: [
          { text: '公会系统', link: '/social/guild' },
          { text: '好友系统', link: '/social/friends' },
          { text: '组队系统', link: '/social/team' },
          { text: '聊天与 @ 提醒', link: '/social/chat' }
        ]
      },
      {
        text: '装扮与宠物',
        items: [
          { text: '玩家称号', link: '/cosmetic/title' },
          { text: '宠物系统', link: '/cosmetic/pets' },
          { text: '皮肤系统', link: '/cosmetic/skins' },
          { text: '背包与物品银行', link: '/cosmetic/backpack' },
          { text: '自定义物品', link: '/cosmetic/items' },
          { text: '飞行系统', link: '/cosmetic/flight' }
        ]
      },
      {
        text: '其他玩法',
        items: [
          { text: '季节系统', link: '/extras/seasons' },
          { text: '红包玩法', link: '/extras/redpacket' },
          { text: '便利功能', link: '/extras/misc' }
        ]
      }
    ],
    footer: {
      message: 'MINEMC 玩家指南 · 如有出入请以游戏内实际为准',
      copyright: 'Copyright © 2026'
    },
    search: {
      provider: 'local'
    }
  }
})
