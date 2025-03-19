<script lang="ts">
  export interface User {
    id: number | string;
    name: string;
    address: string;
  }
   let { id, name, address }: User = $props();
</script>

<tr>
  <td>{id}</td>
  <td>{name}</td>
  <td>{address}</td>
</tr>