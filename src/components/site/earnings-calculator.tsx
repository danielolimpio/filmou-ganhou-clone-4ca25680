import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const RATE = 30;
const MIN_HOURS = 1;
const MAX_HOURS = 8;

const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function EarningsCalculator() {
  const [hours, setHours] = useState(3);
  const perDay = hours * RATE;
  const perWeek = perDay * 7;
  const perMonth = perDay * 30;

  return (
    <section id="calculadora" className="mx-auto w-full max-w-3xl scroll-mt-24 px-4 py-16 sm:px-6">
      <p className="eyebrow">Estimativa</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Quanto você pode ganhar?</h2>
      <p className="mt-3 text-muted-foreground">
        Você ganha até {brl(RATE)} por cada hora gravada e aprovada. Arraste para ver sua estimativa
        mensal.
      </p>

      <div className="panel mt-8 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="horas" className="text-sm font-medium">
            Horas que você grava por dia
          </label>
          <span className="text-lg font-bold text-primary">{hours} hs</span>
        </div>
        <Slider
          id="horas"
          className="mt-4"
          min={MIN_HOURS}
          max={MAX_HOURS}
          step={1}
          value={[hours]}
          onValueChange={(v) => setHours(v[0])}
          aria-label="Horas gravadas por dia"
        />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>{MIN_HOURS} hs</span>
          <span>{MAX_HOURS} hs</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Por dia</p>
            <p className="mt-1 text-xl font-bold">{brl(perDay)}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Por semana</p>
            <p className="mt-1 text-xl font-bold">{brl(perWeek)}</p>
          </div>
        </div>


        <hr className="my-7 border-border" />

        <p className="eyebrow">Estimativa total</p>
        <p className="mt-2 flex items-end gap-2">
          <span className="text-5xl font-bold text-primary sm:text-6xl">
            R$ {perMonth.toLocaleString("pt-BR")}
          </span>
          <span className="pb-2 text-lg text-muted-foreground">/ mês</span>
        </p>
        <p className="mt-4 max-w-lg text-sm text-muted-foreground">
          Estimativa baseada em gravar todos os dias do mês. Os ganhos reais dependem das suas horas
          aprovadas.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-full px-6 shadow-[var(--shadow-cta)]">
          <Link to="/cadastro">
            Criar minha conta
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
