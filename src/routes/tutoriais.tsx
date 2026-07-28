import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/sections";
import { TASK_CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/tutoriais")({
  head: () => ({
    meta: [
      { title: "Tutoriais de gravação — como filmar tarefas | Hub" },
      {
        name: "description",
        content:
          "Tutoriais em vídeo da Hub: como usar a faixa de cabeça, gravar pelo app Minute, enquadrar a tarefa e aumentar sua taxa de aprovação.",
      },
      { property: "og:title", content: "Tutoriais de gravação — Hub" },
      {
        property: "og:description",
        content: "Aprenda a gravar vídeos aprovados e ganhar mais por hora.",
      },
      { property: "og:url", content: "https://hubdata.org/tutoriais" },
    ],
    links: [{ rel: "canonical", href: "https://hubdata.org/tutoriais" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Tutoriais", path: "/tutoriais" }])),
      },
    ],
  }),
  component: Tutoriais,
});

const TUTORIALS = [
  { title: "Montando a faixa de cabeça", desc: "Posição correta do celular para o ponto de vista." },
  { title: "Primeira gravação no app Minute", desc: "Do login ao envio do primeiro vídeo." },
  { title: "Enquadramento e iluminação", desc: "Como manter a tarefa sempre visível." },
  { title: "Erros que reprovam o vídeo", desc: "Os 6 motivos mais comuns de rejeição." },
  { title: "Tarefas turbinadas", desc: "Como identificar tarefas que pagam até R$ 30/h." },
  { title: "Saque por PIX", desc: "Como transferir seus ganhos para a sua conta." },
];

function Tutoriais() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pt-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Tutoriais", to: "/tutoriais" }]} />
      <p className="eyebrow">Tutoriais</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Aprenda a gravar e ser aprovado</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Vídeos curtos que mostram, na prática, como gravar tarefas do jeito certo. Os vídeos serão
        publicados aqui em breve.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TUTORIALS.map((t) => (
          <article key={t.title} className="panel overflow-hidden">
            <div className="flex aspect-video items-center justify-center bg-secondary">
              <PlayCircle className="h-8 w-8 text-muted-foreground" aria-hidden />
            </div>
            <div className="p-5">
              <h2 className="text-sm font-semibold">{t.title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <h2 className="mt-14 text-2xl font-bold">Categorias de tarefas</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TASK_CATEGORIES.map((c) => (
          <article key={c.slug} className="panel p-5">
            <h3 className="text-sm font-semibold">{c.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
            <Link
              to="/como-funciona"
              hash="gravacao"
              className="mt-3 inline-block text-xs font-semibold text-primary underline underline-offset-4"
            >
              Ver requisitos
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <CtaSection />
      </div>
    </div>
  );
}
