<script lang="ts">
  import UserRow, { type User } from "./UserRow.svelte"
  const user: User = {
    id: 1,
    name: "Abdurahman",
    address: "Semarang"
  }
</script>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <UserRow {...user}/>
  </tbody>
</table>