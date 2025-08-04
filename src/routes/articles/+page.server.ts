import { getAllArticles, type ArticleMeta } from '$lib/articles';

export const load = () => {
	const articles: ArticleMeta[] = getAllArticles();
	return { articles };
};
