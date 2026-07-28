import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: "Cadastre-se grátis e ganhe R$ 30/h gravando | Hub" },
      {
        name: "description",
        content:
          "Crie sua conta grátis na Hub, receba o Starter Kit sem custo e comece a ganhar R$ 30 por hora aprovada gravando tarefas do dia a dia.",
      },
      { property: "og:title", content: "Cadastre-se grátis — Hub" },
      { property: "og:description", content: "Cadastro em minutos, sem custo e sem experiência." },
      { property: "og:url", content: "https://hubdata.org/cadastro" },
    ],
    links: [{ rel: "canonical", href: "https://hubdata.org/cadastro" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Cadastre-se", path: "/cadastro" }])),
      },
    ],
  }),
  component: Cadastro,
});

function Cadastro() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 pt-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Cadastre-se", to: "/cadastro" }]} />
      <p className="eyebrow">Cadastro grátis</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Crie sua conta</h1>
      <p className="mt-4 text-muted-foreground">
        Leva menos de 2 minutos. Você nunca paga nada para participar.
      </p>

      <form
        className="panel mt-8 space-y-4 p-6 sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Cadastro recebido! Verifique seu e-mail.");
          (e.target as HTMLFormElement).reset();
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="nome">Nome completo</Label>
          <Input id="nome" name="nome" required placeholder="Seu nome" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" required placeholder="voce@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone">Celular (WhatsApp)</Label>
          <Input id="telefone" name="telefone" type="tel" required placeholder="(11) 90000-0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cidade">Cidade</Label>
          <Input id="cidade" name="cidade" required placeholder="São Paulo, SP" />
        </div>
        <Button type="submit" size="lg" className="w-full rounded-full shadow-[var(--shadow-cta)]">
          Cadastre-se grátis
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Já tem conta?{" "}
          <Link to="/entrar" className="font-semibold text-primary underline underline-offset-4">
            Entrar
          </Link>
        </p>
      </form>

      <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
        {["Starter Kit grátis", "Saque por PIX", "Sem experiência"].map((i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
