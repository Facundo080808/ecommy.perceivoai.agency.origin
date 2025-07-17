"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Users, Code, BarChart3, Truck } from "lucide-react"
import { motion } from "framer-motion"

export function SecondaryHeroSection() {
  // const scrollToContact = () => {
  //   const contactElement = document.querySelector("#contacto")
  //   if (contactElement) {
  //     const headerOffset = 80
  //     const elementPosition = contactElement.getBoundingClientRect().top
  //     const offsetPosition = elementPosition + window.pageYOffset - headerOffset

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     })
  //   }
  // }

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-green-500/10 blur-3xl animate-pulse" />
      </div>

      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Transforma la experiencia de tus clientes
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent block mt-2">
                hoy mismo
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Únete a las empresas líderes que ya están aprovechando el poder de la inteligencia artificial para
              revolucionar su eCommerce.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
           
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {[
              { icon: Zap, text: "Implementación en menos de 24 horas" },
              { icon: ShieldCheck, text: "Garantía de satisfacción de 30 días" },
              { icon: MessageSquare, text: "Soporte técnico personalizado" },
              { icon: Users, text: "Más de 500 clientes satisfechos" },
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
              <Button
                // onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Pruébalo 7 días - Solo API
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                // onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 text-white hover:bg-gray-800/50 backdrop-blur-sm px-8 py-4 text-lg bg-transparent"
              >
                Hablar con un experto
              </Button>
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
              Acceso completo a plataformas de eCommerce y tracking
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
              >
                <BarChart3 className="h-8 w-8 text-blue-400" />
                <div>
                  <h4 className="font-semibold text-white">eCommerce APIs</h4>
                  <p className="text-sm text-gray-400">Shopify, WooCommerce, Magento</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4"
              >
                <Truck className="h-8 w-8 text-green-400" />
                <div>
                  <h4 className="font-semibold text-white">Tracking APIs</h4>
                  <p className="text-sm text-gray-400">DHL, FedEx, UPS, Correos</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4"
              >
                <Code className="h-8 w-8 text-purple-400" />
                <div>
                  <h4 className="font-semibold text-white">API Completa</h4>
                  <p className="text-sm text-gray-400">Documentación y SDKs</p>
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
              { value: "98%", label: "Satisfacción" },
              { value: "35%", label: "Aumento en conversiones" },
              { value: "24/7", label: "Soporte disponible" },
              { value: "500+", label: "Clientes activos" },
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
