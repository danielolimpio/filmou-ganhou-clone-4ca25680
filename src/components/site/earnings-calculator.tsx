import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const RATE = 25;

export function EarningsCalculator() {
  const [hours, setHours] = useState(3);
  const perDay = hours * RATE;
  const perMonth = perDay * 30;

  return (
    <section id="calculadora" className="mx-auto w-full max-w-3xl scroll-mt-24 px-4 py-16 sm:px-6">
      <p className="eyebrow">Estimativa</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Quanto você pode ganhar?</h2>
      <p className="mt-3 text-muted-foreground">
        Você ganha por cada hora que grava. Arraste para ver sua estimativa mensal.
      </p>

      <div className="panel mt-8 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="horas" className="text-sm font-medium">
            Horas que você grava por dia
          </label>
          <span className="text-lg font-bold text-primary">{hours}</span>
        </div>
        <Slider
          id="horas"
          className="mt-4"
          min={1}
          max={8}
          step={1}
          value={[hours]}
          onValueChange={(v) => setHours(v[0])}
          aria-label="Horas gravadas por dia"
        />
        <p className="mt-3 text-sm text-muted-foreground">
          R$ {perDay} por dia
        </p>

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
