import { BASE_URL, SITE_IMAGE_ALT, SITE_IMAGE_URL } from './consts';

export type ContentType = 'webpage' | 'article' | 'profile' | 'contact' | 'about' | 'collection';

export interface MetaImage {
	src: string;
	alt: string;
}

const contentTypeMap: Record<ContentType, { og: string; schema: string }> = {
	webpage: { og: 'website', schema: 'WebPage' },
	article: { og: 'article', schema: 'Article' },
	collection: { og: 'website', schema: 'CollectionPage' },
	profile: { og: 'profile', schema: 'ProfilePage' },
	contact: { og: 'profile', schema: 'ContactPage' },
	about: { og: 'website', schema: 'AboutPage' }
};

export function getOgType(contentType: ContentType): string {
	return contentTypeMap[contentType]?.og ?? 'website';
}

export function getSchemaType(contentType: ContentType): string {
	return contentTypeMap[contentType]?.schema ?? 'WebPage';
}

export function getSafeImage(image?: MetaImage) {
	return image
		? { src: `${BASE_URL}/${image.src}`, alt: image.alt }
		: { src: SITE_IMAGE_URL, alt: SITE_IMAGE_ALT };
}
