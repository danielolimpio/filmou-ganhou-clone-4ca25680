import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BatteryCharging, Camera, CheckCircle2, CreditCard, RotateCcw, Smartphone, Sparkles, Sun, Volume2, Wallet, XCircle } from "lucide-react";
import hiwVideo from "@/assets/videos/how-it-works.mp4.asset.json";
import hiwPoster from "@/assets/videos/how-it-works-poster.jpg.asset.json";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";
import { FeaturedVideo } from "@/components/site/featured-video";
import { EarningsCalculator } from "@/components/site/earnings-calculator";
import { FaqSection, CtaSection } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { StoreBadges } from "@/components/site/store-badges";
import { OrgCodeCard, AppScreens } from "@/components/site/app-onboarding";
import { faqSchema, TASK_CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como funciona — grave tarefas e ganhe por hora | Hub" },
      {
        name: "description",
        content:
          "Passo a passo da Hub: receba o Starter Kit grátis, baixe o app Minute, grave tarefas do dia a dia e receba por hora aprovada via PIX.",
      },
      { property: "og:title", content: "Como funciona — Hub" },
      {
        property: "og:description",
        content: "Starter Kit, app Minute, boas gravações, antifraude e calculadora de ganhos.",
      },
      { property: "og:url", content: "/como-funciona" },
    ],
    links: [{ rel: "canonical", href: "/como-funciona" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema()) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([{ name: "Como Funciona", path: "/como-funciona" }]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como ganhar gravando tarefas com a Hub",
          step: [
            { "@type": "HowToStep", name: "Cadastre-se grátis" },
            { "@type": "HowToStep", name: "Receba o Starter Kit" },
            { "@type": "HowToStep", name: "Grave pelo app Minute" },
            { "@type": "HowToStep", name: "Receba por hora aprovada" },
          ],
        }),
      },
    ],
  }),
  component: ComoFunciona,
});

const STEPS = [
  { icon: Smartphone, title: "Cadastre-se grátis", desc: "Crie sua conta em minutos, sem custo e sem experiência." },
  { icon: Camera, title: "Receba o Starter Kit", desc: "Faixa de cabeça e suporte para o celular enviados até você." },
  { icon: CheckCircle2, title: "Grave e envie", desc: "Grave tarefas reais do início ao fim pelo app Minute." },
  { icon: Wallet, title: "Receba por hora", desc: "Aprovação em até 48h e saque por PIX quando quiser." },
];

const GOOD = [
  "Visão estável da testa, levemente para baixo",
  "Mãos e dedos visíveis enquanto você trabalha",
  "Imagem nítida e bem iluminada",
  "Uma tarefa completa, em ritmo natural",
];

const BAD = [
  "Câmera tremida, inclinada ou obstruída, ou pouca luz",
  "Mãos levantadas de propósito ou movimento robótico",
  "Mãos fora do quadro mais de 10% do tempo",
  "Sentado, pausas longas ou tarefas encenadas",
];

const ENVIRONMENT = [
  { icon: Sun, label: "Boa iluminação, uniforme" },
  { icon: Volume2, label: "Um ambiente calmo" },
  { icon: Sparkles, label: "Lente limpa" },
  { icon: BatteryCharging, label: "Celular carregado" },
];

