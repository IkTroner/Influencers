import { redirect } from "next/navigation"

export default function HomePage() {
  // Simular redirecionamento baseado em autenticação
  redirect("/login")
}
