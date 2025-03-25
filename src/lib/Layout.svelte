<script lang="ts">
  const { title, content, footer }: { title: string; content: any , footer: string | HTMLElement } = $props();
</script>
<h1>{title}</h1>
<div>
  {@render content()}
</div>
<p>
  {@html footer}
</p>