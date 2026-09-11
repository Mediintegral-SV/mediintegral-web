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
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        
        {/* Logo idéntico a la imagen corporativa */}
        <Link href="#inicio" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm">
            <HeartPulse className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <div className="flex items-baseline text-xl font-extrabold tracking-tight">
              <span className="text-foreground">MEDI</span>
              <span className="font-light text-muted-foreground ml-0.5">INTEGRAL</span>
            </div>
            <span className="text-[10px] tracking-wide text-muted-foreground uppercase font-medium">
              Donde su vida está más segura
            </span>
          </div>
        </Link>

        {/* Enlaces de navegación */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón de acción */}
        <div className="flex items-center gap-3">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm">
            <a href="#contacto">Agendar Cita</a>
          </Button>
        </div>

      </div>
    </header>
  )
}
