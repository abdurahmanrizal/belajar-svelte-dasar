<script lang="ts">
  export interface TodoType {
    id: number | string
    name: string
    done: boolean,
    editable: boolean
  }
  const {id, name, done}: TodoType = $props()
</script>

{#if done}
  <s style="text-decoration:line-through">{id} - {name}</s>
{:else}
  {id} - {name}
{/if}
