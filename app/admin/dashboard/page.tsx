"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Target, DollarSign, TrendingUp, UserCheck, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { MetricsChart } from "@/components/metrics-chart"
import { RecentLeads } from "@/components/recent-leads"
import { TopInfluencers } from "@/components/top-influencers"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-gray-800 p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-white" />
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard Admin</h1>
            <p className="text-gray-400">Visão geral do sistema</p>
          </div>
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
              <div className="flex items-center text-xs text-red-500">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                -2.1% vs mês anterior
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Influenciadores Ativos</CardTitle>
              <UserCheck className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">47</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +3 novos este mês
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comissões Totais */}
        <Card className="bg-gray-900 border-gray-700 card-border">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-orange-500" />
              Comissões Totais do Mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-orange">R$ 1.423,50</div>
                <div className="text-sm text-gray-400">Comissões por Leads</div>
                <div className="text-xs text-gray-500">2.847 leads × R$ 0,50</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-orange">R$ 25.650,00</div>
                <div className="text-sm text-gray-400">Comissões por Vendas</div>
                <div className="text-xs text-gray-500">342 vendas × R$ 75,00</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-orange">R$ 27.073,50</div>
                <div className="text-sm text-gray-400">Total Geral</div>
                <div className="text-xs text-green-500">+15.3% vs mês anterior</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gráficos e Tabelas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MetricsChart />
          <RecentLeads />
        </div>

        <TopInfluencers />
      </main>
    </div>
  )
}
