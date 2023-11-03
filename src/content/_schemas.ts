import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDate: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
    resources: z.array(z.string()).optional(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;

export const slideSchema = z
  .object({
    marp: z.boolean(),
    title: z.string(),
    theme: z.string(),
    route: z.string(),
    draft: z.boolean().optional(),
    paginate: z.boolean(),
  })
  .strict();

export type SlideFrontmatter = z.infer<typeof slideSchema>;
