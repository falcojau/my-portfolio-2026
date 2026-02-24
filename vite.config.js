import { defineConfig } from 'vite'
export default defineConfig({
base: '/nombre-de-tu-repositorio/',
build: {
rollupOptions: {
input: {
main: './index.html',
},
},
},
})