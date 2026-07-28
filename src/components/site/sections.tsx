import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_ITEMS } from "@/lib/site-data";

export function FaqSection({ title = "Perguntas frequentes" }: { title?: string }) {
  return (
    <section id="perguntas" className="mx-auto w-full max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">{title}</h2>
      <Accordion type="multiple" className="mt-8 space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem
            key={item.question}
            value={`faq-${i}`}
            className="panel border-none px-5 data-[state=open]:shadow-[var(--shadow-panel)]"
          >
            <AccordionTrigger className="py-5 text-left text-[0.95rem] font-semibold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
              <p>{item.answer}</p>
              {item.bullets && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {item.note && <p className="mt-3">{item.note}</p>}
              {item.cta && (
                <Link
                  to={item.cta.to}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-4"
                >
                  {item.cta.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-4 sm:px-6">
      <div className="rounded-3xl bg-primary px-6 py-12 text-center shadow-[var(--shadow-cta)]">
        <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
          Pronto para começar a ganhar R$ 30/hora?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85">
          Cadastro grátis. Starter Kit sem custo. Saque por PIX quando quiser.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="secondary" className="rounded-full px-6">
            <a href="https://ai.hub.xyz/r/VNE8A8D7" target="_blank" rel="noopener noreferrer">Cadastre-se</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/40 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/como-funciona">Como funciona</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
