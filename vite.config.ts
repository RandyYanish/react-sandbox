import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
    'import.meta.env.VITE_AUTH0_DOMAIN': JSON.stringify(
      process.env.VITE_AUTH0_DOMAIN
    ),
    'import.meta.env.VITE_AUTH0_CLIENT_ID': JSON.stringify(
      process.env.VITE_AUTH0_CLIENT_ID
    ),
  },
});
