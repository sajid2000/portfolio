import { defineCollection, reference, z } from "astro:content"

export const collections = {
  authors: defineCollection({
    type: "data",
    schema: z.object({
      name: z.string(),
      email: z.string().email(),
      avatar: z.string().optional(),
      bio: z.string().optional(),
      twitter: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      github: z.string().url().optional(),
    }),
  }),
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      date: z.coerce.date(),
      tags: z.array(reference("tags")).default(["default"]),
      description: z.string().optional(),
      author: reference("authors").default("default"),
      canonicalUrl: z.string().optional(),
      related: z.array(reference("posts")).default([]),
      draft: z.boolean().default(false),
    }),
  }),
  tags: defineCollection({
    type: "content",
    schema: z.object({
      name: z.string(),
      description: z.string().optional(),
      // TODO: Add support for images and layout
      // image: z.string().optional(),
      // layout: z.string().optional(),
    }),
  }),
}
