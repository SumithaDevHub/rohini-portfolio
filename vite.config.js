import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// replace YOUR_REPO_NAME with your actual repo name
export default defineConfig({
  base: "/rohini-portfolio/", // 👈 must match your repo name
  plugins: [react()],
});
