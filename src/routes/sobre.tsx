import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/sections";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Hub — IA treinada com tarefas do mundo real" },
      {
        name: "description",
        content:
          "A Hub é uma empresa de IA com sede em São Francisco e escritório em São Paulo que paga colaboradores por gravações de tarefas reais do dia a dia.",
      },
      { property: "og:title", content: "Sobre a Hub" },
      {
        property: "og:description",
        content: "Por que pagamos por gravações reais e como isso treina robôs.",
      },
      { property: "og:url", content: "https://hubdata.org/sobre" },
    ],
    links: [{ rel: "canonical", href: "https://hubdata.org/sobre" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Sobre", path: "/sobre" }])),
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Sobre", to: "/sobre" }]} />
      <p className="eyebrow">Sobre</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Robôs aprendem com pessoas reais</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A Hub é uma empresa de inteligência artificial com sede em São Francisco e um escritório em
        São Paulo. Pagamos colaboradores pelo material do mundo real que torna o treinamento de
        robôs possível.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { k: "R$ 30/h", v: "Pago por gravações aprovadas" },
          { k: "Até 48h", v: "Prazo de revisão dos vídeos" },
          { k: "100% grátis", v: "Cadastro e Starter Kit sem custo" },
        ].map((item) => (
          <article key={item.k} className="panel p-6">
            <p className="text-2xl font-bold text-primary">{item.k}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{item.v}</p>
          </article>
        ))}
      </div>

      <div className="panel mt-10 space-y-4 p-8 text-sm leading-relaxed text-muted-foreground">
        <p>
          Nossa missão é ensinar máquinas a colaborar com pessoas em tarefas cotidianas — organizar,
          limpar, consertar e cuidar. Para isso, precisamos de dados gravados por pessoas reais, em
          casas reais, com objetos reais.
        </p>
        <p>
          Cada vídeo passa por uma verificação de qualidade e privacidade antes de entrar no
          conjunto de treinamento. Você mantém o controle sobre o que envia e pode remover
          gravações a qualquer momento pelo app.
        </p>
      </div>

      <div className="mt-16">
        <CtaSection />
      </div>
    </div>
  );
}
