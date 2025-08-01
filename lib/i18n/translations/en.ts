import { LocaleLanguaje } from "./translationType";

export const en : LocaleLanguaje = {
 header: {
  inicio: "Home",
  caracteristicas: "Features",
  comoFunciona: "How It Works",
  tecnologia: "Technology",
  capacidades: "Capabilities",
  beneficios: "Benefits",
  precios: "Pricing",
  contacto: "Contact",
  iniciarSesion: "Sign In",
  solicitarDemo: "Request Demo",
},


 hero_section: {
  subtitle: "Automate your online store with intelligent agents that chat and convert.",
  demoButton: "Request demo",
  featuresButton: "View features",
  stats: [
    { icon: "TrendingUp", value: "35%", label: "Increase in conversions" },
    { icon: "Zap", value: "24/7", label: "Automated support" },
    { icon: "Brain", value: "500+", label: "Active stores" },
  ],
  trust: [
    { label: "Enterprise ready", color: "green" },
    { label: "SOC 2 compliant", color: "blue" },
    { label: "99.9% uptime", color: "purple" },
  ],
  demo: {
    messages: [
      {
        role: "user",
        content: "I'm looking for a good quality digital camera",
      },
      {
        role: "assistant",
        content:
          "Perfect! Our AI can help you find the ideal camera. Do you prefer a professional one or something more compact for daily use?",
      },
      {
        role: "user",
        content: "I'm looking for something professional but easy to use",
      },
    ],
    products: [
      {
        name: "Sony Alpha A7 III",
        price: "€1,799.00",
        image: "/placeholder.svg?height=100&width=100",
        specs: ["Full Frame Sensor", "24.2MP", "4K Video", "5-axis Stabilization"],
      },
      {
        name: "Canon EOS R6",
        price: "€2,499.00",
        image: "/placeholder.svg?height=100&width=100",
        specs: ["Full Frame Sensor", "20.1MP", "4K Video", "Dual Pixel Autofocus"],
      },
    ],
  },
},
free_trial_section: {
  badge: "Limited offer",
  title: "7-Day Free Trial",
  subtitle: "Try it with no commitment. Cancel anytime.",
  button: "Start now",
  features: [
    {
      icon: "Code",
      title: "Full API",
      description: "Access the complete API of our AI agents",
    },
    {
      icon: "BarChart3",
      title: "eCommerce Integration",
      description: "Compatible with Shopify, WooCommerce, Magento",
    },
    {
      icon: "Truck",
      title: "Advanced Tracking",
      description: "Real-time order tracking",
    },
    {
      icon: "Shield",
      title: "No commitment",
      description: "Cancel anytime without penalties",
    },
  ],
  heading: {
    main: "Free Trial of",
    highlight: "7 Days",
  },
  description: "Experience the power of AI agents in your eCommerce. <strong> No credit card, no commitment.</strong>",
  whats_included_title: "Your free trial includes:",
  whats_included_items: [
    "Up to 100 AI conversations",
    "Full integration with your platform: API, eCommerce platforms and tracking",
    "Technical support 09:00 to 18:30 (-3 GMT)",
    "Custom setup"
  ],
  benefits: [
    "Setup in less than 7 business days",
    "No credit card required",
    "Cancel anytime"
  ],
  timer: {
    days_free: "days completely free"
  },
  cta_button: "Start Free Trial",
  trust_text: "Join over 500+ companies already trusting us",
  integrations_title: "Instant integration with:",
  integrations_list: ["Shopify", "WooCommerce", "Magento", "PrestaShop", "DHL", "FedEx"]
}
,

features_section: {
  title: "Key Features",
  subtitle: "Our AI agents transform the shopping experience in your online store",
  features: [
    {
      icon: "Search",
      title: "Search Optimization",
      description:
        "Precise and relevant results based on user intent, not just keywords.",
    },
    {
      icon: "TrendingUp",
      title: "Conversion Boost",
      description:
        "Proven increase in conversion rates thanks to personalized recommendations.",
    },
    {
      icon: "MessageSquare",
      title: "Support Automation",
      description:
        "24/7 assistance to answer questions and guide customers through their purchase journey.",
    },
  ],
},
how_it_works_section: {
  title: "How It Works",
  subtitle: "A conversational shopping experience that guides your customers from search to purchase",
  video_title: "KreadoresPro Demo",
},
technology_section: {
  title: "Advanced Technology",
  subtitle: "Powered by the latest advancements in artificial intelligence and natural language processing",
  items: [
    {
      title: "Contextual Language Model",
      description: "Understands the context and intent behind user queries to deliver accurate answers.",
    },
    {
      title: "Semantic Search Engine",
      description: "Goes beyond keywords to grasp the meaning and intent of searches.",
    },
    {
      title: "Hybrid Recommendation System",
      description: "Combines behavioral analysis and preferences to offer personalized recommendations.",
    },
    {
      title: "Advanced Product Search",
      description: "Smart filtering that helps users find exactly what they’re looking for.",
    },
    {
      title: "Tracking API Integration",
      description: "Real-time connection with shipping providers for up-to-date order tracking.",
    },
  ],
},
capabilities_section: {
  title: "Capabilities",
  subtitle: "Discover everything our AI agents can do for your online store",
  capabilities: [
    {
      title: "Personalized Recommendations",
      description: "Suggestions based on user preferences and behavior.",
    },
    {
      title: "Smart Comparison",
      description: "Side-by-side product analysis to simplify decisions.",
    },
    {
      title: "Conversational Assistant",
      description: "Natural interaction that guides the buying process.",
    },
    {
      title: "Order Tracking",
      description: "Real-time information about order status.",
    },
  ],
  footerText: "Our AI agents continuously learn to deliver an increasingly personalized experience",
},
benefits_section: {
  title: "Benefits",
  subtitle: "Advantages for your business and your customers",
  ecommerce: {
    title: "For eCommerce",
    items: [
      "Improved user experience",
      "Reduced cart abandonment",
      "Increased conversion rate",
      "Higher customer satisfaction",
      "Lower human support workload",
    ],
  },
  user: {
    title: "For Users",
    items: [
      "Intuitive and conversational experience",
      "Quick access to detailed information",
      "Simplified checkout process",
      "Efficient order tracking",
      "24/7 assistance available",
    ],
  },
},
integration_section: {
  title: "Integrations",
  subtitle: "Compatible with the main eCommerce platforms and shipping services",
  categories: {
    ecommerce: {
      title: "eCommerce Platforms",
      platforms: ["Shopify", "WooCommerce", "Magento", "PrestaShop", "Jumpseller", "BigCommerce"],
    },
    shipping: {
      title: "Shipping Services",
      platforms: ["DHL", "FedEx", "UPS", "Correos", "Blue envíos", "GLS"],
    },
  },
  cta: "View all integrations",
  stepsTitle: "Integration in 3 simple steps",
  steps: [
    {
      step: "01",
      title: "We connect your platform",
      description: "We integrate your existing online store via API.",
    },
    {
      step: "02",
      title: "We customize your assistant",
      description: "We configure your AI agent’s behavior and appearance to match your needs.",
    },
    {
      step: "03",
      title: "We launch and monitor",
      description: "We deploy your personalized assistant and analyze its performance in real time.",
    },
  ],
  support: "Need help with integration? Our support team is available from 09:00 to 19:00 (-3 GMT) to assist you throughout the process.",
  highlights: ["Shopify", "WooCommerce", "Magento", "DHL", "FedEx", "UPS"],
},
roi_calculator_section: {
  title: "AI Impact Calculator",
  subtitle: "Discover how much value an AI agent can generate for your eCommerce. Calculations based on real industry data.",
  form: {
    sectionTitle: "Your eCommerce Data",
    fields: {
      traffic: {
        label: "Average Monthly Traffic",
        hint: "visitors/month",
        min: "1K",
        max: "500K",
      },
      conversionRate: {
        label: "Current Conversion Rate",
        suffix: "%",
      },
      aov: {
        label: "Average Order Value (AOV)",
        prefix: "$",
      },
      numAgents: {
        label: "Number of Support Agents",
      },
      costPerAgent: {
        label: "Monthly Cost per Agent",
        prefix: "$",
      },
    },
  },
  results: {
    impactTitle: "Estimated Annual Impact",
    impactSubtitle: "in additional value generated per year",
    monthlyBreakdownTitle: "Monthly Breakdown",
    monthly: {
      extraRevenue: "Extra Revenue",
      supportSavings: "Support Savings",
      totalMonthly: "Total Monthly",
    },
    detailedBreakdownTitle: "Detailed Breakdown",
    details: {
      currentRevenue: "Current revenue (monthly):",
      aiRevenue: "Revenue with AI (monthly):",
      gainConversion: "Conversion improvement (+12%):",
      gainAOV: "AOV improvement (+5%):",
      supportSavings: "Support savings (60% automated):",
      uplift: "AI_Conversion_Uplift(12%):",
      // ticketResolutionRate: "AI_Ticket_Resolution_Rate(66%):",
      // aovIncrease: "AI_AOV_Increase (5%):",
    },
  },
  charts: {
    barChart: {
      extraRevenue: "Extra Revenue",
      supportSavings: "Support Savings",
    },
    pieChart: {
      gainConversion: "Conversion Gain",
      gainAOV: "AOV Increase",
      supportSavings: "Support Savings",
    },
  },
  cta: "I want to automate my eCommerce with AI",
  disclaimer: "* Calculations based on industry averages and real success cases",
},
pricing_section: {
  title: "Plans and Pricing",
  subtitle: "Flexible solutions that adapt to your business needs",
  plans: [
    {
      type: "Set Up",
      title: "Set Up or Custom Implementation",
      price: "$2500 USD",
      priceNote: "net",
      description: "Complete solution for your eCommerce",
      features: [
        "Conversational AI assistant",
        "Product search",
        "Basic recommendations",
        "Up to 30k interactions/month",
        "Personalized recommendations",
        "Product comparison",
        "Full customization",
        "Full API integration",
        "Interaction history with the AI agent",
        "Email support",
      ],
      buttonText: "Request Implementation",
      highlighted: true,
      showRecommended: true,
    },
    {
      type: "Monthly Fee",
      title: "Monthly Fee",
      price: "$1490 USD",
      priceNote: "net per month",
      description: "Recurring cost to keep your solution active",
      features: [
        "Duration: 1 month (auto-renewable)",
        "8 hours/month of included support",
        "Response SLA: 6 hours from receipt",
        "Coverage hours: Monday–Friday, 09:00–18:00 (GMT -3)",
        "LLM Token",
        "Database",
        "Embedding",
        "RAG",
        "extra hour rate: $30 USD/hr"
      ],
      // buttonText: "Request Information",
      // buttonVariant: "outline",
    },
    {
      type: "Set Up",
      title: "Set Up or Custom Implementation",
      price: "$5000 USD",
      priceNote: "net",
      description: "Complete solution for your eCommerce",
      features: [
        "Conversational AI assistant",
        "Product search",
        "Basic recommendations",
        "Up to 30k interactions/month",
        "Personalized recommendations",
        "Product comparison",
        "Full customization",
        "Full API integration",
        "Interaction history with the AI agent",
        "Email support",
      ],
      buttonText: "Request Implementation",
      highlighted: true,
      showRecommended: true,
    },
    {
      type: "Monthly Fee",
      title: "Monthly Fee",
      price: "$990 USD",
      priceNote: "net per month",
      description: "Recurring cost to keep your solution active",
      features: [
        "Duration: 1 month (auto-renewable)",
        "8 hours/month of included support",
        "Response SLA: 6 hours from receipt",
        "Coverage hours: Monday–Friday, 09:00–18:00 (GMT -3)",
        "LLM Token",
        "Database",
        "Embedding",
        "RAG",
        "extra hour rate: $30 USD/hr"
      ],
      // buttonText: "Request Information",
      // buttonVariant: "outline",
    },
  ],
},
secondary_hero_section: {
  title: "Transform your customers' experience",
  subtitle: "Join leading companies already leveraging artificial intelligence to revolutionize their eCommerce.",
  highlights: [
    "Implementation in less than 7 business days",
    "30-day satisfaction guarantee",
    "Personalized technical support",
    "More than 500 satisfied clients",
  ],
  ctaPrimary: {
    text: "Try it 7 days - API only",
    icon: "ArrowRight",
  },
  ctaSecondary: {
    text: "Talk to an expert",
  },
  apiFeaturesTitle: "Full access to eCommerce and tracking platforms",
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
      title: "Full API",
      description: "Documentation and SDKs",
      icon: "Code",
      color: "purple",
    },
  ],
  stats: [
    { value: "98%", label: "Satisfaction" },
    { value: "35%", label: "Increase in conversions" },
    { value: "24/7", label: "Support available" },
    { value: "500+", label: "Active clients" },
  ],
},
contact: {
  title: "Ready to get started?",
  subtitle: "Tell us about your project and we’ll help you choose the best solution",
  form: {
    title: "Contact form",
    step1: {
      title: "Tell us about yourself",
      name: "Full name",
      email: "Email address",
      company: "Company",
    },
    step2: {
      title: "Which plan are you interested in?",
      basic: {
        title: "Basic Plan",
        description: "Ideal for small online stores",
        price: "€99/month",
      },
      professional: {
        title: "Professional Plan",
        description: "For growing stores",
        price: "€249/month",
      },
      enterprise: {
        title: "Enterprise Plan",
        description: "For large eCommerces",
        price: "Custom",
      },
    },
    step3: {
      title: "Anything else you'd like to tell us?",
      message: "Message (optional)",
      additionalComments: "Additional comments",
      additionalCommentsHelp: "Any specific needs or questions you have?",
      additionalCommentsNote: "These comments will help us better prepare our proposal for you.",
      summary: "Summary of your request",
      name: "Name:",
      email: "Email:",
      company: "Company:",
      plan: "Plan:",
    },
    buttons: {
      previous: "Previous",
      next: "Next",
      submit: "Send request",
    },
    success: {
      title: "Thank you for contacting us!",
      message: "We have received your message. Our team will get back to you soon.",
      button: "Send another message",
    },
  },
},
cta_section: {
  title: "Conversational user experience",
  subtitle:
    "Our AI agents provide an intuitive and natural interface that adapts to your customers’ needs on any device.",
  platforms: ["Mobile", "Desktop", "Apps", "Chat"],
  button: "Transform your eCommerce",
  demoButton: "View demo",
  inputPlaceholder: "Type your question here...",
  chat_demo: {
    user1: "I’m looking for a camera for landscape photography",
    ai1: [
      "Of course! For landscape photography, I recommend cameras with good dynamic range and high resolution.",
      "Do you have any brand preference or budget?"
    ],
    user2: "I like Sony and my budget is around €1500",
    ai2: [
      "Great choice. Sony has perfect options for landscapes in that price range.",
      "Here are the most recommended ones:"
    ],
    products: [
      {
        name: "Sony Alpha A7 III",
        price: "€1,799.00"
      },
      {
        name: "Sony Alpha A6600",
        price: "€1,399.00"
      }
    ],
    productImagePlaceholder: "Image"
  }
}
,

footer: {
  description: "Artificial intelligence platform to empower your eCommerce, improve customer service, and increase conversions.",
  product: {
    title: "Product",
    links: ["Plans", "API", "Integrations", "Demo"]
  },
  resources: {
    title: "Resources",
    links: ["Documentation", "Support", "Guides", "Blog"]
  },
  company: {
    title: "Company",
    links: ["About Us", "Contact", "Careers", "Privacy Policy"]
  },
  copyright: "© {{year}} AI eCommerce. All rights reserved."
}

}
