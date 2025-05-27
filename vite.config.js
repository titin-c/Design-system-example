import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: './Design-system-example/', // 👈 base relativa para que las rutas funcionen en GitHub Pages
  plugins: [react()],
})