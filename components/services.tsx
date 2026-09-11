import { Brain, Smile, Users, FileText } from "lucide-react"

const specialties = [
  {
    icon: Brain,
    title: "Psicología Clínica y Psicoterapia",
    category: "ADULTOS",
    description: "Acompañamiento para ansiedad, depresión, estrés y crecimiento personal mediante procesos terapéuticos basados en evidencia.",
  },
  {
    icon: Smile,
    title: "Psicología Infantil y Adolescentes",
    category: "NIÑOS Y JÓVENES",
    description: "Apoyo especializado para el desarrollo emocional, conductual y escolar de niñas, niños y adolescentes.",
  },
  {
    icon: Users,
    title: "Terapia Familiar y de Pareja",
    category: "FAMILIAS Y PAREJAS",
    description: "Fortalecemos la comunicación, resolvemos conflictos y construimos relaciones más sanas y funcionales.",
  },
  {
    icon: FileText,
    title: "Evaluaciones Psicológicas Integrales",
    category: "TODAS LAS EDADES",
    description: "Valoraciones profesionales y diagnósticos precisos con informes claros para orientar cada intervención.",
  },
]

export function Specialties() {
  return (
    <section id="especialidades" className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-sky-50/80 via-blue-50/40 to-white border-b border-blue-100/60">
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Especialidades
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
            Servicios pensados para cada necesidad
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Un equipo multidisciplinario listo para acompañarte en cada momento de tu vida.
          </p>
        </div>

        {/* Cuadrícula de especialidades con tarjetas estilizadas sobre el fondo celeste */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="group flex flex-col p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-blue-100/80 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white mb-5">
                  <Icon className="h-6 w-6" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
                  {item.category}
                </span>

                <h3 className="text-lg font-bold text-blue-950 mb-2 leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
