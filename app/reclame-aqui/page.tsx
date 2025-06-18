import { MessageSquare, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubmenuLayout from "@/components/submenu-layout"
import SimpleLinkButton from "@/components/simple-link-button"

export default function ReclameAquiPage() {
  return (
    <SubmenuLayout title="Reclame Aqui" icon={<MessageSquare className="h-6 w-6" />}>
      <Tabs defaultValue="acesso-rapido">
        <TabsList className="mb-4">
          <TabsTrigger value="acesso-rapido">Acesso Rápido</TabsTrigger>
          <TabsTrigger value="utilitarios">Utilitários Reclame Aqui!</TabsTrigger>
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
                Utilitários Reclame Aqui!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleLinkButton
                href="https://grupoequatorialenergia-my.sharepoint.com/personal/francisca_araujo_equatorialservicos_com_br/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Fgrupoequatorialenergia%2Dmy%2Esharepoint%2Ecom%2F%3Ax%3A%2Fr%2Fpersonal%2Ffrancisca%5Faraujo%5Fequatorialservicos%5Fcom%5Fbr%2F%5Flayouts%2F15%2FDoc%2Easpx%3Fsourcedoc%3D%257BBBE45439%2DA38D%2D4BFD%2DB4F9%2DE106D082B476%257D%26file%3DACOMPANHAMENTO%2520RECLAME%2520AQUI%25202025%2D%2520ATUAL%2Exlsx%26action%3Ddefault%26mobileredirect%3Dtrue%26DefaultItemOpen%3D1%26isSPOFile%3D1%26xsdata%3DMDV8MDJ8fDJmZWYwMzMyODdjMTRlZjBiNGViMDhkZGFlN2Y2MWVifDEwNGQ0NTUxMmQyNzQ4Mzk4N2IyODYyNjRhNTIxMGE1fDB8MHw2Mzg4NTg1ODQyODMzOTUzMDd8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T21GaVpETmxaREEwTFRJMlpXUXRORFkyTnkxaE9EQmpMVEptTWpSbFltUXlObVEwWWw5bU1qRTVNbVJtWXkwM1lXSTNMVFF5WlRBdE9HSXlZaTFsWldJeFlqTXdZV0UxTldOQWRXNXhMbWRpYkM1emNHRmpaWE12YldWemMyRm5aWE12TVRjMU1ESTJNVFl5TnpFNE53PT18ZDVlN2IzODI2ZGRhNDlmZDUyOTEwOGRkYWU3ZjYxZTl8YTY1ZDY2NmRiODZjNGFlZjliYjUwZGEzNDViMGMwOGU%253D%26sdata%3DZW5sbWZONUpWYk91aCtlTzl0ZHB0S1BCSlBPSWZZZWdRR1BNbGZBdTFFTT0%253D%26ovuser%3D104d4551%2D2d27%2D4839%2D87b2%2D86264a5210a5%252Cwagno%2Elima%2540equatorialservicos%2Ecom%2Ebr%26OR%3DTeams%2DHL%26CT%3D1750261991631%26clickparams%3DeyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTA1MTgwMDIxOSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%253D%253D&correlation=c15ea9a1%2D20f5%2D9000%2D1d54%2Df6d80fefb28a&Type=item&name=8095689a%2Da7b8%2D4a45%2D9b84%2Daa038f7fa7ba&listItemId=1287&listItemUniqueId=bbe45439%2Da38d%2D4bfd%2Db4f9%2De106d082b476"
                label="Acompanhamento Rec Aqui"
              />
              <SimpleLinkButton
                href="https://grupoequatorialenergia-my.sharepoint.com/personal/soraia_martins_equatorialenergia_com_br/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Fgrupoequatorialenergia%2Dmy%2Esharepoint%2Ecom%2F%3Aw%3A%2Fr%2Fpersonal%2Fsoraia%5Fmartins%5Fequatorialenergia%5Fcom%5Fbr%2FDocuments%2FArquivos%20de%20Chat%20do%20Microsoft%20Teams%2FModelos%20de%20Resposta%20Padr%C3%A3o%20%2D%202025%2Edocx%3Fd%3Dw4a378acb3330449da5dec54feb6eeadc%26csf%3D1%26web%3D1%26e%3DU2qbOO%26isSPOFile%3D1%26xsdata%3DMDV8MDJ8fDA3MmRiNjg3YmQ0NTRlNjE3YmI5MDhkZGFlN2ZhNDA1fDEwNGQ0NTUxMmQyNzQ4Mzk4N2IyODYyNjRhNTIxMGE1fDB8MHw2Mzg4NTg1ODUzOTIzODA4NTd8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T21GaVpETmxaREEwTFRJMlpXUXRORFkyTnkxaE9EQmpMVEptTWpSbFltUXlObVEwWWw5bU1qRTVNbVJtWXkwM1lXSTNMVFF5WlRBdE9HSXlZaTFsWldJeFlqTXdZV0UxTldOQWRXNXhMbWRpYkM1emNHRmpaWE12YldWemMyRm5aWE12TVRjMU1ESTJNVGN6T0RJNE9BPT18NmE1YTZiNDgzMWI4NGE0MTdiYjkwOGRkYWU3ZmE0MDV8YjY0ZDhlNDJhNmE2NDE0NjllMzU3MDM4Zjc4NDk0MjE%253D%26sdata%3DWW5EZ2xnZ2JQN2VKMk1tMGRTeTBYeGlwVEFMeXA3UU16ejJ1RGtNd28rUT0%253D%26ovuser%3D104d4551%2D2d27%2D4839%2D87b2%2D86264a5210a5%252Cwagno%2Elima%2540equatorialservicos%2Ecom%2Ebr%26OR%3DTeams%2DHL%26CT%3D1750262023708%26clickparams%3DeyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTA1MTgwMDIxOSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%253D%253D&correlation=c95ea9a1%2De0c9%2D9000%2D1d02%2D353abcd1c1ab&Type=item&name=b90836a9%2Dfe85%2D4062%2Daec7%2D0f14ef0d8606&listItemId=574&listItemUniqueId=4a378acb%2D3330%2D449d%2Da5de%2Dc54feb6eeadc"
                label="Textos Rec Aqui"
              />
              <SimpleLinkButton
                href="https://forms.office.com/pages/responsepage.aspx?id=UUVNECctOUiHsoYmSlIQpQIvg32y3c5Chsn_t_G-67VUNlBRSjNRWUFSVjY0T0NFM0o1M1RGTjcxQi4u&route=shorturl"
                label="Central Rec Aqui"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SubmenuLayout>
  )
}
