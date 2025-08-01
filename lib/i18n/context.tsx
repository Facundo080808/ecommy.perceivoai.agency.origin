"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { es } from "@/lib/i18n/translations/es"
import { en } from "@/lib/i18n/translations/en"
import { pt } from "@/lib/i18n/translations/pt"
import type { LocaleLanguaje } from "@/lib/i18n/translations/translationType"

// Tipo genérico para traducciones anidadas
type TranslationValue = string | string[] | { [key: string]: TranslationValue }
type Translations = { [key: string]: TranslationValue }

// Tipos de idiomas disponibles
export type Language = "es" | "en" | "pt"

// Interfaz del contexto
interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string>) => any
  translations: LocaleLanguaje
}

// Crear el contexto
const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Función para obtener un valor anidado usando una ruta de puntos
function getNestedValue(obj: LocaleLanguaje, path: string): TranslationValue {
  const keys = path.split(".")

  let current: any = obj

  for (const key of keys) {
    const arrayMatch = key.match(/^(\w+)\[(\d+)\]$/)
    if (arrayMatch) {
      const arrayKey = arrayMatch[1]  // ej: "messages"
      const index = parseInt(arrayMatch[2], 10)  // ej: 0

      if (!Array.isArray(current[arrayKey])) {
        console.warn(`Expected array at key: ${arrayKey}`)
        return path
      }
      current = current[arrayKey][index]
    } else {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${path}`)
        return path
      }
      current = current[key]
    }
  }

  return current
}

// Proveedor del contexto
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
  if (typeof window !== "undefined") {
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && ["es", "en", "pt"].includes(savedLanguage)) {
      console.log(savedLanguage, "language loaded at init")
      return savedLanguage
    }
  }
  return "es"
})


  const translationMap: Record<Language, LocaleLanguaje> = {
  es,
  en,
  pt,
}

  const translations = translationMap[language]

  const t = (key: string, params?: Record<string, string>): any => {
    try {
      let value = getNestedValue(translations, key)

      if (typeof value === "string" && params) {
        Object.entries(params).forEach(([paramKey, paramValue]) => {
          value = (value as string).replace(new RegExp(`{${paramKey}}`, "g"), paramValue)
        })
      }

      return value
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error)
      return key
    }
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null

    if (savedLanguage && ["es", "en", "pt"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
      console.log(savedLanguage, "language loaded from localStorage")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }

  return context
}
