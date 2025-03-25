<script lang="ts">
  import {SvelteMap} from "svelte/reactivity"

  const students = new SvelteMap()

  let student: string = $state("")
  let value: number = $state(0)
  let isEditing: string | number | null = $state(null)
  const addStudent = () => {
    students.set(student, value)
    student = ""
    value = 0
  }
  const deleteStudent = (key: string) => {
    students.delete(key)
  }
  const editStudent = (key: string | number) => {
    isEditing = key
  }
  const saveStudent = () => {
    if (isEditing !== null) {
      isEditing = null
    }
  }
</script>

<div>
  Student: <input type="text" bind:value={student} />
  <br />
  <br />
  Value: <input type="number" bind:value />
  <br />
  <br />
  <button onclick={addStudent}>Add</button>
</div>
<div>
  <table>
    <thead>
      <tr>
        <th>Student</th>
        <th>Value</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each students as entry (entry[0])}
        <tr>
          <td>
            {entry[0]}
          </td>
          <td>
            {#if isEditing === entry[0]}
              <input
                type="number"
                bind:value={entry[1] as number}
                onchange={(e: Event) => {
                  students.set(entry[0] as string, Number((e.target as HTMLInputElement).value))
                }}
              />
            {:else}
              {entry[1]}
            {/if}
          </td>
          <td>
            {#if isEditing === entry[0]}
              <button onclick={saveStudent}>Save</button>
              <button onclick={() => (isEditing = null)}>Cancel</button>
            {:else}
              <button onclick={() => editStudent(entry[0] as string)}
                >Edit</button
              >
              <button onclick={() => deleteStudent(entry[0] as string)}
                >Delete</button
              >
            {/if}
          </td>
        </tr>
      {:else}
        <tr>
          <td colspan="2">No students</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
