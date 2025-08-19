import { readdirSync } from 'fs';

const articlesDir = './articles';

export function getArticleSlugs() {
	return readdirSync(articlesDir)
		.filter((file) => file.endsWith('.svx') || file.endsWith('.md'))
		.map((file) => file.replace(/\.(svx|md)$/, ''));
}
