import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Hub" },
      {
        name: "description",
        content:
          "Como a Hub coleta, usa e protege seus dados pessoais e as gravações enviadas pelo app Minute, em conformidade com a LGPD.",
      },
      { property: "og:title", content: "Política de Privacidade — Hub" },
      { property: "og:description", content: "Tratamento de dados e gravações conforme a LGPD." },
      { property: "og:url", content: "https://hubdata.org/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "https://hubdata.org/politica-de-privacidade" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Política de Privacidade", path: "/politica-de-privacidade" },
          ]),
        ),
      },
    ],
  }),
  component: Privacidade,
});

const SECTIONS = [
  {
    h: "1. Dados que coletamos",
    p: "Coletamos dados de cadastro (nome, e-mail, telefone, cidade), dados de pagamento necessários para o PIX ou transferência bancária e as gravações enviadas por você pelo app Minute.",
  },
  {
    h: "2. Como usamos os dados",
    p: "As gravações são usadas para treinar modelos de inteligência artificial e robótica. Os dados de cadastro são usados para identificação, envio do Starter Kit, suporte e pagamento das horas aprovadas.",
  },
  {
    h: "3. Compartilhamento",
    p: "Não vendemos seus dados. Compartilhamos informações apenas com prestadores de serviço essenciais (logística, pagamentos e infraestrutura) e quando exigido por lei.",
  },
  {
    h: "4. Privacidade de terceiros",
    p: "Não grave rostos de terceiros sem consentimento nem locais públicos restritos. Vídeos que violem essa regra são rejeitados e excluídos.",
  },
  {
    h: "5. Seus direitos (LGPD)",
    p: "Você pode acessar, corrigir, portar ou excluir seus dados e remover gravações a qualquer momento pelo app ou pelo canal de contato.",
  },
  {
    h: "6. Segurança e retenção",
    p: "Os dados são armazenados de forma criptografada e mantidos apenas pelo tempo necessário às finalidades descritas ou às obrigações legais.",
  },
];

function Privacidade() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pt-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Política de Privacidade", to: "/politica-de-privacidade" }]} />
      <h1 className="text-4xl font-bold">Política de Privacidade</h1>
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
