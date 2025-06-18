import type React from "react"
import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import Footer from "@/components/footer"
import LaptopIcon from "@/components/laptop-icon"

interface SubmenuLayoutProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}

export default function SubmenuLayout({ title, icon, children }: SubmenuLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between bg-gradient-to-r from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-blue-700 dark:text-gold-500">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
          {/* Menu dropdown removido */}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center mr-4 md:block hidden">
            <LaptopIcon className="h-6 w-6 text-gold-500 mr-2 inline-block" />
            <span className="font-bold text-blue-700 dark:text-white">Acesso Rápido - Ilhas de Atendimento.</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 p-6 md:p-8 relative z-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6 bg-gradient-to-r from-white via-blue-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 rounded-lg shadow-sm backdrop-blur-sm">
            <div className="mr-3 text-blue-600 dark:text-gold-500">{icon}</div>
            <h1 className="text-2xl font-bold text-blue-700 dark:text-white">{title}</h1>
          </div>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  )
}
