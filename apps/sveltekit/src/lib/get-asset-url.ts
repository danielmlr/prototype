export function getAssetURL(id) {
	if (!id) return null;
	return `${import.meta.env.DIRECTUS_URL}/assets/${id}`;
}
