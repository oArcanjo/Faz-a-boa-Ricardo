"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Necessário para evitar erro de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Não renderiza nada até que o componente esteja montado
  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-cyan-700 dark:text-cyan-400"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
