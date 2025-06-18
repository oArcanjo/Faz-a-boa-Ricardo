import { Users, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubmenuLayout from "@/components/submenu-layout"
import SimpleLinkButton from "@/components/simple-link-button"

export default function GrandesClientesPage() {
  return (
    <SubmenuLayout title="Grandes Clientes" icon={<Users className="h-6 w-6" />}>
      <Tabs defaultValue="acesso-rapido">
        <TabsList className="mb-4">
          <TabsTrigger value="acesso-rapido">Acesso Rápido</TabsTrigger>
          <TabsTrigger value="utilitarios">Utilitários GC</TabsTrigger>
          <TabsTrigger value="gclientes-go">GClientes GO</TabsTrigger>
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

        <TabsContent value="utilitarios">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                Utilitários GC
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleLinkButton
                href="https://forms.office.com/pages/responsepage.aspx?id=UUVNECctOUiHsoYmSlIQpQIvg32y3c5Chsn_t_G-67VUQVNNQVNYVFNaN1pTS0gyUk41SVlFWks2My4u&route=shorturl"
                label="Classificador GC"
              />
              <SimpleLinkButton
                href="https://grupoequatorialenergia-my.sharepoint.com/:w:/g/personal/wagno_lima_equatorialservicos_com_br/EVnJqxNy4eVMsLA9itqeD2AB0CUHwPeYnsRqnxIZp35p3g?e=srYUea"
                label="BOOK DE SERVIÇOS RIO GRANDE DO SUL"
              />
              <SimpleLinkButton
                href="https://grupoequatorialenergia-my.sharepoint.com/:w:/g/personal/wagno_lima_equatorialservicos_com_br/EbGPKQK4ssBAv9KjDcdmIdoB78iEvxqDedrxk_GNt1Hjlw"
                label="BOOK DE SERVIÇOS SAP GC"
              />
              <SimpleLinkButton
                href="http://10.6.1.18/reports/browse/EQTL%20Servi%C3%A7os/4.%20Contact%20Center%20-%20EQTL%20SERVI%C3%87OS/1.%20Coordena%C3%A7%C3%A3o%20Call%20Center/01.%20BACKOFFICE/2025"
                label="Backoffice Ilhas"
              />
              <SimpleLinkButton
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=UUVNECctOUiHsoYmSlIQpQIvg32y3c5Chsn_t_G-67VUQ1lLOFBJWUNYN0xKTDFKQ0tFQVJZSzBLNy4u&origin=Invitation&channel=1"
                label="Forms produtividade GC GO"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gclientes-go">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                GClientes GO
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <SimpleLinkButton href="http://10.125.6.102:11090/cbill/protected/home.do" label="CBILL COMERCIAL" />
                <SimpleLinkButton
                  href="http://10.125.6.220:7070/auth/realms/CPQD-Portal/protocol/openid-connect/auth?client_id=ss-emergency-web&redirect_uri=http%3A%2F%2F10.125.6.102%3A8077%2Fss-emergency%2F&state=c1af0904-711d-459e-8d91-75b3f30f91fd&response_mode=fragment&response_type=code&scope=openid&nonce=13857458-f3a7-45f2-8248-1f269bc959b8&code_challenge=k4U7PMHI7lFiPpf8NKjWzZPKyC775g2lLElkN9-2KYY&code_challenge_method=S256"
                  label="CBILL EMERGENCIAL"
                />
                <SimpleLinkButton href="http://10.204.10.156:4002/atc/home" label="ATC WEB 1" />
                <SimpleLinkButton href="http://10.204.8.27:4002/atc/home" label="ATC WEB 2" />
                <SimpleLinkButton
                  href="https://grupoequatorialenergia.lightning.force.com/lightning/o/Case/list?filterName=00BHp00000G9tjwMAB"
                  label="SALES FORCE"
                />
                <SimpleLinkButton
                  href="http://sistemassatelites.equatorial.corp:8080/Sicap-adm/index.xhtml"
                  label="SICAP"
                />
                <SimpleLinkButton href="https://sgegoi.equatorialenergia.com.br/softexpert/login?" label="PORTAL SGE" />
                <SimpleLinkButton href="http://10.125.6.33/Citrix/celgWeb/" label="CITRIX RECEIVER - SSGA" />
              </div>
              <div>
                <SimpleLinkButton
                  href="http://citrix-eqtl.equatorial.corp/Citrix/EQTLPRDWeb/"
                  label="CITRIX WORKSPACE"
                />
                <SimpleLinkButton href="https://gedis.equatorialenergia.com.br" label="AXXION- Portal GeDis" />
                <SimpleLinkButton
                  href="http://10.125.9.154:8081/apex/f?p=118:LOGIN_DESKTOP:107169564854376"
                  label="FACIM"
                />
                <SimpleLinkButton
                  href="http://sistemassatelites.equatorial.corp:8081/sugop/login.xhtml"
                  label="SUGOP"
                />
                <SimpleLinkButton href="http://egospddotk01aw.equatorial.corp/osticket/scp/index.php" label="OsTIKET" />
                <SimpleLinkButton href="http://egospddotk01aw.equatorial.corp/osticket/open.php" label="OsTIKET enel" />
                <SimpleLinkButton
                  href="http://egospddavt01aw.equatorial.corp:8080/analise-modulos-web/Acesso/AcessoModulos.jsf"
                  label="SISTEMA DE ANALISE DE VIABILIDADE TECNICA – AVT."
                />
                <SimpleLinkButton
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=UUVNECctOUiHsoYmSlIQpQIvg32y3c5Chsn_t_G-67VUQ1lLOFBJWUNYN0xKTDFKQ0tFQVJZSzBLNy4u&origin=Invitation&channel=1"
                  label="Forms produtividade GC GO"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SubmenuLayout>
  )
}
