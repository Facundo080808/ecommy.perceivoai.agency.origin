"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Users, Code, BarChart3, Truck } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import Link from "next/link"


export function SecondaryHeroSection() {
  const {t} = useI18n()
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative ">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-green-500/10 blur-3xl animate-pulse" />
      </div>

      <div className=" relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t("secondary_hero_section.title")}
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent block mt-2">
                hoy mismo
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t("secondary_hero_section.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
           
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {[
              { icon: Zap, text: t("secondary_hero_section.highlights[0]") },
              { icon: ShieldCheck, text:  t("secondary_hero_section.highlights[1]") },
              { icon: MessageSquare, text:  t("secondary_hero_section.highlights[2]") },
              { icon: Users, text:  t("secondary_hero_section.highlights[3]") },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-3"
              >
                <div className="bg-blue-500/20 p-1.5 rounded-full">
                  <item.icon className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-sm text-gray-200">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <Link href="#contacto" >
                 <Button
                // onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  { t("secondary_hero_section.ctaPrimary.text")}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                </Button>
             </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contacto" >
                <Button
                // onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 text-white hover:bg-gray-800/50 backdrop-blur-sm px-8 py-4 text-lg bg-transparent"
              >
                { t("secondary_hero_section.ctaSecondary.text")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* API Features highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
           
            className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-12"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Code className="h-6 w-6 text-blue-400" />
             { t("secondary_hero_section.apiFeaturesTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
              >
                <BarChart3 className="h-8 w-8 text-blue-400" />
                <div>
                  <h4 className="font-semibold text-white">{ t("secondary_hero_section.apiFeatures[0].title")}</h4>
                  <p className="text-sm text-gray-400">{ t("secondary_hero_section.apiFeatures[0].description")}</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4"
              >
                <Truck className="h-8 w-8 text-green-400" />
                <div>
                  <h4 className="font-semibold text-white">{ t("secondary_hero_section.apiFeatures[1].title")}</h4>
                  <p className="text-sm text-gray-400">{ t("secondary_hero_section.apiFeatures[1].description")}</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4"
              >
                <Code className="h-8 w-8 text-purple-400" />
                <div>
                  <h4 className="font-semibold text-white">{ t("secondary_hero_section.apiFeatures[2].title")}</h4>
                  <p className="text-sm text-gray-400">{ t("secondary_hero_section.apiFeatures[2].description")}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
             
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "98%", label: t("secondary_hero_section.stats[0].label") },
              { value: "35%", label:  t("secondary_hero_section.stats[1].label")  },
              { value: t("secondary_hero_section.stats[2].value"), label:  t("secondary_hero_section.stats[2].label")  },
              { value: t("secondary_hero_section.stats[3].value") , label:  t("secondary_hero_section.stats[3].label")  },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
