"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DebugTheme() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme, themes, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-4">
      <CardHeader>
        <CardTitle>Depuração de Tema</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p>
            <strong>Tema atual:</strong> {theme}
          </p>
          <p>
            <strong>Tema resolvido:</strong> {resolvedTheme}
          </p>
          <p>
            <strong>Tema do sistema:</strong> {systemTheme}
          </p>
          <p>
            <strong>Temas disponíveis:</strong> {themes.join(", ")}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setTheme("light")}>Tema Claro</Button>
          <Button onClick={() => setTheme("dark")}>Tema Escuro</Button>
          <Button onClick={() => setTheme("system")}>Tema do Sistema</Button>
        </div>
      </CardContent>
    </Card>
  )
}
