import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Keep URLs identical to the pre-migration slugs (lowercased filename, no extension)
const slugify = (entry: string) => entry.replace(/\.[^.]+$/, "").toLowerCase();

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects", generateId: ({ entry }) => slugify(entry) }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({ url: z.string(), alt: z.string() }),
    worksImage1: z.object({ url: z.string(), alt: z.string() }).optional(),
    worksImage2: z.object({ url: z.string(), alt: z.string() }).optional(),
    platform: z.string(),
    stack: z.string(),
    website: z.string(),
    github: z.string(),

    // Case-study fields
    featured: z.boolean().default(false),
    year: z.string().optional(),
    problem: z.string().optional(),
    outcome: z.string().optional(),
    tech: z.array(z.string()).optional(),
    order: z.number().default(999),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog", generateId: ({ entry }) => slugify(entry) }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default("Rohith Mariyala"),
    image: z.object({ url: z.string(), alt: z.string() }).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    start: z.string(),
    end: z.string().optional(),
    current: z.boolean().default(false),
    url: z.string().optional(),
    summary: z.string(),
    tech: z.array(z.string()).optional(),
  }),
});

export const collections = { projects, blog, experience };
