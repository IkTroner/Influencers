"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, TrendingUp, Target, DollarSign } from "lucide-react"

export function TopInfluencers() {
  const topInfluencers = [
    {
      id: 1,
      name: "João Silva",
      leads: 156,
      sales: 18,
      commission: 1428.0,
      conversionRate: 11.5,
      rank: 1,
    },
    {
      id: 2,
      name: "Ana Costa",
      leads: 142,
      sales: 16,
      commission: 1271.0,
      conversionRate: 11.3,
      rank: 2,
    },
    {
      id: 3,
      name: "Carlos Lima",
      leads: 134,
      sales: 14,
      commission: 1117.0,
      conversionRate: 10.4,
      rank: 3,
    },
    {
      id: 4,
      name: "Maria Santos",
      leads: 128,
      sales: 13,
      commission: 1039.0,
      conversionRate: 10.2,
      rank: 4,
    },
    {
      id: 5,
      name: "Pedro Oliveira",
      leads: 119,
      sales: 12,
      commission: 959.5,
      conversionRate: 10.1,
      rank: 5,
    },
  ]

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-4 w-4 text-yellow-500" />
    if (rank === 2) return <Crown className="h-4 w-4 text-gray-400" />
    if (rank === 3) return <Crown className="h-4 w-4 text-orange-600" />
    return <span className="text-gray-500 font-bold">#{rank}</span>
  }

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "bg-yellow-500 text-black"
    if (rank === 2) return "bg-gray-400 text-black"
    if (rank === 3) return "bg-orange-600 text-white"
    return "bg-gray-600 text-white"
  }

  return (
    <Card className="bg-gray-900 border-gray-700 card-border">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-orange-500" />
          Top 5 Influenciadores do Mês
        </CardTitle>
        <CardDescription className="text-gray-400">Ranking baseado em performance e comissões geradas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topInfluencers.map((influencer) => (
            <div key={influencer.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {getRankIcon(influencer.rank)}
                  <Badge className={getRankBadge(influencer.rank)}>#{influencer.rank}</Badge>
                </div>
                <div>
                  <div className="font-medium text-white">{influencer.name}</div>
                  <div className="text-sm text-gray-400">{influencer.conversionRate}% de conversão</div>
                </div>
              </div>

              <div className="flex gap-6 text-right">
                <div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Target className="h-3 w-3" />
                    Leads
                  </div>
                  <div className="font-bold text-white">{influencer.leads}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <TrendingUp className="h-3 w-3" />
                    Vendas
                  </div>
                  <div className="font-bold text-white">{influencer.sales}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <DollarSign className="h-3 w-3" />
                    Comissão
                  </div>
                  <div className="font-bold text-gradient-orange">R$ {influencer.commission.toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
