<script lang="ts">
  class Box {
    width: number = $state(100);
    height: number = $state(100);
    area: number = $derived(this.width * this.height);
  }
  const box = new Box();
</script>

<div>
  Width : <input type="range" min="0" max="500" bind:value={box.width}>
  <br />
  Height : <input type="range" min="0" max="500" bind:value={box.height}>
</div>

<div style:width="{box.width}px" style:height="{box.height}px" style:background="red" style:borderRadius="10px">
  {box.area}
</div>
