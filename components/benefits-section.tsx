"use client"

import { Check } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="container relative z-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <AnimatedText text="Beneficios" className="text-3xl md:text-4xl font-bold mb-4" as="h2" />
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ventajas para su negocio y para sus clientes
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1} direction="left">
            <motion.div
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-full"
              whileHover={{
                borderColor: "rgba(59, 130, 246, 0.5)",
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold mb-6 text-blue-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Para el eCommerce
              </motion.h3>
              <AnimatedList>
                <AnimatedListItem>
                  <BenefitItem text="Mejora en experiencia del usuario" />
                </AnimatedListItem>
                <AnimatedListItem>
                  <BenefitItem text="Reducción del abandono del carrito" />
                </AnimatedListItem>
                <AnimatedListItem>
                  <BenefitItem text="Incremento en tasa de conversión" />
                </AnimatedListItem>
                <AnimatedListItem>
                  <BenefitItem text="Mayor satisfacción del cliente" />
                </AnimatedListItem>
                <AnimatedListItem>
                  <BenefitItem text="Menor carga en atención humana" />
                </AnimatedListItem>
              </AnimatedList>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <motion.div
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-full"
              whileHover={{
                borderColor: "rgba(59, 130, 246, 0.5)",
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold mb-6 text-blue-500"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Para el Usuario
              </motion.h3>
              <AnimatedList>
                <AnimatedListItem>
                  <BenefitItem text="Experiencia intuitiva y conversacional" />
                </AnimatedListItem>
                <AnimatedListItem>
                  <BenefitItem text="Acceso rápido a información detallada" />
                </AnimatedListItem>
                <AnimatedListItem>
                  <BenefitItem text="Proceso de checkout simplificado" />
                </AnimatedListItem>
                <AnimatedListItem>
                  <BenefitItem text="Seguimiento eficiente de pedidos" />
                </AnimatedListItem>
                <AnimatedListItem>
                  <BenefitItem text="Asistencia disponible 24/7" />
                </AnimatedListItem>
              </AnimatedList>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">
        <motion.div
          className="bg-blue-500/20 p-1 rounded-full"
          whileHover={{ scale: 1.2, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Check className="h-4 w-4 text-blue-500" />
        </motion.div>
      </div>
      <span className="text-gray-200">{text}</span>
    </div>
  )
}
