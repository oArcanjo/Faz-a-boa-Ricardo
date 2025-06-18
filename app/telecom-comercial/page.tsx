import { Phone, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubmenuLayout from "@/components/submenu-layout"
import SimpleLinkButton from "@/components/simple-link-button"

export default function TelecomComercialPage() {
  return (
    <SubmenuLayout title="Telecom Comercial" icon={<Phone className="h-6 w-6" />}>
      <Tabs defaultValue="acesso-rapido">
        <TabsList className="mb-4">
          <TabsTrigger value="acesso-rapido">Acesso Rápido</TabsTrigger>
          <TabsTrigger value="utilitarios-telecom">Utilitários Telecom</TabsTrigger>
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

        <TabsContent value="utilitarios-telecom">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-gold-500 flex items-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                Utilitários Telecom
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleLinkButton href="https://erp.equatorialtelecom.com.br/ui/login" label="Voalle" />
              <SimpleLinkButton
                href="https://auth.vtal.com/nidp/app/login?id=vtalclientescontractid&sid=0&option=credential&sid=0&target=https%3A%2F%2Fauth.vtal.com%2Fnidp%2Foauth%2Fnam%2Fauthz%3Fresponse_type%3Dcode%26client_id%3Dc4225f36-6a63-40ba-9596-e2b774a530b3%26scope%3DPCW%26state%3DSM0vVyao4dsWFOs9MCM3wmDsrWfaEgLFEN1gvnf3v_A%3D%26redirect_uri%3Dhttps%3A%2F%2Fportaloperacional.vtal.com.br%2Flogin%2Foauth2%2Fcode%2Foidc"
                label="Vtal"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SubmenuLayout>
  )
}
