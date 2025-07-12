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
import { BarChart3, Target, DollarSign, LogOut, LinkIcon, User, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Dashboard",
    url: "/influenciador/dashboard",
    icon: BarChart3,
  },
  {
    title: "Meus Leads",
    url: "/influenciador/leads",
    icon: Target,
  },
  {
    title: "Meus Links",
    url: "/influenciador/links",
    icon: LinkIcon,
  },
  {
    title: "Comissões",
    url: "/influenciador/comissoes",
    icon: DollarSign,
  },
  {
    title: "Performance",
    url: "/influenciador/performance",
    icon: TrendingUp,
  },
  {
    title: "Perfil",
    url: "/influenciador/perfil",
    icon: User,
  },
]

export function InfluencerSidebar() {
  return (
    <Sidebar className="bg-black border-gray-700 sidebar-content" style={{ zIndex: 40 }}>
      <SidebarHeader className="border-b border-gray-800 p-4">
        <div className="flex items-center gap-2">
          <Target className="h-8 w-8 text-orange-500" />
          <div>
            <h2 className="text-lg font-bold text-white">Next Academy</h2>
            <p className="text-xs text-gray-400">Influenciador</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider">Minha Área</SidebarGroupLabel>
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
