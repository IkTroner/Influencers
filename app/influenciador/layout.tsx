import type React from "react"
import { InfluencerSidebar } from "@/components/influencer-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function InfluencerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <InfluencerSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
