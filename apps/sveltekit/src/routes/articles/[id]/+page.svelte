<script>
	import { getAssetURL } from '$lib/get-asset-url';
	import BackIcon from '$lib/components/icons/Back.svelte';
	import LinkIcon from '$lib/components/icons/Link.svelte';
	import YoutubeIcon from '$lib/components/icons/Youtube.svelte';
	import LinkedinIcon from '$lib/components/icons/Linkedin.svelte';
	import TwitterIcon from '$lib/components/icons/Twitter.svelte';
	import GithubIcon from '$lib/components/icons/Github.svelte';
	import MoreArticles from '$lib/components/MoreArticles.svelte';

	export let data;
</script>

<div class="current-article">
	<section>
		<div class="container">
			<a href="/" class="current-article__backlink">
				<BackIcon />
				<span>Back to Articles</span>
			</a>
			<h1 class="current-article__title">{data.article.title}</h1>
			<div class="current-article__detail">
				<div class="current-article__wrapperOuter">
					<div class="current-article__wrapperInner">
						<div class="current-article__authorImage">
							<img src={getAssetURL(data.article.author.avatar)} alt="" loading="lazy" />
						</div>
						<div>
							<div class="current-article__authorName">
								{`${data.article.author.first_name} ${data.article.author.last_name}`}
							</div>
							<div class="current-article__time">
								{data.article.publish_date}
							</div>
						</div>
					</div>
					<ul class="current-article__socials">
						<li>
							<a href="/" target="_blank" rel="noreferrer noopener">
								<LinkIcon />
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/c/DirectusVideos"
								target="_blank"
								rel="noreferrer noopener"
							>
								<YoutubeIcon />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/company/directus-io"
								target="_blank"
								rel="noreferrer noopener"
							>
								<LinkedinIcon />
							</a>
						</li>
						<li>
							<a href="https://twitter.com/directus" target="_blank" rel="noreferrer noopener">
								<TwitterIcon />
							</a>
						</li>
					</ul>
				</div>
				<div class="current-article_coverImage">
					<img src={getAssetURL(data.article.cover_image)} alt="" />
				</div>
			</div>
			<div class="current-article__body">
				<div class="current-article__bodyContent">{@html data.article.body}</div>
				<ul class="current-article__bodySocials">
					<li>
						<a href="https://github.com/directus" target="_blank" rel="noreferrer noopener">
							<GithubIcon />
						</a>
					</li>
					<li>
						<a
							href="https://www.youtube.com/c/DirectusVideos"
							target="_blank"
							rel="noreferrer noopener"
						>
							<YoutubeIcon />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/company/directus-io"
							target="_blank"
							rel="noreferrer noopener"
						>
							<LinkedinIcon />
						</a>
					</li>
					<li>
						<a href="https://twitter.com/directus" target="_blank" rel="noreferrer noopener">
							<TwitterIcon />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<MoreArticles articles={data.moreArticles} />
</div>
