"use client"

import type React from "react"
import { Search, TrendingUp, MessageSquare } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"

export function FeaturesSection() {
  const { t } = useI18n()
  return (
    <section id="caracteristicas" className="py-20 bg-gray-950 relative ">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className=" relative z-20">
          <div className="text-center mb-16">
            <AnimatedText text={t("features_section.title")} className="text-3xl md:text-4xl font-bold mb-4" as="h2" />
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
           
            >
              {t("features_section.subtitle")}
            </motion.p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard delay={0.1}>
            <FeatureCard
              icon={<Search className="h-10 w-10 text-blue-500" />}
              title={t("features_section.features[0].title")}
              description={t("features_section.features[0].description")}
            />
          </AnimatedCard>

          <AnimatedCard delay={0.3}>
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-blue-500" />}
              title={t("features_section.features[1].title")}
              description={t("features_section.features[1].description")}
            />
          </AnimatedCard>

          <AnimatedCard delay={0.5}>
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-blue-500" />}
              title={t("features_section.features[2].title")}
              description={t("features_section.features[2].description")}
            />
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-gray-900 border border-gray-800 rounded-xl p-8 transition-all h-full"
      whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="mb-6"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <motion.h3
        className="text-xl font-bold mb-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
