import Link from "next/link"
import { HeartPulse } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Especialidades" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        
        {/* Logo corporativo */}
        <Link href="#inicio" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 shadow-sm">
            <HeartPulse className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <div className="flex items-baseline text-xl font-extrabold tracking-tight">
              <span className="text-slate-900">MEDI</span>
              <span className="font-light text-cyan-700 ml-0.5">INTEGRAL</span>
            </div>
            <span className="text-[10px] tracking-wide text-slate-500 uppercase font-medium">
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
              className="text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón de acción */}
        <div className="flex items-center gap-3">
          <Button asChild className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold shadow-md shadow-cyan-700/20 rounded-xl transition-all">
            <a href="#contacto">Agendar Cita</a>
          </Button>
        </div>

      </div>
    </header>
  )
}
