---
comments: false
---

# 参与讨论

欢迎把自己的问题、资料和不同判断带进来。一个具体反例、一份可靠来源或一个尚未想清楚的问题，都能帮助项目继续发展。

## 目前状态

Discussions 已开启，Giscus 已获本仓库授权。可在正文文章底部登录 GitHub，提出问题、补充资料或回应其他读者。

跨专题交流可前往 [GitHub Discussions](https://github.com/LMKLJH/AI-Era-Guide/discussions)；明确的错误和修改任务仍可提交到 [GitHub Issues](https://github.com/LMKLJH/AI-Era-Guide/issues)。

## 选择参与方式

| 想做什么 | 入口 |
| --- | --- |
| 讨论一篇文章 | 该文章底部的“问题与讨论” |
| 提出跨专题问题、分享观点 | [GitHub Discussions](https://github.com/LMKLJH/AI-Era-Guide/discussions) |
| 报告错误、提出修改任务 | [GitHub Issues](https://github.com/LMKLJH/AI-Era-Guide/issues) |
| 直接修改文章 | 提交 Pull Request，由维护者审核合并 |

文章评论与对应的 GitHub Discussion 共用内容。评论可公开阅读，发表需要 GitHub 账号及相应授权。第一次有人评论时，Giscus 会创建对应讨论。

## 讨论规则

1. 尽量说明你在回应哪段内容、依据是什么。
2. 区分事实、个人经验、推演和预测。引用数据和专家观点时附来源。
3. 欢迎有力的反驳，避免人身攻击、刷屏、广告。
4. 不发布他人隐私、账号凭据或未经允许的私人材料。
5. AI 可以辅助整理，提交者仍需核查内容；避免批量粘贴未经检查的长篇输出。

## 讨论怎样进入正文

维护者会从讨论中提取有依据的问题、补充和反例，核查后通过版本修改写入正文。讨论区的留言不自动成为项目结论。重要贡献尽量注明出处；不同观点可以并存。

这是业余维护的开放项目，无法保证逐条回复或固定处理期限。发现垃圾内容可使用 GitHub 的举报功能或联系仓库维护者。

## 给维护者的配置记录

1. 在仓库 **Settings → General → Features** 勾选 **Discussions**。保留默认的 **Announcements** 分类；也可以另建公告类型的“文章评论”分类。
2. 打开 [Giscus GitHub App](https://github.com/apps/giscus)，选择 **Install**，仅授权 **LMKLJH/AI-Era-Guide** 仓库。不要选择所有仓库。
3. 在 **Actions → Deploy VitePress site → Run workflow**，选择 main 运行一次。部署会自动读取仓库与分类 ID，无需复制代码或添加密钥。
4. 后续调整授权或分类后，重新部署并检查正文底部评论框。

建议跨专题讨论沿用默认 General、Q&A、Ideas 分类，文章评论集中放在 Announcements 或专用“文章评论”分类。后续有实际需要再调整分类。
