import { z, defineCollection } from "astro:content";

const toolCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    logo: z.string(),
    desc: z.string(),
    date: z.string().transform((str) => new Date(str)),
    website: z.string().url(),
    video: z.string().url().optional(),
  }),
});

export const collections = {
  tools: toolCollection,
};
