<script lang="ts">
  import { setContext } from "svelte"
  import ContextCounter from "./ContextCounter.svelte"

  const counter = $state({count: 0, increment: () => counter.count++});
  setContext("counter", counter);
</script>

<ContextCounter />
<ContextCounter />
<ContextCounter />