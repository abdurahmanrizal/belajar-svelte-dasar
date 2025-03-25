<script lang="ts">
  const mouse = $state({
    x: 0,
    y: 0,
  })
  const move = (e: MouseEvent) => {
    // mouse = {
    //   x: e.clientX,
    //   y: e.clientY,
    // }
    mouse.x = e.clientX
    mouse.y = e.clientY
  }  
</script>

<svelte:body onmousemove={move} />

<p>Mouse x : {mouse.x}</p>
<p>Mouse y : {mouse.y}</p>