import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export function Hero() {
  const whatsappUrl = "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20consulta."

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Textos y botones de la izquierda */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-3.5 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Espacio seguro y confidencial
            </div>

            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl leading-[1.1]">
              Atención Integral para tu Bienestar Emocional y Mental
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              Acompañamos tu proceso con psicología individual, familiar e infantil. Un enfoque humano y profesional para cada etapa de tu vida, en modalidad presencial y en línea.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button asChild size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium shadow-lg">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                <a href="#servicios">
                  Conocer Servicios
                </a>
              </Button>
            </div>
          </div>

          {/* Imagen de la derecha (Aquí se mostrará tu foto del consultorio) */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="/hero-consultorio.jpg" // <--- Aquí busca el nombre del archivo que guardaste en public/
                alt="Consultorio psicológico acogedor y seguro en Medintegral"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Tarjeta flotante decorativa de años de experiencia */}
            <div className="absolute -bottom-6 -left-6 sm:left-4 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-lg">
                +10
              </div>
              <div className="text-xs font-semibold text-slate-800 leading-tight">
                Años <br />
                <span className="text-slate-500 font-normal">acompañando personas</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
