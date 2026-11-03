// Resolve public Giscus configuration during deployment. No token is published.
import { mkdir, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

export async function resolveComments(token, request = fetch) {
  const fallback = { enabled: false, repo: 'LMKLJH/AI-Era-Guide' }
  if (!token) return fallback
  const response = await request('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: '{ repository(owner:"LMKLJH",name:"AI-Era-Guide") { id hasDiscussionsEnabled discussionCategories(first:100) { nodes { id name isAnswerable } } } }' }),
    signal: AbortSignal.timeout(15000)
  })
  if (!response.ok) return fallback
  const result = await response.json()
  const repo = result.data?.repository
  if (result.errors?.length || !repo?.hasDiscussionsEnabled) return fallback
  const categories = repo.discussionCategories?.nodes || []
  // Prefer a dedicated announcements category; default Announcements is a safe initial choice.
  const category = categories.find(c => c.name === '文章评论') || categories.find(c => c.name === 'Announcements')
  if (!repo.id || !category?.id) return fallback
  return { enabled: true, repo: fallback.repo, repoId: repo.id, category: category.name, categoryId: category.id }
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  let config
  try { config = await resolveComments(process.env.GH_TOKEN) }
  catch { config = { enabled: false, repo: 'LMKLJH/AI-Era-Guide' } }
  await mkdir('docs/public', { recursive: true })
  await writeFile('docs/public/comments-config.json', JSON.stringify(config, null, 2) + '\n')
  console.log(config.enabled ? 'Public discussion configuration ready.' : 'Discussions pending; website will show the setup notice.')
}
