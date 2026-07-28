import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/entrar")({
  head: () => ({
    meta: [
      { title: "Entrar na sua conta Hub" },
      {
        name: "description",
        content:
          "Acesse sua conta Hub para acompanhar horas gravadas, taxa de aprovação, ganhos e saques por PIX.",
      },
      { property: "og:title", content: "Entrar — Hub" },
      { property: "og:description", content: "Acesse seu painel de ganhos e gravações." },
      { property: "og:url", content: "https://hubdata.org/entrar" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://hubdata.org/entrar" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Entrar", path: "/entrar" }])),
      },
    ],
  }),
  component: Entrar,
});

function Entrar() {
  return (
    <div className="mx-auto w-full max-w-md px-4 pt-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Entrar", to: "/entrar" }]} />
      <h1 className="text-3xl font-bold">Entrar</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Acesse seu painel de ganhos e gravações.
      </p>
      <form
        className="panel mt-6 space-y-4 p-6 sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          toast.info("Login disponível em breve.");
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" required placeholder="voce@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" name="senha" type="password" required placeholder="••••••••" />
        </div>
        <Button type="submit" size="lg" className="w-full rounded-full">
          Entrar
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Ainda não tem conta?{" "}
          <Link to="/cadastro" className="font-semibold text-primary underline underline-offset-4">
            Cadastre-se grátis
          </Link>
        </p>
      </form>
    </div>
  );
}
