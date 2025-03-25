<script lang="ts">
  import { counter } from "../state/counter.js"

  const increment = () => {
    $counter++;
  }
</script>

<button onclick={increment}>Increment: {$counter}</button>