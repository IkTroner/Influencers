"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileSpreadsheet, Search, Filter, Download, Eye } from "lucide-react"

export default function DiretorLeads() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todos")
  const [influencerFilter, setInfluencerFilter] = useState("todos")

  const leads = [
    {
      id: 1,
      name: "Maria Silva",
      email: "maria@email.com",
      phone: "(11) 99999-1234",
      influencer: "João Silva",
      status: "Novo",
      date: "2024-01-15",
      source: "Instagram",
      converted: false,
    },
    {
      id: 2,
      name: "Pedro Santos",
      email: "pedro@email.com",
      phone: "(11) 99999-5678",
      influencer: "Ana Costa",
      status: "Contatado",
      date: "2024-01-15",
      source: "WhatsApp",
      converted: false,
    },
    {
      id: 3,
      name: "Julia Oliveira",
      email: "julia@email.com",
      phone: "(11) 99999-9012",
      influencer: "Carlos Lima",
      status: "Qualificado",
      date: "2024-01-14",
      source: "Facebook",
      converted: false,
    },
    {
      id: 4,
      name: "Roberto Costa",
      email: "roberto@email.com",
      phone: "(11) 99999-3456",
      influencer: "João Silva",
      status: "Convertido",
      date: "2024-01-14",
      source: "Instagram",
      converted: true,
    },
    {
      id: 5,
      name: "Ana Beatriz",
      email: "ana@email.com",
      phone: "(11) 99999-7890",
      influencer: "Maria Santos",
      status: "Novo",
      date: "2024-01-13",
      source: "TikTok",
      converted: false,
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

  const exportToExcel = () => {
    // Simular exportação para Excel
    alert("Exportando para Excel...")
  }

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "todos" || lead.status === statusFilter
    const matchesInfluencer = influencerFilter === "todos" || lead.influencer === influencerFilter

    return matchesSearch && matchesStatus && matchesInfluencer
  })

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="text-white" />
            <div>
              <h1 className="text-2xl font-bold text-white">Todos os Leads</h1>
              <p className="text-gray-400">Gerencie e exporte todos os leads captados</p>
            </div>
          </div>
          <Button onClick={exportToExcel} className="export-btn hover:opacity-90 text-white font-semibold">
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            Exportar Excel
          </Button>
        </div>
      </header>

      <main className="p-6 space-y-6">
        {/* Filtros */}
        <Card className="bg-gray-900 border-gray-700 card-border">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Filter className="h-5 w-5 text-orange-500" />
              Filtros
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar por nome ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-600 text-white"
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="todos">Todos os Status</SelectItem>
                  <SelectItem value="Novo">Novo</SelectItem>
                  <SelectItem value="Contatado">Contatado</SelectItem>
                  <SelectItem value="Qualificado">Qualificado</SelectItem>
                  <SelectItem value="Convertido">Convertido</SelectItem>
                </SelectContent>
              </Select>

              <Select value={influencerFilter} onValueChange={setInfluencerFilter}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Influenciador" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="todos">Todos os Influenciadores</SelectItem>
                  <SelectItem value="João Silva">João Silva</SelectItem>
                  <SelectItem value="Ana Costa">Ana Costa</SelectItem>
                  <SelectItem value="Carlos Lima">Carlos Lima</SelectItem>
                  <SelectItem value="Maria Santos">Maria Santos</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Exportar Filtrados
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabela de Leads */}
        <Card className="bg-gray-900 border-gray-700 card-border">
          <CardHeader>
            <CardTitle className="text-white">Lista de Leads ({filteredLeads.length} encontrados)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left text-gray-400 font-medium py-3">Nome</th>
                    <th className="text-left text-gray-400 font-medium py-3">Contato</th>
                    <th className="text-left text-gray-400 font-medium py-3">Influenciador</th>
                    <th className="text-left text-gray-400 font-medium py-3">Status</th>
                    <th className="text-left text-gray-400 font-medium py-3">Fonte</th>
                    <th className="text-left text-gray-400 font-medium py-3">Data</th>
                    <th className="text-left text-gray-400 font-medium py-3">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="py-4">
                        <div className="text-white font-medium">{lead.name}</div>
                      </td>
                      <td className="py-4">
                        <div className="text-gray-300">{lead.email}</div>
                        <div className="text-gray-400 text-sm">{lead.phone}</div>
                      </td>
                      <td className="py-4">
                        <div className="text-gray-300">{lead.influencer}</div>
                      </td>
                      <td className="py-4">
                        <Badge className={`${getStatusColor(lead.status)} text-white`}>{lead.status}</Badge>
                      </td>
                      <td className="py-4">
                        <div className="text-gray-300">{lead.source}</div>
                      </td>
                      <td className="py-4">
                        <div className="text-gray-300">{lead.date}</div>
                      </td>
                      <td className="py-4">
                        <Button size="sm" variant="ghost" className="text-orange-500 hover:bg-orange-500/10">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
