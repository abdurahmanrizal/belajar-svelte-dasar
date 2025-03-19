import { mount } from 'svelte'
import './app.css'
import Counter2 from './lib/Counter2.svelte'

const app = mount(Counter2, {
  target: document.getElementById('app')!,
})

export default app
