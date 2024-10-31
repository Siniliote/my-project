import { defineCollection, reference, z } from 'astro:content'

const postsCollection = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      author: reference('authors').optional(),
      created_at: z.coerce.date(),
      metadata: z.object({
        excerpt: z.string(),
        cover_image: z
          .object({
            url: z.string(),
            alt: z.string()
          })
          .optional()
      }),
      tags: z.array(z.string())
    })
})

const authorsData = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    avatar: z.string().url()
  })
})

const worksCollection = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      metadata: z.object({
        excerpt: z.string()
      }),
      started_at: z.coerce.date(),
      ended_at: z.coerce.date().optional(),
      technology: z.array(z.string())
    })
})

export const collections = {
  blog: postsCollection,
  work: worksCollection,
  authors: authorsData
}
