//-Path: "TeaChoco-Portfolio/client/vite.config.ts"
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    base: process.env.VITE_IS_GITHUB_PAGE === 'true' ? '/TeaChoco/' : '/',
    plugins: [react(), tailwindcss()],
    build: {
        target: 'esnext',
    },
    ssr: {
        noExternal: [
            'react',
            'react-dom',
            'react-router',
            'react-router-dom',
            'framer-motion',
            'react-i18next',
        ],
    },
    resolve: {
        dedupe: ['react', 'react-dom'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
