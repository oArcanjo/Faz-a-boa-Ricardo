export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 p-4 text-center text-sm text-muted-foreground bg-gradient-to-r from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 backdrop-blur-sm shadow-inner relative z-0">
      <p>© {new Date().getFullYear()} - Criado pela Equipe de Planejamento e Tráfego</p>
    </footer>
  )
}
