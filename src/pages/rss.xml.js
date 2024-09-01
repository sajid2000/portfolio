import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE_METADATA } from "../constants"

export async function GET(context) {
  const posts = await getCollection("blog")
  return rss({
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}`,
    })),
  })
}
