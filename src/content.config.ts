import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
	schema: z.object({
		title: z.string(),
		category: z.enum(['case-study', 'client-work', 'personal-work', 'brand-teardown']),
		summary: z.string(),
		context: z.string(), // e.g. "Finalist, XYZ Case Competition · Team of 4"
		outcome: z.string().optional(),
		reflection: z.string().optional(),
		slides: z
			.array(
				z.object({
					image: z.string(),
					caption: z.string(),
				}),
			)
			.optional(),
		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

export const collections = { work };
