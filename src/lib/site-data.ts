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

export interface TaskCategory {
  slug: string;
  name: string;
  desc: string;
  icon: string;
  tasks: string[];
}

export const TASK_CATEGORIES: TaskCategory[] = [
  {
    slug: "automotivo",
    name: "Automotivo",
    desc: "Pneus, óleo, calibragem e cuidados com o carro",
    icon: "Car",
    tasks: [
      "Trocar um pneu (com macaco)",
      "Verificar e completar o óleo do motor (motor frio)",
      "Verificar a pressão dos pneus e calibrar",
      "Trocar as palhetas do limpador",
      "Completar a água do limpador de para-brisa",
      "Limpar faróis e lanternas",
      "Conferir e trocar lâmpadas do carro",
      "Organizar o porta-malas",
    ],
  },
  {
    slug: "manutencao-da-casa",
    name: "Manutenção e projetos da casa",
    desc: "Pequenos reparos, montagem e instalações",
    icon: "Wrench",
    tasks: [
      "Montar / desmontar móveis",
      "Montar decoração de festas",
      "Trocar o chuveiro / arejador da torneira (água fechada)",
      "Trocar lâmpadas e pilhas",
      "Furar uma peça de verdade",
      "Pendurar quadros e espelhos",
      "Pendurar cortinas no varão (argolas/ganchos)",
      "Rebocar e pintar paredes",
      "Limpar calhas",
      "Apertar ferragens de armários e portas",
    ],
  },
  {
    slug: "mudanca",
    name: "Mudança e logística",
    desc: "Empacotar, carregar e desempacotar",
    icon: "Boxes",
    tasks: [
      "Tirar o lixo",
      "Carregar o carro para uma viagem",
      "Empacotar um cômodo para a mudança",
      "Desempacotar e montar um cômodo",
      "Montar e etiquetar caixas de papelão",
      "Proteger móveis com plástico bolha",
      "Organizar itens no depósito / sótão",
      "Descartar recicláveis e volumosos",
    ],
  },
  {
    slug: "area-externa",
    name: "Área externa e quintal",
    desc: "Jardinagem, limpeza externa e manutenção do quintal",
    icon: "Sprout",
    tasks: [
      "Limpar o interior do carro",
      "Manutenção completa do quintal",
      "Juntar e ensacar folhas",
      "Limpar a piscina (peneirar a superfície)",
      "Varrer a varanda / o quintal / o deck",
      "Jardinagem",
      "Lavar e detalhar o carro",
      "Lavar o quintal / a garagem com jato de pressão",
      "Arrancar mato à mão / com garfo",
      "Espalhar cobertura / jogar material com pá",
      "Aparar cerca viva / podar arbustos (tesoura manual)",
      "Empilhar lenha",
    ],
  },
  {
    slug: "eventos",
    name: "Eventos e recepções",
    desc: "Preparar, montar e limpar depois da festa",
    icon: "PartyPopper",
    tasks: [
      "Preparar uma festa",
      "Arrumar os móveis da varanda / do quintal",
      "Montar o bar / a estação de bebidas",
      "Limpeza pós-festa",
      "Montar e decorar a mesa dos convidados",
      "Inflar e prender balões",
      "Servir e repor petiscos",
      "Separar e guardar louças e utensílios do evento",
    ],
  },
  {
    slug: "pets",
    name: "Pets e cuidados pessoais",
    desc: "Rotina de higiene, passeio e alimentação",
    icon: "PawPrint",
    tasks: [
      "Limpar a caixa de areia (areia limpa)",
      "Banho e tosa",
      "Rotina de cuidados com o pet",
      "Passear com o cachorro",
      "Alimentar e trocar a água",
      "Escovar os pelos e cortar as unhas",
      "Lavar caminha e brinquedos do pet",
      "Preparar a mochila / caixa de transporte",
    ],
  },
  {
    slug: "home-office",
    name: "Home office e burocracia",
    desc: "Mesa, cabos, documentos e correspondência",
    icon: "Briefcase",
    tasks: [
      "Organizar a mesa e os cabos",
      "Separar correspondências e encomendas",
      "Arquivar documentos em pastas",
      "Digitalizar contas e recibos",
      "Montar e ajustar a cadeira / suporte de monitor",
      "Limpar teclado, tela e periféricos",
      "Repor material de escritório",
      "Triturar papéis antigos",
    ],
  },
  {
    slug: "saude-seguranca",
    name: "Saúde, segurança e sistemas da casa",
    desc: "Plantas, primeiros socorros e checagens de segurança",
    icon: "HeartPulse",
    tasks: [
      "Regar as plantas",
      "Repor o kit de primeiros socorros e os remédios",
      "Testar o detector de fumaça e trocar a pilha",
      "Trocar o filtro do ar-condicionado / purificador",
      "Conferir e trocar o filtro de água",
      "Checar o extintor de incêndio",
      "Organizar a caixa de remédios por validade",
      "Conferir trancas, janelas e portões",
    ],
  },
  {
    slug: "organizacao",
    name: "Organização e separação",
    desc: "Separar, classificar e organizar itens",
    icon: "LayoutGrid",
    tasks: [
      "Separar a reciclagem nas lixeiras",
      "Organizar livros por tamanho / cor",
      "Separar parafusos em uma bandeja",
      "Organizar a despensa por categoria",
      "Separar roupas e itens para doação",
      "Organizar cabos e carregadores",
      "Etiquetar potes e caixas organizadoras",
      "Organizar a caixa de ferramentas",
    ],
  },
  {
    slug: "cozinha",
    name: "Cozinha e preparo",
    desc: "Cozinhar, lavar louça e organizar a cozinha",
    icon: "CookingPot",
    tasks: [
      "Montar um sanduíche / salada / empratar",
      "Preparar alimentos: lavar/descascar/cortar",
      "Conferir a geladeira e a despensa",
      "Passar café / arrumar a estação de bebidas",
      "Pôr a mesa",
      "Esvaziar a lava-louças e guardar a louça",
      "Lavar louça na pia",
      "Recolher a louça até a pia",
      "Carregar a lava-louças",
      "Assar: sovar/abrir/cortar massa",
      "Limpeza profunda dos eletrodomésticos",
      "Limpeza profunda da cozinha",
    ],
  },
  {
    slug: "limpeza",
    name: "Arrumação e limpeza",
    desc: "Cômodos, banheiro, pó e aspirar",
    icon: "SprayCan",
    tasks: [
      "Recolher e organizar brinquedos",
      "Arrumar um cômodo",
      "Organizar uma gaveta bagunçada",
      "Organizar a garagem",
      "Limpar o banheiro",
      "Tirar o pó e passar pano nas superfícies",
      "Guardar as compras",
      "Varrer / aspirar",
      "Limpar as janelas",
    ],
  },
  {
    slug: "lavanderia",
    name: "Lavanderia e roupas",
    desc: "Lavar, dobrar, passar e guardar roupas",
    icon: "Shirt",
    tasks: [
      "Arrumar uma mala",
      "Recolher as roupas no cesto",
      "Dobrar as roupas e guardá-las",
      "Pendurar roupas em cabides",
      "Passar e vaporizar",
      "Tirar manchas e lavar à mão",
      "Reorganizar o guarda-roupa",
      "Colocar a roupa na máquina",
      "Tirar a roupa da máquina para o cesto",
      "Colocar o edredom na capa / trocar lençóis / arrumar a cama",
    ],
  },
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

