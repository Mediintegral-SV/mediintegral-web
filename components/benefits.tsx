import { HeartHandshake, Lock, Scale, Laptop } from "lucide-react"

const benefits = [
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    description: "Cada proceso se adapta a tus necesidades, ritmo y objetivos.",
  },
  {
    icon: Lock,
    title: "Confidencialidad",
    description: "Tu información y tu historia se manejan con total discreción.",
  },
  {
    icon: Scale,
    title: "Enfoque humano y ético",
    description: "Trabajamos con respeto, empatía y principios profesionales.",
  },
  {
    icon: Laptop,
    title: "Presencial y en línea",
    description: "Elige la modalidad que mejor se ajuste a tu día a día.",
  },
]

export function Benefits() {
  return (
    <section id="terapia" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            ¿Por qué elegirnos?
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
            Un acompañamiento en el que puedes confiar
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <benefit.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-foreground text-balance">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
