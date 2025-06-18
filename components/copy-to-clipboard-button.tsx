"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CopyToClipboardButtonProps {
  text: string
  label: string
}

export default function CopyToClipboardButton({ text, label }: CopyToClipboardButtonProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)

      toast({
        variant: "success",
        title: "Texto copiado!",
        description: `"${text}" foi copiado para a área de transferência.`,
      })

      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Falha ao copiar texto: ", err)

      toast({
        variant: "destructive",
        title: "Erro ao copiar",
        description: "Não foi possível copiar o texto. Tente novamente.",
      })
    }
  }

  return (
    <div
      onClick={handleCopy}
      className="flex items-center justify-between w-full px-4 py-2 mb-2 text-left border rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-gold-500 transition-all cursor-pointer"
    >
      <span className="text-blue-700 dark:text-white">{label}</span>
      <div className="h-5 w-5 text-blue-600 dark:text-gold-500">
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </div>
    </div>
  )
}
