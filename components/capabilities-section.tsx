"use client"

import React from "react"

import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ThumbsUp, BarChart2, MessageSquare, Truck } from "lucide-react"

export function CapabilitiesSection() {
  return (
    <section id="capacidades" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>

      {/* Círculos de fondo animados */}
      <motion.div
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blue-800/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container relative z-20 overflow-hidden">
        <ScrollReveal>
          <div className="text-center mb-16">
            <AnimatedText text="Capacidades" className="text-3xl md:text-5xl font-bold mb-4" as="h2" />
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Descubra todo lo que nuestros agentes AI pueden hacer por su tienda online
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-visible">
          {[
            {
              title: "Recomendaciones Personalizadas",
              description: "Sugerencias basadas en preferencias y comportamiento del usuario.",
              icon: ThumbsUp,
              color: "from-blue-600 to-blue-400",
              delay: 0.1,
            },
            {
              title: "Comparación Inteligente",
              description: "Análisis lado a lado de productos para facilitar decisiones.",
              icon: BarChart2,
              color: "from-indigo-600 to-indigo-400",
              delay: 0.2,
            },
            {
              title: "Asistente Conversacional",
              description: "Interacción natural que guía el proceso de compra.",
              icon: MessageSquare,
              color: "from-purple-600 to-purple-400",
              delay: 0.3,
            },
            {
              title: "Seguimiento de Envíos",
              description: "Información en tiempo real sobre el estado de pedidos.",
              icon: Truck,
              color: "from-cyan-600 to-cyan-400",
              delay: 0.4,
            },
          ].map((capability, index) => (
            <ScrollReveal key={index} delay={capability.delay}>
              <CapabilityCard
                title={capability.title}
                description={capability.description}
                icon={<capability.icon />}
                colorClass={capability.color}
              />
            </ScrollReveal>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            Nuestros agentes AI aprenden continuamente para ofrecer una experiencia cada vez más personalizada
          </p>
          <div className="flex justify-center gap-2">
            <motion.div
              className="h-2 w-16 bg-blue-500 rounded-full"
              animate={{ width: [16, 64, 16] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="h-2 w-8 bg-indigo-500 rounded-full"
              animate={{ width: [8, 32, 8] }}
              transition={{ duration: 2, delay: 0.3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="h-2 w-24 bg-purple-500 rounded-full"
              animate={{ width: [24, 96, 24] }}
              transition={{ duration: 2, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="h-2 w-12 bg-cyan-500 rounded-full"
              animate={{ width: [12, 48, 12] }}
              transition={{ duration: 2, delay: 0.9, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface CapabilityCardProps {
  title: string
  description: string
  icon: React.ReactNode
  colorClass: string
}

function CapabilityCard({ title, description, icon, colorClass }: CapabilityCardProps) {
  return (
    <motion.div
      className="h-full rounded-xl overflow-hidden relative group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br border border-gray-800 rounded-xl overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />
      </div>

      <div className="relative z-10 p-6 bg-gray-900 border border-gray-800 rounded-xl h-full flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <motion.div
            className={`p-3 rounded-lg bg-gradient-to-br ${colorClass}`}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 text-white" })}
          </motion.div>

          <motion.div
            className="h-1 w-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-700"
            whileHover={{ width: 64 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.h3
          className="text-xl font-bold mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          <div className={`h-0.5 w-full bg-gradient-to-r ${colorClass} rounded-full`} />
        </motion.div>
      </div>
    </motion.div>
  )
}
