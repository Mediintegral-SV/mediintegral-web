import { Brain, Baby, Users, ClipboardCheck } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Psicología Clínica y Psicoterapia",
    audience: "Adultos",
    description:
      "Acompañamiento para ansiedad, depresión, estrés y crecimiento personal mediante procesos terapéuticos basados en evidencia.",
  },
  {
    icon: Baby,
    title: "Psicología Infantil y Adolescentes",
    audience: "Niños y jóvenes",
    description:
      "Apoyo especializado para el desarrollo emocional, conductual y escolar de niñas, niños y adolescentes.",
  },
  {
    icon: Users,
    title: "Terapia Familiar y de Pareja",
    audience: "Familias y parejas",
    description:
      "Fortalecemos la comunicación, resolvemos conflictos y construimos relaciones más sanas y funcionales.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluaciones Psicológicas Integrales",
    audience: "Todas las edades",
    description:
      "Valoraciones profesionales y diagnósticos precisos con informes claros para orientar cada intervención.",
  },
]

export function Services() {
  return (
    <section id="especialidades" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Especialidades
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
            Servicios pensados para cada necesidad
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Un equipo multidisciplinario listo para acompañarte en cada momento de tu
            vida.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-wide text-accent">
                  {service.audience}
                </span>
                <h3 className="text-lg font-semibold leading-snug text-foreground text-balance">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
