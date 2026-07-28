import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, CheckCircle2, Play } from "lucide-react";
import robot from "@/assets/robot.webp.asset.json";
import { Button } from "@/components/ui/button";
import { VideoCarousel } from "@/components/site/video-carousel";
import { FeaturedVideo } from "@/components/site/featured-video";
import { WatchVsRecord } from "@/components/site/watch-vs-record";

import { FaqSection, CtaSection } from "@/components/site/sections";
import { faqSchema } from "@/lib/site-data";

const TITLE = "Hub Data — ganhe dinheiro gravando vídeos em casa: R$ 30/h no PIX";
const DESCRIPTION =
  "Renda extra em casa gravando tarefas do dia a dia com o celular: até R$ 30 por hora aprovada, recebimento via PIX e cadastro grátis. Ganhe dinheiro treinando inteligência artificial sem sair do home office.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "hub data, hub video, ganhar dinheiro gravando vídeos, plataforma que paga por vídeos, trabalho em casa, renda extra, home office, ganhe dinheiro na internet, ganhar dinheiro assistindo vídeos, ganhar dinheiro treinando inteligência artificial, grave em casa receba via PIX",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://hubdata.org/" },
    ],
    links: [{ rel: "canonical", href: "https://hubdata.org/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema()) }],
  }),
  component: Index,
});


function Index() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6">
        <div className="panel-lg relative overflow-hidden">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
                Filmou
                <br />
                Ganhou
              </h1>
              <p className="mt-5 text-muted-foreground">
                Grave tarefas do mundo real pelo seu celular.
              </p>
              <p className="mt-6 text-4xl font-bold text-primary sm:text-5xl">R$ 30/h</p>
              <p className="mt-1 text-sm text-muted-foreground">por gravações aprovadas</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-6 shadow-[var(--shadow-cta)]">
                  <a href="https://ai.hub.xyz/r/VNE8A8D7" target="_blank" rel="noopener noreferrer">Cadastre-se</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                  <Link to="/como-funciona">
                    <Play className="h-4 w-4" />
                    Como funciona
                  </Link>
                </Button>
              </div>

              <div className="mt-8">
                <p className="text-xs text-muted-foreground">Receba via</p>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-medium text-secondary-foreground">
                  <span>PIX</span>
                  <span className="text-muted-foreground">·</span>
                  <span>Transferência bancária</span>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[320px]">
              <img
                src={robot.url}
                alt="Robô humanoide da Hub treinado com gravações reais"
                className="ml-auto h-full w-full max-w-md object-contain object-bottom"
                width={1101}
                height={1013}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEO EM DESTAQUE */}
      <FeaturedVideo showSteps />


      {/* DESTAQUES */}
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pt-4 sm:px-6 md:grid-cols-2">
        <article className="panel flex gap-4 p-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
            <BarChart3 className="h-4 w-4" />
          </span>
          <div>
            <h2 className="text-sm font-semibold">Painel em tempo real</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Acompanhe seus ganhos, horas gravadas e taxa de aprovação a qualquer momento.
            </p>
          </div>
        </article>
        <article className="panel flex gap-4 p-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
            <CheckCircle2 className="h-4 w-4" />
          </span>
          <div>
            <h2 className="text-sm font-semibold">Aprovação automática</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Os vídeos passam por uma verificação de qualidade; assim que aprovados, os valores
              entram automaticamente.
            </p>
          </div>
        </article>
      </section>

      {/* SAQUE */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6">
        <div className="panel p-10 text-center">
          <h2 className="text-xl font-bold">Saque quando quiser</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Você escolhe como receber os seus valores:
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-secondary px-4 py-1.5 text-xs font-medium">PIX</span>
            <span className="rounded-full bg-secondary px-4 py-1.5 text-xs font-medium">
              Transferência bancária
            </span>
          </div>
          <Button asChild className="mt-7 rounded-full px-6 shadow-[var(--shadow-cta)]">
            <a href="https://ai.hub.xyz/r/VNE8A8D7" target="_blank" rel="noopener noreferrer">
              Quero começar a ganhar
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* CARROSSEL DE VÍDEOS */}
      <VideoCarousel />

      <FaqSection />

      <CtaSection />
    </>
  );
}
