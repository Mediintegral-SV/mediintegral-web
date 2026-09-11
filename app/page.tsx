import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Benefits } from "@/components/benefits"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { FloatingContact } from "@/components/floating-contact" // <--- 1. Importas el botón flotante

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <Benefits />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
      
      {/* 2. Lo colocas aquí para que flote sobre toda la página sin estorbar */}
      <FloatingContact />
    </div>
  )
}
