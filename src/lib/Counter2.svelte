<script lang="ts">
  let count: number[] = $state([])
  // $derived for single line of code
  // $derived.by for multiple lines of code
  //  - $derived.by can use arrow function
  //  - $derived.by can use function  
  // $inspect for debugging on svelte, when we use console.log for debugging, it will not show the value cause on svelte reactivity state shape a proxy array or object
  // let total: number = $derived(count.reduce((a, b) => a + b, 0))
  // const sumFunc = () => {
  //   let total = 0
  //   for (let i = 0; i < count.length; i++) {
  //     total += count[i]
  //   }
  //   return total
  // }
  function sumFunc() {
    let total = 0
    for (let i = 0; i < count.length; i++) {
      total += count[i]
    }
    return total
  }
  // let total: number = $derived.by(() => {
  //   let total = 0
  //   for (let i = 0; i < count.length; i++) {
  //     total += count[i]
  //   }
  //   return total
  // });
  let total: number = $derived.by(sumFunc);
  const increment = () => {
    count = [...(count as number[]), count.length + 1]
  }
  const reset = () => {
    count = []
  }
  $inspect(count).with((types, data) => {
    console.log(types, data)
  })
</script>

<h1>{count.join(" + ")} = {total}</h1>

<div style="display: flex; gap: 3rem;">
  <button onclick={increment}>Increment</button>
  <button onclick={reset}>Reset</button>
</div>
