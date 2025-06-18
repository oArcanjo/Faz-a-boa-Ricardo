import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface SimpleLinkButtonProps {
  href: string
  label: string
}

export default function SimpleLinkButton({ href, label }: SimpleLinkButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full px-4 py-2 mb-2 text-left border rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-gold-500 transition-all"
    >
      <div className="flex items-center">
        <span className="text-blue-700 dark:text-white">{label}</span>
      </div>
      <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0 text-blue-600 dark:text-gold-500" />
    </Link>
  )
}
