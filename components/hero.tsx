import Image from "next/image"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Espacio seguro y confidencial
          </span>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            Atención Integral para tu Bienestar Emocional y Mental
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Acompañamos tu proceso con psicología individual, familiar e infantil. Un
            enfoque humano y profesional para cada etapa de tu vida, en modalidad
            presencial y en línea.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contacto">
                Agendar Consulta
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            {/* Asegúrate de que este href coincida con el id real de tu sección de servicios */}
            <Button asChild size="lg" variant="outline">
              <a href="#especialidades">Conocer Servicios</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
            <Image
              src="/consultorio.png"
              alt="Consultorio de psicología cómodo y acogedor con luz natural"
              width={720}
              height={720}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
            <p className="text-2xl font-semibold text-primary">+10 años</p>
            <p className="text-sm text-muted-foreground">acompañando personas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
