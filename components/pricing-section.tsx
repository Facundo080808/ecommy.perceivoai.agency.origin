"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedCard } from "@/components/ui/animated-card"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function PricingSection() {
  return (
    <section id="precios" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="container relative z-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <AnimatedText text="Planes y Precios" className="text-3xl md:text-4xl font-bold mb-4" as="h2" />
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Soluciones flexibles que se adaptan a las necesidades de su negocio
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard delay={0.1}>
            <PricingCard
              title="Básico"
              price="99€"
              description="Ideal para pequeñas tiendas online"
              features={[
                "Asistente AI conversacional",
                "Búsqueda de productos",
                "Recomendaciones básicas",
                "Hasta 1,000 conversaciones/mes",
                "Soporte por email",
              ]}
              buttonText="Comenzar Gratis"
              buttonVariant="outline"
            />
          </AnimatedCard>

          <AnimatedCard delay={0.3}>
            <PricingCard
              title="Profesional"
              price="249€"
              description="Para tiendas en crecimiento"
              features={[
                "Todo lo del plan Básico",
                "Recomendaciones personalizadas",
                "Comparación de productos",
                "Hasta 5,000 conversaciones/mes",
                "Integración con CRM",
                "Soporte prioritario",
              ]}
              buttonText="Solicitar Demo"
              buttonVariant="default"
              highlighted={true}
            />
          </AnimatedCard>

          <AnimatedCard delay={0.5}>
            <PricingCard
              title="Empresarial"
              price="Personalizado"
              description="Para grandes eCommerce"
              features={[
                "Todo lo del plan Profesional",
                "Conversaciones ilimitadas",
                "Personalización completa",
                "Integración API completa",
                "Análisis avanzado",
                "Soporte 24/7",
                "Gestor de cuenta dedicado",
              ]}
              buttonText="Contactar"
              buttonVariant="outline"
            />
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) {
  return (
    <motion.div
      className={`bg-gray-900 border ${
        highlighted ? "border-blue-500" : "border-gray-800"
      } rounded-xl p-8 ${highlighted ? "shadow-lg shadow-blue-500/20 relative" : ""} h-full`}
      whileHover={{
        y: -10,
        boxShadow: highlighted
          ? "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
          : "0 25px 50px -12px rgba(59, 130, 246, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      {highlighted && (
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          Recomendado
        </motion.div>
      )}
      <div className="text-center mb-6">
        <motion.h3
          className="text-xl font-bold mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        <motion.div
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
        >
          {price}
          <span className="text-sm text-gray-400 font-normal">/mes</span>
        </motion.div>
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </div>

      <motion.ul
        className="space-y-3 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 mt-1">
              <motion.div
                className={`${highlighted ? "bg-blue-500/20" : "bg-gray-800"} p-1 rounded-full`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Check className={`h-3 w-3 ${highlighted ? "text-blue-500" : "text-gray-400"}`} />
              </motion.div>
            </div>
            <span className="text-sm text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
        <Button
          variant={buttonVariant}
          className={`w-full ${highlighted && buttonVariant === "default" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
        >
          {buttonText}
        </Button>
      </motion.div>
    </motion.div>
  )
}
