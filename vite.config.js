// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/DevOpsReact/",
//   plugins: [react()],
// });

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ou simplesmente remova essa linha
  plugins: [react()],
});

