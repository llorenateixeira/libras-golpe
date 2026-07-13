export const videoUrl = "https://example.com/video-libras";

export const navItems = [
  { label: "Tema", href: "#tema" },
  { label: "Sobre", href: "#sobre" },
  { label: "Golpes", href: "#golpes" },
  { label: "Libras", href: "#libras" },
  { label: "Fontes", href: "#fontes" },
];

export const sources = [
  {
    title: "Cartilha de Prevenção contra Golpes",
    description:
      "Base principal para os golpes escolhidos e para as orientações de prevenção.",
    url: "https://www.pc.sc.gov.br/noticias/cartilha-prevencao-contra-golpes",
    linkLabel: "Acessar a cartilha",
    icon: "shield-check",
  },
  {
    title: "Guia Básico de Acessibilidade na Comunicação",
    description:
      "Referência usada para organizar a informação, a clareza visual e o acesso em Libras.",
    url: "https://www.cnmp.mp.br/portal/images/Publicacoes/documentos/2024/Guia_Basico_de_Acessibilidade_na_Comunicacao_-_CNMP.pdf",
    linkLabel: "Acessar o guia",
    icon: "book-text",
  },
];

export const scams = [
  {
    title: "Perfil falso",
    description:
      "Criminosos usam a foto da vítima em outro número e entram em contato com amigos ou familiares para pedir dinheiro.",
    prevention:
      "Confirmar por outro meio, desconfiar de número diferente e avisar familiares.",
    image: "/assets/perfil_falso.png",
    imageAlt:
      "Exemplo visual do golpe de perfil falso em aplicativo de mensagens.",
    features: [
      "Foto copiada do perfil original",
      "Pedido urgente de PIX ou transferência",
      "Número diferente do contato verdadeiro",
    ],
    label: "Golpe em perfil",
    icon: "user-round",
    tone: "tone-warning",
  },
  {
    title: "Link suspeito",
    description:
      "Mensagens prometem prêmio, desconto ou alerta falso e levam a sites clonados ou downloads maliciosos.",
    prevention:
      "Verificar o endereço do site, evitar clicar por impulso e usar canais oficiais.",
    image: "/assets/phising.jpg",
    imageAlt:
      "Exemplo visual usado como apoio para o golpe de phishing com páginas falsas.",
    features: [
      "URL parecida com a oficial",
      "Pressão para clicar imediatamente",
      "Risco de roubo de dados pessoais",
    ],
    label: "Phishing e páginas falsas",
    icon: "link-2",
    tone: "tone-ocean",
  },
  {
    title: "Falso suporte",
    description:
      "O golpista finge ser suporte de WhatsApp, banco ou marketplace e pede código recebido por SMS ou aplicativo.",
    prevention:
      "Nunca enviar código de verificação e procurar atendimento só nos canais reais.",
    image: "/assets/suporte.jpg",
    imageAlt:
      "Exemplo visual usado como apoio para o golpe de falso suporte no aplicativo.",
    features: [
      "Contato se passando por empresa conhecida",
      "Pedido de código de autenticação",
      "Tentativa de acesso à conta da vítima",
    ],
    label: "Suporte falso",
    icon: "headset",
    tone: "tone-sunset",
  },
  {
    title: "Falso empréstimo",
    description:
      "Anúncios prometem crédito rápido, mas exigem pagamentos antecipados para liberar um valor que nunca chega.",
    prevention:
      "Desconfiar de pagamento antecipado e checar se a instituição é autorizada.",
    features: [
      "Oferta fácil demais para ser real",
      "Cobrança de taxa antes do empréstimo",
      "Uso de nomes de falsas financeiras",
    ],
    label: "Crédito fraudulento",
    icon: "circle-dollar-sign",
    tone: "tone-gold",
  },
  {
    title: "Clonagem de voz com IA",
    description:
      "Trechos curtos de áudio publicados nas redes podem ser usados para imitar a voz da vítima e pedir dinheiro.",
    prevention:
      "Confirmar o pedido por ligação, mensagem direta ou contato presencial.",
    features: [
      "Áudio parece ser da pessoa conhecida",
      "Pedido emocional e urgente",
      "Uso de inteligência artificial para enganar",
    ],
    label: "IA usada no golpe",
    icon: "audio-lines",
    tone: "tone-plum",
  },
];
