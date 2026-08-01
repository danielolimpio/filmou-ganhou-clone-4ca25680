import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Package, Truck } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/sections";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/starter-kit")({
  head: () => ({
    meta: [
      { title: "Starter Kit grátis para gravar | Hub Data" },
      {
        name: "description",
        content:
          "Peça o Starter Kit gratuito da Hub: faixa de cabeça com suporte para celular, guia de gravação e etiqueta. Envio sem custo para todo o Brasil.",
      },
      { property: "og:title", content: "Starter Kit grátis — Hub Data" },
      {
        property: "og:description",
        content: "Tudo o que você precisa para começar a gravar, enviado sem custo.",
      },
      { property: "og:url", content: "https://hubdata.org/starter-kit" },
    ],
    links: [{ rel: "canonical", href: "https://hubdata.org/starter-kit" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Starter Kit", path: "/starter-kit" }])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Starter Kit Hub",
          description:
            "Faixa de cabeça com suporte para celular, guia de gravação e etiqueta de identificação.",
          brand: { "@type": "Brand", name: "Hub Data" },
          offers: { "@type": "Offer", price: "0", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
        }),
      },
    ],
  }),
  component: StarterKit,
});

const ITEMS = [
  "Faixa de cabeça ajustável com suporte para celular",
  "Guia rápido de gravação passo a passo",
  "Etiqueta de identificação do colaborador",
  "Adesivos e cabo organizador",
];

function StarterKit() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Starter Kit", to: "/starter-kit" }]} />
      <p className="eyebrow">Starter Kit</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Seu kit chega grátis em casa</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Depois do cadastro, enviamos o Starter Kit sem nenhum custo. Você não paga frete, taxa de
        adesão nem depósito — a Hub nunca cobra nada.
      </p>

      <div className="panel mt-8 p-8">
        <h2 className="text-lg font-bold">O que vem no kit</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {ITEMS.map((i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="mt-7 rounded-full px-6 shadow-[var(--shadow-cta)]">
          <Link to="/cadastro">
            Pedir meu Starter Kit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <article className="panel flex gap-4 p-6">
          <Package className="h-5 w-5 shrink-0 text-primary" />
          <div>
            <h3 className="text-sm font-semibold">Envio automático</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              O kit é despachado assim que sua conta é aprovada.
            </p>
          </div>
        </article>
        <article className="panel flex gap-4 p-6">
          <Truck className="h-5 w-5 shrink-0 text-primary" />
          <div>
            <h3 className="text-sm font-semibold">Rastreio pelo app</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Acompanhe a entrega direto no app Minute.
            </p>
          </div>
        </article>
      </div>

      <div className="mt-16">
        <CtaSection />
      </div>
    </div>
  );
}
