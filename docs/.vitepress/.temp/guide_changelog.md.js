import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"更新日志","description":"","frontmatter":{},"headers":[],"relativePath":"guide/changelog.md","filePath":"guide/changelog.md"}');
const _sfc_main = { name: "guide/changelog.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-label="Permalink to &quot;更新日志&quot;">​</a></h1><p>服务器的重要更新都发在论坛「更新日志」版块，这里做个索引，完整内容点进原帖看。</p><h2 id="最新-7" tabindex="-1">最新：#7 <a class="header-anchor" href="#最新-7" aria-label="Permalink to &quot;最新：#7&quot;">​</a></h2><p>🔗 <a href="https://www.minemc.asia/forum/topic/11/" target="_blank" rel="noreferrer">🗒️ MINEMC 更新日志 #7</a></p><h2 id="往期" tabindex="-1">往期 <a class="header-anchor" href="#往期" aria-label="Permalink to &quot;往期&quot;">​</a></h2><table tabindex="0"><thead><tr><th>期数</th><th>日期</th><th>原帖</th></tr></thead><tbody><tr><td>更新日志 #7</td><td>2026-08-18</td><td><a href="https://www.minemc.asia/forum/topic/11/" target="_blank" rel="noreferrer">topic/11</a></td></tr><tr><td>更新日志 #6</td><td>2026-08-10</td><td><a href="https://www.minemc.asia/forum/topic/9/" target="_blank" rel="noreferrer">topic/9</a></td></tr><tr><td>更新日志 #5</td><td>2026-08-08</td><td><a href="https://www.minemc.asia/forum/topic/8/" target="_blank" rel="noreferrer">topic/8</a></td></tr><tr><td>更新日志 #4</td><td>2026-08-07</td><td><a href="https://www.minemc.asia/forum/topic/7/" target="_blank" rel="noreferrer">topic/7</a></td></tr><tr><td>更新日志 #3</td><td>2026-08-06</td><td><a href="https://www.minemc.asia/forum/topic/6/" target="_blank" rel="noreferrer">topic/6</a></td></tr><tr><td>更新日志 #2</td><td>2026-08-04</td><td><a href="https://www.minemc.asia/forum/topic/5/" target="_blank" rel="noreferrer">topic/5</a></td></tr><tr><td>更新日志 #1</td><td>—</td><td><a href="https://www.minemc.asia/forum/topic/4/" target="_blank" rel="noreferrer">topic/4</a></td></tr></tbody></table><h2 id="_5-重点回顾" tabindex="-1">#5 重点回顾 <a class="header-anchor" href="#_5-重点回顾" aria-label="Permalink to &quot;#5 重点回顾&quot;">​</a></h2><ul><li><strong>单挑竞技场扩充</strong>：下界合金场 ×2、铁套场、钻石套场、弓箭场全面上线；弓箭场删除木剑，只能远程对射。</li><li><strong>宝石商城上线</strong>：补签卡 200 宝石、7 天飞行卡 500 宝石、附魔补给箱 200 宝石。</li><li><strong>世界 BOSS 更新</strong>：取消金猪，换成 3500 血、攻击力 10 的<strong>循声守卫</strong>，每天 12:00 / 20:00 刷新。</li><li><strong>修复</strong>：<code>/lock</code> 锁定物品无法在背包移动的问题已修复；垃圾桶回收会直接销毁，请勿放入锁定物品。</li></ul><blockquote><p>详细数值与规则以论坛原帖和游戏内实际为准。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/changelog.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changelog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changelog as default
};
