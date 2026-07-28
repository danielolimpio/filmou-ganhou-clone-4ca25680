import { MapPin, Play } from "lucide-react";
import { VIDEO_SLIDES } from "@/lib/site-data";

/**
 * Carrossel de vídeos — estrutura pronta.
 * Assim que os arquivos de vídeo forem enviados, preencha `src`/`poster`
 * em VIDEO_SLIDES (src/lib/site-data.ts) e a mídia aparece automaticamente.
 */
export function VideoCarousel() {
  return (
    <section aria-label="Gravações da comunidade" className="w-full overflow-hidden py-10">
      <div
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="list"
      >
        {VIDEO_SLIDES.map((slide) => (
          <figure
            key={slide.city + slide.task}
            role="listitem"
            className="w-[150px] shrink-0 snap-start sm:w-[172px]"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-muted shadow-[var(--shadow-card)]">
              {slide.src ? (
                <video
                  className="h-full w-full scale-[1.02] object-cover"
                  src={slide.src}
                  poster={slide.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${slide.task} — ${slide.city}`}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-secondary">
                  <Play className="h-6 w-6 text-muted-foreground" aria-hidden />
                  <span className="sr-only">Vídeo em breve: {slide.task}</span>
                </div>
              )}
            </div>

            <figcaption className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <MapPin className="h-3 w-3 shrink-0" aria-hidden />
              <span className="truncate">
                {slide.city} · {slide.task}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
