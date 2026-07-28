import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — fale com a equipe Hub" },
      {
        name: "description",
        content:
          "Fale com a Hub sobre cadastro, Starter Kit, gravações, aprovação de vídeos ou pagamentos por PIX. Atendimento em português.",
      },
      { property: "og:title", content: "Contato — Hub" },
      { property: "og:description", content: "Tire dúvidas sobre gravações e pagamentos." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Contato", path: "/contato" }])),
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Contato", to: "/contato" }]} />
      <p className="eyebrow">Contato</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Fale com a gente</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Dúvidas sobre cadastro, Starter Kit, gravações ou pagamentos? Envie sua mensagem.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <form
          className="panel space-y-4 p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Mensagem enviada! Responderemos em até 48 horas.");
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" name="nome" required placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" type="email" required placeholder="voce@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="assunto">Assunto</Label>
            <Input id="assunto" name="assunto" required placeholder="Sobre o que você quer falar" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea id="mensagem" name="mensagem" required rows={5} placeholder="Escreva aqui..." />
          </div>
          <Button type="submit" className="rounded-full px-6 shadow-[var(--shadow-cta)]">
            Enviar mensagem
          </Button>
        </form>

        <aside className="space-y-4">
          <div className="panel flex gap-3 p-6">
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            <div>
              <h2 className="text-sm font-semibold">E-mail</h2>
              <p className="mt-1 text-sm text-muted-foreground">suporte@hub.com.br</p>
            </div>
          </div>
          <div className="panel flex gap-3 p-6">
            <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
            <div>
              <h2 className="text-sm font-semibold">Suporte no app</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Chat disponível dentro do app Minute.
              </p>
            </div>
          </div>
          <div className="panel flex gap-3 p-6">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <div>
              <h2 className="text-sm font-semibold">Escritórios</h2>
              <p className="mt-1 text-sm text-muted-foreground">São Paulo, BR · São Francisco, US</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
