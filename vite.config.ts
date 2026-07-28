// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Gera HTML estático de todas as páginas (necessário para hospedagem FTP na Hostinger)
    prerender: { enabled: true, crawlLinks: true },
    pages: [
      { path: "/" },
      { path: "/sobre" },
      { path: "/como-funciona" },
      { path: "/tutoriais" },
      { path: "/starter-kit" },
      { path: "/contato" },
      { path: "/cadastro" },
      { path: "/entrar" },
      { path: "/termos-de-uso" },
      { path: "/politica-de-privacidade" },
    ],
  },
});