function ComoFunciona() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Como Funciona", to: "/como-funciona" }]} />

      <section id="visao-geral" className="scroll-mt-24">
        <p className="eyebrow">Visão geral</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Como funciona</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Comece a ganhar R$ 25/h em 4 passos. Você grava tarefas reais do dia a dia pelo celular e
          recebe por cada hora aprovada.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {STEPS.map((s, i) => (
            <article key={s.title} className="panel flex gap-4 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <s.icon className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-sm font-semibold">
                  {i + 1}. {s.title}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FeaturedVideo
        src={hiwVideo.url}
        poster={hiwPoster.url}
        eyebrow="Vídeo em destaque"
        title="Veja o passo a passo em vídeo"
        description="Do cadastro à gravação: acompanhe uma demonstração completa de como usar a faixa de cabeça, iniciar a tarefa no app Minute e enviar o vídeo para aprovação."
      />



      <section id="starter-kit" className="mt-16 scroll-mt-24">
        <p className="eyebrow">Starter Kit</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Peça seu Starter Kit</h2>
        <div className="panel mt-6 p-6">
          <p className="text-sm text-muted-foreground">
            O kit é gratuito e chega até você sem custo de envio. Ele inclui:
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {["Faixa de cabeça com suporte para o celular", "Guia rápido de gravação", "Etiqueta de identificação do colaborador"].map(
              (item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ),
            )}
          </ul>
          <Button asChild className="mt-6 rounded-full px-6">
            <Link to="/starter-kit">
              Ver o Starter Kit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="app-minute" className="mt-16 scroll-mt-24">
        <p className="eyebrow">App</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Baixe o app Minute</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          O app Minute é onde você grava sua rotina diária e recebe por cada minuto aprovado. É bem
          simples.
        </p>
        <div className="panel mt-6 p-6">
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
              1
            </span>
            <div className="w-full">
              <h3 className="text-base font-semibold">Baixe o app</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Escaneie um código ou toque em um botão da loja para instalar o Minute.
              </p>
              <StoreBadges className="mt-5" />
            </div>
          </div>
        </div>

        <div className="panel mt-4 p-6">
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
              2
            </span>
            <div className="w-full">
              <h3 className="text-base font-semibold">Crie sua conta</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Use o mesmo e-mail da sua conta Hub para vincular as duas e digite seu código de
                organização para liberar o acesso.
              </p>
              <OrgCodeCard />
            </div>
          </div>
        </div>

        <div className="panel mt-4 p-6">
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
              3
            </span>
            <div className="w-full">
              <h3 className="text-base font-semibold">Escolha uma tarefa, toque em Play e grave</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Escolha uma tarefa no app, toque em play e filme. É só isso.
              </p>
              <AppScreens />
            </div>
          </div>
        </div>
      </section>

      <section id="gravacao" className="mt-16 scroll-mt-24">
        <p className="eyebrow">Passo 3</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Como gravar bons vídeos</h2>

        <div className="mt-6 flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
            1
          </span>
          <div className="w-full">
            <h3 className="text-base font-semibold">Posicione seu celular</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Prenda o celular na testa, inclinado uns 45º para baixo para que suas mãos e pés
              fiquem no quadro. Grave na horizontal (celular deitado).
            </p>
            <p className="eyebrow mt-5">Teste de ângulo</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-destructive/25 bg-destructive/10 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/15 text-destructive">
                  <XCircle className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-destructive">ERRADO</p>
                  <p className="text-sm text-muted-foreground">Você só vê a parede</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary-soft p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-primary">CERTO</p>
                  <p className="text-sm text-muted-foreground">Mãos e pés visíveis</p>
                </div>
              </div>
            </div>
            <p className="mt-3 flex items-center gap-2 rounded-2xl border border-primary/25 bg-primary-soft px-4 py-3 text-sm text-accent-foreground">
              <RotateCcw className="h-4 w-4 shrink-0 text-primary" />
              Grave na horizontal: vire o celular de lado na faixa.
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
            2
          </span>
          <div className="w-full">
            <h3 className="text-base font-semibold">Prepare o ambiente</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Boa iluminação e uniforme (luz natural é melhor), um ambiente calmo, a lente limpa e o
              celular carregado ou uma bateria portátil.
            </p>
            <div className="mt-4 grid gap-3 grid-cols-2 lg:grid-cols-4">
              {ENVIRONMENT.map((e) => (
                <div key={e.label} className="panel flex flex-col items-center gap-3 p-5 text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <e.icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-muted-foreground">{e.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
            3
          </span>
          <div className="w-full">
            <h3 className="text-base font-semibold">Faça de verdade</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Trabalhe no seu ritmo natural e complete uma tarefa do início ao fim. Mantenha as mãos
              no quadro ao pegar, segurar ou soltar. Não trabalhe devagar de propósito, nem faça
              tarefas falsas ou repetitivas.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/25 bg-primary-soft p-5">
                <h4 className="flex items-center gap-2 text-base font-semibold text-primary">
                  <CheckCircle2 className="h-4 w-4" />O que é aprovado
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {GOOD.map((g) => (
                    <li key={g} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-destructive/25 bg-destructive/10 p-5">
                <h4 className="flex items-center gap-2 text-base font-semibold text-destructive">
                  <XCircle className="h-4 w-4" />O que é rejeitado
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {BAD.map((b) => (
                    <li key={b} className="flex gap-2">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>


        <h3 className="mt-8 text-sm font-semibold">Categorias de tarefas aceitas</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TASK_CATEGORIES.map((c) => (
            <article key={c.slug} className="panel p-4">
              <h4 className="text-sm font-semibold">{c.name}</h4>
              <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 rounded-xl bg-primary-soft px-4 py-3 text-sm text-accent-foreground">
          As Tarefas turbinadas pagam mais: até R$ 30 por hora aprovada.
        </p>
      </section>

      <section id="antifraude" className="mt-16 scroll-mt-24">
        <p className="eyebrow">Segurança</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Prevenção de fraude</h2>
        <div className="mt-6 space-y-3">
          <div className="panel border-l-4 border-primary p-5">
            <h3 className="text-sm font-semibold">A Hub nunca cobra nada</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Participar é 100% grátis. Nunca pedimos pagamento, taxa de adesão ou depósito.
            </p>
          </div>
          <div className="panel border-l-4 border-destructive p-5">
            <h3 className="text-sm font-semibold">Sinais de golpe</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>Pedido de pagamento antecipado</li>
              <li>Contato por canais não oficiais</li>
              <li>Promessa de ganhos fora do padrão</li>
            </ul>
          </div>
          <div className="panel border-l-4 border-warning p-5">
            <h3 className="text-sm font-semibold">Pagamento seguro</h3>
            <p className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              Saques apenas por PIX ou transferência bancária na conta do próprio colaborador.
            </p>
          </div>
        </div>
      </section>

      <FaqSection />
      <EarningsCalculator />
      <CtaSection />
    </div>
  );
}
