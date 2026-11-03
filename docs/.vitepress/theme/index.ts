import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ArticleComments from './ArticleComments.vue'
import HomeVisitStats from './HomeVisitStats.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: {
    setup() {
      const { page, frontmatter } = useData()
      return () => h(DefaultTheme.Layout, null, {
        'doc-after': () => {
          const path = page.value.relativePath
          const excluded = ['index.md', 'contents.md', 'participate.md', '01-ai/index.md', 'tools/index.md', '02-society/index.md', '04-research/index.md']
          return frontmatter.value.comments !== false && !excluded.includes(path) && !path.endsWith('-source.md') && !path.endsWith('-summary.md')
            ? h(ArticleComments, { key: path })
            : null
        },
        'layout-bottom': () => page.value.relativePath === 'index.md'
          ? h(HomeVisitStats)
          : null
      })
    }
  }
}
