//-Path: "TeaChoco-Portfolio/client/vite.config.ts"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    base: '/TeaChoco/',
    plugins: [react(), tailwindcss()],
    server: {
        port: 1000,
        host: '0.0.0.0',
        strictPort: true,
    },
});
