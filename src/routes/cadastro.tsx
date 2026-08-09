import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Smartphone, Wallet, Clock } from "lucide-react";
import { AuthCta } from "@/components/site/auth-cta";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: "Hub Data Cadastro: cadastre-se grátis e ganhe R$ 30/h" },
      {
        name: "description",
        content:
          "Hub Cadastro oficial: faça o cadastro grátis na Hub Data em minutos, baixe o app, grave tarefas do dia a dia e ganhe até R$ 30 por hora aprovada com saque por PIX.",
      },
      {
        name: "keywords",
        content:
          "hub cadastro, hub data cadastro, hub cadastre-se, hub vídeo cadastrar, cadastro hub data, hub data app, hub data escritório virtual, ganhar dinheiro gravando vídeos, renda extra em casa pelo celular",
      },
      { property: "og:title", content: "Hub Data Cadastro — cadastre-se grátis" },
      {
        property: "og:description",
        content: "Cadastro Hub Data em 2 minutos, sem custo e sem experiência. Ganhe até R$ 30/h com saque por PIX.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hubdata.org/cadastro" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hubdata.org/cadastro" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Cadastre-se", path: "/cadastro" }])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Como fazer o cadastro na Hub Data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Clique em Cadastre-se grátis, preencha seus dados, confirme o e-mail e baixe o app Minute Data para começar a gravar tarefas.",
              },
            },
            {
              "@type": "Question",
              name: "O cadastro Hub é pago?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. O cadastro na Hub Data é 100% gratuito e você nunca paga nada para participar.",
              },
            },
            {
              "@type": "Question",
              name: "Quanto dá para ganhar depois do cadastro?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Até R$ 30 por hora de gravação aprovada, com pagamento por PIX.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Cadastro,
});

const BENEFITS = [
  { icon: Wallet, title: "Pagamento por PIX", text: "Receba até R$ 30 por hora de gravação aprovada." },
  { icon: Clock, title: "Cadastro em 2 minutos", text: "Sem taxa, sem mensalidade e sem experiência." },
  { icon: Smartphone, title: "Só pelo celular", text: "Grave tarefas simples de casa, no seu horário." },
];

function Cadastro() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pt-8 pb-16 sm:px-6">
      <Breadcrumbs items={[{ label: "Cadastre-se", to: "/cadastro" }]} />
      <p className="eyebrow">Hub Data Cadastro</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        Cadastre-se grátis na Hub Data
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Faça o <strong className="text-foreground">cadastro Hub</strong> em menos de 2 minutos, ative seu
        escritório virtual no app e comece a ganhar até{" "}
        <strong className="text-foreground">R$ 30 por hora</strong> gravando tarefas do dia a dia em casa.
      </p>

      <div className="mt-8">
        <AuthCta
          note="Antes de se cadastrar, entre no nosso grupo de suporte no WhatsApp — lá a equipe acompanha seu cadastro, tira dúvidas e ajuda nas primeiras gravações."
          label="Cadastre-se grátis"
          href="https://ai.hub.xyz/r/VNE8A8D7"
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {BENEFITS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="panel p-5">
            <Icon className="h-5 w-5 text-primary" aria-hidden />
            <h2 className="mt-3 text-sm font-bold">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Como funciona o cadastro Hub Data</h2>
        <ol className="mt-4 grid gap-3">
          {[
            "Clique no botão Cadastre-se grátis e preencha nome, e-mail e telefone.",
            "Confirme seu e-mail e acesse o painel (escritório virtual) da Hub Data.",
            "Baixe o app Hub Data / Minute Data no iPhone ou Android e faça login.",
            "Escolha uma tarefa, grave o vídeo e envie para aprovação.",
            "Após a aprovação, solicite o saque por PIX.",
          ].map((step, i) => (
            <li key={step} className="flex gap-3 rounded-2xl border border-border bg-surface p-4 text-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <ul className="mt-8 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
        {["Starter Kit grátis", "Saque por PIX", "Sem experiência"].map((i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            {i}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-muted-foreground">
        Já tem conta?{" "}
        <Link to="/entrar" className="font-semibold text-primary underline underline-offset-4">
          Fazer login na Hub Data
        </Link>
      </p>
    </div>
  );
}
