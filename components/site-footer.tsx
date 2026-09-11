import Link from "next/link"
import { HeartPulse, MessageCircle } from "lucide-react"

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
              {/* Instagram SVG */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.75V8z"/>
                </svg>
              </a>

              {/* WhatsApp (con Lucide que ya está instalado) */}
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
