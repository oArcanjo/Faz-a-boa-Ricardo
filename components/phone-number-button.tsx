"use client"

import { useState } from "react"
import { Copy, Check, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface PhoneNumberButtonProps {
  label: string
  number: string
}

export default function PhoneNumberButton({ label, number }: PhoneNumberButtonProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(number)
      setCopied(true)

      toast({
        variant: "success",
        title: "Número copiado!",
        description: `${number} foi copiado para a área de transferência.`,
      })

      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Falha ao copiar número: ", err)

      toast({
        variant: "destructive",
        title: "Erro ao copiar",
        description: "Não foi possível copiar o número. Tente novamente.",
      })
    }
  }

  return (
    <div
      onClick={handleCopy}
      className="flex items-center justify-between w-full px-4 py-3 mb-2 text-left border rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-gold-500 transition-all cursor-pointer"
    >
      <div className="flex items-center">
        <Phone className="h-4 w-4 mr-3 text-blue-600 dark:text-gold-500" />
        <div>
          <div className="text-blue-700 dark:text-white font-medium">{label}</div>
          <div className="text-sm text-slate-600 dark:text-slate-300">{number}</div>
        </div>
      </div>
      <div className="h-6 w-6 text-blue-600 dark:text-gold-500 flex items-center justify-center">
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </div>
    </div>
  )
}
