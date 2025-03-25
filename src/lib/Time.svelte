<script lang="ts">
  const time = (node: HTMLElement, interval: number) => {
    const text = node.textContent;
    $effect(() => {
      const id = setInterval(() => {
        node.textContent = `${text} ${new Date().toLocaleTimeString()}`;
      }, interval);
      return () => {
        clearInterval(id);
      }
    })
  }
</script>

<h1 use:time={500}>Title</h1>
<p use:time={1000}>Hello World</p>