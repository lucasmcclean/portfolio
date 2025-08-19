import type { Component } from 'svelte';

import { z } from 'zod';

const ArticleMetaSchema = z.object({
	title: z.string(),
	description: z.string(),
	slug: z.string(),
	authors: z.array(z.string()),
	date: z.string(),
	updated: z.string().optional(),
	collections: z.array(z.string()),
	tags: z.array(z.string()),
	readTime: z.number(),
	image: z
		.object({
			src: z.string(),
			alt: z.string()
		})
		.optional(),
	published: z.boolean()
});

export type ArticleMeta = z.infer<typeof ArticleMetaSchema>;

const metaModules = import.meta.glob<{ metadata: unknown }>('../articles/*.{svx,md}', {
	eager: true
});

export function getAllArticleMetadata(): ArticleMeta[] {
	return Object.values(metaModules)
		.map((mod) => ArticleMetaSchema.parse(mod.metadata))
		.filter((meta) => meta.published)
		.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

const modules = import.meta.glob<{
	default: Component;
	metadata: unknown;
}>('../articles/*.{svx,md}', { eager: true });

export function getAllArticles(): ArticleMeta[] {
	return Object.entries(modules)
		.map(([_, mod]) => {
			const meta = ArticleMetaSchema.parse(mod.metadata);
			return meta;
		})
		.filter((meta) => meta.published)
		.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getArticleModule(
	slug: string
): { Content: Component; metadata: ArticleMeta } | null {
	const keySvx = `../articles/${slug}.svx`;
	const keyMd = `../articles/${slug}.md`;

	const mod = modules[keySvx] ?? modules[keyMd];
	if (!mod) return null;

	const metadata = ArticleMetaSchema.parse(mod.metadata);

	if (!metadata.published) return null;

	return { Content: mod.default, metadata };
}
