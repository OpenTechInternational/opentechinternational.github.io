import { defineCollection, z } from 'astro:content';

const initiatives = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'research', 'completed']),
    image: z.string(),
    logo: z.string().optional(),
    date: z.date(),
  }),
});

const actions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.date(),
    publishedDate: z.date(),
    location: z.string(),
    type: z.enum(['workshop', 'conference', 'training', 'research', 'consultancy', 'other']),
    image: z.string(),
    tags: z.array(z.string()),
    registrationUrl: z.string().optional(),
    virtual: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

const team = defineCollection({
  type: 'data',
  schema: z.object({
    members: z.array(z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      image: z.string(),
      linkedin: z.string().optional(),
      order: z.number().optional(),
    })),
  }),
});

export const collections = {
  initiatives,
  actions,
  pages,
  blog,
  team,
}; 