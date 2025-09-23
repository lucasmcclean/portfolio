import { getAllArticleMetadata } from '$lib/articles';
import { BASE_URL } from '$lib/consts';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = () => {
	const articles = getAllArticleMetadata();

	const article_urls = articles
		.map((article) =>
			`
      <url>
        <loc>${BASE_URL}/articles/${article.slug}</loc>
        <lastmod>${new Date(article.updated ?? article.date).toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.6</priority>
      </url>`.trim()
		)
		.join('\n');

	return new Response(
		`
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
        <image:image>
          <image:loc>${BASE_URL}/portrait.png</image:loc>
        </image:image>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${BASE_URL}/about</loc>
        <image:image>
          <image:loc>${BASE_URL}/portrait.png</image:loc>
        </image:image>
        <changefreq>yearly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${BASE_URL}/now</loc>
        <image:image>
          <image:loc>${BASE_URL}/portrait.png</image:loc>
        </image:image>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${BASE_URL}/articles</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${BASE_URL}/contact</loc>
        <image:image>
          <image:loc>${BASE_URL}/portrait.png</image:loc>
        </image:image>
        <changefreq>yearly</changefreq>
        <priority>0.4</priority>
      </url>
      <url>
        <loc>${BASE_URL}/reading</loc>
        <image:image>
          <image:loc>${BASE_URL}/portrait.png</image:loc>
        </image:image>
        <changefreq>weekly</changefreq>
        <priority>0.2</priority>
      </url>
      ${article_urls}
      <url>
        <loc>${BASE_URL}/rss.xml</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
};
