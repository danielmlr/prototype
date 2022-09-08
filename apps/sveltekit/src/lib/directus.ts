import { Directus } from '@directus/sdk';
import 'dotenv/config';

const directusToken = process.env.DIRECTUS_API_TOKEN;
const directusUrl = process.env.DIRECTUS_URL;
console.log(directusToken);
console.log(directusUrl);

if (!directusToken) {
	throw new Error('Please include a token');
}

if (!directusUrl) {
	throw new Error('Please include a url');
}
export const directus = new Directus(directusUrl, {
	auth: { staticToken: directusToken }
});
