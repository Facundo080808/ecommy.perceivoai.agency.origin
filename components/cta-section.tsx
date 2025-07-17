"use client"

import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { MessageSquare, Smartphone, Laptop, ShoppingBag, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import React from "react"

export function CTASection() {
  const { t } = useI18n()

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>
      <div className="container relative z-20">
        
          <motion.div
            className="max-w-5xl mx-auto bg-gradient-to-r from-blue-950 to-gray-900 rounded-2xl p-12 relative overflow-hidden"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-blue-500/5"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <AnimatedText
                  text={t("cta.title")}
                  className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
                  as="h2"
                />
                <motion.p
                  className="text-lg text-gray-300 mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                   
                >
                  {t("cta.subtitle")}
                </motion.p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {(t("cta.platforms") as string[]).map((text, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 bg-blue-900/30 px-3 py-2 rounded-full"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                       
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                    >
                      {[Smartphone, Laptop, ShoppingBag, MessageSquare][index % 4] && (
                        <div className="h-4 w-4 text-blue-400">
                          {React.createElement([Smartphone, Laptop, ShoppingBag, MessageSquare][index % 4], {
                            size: 16,
                          })}
                        </div>
                      )}
                      <span className="text-sm font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                   
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center gap-2">
                        {t("cta.button")}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-blue-500"
                        initial={{ x: "100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Button size="lg" variant="outline" className="relative overflow-hidden group">
                      <span className="relative z-10">{t("cta.demoButton")}</span>
                      <motion.span
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                 
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-xl">
                  <div className="border-b border-gray-800 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-600 p-1.5 rounded-md">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">Asistente AI</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-700"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-700"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white text-sm rounded-lg rounded-tr-none p-3 max-w-[80%]">
                        Busco una cámara para fotografía de paisajes
                      </div>
                    </div>

                    <div className="flex">
                      <div className="bg-gray-800 text-white text-sm rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        <p>
                          ¡Claro! Para fotografía de paisajes recomiendo cámaras con buen rango dinámico y alta
                          resolución.
                        </p>
                        <p className="mt-2">¿Tienes alguna preferencia de marca o presupuesto?</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white text-sm rounded-lg rounded-tr-none p-3 max-w-[80%]">
                        Me gustan las Sony y tengo un presupuesto de unos 1500€
                      </div>
                    </div>

                    <div className="flex">
                      <div className="bg-gray-800 text-white text-sm rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        <p>Excelente elección. Sony tiene opciones perfectas para paisajes en ese rango.</p>
                        <p className="mt-2">Te muestro las más recomendadas:</p>
                      </div>
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                      {[1, 2].map((item) => (
                        <motion.div
                          key={item}
                          className="flex-shrink-0 w-40 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden"
                          whileHover={{ y: -3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="h-24 bg-gray-800 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
                              Imagen
                            </div>
                          </div>
                          <div className="p-2">
                            <h4 className="text-xs font-medium truncate">
                              Sony Alpha A{item === 1 ? "7 III" : "6600"}
                            </h4>
                            <p className="text-blue-400 text-xs font-bold">{item === 1 ? "1.799,00€" : "1.399,00€"}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-gray-800 flex gap-2">
                      <input
                        type="text"
                        placeholder="Escribe un mensaje..."
                        className="flex-1 bg-gray-800 border-none rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-8 w-8 p-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        
      </div>
    </section>
  )
}
