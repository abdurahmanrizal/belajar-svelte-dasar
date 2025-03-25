<script lang="ts">
  interface Props {
    id: number | string;
    name: string;
    onEdit: (id: number | string, value: string) => void;
    onCancel: (id: number | string) => void;
  }
  let {id, name, onEdit, onCancel }: Props = $props();
  const save = () => {
    onEdit(id,name);
  }
  const cancel = () => {
    onCancel(id);
  }
</script>

<div style="display: flex; gap: 1rem">
  <input type="text" id="editInput" placeholder="Edit Input" bind:value={name}/>
  <button onclick={save} class="btn">Save</button>
  <button onclick={cancel} class="btn-cancel">Cancel</button>
</div>

<style>
  .btn-cancel {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    background-color: red;
    color: #fff;
  }
</style>
