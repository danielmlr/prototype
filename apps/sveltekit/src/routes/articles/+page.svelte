<script>
	import Article from '$lib/components/Article.svelte';
	import Hero from '$lib/components/Hero.svelte';
	export let article;
</script>

<main>
	<section class="main-content">
		<div class="container">
			<Hero article={article.hero} />
			<div class="articles-grid">
				{#each articles as article, index}
					<Article {article} bordered={index !== articles.length - 1} />
				{/each}
			</div>
		</div>
	</section>
</main>
