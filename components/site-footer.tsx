import Link from "next/link"
import { HeartPulse, Instagram, Facebook, MessageCircle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-slate-100 text-slate-600">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        
        {/* Contenido principal del footer en Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          
          {/* Columna 1: Logo y descripción */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <HeartPulse className="h-5 w-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-slate-900">
                Medi<span className="text-emerald-700">Integral</span>
              </span>
            </Link>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-xs">
              Centro de Atención Integral y Psicología. Cuidamos tu bienestar emocional y mental con un enfoque humano.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#inicio" className="hover:text-emerald-700 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-emerald-700 transition-colors">
                  Especialidades
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="hover:text-emerald-700 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-emerald-700 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales / Síguenos */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">
              Síguenos
            </h3>
            <p className="text-xs text-slate-500">
              Conéctate con nosotros en nuestras redes sociales.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://wa.me/50375687614" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Línea inferior y Copyright */}
        <div className="mt-12 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          <p>© 2026 MediIntegral. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  )
}
