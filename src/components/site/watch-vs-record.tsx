import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, Eye, Video, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WATCH = [
  "Apps de recompensa (Kwai, TikTok Lite, Swagbucks, InboxDollars) pagam por visualização — centavos por hora de tela",
  "Metas altas de pontos, limites diários e saque travado até bater o mínimo",
  "Ganho depende de indicar amigos e assistir anúncios sem parar",
  "O conteúdo já existe: o valor é dividido entre milhões de pessoas",
];

const RECORD = [
  "Até R$ 30 por hora aprovada, direto no PIX, sem conversão de pontos",
  "Você grava em casa fazendo o que já faria: cozinhar, organizar, cuidar do carro",
  "O dado é escasso: vídeo em primeira pessoa que treina inteligência artificial",
  "Cadastro grátis, Starter Kit grátis e nada de indicar amigos para receber",
];

export function WatchVsRecord() {
  return (
    <section id="assistir-x-gravar" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <p className="eyebrow">Comparativo honesto</p>
      <h2 className="mt-2 max-w-3xl text-2xl font-bold sm:text-3xl">
        Ganhar dinheiro assistindo vídeos rende pouco. Ganhar dinheiro gravando vídeos muda o jogo.
      </h2>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Todo dia milhares de brasileiros procuram “ganhar dinheiro assistindo vídeos no YouTube” ou
        “o melhor site para ganhar dinheiro assistindo vídeos”. A conta raramente fecha: assistir
        vídeos e ganhar dinheiro paga por visualização, e visualização é abundante. Gravar é o
        contrário — a Hub Data precisa de vídeos que ainda não existem, feitos por pessoas reais em
        casa, e por isso paga por hora, não por clique.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-destructive/25 bg-destructive/5 p-6">
          <h3 className="flex items-center gap-2 text-base font-semibold text-destructive">
            <Eye className="h-4 w-4" />
            Assistir vídeos e ganhar dinheiro
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">Modelo de recompensa por visualização</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {WATCH.map((w) => (
              <li key={w} className="flex gap-2">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                {w}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-primary/30 bg-primary-soft p-6">
          <h3 className="flex items-center gap-2 text-base font-semibold text-primary">
            <Video className="h-4 w-4" />
            Gravar vídeos e ganhar dinheiro na Hub Data
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">Plataforma que paga por vídeos para treinar IA</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {RECORD.map((r) => (
              <li key={r} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {r}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="panel mt-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-sm text-muted-foreground sm:max-w-2xl">
          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>
            Uma hora assistindo vídeos em app de recompensa costuma render alguns centavos. A mesma
            hora gravando tarefas do dia a dia com o celular pode valer até <strong>R$ 30</strong> —
            é a diferença entre passar o tempo e transformar sua rotina em renda extra.
          </span>
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-full px-6">
            <a href="https://ai.hub.xyz/r/VNE8A8D7" target="_blank" rel="noopener noreferrer">
              Começar a gravar
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link to="/como-funciona">Como funciona</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
