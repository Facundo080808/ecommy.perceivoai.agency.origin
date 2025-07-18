"use client"

import { ChatInterface } from "@/components/chat-interface"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"


export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-black relative ">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>
      <div className=" relative z-20">

          <div className="text-center mb-16">
            <AnimatedText text="Cómo Funciona" className="text-3xl md:text-4xl font-bold mb-4" as="h2" />
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              
            >
              Una experiencia de compra conversacional que guía a sus clientes desde la búsqueda hasta la compra
            </motion.p>
          </div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
           
          >
            <motion.div
              className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <ChatInterface
                messages={[
                  {
                    role: "user",
                    content: "Hola, estoy buscando una cámara para fotografía de paisajes",
                  },
                  {
                    role: "assistant",
                    content:
                      "¡Hola! Para fotografía de paisajes, recomiendo cámaras con buen rango dinámico y alta resolución. ¿Tienes alguna preferencia de marca o presupuesto?",
                  },
                  {
                    role: "user",
                    content: "Me gustan las Sony y tengo un presupuesto de unos 1500€",
                  },
                  {
                    role: "assistant",
                    content:
                      "Excelente elección. Sony tiene excelentes opciones para fotografía de paisajes. Basado en tu presupuesto, te recomiendo estas opciones:",
                  },
                ]}
                productRecommendations={[
                  {
                    name: "Sony Alpha A7 III",
                    price: "1.799,00€",
                    image: "/placeholder.svg?height=150&width=150",
                    specs: ["Sensor Full Frame", "24.2MP", "ISO 100-51200", "Estabilización de 5 ejes"],
                  },
                  {
                    name: "Sony Alpha A6600",
                    price: "1.399,00€",
                    image: "/placeholder.svg?height=150&width=150",
                    specs: ["Sensor APS-C", "24.2MP", "ISO 100-32000", "Estabilización de 5 ejes"],
                  },
                ]}
                showSidebar={true}
                showCart={true}
              />
            </motion.div>
          </motion.div>

      </div>
    </section>
  )
}
