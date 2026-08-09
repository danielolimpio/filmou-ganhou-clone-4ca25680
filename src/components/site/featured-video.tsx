import { Link } from "@tanstack/react-router";
import { Video } from "lucide-react";
import defaultVideo from "@/assets/videos/record-tutorial.mp4.asset.json";
import defaultPoster from "@/assets/videos/record-tutorial-poster.jpg.asset.json";
import starterKitIcon from "@/assets/intro-starter-kit.png.asset.json";
import minuteIcon from "@/assets/minute-icon.webp.asset.json";

type FeaturedVideoProps = {
  src?: string;
  poster?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  showSteps?: boolean;
};

const STEPS = [
  {
    n: 1,
    title: "Peça um Starter Kit",
    desc: "Faixa de cabeça e suporte grátis, enviados até você.",
    img: starterKitIcon.url,
    alt: "Robô usando a faixa de cabeça com suporte para celular",
  },
  {
    n: 2,
    title: "Baixe o app Minute",
    desc: "Crie sua conta e vincule com seu código de organização.",
    img: minuteIcon.url,
    alt: "Ícone do app Minute",
  },
  {
    n: 3,
    title: "Grave e ganhe",
    desc: "Filme suas tarefas do dia a dia e receba pelo tempo aprovado.",
    icon: Video,
    alt: "Ícone de câmera de vídeo",
  },
];

/** Vídeo em destaque com moldura premium (anel em gradiente + brilho). */
export function FeaturedVideo({
  src = defaultVideo.url,
  poster = defaultPoster.url,
  eyebrow = "Veja na prática",
  title = "Assim é uma gravação aprovada",
  description = "Celular preso na faixa de cabeça, tarefa real do começo ao fim e enquadramento na altura dos olhos. É simples assim — e cada hora aprovada vale até R$ 30.",
  showSteps = false,
}: FeaturedVideoProps = {}) {
  return (
    <section
      aria-label="Vídeo em destaque"
      className="mx-auto w-full max-w-6xl px-4 pt-10 pb-16 sm:px-6"
    >
      <div className="panel-lg grid items-center gap-8 p-8 sm:p-12 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground">{description}</p>

          {showSteps && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-primary sm:text-[1.65rem]">
                Comece a ganhar R$ 30/hora em 3 passos simples
              </h3>
              <span className="mt-3 block h-1 w-24 rounded-full bg-primary" aria-hidden />

              <ol className="mt-6 space-y-3">
                {STEPS.map((s) => {
                  const inner = (
                    <>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                        {s.n}
                      </span>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl">
                        {s.img ? (
                          <img src={s.img} alt={s.alt} loading="lazy" className="h-11 w-11 object-contain" />
                        ) : (
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                            {s.icon ? <s.icon className="h-6 w-6" /> : null}
                          </span>
                        )}
                      </span>
                      <span>
                        <span className="block text-base font-semibold">{s.title}</span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">{s.desc}</span>
                      </span>
                    </>
                  );
                  const cls =
                    "flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-[0_10px_28px_-20px_rgba(0,0,0,0.5)]";
                  return (
                    <li key={s.n}>
                      {s.n === 2 ? (
                        <Link
                          to="/como-funciona"
                          hash="app-minute"
                          className={`${cls} transition-colors hover:border-primary/40 hover:bg-accent`}
                        >
                          {inner}
                        </Link>
                      ) : (
                        <div className={cls}>{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </div>

        <div className="mx-auto w-full max-w-[300px]">
          <div className="relative rounded-[28px] bg-gradient-to-b from-primary/70 via-primary/20 to-primary/60 p-[2px] shadow-[0_28px_60px_-24px_hsl(var(--primary)/0.55)]">
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-primary/15 blur-3xl" aria-hidden />
            <div className="overflow-hidden rounded-[26px] bg-background p-1.5">
              <video
                className="aspect-[9/16] w-full rounded-[20px] object-cover"
                src={src}
                poster={poster}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Demonstração de como gravar uma tarefa"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
