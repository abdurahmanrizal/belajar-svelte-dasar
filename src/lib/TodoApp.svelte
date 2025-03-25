<script lang="ts">
  import {fade, fly} from "svelte/transition"
  import EditTodo from "./EditTodo.svelte"
  import Todo, {type TodoType} from "./Todo.svelte"
  let todos: TodoType[] = $state([])
  let name = $state("")
  const add = (e: Event) => {
    e.preventDefault()
    todos.push({
      id: todos.length + 1,
      name: name,
      done: false,
      editable: false,
    })
    name = ""
  }
  const remove = (id: string | number) => {
    todos = todos.filter((todo) => todo.id !== id)
  }
  const edit = (id: string | number, value: string) => {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.name = value
        todo.editable = false
      }
      return todo
    })
  }
  const selected = (id: string | number) => {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.editable = !todo.editable
      }
      return todo
    })
  }
</script>

<div style="display: flex; gap: 1rem; margin-bottom: 1rem">
  <form>
    <input
      type="text"
      placeholder="Todo"
      name="todoInput"
      id="todoInput"
      bind:value={name}
      onkeydown={(e) => {
        if (e.key === "Enter") {
          add(e)
        }
      }}
    />
    <button onclick={add}>Add</button>
  </form>
</div>
{#snippet todoRow(todo: TodoType)}
  <li
    in:fly={{y: -200, duration: 2000}}
    out:fly={{y: 200, duration: 2000}}
    onintrostart={() => console.log("intro started")}
    onoutrostart={() => console.log("outro started")}
    onintroend={() => console.log("intro ended")}
    onoutroend={() => console.log("outro ended")}
  >
    {#if todo.editable}
      <EditTodo
        id={todo?.id || ""}
        name={todo?.name || ""}
        onEdit={edit}
        onCancel={selected}
      />
    {:else}
      <Todo {...todo} />
      <button
        onclick={() => selected(todo.id)}
        style="margin-inline-start: 1rem;">Edit</button
      >
      <button onclick={() => remove(todo.id)} style="margin-inline-start: 1rem;"
        >Remove</button
      >
    {/if}
  </li>
{/snippet}
<ul style="display: flex; flex-direction: column; gap: 1rem">
  {#each todos as todo (todo.id)}
    {@render todoRow(todo)}
  {/each}
</ul>

<style>
  :global {
    button {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      background-color: orange;
      color: #fff;
    }
  }
</style>
