"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export function MetricsChart() {
  const data = [
    { month: "Jan", leads: 180, sales: 22 },
    { month: "Fev", leads: 220, sales: 28 },
    { month: "Mar", leads: 190, sales: 24 },
    { month: "Abr", leads: 280, sales: 35 },
    { month: "Mai", leads: 320, sales: 42 },
    { month: "Jun", leads: 290, sales: 38 },
  ]

  const maxValue = Math.max(...data.map((d) => Math.max(d.leads, d.sales)))

  return (
    <Card className="bg-gray-900 border-gray-700 card-border">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-orange-500" />
          Performance dos Últimos 6 Meses
        </CardTitle>
        <CardDescription className="text-gray-400">Leads captados vs Vendas convertidas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{item.month}</span>
                <div className="flex gap-4">
                  <span className="text-blue-400">{item.leads} leads</span>
                  <span className="text-orange-500">{item.sales} vendas</span>
                </div>
              </div>
              <div className="flex gap-2 h-2">
                <div className="bg-blue-500 rounded" style={{ width: `${(item.leads / maxValue) * 100}%` }} />
                <div className="bg-orange-500 rounded" style={{ width: `${(item.sales / maxValue) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
