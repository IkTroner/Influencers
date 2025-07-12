import type React from "react"
import { DiretorSidebar } from "@/components/diretor-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function DiretorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DiretorSidebar />
      <SidebarInset className="main-content">{children}</SidebarInset>
    </SidebarProvider>
  )
}
