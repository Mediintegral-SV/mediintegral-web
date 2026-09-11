import Link from "next/link"
import { HeartPulse } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#terapia", label: "Terapia" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-blue-950 shadow-sm">
            <HeartPulse className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-blue-950">
            Medi<span className="text-primary font-bold">Integral</span>
          </span>
        </Link>

        {/* Enlaces de navegación con texto en azul marino */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-blue-900/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón de acción con los colores de la marca */}
        <div className="flex items-center gap-3">
          <Button asChild className="bg-primary text-blue-950 hover:bg-primary/90 font-semibold shadow-sm">
            <a href="#contacto">Agendar Cita</a>
          </Button>
        </div>

      </div>
    </header>
  )
}
