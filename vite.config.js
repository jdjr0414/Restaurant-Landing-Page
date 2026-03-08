import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(function (_a) {
    var isSsrBuild = _a.isSsrBuild;
    return ({
        plugins: [react()],
        server: { port: 5173, open: true },
        build: {
            // Keep client build output when running SSR build so prerender can read index.html
            emptyOutDir: !isSsrBuild,
        },
    });
});
