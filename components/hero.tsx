import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Users } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-emerald-50/40 via-white to-slate-50/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Columna de texto */}
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Espacio seguro y confidencial</span>
            </div>

            <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-[1.1]">
              Atención Integral para tu <span className="text-emerald-700">Bienestar Emocional</span> y Mental
            </h1>

            <p className="text-base text-slate-600 md:text-lg leading-relaxed">
              Acompañamos tu proceso con psicología individual, familiar e infantil. Un enfoque humano y profesional para cada etapa de tu vida, en modalidad presencial y en línea.
            </p>

            {/* Botones grandes sin iconos */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-medium shadow-lg shadow-emerald-700/25 transition-all">
                <a href="https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-medium transition-all shadow-sm">
                <Link href="#servicios">
                  Conocer Servicios
                </Link>
              </Button>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl">
              <div className="relative h-72 sm:h-80 w-full bg-slate-100">
                <Image
                  src="/hero-consultorio.jpg"
                  alt="Consultorio psicológico MediIntegral"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Tarjeta flotante original de +10 años */}
              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/20 bg-white/95 px-4 py-3 backdrop-blur-md shadow-lg flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">+10 Años</p>
                  <p className="text-[11px] text-slate-500">Acompañando personas hacia su bienestar</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 -z-10 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  )
}
