import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000"
      }
    },
    port: 5173,
    open: true,
    watch: {
      usePolling: true, // especially for WSL/Docker/VM setups
    },
  },
})