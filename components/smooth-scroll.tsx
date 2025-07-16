"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Asegurar que la página comience desde arriba al cargar
    if (typeof window !== "undefined") {
      // Forzar el scroll a la parte superior al cargar la página
      window.scrollTo(0, 0)

      // Prevenir cualquier scroll automático que pueda ocurrir
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 0)
    }

    // Función para manejar los clics en enlaces de anclaje
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        const targetId = anchor.getAttribute("href")
        if (targetId && targetId !== "#") {
          e.preventDefault()

          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            // Calcular la posición con offset para el header
            const headerOffset = 80
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            // Scroll suave a la posición
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }
      }
    }

    // Agregar listener para todos los clics
    document.addEventListener("click", handleAnchorClick)

    // Corregir posición inicial si hay un hash en la URL
    if (window.location.hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(window.location.hash)
        if (targetElement) {
          const headerOffset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    } else {
      // Si no hay hash, asegurarse de que la página comience desde arriba
      window.scrollTo(0, 0)
    }

    // Limpiar listener al desmontar
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
