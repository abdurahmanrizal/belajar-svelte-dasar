import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        hello: 'hello.html',
        counter: 'counter.html',
        counter2: 'counter2.html',
        sayhello: 'sayHello.html',
        globalcounter: 'globalcounter.html',
        autocounter: 'autocounter.html',
        todo: 'todo.html',
        time: 'time.html',
        box: 'box.html',
        store_counter: 'store_counter.html',
        blog: 'blog.html',
        contextcounter: 'context_counter.html',
        mouse: 'mouse.html',
      }
    }
  }
})
