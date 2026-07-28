import video from "@/assets/videos/record-tutorial.mp4.asset.json";
import poster from "@/assets/videos/record-tutorial-poster.jpg.asset.json";

/** Vídeo em destaque com moldura premium (anel em gradiente + brilho). */
export function FeaturedVideo() {
  return (
    <section
      aria-label="Vídeo em destaque"
      className="mx-auto w-full max-w-6xl px-4 pt-10 pb-12 sm:px-6"
    >
      <div className="panel-lg grid items-center gap-8 p-8 sm:p-12 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
            Veja na prática
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Assim é uma gravação aprovada
          </h2>
          <p className="mt-4 text-muted-foreground">
            Celular preso na faixa de cabeça, tarefa real do começo ao fim e enquadramento na altura
            dos olhos. É simples assim — e cada hora aprovada vale até R$ 30.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[300px]">
          <div className="relative rounded-[28px] bg-gradient-to-b from-primary/70 via-primary/20 to-primary/60 p-[2px] shadow-[0_28px_60px_-24px_hsl(var(--primary)/0.55)]">
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-primary/15 blur-3xl" aria-hidden />
            <div className="overflow-hidden rounded-[26px] bg-background p-1.5">
              <video
                className="aspect-[9/16] w-full rounded-[20px] object-cover"
                src={video.url}
                poster={poster.url}
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
