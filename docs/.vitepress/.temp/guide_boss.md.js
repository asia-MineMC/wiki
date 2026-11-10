import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"世界 BOSS 与宝石商城","description":"","frontmatter":{},"headers":[],"relativePath":"guide/boss.md","filePath":"guide/boss.md"}');
const _sfc_main = { name: "guide/boss.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="世界-boss-与宝石商城" tabindex="-1">世界 BOSS 与宝石商城 <a class="header-anchor" href="#世界-boss-与宝石商城" aria-label="Permalink to &quot;世界 BOSS 与宝石商城&quot;">​</a></h1><h2 id="循声守卫-世界-boss" tabindex="-1">循声守卫（世界 BOSS） <a class="header-anchor" href="#循声守卫-世界-boss" aria-label="Permalink to &quot;循声守卫（世界 BOSS）&quot;">​</a></h2><p>原「金猪」已下线，当前 BOSS 为 <strong>循声守卫</strong>：</p><table tabindex="0"><thead><tr><th>属性</th><th>数值</th></tr></thead><tbody><tr><td>血量</td><td>3500</td></tr><tr><td>攻击力</td><td>10</td></tr><tr><td>刷新时间</td><td>每天 <strong>12:00</strong> 与 <strong>20:00</strong> 各一次</td></tr><tr><td>建议</td><td>组队讨伐，注意躲避它的远程音波攻击</td></tr></tbody></table><p>BOSS 每日刷新两次，错过时间可等下一轮。掉落可用于宝石商城兑换。</p><h2 id="宝石商城" tabindex="-1">宝石商城 <a class="header-anchor" href="#宝石商城" aria-label="Permalink to &quot;宝石商城&quot;">​</a></h2><p>用 <strong>宝石</strong> 购买超值道具（宝石可通过 BOSS、在线奖励、部分活动获取）。入口：<strong>主菜单</strong>。</p><table tabindex="0"><thead><tr><th>道具</th><th>价格</th><th>作用</th></tr></thead><tbody><tr><td>补签卡</td><td>200 宝石</td><td>补签漏签的签到日期</td></tr><tr><td>7 天飞行卡</td><td>500 宝石</td><td>7 天飞行权限，随时开关飞行</td></tr><tr><td>附魔补给箱</td><td>200 宝石</td><td>含全部 ExcellentEnchants 附魔书，所有等级概率均等</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">提醒</p><ul><li>购买前先确认宝石余额。</li><li>赞助获取宝石：联系管理员 <strong>3064838649</strong>（baqiwenye），赞助将用于服务器升级与开发。</li></ul></div><div class="warning custom-block"><p class="custom-block-title">垃圾桶</p><p>请勿将锁定（<code>/lock</code>）的物品放入垃圾桶——垃圾桶回收的物品会<strong>直接销毁</strong>，因个人操作造成的损失服务器不予补偿。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/boss.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const boss = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  boss as default
};
