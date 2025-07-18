"use client"

import { Button } from "@/components/ui/button"
import { ChatInterface } from "@/components/chat-interface"
import { TypewriterText } from "@/components/ui/typewriter-text"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { ArrowRight, Sparkles, Zap, TrendingUp, Brain } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const { t } = useI18n()
  const [titleComplete, setTitleComplete] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Neural network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 self-start"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-4 py-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-white text-sm font-medium">Powered by Advanced AI</span>
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            {/* Main title with typewriter */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                >
                  <TypewriterText text="AI Agents" speed={80} delay={500} onComplete={() => setTitleComplete(true)} />
                </motion.div>
                {titleComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white"
                  >
                    <TypewriterText text="for eCommerce" speed={60} delay={200} showCursor={false} />
                  </motion.div>
                )}
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: titleComplete ? 1 : 0, y: titleComplete ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-300 max-w-2xl"
              >
                <TypewriterText text={t("hero.subtitle")} speed={25} delay={1000} showCursor={false} />
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: TrendingUp, value: "35%", label: "Conversion Boost" },
                { icon: Zap, value: "24/7", label: "AI Support" },
                { icon: Brain, value: "500+", label: "Active Stores" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-500/30 backdrop-blur-sm">
                    <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                <Button
                  size="lg"
                  // onClick={scrollToContact}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 relative overflow-hidden group px-8 py-4 text-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t("hero.demoButton")}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-50"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  // onClick={scrollToContact}
                  className="border-2 border-blue-500/50 text-white hover:bg-blue-500/10 backdrop-blur-sm px-8 py-4 text-lg bg-transparent"
                >
                  {t("hero.featuresButton")}
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>99.9% Uptime</span>
              </div>
            </motion.div>
          </div>

          {/* Right content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />

            {/* Demo container */}
            <motion.div
              className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl overflow-hidden"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Demo header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-sm text-gray-400">Live Demo</span>
                  </div>
                  <motion.div
                    className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    AI Active
                  </motion.div>
                </div>
              </div>

              {/* Chat Interface */}
              <ChatInterface
                messages={[
                  {
                    role: "user",
                    content: "Estoy buscando una cámara digital de buena calidad",
                  },
                  {
                    role: "assistant",
                    content:
                      "¡Perfecto! Nuestro AI puede ayudarte a encontrar la cámara ideal. ¿Prefieres una profesional o más compacta para uso diario?",
                  },
                  {
                    role: "user",
                    content: "Busco algo profesional pero fácil de usar",
                  },
                ]}
                productRecommendations={[
                  {
                    name: "Sony Alpha A7 III",
                    price: "1.799,00€",
                    image: "/placeholder.svg?height=100&width=100",
                    specs: ["Sensor Full Frame", "24.2MP", "4K Video", "5-axis stabilization"],
                  },
                  {
                    name: "Canon EOS R6",
                    price: "2.499,00€",
                    image: "/placeholder.svg?height=100&width=100",
                    specs: ["Sensor Full Frame", "20.1MP", "4K Video", "Dual Pixel AF"],
                  },
                ]}
                simplified={true}
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-blue-500/20 backdrop-blur-sm rounded-full p-3 border border-blue-500/30"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <Brain className="h-6 w-6 text-blue-400" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-purple-500/20 backdrop-blur-sm rounded-full p-3 border border-purple-500/30"
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              <Zap className="h-6 w-6 text-purple-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
