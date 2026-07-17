import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects content collection.
// Non-technical owners edit these markdown files directly on GitHub and the
// site rebuilds automatically. Keep the frontmatter fields below intact.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    ref: z.string(),
    sector: z.string(),
    year: z.string(),
    blurb: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    // Lower numbers sort first on the home page.
    order: z.number().default(99),
  }),
});

export const collections = { projects };
