"use client"

import { PhoneCall } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubmenuLayout from "@/components/submenu-layout"
import PhoneNumberButton from "@/components/phone-number-button"

export default function TelefonesPage() {
  return (
    <SubmenuLayout title="Telefones" icon={<PhoneCall className="h-6 w-6" />}>
      <Tabs defaultValue="eqtl-varejo">
        <TabsList className="mb-4 flex flex-wrap">
          <TabsTrigger value="eqtl-varejo">EQTL Varejo</TabsTrigger>
          <TabsTrigger value="eqtl-grandes-clientes">EQTL Grandes Clientes</TabsTrigger>
          <TabsTrigger value="eqtl-geracao-distribuida">EQTL Geração Distribuída</TabsTrigger>
          <TabsTrigger value="eqtl-ouvidoria">EQTL Ouvidoria</TabsTrigger>
          <TabsTrigger value="eqtl-suporte-credenciado">EQTL Suporte ao C.</TabsTrigger>
          <TabsTrigger value="outros">Outros</TabsTrigger>
        </TabsList>

        <TabsContent value="eqtl-varejo">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                EQTL Varejo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <PhoneNumberButton label="EQTL MA" number="116" />
                <PhoneNumberButton label="EQTL PA" number="0800 091 0196" />
                <PhoneNumberButton label="EQTL PI" number="0800 086 0800" />
                <PhoneNumberButton label="EQTL AL" number="0800 082 0196" />
                <PhoneNumberButton label="EQTL CEA(AP)" number="0800 096 0196" />
                <PhoneNumberButton label="EQTL CEEE(RS)" number="0800 721 2333" />
                <PhoneNumberButton label="EQTL GO" number="0800 062 0196" />
                <PhoneNumberButton label="EQTL CSA" number="0800 086 0116" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="eqtl-grandes-clientes">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                EQTL Grandes Clientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <PhoneNumberButton label="GC MA" number="0800 096 0387" />
                <PhoneNumberButton label="GC PA" number="0800 280 3216" />
                <PhoneNumberButton label="GC PI" number="0800 086 8500" />
                <PhoneNumberButton label="GC AL" number="0800 082 8500" />
                <PhoneNumberButton label="GC AP" number="0800 062 0198" />
                <PhoneNumberButton label="GC RS" number="0800 642 2800" />
                <PhoneNumberButton label="GC GO" number="0800 062 0198" />
                <PhoneNumberButton label="GC CSA" number="0800 096 0387" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="eqtl-geracao-distribuida">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                EQTL Geração Distribuída
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <PhoneNumberButton label="GD MA" number="0800 098 0055" />
                <PhoneNumberButton label="GD PA" number="0800 721 0083" />
                <PhoneNumberButton label="GD PI" number="0800 025 0116" />
                <PhoneNumberButton label="GD AL" number="0800 082 2800" />
                <PhoneNumberButton label="GD AP" number="0800 096 0385" />
                <PhoneNumberButton label="GD RS" number="0800 642 6643" />
                <PhoneNumberButton label="GD GO" number="0800 000 7565" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="eqtl-ouvidoria">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                EQTL Ouvidoria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <PhoneNumberButton label="OUV MA" number="0800 286 9803" />
                <PhoneNumberButton label="OUV PA" number="0800 091 8500" />
                <PhoneNumberButton label="OUV PI" number="0800 721 0164" />
                <PhoneNumberButton label="OUV AL" number="0800 721 0082" />
                <PhoneNumberButton label="OUV AP" number="0800 096 1406" />
                <PhoneNumberButton label="OUV RS" number="0800 642 4900" />
                <PhoneNumberButton label="OUV GO" number="0800 062 1500" />
                <PhoneNumberButton label="OUV CSA" number="0800 096 0386" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="eqtl-suporte-credenciado">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                EQTL Suporte ao Credenciado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <PhoneNumberButton label="SUP C. MA" number="0800 098 0196" />
                <PhoneNumberButton label="SUP C. PA" number="0800 032 0116" />
                <PhoneNumberButton label="SUP C. PI" number="0800 286 3217" />
                <PhoneNumberButton label="SUP C. AL" number="0800 298 2500" />
                <PhoneNumberButton label="SUP C. AP" number="0800 091 2055" />
                <PhoneNumberButton label="SUP C. RS" number="0800 642 2801" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="outros">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                Outros Telefones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">Outros números telefônicos serão adicionados aqui.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SubmenuLayout>
  )
}
