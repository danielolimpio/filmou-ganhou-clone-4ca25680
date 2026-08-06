import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, CheckCircle2, Play } from "lucide-react";
import robot from "@/assets/robot.webp.asset.json";
import { Button } from "@/components/ui/button";
import { VideoCarousel } from "@/components/site/video-carousel";
import { FeaturedVideo } from "@/components/site/featured-video";
import { WatchVsRecord } from "@/components/site/watch-vs-record";

import { FaqSection, CtaSection } from "@/components/site/sections";
import { faqSchema } from "@/lib/site-data";

const TITLE = "Ganhe dinheiro gravando vídeos em casa | Hub Data";
const DESCRIPTION =
  "Grave tarefas do dia a dia com o celular e ganhe até R$ 30 por hora aprovada, com saque via PIX. Cadastro grátis na Hub Data.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "hub data, hubdata, hub video, hub vídeos, hub videos, hub ganhar dinheiro, hub ganhe dinheiro, hub filmou ganhou, filmou ganhou hub, hub gravar videos, hub gravar vídeos, hub gravar video, hub gravar tarefas, hub grave suas tarefas, hub tarefas, hub tarefas domésticas, hub tarefas domesticas, hub renda extra, hub data é confiável, hub data confiável, hub data inc, hub paga, hub treinar robos, hub treinar robôs, hub treinar robo, hubdata org, ganhar dinheiro com vídeos, ganhar dinheiro gravando vídeos, ganhar dinheiro fazendo vídeos em casa, ganhar dinheiro assistindo vídeos, como ganhar dinheiro com vídeos, como ganhar dinheiro no tiktok assistindo vídeos, como ganhar dinheiro no kwai assistindo vídeos, como ganhar dinheiro no youtube assistindo vídeos, aplicativo que ganha dinheiro, aplicativo que paga para gravar vídeos, aplicativo que paga por tarefas, app para ganhar dinheiro gravando vídeos, trabalhar em casa pelo celular, trabalho em casa com celular, renda extra em casa, renda extra pelo celular, ganhar dinheiro com o celular, dinheiro extra pelo celular, ganhar dinheiro sem sair de casa, ganhar dinheiro na internet, ganhar dinheiro em casa 2026, plataforma que paga por vídeos, site que paga para gravar vídeos, ganhar dinheiro treinando inteligência artificial, gravar vídeos para inteligência artificial, ganhar dinheiro com IA, receber via PIX gravando vídeos, grave em casa receba via PIX",
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
                Ganhe dinheiro gravando tarefas do dia a dia com o celular. Trabalho em casa de
                verdade: grave em casa, receba via PIX.
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

      {/* ASSISTIR X GRAVAR */}
      <WatchVsRecord />

      {/* CONTEÚDO SEO */}
      <section className="mx-auto w-full max-w-4xl px-4 pb-4 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Hub Data: a plataforma que paga por vídeos gravados em casa
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            A Hub Data é uma plataforma que paga por vídeos usados para{" "}
            <strong>treinar inteligência artificial</strong>. Em vez de prometer que você vai
            enriquecer assistindo anúncios, a proposta é simples e verificável: você grava tarefas
            reais do dia a dia com o celular preso à faixa de cabeça e recebe até R$ 30 por hora
            aprovada, com saque via PIX. É uma forma concreta de conseguir{" "}
            <strong>renda extra</strong> sem sair de casa, ideal para quem já trabalha em{" "}
            <strong>home office</strong> ou procura <strong>trabalho em casa</strong> com horário
            flexível.
          </p>
          <p>
            Quem pesquisa como <strong>ganhar dinheiro na internet</strong> normalmente cai primeiro
            em apps de assistir vídeos — Kwai, TikTok Lite, Swagbucks, InboxDollars — ou em sites que
            prometem o “melhor site para ganhar dinheiro assistindo vídeos”. Eles funcionam, mas
            pagam por visualização, e visualização é barata. Já o vídeo em primeira pessoa que a Hub
            Data compra é escasso: nenhuma outra pessoa gravou exatamente aquela tarefa, naquele
            ambiente, com aquelas mãos. Por isso o hub video de treinamento vale por hora, e não por
            clique.
          </p>
          <p>
            Também é diferente de plataformas de microtarefas como Appen, Clickworker, Toloka e
            Remotasks: lá você anota dados em texto ou transcreve áudio; aqui você grava sua rotina
            e pronto. Sem edição, sem aparecer o rosto, sem publicar em rede social, sem indicar
            amigos. Cadastro grátis, Starter Kit grátis e pagamento direto na sua conta.
          </p>
        </div>

        <h3 className="mt-10 text-xl font-bold text-foreground sm:text-2xl">
          Ganhar dinheiro com vídeos pelo celular: o que funciona em 2026
        </h3>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Se você procura <strong>como ganhar dinheiro no TikTok assistindo vídeos</strong>,{" "}
            <strong>como ganhar dinheiro no Kwai assistindo vídeo</strong> ou{" "}
            <strong>como ganhar dinheiro no YouTube assistindo vídeos</strong>, a conclusão é
            sempre a mesma: são moedas, roletas e metas de saque que rendem poucos reais por
            semana. Já <strong>ganhar dinheiro fazendo vídeos em casa</strong> paga por hora
            gravada — e não por audiência, porque ninguém precisa assistir ao seu vídeo para você
            receber.
          </p>
          <p>
            A Hub Data é um <strong>aplicativo que ganha dinheiro de verdade</strong>: o app Minute
            é um <strong>aplicativo que paga para gravar vídeos</strong> de tarefas comuns, com
            valor por hora aprovada e saque em PIX. É a forma mais simples de{" "}
            <strong>trabalhar em casa pelo celular</strong>, conseguir{" "}
            <strong>dinheiro extra pelo celular</strong> e montar uma{" "}
            <strong>renda extra em casa</strong> sem investir nada, sem CNPJ e sem carga horária
            mínima.
          </p>
          <p>
            Funciona para quem quer <strong>ganhar dinheiro sem sair de casa</strong> nas horas
            livres, para quem já está em home office e para quem só quer{" "}
            <strong>ganhar dinheiro com o celular</strong> gravando o que já faz: cozinhar,
            organizar armários, lavar o carro, cuidar dos pets ou fazer pequenos reparos.
          </p>
        </div>
      </section>


      <FaqSection title="Perguntas frequentes sobre ganhar dinheiro gravando vídeos" />

      <CtaSection />

    </>
  );
}
