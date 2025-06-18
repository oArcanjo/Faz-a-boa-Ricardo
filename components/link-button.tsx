import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LinkButtonProps {
  href: string
  label: string
}

export default function LinkButton({ href, label }: LinkButtonProps) {
  return (
    <Button
      variant="outline"
      className="w-full justify-between text-left font-normal mb-2 hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-gold-500 transition-all"
      asChild
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <span className="truncate">{label}</span>
        <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0 text-blue-600 dark:text-gold-500" />
      </Link>
    </Button>
  )
}
