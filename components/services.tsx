import { 
  Brain, 
  Smile, 
  Users, 
  FileText 
} from "lucide-react"

const services = [
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
    description: "Apoyo especializado para el desarrollo emocional, conductual y escolar de niños, niños y adolescentes.",
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

export function Services() {
  return (
    <section id="servicios" className="relative scroll-mt-16 py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Especialidades
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Servicios pensados para cada necesidad
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Un equipo multidisciplinario listo para acompañarte en cada momento de tu vida.
          </p>
        </div>

        {/* Cuadrícula de servicios */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600/80">
                    {service.category}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
