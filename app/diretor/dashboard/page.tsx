"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Target, DollarSign, TrendingUp, UserCheck, ArrowUpRight, FileSpreadsheet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MetricsChart } from "@/components/metrics-chart"
import { TopInfluencers } from "@/components/top-influencers"

export default function DiretorDashboard() {
  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="text-white" />
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard Diretor</h1>
              <p className="text-gray-400">Visão estratégica do negócio</p>
            </div>
          </div>
          <Button className="export-btn hover:opacity-90 text-white font-semibold">
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            Exportar Relatório
          </Button>
        </div>
      </header>

      <main className="p-6 space-y-6">
        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border-gray-700 card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total de Leads</CardTitle>
              <Target className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2,847</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +12.5% vs mês anterior
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Vendas Convertidas</CardTitle>
              <DollarSign className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">342</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +8.2% vs mês anterior
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Taxa de Conversão</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">12.0%</div>
              <div className="text-xs text-gray-400">Meta: 15%</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Influenciadores Ativos</CardTitle>
              <UserCheck className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">47</div>
              <div className="text-xs text-green-500">+3 novos este mês</div>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MetricsChart />
          <Card className="bg-gray-900 border-gray-700 card-border">
            <CardHeader>
              <CardTitle className="text-white">Receita Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gradient-orange mb-4">R$ 127.350,00</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Comissões pagas</span>
                  <span className="text-white">R$ 27.073,50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Receita líquida</span>
                  <span className="text-white">R$ 100.276,50</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <TopInfluencers />
      </main>
    </div>
  )
}
