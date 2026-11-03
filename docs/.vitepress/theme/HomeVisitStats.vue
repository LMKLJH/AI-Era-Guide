<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const status = ref('加载中…')
let script: HTMLScriptElement | undefined
let observer: MutationObserver | undefined
let timer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  // Preview visits must not inflate the production homepage counter.
  if (window.location.hostname !== 'lmkljh.github.io') {
    status.value = '仅线上统计'
    return
  }

  const value = document.getElementById('busuanzi_value_page_pv')
  const finish = () => {
    if (timer) clearTimeout(timer)
    observer?.disconnect()
  }
  const unavailable = () => {
    if (value && !/^\d+$/.test(value.textContent?.trim() || '')) {
      status.value = '暂不可用'
    }
    finish()
  }
  if (value) {
    observer = new MutationObserver(() => {
      if (/^\d+$/.test(value.textContent?.trim() || '')) finish()
    })
    observer.observe(value, { childList: true, characterData: true, subtree: true })
  }

  // Mount only on the homepage, including navigation back through VitePress.
  script = document.createElement('script')
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  script.async = true
  script.onerror = unavailable
  timer = setTimeout(unavailable, 12000)
  document.head.appendChild(script)
})

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
  observer?.disconnect()
  script?.remove()
})
</script>

<template>
  <section class="home-visit-stats" aria-label="首页访问统计">
    <p>
      首页累计访问
      <span id="busuanzi_value_page_pv" class="home-visit-stats__value" aria-live="polite">{{ status }}</span>
      次
    </p>
  </section>
</template>

<style scoped>
.home-visit-stats {
  padding: 18px 24px 24px;
  color: var(--vp-c-text-2);
  text-align: center;
  font-size: 13px;
  line-height: 1.8;
}
.home-visit-stats p { margin: 0; }
.home-visit-stats__value {
  display: inline-block;
  min-width: 3ch;
  margin: 0 4px;
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.home-visit-stats__note { font-size: 12px; color: var(--vp-c-text-3); }
.home-visit-stats a { margin-left: 6px; text-decoration: underline; text-underline-offset: 3px; }
</style>
