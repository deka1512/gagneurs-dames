export interface WPPost {
  id: number
  date: string
  slug: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
}

export function useWordPress() {
  const baseURL = useRuntimeConfig().wordpressUrl
  const available = computed(() => Boolean(baseURL))

  async function getPosts(params: Record<string, string | number> = {}) {
    if (!baseURL) return []

    try {
      return await $fetch<WPPost[]>('/wp-json/wp/v2/posts', {
        baseURL,
        query: { _embed: 1, per_page: 10, ...params },
      })
    } catch (error) {
      console.warn('[WordPress] Impossible de récupérer les publications.', error)
      return []
    }
  }

  async function getPost(slug: string) {
    if (!baseURL) return null

    try {
      const posts = await $fetch<WPPost[]>('/wp-json/wp/v2/posts', {
        baseURL,
        query: { slug, _embed: 1 },
      })
      return posts[0] ?? null
    } catch (error) {
      console.warn('[WordPress] Impossible de récupérer cette publication.', error)
      return null
    }
  }

  return { available, getPosts, getPost }
}
