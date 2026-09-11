import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { MissionVision } from "@/components/mission-vision" // <--- Importamos la nueva sección
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { FloatingContact } from "@/components/floating-contact"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <Team />          {/* 1. Primero los Licenciados */}
        <MissionVision /> {/* 2. Debajo la Misión, Visión y Valores */}
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  )
}
