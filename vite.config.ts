import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                privacy: resolve(__dirname, 'src/privacy/index.html'),
                support: resolve(__dirname, 'src/support/index.html')
            }
        },
        outDir: '../dist',
        minify: true,
        emptyOutDir: true
    }
});
