import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeVisitStats from './HomeVisitStats.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: {
    setup() {
      const { page } = useData()
      return () => h(DefaultTheme.Layout, null, {
        'layout-bottom': () => page.value.relativePath === 'index.md'
          ? h(HomeVisitStats)
          : null
      })
    }
  }
}
