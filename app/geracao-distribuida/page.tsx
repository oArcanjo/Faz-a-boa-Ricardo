import { Zap, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubmenuLayout from "@/components/submenu-layout"
import SimpleLinkButton from "@/components/simple-link-button"

export default function GeracaoDistribuidaPage() {
  return (
    <SubmenuLayout title="Geração Distribuída" icon={<Zap className="h-6 w-6" />}>
      <Tabs defaultValue="acesso-rapido">
        <TabsList className="mb-4">
          <TabsTrigger value="acesso-rapido">Acesso Rápido</TabsTrigger>
          <TabsTrigger value="formularios">Utilitários</TabsTrigger>
          <TabsTrigger value="gd-go">G. Distribuída GO</TabsTrigger>
        </TabsList>

        <TabsContent value="acesso-rapido">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                Acesso Rápido
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <SimpleLinkButton href="https://apps.sae1.pure.cloud/" label="Genesys" />
                <SimpleLinkButton
                  href="http://unifica.equatorialenergia.com.br:9203/sap(bD1wdCZjPTQwMiZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm?sap-client=402&sap-language=PT"
                  label="SAP PA"
                />
                <SimpleLinkButton
                  href="http://unifica.equatorialenergia.com.br:9204/sap(bD1wdCZjPTQwMSZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm?sap-client=401&sap-language=PT"
                  label="SAP MA"
                />
                <SimpleLinkButton
                  href="http://epispdccrm02.equatorial.corp:8000/sap(bD1wdCZjPTQwNCZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm"
                  label="SAP PI"
                />
                <SimpleLinkButton
                  href="http://ealspdccrm02.equatorial.corp:8000/sap(bD1wdCZjPTQwMyZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm?sap-client=403&sap-language=PT"
                  label="SAP AL"
                />
                <SimpleLinkButton
                  href="https://ap-crm-prd.equatorial.corp:44301/sap/bc/bsp/sap/crm_ui_start?sap-client=405&sap-language=PT"
                  label="SAP AP"
                />
                <SimpleLinkButton href="https://backoffice-pa.equatorialenergia.com.br/login/" label="Backoffice PA" />
                <SimpleLinkButton href="https://backoffice-ma.equatorialenergia.com.br/login/" label="Backoffice MA" />
              </div>
              <div>
                <SimpleLinkButton href="https://backoffice-pi.equatorialenergia.com.br/login/" label="Backoffice PI" />
                <SimpleLinkButton href="https://backoffice-al.equatorialenergia.com.br/login/" label="Backoffice AL" />
                <SimpleLinkButton href="https://backoffice-ap.equatorialenergia.com.br/login/" label="Backoffice AP" />
                <SimpleLinkButton
                  href="https://agenciavirtual.equatorialenergia.com.br/Backoffice/Login"
                  label="Novo BackOffice"
                />
                <SimpleLinkButton href="https://backoffice-go.equatorialenergia.com.br/login/" label="Backoffice GO" />
                <SimpleLinkButton
                  href="https://webconsulta.equatorialenergia.com.br/sistemas-varejo/"
                  label="Web Consulta"
                />
                <SimpleLinkButton
                  href="http://10.1.1.191:8080/csicrm/Login.do?idModulo=2&tela=loginChamado&sessao=null&loginIni=true"
                  label="CRM PluSoft+"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formularios">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                Utilitários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleLinkButton
                href="https://forms.office.com/pages/responsepage.aspx?id=UUVNECctOUiHsoYmSlIQpX82NRM_gzpPn3K3qkEoH3tUMkhYTkdCVU1US1RBMVk1TDFZMFpMRlA2Ti4u"
                label="Acionamento Risco a Vida"
              />
              <SimpleLinkButton
                href="https://forms.office.com/pages/responsepage.aspx?id=UUVNECctOUiHsoYmSlIQpVXuB4486ltJswWu9s43rBRUNUVDNVFRNTdBSlc5SVZIR0pBNVRTUDJDRS4u&route=shorturl"
                label="Cancelamento"
              />
              <SimpleLinkButton
                href="https://forms.office.com/pages/responsepage.aspx?id=UUVNECctOUiHsoYmSlIQpVXuB4486ltJswWu9s43rBRUNUVDNVFRNTdBSlc5SVZIR0pBNVRTUDJDRS4u&route=shorturl"
                label="Classificador"
              />
              <SimpleLinkButton
                href="http://10.6.1.18/reports/browse/EQTL%20Servi%C3%A7os/4.%20Contact%20Center%20-%20EQTL%20SERVI%C3%87OS/1.%20Coordena%C3%A7%C3%A3o%20Call%20Center/01.%20BACKOFFICE/2025"
                label="Backoffice Ilhas"
              />
              <SimpleLinkButton
                href="https://grupoequatorialenergia-my.sharepoint.com/:f:/g/personal/wagno_lima_equatorialservicos_com_br/EnTK4S9e6MxGv5UX8dfhcbIBRCOIFGLYPWHcWswvtDWtGw?e=HYRmAP"
                label="Cartas GD NNE"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gd-go">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                G. Distribuída GO
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <SimpleLinkButton
                  href="http://sistemassatelites.equatorial.corp:8080/Sicap-adm/busca.xhtml"
                  label="SICAP"
                />
                <SimpleLinkButton
                  href="https://sgegoi.equatorialenergia.com.br/softexpert/login?page=1200231,73"
                  label="SGE"
                />
                <SimpleLinkButton
                  href="http://10.1.1.191:8080/csicrm/Login.do?idModulo=2&tela=loginChamado&sessao=null&loginIni=true"
                  label="PLUSOFT"
                />
              </div>
              <div>
                <SimpleLinkButton
                  href="http://10.201.48.101:11090/cbill/protected/home.do"
                  label="CBILL COMERCIAL GO"
                />
                <SimpleLinkButton
                  href="http://portal.bm4e.equatorialenergia.com.br/auth/realms/CPQD-Portal/protocol/openid-connect/auth?client_id=PGA-gui&redirect_uri=http%3A%2F%2Fportal.bm4e.equatorialenergia.com.br%2Fpga%2F&state=9521202c-2556-4c13-b91c-2e27ddc53531&response_mode=fragment&response_type=code&scope=openid&nonce=90059fcf-e7f2-4d8a-9fcd-56dd3b9563e5&code_challenge=ZgltqUWesWY7sAby1D1A2bHF3n_uh8XBF85Q142FSzY&code_challenge_method=S256"
                  label="Emergencial GO"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SubmenuLayout>
  )
}
