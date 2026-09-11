import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Columna de Texto */}
          <div className="flex flex-col items-start lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" />
              <span>Espacio seguro y confidencial</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl text-balance">
              Atención Integral para tu Bienestar Emocional y Mental
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Acompañamos tu proceso con psicología individual, familiar e infantil. Un enfoque humano y profesional para cada etapa de tu vida, en modalidad presencial y en línea.
            </p>

            {/* Botones mejorados y más amplios */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="gap-2 px-8 py-6 text-base shadow-md">
                <a href="#contacto">
                  Agendar Consulta
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base">
                <a href="#especialidades">Conocer Servicios</a>
              </Button>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl shadow-xl lg:max-w-none">
              <Image
                src="/hero-img.jpg"
                alt="Consultorio psicológico acogedor y seguro en MediIntegral"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Insignia flotante */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg">
                +10
              </div>
              <div>
                <p className="font-semibold text-foreground">Años</p>
                <p className="text-xs text-muted-foreground">acompañando personas</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
