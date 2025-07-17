"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"
import { MessageSquare, Plus, ShoppingCart, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface Product {
  name: string
  price: string
  image: string
  specs: string[]
}

interface ChatInterfaceProps {
  messages: Message[]
  productRecommendations?: Product[]
  showSidebar?: boolean
  showCart?: boolean
  simplified?: boolean
}

export function ChatInterface({
  messages,
  productRecommendations,
  showSidebar = false,
  showCart = false,
  simplified = false,
}: ChatInterfaceProps) {
  const [cartOpen, setCartOpen] = useState(false)
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([])
  const [showRecommendations, setShowRecommendations] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messages.length === 0) return

    const showMessages = async () => {
      for (let i = 0; i < messages.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setVisibleMessages((prev) => [...prev, messages[i]])
      }

      if (productRecommendations) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setShowRecommendations(true)
      }
    }

    showMessages()
  }, [messages, productRecommendations])

 

  return (
    <div className="flex h-[600px] w-full bg-gray-900 rounded-lg overflow-hidden">
      {showSidebar && (
        <motion.div
          className="w-64 border-r border-gray-800 flex-shrink-0 hidden md:block"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Plus className="h-4 w-4" />
                <span>Nuevo Chat</span>
              </Button>
            </motion.div>
          </div>

        
            <div className="space-y-2 px-2">
              <p className="text-xs text-gray-500 py-2">Hoy</p>
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    <Button key={i} variant="ghost" className="w-full justify-start h-auto py-3 px-3 text-left">
                      <div>
                        <p className="text-sm font-medium truncate">Búsqueda de cámaras</p>
                        <p className="text-xs text-gray-500 truncate">
                          Hace {i} hora{i > 1 ? "s" : ""}
                        </p>
                      </div>
                    </Button>
                  </motion.div>
                </motion.div>
              ))}

              <p className="text-xs text-gray-500 py-2">Ayer</p>
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 3) * 0.1, duration: 0.5 }}
                >
                  <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    <Button key={i} variant="ghost" className="w-full justify-start h-auto py-3 px-3 text-left">
                      <div>
                        <p className="text-sm font-medium truncate">Comparación de laptops</p>
                        <p className="text-xs text-gray-500 truncate">Hace {i + 24} horas</p>
                      </div>
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
        
        </motion.div>
      )}

      <div className="flex-1 flex flex-col relative">
        {/* Chat header */}
        <motion.div
          className="flex items-center justify-between p-4 border-b border-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            <span className="font-medium">Asistente de Compras</span>
          </div>

          {showCart && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(!cartOpen)}>
                <ShoppingCart className="h-5 w-5" />
                <motion.span
                  className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15, delay: 1 }}
                >
                  2
                </motion.span>
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Chat messages */}
        
          <div className="space-y-6">
            <AnimatePresence>
              {visibleMessages.map((message, i) => (
                <motion.div
                  key={i}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100"
                    }`}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {message.content}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>

            {showRecommendations && productRecommendations && (
              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-full bg-gray-800 rounded-lg p-4 text-gray-100">
                  <p className="mb-3">Basado en tus preferencias, te recomiendo estas opciones:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {productRecommendations.map((product, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                      >
                        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                          <Card className="bg-gray-900 border-gray-700 overflow-hidden">
                            <div className="p-3 flex gap-3">
                              <div className="relative h-20 w-20 bg-gray-800 rounded-md flex-shrink-0">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  fill
                                  className="object-cover p-1"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-sm">{product.name}</h4>
                                <p className="text-blue-400 font-bold text-sm">{product.price}</p>
                                <ul className="mt-1">
                                  {product.specs.map((spec, j) => (
                                    <li key={j} className="text-xs text-gray-400">
                                      {spec}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="bg-gray-800 p-2">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
                                  Agregar al carrito
                                </Button>
                              </motion.div>
                            </div>
                          </Card>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm">¿Te gustaría más información sobre alguno de estos modelos?</p>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        

        {/* Input area */}
        {!simplified && (
          <motion.div
            className="p-4 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-800 rounded-lg px-4 py-2 flex items-center">
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  className="bg-transparent border-none outline-none w-full text-white"
                />
              </div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Shopping cart sidebar */}
        <AnimatePresence>
          {showCart && cartOpen && (
            <motion.div
              className="absolute top-16 right-0 w-80 bg-gray-900 border border-gray-800 rounded-l-lg shadow-xl z-10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <h3 className="font-medium">Carrito de Compra</h3>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" onClick={() => setCartOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>

        
                <div className="space-y-4">
                  {productRecommendations?.map((product, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                    >
                      <div className="relative h-16 w-16 bg-gray-800 rounded-md flex-shrink-0">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover p-1"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{product.name}</h4>
                        <p className="text-blue-400 font-bold text-sm">{product.price}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button variant="outline" size="icon" className="h-6 w-6 rounded-full p-0">
                              <span>-</span>
                            </Button>
                          </motion.div>
                          <span className="text-sm">1</span>
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button variant="outline" size="icon" className="h-6 w-6 rounded-full p-0">
                              <span>+</span>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
        

              <motion.div
                className="p-4 border-t border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Subtotal:</span>
                  <span className="font-medium">3.198,00€</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-400">Envío:</span>
                  <span className="font-medium">Gratis</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">3.198,00€</span>
                </div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Finalizar Compra</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
