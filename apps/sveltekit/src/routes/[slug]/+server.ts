import type { RequestHandler } from '@sveltejs/kit';
import { directus } from '../../lib/directus';

interface ShortLink {
	clicks: number;
	slug: string;
	url: string;
	id: number;
}

export const GET: RequestHandler = async ({ params }) => {
	const slug = params.slug;
	console.log(slug);

	try {
		const { data } = await directus.items('short_link').readByQuery({
			filter: {
				slug
			}
		});
		if (!data || data?.length === 0) {
			return new Response(undefined, { status: 404 });
		}
		const shortLink = data[0] as ShortLink;
		await directus.items('short_link').updateOne(shortLink.id, {
			clicks: shortLink.clicks + 1
		});
		return new Response(undefined, { status: 302, headers: { Location: shortLink.url } });
	} catch (err) {
		console.error(err);
		return new Response(undefined, { status: 500 });
	}
};
