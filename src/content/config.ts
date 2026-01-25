import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['use-cases', 'comparisons', 'guides']),
    date: z.coerce.date(),
    updated: z.coerce.date(),
    keywords: z.array(z.string()),
    affiliate: z.boolean().default(true),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  pages: pagesCollection,
};
