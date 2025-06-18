"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface FileDownloadProps {
  title: string
  description?: string
  fileName: string
  fileUrl: string
}

export default function FileDownload({ title, description, fileName, fileUrl }: FileDownloadProps) {
  const [downloading, setDownloading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleDownload = () => {
    setDownloading(true)
    setProgress(0)

    // Simulação de progresso de download
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setDownloading(false)
          return 100
        }
        return prevProgress + 10
      })
    }, 200)

    // Criar um link para download
    const link = document.createElement("a")
    link.href = fileUrl
    link.setAttribute("download", fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{downloading && <Progress value={progress} className="h-2 mb-2" />}</CardContent>
      <CardFooter>
        <Button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full flex items-center justify-center gap-2"
        >
          <Download className="h-4 w-4" />
          {downloading ? `Baixando... ${progress}%` : "Baixar Arquivo"}
        </Button>
      </CardFooter>
    </Card>
  )
}
