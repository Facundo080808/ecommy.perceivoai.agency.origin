import { LocaleLanguaje } from "./translationType";

export const pt : LocaleLanguaje= {
header: {
  inicio: "Início",
  caracteristicas: "Características",
  comoFunciona: "Como Funciona",
  tecnologia: "Tecnologia",
  capacidades: "Capacidades",
  beneficios: "Benefícios",
  precios: "Preços",
  contacto: "Contato",
  iniciarSesion: "Entrar",
  solicitarDemo: "Solicitar Demo",
},
  hero_section: {
  subtitle: "Automatize sua loja online com agentes inteligentes que conversam e convertem.",
  demoButton: "Solicitar demo",
  featuresButton: "Ver funcionalidades",
  stats: [
    { icon: "TrendingUp", value: "35%", label: "Aumento nas conversões" },
    { icon: "Zap", value: "24/7", label: "Suporte automatizado" },
    { icon: "Brain", value: "500+", label: "Lojas ativas" },
  ],
  trust: [
    { label: "Pronto para empresas", color: "green" },
    { label: "Compatível com SOC 2", color: "blue" },
    { label: "99.9% de disponibilidade", color: "purple" },
  ],
  demo: {
    messages: [
      {
        role: "user",
        content: "Estou procurando uma câmera digital de boa qualidade",
      },
      {
        role: "assistant",
        content:
          "Perfeito! Nossa IA pode ajudar você a encontrar a câmera ideal. Você prefere uma profissional ou algo mais compacto para uso diário?",
      },
      {
        role: "user",
        content: "Procuro algo profissional, mas fácil de usar",
      },
    ],
    products: [
      {
        name: "Sony Alpha A7 III",
        price: "€1.799,00",
        image: "/placeholder.svg?height=100&width=100",
        specs: ["Sensor Full Frame", "24.2MP", "Vídeo 4K", "Estabilização de 5 eixos"],
      },
      {
        name: "Canon EOS R6",
        price: "€2.499,00",
        image: "/placeholder.svg?height=100&width=100",
        specs: ["Sensor Full Frame", "20.1MP", "Vídeo 4K", "Autofoco Dual Pixel"],
      },
    ],
  },
},
free_trial_section: {
  badge: "Oferta limitada",
  title: "Teste grátis de 7 dias",
  subtitle: "Experimente sem compromisso. Cancele quando quiser.",
  button: "Começar agora",
  features: [
    {
      icon: "Code",
      title: "API completa",
      description: "Acesse toda a API dos nossos agentes de IA",
    },
    {
      icon: "BarChart3",
      title: "Integração eCommerce",
      description: "Compatível com Shopify, WooCommerce, Magento",
    },
    {
      icon: "Truck",
      title: "Rastreamento avançado",
      description: "Rastreamento de pedidos em tempo real",
    },
    {
      icon: "Shield",
      title: "Sem compromisso",
      description: "Cancele a qualquer momento sem penalidades",
    },
  ],
  heading: {
    main: "Teste Gratuito de",
    highlight: "7 Dias",
  },
  description: "Experimente o poder dos agentes de IA no seu eCommerce. <strong> Sem cartão de crédito, sem compromisso.</strong>",
  whats_included_title: "O que está incluído no teste gratuito:",
  whats_included_items: [
    "Até 100 conversas com IA",
    "Integração completa com sua plataforma: API, plataformas de eCommerce e rastreamento",
    "Suporte técnico das 09:00 às 18:30 (-3 GMT)",
    "Configuração personalizada"
  ],
  benefits: [
    "Configuração em menos de 7 dias úteis",
    "Sem necessidade de cartão de crédito",
    "Cancele a qualquer momento"
  ],
  timer: {
    days_free: "dias completamente grátis"
  },
  cta_button: "Começar Teste Grátis",
  trust_text: "Junte-se a mais de 500+ empresas que já confiam em nós",
  integrations_title: "Integração instantânea com:",
  integrations_list: ["Shopify", "WooCommerce", "Magento", "PrestaShop", "DHL", "FedEx"]
}
,
features_section: {
  title: "Principais Características",
  subtitle: "Nossos agentes de IA transformam a experiência de compra na sua loja online",
  features: [
    {
      icon: "Search",
      title: "Otimização de Buscas",
      description:
        "Resultados precisos e relevantes baseados na intenção do usuário, não apenas em palavras-chave.",
    },
    {
      icon: "TrendingUp",
      title: "Aumento de Conversões",
      description:
        "Aumento comprovado nas taxas de conversão graças a recomendações personalizadas.",
    },
    {
      icon: "MessageSquare",
      title: "Automatização do Suporte",
      description:
        "Atendimento disponível 24/7 para tirar dúvidas e guiar os clientes durante o processo de compra.",
    },
  ],
},
how_it_works_section: {
  title: "Como Funciona",
  subtitle: "Uma experiência de compra conversacional que guia seus clientes da busca até a compra",
  video_title: "Demo KreadoresPro",
},
technology_section: {
  title: "Tecnologia Avançada",
  subtitle: "Impulsionado pelos avanços mais recentes em inteligência artificial e processamento de linguagem natural",
  items: [
    {
      title: "Modelo de Linguagem Contextual",
      description: "Compreende o contexto e a intenção por trás das consultas dos usuários para fornecer respostas precisas.",
    },
    {
      title: "Motor de Busca Semântica",
      description: "Vai além das palavras-chave para entender o significado e a intenção das buscas.",
    },
    {
      title: "Sistema de Recomendação Híbrido",
      description: "Combina análise de comportamento e preferências para oferecer recomendações personalizadas.",
    },
    {
      title: "Busca Avançada de Produtos",
      description: "Filtragem inteligente que ajuda os usuários a encontrar exatamente o que procuram.",
    },
    {
      title: "Integração com API de Rastreamento",
      description: "Conexão em tempo real com provedores de envio para rastreamento atualizado de pedidos.",
    },
  ],
},
capabilities_section: {
  title: "Capacidades",
  subtitle: "Descubra tudo o que nossos agentes de IA podem fazer pela sua loja online",
  capabilities: [
    {
      title: "Recomendações Personalizadas",
      description: "Sugestões baseadas nas preferências e no comportamento do usuário.",
    },
    {
      title: "Comparação Inteligente",
      description: "Análise lado a lado de produtos para facilitar a decisão.",
    },
    {
      title: "Assistente Conversacional",
      description: "Interação natural que guia o processo de compra.",
    },
    {
      title: "Rastreamento de Pedidos",
      description: "Informações em tempo real sobre o status dos pedidos.",
    },
  ],
  footerText: "Nossos agentes de IA aprendem continuamente para oferecer uma experiência cada vez mais personalizada",
},
benefits_section: {
  title: "Benefícios",
  subtitle: "Vantagens para o seu negócio e para os seus clientes",
  ecommerce: {
    title: "Para o eCommerce",
    items: [
      "Melhoria na experiência do usuário",
      "Redução do abandono de carrinho",
      "Aumento na taxa de conversão",
      "Maior satisfação do cliente",
      "Menor carga no atendimento humano",
    ],
  },
  user: {
    title: "Para o Usuário",
    items: [
      "Experiência intuitiva e conversacional",
      "Acesso rápido a informações detalhadas",
      "Processo de checkout simplificado",
      "Rastreamento eficiente de pedidos",
      "Atendimento disponível 24/7",
    ],
  },
},
integration_section: {
  title: "Integrações",
  subtitle: "Compatível com as principais plataformas de eCommerce e serviços de envio",
  categories: {
    ecommerce: {
      title: "Plataformas de eCommerce",
      platforms: ["Shopify", "WooCommerce", "Magento", "PrestaShop", "Jumpseller", "BigCommerce"],
    },
    shipping: {
      title: "Serviços de Envio",
      platforms: ["DHL", "FedEx", "UPS", "Correos", "Blue envíos", "GLS"],
    },
  },
  cta: "Ver todas as integrações",
  stepsTitle: "Integração em 3 passos simples",
  steps: [
    {
      step: "01",
      title: "Conectamos sua plataforma",
      description: "Integramos sua loja online existente por meio de API.",
    },
    {
      step: "02",
      title: "Personalizamos seu assistente",
      description: "Configuramos o comportamento e a aparência do seu agente de IA conforme suas necessidades.",
    },
    {
      step: "03",
      title: "Ativamos e monitoramos",
      description: "Lançamos seu assistente personalizado e analisamos seu desempenho em tempo real.",
    },
  ],
  support: "Precisa de ajuda com a integração? Nossa equipe de suporte está disponível das 09:00 às 19:00 (-3 GMT) para te ajudar durante todo o processo.",
  highlights: ["Shopify", "WooCommerce", "Magento", "DHL", "FedEx", "UPS"],
},
roi_calculator_section: {
  title: "Calculadora de Impacto de IA",
  subtitle: "Descubra quanto valor um agente de IA pode gerar para o seu eCommerce. Cálculos baseados em dados reais do setor.",
  form: {
    sectionTitle: "Dados do seu eCommerce",
    fields: {
      traffic: {
        label: "Tráfego Médio Mensal",
        hint: "visitantes/mês",
        min: "1K",
        max: "500K",
      },
      conversionRate: {
        label: "Taxa de Conversão Atual",
        suffix: "%",
      },
      aov: {
        label: "Ticket Médio de Venda (AOV)",
        prefix: "$",
      },
      numAgents: {
        label: "Número de Agentes de Suporte",
      },
      costPerAgent: {
        label: "Custo Mensal por Agente",
        prefix: "$",
      },
    },
  },
  results: {
    impactTitle: "Impacto Anual Estimado",
    impactSubtitle: "em valor adicional gerado por ano",
    monthlyBreakdownTitle: "Detalhamento Mensal",
    monthly: {
      extraRevenue: "Receita Extra",
      supportSavings: "Economia em Suporte",
      totalMonthly: "Total Mensal",
    },
    detailedBreakdownTitle: "Detalhamento Detalhado",
    details: {
      currentRevenue: "Receita atual (mensal):",
      aiRevenue: "Receita com IA (mensal):",
      gainConversion: "Melhoria por conversão (+12%):",
      gainAOV: "Melhoria no AOV (+5%):",
      supportSavings: "Economia em suporte (60% automatizado):",
      uplift: "AI_Conversion_Uplift(12%):",
      // ticketResolutionRate: "AI_Ticket_Resolution_Rate(66%):",
      // aovIncrease: "AI_AOV_Increase (5%):",
    },
  },
  charts: {
    barChart: {
      extraRevenue: "Receita Extra",
      supportSavings: "Economia em Suporte",
    },
    pieChart: {
      gainConversion: "Ganho por Conversão",
      gainAOV: "Aumento do AOV",
      supportSavings: "Economia em Suporte",
    },
  },
  cta: "Quero automatizar meu eCommerce com IA",
  disclaimer: "* Cálculos baseados em médias do setor e casos reais de sucesso",
},
pricing_section: {
  title: "Planos e Preços",
  subtitle: "Soluções flexíveis que se adaptam às necessidades do seu negócio",
  plans: [
    {
      type: "Set Up",
      title: "Set Up ou Implementação Personalizada",
      price: "$2500 USD",
      priceNote: "líquido",
      description: "Solução completa para o seu eCommerce",
      features: [
        "Assistente de IA conversacional",
        "Busca de produtos",
        "Recomendações básicas",
        "Até 30k interações/mês",
        "Recomendações personalizadas",
        "Comparação de produtos",
        "Personalização completa",
        "Integração completa via API",
        "Histórico de interações com o agente de IA",
        "Suporte por e-mail",
      ],
      buttonText: "Solicitar Implementação",
      highlighted: true,
      showRecommended: true,
    },
    {
      type: "Fee Mensal",
      title: "Fee Mensal",
      price: "$1490 USD",
      priceNote: "mês líquido",
      description: "Custo recorrente para manter sua solução ativa",
      features: [
        "Duração: 1 mês (renovação automática)",
        "8 horas/mês de suporte incluídas",
        "SLA de resposta: 6 horas após solicitação",
        "Horário de atendimento: Segunda–Sexta, 09:00–18:00 (GMT -3)",
        "Token LLM",
        "Banco de dados",
        "Embedding",
        "RAG",
        "taxa por hora extra: $30 USD/Hr"
      ],
      // buttonText: "Solicitar Informações",
      // buttonVariant: "outline",
    },
    {
      type: "Set Up",
      title: "Set Up ou Implementação Personalizada",
      price: "$5000 USD",
      priceNote: "líquido",
      description: "Solução completa para o seu eCommerce",
      features: [
        "Assistente de IA conversacional",
        "Busca de produtos",
        "Recomendações básicas",
        "Até 30k interações/mês",
        "Recomendações personalizadas",
        "Comparação de produtos",
        "Personalização completa",
        "Integração completa via API",
        "Histórico de interações com o agente de IA",
        "Suporte por e-mail",
      ],
      buttonText: "Solicitar Implementação",
      highlighted: true,
      showRecommended: true,
    },
    {
      type: "Fee Mensal",
      title: "Fee Mensal",
      price: "$990 USD",
      priceNote: "mês líquido",
      description: "Custo recorrente para manter sua solução ativa",
      features: [
        "Duração: 1 mês (renovação automática)",
        "8 horas/mês de suporte incluídas",
        "SLA de resposta: 6 horas após solicitação",
        "Horário de atendimento: Segunda–Sexta, 09:00–18:00 (GMT -3)",
        "Token LLM",
        "Banco de dados",
        "Embedding",
        "RAG",
        "taxa por hora extra: $30 USD/Hr"
      ],
      // buttonText: "Solicitar Informações",
      // buttonVariant: "outline",
    },
  ],
},
secondary_hero_section: {
  title: "Transforme a experiência dos seus clientes",
  subtitle: "Junte-se às empresas líderes que já estão usando inteligência artificial para revolucionar seu eCommerce.",
  highlights: [
    "Implementação em menos de 7 dias úteis",
    "Garantia de satisfação de 30 dias",
    "Suporte técnico personalizado",
    "Mais de 500 clientes satisfeitos",
  ],
  ctaPrimary: {
    text: "Teste 7 dias - Apenas API",
    icon: "ArrowRight",
  },
  ctaSecondary: {
    text: "Falar com um especialista",
  },
  apiFeaturesTitle: "Acesso completo a plataformas de eCommerce e tracking",
  apiFeatures: [
    {
      title: "APIs de eCommerce",
      description: "Shopify, WooCommerce, Magento",
      icon: "BarChart3",
      color: "blue",
    },
    {
      title: "APIs de Tracking",
      description: "DHL, FedEx, UPS, Correios",
      icon: "Truck",
      color: "green",
    },
    {
      title: "API Completa",
      description: "Documentação e SDKs",
      icon: "Code",
      color: "purple",
    },
  ],
  stats: [
    { value: "98%", label: "Satisfação" },
    { value: "35%", label: "Aumento nas conversões" },
    { value: "24/7", label: "Suporte disponível" },
    { value: "500+", label: "Clientes ativos" },
  ],
},
contact: {
    title: "Pronto para começar?",
    subtitle: "Conte-nos sobre seu projeto e ajudaremos você a escolher a melhor solução",
    form: {
      title: "Formulário de contato",
      step1: {
        title: "Conte-nos sobre você",
        name: "Nome completo",
        email: "Endereço de email",
        company: "Empresa",
      },
      step2: {
        title: "Qual plano você está interessado?",
        basic: {
          title: "Plano Básico",
          description: "Ideal para pequenas lojas online",
          price: "€99/mês",
        },
        professional: {
          title: "Plano Profissional",
          description: "Para lojas em crescimento",
          price: "€249/mês",
        },
        enterprise: {
          title: "Plano Empresarial",
          description: "Para grandes eCommerces",
          price: "Personalizado",
        },
      },
      step3: {
        title: "Mais alguma coisa que você gostaria de nos contar?",
        message: "Mensagem (opcional)",
        additionalComments: "Comentários adicionais",
        additionalCommentsHelp: "Alguma necessidade específica ou pergunta que você tenha?",
        additionalCommentsNote: "Estes comentários nos ajudarão a preparar melhor nossa proposta para você.",
        summary: "Resumo da sua solicitação",
        name: "Nome:",
        email: "Email:",
        company: "Empresa:",
        plan: "Plan:",
      },
      buttons: {
        previous: "Anterior",
        next: "Próximo",
        submit: "Enviar solicitação",
      },
      success: {
        title: "Obrigado por nos contatar!",
        message: "Recebemos sua mensagem. Nossa equipe entrará em contato com você em breve.",
        button: "Enviar outra mensagem",
      },
    },
  },
  cta_section: {
  title: "Experiência de usuário conversacional",
  subtitle:
    "Nossos agentes de IA oferecem uma interface intuitiva e natural que se adapta às necessidades dos seus clientes em qualquer dispositivo.",
  platforms: ["Móvel", "Desktop", "Apps", "Chat"],
  button: "Transforme seu eCommerce",
  demoButton: "Ver demonstração",
  inputPlaceholder: "Digite sua pergunta aqui...",
  chat_demo: {
    user1: "Procuro uma câmera para fotografia de paisagens",
    ai1: [
      "Claro! Para fotografia de paisagens recomendo câmeras com bom alcance dinâmico e alta resolução.",
      "Você tem alguma preferência de marca ou orçamento?"
    ],
    user2: "Gosto das Sony e tenho um orçamento de cerca de 1500€",
    ai2: [
      "Excelente escolha. A Sony tem opções perfeitas para paisagens nessa faixa de preço.",
      "Vou te mostrar as mais recomendadas:"
    ],
    products: [
      {
        name: "Sony Alpha A7 III",
        price: "1.799,00€"
      },
      {
        name: "Sony Alpha A6600",
        price: "1.399,00€"
      }
    ],
    productImagePlaceholder: "Imagem"
  }
}
,
footer: {
  description: "Plataforma de inteligência artificial para potencializar seu eCommerce, melhorar o atendimento ao cliente e aumentar conversões.",
  product: {
    title: "Produto",
    links: ["Planos", "API", "Integrações", "Demo"]
  },
  resources: {
    title: "Recursos",
    links: ["Documentação", "Suporte", "Guias", "Blog"]
  },
  company: {
    title: "Empresa",
    links: ["Sobre nós", "Contato", "Carreiras", "Política de Privacidade"]
  },
  copyright: "© {{year}} AI eCommerce. Todos os direitos reservados."
}

}
