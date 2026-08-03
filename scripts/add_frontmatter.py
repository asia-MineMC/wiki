# -*- coding: utf-8 -*-
"""为所有指南页面添加 frontmatter (title/description)，移除正文 H1，统一简洁排版"""
import io
import os
import re

ROOT = r"C:\Users\30648\WorkBuddy\2026-08-03-12-32-44\docs"

# 相对路径 -> (title, description)
PAGES = {
    "guide/quickstart.md": ("新手指南", "注册登录、主菜单、世界介绍、货币体系与成长路线，5 分钟上手养老生存"),
    "economy/money.md": ("金币与点券", "双货币体系：金币用于交易，点券用于特权，了解怎么赚怎么花"),
    "survival/residence.md": ("领地系统", "圈地建房、权限管理，安心生存的第一步"),
    "survival/quickshop.md": ("箱子商店", "摆摊开店、收购出售，最方便的玩家交易方式"),
    "survival/auctions.md": ("全球市场", "全服拍卖行：上架、竞拍、购买，稀有物品卖出好价钱"),
    "survival/recycle.md": ("每日回收", "把用不上的物品卖给服务器，前期最稳定的赚钱途径"),
    "survival/rtp.md": ("随机传送", "一键传送到野外任意地点，开局与寻找资源必备"),
    "survival/warp.md": ("玩家地标", "创建公共传送点，宣传商店、共享坐标"),
    "survival/worlds.md": ("世界介绍", "主城、主世界、资源世界、地狱末地与 pvp 世界一览"),
    "rpg/skills.md": ("技能系统", "日常活动自动升级，等级越高属性越强，还能解锁特殊能力"),
    "rpg/enchanting.md": ("附魔系统", "自定义高级附魔与附魔拆除，装备上限大幅提升"),
    "rpg/mobs.md": ("怪物与 BOSS", "自定义精英怪与定时 BOSS，组队挑战拿稀有掉落"),
    "rpg/crates.md": ("抽奖箱", "花金币抽大奖：新手、进阶、专家、附魔、锻造模板五种箱子"),
    "rpg/exppond.md": ("挂机经验池", "主城挂机自动获得经验，挂机党和忙碌党的福音"),
    "rpg/quests.md": ("每日任务", "每天刷新任务，完成后领取金币、点券与物品奖励"),
    "rpg/rewards.md": ("签到与在线奖励", "每日签到、按在线时长领奖，零成本福利别错过"),
    "social/guild.md": ("公会系统", "创建或加入公会，进贡升级、公会基地，一起发展壮大"),
    "social/friends.md": ("好友系统", "添加好友、快速联系，社交的第一步"),
    "social/team.md": ("组队系统", "6 人小队：邀请、召唤、队伍聊天，打怪探险必备"),
    "social/chat.md": ("聊天与 @ 提醒", "公屏聊天、私聊、@ 玩家提醒与聊天规范"),
    "cosmetic/pets.md": ("宠物系统", "宠物蛋、宠物商店、战斗辅助与升级进化"),
    "cosmetic/skins.md": ("皮肤系统", "使用正版玩家皮肤或自定义皮肤，外观随心换"),
    "cosmetic/backpack.md": ("背包与物品银行", "扩展背包随身仓库，物品银行存物每天赚积分"),
    "cosmetic/items.md": ("自定义物品", "ItemsAdder 自定义物品与方块，记得加载资源包"),
    "cosmetic/flight.md": ("飞行系统", "飞行权限与飞行能量机制，赶路跑图更自由"),
    "extras/seasons.md": ("季节系统", "四季轮换影响天气与作物，体验更真实的生存"),
    "extras/redpacket.md": ("红包玩法", "发红包、抢红包，聊天互动气氛担当"),
    "extras/misc.md": ("便利功能", "主菜单、互动书、表情包与防熊查询等便利功能汇总"),
}


def process(path, title, desc):
    with io.open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # 提取并移除正文第一个 H1
    m = re.match(r"^#\s+(.+?)\s*\n+", content)
    if m:
        content = content[m.end():]
    else:
        print(f"  [skip] no H1: {path}")

    front = "---\ntitle: %s\ndescription: %s\n---\n\n" % (title, desc)
    with io.open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(front + content)
    print(f"  [ok] {path}")


for rel, (title, desc) in PAGES.items():
    path = os.path.join(ROOT, rel)
    if not os.path.exists(path):
        print(f"  [missing] {rel}")
        continue
    process(path, title, desc)

print("done")
