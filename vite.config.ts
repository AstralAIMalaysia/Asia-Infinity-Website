import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // 👇 This section has the complete fix
  server: {
    // 1. This makes the server accessible externally
    host: '0.0.0.0', 
    
    // 2. This allows requests from your Cloudflare Tunnel
    allowedHosts: [
      '.trycloudflare.com',
       'ngrok-free.dev'
    ]
  }
});