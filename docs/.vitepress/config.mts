import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AI时代指南',
  description: '在智能变革中理解世界、建立秩序、寻找行动方向。',
  base: '/AI-Era-Guide/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'AI时代指南',
    nav: [
      { text: '认识 AI', link: '/01-ai/' },
      { text: 'AI 工具与应用', link: '/tools/' },
      { text: '社会变革', link: '/02-society/' },
      { text: '个体应对', link: '/03-action/' },
      { text: '研究资料与附录', link: '/04-research/' }
    ],
    sidebar: [
      { text: '认识 AI', items: [{ text: '发展动力与能力边界', link: '/01-ai/' }] },
      { text: 'AI 工具与应用', items: [{ text: '板块介绍', link: '/tools/' },
        { text: 'AI 工具与模型介绍', link: '/tools/#tools-models' },
        { text: 'Codex、Agents 与自动化工作流', link: '/tools/#agents-workflows' },
        { text: 'AI 与数学、科学研究', link: '/tools/#math-science' },
        { text: 'AI 编程与软件开发', link: '/tools/#programming' },
        { text: 'AI 在各行业的应用', link: '/tools/#industries' },
        { text: 'AI 内容创作与个人 IP', link: '/tools/#content-ip' },
        { text: 'AI 工具使用教程与实践案例', link: '/tools/#tutorials-cases' }] },
      { text: '社会变革', items: [{ text: '生产力与生产关系', link: '/02-society/' }, { text: '教育与科研', link: '/02-society/education' }] },
      { text: '个体应对', items: [{ text: '思想纲领', link: '/03-action/' }, { text: 'AGI风险与个人预案', link: '/03-action/risk' }] },
      { text: '研究资料与附录', items: [{ text: '专家观点与资料', link: '/04-research/' }] }
    ],
    search: { provider: 'local' },
    footer: { message: '个人发起的开放研究项目 · 欢迎理性讨论与贡献', copyright: 'AI时代指南' }
  }
})
