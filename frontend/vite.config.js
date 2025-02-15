import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
console.log(import.meta.env);
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: process.env.VITE_PORT || 3000, 
  },
});
