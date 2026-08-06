export interface FaqItem {
  question: string;
  answer: string;
  bullets?: string[];
  cta?: { label: string; to: string };
  note?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como funciona a Hub Data para ganhar dinheiro gravando vídeos?",
    answer:
      "Prenda o celular na faixa de cabeça gratuita, abra o app Minute e grave tarefas reais do dia a dia do seu ponto de vista. Cada hora aprovada vale até R$ 30, paga via PIX. É trabalho em casa de verdade: você grava em casa, recebe via PIX e não precisa de experiência nem de sair na rua.",
    cta: { label: "Cadastre-se grátis", to: "/cadastro" },
  },
  {
    question: "Ganhar dinheiro assistindo vídeos vale a pena ou é melhor gravar vídeos?",
    answer:
      "Ganhar dinheiro assistindo vídeos é o modelo menos rentável da internet. Apps de recompensa como Kwai, TikTok Lite, Swagbucks, InboxDollars e os sites que prometem 'ganhar dinheiro assistindo vídeos no YouTube' pagam por visualização, e a conta quase nunca fecha: são centavos por hora de tela, com metas altas de saque e limites diários. Gravar vídeos é o oposto: o dado que você produz é escasso e treina inteligência artificial, por isso vale até R$ 30 por hora aprovada.",
    bullets: [
      "Assistir vídeos: você consome conteúdo que já existe — o valor por hora é fracionado entre milhões de usuários",
      "Gravar vídeos: você cria um dado original de ponto de vista que nenhuma outra pessoa tem",
      "Assistir: saque travado por metas altas e conversão de pontos",
      "Gravar na Hub Data: saque por PIX sem pegadinha, sem taxa e sem indicar ninguém",
    ],
    note: "Se você chegou procurando o melhor site para ganhar dinheiro assistindo vídeos, a resposta honesta é: troque a hora assistida pela hora gravada.",
    cta: { label: "Quero gravar e ganhar mais", to: "/como-funciona" },
  },
  {
    question: "Como ganhar dinheiro treinando inteligência artificial em casa?",
    answer:
      "Modelos de IA e robôs humanoides aprendem vendo pessoas reais executando tarefas reais. Plataformas como Appen, Clickworker, Toloka e Remotasks pagam por rotulagem de dados em texto; a Hub Data paga por vídeo em primeira pessoa, que é o dado mais raro e mais caro do mercado hoje. Você grava tarefas do dia a dia com o celular e é remunerado por hora aprovada.",
    cta: { label: "Entenda por que pagamos", to: "/sobre" },
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
    note: "Cada hora aprovada vale até R$ 30 — a mesma tarefa que você já faria de graça vira renda extra.",
    cta: { label: "Comece a gravar e ganhar", to: "/cadastro" },
  },
  {
    question: "Dá para ter renda extra em casa sem sair do home office?",
    answer:
      "Sim. A Hub Data foi feita para quem quer renda extra em casa com horário livre: você grava enquanto faz o que já faria — cozinhar, organizar, limpar, cuidar do carro — e envia pelo app. Não existe meta de horas, escala nem chefe. É trabalho em casa 100% flexível, compatível com quem já está em home office ou procura uma renda extra no fim de semana.",
  },
  {
    question: "Quanto dá para ganhar por mês gravando tarefas do dia a dia?",
    answer:
      "Depende de quantas horas você grava. A R$ 30 por hora aprovada: 1 hora por dia ≈ R$ 900/mês, 2 horas por dia ≈ R$ 1.800/mês e 4 horas por dia ≈ R$ 3.600/mês. Use o simulador de ganhos da página inicial para ver o seu cenário.",
    cta: { label: "Simular meus ganhos", to: "/" },
  },
  {
    question: "Quais são as melhores plataformas que pagam por vídeos no Brasil?",
    answer:
      "Existem três famílias: apps que pagam por assistir (Kwai, TikTok Lite, Swagbucks), bancos de vídeo que pagam por licenciamento (Shutterstock, Pond5, Getty) e plataformas de dados para IA (Appen, Clickworker, Toloka, Sapien e a Hub Data). Os apps de assistir pagam centavos; os bancos de vídeo exigem produção profissional e venda; a Hub Data paga por hora gravada de tarefa comum, sem edição e sem precisar vender nada.",
  },
  {
    question: "Como ganhar dinheiro na internet sem investir nada?",
    answer:
      "Cuidado com qualquer site que peça depósito, taxa de ativação ou compra de pacote para liberar ganhos. Na Hub Data o cadastro é grátis, o Starter Kit é grátis, o frete é grátis e você nunca paga nada — o dinheiro sempre corre no sentido plataforma → colaborador.",
    cta: { label: "Criar conta grátis", to: "/cadastro" },
  },
  {
    question: "Preciso aparecer no vídeo ou mostrar o rosto?",
    answer:
      "Não. A gravação é em primeira pessoa, com o celular preso na faixa de cabeça: aparecem suas mãos e a tarefa, não o seu rosto. Também não é preciso falar, editar nem publicar nada em rede social.",
  },
  {
    question: "Como funciona o pagamento via PIX?",
    answer:
      "Suas horas aprovadas viram saldo no app. O saque cai por PIX ou transferência bancária, sempre em conta do próprio colaborador. Não há valor mínimo abusivo, conversão de pontos nem cupom — é dinheiro direto na sua conta.",
  },
  {
    question: "É grátis participar?",
    answer:
      "Sim, participar é 100% grátis. Você nunca paga nada e o Starter Kit com a faixa de cabeça é enviado até você sem custo de frete.",
    cta: { label: "Cadastre-se grátis", to: "/cadastro" },
  },
  {
    question: "Por que a Hub Data paga pelas gravações?",
    answer:
      "Os robôs aprendem vendo pessoas reais fazendo tarefas reais. A Hub é uma empresa de IA com sede em São Francisco e um escritório em São Paulo, e pagamos os colaboradores pelo material do mundo real que torna esse treinamento possível.",
  },
  {
    question: "Quando eu recebo?",
    answer:
      "Cada gravação é revisada em até 48 horas. Após a aprovação, suas horas são creditadas e você pode sacar pelo app quando quiser.",
  },
  {
    question: "E se meu vídeo for rejeitado?",
    answer:
      "O material rejeitado não é pago, mas o app explica o motivo (tremor, pouca luz, mãos fora do quadro, tarefa encenada). Corrija e grave novamente — a taxa de aprovação sobe rápido depois dos primeiros vídeos.",
    cta: { label: "Ver tutoriais de gravação", to: "/tutoriais" },
  },
  {
    question: "Quais celulares funcionam para gravar no telefone?",
    answer:
      "Modelos compatíveis: linha iPhone 12 a 17 (exceto 16e / 17e), Pixel 6 a 9 e Galaxy S21 a S26 (exceto modelos FE). Você também pode verificar seu aparelho direto no app Minute.",
  },
  {
    question: "Quanto de internet e bateria a gravação consome?",
    answer:
      "O vídeo é gravado localmente e enviado depois, então o ideal é subir no Wi-Fi. Uma hora de gravação consome bateria como uma chamada de vídeo — por isso o guia recomenda celular carregado ou uma bateria portátil.",
  },
  {
    question: "Preciso de experiência ou de CNPJ?",
    answer:
      "Não. Se você sabe usar o celular e fazer as tarefas de casa, você consegue. Não é emprego CLT: é uma colaboração livre, sem vínculo, sem CNPJ e sem carga horária mínima.",
  },
  {
    question: "Posso gravar em qualquer cidade do Brasil?",
    answer:
      "Sim. Colaboradores gravam de São Paulo a Manaus, passando por Salvador, Brasília, Recife, Curitiba e cidades do interior. O que importa é a qualidade da gravação, não o seu CEP — o Starter Kit chega em todo o país.",
  },
  {
    question: "Hub Data é confiável? Como identificar golpes?",
    answer:
      "A Hub nunca cobra taxa, nunca pede depósito e nunca envia pagamento por links fora dos canais oficiais. Desconfie de promessas de ganho fixo alto sem trabalho, de grupos que pedem PIX antecipado e de páginas que imitam o nome Hub Data fora do domínio hubdata.org.",
    cta: { label: "Ler sobre prevenção de fraude", to: "/como-funciona" },
  },
  {
    question: "Como ganhar dinheiro no TikTok assistindo vídeos? E no Kwai?",
    answer:
      "No TikTok Lite e no Kwai você acumula moedas assistindo vídeos e girando roletas: na prática, quem busca 'como ganhar dinheiro no TikTok assistindo vídeos' ou 'como ganhar dinheiro no Kwai assistindo vídeo' costuma levar dias para converter alguns reais, porque o pagamento é por visualização e o saque exige metas e convites. Gravando vídeos na Hub Data a lógica muda: uma hora gravada e aprovada vale até R$ 30, sem moedas, sem roleta e sem indicar amigos.",
    cta: { label: "Trocar assistir por gravar", to: "/como-funciona" },
  },
  {
    question: "Como ganhar dinheiro no YouTube assistindo vídeos, sem monetização?",
    answer:
      "Ganhar dinheiro no YouTube assistindo vídeos praticamente não existe: o YouTube paga o criador por visualização (monetização), não o espectador. Quem não quer criar canal, editar nem esperar 1.000 inscritos pode gravar tarefas comuns pelo celular e receber por hora aprovada — é o caminho mais direto para transformar tempo em dinheiro sem depender de audiência.",
  },
  {
    question: "Existe aplicativo que ganha dinheiro de verdade pelo celular?",
    answer:
      "Sim, mas a maioria dos apps que ganham dinheiro paga em pontos, cashback ou centavos por anúncio. O app Minute, da Hub Data, é diferente: é um aplicativo que paga para gravar vídeos de tarefas do dia a dia, com valor por hora aprovada e saque em PIX. Funciona em iPhone e Android e o cadastro é gratuito.",
    cta: { label: "Baixar o app e começar", to: "/como-funciona" },
  },
  {
    question: "Como trabalhar em casa pelo celular e ter dinheiro extra todo mês?",
    answer:
      "Basta ter um celular compatível, a faixa de cabeça gratuita e vontade de gravar sua rotina. Você escolhe os dias e horários, grava tarefas simples e acumula horas aprovadas — é trabalho em casa pelo celular sem meta, sem escala e sem entrevista, ideal para conseguir dinheiro extra pelo celular em paralelo a outro trabalho ou aos estudos.",
    cta: { label: "Começar agora", to: "/cadastro" },
  },
  {
    question: "Como ganhar dinheiro gravando vídeos em casa sem aparecer e sem editar?",
    answer:
      "Você grava em primeira pessoa, envia o arquivo bruto pelo app e pronto. Não há edição, roteiro, trilha, miniatura nem publicação — diferente de ganhar dinheiro fazendo vídeos para redes sociais, aqui ninguém precisa assistir ao seu vídeo para você receber: basta ele ser aprovado na revisão de qualidade.",
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

