import { Link } from "@tanstack/react-router";
import logo from "@/assets/hub-mark.png.asset.json";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "./header";

const SECTION_LINKS = [
  { to: "/como-funciona", hash: "visao-geral", label: "Visão geral" },
  { to: "/starter-kit", hash: undefined, label: "Starter Kit" },
  { to: "/como-funciona", hash: "app-minute", label: "App Minute" },
  { to: "/como-funciona", hash: "gravacao", label: "Gravação" },
  { to: "/como-funciona", hash: "antifraude", label: "Antifraude" },
  { to: "/como-funciona", hash: "perguntas", label: "Perguntas" },
  { to: "/como-funciona", hash: "calculadora", label: "Calculadora" },
] as const;

const LEGAL_LINKS = [
  { to: "/politica-de-privacidade", label: "Política de Privacidade" },
  { to: "/termos-de-uso", label: "Termos de Uso" },
  { to: "/contato", label: "Contato" },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo.url} alt="Logotipo Hub" className="h-7 w-7" width={28} height={28} />
              <span className="text-lg font-bold tracking-tight">Hub</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Grave tarefas do mundo real pelo seu celular e ganhe por hora aprovada.
            </p>
            <div className="mt-5 flex gap-2">
              <Button asChild size="sm" className="rounded-full px-4">
                <a href="https://ai.hub.xyz/r/VNE8A8D7" target="_blank" rel="noopener noreferrer">Cadastre-se</a>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full px-4">
                <a href="https://ai.hub.xyz/" target="_blank" rel="noopener noreferrer">Entrar</a>
              </Button>
            </div>
          </div>

          <nav aria-label="Páginas">
            <h2 className="text-sm font-semibold">Navegação</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.filter((l) => l.label !== "Contato").map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Seções">
            <h2 className="text-sm font-semibold">Seções</h2>
            <ul className="mt-4 space-y-2.5">
              {SECTION_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    hash={item.hash}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Institucional">
            <h2 className="text-sm font-semibold">Institucional</h2>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hub. Todos os direitos reservados.</p>
          <p>Pagamentos via PIX e transferência bancária.</p>
        </div>
      </div>
    </footer>
  );
}
