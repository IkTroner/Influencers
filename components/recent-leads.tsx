"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Clock } from "lucide-react"

export function RecentLeads() {
  const recentLeads = [
    {
      id: 1,
      name: "Maria Silva",
      email: "maria@email.com",
      phone: "(11) 99999-1234",
      influencer: "João Silva",
      status: "Novo",
      time: "2 min atrás",
    },
    {
      id: 2,
      name: "Pedro Santos",
      email: "pedro@email.com",
      phone: "(11) 99999-5678",
      influencer: "Ana Costa",
      status: "Contatado",
      time: "15 min atrás",
    },
    {
      id: 3,
      name: "Julia Oliveira",
      email: "julia@email.com",
      phone: "(11) 99999-9012",
      influencer: "Carlos Lima",
      status: "Qualificado",
      time: "1h atrás",
    },
    {
      id: 4,
      name: "Roberto Costa",
      email: "roberto@email.com",
      phone: "(11) 99999-3456",
      influencer: "João Silva",
      status: "Convertido",
      time: "2h atrás",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Novo":
        return "bg-blue-500"
      case "Contatado":
        return "bg-yellow-500"
      case "Qualificado":
        return "bg-purple-500"
      case "Convertido":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="bg-gray-900 border-gray-700 card-border">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Target className="h-5 w-5 text-orange-500" />
          Leads Recentes
        </CardTitle>
        <CardDescription className="text-gray-400">Últimos leads captados na plataforma</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentLeads.map((lead) => (
            <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <div className="flex-1">
                <div className="font-medium text-white">{lead.name}</div>
                <div className="text-sm text-gray-400">{lead.email}</div>
                <div className="text-xs text-gray-500">via {lead.influencer}</div>
              </div>
              <div className="text-right space-y-1">
                <Badge className={`${getStatusColor(lead.status)} text-white`}>{lead.status}</Badge>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {lead.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
