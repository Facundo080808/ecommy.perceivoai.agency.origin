"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { es, en, pt, type Translations, type NestedTranslations } from "./translations"

// Tipos de idiomas disponibles
export type Language = "es" | "en" | "pt"

// Interfaz del contexto
interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string>) => any
  translations: Translations
}

// Crear el contexto
const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Función para obtener un valor anidado usando una ruta de puntos
function getNestedValue(obj: NestedTranslations, path: string): string | string[] | Record<string, string> {
  const keys = path.split(".")
  let current: any = obj

  for (const key of keys) {
    if (current[key] === undefined) {
      console.warn(`Translation key not found: ${path}`)
      return path
    }
    current = current[key]
  }

  return current
}

// Proveedor del contexto
export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Estado para el idioma actual
  const [language, setLanguage] = useState<Language>("es")

  // Objeto de traducciones según el idioma
  const translationMap: Record<Language, Translations> = {
    es,
    en,
    pt,
  }

  // Obtener las traducciones actuales
  const translations = translationMap[language]

  // Función para traducir una clave
  const t = (key: string, params?: Record<string, string>): any => {
    try {
      // Obtener el valor traducido
      let value = getNestedValue(translations, key)

      // Si es un string, reemplazar parámetros si existen
      if (typeof value === "string" && params) {
        Object.entries(params).forEach(([paramKey, paramValue]) => {
          value = (value as string).replace(`{${paramKey}}`, paramValue)
        })
      }

      return value
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error)
      return key
    }
  }

  // Persistir el idioma en localStorage
  useEffect(() => {
    // Intentar obtener el idioma guardado
    const savedLanguage = localStorage.getItem("language") as Language | null

    if (savedLanguage && ["es", "en", "pt"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Guardar el idioma cuando cambie
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return <I18nContext.Provider value={{ language, setLanguage, t, translations }}>{children}</I18nContext.Provider>
}

// Hook personalizado para usar el contexto
export function useI18n() {
  const context = useContext(I18nContext)

  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }

  return context
}
