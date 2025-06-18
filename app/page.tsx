import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import MainMenu from "@/components/main-menu"
import ThemeToggle from "@/components/theme-toggle"
import Footer from "@/components/footer"
import LaptopIcon from "@/components/laptop-icon"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-cyan-200 dark:border-blue-800 p-4 flex items-center justify-between bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-cyan-700 dark:text-cyan-400">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center mr-4">
            <LaptopIcon className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mr-2" />
            <span className="font-bold text-cyan-800 dark:text-cyan-200">Acesso Rápido - Ilhas de Atendimento.</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-6xl">
          <MainMenu />
        </div>
      </main>

      <Footer />
    </div>
  )
}
