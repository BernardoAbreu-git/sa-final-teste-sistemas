import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Config do Vite (servidor de desenvolvimento + build).
// O plugin-react habilita JSX e Fast Refresh ao rodar `npm run dev`.
export default defineConfig({
  plugins: [react()],
});
