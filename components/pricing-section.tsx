"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedCard } from "@/components/ui/animated-card"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"

export function PricingSection() {
  const { t } = useI18n()
  return (
    <section id="precios" className="py-20 bg-gray-950 relative ">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className=" relative z-20">
        <div className="text-center mb-16">
          <AnimatedText text={ t("pricing_section.title")} className="text-3xl md:text-4xl font-bold mb-4" as="h2" />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t("pricing_section.subtitle")}
          </motion.p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">


          {/* Tarjeta Set Up */}
          <AnimatedCard delay={0.1}>
            <PricingCard
              title={t("pricing_section.plans[0].title")}
              price={t("pricing_section.plans[0].price")}
              priceNote={t("pricing_section.plans[0].priceNote")}
              description={t("pricing_section.plans[0].description")}
              features={t("pricing_section.plans[0].features")}
              buttonText={t("pricing_section.plans[0].buttonText")}
              buttonVariant="default"
              highlighted
              showRecommended
            />
          </AnimatedCard>

          {/* Tarjeta Fee mensual */}
          <AnimatedCard delay={0.3}>
            <PricingCard
              title={t("pricing_section.plans[1].title")}
              price={t("pricing_section.plans[1].price")}
              priceNote={t("pricing_section.plans[1].priceNote")}
              description={t("pricing_section.plans[1].description")}
              features={t("pricing_section.plans[1].features")}
              buttonText={t("pricing_section.plans[1].buttonText")}
              // buttonText="Solicitar Información"
              // buttonVariant="outline"
            />
          </AnimatedCard>
          <AnimatedCard delay={0.1}>
            <PricingCard
             title={t("pricing_section.plans[2].title")}
              price={t("pricing_section.plans[2].price")}
              priceNote={t("pricing_section.plans[2].priceNote")}
              description={t("pricing_section.plans[2].description")}
              features={t("pricing_section.plans[2].features")}
              buttonText={t("pricing_section.plans[2].buttonText")}
              buttonVariant="default"
              highlighted
              showRecommended
            />
          </AnimatedCard>
          <AnimatedCard delay={0.3}>
            <PricingCard
              title={t("pricing_section.plans[3].title")}
              price={t("pricing_section.plans[3].price")}
              priceNote={t("pricing_section.plans[3].priceNote")}
              description={t("pricing_section.plans[3].description")}
              features={t("pricing_section.plans[3].features")}
              buttonText={t("pricing_section.plans[3].buttonText")}
              // buttonText="Solicitar Información"
              // buttonVariant="outline"
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
  priceNote: string
  description: string
  features: string[]
  buttonText?: string
  buttonVariant?: "default" | "outline"
  highlighted?: boolean
  showRecommended?: boolean
}

function PricingCard({
  title,
  price,
  priceNote,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
  showRecommended = false,
}: PricingCardProps) {
  return (
    <motion.div
      className={`bg-gray-900 border ${
        highlighted ? "border-blue-500" : "border-gray-800"
      } rounded-xl p-8 relative`}
      whileHover={{
        y: -10,
        boxShadow: highlighted
          ? "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
          : "0 25px 50px -12px rgba(59, 130, 246, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      {showRecommended && (
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
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="text-3xl font-bold mb-2">
          {price} <span className="text-sm text-gray-400 font-normal">{priceNote}</span>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className={`${highlighted ? "bg-blue-500/20" : "bg-gray-800"} p-1 rounded-full`}>
                <Check className={`h-3 w-3 ${highlighted ? "text-blue-500" : "text-gray-400"}`} />
              </div>
            </div>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      {buttonText&&buttonVariant&&<Button
        variant={buttonVariant}
        className={`w-full ${highlighted && buttonVariant === "default" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
      >
        {buttonText}
      </Button>}
    </motion.div>
  )
}
