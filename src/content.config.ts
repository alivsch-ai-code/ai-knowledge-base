import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const categories = [
  'Grundlagen & Einrichtung',
  'Produktivität & Büro',
  'Marketing & Vertrieb',
  'Design & Multimedia',
] as const;

export const levels = ['Einsteiger', 'Anwender', 'Automatisierer', 'Architekt'] as const;

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(categories),
    level: z.enum(levels),
    duration: z.number().describe('Einrichtungszeit in Minuten'),
    tools: z.array(z.string()),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    pro: z.boolean().default(false),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
