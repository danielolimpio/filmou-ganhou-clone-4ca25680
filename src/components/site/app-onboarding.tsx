import { useState } from "react";
import { Check, Copy, ListChecks, PlayCircle, ShieldCheck, Wallet } from "lucide-react";
import { toast } from "sonner";
import pickTask from "@/assets/app-pick-a-task.webp.asset.json";
import whatToCapture from "@/assets/app-review-what-to-capture.webp.asset.json";
import pressRecord from "@/assets/app-press-record.webp.asset.json";
import getPaid from "@/assets/app-upload-and-get-paid.jpg.asset.json";

export const ORG_CODE = "VNE8A8D7";

export function OrgCodeCard() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ORG_CODE);
      setCopied(true);
      toast.success("Código copiado!", { description: ORG_CODE });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Não foi possível copiar. Anote o código: " + ORG_CODE);
    }
  };

  return (
    <div className="mt-5 max-w-xl space-y-4">
      <div className="rounded-2xl border border-primary/30 bg-primary-soft p-5">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          Código org
        </p>
        <p className="mt-2 font-mono text-3xl font-bold tracking-[0.15em] text-primary">
          {ORG_CODE}
        </p>
        <button
          type="button"
          onClick={copy}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-background px-4 py-2 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-accent"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Seu e-mail Hub
        </p>
        <p className="mt-2 font-mono text-lg italic text-muted-foreground">
          o e-mail que você usou no cadastro
        </p>
      </div>
    </div>
  );
}

const SCREENS = [
  {
    n: 1,
    src: pickTask.url,
    caption: "Escolha uma tarefa",
    icon: ListChecks,
    alt: "Tela do app Minute com a lista de tarefas disponíveis",
  },
  {
    n: 2,
    src: whatToCapture.url,
    caption: "Veja o que capturar",
    icon: ShieldCheck,
    alt: "Tela do app Minute com as regras do que pode e não pode ser gravado",
  },
  {
    n: 3,
    src: pressRecord.url,
    caption: "Toque em play e grave",
    icon: PlayCircle,
    alt: "Tela do app Minute pedindo para virar o celular na horizontal antes de gravar",
  },
  {
    n: 4,
    src: getPaid.url,
    caption: "Envie e receba",
    icon: Wallet,
    alt: "Comprovante de Pix recebido no valor de R$ 1.510,65",
  },
];

export function AppScreens() {
  return (
    <div className="mt-6 grid gap-8 sm:grid-cols-2">
      {SCREENS.map((s) => (
        <figure key={s.n} className="flex flex-col items-center">
          <div className="relative">
            <span className="absolute -left-2 -top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-md">
              {s.n}
            </span>
            <div className="overflow-hidden rounded-[28px] border-[6px] border-card bg-card shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)]">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="block h-auto w-[190px] object-cover"
              />
            </div>
          </div>
          <figcaption className="mt-3 flex items-center gap-2 text-sm font-semibold">
            <s.icon className="h-4 w-4 text-primary" />
            {s.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
