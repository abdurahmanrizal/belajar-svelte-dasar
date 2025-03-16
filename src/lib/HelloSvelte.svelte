<script lang="ts">
  const name = 'Svelte';
  const src = 'https://www.programmerzamannow.com/img/pzn.png'
</script>

<style>
  h1 {
    color: red;
  }
</style>

<h1>Hello, {name.toUpperCase()}!</h1>
<img {src} alt="Programmer Zaman Now" />
