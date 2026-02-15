import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: change `base` to `/<your-repo>/` if your repo name is different
export default defineConfig({
  base: '/cv-generator/',
  plugins: [react()],
});
