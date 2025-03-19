<script lang="ts">
  import {counter} from "../state/counter.svelte"

  // const increment = () => {
  //   counter.count++
  // }
</script>
<p>{counter.count}</p>
<button onclick={counter.increment}>Increment</button>
<button onclick={counter.decrement}>Decrement</button>
