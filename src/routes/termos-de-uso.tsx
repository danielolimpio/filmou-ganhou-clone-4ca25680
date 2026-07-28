import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Hub" },
      {
        name: "description",
        content:
          "Regras de participação na Hub: elegibilidade, envio de gravações, critérios de aprovação, pagamento por hora e uso do Starter Kit.",
      },
      { property: "og:title", content: "Termos de Uso — Hub" },
      { property: "og:description", content: "Regras de participação, aprovação e pagamento." },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([{ name: "Termos de Uso", path: "/termos-de-uso" }]),
        ),
      },
    ],
  }),
  component: Termos,
});

const SECTIONS = [
  {
    h: "1. Elegibilidade",
    p: "É necessário ter 18 anos ou mais, residir no Brasil e possuir um celular compatível com o app Minute.",
  },
  {
    h: "2. Participação gratuita",
    p: "A participação é 100% gratuita. A Hub nunca cobra taxa de adesão, frete ou depósito. Qualquer cobrança em nome da Hub deve ser reportada.",
  },
  {
    h: "3. Envio de gravações",
    p: "Você declara ser o autor das gravações e ter autorização das pessoas e locais filmados. Materiais duplicados, editados ou gerados artificialmente são rejeitados.",
  },
  {
    h: "4. Aprovação e pagamento",
    p: "Cada gravação é revisada em até 48 horas. Horas aprovadas são creditadas ao valor de R$ 25/h, podendo chegar a R$ 30/h em tarefas turbinadas. Material rejeitado não é pago.",
  },
  {
    h: "5. Saques",
    p: "Os saques são feitos por PIX ou transferência bancária para conta de titularidade do próprio colaborador.",
  },
  {
    h: "6. Starter Kit",
    p: "O Starter Kit é cedido gratuitamente para uso nas gravações e permanece de responsabilidade do colaborador.",
  },
  {
    h: "7. Encerramento",
    p: "Contas que violem estes termos, enviem material fraudulento ou desrespeitem a privacidade de terceiros podem ser suspensas.",
  },
];

function Termos() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pt-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Termos de Uso", to: "/termos-de-uso" }]} />
      <h1 className="text-4xl font-bold">Termos de Uso</h1>
      <div className="panel mt-8 space-y-7 p-8">
        {SECTIONS.map((s) => (
          <section key={s.h}>
            <h2 className="text-sm font-semibold">{s.h}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
