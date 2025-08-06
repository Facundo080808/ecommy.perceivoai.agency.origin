import { LocaleLanguaje } from "./translationType";

export const es : LocaleLanguaje= {
  header: {
    inicio: "Inicio",
    caracteristicas: "Características",
    comoFunciona: "Cómo Funciona",
    tecnologia: "Tecnología",
    capacidades: "Capacidades",
    beneficios: "Beneficios",
    precios: "Precios",
    contacto: "Contacto",
    iniciarSesion: "Iniciar Sesión",
    solicitarDemo: "Solicitar Demo",
  },
  hero_section: {
    subtitle: "Automatiza tu tienda online con agentes inteligentes que conversan y convierten.",
    demoButton: "Solicitar demo",
    featuresButton: "Ver funcionalidades",
    stats: [
      { icon: "TrendingUp", value: "35%", label: "Incremento en conversiones" },
      { icon: "Zap", value: "24/7", label: "Soporte automatizado" },
      { icon: "Brain", value: "500+", label: "Tiendas activas" },
    ],
    trust: [
      { label: "Listo para empresas", color: "green" },
      { label: "Cumple con SOC 2", color: "blue" },
      { label: "99.9% de disponibilidad", color: "purple" },
    ],
    demo: {
      messages: [
        {
          role: "user",
          content: "Estoy buscando una cámara digital de buena calidad",
        },
        {
          role: "assistant",
          content:
            "¡Perfecto! Nuestro AI puede ayudarte a encontrar la cámara ideal. ¿Prefieres una profesional o más compacta para uso diario?",
        },
        {
          role: "user",
          content: "Busco algo profesional pero fácil de usar",
        },
      ],
      products: [
        {
          name: "Sony Alpha A7 III",
          price: "1.799,00€",
          image: "/placeholder.svg?height=100&width=100",
          specs: ["Sensor Full Frame", "24.2MP", "Video 4K", "Estabilización de 5 ejes"],
        },
        {
          name: "Canon EOS R6",
          price: "2.499,00€",
          image: "/placeholder.svg?height=100&width=100",
          specs: ["Sensor Full Frame", "20.1MP", "Video 4K", "Autoenfoque Dual Pixel"],
        },
      ],
    },
  },
  free_trial_section: {
  badge: "Oferta limitada",
  title: "Prueba gratuita de 7 días",
  subtitle: "Pruébalo sin compromiso. Cancela cuando quieras.",
  button: "Comenzar ahora",
  features: [
    {
      icon: "Code",
      title: "API completa",
      description: "Accede a toda la API de nuestros agentes de IA",
    },
    {
      icon: "BarChart3",
      title: "Integración eCommerce",
      description: "Compatible con Shopify, WooCommerce, Magento",
    },
    {
      icon: "Truck",
      title: "Seguimiento avanzado",
      description: "Seguimiento en tiempo real de pedidos",
    },
    {
      icon: "Shield",
      title: "Sin compromiso",
      description: "Cancela en cualquier momento sin penalidades",
    },
  ],
    heading: {
    main: "Prueba Gratuita de",              // Texto antes del gradient "7 Días"
    highlight: "7 Días",                      // Texto con gradiente
  },
  description: "Experimenta el poder de los agentes AI en tu eCommerce. <strong> Sin tarjeta de crédito, sin compromisos.</strong>",
  whats_included_title: "Qué incluye tu prueba gratuita:",
  whats_included_items: [
    "Hasta 100 conversaciones con AI",
    "Integración completa con tu plataforma: API plataformas de eCommerce y tracking",
    "Soporte técnico 09:00 a 18:30 (-3 GTM)",
    "Configuración personalizada"
  ],
  benefits: [
    "Configuración en menos de 7 días hábiles",
    "Sin tarjeta de crédito requerida",
    "Cancela en cualquier momento"
  ],
  timer: {
    days_free: "días completamente gratis"
  },
  cta_button: "Comenzar Prueba Gratuita",
  trust_text: "Únete a más de 500+ empresas que ya confían en nosotros",
  integrations_title: "Integración instantánea con:",
  integrations_list: ["Shopify", "WooCommerce", "Magento", "PrestaShop", "DHL", "FedEx"]
},

  features_section: {
    title: "Características Principales",
    subtitle: "Nuestros agentes AI transforman la experiencia de compra en su tienda online",
    features: [
      {
        icon: "Search",
        title: "Optimización de Búsquedas",
        description:
          "Resultados precisos y relevantes basados en la intención del usuario, no solo en palabras clave.",
      },
      {
        icon: "TrendingUp",
        title: "Mejora de Conversiones",
        description:
          "Incremento demostrado en tasas de conversión gracias a recomendaciones personalizadas.",
      },
      {
        icon: "MessageSquare",
        title: "Automatización de Atención",
        description:
          "Asistencia disponible 24/7 para resolver dudas y guiar a los clientes en su proceso de compra.",
      },
    ],
  },
  how_it_works_section: {
    title: "Cómo Funciona",
    subtitle: "Una experiencia de compra conversacional que guía a sus clientes desde la búsqueda hasta la compra",
    video_title: "Demo KreadoresPro",
  },
  technology_section: {
    title: "Tecnología Avanzada",
    subtitle: "Potenciado por los últimos avances en inteligencia artificial y procesamiento del lenguaje natural",
    items: [
      {
        title: "Modelo de Lenguaje Contextual",
        description: "Comprende el contexto y la intención detrás de las consultas de los usuarios para ofrecer respuestas precisas.",
      },
      {
        title: "Motor de Búsqueda Semántica",
        description: "Va más allá de las palabras clave para entender el significado y la intención de las búsquedas.",
      },
      {
        title: "Sistema de Recomendación Híbrido",
        description: "Combina análisis de comportamiento y preferencias para ofrecer recomendaciones personalizadas.",
      },
      {
        title: "Búsqueda Avanzada de Productos",
        description: "Filtrado inteligente que ayuda a los usuarios a encontrar exactamente lo que buscan.",
      },
      {
        title: "Integración API de Tracking",
        description: "Conexión en tiempo real con proveedores de envío para seguimiento de pedidos actualizado.",
      },
    ],
  },
  capabilities_section: {
    title: "Capacidades",
    subtitle: "Descubra todo lo que nuestros agentes AI pueden hacer por su tienda online",
    capabilities: [
      {
        title: "Recomendaciones Personalizadas",
        description: "Sugerencias basadas en preferencias y comportamiento del usuario.",
      },
      {
        title: "Comparación Inteligente",
        description: "Análisis lado a lado de productos para facilitar decisiones.",
      },
      {
        title: "Asistente Conversacional",
        description: "Interacción natural que guía el proceso de compra.",
      },
      {
        title: "Seguimiento de Envíos",
        description: "Información en tiempo real sobre el estado de pedidos.",
      },
    ],
    footerText: "Nuestros agentes AI aprenden continuamente para ofrecer una experiencia cada vez más personalizada",
  },
  benefits_section: {
    title: "Beneficios",
    subtitle: "Ventajas para su negocio y para sus clientes",
    ecommerce: {
      title: "Para el eCommerce",
      items: [
        "Mejora en experiencia del usuario",
        "Reducción del abandono del carrito",
        "Incremento en tasa de conversión",
        "Mayor satisfacción del cliente",
        "Menor carga en atención humana",
      ],
    },
    user: {
      title: "Para el Usuario",
      items: [
        "Experiencia intuitiva y conversacional",
        "Acceso rápido a información detallada",
        "Proceso de checkout simplificado",
        "Seguimiento eficiente de pedidos",
        "Asistencia disponible 24/7",
      ],
    },
  },
    integration_section: {
    title: "Integraciones",
    subtitle: "Compatible con las principales plataformas de eCommerce y servicios de envío",
    categories: {
        ecommerce: {
        title: "Plataformas eCommerce",
        platforms: ["Shopify", "WooCommerce", "Magento", "PrestaShop", "Jumpseller", "BigCommerce"],
        },
        shipping: {
        title: "Servicios de Envío",
        platforms: ["DHL", "FedEx", "UPS", "Correos", "Blue envíos", "GLS"],
        },
    },
    cta: "Ver todas las integraciones",
    stepsTitle: "Integración en 3 simples pasos",
    steps: [
        {
        step: "01",
        title: "Conectamos tu plataforma",
        description: "Integramos tu tienda online existente mediante API.",
        },
        {
        step: "02",
        title: "Personalizamos tu asistente",
        description: "Configuramos el comportamiento y apariencia de tu agente AI según tus necesidades.",
        },
        {
        step: "03",
        title: "Activamos y monitoreamos",
        description: "Lanzamos tu asistente personalizado y analizamos su rendimiento en tiempo real.",
        },
    ],
    support: "¿Necesitas ayuda con la integración? Nuestro equipo de soporte está disponible 09:00 a 19:00 (-3 GTM) para asistirte en todo el proceso.",
    highlights: ["Shopify", "WooCommerce", "Magento", "DHL", "FedEx", "UPS"],
    },
roi_calculator_section: {
  title: "Calculadora de Impacto AI",
  subtitle: "Descubre cuánto valor puede generar un agente AI en tu eCommerce. Cálculos basados en datos reales de la industria.",
  form: {
    sectionTitle: "Datos de tu eCommerce",
    fields: {
      traffic: {
        label: "Tráfico Mensual Promedio",
        hint: "visitantes/mes",
        min: "1K",
        max: "500K",
      },
      conversionRate: {
        label: "Tasa de Conversión Actual",
        suffix: "%",
      },
      aov: {
        label: "Ticket Promedio de Venta (AOV)",
        prefix: "$",
      },
      numAgents: {
        label: "Número de Agentes de Soporte",
      },
      costPerAgent: {
        label: "Costo Mensual por Agente",
        prefix: "$",
      },
    },
  },
  results: {
    impactTitle: "Impacto Anual Estimado",
    impactSubtitle: "en valor adicional generado por año",
    monthlyBreakdownTitle: "Desglose Mensual",
    monthly: {
      extraRevenue: "Ingresos Extra",
      supportSavings: "Ahorro en Soporte",
      totalMonthly: "Total Mensual",
    },
    detailedBreakdownTitle: "Desglose Detallado",
    details: {
      currentRevenue: "Ingresos actuales (mensual):",
      aiRevenue: "Ingresos con AI (mensual):",
      gainConversion: "Mejora por conversión (+12%):",
      gainAOV: "Mejora por AOV (+5%):",
      supportSavings: "Ahorro soporte (60% automatizado):",
      uplift: "AI_Conversion_Uplift(12%):",
      // ticketResolutionRate: "AI_Ticket_Resolution_Rate(66%):",
      // aovIncrease: "AI_AOV_Increase (5%):",
    },
  },
  charts: {
    barChart: {
      extraRevenue: "Ingresos Extra",
      supportSavings: "Ahorro en Soporte",
    },
    pieChart: {
      gainConversion: "Mejora Conversión",
      gainAOV: "Aumento AOV",
      supportSavings: "Ahorro Soporte",
    },
  },
  cta: "Quiero automatizar mi eCommerce con AI",
  disclaimer: "* Cálculos basados en promedios de la industria y casos de éxito reales",
},
pricing_section: {
  title: "Planes y Precios",
  subtitle: "Soluciones flexibles que se adaptan a las necesidades de su negocio",
  plans: [
    {
      type: "Set Up",
      title: "Set Up o implementación personalizada",
      price: "$2500 USD",
      priceNote: "neto",
      description: "Solución completa para tu eCommerce",
      features: [
        "Asistente AI conversacional",
        "Búsqueda de productos",
        "Recomendaciones básicas",
        "Hasta 30k interacciones/mes",
        "Recomendaciones personalizadas",
        "Comparación de productos",
        "Personalización completa",
        "Integración API completa",
        "Historial de interacciones con el agente AI",
        "Soporte por email",
      ],
      buttonText: "Solicitar Implementación",
      highlighted: true,
      showRecommended: true,
    },
    {
      type: "Fee Mensual",
      title: "Fee Mensual",
      price: "$1490 USD",
      priceNote: "mes neto",
      description: "Costo recurrente para mantener tu solución activa",
      features: [
        "Duración: 1 mes (renovable automáticamente)",
        "8 horas/mes de soporte incluidas",
        "SLA de respuesta: 6 horas desde la recepción",
        "Horario de cobertura: Lunes-Viernes, 09:00-18:00 (GMT -3)",
        "Token LLM",
        "base de datos",
        "Embedding",
        "RAG",
        "tarifa por hora extra: $30 USD/Hra"
      ],
      // buttonText: "Solicitar Información",
      // buttonVariant: "outline",
    },
    {
      type: "Set Up",
      title: "Set Up o implementación personalizada",
      price: "$5000 USD",
      priceNote: "neto",
      description: "Solución completa para tu eCommerce",
      features: [
        "Asistente AI conversacional",
        "Búsqueda de productos",
        "Recomendaciones básicas",
        "Hasta 30k interacciones/mes",
        "Recomendaciones personalizadas",
        "Comparación de productos",
        "Personalización completa",
        "Integración API completa",
        "Historial de interacciones con el agente AI",
        "Soporte por email",
      ],
      buttonText: "Solicitar Implementación",
      highlighted: true,
      showRecommended: true,
    },
    {
      type: "Fee Mensual",
      title: "Fee Mensual",
      price: "$990 USD",
      priceNote: "mes neto",
      description: "Costo recurrente para mantener tu solución activa",
      features: [
        "Duración: 1 mes (renovable automáticamente)",
        "8 horas/mes de soporte incluidas",
        "SLA de respuesta: 6 horas desde la recepción",
        "Horario de cobertura: Lunes-Viernes, 09:00-18:00 (GMT -3)",
        "Token LLM",
        "base de datos",
        "Embedding",
        "RAG",
        "tarifa por hora extra: $30 USD/Hra"
      ],
      // buttonText: "Solicitar Información",
      // buttonVariant: "outline",
    },
  ],
},
secondary_hero_section: {
  title: "Transforma la experiencia de tus clientes",
  subtitle: "Únete a las empresas líderes que ya están aprovechando el poder de la inteligencia artificial para revolucionar su eCommerce.",
  highlights: [
    "Implementación en menos de 7 días hábiles",
    "Garantía de satisfacción de 30 días",
    "Soporte técnico personalizado",
    "Más de 500 clientes satisfechos",
  ],
  ctaPrimary: {
    text: "Pruébalo 7 días - Solo API",
    icon: "ArrowRight",
  },
  ctaSecondary: {
    text: "Hablar con un experto",
  },
  apiFeaturesTitle: "Acceso completo a plataformas de eCommerce y tracking",
  apiFeatures: [
    {
      title: "eCommerce APIs",
      description: "Shopify, WooCommerce, Magento",
      icon: "BarChart3",
      color: "blue",
    },
    {
      title: "Tracking APIs",
      description: "DHL, FedEx, UPS, Correos",
      icon: "Truck",
      color: "green",
    },
    {
      title: "API Completa",
      description: "Documentación y SDKs",
      icon: "Code",
      color: "purple",
    },
  ],
  stats: [
    { value: "98%", label: "Satisfacción" },
    { value: "35%", label: "Aumento en conversiones" },
    { value: "24/7", label: "Soporte disponible" },
    { value: "500+", label: "Clientes activos" },
  ],
},
  contact: {
  title: "¿Listo para empezar?",
  subtitle: "Cuéntanos sobre tu proyecto y te ayudaremos a elegir la mejor solución",
  form: {
    title: "Formulario de contacto",
    step1: {
      title: "Cuéntanos sobre ti",
      name: "Nombre completo",
      email: "Correo electrónico",
      company: "Empresa",
    },
    step2: {
      title: "¿En qué plan estás interesado?",
      basic: {
        title: "Plan Básico",
        description: "Ideal para pequeñas tiendas online",
        price: "€99/mes",
      },
      professional: {
        title: "Plan Profesional",
        description: "Para tiendas en crecimiento",
        price: "€249/mes",
      },
      enterprise: {
        title: "Plan Empresarial",
        description: "Para grandes eCommerces",
        price: "Personalizado",
      },
    },
    step3: {
      title: "¿Algo más que quieras contarnos?",
      message: "Mensaje (opcional)",
      additionalComments: "Comentarios adicionales",
      additionalCommentsHelp: "¿Alguna necesidad específica o pregunta que tengas?",
      additionalCommentsNote: "Estos comentarios nos ayudarán a preparar mejor nuestra propuesta para ti.",
      summary: "Resumen de tu solicitud",
      name: "Nombre:",
      email: "Correo:",
      company: "Empresa:",
      plan: "Plan:",
    },
    buttons: {
      previous: "Anterior",
      next: "Siguiente",
      submit: "Enviar solicitud",
    },
    success: {
      title: "¡Gracias por contactarnos!",
      message: "Hemos recibido tu mensaje. Nuestro equipo se pondrá en contacto contigo pronto.",
      button: "Enviar otro mensaje",
    },
  },
},
calculator:{
  header: {
    title: "Calculadora de Impacto AI",
    description:
      "Descubre cuánto valor puede generar un agente AI en tu eCommerce. Cálculos basados en datos reales de la industria.",
    tags: [
      { label: "mejora en conversión", highlight: "+12%" },
      { label: "tickets automatizados", highlight: "66%" },
      { label: "aumento en AOV", highlight: "+5%" },
    ],
  },
  chartData:{
    ingresosExtra: "Ingresos Extra",
    ahorroSoporte: "Ahorro en Soporte",
    mejoraConversion: "Mejora Conversión",
    aumentoAOV: "Aumento AOV",
  }
  ,
  form: {
    title: "Datos de tu eCommerce",
    traffic: {
      label: "Tráfico Mensual Promedio",
      unit: "visitantes/mes",
      minLabel: "1K",
      maxLabel: "500K",
    },
    conversionRate: {
      label: "Tasa de Conversión Actual",
      unit: "%",
    },
    aov: {
      label: "Ticket Promedio de Venta (AOV)",
      unit: "$",
    },
    numAgents: {
      label: "Número de Agentes de Soporte",
    },
    costPerAgent: {
      label: "Costo Mensual por Agente",
      unit: "$",
    },
  },
  results: {
    annualImpact: {
      title: "Impacto Anual Estimado",
      subtitle: "en valor adicional generado por año",
    },
    monthlyBreakdown: {
      title: "Desglose Mensual",
      extraRevenue: "Ingresos Extra",
      supportSavings: "Ahorro en Soporte",
      totalMonthly: "Total Mensual",
    },
    detailedBreakdown: {
      title: "Desglose Detallado",
      currentRevenue: "Ingresos actuales (mensual):",
      aiRevenue: "Ingresos con AI (mensual):",
      conversionGain: "Mejora por conversión (+12%):",
      aovGain: "Mejora por AOV (+5%):",
      supportAutomation: "Ahorro soporte (66% automatizado):",
    },
  },
  cta: {
    button: "Quiero automatizar mi eCommerce con AI",
    disclaimer: "* Cálculos basados en promedios de la industria y casos de éxito reales",
  },
},
cta_section: {
  title: "Experiencia de usuario conversacional",
  subtitle:
    "Nuestros agentes de IA ofrecen una interfaz intuitiva y natural que se adapta a las necesidades de tus clientes en cualquier dispositivo.",
  platforms: ["Móvil", "Escritorio", "Apps", "Chat"],
  button: "Transforma tu eCommerce",
  demoButton: "Ver demo",
  inputPlaceholder: "Escribe tu pregunta aquí...",
  chat_demo: {
    user1: "Busco una cámara para fotografía de paisajes",
    ai1: [
      "¡Claro! Para fotografía de paisajes recomiendo cámaras con buen rango dinámico y alta resolución.",
      "¿Tienes alguna preferencia de marca o presupuesto?"
    ],
    user2: "Me gustan las Sony y tengo un presupuesto de unos 1500€",
    ai2: [
      "Excelente elección. Sony tiene opciones perfectas para paisajes en ese rango.",
      "Te muestro las más recomendadas:"
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
    productImagePlaceholder: "Imagen"
  }
}
,

footer: {
  description: "Plataforma de inteligencia artificial para potenciar tu eCommerce, mejorar la atención al cliente y aumentar conversiones.",
  product: {
    title: "Producto",
    links: ["Planes", "API", "Integraciones", "Demo"]
  },
  resources: {
    title: "Recursos",
    links: ["Documentación", "Soporte", "Guías", "Blog"]
  },
  company: {
    title: "Compañía",
    links: ["Sobre nosotros", "Contacto", "Carreras", "Política de privacidad"]
  },
  copyright: "© {{year}} AI eCommerce. Todos los derechos reservados."
}

}


