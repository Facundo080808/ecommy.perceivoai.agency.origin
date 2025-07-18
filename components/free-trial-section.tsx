"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Clock, CheckCircle, Zap, Shield, ArrowRight, Sparkles, Code, BarChart3, Truck } from "lucide-react"
import { useState } from "react"

export function FreeTrialSection() {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    {
      icon: Code,
      title: "API Completa",
      description: "Acceso total a nuestra API de agentes AI",
    },
    {
      icon: BarChart3,
      title: "Integración eCommerce",
      description: "Compatible con Shopify, WooCommerce, Magento",
    },
    {
      icon: Truck,
      title: "Tracking Avanzado",
      description: "Seguimiento en tiempo real de pedidos",
    },
    {
      icon: Shield,
      title: "Sin Compromiso",
      description: "Cancela cuando quieras, sin penalizaciones",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-950 via-gray-900 to-purple-950 relative h-auto">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 ">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container z-10 overflow-clip">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="h-4 w-4 text-green-400" />
              <span className="text-green-400 font-medium">Oferta Limitada</span>
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Prueba Gratuita de
              </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent ml-3">
                7 Días
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experimenta el poder de los agentes AI en tu eCommerce.
              <strong className="text-white"> Sin tarjeta de crédito, sin compromisos.</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    
                  >
                    <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 p-4 h-full hover:border-blue-500/50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                          <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* What's included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  Qué incluye tu prueba gratuita:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Hasta 100 conversaciones con AI",
                    "Integración completa con tu plataforma: API plataformas de eCommerce y tracking",
                    "Soporte técnico 09:00 a 18:30 (-3 GTM)", 
                    "Configuración personalizada",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right side - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            
            >
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border-gray-700 p-8 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl" />

                <div className="relative z-10">
                  {/* Timer */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <Clock className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      7
                    </div>
                    <div className="text-gray-400">días completamente gratis</div>
                  </motion.div>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: Zap, text: "Configuración en menos de 7 dias hábiles" },
                      { icon: Shield, text: "Sin tarjeta de crédito requerida" },
                      { icon: CheckCircle, text: "Cancela en cualquier momento" },
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="bg-green-500/20 p-1.5 rounded-full">
                          <benefit.icon className="h-4 w-4 text-green-400" />
                        </div>
                        <span className="text-gray-300">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                  >
                    <Button
                      // onClick={scrollToContact}
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 text-lg relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Comenzar Prueba Gratuita
                        <ArrowRight className={`h-5 w-5 transition-transform ${isHovered ? "translate-x-1" : ""}`} />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600"
                        initial={{ x: "100%" }}
                        animate={{ x: isHovered ? "0%" : "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Únete a más de 500+ empresas que ya confían en nosotros
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Bottom trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
           
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">Integración instantánea con:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Shopify", "WooCommerce", "Magento", "PrestaShop", "DHL", "FedEx"].map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.6, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                  
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-sm font-medium text-gray-300"
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
