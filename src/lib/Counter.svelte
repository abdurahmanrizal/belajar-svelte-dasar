<script lang="ts">
  let count: number = $state(0)
  let name: string = $state('Abdurahman')
  const increment = () => {
    count += 1
  }
  const changeName = () => {
    name = name === 'Svelte' ? 'Abdurahman' : 'Svelte'
  };
</script>
<p>{name}</p>
<button onclick={increment}>
  count is {count}
</button>
<button onclick={changeName}>
  Change Name
</button>
