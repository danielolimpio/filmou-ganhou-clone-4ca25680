import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, KeyRound, LifeBuoy } from "lucide-react";
import { AuthCta } from "@/components/site/auth-cta";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";

export const Route = createFileRoute("/entrar")({
  head: () => ({
    meta: [
      { title: "Hub Data Login: entrar no escritório virtual Hub" },
      {
        name: "description",
        content:
          "Hub Data Login oficial: entre no seu escritório virtual Hub para acompanhar horas gravadas, taxa de aprovação, ganhos e saques por PIX. Acesso pelo site ou pelo app.",
      },
      {
        name: "keywords",
        content:
          "hub data login, hub login, hub data entrar, hub data escritório virtual, hub data dashboard, hub data app, login hub data, painel hub data",
      },
      { property: "og:title", content: "Hub Data Login — entrar na sua conta" },
      {
        property: "og:description",
        content: "Acesse o escritório virtual Hub Data: ganhos, gravações, aprovações e saques por PIX.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hubdata.org/entrar" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hubdata.org/entrar" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Entrar", path: "/entrar" }])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Como fazer login na Hub Data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Clique em Entrar, informe o e-mail e a senha cadastrados e você acessa o escritório virtual (dashboard) da Hub Data.",
              },
            },
            {
              "@type": "Question",
              name: "O que é o escritório virtual da Hub Data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "É o painel onde você vê tarefas disponíveis, horas gravadas, taxa de aprovação, saldo e solicita saque por PIX.",
              },
            },
            {
              "@type": "Question",
              name: "Esqueci minha senha do Hub, o que fazer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Use a opção de recuperação de senha na tela de login ou peça ajuda no grupo de suporte no WhatsApp.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Entrar,
});

const PANEL_ITEMS = [
  { icon: BarChart3, title: "Dashboard Hub Data", text: "Horas gravadas, aprovações e saldo em tempo real." },
  { icon: KeyRound, title: "Escritório virtual", text: "Tarefas disponíveis e histórico de envios em um só lugar." },
  { icon: LifeBuoy, title: "Suporte no WhatsApp", text: "Ajuda rápida com login, gravações e pagamentos." },
];

function Entrar() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pt-8 pb-16 sm:px-6">
      <Breadcrumbs items={[{ label: "Entrar", to: "/entrar" }]} />
      <p className="eyebrow">Hub Data Login</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        Entrar na Hub Data
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Acesse o <strong className="text-foreground">escritório virtual Hub Data</strong> para ver tarefas,
        horas gravadas, taxa de aprovação, ganhos e solicitar seu saque por PIX.
      </p>

      <div className="mt-8">
        <AuthCta
          note="Antes de entrar, participe do nosso grupo de suporte no WhatsApp — lá ajudamos com login, senha, envio de vídeos e pagamentos."
          label="Entrar na minha conta"
          href="https://ai.hub.xyz/"
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {PANEL_ITEMS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="panel p-5">
            <Icon className="h-5 w-5 text-primary" aria-hidden />
            <h2 className="mt-3 text-sm font-bold">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Como acessar sua conta Hub</h2>
        <ol className="mt-4 grid gap-3">
          {[
            "Clique em Entrar na minha conta para abrir o login oficial da Hub.",
            "Informe o e-mail e a senha usados no cadastro Hub Data.",
            "No dashboard, acompanhe gravações enviadas, aprovações e saldo.",
            "Use o app Hub Data / Minute Data no celular para gravar novas tarefas.",
            "Peça o saque por PIX quando o saldo estiver disponível.",
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

      <p className="mt-8 text-sm text-muted-foreground">
        Ainda não tem conta?{" "}
        <Link to="/cadastro" className="font-semibold text-primary underline underline-offset-4">
          Fazer o cadastro Hub grátis
        </Link>
      </p>
    </div>
  );
}
