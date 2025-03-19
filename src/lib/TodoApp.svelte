<script lang="ts">
  import Todo, {type TodoType} from "./Todo.svelte"
  const todo: TodoType = {
    id: 1,
    name: "Buy milk",
    done: true,
  }

  const todos: TodoType[] = $state([
    {
      id: 1,
      name: "Buy milk",
      done: true,
    },
    {
      id: 2,
      name: "Buy eggs",
      done: false,
    },
    {
      id: 3,
      name: "Buy bread",
      done: false,
    },
  ]);

  const remove = () => {
    todos.shift();
  }
</script>
<button onclick={remove} disabled={!todos.length}>Remove</button>
<ul>
  {#each todos as todo (todo.id)}
    <li><Todo {...todo} /></li>
  {/each}
</ul>
