import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(function (_a) {
    var isSsrBuild = _a.isSsrBuild;
    return ({
        plugins: [react()],
        server: { port: 5173, open: true },
        build: {
            emptyOutDir: !isSsrBuild,
        },
    });
});
