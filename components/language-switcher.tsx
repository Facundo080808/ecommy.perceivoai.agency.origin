"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { useI18n, type Language } from "@/lib/i18n/context"

type LanguageOption = {
  code: Language
  name: string
  flag: string
}

const languages: LanguageOption[] = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  // Encontrar el idioma actual en la lista de opciones
  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const handleLanguageChange = (selectedLanguage: LanguageOption) => {
    setLanguage(selectedLanguage.code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline-flex">{currentLanguage.flag}</span>
          <motion.span
            key={currentLanguage.code}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden md:inline-flex"
          >
            {currentLanguage.name}
          </motion.span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang)}
            className={`flex items-center gap-2 ${
              currentLanguage.code === lang.code ? "bg-blue-500/10 text-blue-500" : ""
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {currentLanguage.code === lang.code && (
              <motion.div
                className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500"
                layoutId="activeLang"
                transition={{ type: "spring", duration: 0.2 }}
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
