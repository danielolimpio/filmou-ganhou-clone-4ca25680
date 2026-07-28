export interface FaqItem {
  question: string;
  answer: string;
  bullets?: string[];
  cta?: { label: string; to: string };
  note?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como funciona?",
    answer:
      "Prenda o celular na faixa de cabeça gratuita, abra o app Minute e grave tarefas reais do dia a dia do seu ponto de vista. Você pode ganhar até R$ 30 por cada hora aprovada. O cadastro é grátis.",
    cta: { label: "Cadastre-se grátis", to: "/cadastro" },
  },
  {
    question: "Que tipos de tarefas devo gravar para receber?",
    answer:
      "Grave tarefas reais do dia a dia do começo ao fim. Quase tudo o que as pessoas gravam entra nestas categorias:",
    bullets: [
      "Manutenção da casa: pequenos reparos, montar móveis, pendurar coisas",
      "Área externa e quintal: varrer, tirar mato, regar as plantas",
      "Arrumação e limpeza: um cômodo, o banheiro, aspirar, tirar o pó",
      "Pets e cuidados pessoais: alimentar, escovar, passear com o cachorro somente em propriedade privada",
      "Cuidados com o carro: lavar, limpar por dentro, conferir os pneus",
      "Organização: prateleiras, gavetas, reciclagem, separar a correspondência",
    ],
    note: "As Tarefas turbinadas pagam mais: até R$ 30 por hora aprovada.",
    cta: { label: "Comece a gravar e ganhar", to: "/cadastro" },
  },
  {
    question: "É grátis participar?",
    answer:
      "Sim, participar é 100% grátis. Você nunca paga nada e o Starter Kit é enviado até você sem custo.",
    cta: { label: "Cadastre-se grátis", to: "/cadastro" },
  },
  {
    question: "Por que a Hub paga pelas gravações?",
    answer:
      "Os robôs aprendem vendo pessoas reais fazendo tarefas reais. A Hub é uma empresa de IA com sede em São Francisco e um escritório em São Paulo, e pagamos os colaboradores pelo material do mundo real que torna esse treinamento possível.",
  },
  {
    question: "Quando eu recebo?",
    answer:
      "Cada gravação é revisada (até 48 horas). Após a aprovação, suas horas são creditadas e você pode sacar pelo app.",
  },
  {
    question: "E se meu vídeo for rejeitado?",
    answer: "O material rejeitado não é pago, mas o app explica o motivo. Corrija e grave novamente.",
  },
  {
    question: "Quais celulares funcionam?",
    answer:
      "Modelos compatíveis: linha iPhone 12 a 17 (exceto 16e / 17e), Pixel 6 a 9 e Galaxy S21 a S26 (exceto modelos FE). Você também pode verificar seu aparelho no app.",
  },
  {
    question: "Preciso de experiência?",
    answer: "Não. Se você sabe usar o celular e fazer as tarefas de casa, você consegue.",
  },
];

export function faqSchema(items: FaqItem[] = FAQ_ITEMS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: [item.answer, ...(item.bullets ?? []), item.note].filter(Boolean).join(" "),
      },
    })),
  };
}

export const TASK_CATEGORIES = [
  { slug: "manutencao-da-casa", name: "Manutenção da casa", desc: "Pequenos reparos, montar móveis, pendurar coisas" },
  { slug: "area-externa", name: "Área externa e quintal", desc: "Varrer, tirar mato, regar as plantas" },
  { slug: "limpeza", name: "Arrumação e limpeza", desc: "Um cômodo, o banheiro, aspirar, tirar o pó" },
  { slug: "pets", name: "Pets e cuidados", desc: "Alimentar, escovar, passear em propriedade privada" },
  { slug: "carro", name: "Cuidados com o carro", desc: "Lavar, limpar por dentro, conferir os pneus" },
  { slug: "organizacao", name: "Organização", desc: "Prateleiras, gavetas, reciclagem, correspondência" },
];

/** Carrossel de vídeos da home. */
import clip3 from "@/assets/videos/clip-3.mp4.asset.json";
import clip8 from "@/assets/videos/clip-8.mp4.asset.json";
import clip11 from "@/assets/videos/clip-11.mp4.asset.json";
import clip18 from "@/assets/videos/clip-18.mp4.asset.json";
import clip19 from "@/assets/videos/clip-19.mp4.asset.json";
import clip20 from "@/assets/videos/clip-20.mp4.asset.json";
import clip21 from "@/assets/videos/clip-21.mp4.asset.json";

export interface VideoSlide {
  city: string;
  task: string;
  src?: string;
  poster?: string;
}

export const VIDEO_SLIDES: VideoSlide[] = [
  { city: "Manaus, BR", task: "Reposição e organização de prateleiras", src: clip3.url },
  { city: "Salvador, BR", task: "Reparar e pintar paredes", src: clip8.url },
  { city: "Brasília, BR", task: "Passear com o cachorro", src: clip11.url },
  { city: "Campinas, BR", task: "Serviços de beleza / Cuidados pessoais", src: clip18.url },
  { city: "Santos, BR", task: "Coleta e checagem de ovos", src: clip19.url },
  { city: "Porto Alegre, BR", task: "Dobrar e organizar roupas", src: clip20.url },
  { city: "Recife, BR", task: "Montagem de móveis", src: clip21.url },
];

