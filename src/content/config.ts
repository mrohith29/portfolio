import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage1: z.object({ url: z.string(), alt: z.string() }).optional(),
    worksImage2: z.object({ url: z.string(), alt: z.string() }).optional(),
    platform: z.string(),
    stack: z.string(),
    website: z.string(),
    github: z.string(),

    // Case-study fields (optional; power the redesigned work section)
    featured: z.boolean().default(false),
    year: z.string().optional(),
    // The problem this project set out to solve — the "why"
    problem: z.string().optional(),
    // A short outcome / result line
    outcome: z.string().optional(),
    // Tech shown attached to the work, not as a resume list
    tech: z.array(z.string()).optional(),
    // Sort order within a group (lower = earlier)
    order: z.number().default(999),
  }),
});

const blogCollection = defineCollection({
  type: "content",
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

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    // ISO-ish strings, e.g. "2025-10". `end` empty => Present
    start: z.string(),
    end: z.string().optional(),
    current: z.boolean().default(false),
    url: z.string().optional(),
    // Short one-line summary of the role
    summary: z.string(),
    tech: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
  experience: experienceCollection,
};
