<template>
  <div class="srv">
    <div class="srv__top">
      <span class="srv__dot" :class="dotClass"></span>
      <span class="srv__state">{{ stateText }}</span>
      <span class="srv__ip">play.minemc.asia</span>
    </div>

    <div v-if="data && data.online" class="srv__stats">
      <div class="srv__stat">
        <b>{{ data.numplayers ?? '—' }}</b>
        <span>/ {{ data.maxplayers ?? '?' }} 人在线</span>
      </div>
      <div v-if="data.version" class="srv__stat">
        <b>{{ data.version }}</b>
        <span>服务器版本</span>
      </div>
    </div>

    <div v-if="data && data.online" class="srv__players">
      <div v-if="players.length" class="srv__heads">
        <div v-for="p in players" :key="p" class="srv__head" :title="p">
          <img :src="p.head || headUrl(p)" :alt="p" loading="lazy" @error="onHeadError($event)" />
        </div>
      </div>
      <p v-else class="srv__note">服务器未公开在线玩家名单，暂时无法显示头像。</p>
    </div>

    <p v-else-if="data" class="srv__note">服务器当前离线，稍后再来看看吧。</p>
    <p v-else class="srv__note">正在获取服务器状态…</p>

    <p class="srv__updated" v-if="updated">更新于 {{ updated }} · 每 30 秒自动刷新</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const data = ref(null)
const updated = ref('')
let timer

const players = computed(() => (data.value && Array.isArray(data.value.players) ? data.value.players : []))
const dotClass = computed(() => {
  if (!data.value) return 'is-loading'
  return data.value.online ? 'is-on' : 'is-off'
})
const stateText = computed(() => {
  if (!data.value) return '检测中…'
  return data.value.online ? '在线' : '离线'
})
const headUrl = (name) => `https://mc-heads.net/avatar/${encodeURIComponent(name)}/64`

function onHeadError(e) {
  // 头像加载失败时用站点 favicon 兜底，避免破图
  if (e && e.target) e.target.src = '/wiki/favicon.png'
}

async function load() {
  try {
    // 优先读插件推送的缓存（含玩家头像）；没有则回退到人数接口
    let json = null
    try {
      const r = await fetch('/status-cache.json?t=' + Date.now(), { cache: 'no-store' })
      if (r.ok) json = await r.json()
    } catch (e) { /* ignore */ }
    if (!json) {
      const r2 = await fetch('/status-api.php', { cache: 'no-store' })
      json = await r2.json()
    }
    data.value = json
    const d = new Date()
    updated.value = d.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  } catch (e) {
    data.value = { online: false, players: [] }
  }
}

onMounted(() => { load(); timer = setInterval(load, 30000) })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.srv {
  max-width: 720px;
  margin: 24px auto;
  padding: 26px 28px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(27, 31, 38, .06);
  font-family: inherit;
}
.srv__top {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.srv__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #cbd5e1;
  flex: none;
}
.srv__dot.is-on { background: #22c55e; box-shadow: 0 0 0 4px rgba(34, 197, 94, .15); }
.srv__dot.is-off { background: #ef4444; box-shadow: 0 0 0 4px rgba(239, 68, 68, .15); }
.srv__dot.is-loading { background: #94a3b8; animation: srv-pulse 1s infinite; }
@keyframes srv-pulse { 50% { opacity: .35; } }
.srv__state { font-weight: 800; font-size: 1.1rem; color: #0f172a; }
.srv__ip {
  margin-left: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: .9rem;
  color: #1f6fb2;
  background: #eaf4fc;
  border: 1px solid #d6e8f7;
  padding: 4px 10px;
  border-radius: 6px;
}
.srv__stats {
  display: flex;
  gap: 28px;
  margin-top: 20px;
  flex-wrap: wrap;
}
.srv__stat b { display: block; font-size: 1.7rem; font-weight: 900; color: #1f6fb2; line-height: 1.1; }
.srv__stat span { font-size: .85rem; color: #64748b; }
.srv__players { margin-top: 22px; }
.srv__heads {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.srv__head {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  background: #f1f5f9;
  cursor: default;
  transition: transform .15s ease;
}
.srv__head:hover { transform: translateY(-2px); }
.srv__head img { display: block; width: 100%; height: 100%; object-fit: cover; }
.srv__note { margin: 14px 0 0; color: #64748b; font-size: .92rem; }
.srv__updated { margin: 18px 0 0; color: #94a3b8; font-size: .78rem; }
</style>
