import DefaultTheme from 'vitepress/theme'
import './custom.css'

/**
 * 首屏站名 MINEMC 拆成 MINE + MC 两个 span，
 * 让 MINE 可以单独做斜体、MC 保持正体。
 */
function splitHeroName() {
  if (typeof document === 'undefined') return
  const host =
    document.querySelector('.VPHero .name .clip') ||
    document.querySelector('.VPHero .name')
  if (!host) return
  if (host.getAttribute('data-hm-split') === '1') return
  const text = (host.textContent || '').trim()
  if (text !== 'MINEMC') return
  host.setAttribute('data-hm-split', '1')
  host.innerHTML = '<span class="hm-mine">MINE</span><span class="hm-mc">MC</span>'
}

export default {
  extends: DefaultTheme,
  enhanceApp(ctx: any) {
    if (typeof window === 'undefined') return
    const run = () => requestAnimationFrame(splitHeroName)
    // 首屏与客户端路由（返回首页）后都重新拆分
    ctx?.router?.onAfterPageLoad?.(run)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run)
    } else {
      run()
    }
  }
}
