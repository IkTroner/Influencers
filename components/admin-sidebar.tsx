"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BarChart3, Users, Target, DollarSign, Settings, LogOut, TrendingUp, UserCheck, LinkIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: BarChart3,
  },
  {
    title: "Usuários",
    url: "/admin/usuarios",
    icon: Users,
  },
  {
    title: "Influenciadores",
    url: "/admin/influenciadores",
    icon: UserCheck,
  },
  {
    title: "Leads",
    url: "/admin/leads",
    icon: Target,
  },
  {
    title: "Links de Rastreamento",
    url: "/admin/links",
    icon: LinkIcon,
  },
  {
    title: "Métricas",
    url: "/admin/metricas",
    icon: TrendingUp,
  },
  {
    title: "Vendas",
    url: "/admin/vendas",
    icon: DollarSign,
  },
  {
    title: "Configurações",
    url: "/admin/configuracoes",
    icon: Settings,
  },
]

export function AdminSidebar() {
  return (
    <Sidebar className="bg-black border-gray-700 sidebar-content" style={{ zIndex: 40 }}>
      <SidebarHeader className="border-b border-gray-800 p-4">
        <div className="flex items-center gap-2">
          <Target className="h-8 w-8 text-orange-500" />
          <div>
            <h2 className="text-lg font-bold text-white">Next Academy</h2>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider">Gestão</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-white hover:bg-gray-800 hover:text-orange-500">
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-800 p-4">
        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800">
          <LogOut className="h-4 w-4 mr-2" />
          Sair
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
