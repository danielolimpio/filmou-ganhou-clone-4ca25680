import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/ByJ6Jzgb3ruGSmBSG7DHf8";

interface AuthCtaProps {
  /** Texto acima do botão principal */
  note: string;
  label: string;
  href: string;
}

export function AuthCta({ note, label, href }: AuthCtaProps) {
  return (
    <div className="panel relative overflow-hidden p-6 sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative">
        <p className="mb-4 flex items-start gap-2 rounded-2xl border border-primary/25 bg-primary-soft/60 p-4 text-sm font-medium text-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
          {note}
        </p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-5 text-lg font-bold text-primary-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02] sm:text-xl"
        >
          {label}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
        </a>

        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex w-full items-center justify-center gap-3 rounded-full border-2 border-primary/40 bg-surface px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-primary-soft sm:text-lg"
        >
          <MessageCircle className="h-5 w-5 text-primary" aria-hidden />
          Entrar no grupo de suporte no WhatsApp
        </a>

        <p className="mt-3 text-center text-xs text-muted-foreground">
          Grupo oficial de suporte da Hub Data — tire dúvidas sobre cadastro, gravações e pagamentos por PIX.
        </p>
      </div>
    </div>
  );
}
