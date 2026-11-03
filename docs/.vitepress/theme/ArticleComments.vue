<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'

const { page, frontmatter, isDark } = useData()
const host = ref<HTMLElement>()
const state = ref('loading')
let controller: AbortController | undefined
let timeout: ReturnType<typeof setTimeout> | undefined

function onMessage(event: MessageEvent) {
  const iframe = host.value?.querySelector('iframe')
  if (event.origin !== 'https://giscus.app' || event.source !== iframe?.contentWindow) return
  if (event.data?.giscus?.error) state.value = 'error'
}
watch(isDark, (dark) => {
  host.value?.querySelector('iframe')?.contentWindow?.postMessage({
    giscus: { setConfig: { theme: dark ? 'dark' : 'light' } }
  }, 'https://giscus.app')
})
onMounted(async () => {
  window.addEventListener('message', onMessage)
  controller = new AbortController()
  timeout = setTimeout(() => { controller?.abort(); state.value = 'error' }, 15000)
  try {
    const response = await fetch(withBase('/comments-config.json'), { signal: controller.signal })
    if (!response.ok) throw new Error('config unavailable')
    const config = await response.json()
    if (!config.enabled) { state.value = 'pending'; return }
    if (!config.repoId || !config.categoryId || config.repo !== 'LMKLJH/AI-Era-Guide') throw new Error('invalid config')
    // Keep local previews from creating production discussion threads.
    if (window.location.origin !== 'https://lmkljh.github.io') { state.value = 'preview'; return }
    const script = document.createElement('script')
    const term = String(frontmatter.value.commentsId || page.value.relativePath.replace(/\.md$/, ''))
    const attrs: Record<string, string> = {
      src: 'https://giscus.app/client.js',
      'data-repo': config.repo, 'data-repo-id': config.repoId,
      'data-category': config.category, 'data-category-id': config.categoryId,
      'data-mapping': 'specific', 'data-term': 'AI-Era-Guide/' + term,
      'data-strict': '1', 'data-reactions-enabled': '1',
      'data-emit-metadata': '0', 'data-input-position': 'top',
      'data-theme': isDark.value ? 'dark' : 'light', 'data-lang': 'zh-CN',
      'data-loading': 'lazy', crossorigin: 'anonymous'
    }
    for (const [name, value] of Object.entries(attrs)) script.setAttribute(name, value)
    script.async = true
    script.onerror = () => { state.value = 'error' }
    host.value?.appendChild(script)
    state.value = 'ready'
  } catch {
    if (!controller.signal.aborted) state.value = 'error'
  } finally { if (timeout) clearTimeout(timeout) }
})
onBeforeUnmount(() => {
  controller?.abort()
  if (timeout) clearTimeout(timeout)
  window.removeEventListener('message', onMessage)
})
</script>

<template>
  <section class="article-comments" aria-label="文章评论区">
    <h2>问题与讨论</h2>
    <p>欢迎提问、补充证据和提出反对意见。请围绕本文讨论，引用资料时附上来源。</p>
    <p class="comment-note">评论公开显示，登录 GitHub 后可发表。请勿提交个人隐私；使用 AI 整理的内容请自行核查。</p>
    <p v-if="state === 'loading'" role="status">正在加载评论…</p>
    <p v-else-if="state === 'pending'" role="status">评论区准备中，等待仓库开启 Discussions 并完成 Giscus 授权。暂可通过 Issues 提交问题。</p>
    <p v-else-if="state === 'preview'">本地预览不加载线上评论。</p>
    <p v-else-if="state === 'error'" role="status">评论暂未加载成功，可以前往 GitHub 查看讨论或提交问题。</p>
    <div ref="host" class="giscus" />
    <p class="comment-links">
      <a :href="withBase('/participate')">参与说明与讨论规则</a>
      <a v-if="state !== 'pending'" href="https://github.com/LMKLJH/AI-Era-Guide/discussions" target="_blank" rel="noopener noreferrer">前往 GitHub Discussions ↗</a>
      <a href="https://github.com/LMKLJH/AI-Era-Guide/issues" target="_blank" rel="noopener noreferrer">提交问题 / 纠错 ↗</a>
    </p>
  </section>
</template>

<style scoped>
.article-comments { margin-top: 48px; padding-top: 28px; border-top: 1px solid var(--vp-c-divider); }
.article-comments h2 { margin: 0 0 16px; font-size: 22px; line-height: 1.5; }
.article-comments p { margin: 12px 0; line-height: 1.8; color: var(--vp-c-text-2); font-size: 14px; }
.article-comments .comment-note { font-size: 13px; }
.comment-links { display: flex; flex-wrap: wrap; gap: 8px 20px; }
.comment-links a { color: var(--vp-c-brand-1); text-decoration: underline; text-underline-offset: 3px; }
</style>
