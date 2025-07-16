"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

// Versión simplificada sin animaciones que puedan causar problemas de scroll
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return <div className={cn("relative", className)}>{children}</div>
}

interface ParallaxProps {
  children: React.ReactNode
  className?: string
}

// Versión simplificada sin efectos parallax que puedan causar problemas de scroll
export function Parallax({ children, className }: ParallaxProps) {
  return <div className={cn("relative", className)}>{children}</div>
}
