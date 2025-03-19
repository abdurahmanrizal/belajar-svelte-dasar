export const counter = $state({
  count: 0,
  increment: () => {
    counter.count += 1;
  },
  decrement: () => {
    counter.count -= 1;
  }
});