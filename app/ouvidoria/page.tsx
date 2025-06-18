import { MessageCircle, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubmenuLayout from "@/components/submenu-layout"
import SimpleLinkButton from "@/components/simple-link-button"

export default function OuvidoriaPage() {
  return (
    <SubmenuLayout title="Ouvidoria" icon={<MessageCircle className="h-6 w-6" />}>
      <Tabs defaultValue="acesso-rapido">
        <TabsList className="mb-4">
          <TabsTrigger value="acesso-rapido">Acesso Rápido</TabsTrigger>
          <TabsTrigger value="utilitarios">Utilitários Ouv</TabsTrigger>
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
                Utilitários Ouv
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleLinkButton
                href="https://forms.office.com/pages/responsepage.aspx?id=UUVNECctOUiHsoYmSlIQpQIvg32y3c5Chsn_t_G-67VURDYwRTA4SkNLTVBBSUlVOUtGNUNYN0szVS4u&route=shorturl"
                label="Classificador OUV"
              />
              <SimpleLinkButton
                href="https://grupoequatorialenergia-my.sharepoint.com/personal/francisca_araujo_equatorialservicos_com_br/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Fgrupoequatorialenergia%2Dmy%2Esharepoint%2Ecom%2F%3Ax%3A%2Fr%2Fpersonal%2Ffrancisca%5Faraujo%5Fequatorialservicos%5Fcom%5Fbr%2F%5Flayouts%2F15%2FDoc%2Easpx%3Fsourcedoc%3D%257BC6043D20%2DDFF0%2D42AA%2D9C26%2D2A10E4AD8425%257D%26file%3DACOMPANHAMENTO%2520RECLAMA%2525u00c7%2525u00d5ES%2520OUVIDORIA%25202023%2Exlsx%26action%3Ddefault%26mobileredirect%3Dtrue%26isSPOFile%3D1%26xsdata%3DMDV8MDJ8fDExY2E5M2NiZWI4NzQwNjljMzVlMDhkZDgyODU5ZDg1fDEwNGQ0NTUxMmQyNzQ4Mzk4N2IyODYyNjRhNTIxMGE1fDB8MHw2Mzg4MTAyMzI1NDE1Mjg5MjZ8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPalk1TmpZek9XRXlMV1ZoTW1ZdE5ERm1aaTFpWkRZNExUWXlOR00xTmpjNFptTTJNVjloWW1RelpXUXdOQzB5Tm1Wa0xUUTJOamN0WVRnd1l5MHlaakkwWldKa01qWmtOR0pBZFc1eExtZGliQzV6Y0dGalpYTXZiV1Z6YzJGblpYTXZNVGMwTlRReU5qUTFNekV5T1E9PXxkZjA3NTNhYjc2YTA0YzRjNjEyMDA4ZGQ4Mjg1OWQ4M3xiNjI4Yjc1MTNjYmQ0MmZiOGUxOTVkYTI3Njk4OWMyMA%253D%253D%26sdata%3DdlRFUllZeXZCczRoaEVtWXdkQzFZcDh6UWFrU09SRVl2SVdUL3R0VHBTST0%253D%26ovuser%3D104d4551%2D2d27%2D4839%2D87b2%2D86264a5210a5%252Cwagno%2Elima%2540equatorialservicos%2Ecom%2Ebr%26OR%3DTeams%2DHL%26CT%3D1745428815667%26clickparams%3DeyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTAzMTMyMTAxOCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%253D%253D&correlation=6f5d97a1%2Df0b0%2D8000%2Dd551%2Dbb2c9cd63014&Type=item&name=8095689a%2Da7b8%2D4a45%2D9b84%2Daa038f7fa7ba&listItemId=318&listItemUniqueId=c6043d20%2Ddff0%2D42aa%2D9c26%2D2a10e4ad8425"
                label="Acompanhamento de Reclamações"
              />
              <SimpleLinkButton href="https://equatorial.omd.com.br/" label="OMD" />
              <SimpleLinkButton
                href="https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html"
                label="OMD CSA"
              />
              <SimpleLinkButton href="https://equatorialenergia.etadirect.com/" label="SIGA" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SubmenuLayout>
  )
}
