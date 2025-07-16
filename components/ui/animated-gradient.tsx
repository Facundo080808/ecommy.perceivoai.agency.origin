"use client"

// Versión simplificada sin animaciones que puedan causar problemas de scroll
export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
  )
}
