import { getAllArticleMetadata } from '$lib/articles';
import { BASE_URL, RSS_CATEGORY, RSS_TITLE, RSS_DESCRIPTION } from '$lib/consts';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = () => {
	const articles = getAllArticleMetadata();

	const items = articles
		.map((article) =>
			`
      <item>
        <title><![CDATA[${article.title}]]></title>
        <link>${BASE_URL}/articles/${article.slug}</link>
        <guid isPermaLink="true">${BASE_URL}/articles/${article.slug}</guid>
        <pubDate>${new Date(article.date).toUTCString()}</pubDate>
        <description><![CDATA[${article.description}]]></description>
      </item>`.trim()
		)
		.join('\n');

	return new Response(
		`
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
    <channel>
      <title>${RSS_TITLE}</title>
      <category>${RSS_CATEGORY}</category> 
      <copyright>2025 Lucas McClean. All rights reserved.</copyright> 
      <language>en-us</language> 
      <link>${BASE_URL}</link>
      <description>${RSS_DESCRIPTION}</description>
      ${items}
    </channel>
    </rss>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
};
