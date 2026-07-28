import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/hub-mark.png.asset.json";
import { Button } from "@/components/ui/button";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/como-funciona", label: "Como Funciona" },
  { to: "/tutoriais", label: "Tutoriais" },
  { to: "/starter-kit", label: "Starter Kit" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="Hub — página inicial">
          <img src={logo.url} alt="Logotipo Hub" className="h-7 w-7" width={28} height={28} />
          <span className="text-lg font-bold tracking-tight">Hub</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:bg-primary-soft data-[status=active]:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/entrar">Entrar</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full px-4 shadow-[var(--shadow-cta)]">
            <Link to="/cadastro">Cadastre-se</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav aria-label="Navegação mobile" className="mx-auto grid max-w-6xl gap-1 px-4 py-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button asChild variant="outline" onClick={() => setOpen(false)}>
                <Link to="/entrar">Entrar</Link>
              </Button>
              <Button asChild onClick={() => setOpen(false)}>
                <Link to="/cadastro">Cadastre-se</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
