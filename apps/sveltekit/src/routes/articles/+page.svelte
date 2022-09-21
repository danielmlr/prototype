<script>
</script>

<main>
	<section class="main-content">
		<div class="container">
			<div class="articles-grid">
				{#each data.articles as Article, index}
					<Article {articles} bordered={index !== articles.length - 1} />
				{/each}
			</div>
		</div>
	</section>
</main>
