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
      {
        "text": "目录",
        "link": "/contents"
      },
      {
        "text": "认识 AI",
        "link": "/01-ai/"
      },
      {
        "text": "AI 工具与应用",
        "link": "/tools/"
      },
      {
        "text": "社会变革",
        "link": "/02-society/"
      },
      {
        "text": "个体应对",
        "link": "/03-action/"
      },
      {
        "text": "研究资料与附录",
        "link": "/04-research/"
      }
    ],
    sidebar: [
      {
        "text": "阅读入口",
        "items": [
          {
            "text": "完整目录",
            "link": "/contents"
          },
          {
            "text": "前言·AI时代的认知与行动原则",
            "link": "/preface"
          }
        ]
      },
      {
        "text": "第 1 部分 底层原理·AI科学",
        "collapsed": false,
        "items": [
          {
            "text": "1.1 AI 的数学原理与智能本质",
            "link": "/01-ai/intelligence"
          },
          {
            "text": "1.2 AI 发展的动力、瓶颈与影响",
            "link": "/01-ai/development"
          },
          {
            "text": "1.3 世界模型、具身智能与机器人",
            "link": "/01-ai/embodied"
          },
          {
            "text": "1.4 AI 能力边界与未来预测",
            "link": "/01-ai/forecast"
          },
          {
            "text": "1.5 AI 意识、安全与目标对齐",
            "link": "/01-ai/alignment"
          }
        ]
      },
      {
        "text": "第 2 部分 落地实践·AI应用",
        "collapsed": false,
        "items": [
          {
            "text": "2.1 AI 工具、Codex 与智能体",
            "link": "/tools/agents"
          },
          {
            "text": "2.2 AI 与数学、科学研究",
            "link": "/tools/math-science"
          },
          {
            "text": "2.3 AI 在各行业的应用",
            "link": "/tools/industries"
          },
          {
            "text": "2.4 AI+个人 IP",
            "link": "/tools/personal-ip"
          }
        ]
      },
      {
        "text": "第 3 部分 社会推演·时代变革",
        "collapsed": false,
        "items": [
          {
            "text": "3.1 人性需求、价值与稀缺性",
            "link": "/02-society/value"
          },
          {
            "text": "3.2 AI 重塑生产力与生产关系",
            "link": "/02-society/production"
          },
          {
            "text": "3.3 教育、科研与学术体系变革",
            "link": "/02-society/education"
          },
          {
            "text": "3.4 社会制度、权力与财富分配",
            "link": "/02-society/distribution"
          },
          {
            "text": "3.5 各行各业岗位变迁案例",
            "link": "/02-society/jobs"
          },
          {
            "text": "3.6 人类社会的意义危机",
            "link": "/02-society/meaning"
          }
        ]
      },
      {
        "text": "第 4 部分 个体应对·生存指南",
        "collapsed": false,
        "items": [
          {
            "text": "4.1 思想纲领",
            "link": "/03-action/#principles"
          },
          {
            "text": "4.2 职业选择与科研人的未来",
            "link": "/03-action/career"
          },
          {
            "text": "4.3 个人财富与风险管理",
            "link": "/03-action/wealth"
          },
          {
            "text": "4.4 领导力、影响力与社群",
            "link": "/03-action/leadership"
          },
          {
            "text": "4.5 情绪价值、精神力量与人际关系",
            "link": "/03-action/relationships"
          },
          {
            "text": "4.6 个人行动与长期规划",
            "link": "/03-action/planning"
          }
        ]
      },
      {
        "text": "研究资料与附录",
        "items": [
          {
            "text": "研究资料与参与项目",
            "link": "/04-research/"
          },
          {
            "text": "熊辉报告：战略思考",
            "link": "/04-research/xiong-hui-report"
          },
          {
            "text": "AGI 风险与个人预案",
            "link": "/03-action/risk"
          }
        ]
      }
    ],
    search: { provider: 'local' },
    footer: { message: '个人发起的开放研究项目 · 欢迎理性讨论与贡献', copyright: 'AI时代指南' }
  }
})
