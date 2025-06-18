import Link from "next/link"
import {
  Zap,
  Wifi,
  Users,
  MessageCircle,
  MessageSquare,
  CheckSquare,
  Headset,
  Phone,
  BarChart,
  User,
  PhoneCall,
  Calculator,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const menuItems = [
  { id: 1, name: "Geração Distribuída", icon: <Zap className="h-8 w-8" />, href: "/geracao-distribuida" },
  { id: 2, name: "Telemedição", icon: <Wifi className="h-8 w-8" />, href: "/telemedicao" },
  { id: 3, name: "Grandes Clientes", icon: <Users className="h-8 w-8" />, href: "/grandes-clientes" },
  { id: 4, name: "Ouvidoria", icon: <MessageCircle className="h-8 w-8" />, href: "/ouvidoria" },
  { id: 5, name: "Reclame Aqui", icon: <MessageSquare className="h-8 w-8" />, href: "/reclame-aqui" },
  { id: 6, name: "Resolve", icon: <CheckSquare className="h-8 w-8" />, href: "/resolve" },
  { id: 7, name: "Suporte ao Credenciado", icon: <Headset className="h-8 w-8" />, href: "/suporte-credenciado" },
  { id: 8, name: "Telecom Comercial", icon: <Phone className="h-8 w-8" />, href: "/telecom-comercial" },
  { id: 9, name: "Massivo CSA", icon: <BarChart className="h-8 w-8" />, href: "/massivo-csa" },
  { id: 10, name: "Espaço do Atendente", icon: <User className="h-8 w-8" />, href: "/espaco-atendente" },
  { id: 11, name: "Telefones", icon: <PhoneCall className="h-8 w-8" />, href: "/telefones" },
  { id: 12, name: "Calculadora", icon: <Calculator className="h-8 w-8" />, href: "/calculadora" },
]

export default function MainMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="block"
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <Card className="h-full transition-all hover:shadow-lg hover:scale-105 hover:border-cyan-500 dark:hover:border-blue-400 group bg-white/90 dark:bg-blue-900/90 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-4 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold text-cyan-800 dark:text-cyan-200">{item.name}</h2>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
