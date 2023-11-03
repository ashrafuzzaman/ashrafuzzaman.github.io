import { defineCollection } from "astro:content";
import { blogSchema, slideSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});

const slides = defineCollection({
  schema: slideSchema,
});

export const collections = { blog, slides };
