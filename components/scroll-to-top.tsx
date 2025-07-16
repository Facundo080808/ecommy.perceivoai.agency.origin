"use client"

import { useEffect } from "react"

export function ScrollToTop() {
  useEffect(() => {
    // Función para forzar el scroll al inicio
    const resetScroll = () => {
      // Usar requestAnimationFrame para asegurar que se ejecute en el momento correcto del ciclo de renderizado
      window.requestAnimationFrame(() => {
        // Usar múltiples métodos para asegurar compatibilidad entre navegadores
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      })
    }

    // Ejecutar inmediatamente
    resetScroll()

    // Ejecutar después de que el DOM esté listo
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", resetScroll)
    } else {
      resetScroll()
    }

    // Ejecutar después de que todos los recursos estén cargados
    window.addEventListener("load", resetScroll)

    // Ejecutar después de un pequeño retraso para capturar cualquier comportamiento asíncrono
    const timers = [
      setTimeout(resetScroll, 0),
      setTimeout(resetScroll, 50),
      setTimeout(resetScroll, 100),
      setTimeout(resetScroll, 300),
      setTimeout(resetScroll, 500),
      setTimeout(resetScroll, 1000),
    ]

    // Desactivar la restauración automática del scroll
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual"
    }

    // Prevenir cualquier scroll automático durante la carga inicial
    const preventScroll = (e) => {
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener("scroll", preventScroll, { passive: false })

    // Limpiar
    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener("load", resetScroll)
      window.removeEventListener("scroll", preventScroll)
      if (document.readyState === "loading") {
        document.removeEventListener("DOMContentLoaded", resetScroll)
      }
    }
  }, [])

  return null
}
