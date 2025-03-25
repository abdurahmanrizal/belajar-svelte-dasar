<script lang="ts">
  import { getContext } from "svelte"

  const counter: any = getContext("counter");

  // const increment = () => {
  //   counter.count++;
  // };
</script>

<button onclick={counter.increment}>Increment {counter.count}</button>
