<script lang="ts">
  let count: number = $state(0);
  let interval: number = $state(1000);

  const increment = () => {
    interval += 1000;
  }
  $effect(() => {
    const id = setInterval(() => {
      count += 1;
    }, interval);
    return () => clearInterval(id);
  })
</script>

<h1 style:color="red">Count {count}</h1>
<button onclick={increment}>Increment interval: {interval} ms</button>