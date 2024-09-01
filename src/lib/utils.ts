import type { CollectionEntry } from "astro:content"

let throttlePause = false

export const throttle = (cb: () => void, time: number) => {
  if (throttlePause) return

  throttlePause = true

  setTimeout(() => {
    cb()
    throttlePause = false
  }, time)
}

let debounceTimer: NodeJS.Timeout

export const debounce = (cb: () => void, time = 300) => {
  clearTimeout(debounceTimer)

  debounceTimer = setTimeout(cb, time)
}

export const sortBlogPosts = (posts: CollectionEntry<"posts">[]): CollectionEntry<"posts">[] => {
  return posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  })
}

export const excludeDrafts = ({ data }: CollectionEntry<"posts">): boolean => {
  return import.meta.env.PROD ? !data.draft : true
}
