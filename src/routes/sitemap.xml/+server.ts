import { getAllArticleMetadata } from '$lib/articles';
import { BASE_URL } from '$lib/consts';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = () => {
	const articles = getAllArticleMetadata();

	const urls = articles
		.map((article) =>
			`
      <url>
        <loc>${BASE_URL}/articles/${article.slug}</loc>
        <lastmod>${new Date(article.updated ?? article.date).toISOString()}</lastmod>
      </url>`.trim()
		)
		.join('\n');

	return new Response(
		`
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
      </url>
      ${urls}
    </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
};
