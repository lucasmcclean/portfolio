import { getAllArticleMetadata } from '$lib/articles';

export function entries() {
	return getAllArticleMetadata().map((article) => ({ slug: article.slug }));
}

export const load = ({ params }: { params: { slug: string } }) => {
	return {
		slug: params.slug
	};
};
