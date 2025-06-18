"use client"

import type React from "react"

import { useState } from "react"
import { Calculator, AlertTriangle, Trash2, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SubmenuLayout from "@/components/submenu-layout"
import { useToast } from "@/hooks/use-toast"

interface CalculationResult {
  id: string
  noteType: string
  tmt: number
  quantity: number
  totalTime: number
  productivity: number
  timestamp: Date
}

export default function CalculadoraPage() {
  const [noteType, setNoteType] = useState("")
  const [tmt, setTmt] = useState("")
  const [quantity, setQuantity] = useState("")
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [history, setHistory] = useState<CalculationResult[]>([])
  const { toast } = useToast()

  const calculateProductivity = () => {
    const noteTypeValue = noteType.trim()
    const tmtValue = Number.parseFloat(tmt)
    const quantityValue = Number.parseInt(quantity)

    // Validação dos inputs
    if (!noteTypeValue) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, informe o tipo de nota.",
      })
      return
    }

    if (isNaN(tmtValue) || isNaN(quantityValue) || tmtValue <= 0 || quantityValue <= 0) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, informe valores válidos para Tempo Médio de Tratamento e quantidade.",
      })
      return
    }

    // Cálculo da produtividade (0,29 pontos por minuto)
    const totalTime = tmtValue * quantityValue
    const productivity = totalTime * 0.29

    const newResult: CalculationResult = {
      id: Date.now().toString(),
      noteType: noteTypeValue,
      tmt: tmtValue,
      quantity: quantityValue,
      totalTime,
      productivity,
      timestamp: new Date(),
    }

    setResult(newResult)
    setHistory((prev) => [...prev, newResult])

    // Calcular produtividade total
    const totalProductivity = [...history, newResult].reduce((sum, item) => sum + item.productivity, 0)

    toast({
      variant: "success",
      title: "Calculado!",
      description: `Produtividade: ${productivity.toFixed(2)}%`,
    })

    // Verificar se chegou a 100%
    if (totalProductivity >= 100) {
      setTimeout(() => {
        toast({
          variant: "success",
          title: "🎉 Parabéns!",
          description: "Você chegou a 100% de produtividade!",
        })
      }, 500)
    }

    // Limpar campos
    setNoteType("")
    setTmt("")
    setQuantity("")
  }

  const removeFromHistory = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id))
    toast({
      variant: "success",
      title: "Removido!",
      description: "Item removido do histórico.",
    })
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      calculateProductivity()
    }
  }

  const totalProductivity = history.reduce((sum, item) => sum + item.productivity, 0)
  const totalItems = history.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <SubmenuLayout title="Calculadora de Produtividade" icon={<Calculator className="h-6 w-6" />}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calculadora Principal */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculadora de Produtividade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Aviso importante */}
                <div className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                    <strong>
                      Prezados, essa calculadora deve ser usada por atendentes que trabalham 06:20 por dia.
                    </strong>
                  </p>
                </div>

                {/* Formulário */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="noteType" className="block text-sm font-medium text-blue-700 dark:text-white mb-2">
                      Tipo de nota:
                    </label>
                    <input
                      type="text"
                      id="noteType"
                      value={noteType}
                      onChange={(e) => setNoteType(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ex: Reclamação, Solicitação, etc."
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="tmt" className="block text-sm font-medium text-blue-700 dark:text-white mb-2">
                      Informe o Tempo Médio de Tratamento:
                    </label>
                    <input
                      type="number"
                      id="tmt"
                      value={tmt}
                      onChange={(e) => setTmt(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Exemplo: TMT/TMA de 00:02:30 colocar 2.3"
                      min="0"
                      step="0.1"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-white"
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400 mt-1 block">minutos</span>
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-blue-700 dark:text-white mb-2">
                      Informe a quantidade tratada:
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ex: 2"
                      min="0"
                      step="1"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-white"
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400 mt-1 block">notas</span>
                  </div>

                  <Button onClick={calculateProductivity} className="w-full" size="lg">
                    <Calculator className="h-4 w-4 mr-2" />
                    Calcular Produtividade
                  </Button>
                </div>

                {/* Resultado Atual */}
                {result && (
                  <Card className="border-2 border-blue-500 dark:border-gold-500">
                    <CardHeader>
                      <CardTitle className="text-center text-blue-700 dark:text-gold-500">
                        Último Cálculo - {result.noteType}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                          <span className="font-medium text-blue-600 dark:text-gold-400">Tipo de nota:</span>
                          <span className="font-bold text-blue-700 dark:text-white text-lg">{result.noteType}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                          <span className="font-medium text-blue-600 dark:text-gold-400">
                            Tempo Médio de Tratamento:
                          </span>
                          <span className="font-bold text-blue-700 dark:text-white text-lg">{result.tmt} min</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                          <span className="font-medium text-blue-600 dark:text-gold-400">Quantidade tratada:</span>
                          <span className="font-bold text-blue-700 dark:text-white text-lg">
                            {result.quantity} notas
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                          <span className="font-medium text-blue-600 dark:text-gold-400">Tempo total gasto:</span>
                          <span className="font-bold text-blue-700 dark:text-white text-lg">
                            {result.totalTime} min
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700 mt-4">
                          <span className="font-medium text-blue-600 dark:text-gold-400">Produtividade:</span>
                          <span className="font-bold text-blue-700 dark:text-gold-500 text-2xl">
                            {result.productivity.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Explicação da fórmula */}
                <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="text-blue-700 dark:text-gold-500 text-lg">Como funciona o cálculo:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-blue-600 dark:text-blue-300">
                      • Cada minuto equivale a <strong>0,29 pontos</strong> de produtividade
                    </p>
                    <p className="text-blue-600 dark:text-blue-300">
                      • Fórmula: <strong>Tempo Médio de Tratamento × Quantidade × 0,29 = Produtividade</strong>
                    </p>
                    <p className="text-blue-600 dark:text-blue-300">
                      • Meta: <strong>100% de produtividade</strong>
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Histórico e Consolidado */}
          <div className="space-y-6">
            {/* Consolidado */}
            <Card
              className={`border-2 ${totalProductivity >= 100 ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-blue-500"}`}
            >
              <CardHeader>
                <CardTitle
                  className={`text-center flex items-center justify-center gap-2 ${totalProductivity >= 100 ? "text-green-700 dark:text-green-400" : "text-blue-700 dark:text-gold-500"}`}
                >
                  {totalProductivity >= 100 && <Trophy className="h-5 w-5" />}
                  Consolidado Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="font-medium text-slate-600 dark:text-slate-400">Total de notas:</span>
                    <span className="font-bold text-slate-700 dark:text-white text-lg">{totalItems}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="font-medium text-slate-600 dark:text-slate-400">Cálculos realizados:</span>
                    <span className="font-bold text-slate-700 dark:text-white text-lg">{history.length}</span>
                  </div>
                  <div
                    className={`flex justify-between items-center py-3 px-4 rounded-lg border mt-4 ${
                      totalProductivity >= 100
                        ? "bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-700"
                        : "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700"
                    }`}
                  >
                    <span
                      className={`font-medium ${totalProductivity >= 100 ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-gold-400"}`}
                    >
                      Produtividade Total:
                    </span>
                    <span
                      className={`font-bold text-3xl ${totalProductivity >= 100 ? "text-green-700 dark:text-green-500" : "text-blue-700 dark:text-gold-500"}`}
                    >
                      {totalProductivity.toFixed(2)}%
                    </span>
                  </div>
                  {totalProductivity >= 100 && (
                    <div className="text-center py-2">
                      <p className="text-green-700 dark:text-green-400 font-semibold">🎉 Meta atingida!</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Histórico */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-gold-500 text-lg">Histórico de Cálculos</CardTitle>
              </CardHeader>
              <CardContent>
                {history.length === 0 ? (
                  <p className="text-center text-slate-500 dark:text-slate-400 py-4">Nenhum cálculo realizado ainda</p>
                ) : (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {history.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border"
                      >
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {item.noteType}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {item.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {item.tmt}min × {item.quantity} notas ={" "}
                            <strong className="text-blue-600 dark:text-gold-400">
                              {item.productivity.toFixed(2)}%
                            </strong>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromHistory(item.id)}
                          className="ml-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SubmenuLayout>
  )
}
