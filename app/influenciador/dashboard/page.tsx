"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Target, DollarSign, TrendingUp, ArrowUpRight, Copy, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function InfluencerDashboard() {
  const influencerData = {
    name: "João Silva",
    totalLeads: 156,
    totalSales: 18,
    totalCommission: 1203.0,
    conversionRate: 11.5,
    thisMonthLeads: 42,
    thisMonthSales: 5,
    thisMonthCommission: 396.0,
  }

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-gray-800 p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-white" />
          <div>
            <h1 className="text-2xl font-bold text-white">Olá, {influencerData.name}!</h1>
            <p className="text-gray-400">Acompanhe sua performance e ganhos</p>
          </div>
        </div>
      </header>

      <main className="p-6 space-y-6">
        {/* Métricas Principais do Influenciador */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total de Leads</CardTitle>
              <Target className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{influencerData.totalLeads}</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />+{influencerData.thisMonthLeads} este mês
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Vendas Convertidas</CardTitle>
              <DollarSign className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{influencerData.totalSales}</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />+{influencerData.thisMonthSales} este mês
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Taxa de Conversão</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{influencerData.conversionRate}%</div>
              <Progress value={influencerData.conversionRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Comissões Totais</CardTitle>
              <DollarSign className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gradient-orange">
                R$ {influencerData.totalCommission.toFixed(2)}
              </div>
              <div className="text-xs text-gray-400">+R$ {influencerData.thisMonthCommission.toFixed(2)} este mês</div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Mensal */}
        <Card className="bg-gray-900 border-gray-700 card-border">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              Performance Mensal
            </CardTitle>
            <CardDescription className="text-gray-400">Acompanhe sua evolução mês a mês</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-white">42</div>
                <div className="text-sm text-gray-400">Leads este Mês</div>
                <div className="text-xs text-green-500">+23% vs mês anterior</div>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-sm text-gray-400">Vendas este Mês</div>
                <div className="text-xs text-green-500">+25% vs mês anterior</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg">
                <div className="text-2xl font-bold text-black">R$ 396,00</div>
                <div className="text-sm text-black/80">Comissão do Mês</div>
                <Badge variant="secondary" className="mt-2 bg-black/20 text-black">
                  Em processamento
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Links de Campanha */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Share2 className="h-5 w-5 text-orange-500" />
              Meus Links de Campanha
            </CardTitle>
            <CardDescription className="text-gray-400">
              Gerencie e compartilhe seus links únicos de rastreamento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex-1">
                <div className="text-white font-medium">Link Principal</div>
                <div className="text-sm text-gray-400 font-mono">
                  https://nextacademy.com/captacao?ref=joao_silva_001
                </div>
                <div className="text-xs text-gray-500 mt-1">142 cliques • 38 conversões</div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black bg-transparent"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copiar
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex-1">
                <div className="text-white font-medium">Instagram Stories</div>
                <div className="text-sm text-gray-400 font-mono">
                  https://nextacademy.com/captacao?ref=joao_silva_ig
                </div>
                <div className="text-xs text-gray-500 mt-1">89 cliques • 12 conversões</div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black bg-transparent"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copiar
              </Button>
            </div>

            <Button className="w-full gradient-orange hover:opacity-90 text-black font-semibold">
              <Share2 className="h-4 w-4 mr-2" />
              Criar Novo Link
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
