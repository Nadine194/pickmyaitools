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
    noindex: z.boolean().default(false),
  }),
});

const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tool: z.string(),
    toolUrl: z.string().url(),
    category: z.string(),
    verdict: z.string(),
    bestFor: z.string(),
    notFor: z.string(),
    pricing: z.string(),
    freePlan: z.boolean(),
    dataLocation: z.string(),
    testPeriod: z.string(),
    tested: z.coerce.date(),
    affiliateUrl: z.string().url().optional(),
    keywords: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  pages: pagesCollection,
  reviews: reviewsCollection,
};
