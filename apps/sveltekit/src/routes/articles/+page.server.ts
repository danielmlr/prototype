import { Directus } from '@directus/sdk';

const directus = new Directus('http://localhost:8055');

async function start() {
	// We don't need to authenticate if data is public
	const publicData = await directus.items('articles').readByQuery({ meta: 'total_count' });

	console.log({
		items: publicData.data,
		total: publicData.meta.total_count
	});

	// But, we need to authenticate if data is private
	let authenticated = false;

	// Try to authenticate with token if exists
	await directus.auth
		.refresh()
		.then(() => {
			authenticated = true;
		})
		.catch(() => {});

	// Let's login in case we don't have token or it is invalid / expired
	while (!authenticated) {
		const email = window.prompt('admin@example.com');
		const password = window.prompt('password');

		await directus.auth
			.login({ email, password })
			.then(() => {
				authenticated = true;
			})
			.catch(() => {
				window.alert('Invalid credentials');
			});
	}
	console.log(email);
	console.log(password);
	// After authentication, we can fetch the private data in case the user has access to it
	const privateData = await directus.items('privateData').readByQuery({ meta: 'total_count' });

	console.log({
		items: privateData.data,
		total: privateData.meta.total_count
	});
}

start();
