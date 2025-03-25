<script lang="ts">
  import { onMount } from "svelte"
  import Layout from "./Layout.svelte"
  let blog = $state({
    title: "",
    footer: "",
    content: ""
  })
  onMount(async () => {
    const res = await fetch("/blog.json")
    blog = await res.json()
  })
</script>

<Layout title={blog.title} footer={blog.footer}>
  {#snippet content()}
    {@html blog.content}
  {/snippet}
</Layout>