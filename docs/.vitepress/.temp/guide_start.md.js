import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"新手入门","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start.md","filePath":"guide/start.md"}');
const _sfc_main = { name: "guide/start.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="新手入门" tabindex="-1">新手入门 <a class="header-anchor" href="#新手入门" aria-label="Permalink to &quot;新手入门&quot;">​</a></h1><p>欢迎来到 MINEMC。这里只运营一座 <strong>1.21.11 养老生存服</strong>，进服不装整合包、也不用先注册网页账号。</p><h2 id="怎么进服" tabindex="-1">怎么进服 <a class="header-anchor" href="#怎么进服" aria-label="Permalink to &quot;怎么进服&quot;">​</a></h2><ol><li>准备好 <strong>Java 版 1.21.11</strong> 客户端。</li><li>「多人游戏」→「添加服务器」，地址填 <strong>play.minemc.asia</strong>。</li><li>进服后按聊天栏提示完成 <strong>注册 / 登录</strong>。</li><li>进服后按 <strong>Shift+F</strong> 打开主菜单，挑一个世界落脚。</li></ol><h2 id="账号命令" tabindex="-1">账号命令 <a class="header-anchor" href="#账号命令" aria-label="Permalink to &quot;账号命令&quot;">​</a></h2><p>首次进入需要先注册，之后每次进服登录一次即可。</p><table tabindex="0"><thead><tr><th>功能</th><th>指令</th></tr></thead><tbody><tr><td>注册</td><td><code>/register 密码 密码</code>（两遍密码相同）</td></tr><tr><td>登录</td><td><code>/login 密码</code></td></tr><tr><td>修改密码</td><td><code>/changepassword 旧密码 新密码</code></td></tr><tr><td>退出登录</td><td><code>/logout</code>（换号前先执行）</td></tr><tr><td>绑定邮箱</td><td><code>/email add 邮箱</code>（找回密码用，建议绑定）</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">小提示</p><ul><li>服务器使用<strong>离线模式 + LimboAuth 代理层认证</strong>，不需要正版账号。</li><li>密码忘了又没绑邮箱，只能联系管理员重置，建议进服先把邮箱绑上。</li></ul></div><h2 id="服务器信息" tabindex="-1">服务器信息 <a class="header-anchor" href="#服务器信息" aria-label="Permalink to &quot;服务器信息&quot;">​</a></h2><ul><li>地址：<code>play.minemc.asia</code>（端口默认即可）</li><li>版本：Java 1.21.11 养老生存</li><li>交流群：Q群 <strong>954632027</strong></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/start.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const start = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  start as default
};
